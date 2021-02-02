import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {withRouter} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "black",
      color: "orange"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "orange",
      color: "black"
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "orange",
      color: "black"
    },
    signuplink: {
        color: "orange",
        cursor: "pointer"
    },
    textbox: {
        backgroundColor: "white",
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "3px solid orange",
            borderRadius: "none"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "5px solid orange",
            borderRadius: "none"
          },
    },
  }));

const Login = (props) => {
    const classes = useStyles();
    const handleClick = (option) => {
        if(option === 'signup') {
            props.history.push('/signup');
        }
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="Email eg: abcd@gmail.com"
            name="email"
            autoComplete="email"
            className={classes.textbox}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className={classes.textbox}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <div className={classes.signuplink} onClick={() => handleClick('signup')}>
                Don't have an account? Sign Up
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(Login);