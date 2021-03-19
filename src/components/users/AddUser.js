import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/actions/userActions'


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
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: '',
    image: ''
  })

  const handleSubmit = e =>{
    e.preventDefault()
    dispatch(addUser(user))
    setUser({
      name: '',
      image: ''
    })
  }
  return (
    <>
      <form className={classes.formStyle} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="enter-name"
          label="Enter Name"
          autoFocus
          variant="outlined"
          fullWidth
          value={user.name}
          onChange ={(e) => setUser({...user, name: e.target.value, date: new Date()})}
        />
        <TextField
          id="enter-image"
          type="file"
          variant="outlined"
          fullWidth
          value={user.image}
          className={classes.fileForm}
          onChange ={(e) => setUser({...user, image: e.target.value, date: new Date()})}
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
