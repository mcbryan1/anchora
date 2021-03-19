import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: "flex",
    justifyContent: "space-betwen",
  },
  submitButton: {
    marginLeft: "20px",
  },
  fileForm: {
    marginLeft: "20px",
  },
});

const AddUser = () => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.formStyle} noValidate autoComplete="off">
        <TextField
          id="enter-name"
          label="Enter Name"
          autoFocus
          variant="outlined"
          fullWidth
        />
        <TextField
          id="enter-image"
          type="file"
          variant="outlined"
          fullWidth
          className={classes.fileForm}
        />
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          className={classes.submitButton}
        >
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddUser;
