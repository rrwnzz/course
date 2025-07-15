import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../css/login.css";

export default function Login({ setUsername }) {
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); 

    const handleSubmit = () => {
        const username = userNameRef.current.value;
        const email = emailRef.current.value;
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

        // اذا كل الانبوتس صحيحه
        if (Object.keys(newErrors).length === 0) {
            setUsername(username);     
            // عدل عالستيت
            navigate("/");  
            // انتقل لصفحة الهوم
        }
    };

    return (
        <div className="login">
            <form 
                className="loginForm" 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <h2>Login</h2>

                <label>Username</label>
                <input type="text" ref={userNameRef} className="inputField" />
                {errors.username && <p className="errorText">{errors.username}</p>}

                <label>Password</label>
                <input type="password" ref={passwordRef} className="inputField" />
                {errors.password && <p className="errorText">{errors.password}</p>}

                <label>Email</label>
                <input type="email" ref={emailRef} className="inputFeld" />
                {errors.email && <p className="errorText">{errors.email}</p>}

                <input type="submit" value="Login" className="submitButton" />
            </form>
        </div>
    );
}



