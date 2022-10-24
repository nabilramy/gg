import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import Navbar from "../../Components/Nav";
import Input from "../../Components/Input";
import "./login.css";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const { id, setId } = useContext(Context);
  console.log(id);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    await axios
      .post("/api/v1/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data.user);
        setMessage(res.data.user);
        setId(res.data.user.id);
        if (res.status === 200) {
          navigate("/info");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="main_cont">
        <h1>Login</h1>
        {message.id || <p>{message}</p>}
        <div className="inputs_cont">
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="button"
            value="Login"
            onClick={handleSubmit}
            style={{ backgroundColor: "#18A558", width: "8rem" }}
          />
        </div>
      </div>
    </>
  );
}
