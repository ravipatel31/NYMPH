import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Typography from "@mui/material/Typography";

interface CounterProps {
  end: number;
  suffix?: string;
  variant?: any;
  className?: string;
}

const Counter = ({
  end,
  suffix = "",
  variant = "h4",
  className = "",
}: CounterProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Typography
      ref={ref}
      variant={variant}
      className={className}
    >
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={1.5}
          separator=","
        />
      ) : (
        0
      )}
      {suffix}
    </Typography>
  );
};

export default Counter;