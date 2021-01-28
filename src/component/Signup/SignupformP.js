import React from 'react'
import ReactCodeInput from 'react-verification-code-input';

const SignupformP = () =>{
    return(
        <div>
            <h2>GOT YOUR CODE</h2>
            <p>We've sent a 6-digit code to +8801670706699</p>
            <h5>Enter the code</h5>
            <ReactCodeInput />
        </div>
    )
}

export default SignupformP