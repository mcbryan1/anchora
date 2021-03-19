import React from 'react'
import { Typography } from '@material-ui/core'
import User from './User'
import { makeStyles } from "@material-ui/styles";

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
    return (
        <div className={classes.usersStyle}>
            <Typography variant="h5">
                All Users
            </Typography>
            <User/>
            <User/>
        </div>
    )
}

export default ListUsers
