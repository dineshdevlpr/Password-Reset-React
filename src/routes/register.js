import React from 'react'
import {Link} from "react-router-dom";

export default function Register() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" action="" method="post">
                                <h3 className="text-center text-info">Register</h3>
                                <div className="form-group">
                                    <label for="username" className="text-info">Username:</label><br/>
                                    <input type="text" name="username" id="username" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">Password:</label><br/>
                                    <input type="text" name="password" id="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                                <div className="form-group">
                                    <Link to="/login" className="text-muted">Already Registered ? Click here to Login</Link><br/> <br/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}