import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      console.log("Password and confirm password do not match!");
      return;
    }

    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, { displayName });

        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: ""
        });

    } catch (error) {
      console.log("Error while creating the user", error.message);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <Avatar className="avatar">
              <AccountCircle />
            </Avatar>
            <Typography component="h2" variant="h5">
              I do not have an account
            </Typography>
            <span className="sign-up-hint">
              Sign up with your email and password
            </span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <TextField
                placeholder="Name"
                margin="normal"
                type="text"
                required
                fullWidth
                id="displayName"
                label="Display Name"
                name="displayName"
                onChange={this.handleChange}
                value={this.state.displayName}
                autoFocus
              />
              <TextField
                placeholder="Email Address"
                margin="normal"
                type="email"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <TextField
                margin="normal"
                placeholder="Password"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={this.handleChange}
                value={this.state.password}
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                placeholder="Confirm Password"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                onChange={this.handleChange}
                value={this.state.confirmPassword}
                id="confirmPassword"
              />
              <Grid container spacing={2}>
                <Grid item xs>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="btn-submit"
                  >
                    Sign Up
                  </Button>
                </Grid>
                {/* <Grid item>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className="btn-submit"
                    onClick={console.log()}
                  >
                    Sign In With Google
                  </Button>
                </Grid> */}
              </Grid>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default SignUp;
