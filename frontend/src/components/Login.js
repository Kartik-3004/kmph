import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    display: "inline-block",
    minWidth: 275,
    width: 300,
  },
  button: {
    marginLeft: 50,
    width: 150,
    align: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Login(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      className={classes.root}
      style={{ marginLeft: props.marginl }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.head}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.subhead}
        </Typography>
        <Typography variant="body2" component="p">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/login">
          <Button
            className={classes.button}
            size="large"
            variant="contained"
            color="primary"
          >
            {props.buttontext}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
