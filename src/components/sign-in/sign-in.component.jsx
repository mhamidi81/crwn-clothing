import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h2" variant="h5">
              I already have an account
            </Typography>
            <span className="sign-in-hint">
              Sign in with your email and password
            </span>
            <form className="form" onSubmit={this.handleSubmit}>
              <TextField
                placeholder="Email Address"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
                autoComplete="current-password"
                onChange={this.handleChange}
                value={this.state.password}
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
                    Sign In
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className="btn-submit"
                    onClick={signInWithGoogle}
                  >
                    Sign In With Google
                  </Button>
                </Grid>
              </Grid>
              <Grid container>
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
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default SignIn;
