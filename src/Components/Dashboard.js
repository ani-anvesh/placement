import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Graph from "./Graphs/Graph";
import "./dashboard.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 430,
    width: "100%",
    margin: "0vh 0vh 5vh 0vh",
  },
  formControl: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  flexer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [field, setState] = React.useState({
    college: null,
    year: null,
    branch: null,
    section: null,
  });
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const updateField = (e) => {
    e.preventDefault();
    setState({
      ...field,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
        color="initial"
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <div
              style={{
                height: "34vh",
                backgroundColor: "red",
                width: "100%",
              }}
            ></div>
          </Grid>
        </Grid>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              style={{ margin: "0vh 0vh 7vh 0vh" }}
            >
              <Paper
                elevation={1}
                style={{ height: "45vh", width: "100%", marginTop: "-16vh" }}
              ></Paper>
            </Grid>
            <Grid container spacing={3} style={{ margin: "0vh 0vh 3vh 0vh" }}>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    college
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="college"
                    value={field.college}
                    onChange={updateField}
                    label="college"
                  >
                    <MenuItem value={null}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"VCE"}>VCE</MenuItem>
                    <MenuItem value={"VEC"}>VEC</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="year"
                    value={field.year}
                    onChange={updateField}
                    label="year"
                  >
                    <MenuItem value={null}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Third"}>3rd</MenuItem>
                    <MenuItem value={"Fourth"}>4th</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Branch
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="branch"
                    value={field.branch}
                    onChange={updateField}
                    label="branch"
                  >
                    <MenuItem value={null}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"ECE"}>ECE</MenuItem>
                    <MenuItem value={"CSE"}>CSE</MenuItem>
                    <MenuItem value={"EEE"}>EEE</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Section
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="section"
                    value={field.section}
                    onChange={updateField}
                    label="section"
                  >
                    <MenuItem value={null}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"A"}>A</MenuItem>
                    <MenuItem value={"B"}>B</MenuItem>
                    <MenuItem value={"C"}>C</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <Graph
                  college={field.college}
                  year={field.year}
                  branch={field.branch}
                  section={field.section}
                  show={"yes"}
                />
              </Paper>
            </Grid>
            <Grid container style={{ margin: "0vh 0vh" }}>
              {[1, 2, 3, 4].map((ani, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={3}
                  style={{ padding: "3.4vh 5.4vh" }}
                >
                  <Paper
                    elevation={7}
                    style={{ width: "100%", height: "18vh" }}
                  >
                    <Grid container>
                      <Grid
                        item
                        xs={4}
                        md={4}
                        lg={4}
                        className={classes.flexer}
                        style={{ padding: "3vh" }}
                      >
                        <div
                          style={{
                            border: "0.3px solid lightgrey",
                            width: "100%",
                            minHeight: "9vh",
                          }}
                        ></div>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4}></Grid>
                      <Grid item xs={4} md={4} lg={4}></Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Grid container style={{ margin: "7vh 0vh" }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{ padding: "0vh 3vh" }}
              >
                <Paper style={{ height: "100%", width: "100%" }}></Paper>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{ padding: "0vh 3vh" }}
              >
                <Paper style={{ height: "50vh", width: "100%" }}>
                  <Graph
                    college={field.college}
                    year={field.year}
                    branch={field.branch}
                    section={field.section}
                    show={"no"}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
    </div>
  );
}
