import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sing-up.component';
import './signin-signup.styles.css';


const SingInAndSignUP = () => (
  <div className="signin-signup">
    <SignIn />
    <SignUp />
  </div>
)

export default SingInAndSignUP;