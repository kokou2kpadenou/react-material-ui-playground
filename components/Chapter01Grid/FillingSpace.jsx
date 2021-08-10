import PropTypes from "prop-types";
import { Paper, Grid, Chip } from "@material-ui/core";
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

const FillingSpace = ({ justify }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Grid container justify={justify} spacing={1}>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Grid container justify={justify} spacing={1}>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Grid container justify={justify} spacing={1}>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Grid container justify={justify} spacing={1}>
              <Grid item>
                <Chip label="xs=12" />
              </Grid>
              <Grid item>
                <Chip label="sm=6" />
              </Grid>
              <Grid item>
                <Chip label="md=3" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

FillingSpace.propTypes = {
  justify: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
  ]),
};

export default FillingSpace;
