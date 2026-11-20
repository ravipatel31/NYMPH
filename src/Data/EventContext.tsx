import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import {
    SeminarEvent,
    getEventById,
    getUpcomingEvents,
} from "./EventData";

/**
 * Events come from the backend API. Relative URL on purpose:
 *  - production: https://nymphinternational.com/api/... (proxied by .htaccess)
 *  - local dev:  CRA forwards /api to the "proxy" set in package.json
 * Set REACT_APP_API_URL only if the API lives on another host.
 */
const API_BASE = process.env.REACT_APP_API_URL || "/api/v1/manage/event";

interface EventsState {
    events: SeminarEvent[];
    loading: boolean;
    error: string | null;
    reload: () => void;
}

const EventsContext = createContext<EventsState | undefined>(undefined);

/** Makes sure numbers are numbers even if the API ever returns DECIMALs as strings. */
const normalise = (e: SeminarEvent): SeminarEvent => ({
    ...e,
    days: Number(e.days) as SeminarEvent["days"],
    price: Number(e.price),
    groupPrice: Number(e.groupPrice),
    groupMinSize: Number(e.groupMinSize),
    venueName: e.venueName ?? null,
    venueAddress: e.venueAddress ?? null,
});

export function EventsProvider({ children }: { children: ReactNode }) {
    const [events, setEvents] = useState<SeminarEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        fetch(`${API_BASE}/get-events?limit=500`, { signal: controller.signal })
            .then((res) => {
                if (!res.ok) throw new Error(`Request failed (${res.status})`);
                return res.json();
            })
            .then((json) => {
                if (!json || json.status !== true || !Array.isArray(json.data)) {
                    throw new Error(json?.message || "Unexpected response");
                }
                setEvents((json.data as SeminarEvent[]).map(normalise));
                setError(null);
            })
            .catch((err: Error) => {
                if (err.name === "AbortError") return;
                setError(err.message || "Could not load events");
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false);
            });

        return () => controller.abort();
    }, [attempt]);

    const reload = useCallback(() => setAttempt((n) => n + 1), []);

    const value = useMemo(
        () => ({ events, loading, error, reload }),
        [events, loading, error, reload],
    );

    return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
}

function useEventsContext(): EventsState {
    const ctx = useContext(EventsContext);
    if (!ctx) throw new Error("useEvents hooks must be used inside <EventsProvider>");
    return ctx;
}

/** All events from the API (including past ones), sorted by start date. */
export const useEvents = () => useEventsContext();

/** Events that have not finished yet, soonest first. */
export function useUpcomingEvents() {
    const { events, loading, error, reload } = useEventsContext();
    const upcoming = useMemo(() => getUpcomingEvents(events), [events]);
    return { events: upcoming, loading, error, reload };
}

/** One event by id (undefined while loading, or when the id does not exist). */
export function useEventById(eventId?: string) {
    const { events, loading, error, reload } = useEventsContext();
    const event = useMemo(() => getEventById(events, eventId), [events, eventId]);
    return { event, loading, error, reload };
}