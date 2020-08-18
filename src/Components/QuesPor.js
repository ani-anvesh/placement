import React, { useCallback, useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withRouter } from "react-router";
import base from "./../config/FbConfig";
import "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const QuesPor = ({ history }) => {
  const classes = useStyles();
  const ani = document.querySelector("#myForm");

  const [data, setState] = useState({
    college: "",
    year: "",
    branch: "",
    section: "",
    name: "",
    aptitude: "",
    logical: "",
    coading: "",
    english: "",
  });

  const updateField = (e) => {
    e.preventDefault();
    setState({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const db = base.firestore();
  const handleData = (event) => {
    event.preventDefault();
    const {
      college,
      year,
      branch,
      section,
      name,
      aptitude,
      logical,
      english,
      coading,
    } = event.target.elements;

    return db
      .collection("Placement")
      .doc(college.value)
      .collection("Year")
      .doc(year.value)
      .collection("Branch")
      .doc(branch.value)
      .collection("Section")
      .doc(section.value)
      .collection("Name")
      .doc(name.value)
      .set({
        name: name.value,
        aptitude: aptitude.value,
        logical: logical.value,
        coading: coading.value,
        english: english.value,
      })
      .then(() => {
        alert("Question Added to database, please refresh the browser");
      })
      .then()
      .catch((error) => {
        //console.error("Error adding document: ", error);
      });
  };
  console.log(data);

  return (
    <Container maxWidth="md" style={{ padding: "3vh" }}>
      <Paper style={{ padding: "2vh" }}>
        <form onSubmit={handleData} validate id="myForm">
          <Typography variant="h6" style={{ margin: "1vh" }}>
            College :
          </Typography>
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
              value={data.college}
              onChange={updateField}
              label="college"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"VCE"}>VCE</MenuItem>
              <MenuItem value={"VEC"}>VEC</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" style={{ margin: "1vh" }}>
            Year :
          </Typography>
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="year"
              value={data.year}
              onChange={updateField}
              label="year"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"third"}>3rd</MenuItem>
              <MenuItem value={"fourth"}>4th</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" style={{ margin: "1vh" }}>
            Branch :
          </Typography>
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
              value={data.branch}
              onChange={updateField}
              label="branch"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"ECE"}>ECE</MenuItem>
              <MenuItem value={"CSE"}>CSE</MenuItem>
              <MenuItem value={"EEE"}>EEE</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" style={{ margin: "1vh" }}>
            Section :
          </Typography>
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
              value={data.section}
              onChange={updateField}
              label="section"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"A"}>A</MenuItem>
              <MenuItem value={"B"}>B</MenuItem>
              <MenuItem value={"C"}>C</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" style={{ margin: "1vh" }}>
            Name :
          </Typography>
          <TextField
            id="outlined-textarea"
            fullWidth
            name="name"
            label="name"
            placeholder="enter name here"
            multiline
            value={data.name}
            onChange={updateField}
            variant="outlined"
          />
          <Typography variant="h6" style={{ margin: "1vh" }}>
            Marks :
          </Typography>
          <TextField
            style={{ marginTop: "1vh" }}
            id="standard-textarea"
            fullWidth
            name="aptitude"
            label="Aptitude"
            placeholder="enter Option here"
            multiline
            value={data.aptitude}
            onChange={updateField}
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "2vh" }}
            id="standard-textarea"
            fullWidth
            name="logical"
            label="Logical"
            placeholder="enter Option here"
            multiline
            value={data.logical}
            onChange={updateField}
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "2vh" }}
            id="standard-textarea"
            fullWidth
            name="coading"
            label="Coading"
            placeholder="enter Option here"
            multiline
            value={data.coading}
            onChange={updateField}
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "2vh" }}
            id="standard-textarea"
            fullWidth
            name="english"
            label="English"
            placeholder="enter Option here"
            multiline
            value={data.english}
            onChange={updateField}
            variant="outlined"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Question
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
export default QuesPor;
