import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    width: 200,
    height: 200,
  },
};

const Main = (props) => {
    const { classes } = props;
    return (
      <div className={classes.row}>
        <Avatar
          className={classes.avatar}
          src="./avatar.jpg"
        />
        <Typography variant="display3" gutterBottom>
          Guido Bonomini
        </Typography>
      </div>
    );
}
export default withStyles(styles)(Main);
