import { useState } from "react";
import "../register/register.css";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../config";

const Register = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    city: undefined,
    country: undefined,
    phone: undefined,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (credentials.username && credentials.email && credentials.password && credentials.city && credentials.country && credentials.phone) {
      try {
        const res = await axiosInstance.post("/auth/register", credentials);
        navigate("/login");
      } catch (error) {
        setError("username or email already exist");
      }
    } else {
      setError("please Fill all the information");
    }
  };
  return (
    <div className="register">
      <div className="recontainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="reinput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="reinput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="reinput"
        />
         <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="reinput"
        />
         <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="reinput"
        />
         <input
          type="text"
          placeholder="phone number"
          id="phone"
          onChange={handleChange}
          className="reinput"
        />
        <div className="rebuttons">
          <button onClick={handleClick} className="rebutton">
            Register
          </button>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="rebutton"
          >
            Login
          </button>
        </div>
        {error}
      </div>
    </div>
  );
};
export default Register;