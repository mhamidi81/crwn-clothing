import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-up.styles.scss";

const SignInUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <SignIn />
          </Grid>
          <Grid item xs={6}>
            <SignUp />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignInUpPage;
