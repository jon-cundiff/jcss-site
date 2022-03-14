import React, { useEffect } from "react";
import { Column } from "@jon-cundiff/jcss-components";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setUser } from "../../store/actions/actionCreators";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const token = params.get("token");
    const username = params.get("username");
    const failure = params.get("failure");

    useEffect(() => {
        if (token) {
            dispatch(setUser({ token, username }));
            navigate("/");
        }
    }, []);

    return (
        <Column>
            <h1>Login Status</h1>
            {failure && <p>Unable to login. Please try again.</p>}
            {token && <p>Login successful. Redirecting shortly.</p>}
        </Column>
    );
};

export default Login;
