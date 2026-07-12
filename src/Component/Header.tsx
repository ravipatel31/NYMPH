import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  {
    value: "about",
    label: "About Us"
  }, {
    value: 'services',
    label: "Services"
  },
  {
    value: 'global expansion',
    label: 'Global Expansion'
  },
  {
    value: "trainig & workshop",
    label: "Training & Workshop"
  }, {
    value: "contact",
    label: "Contact Us"
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedMenue, setSelectedMenue] = useState<string>("/")
  const location = useLocation()
  const navigate = useNavigate()


  useEffect(() => {
    const currentPath = location.pathname.replace("/", "");
    const active = menuItems.find((item) => item.value === currentPath);
    setSelectedMenue(active ? active.value : "");
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // avoid micro flicker
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false); // scroll down
      } else {
        setShowHeader(true); // scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AppBar
        position="fixed"
        data-aos="fade-bottom"
        // sx={{ bgcolor: 'transparent' }}
        sx={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: 'transparent !important',
          // background: darkTheme ? "black" : "white",
          px: 1,

          position: "fixed",
          top: 0,
          left: 0,
          // width: "100%",
          zIndex: 999,

          transform: showHeader ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",

          backdropFilter: "blur(8px)",
        }}
        elevation={0}
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters sx={{ height: 70 }}>
            <Typography
              className="fw-bold"
              variant="h6"
              onClick={() => {
                      navigate(`/`);
                    }}
            >
              NYMPH
            </Typography>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 4,
                mx: "auto",
              }}
            >
              {menuItems.map((item: { label: string, value: string }, index: number) => {
                const isActive = selectedMenue === item?.value;
                return (
                  <Typography
                    // className="menue-item fs-16"
                    key={index}
                    onClick={() => {
                      setSelectedMenue(item.value);
                      navigate(`/${item.value}`);
                    }}
                     className={`${isActive ? "text-main border-bottom-gradient-main" : ""} menue-item fs-16 pb-2`}
                  >
                    {item.label}
                  </Typography>
                )
              })}
            </Box>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                variant="contained"
                className="btn-main"
              >
                Get Started
              </Button>
            </Box>

            <Box sx={{ ml: "auto", display: { xs: "block", md: "none" } }}>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon className="text-white" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}

      >
        <Box sx={{ width: 280 }} className='bg-main d-flex flex-column p-2 h-100' >
          <List sx={{ flex: 1 }}>
            {menuItems.map((item: { value: string, label: string }, index: number) => {
              const isActive = selectedMenue === item?.value;
              return (
                <ListItemButton
                  key={index}
                  onClick={() => {
                    setOpen(false)
                    setSelectedMenue(item.value);
                    navigate(`/${item.value}`);
                  }}
                  sx={{ borderBottom: "1px solid #FFFFFF1A" }}
                  className={`${isActive ? "text-main" : ""}`}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              )
            }
            )}

            {/* <Box sx={{ p: 2 }}> */}
            {/* </Box> */}
          </List>
          <Button
            fullWidth
            variant="contained"
            className="btn-main">
            Get Started
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;