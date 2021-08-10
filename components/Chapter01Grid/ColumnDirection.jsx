import { Paper, Grid, Hidden, Typography } from "@material-ui/core";
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

function ColumnDirection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justift="space-around" spacing={4}>
        <Grid item xs={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography>One</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography>Two</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography>Three</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography>Four</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography>Five</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography>Six</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item xs={3}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Paper className={classes.paper}>
                  <Typography>Seven</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                  <Typography>Eight</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

export default ColumnDirection;
