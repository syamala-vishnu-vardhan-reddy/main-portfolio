import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import { Divider, Grid } from "@mui/material";
import Contact from "./components/Contact";

const dividerStyle = {
  width: "100%",
  backgroundColor: "#292c2e",
  margin: "5rem 0",
};
export default function PrimarySearchAppBar() {
  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "transparent", maxWidth: "inherit" }}
      >
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography
                variant="h5"
                style={{ cursor: "pointer" }}
                noWrap
                color="primary"
                component="div"
              >
                <IconButton>
                  <CodeIcon color="secondary" fontSize="large" />
                </IconButton>
                SYAMALA VISHNU VARDHAN REDDY
              </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Box>
                <IconButton
                  size="large"
                  color="inherit"
                  href="https://www.linkedin.com/in/vishnu-syamala-8b12972ba/"
                  target="_blank"
                >
                  <LinkedInIcon color="primary" />
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  href="https://github.com/syamala-vishnu-vardhan-reddy/"
                  target="_blank"
                >
                  <GitHubIcon color="primary" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div style={{ padding: "0 0 0 2rem", marginTop: "8rem" }}>
        <Hero />

        <Divider component="div" style={dividerStyle} />
        <About />

        <Divider component="div" style={dividerStyle} />

        <Technologies />

        <Divider component="div" style={dividerStyle} />
        <Projects />

        <Divider component="div" style={dividerStyle} />
        <Contact />
      </div>
    </>
  );
}
