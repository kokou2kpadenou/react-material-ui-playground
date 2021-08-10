import PropTypes from "prop-types";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const FixedColumnLayout = ({ width }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
        <Grid item xs={width}>
          <Paper className={classes.paper}>xs={width}</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

FixedColumnLayout.propTypes = {
  width: PropTypes.number,
};

export default FixedColumnLayout;
