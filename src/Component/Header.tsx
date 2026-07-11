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

const menuItems = [
  "About Us",
  "Services",
  "Global Expansion",
  "Training & Workshop",
  "Contact Us",
];

function Header() {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  console.log("Scorell Y", window.scrollY, lastScrollY)

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
            background:'transparent',
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
              {menuItems.map((item) => (
                <Typography
                  className="menue-item fs-16"
                  key={item}
                >
                  {item}
                </Typography>
              ))}
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
                <MenuIcon />
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
        <Box sx={{ width: 280, mt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            ))}

            {/* <Box sx={{ p: 2 }}> */}
            <Button
              fullWidth
              variant="contained"
              className="btn-main">
              Get Started
            </Button>
            {/* </Box> */}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;