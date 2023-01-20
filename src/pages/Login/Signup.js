import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  TextField,
} from "@mui/material";
import { useUserAuth } from "../../context/UserAuthContext";

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {signUp} = useUserAuth();
  const handleSubmit = async (event) =>{
    event.preventDefault();
    setError('');
    try{
      await signUp(email, password)
    }catch(err){
      setError(err.message)
    }

  }
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            style={{ margin: "10px 0px" }}
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />{" "}
          <br />
          <TextField
            id="outlined-basic"
            label="Enter Password"
            variant="outlined"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />{" "}
          <br />
          <Button
            variant="contained"
            type="submit"
            style={{ margin: "10px 10px 10px 0px" }}
          >
            Sign Up
          </Button>
          <Link to="/login">
            <Button variant="contained">Log In</Button>
          </Link>
        </form>
      </Container>
    </>
  );
}
export default Signup;
