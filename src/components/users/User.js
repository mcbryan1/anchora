import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, ButtonGroup, Button } from "@material-ui/core";
import { Create, Delete } from "@material-ui/icons";

const useStyles = makeStyles({
  userStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  grayStyle: {
    color: "#8f8f8f",
  },
  image: {
    height: "100px",
    width: "100px",
  },
});
const User = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.userStyle}>
        <div>
          <img
            src="https://dummyimage.com/100/d11e56/fff"
            alt="img"
            className={classes.image}
          />
          <Typography variant="body2" className={classes.grayStyle}>
            4 days ago
          </Typography>
        </div>
        <div>
          <Typography variant="h5">Kwesi Appiah</Typography>
        </div>
        <div>
          <ButtonGroup>
            <Button >
              <Create color="primary"/>
            </Button>
            <Button>
              <Delete color="secondary"/>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default User;
