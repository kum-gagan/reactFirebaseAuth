import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database, emalVal).then(data => {
            alert("Check your gmail")
            history("/")
        }).catch(err => {
            alert(err.code)
        })
    }
    return (
        <div className="container">
            <h1>Forgot Password</h1>
            <div className="form-box">
                <form className="input-group" onSubmit={(e) => handleSubmit(e)}>
                    <input className="input-field" name="email" placeholder="Enter your mail" /><br /><br />
                    <button className="submit-btn">Reset</button>
                </form>
            </div>
        </div>
    )
}
export default ForgotPassword;