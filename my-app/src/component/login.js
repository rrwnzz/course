import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Step 1
import "../css/login.css";

export default function Login({ setUsername }) {
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // ✅ Step 2

    const handleSubmit = () => {
        const username = userNameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value;
        const newErrors = {};

        // if (username !== 'Rawan Almomani') {
            // newErrors.username = 'Username not found';
        // }

        if (password !== '12345') {
            newErrors.password = 'Wrong password, try again';
        }

        if (!email.includes("@")) {
            newErrors.email = 'Email must contain @';
        }

        setErrors(newErrors);

     if (newErrors.username) userNameRef.current.focus();
        else if (newErrors.password) passwordRef.current.focus();
        else if (newErrors.email) emailRef.current.focus();

        // ✅ If all inputs are valid
        if (Object.keys(newErrors).length === 0) {
            setUsername(username);     // update App state
            navigate("/");             // ✅ redirect to home page
        }
    };

    return (
        <div className="login-container">
            <form 
                className="login-form" 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <h2>Login</h2>

                <label>Username</label>
                <input type="text" ref={userNameRef} className="input-field" />
                {errors.username && <p className="error-text">{errors.username}</p>}

                <label>Password</label>
                <input type="password" ref={passwordRef} className="input-field" />
                {errors.password && <p className="error-text">{errors.password}</p>}

                <label>Email</label>
                <input type="email" ref={emailRef} className="input-field" />
                {errors.email && <p className="error-text">{errors.email}</p>}

                <input type="submit" value="Login" className="submit-button" />
            </form>
        </div>
    );
}



