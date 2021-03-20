import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import User from "./User";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/actions/userActions";

const useStyles = makeStyles({
  usersStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});

const ListUsers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  // console.log(data);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={classes.usersStyle}>
      <Typography variant="h5">
        {data ? "All User" : "No Users Yet"}
      </Typography>
      {data &&
        data.map((data) => {
          return <User user={data} key={data.id} />;
        })}
    </div>
  );
};

export default ListUsers;
