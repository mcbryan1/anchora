import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/users/Users";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
    
  },
});

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Navbar />
      <Container className={classes.contentStyle} maxWidth="md">
        <Users />
      </Container>
    </div>
  );
}

export default App;
