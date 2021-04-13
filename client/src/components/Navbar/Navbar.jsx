import React from 'react';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import memories from '../../assets/memories.png';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to='/'
          className={classes.heading}
          variant='h2'
          align='center'
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        />
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant='h6'>
                {user.result.name}
                <Button
                  variant='contained'
                  className={classes.logout}
                  color='secondary'
                  onClick={() => {}}
                >
                  Logout
                </Button>
              </Typography>
            </div>
          ) : (
            <Button component={Link} to='/auth' color='primary'></Button>
          )}
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar;
