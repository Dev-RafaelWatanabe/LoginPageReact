import React from "react";

function FormLogin() {
    return(
        <form>
            <div className="FormInner">
                <div className="FormGroup">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username"></input>
                </div>
                <div className="FormGroup">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"></input>
                </div>
                <input type="submit" value="Login"></input>
            </div>
        </form>
    )
}

export default FormLogin