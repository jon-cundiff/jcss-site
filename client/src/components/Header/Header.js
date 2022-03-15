import React from "react";
import { Header as JCSSHeader, Button } from "@jon-cundiff/jcss-components";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/actionCreators";

const Header = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const leftChildren = [
        {
            inner: "Buttons",
            link: "/button",
        },
    ];

    const rightChildren = user
        ? [
              {
                  inner: <Button faIcon="fas fa-plus">Theme Builder</Button>,
                  link: "/builder",
              },
              {
                  inner: user.username,
                  link: "/profile",
              },
              {
                  inner: (
                      <Button
                          styleType="danger"
                          onClick={() => dispatch(logoutUser())}
                      >
                          Logout
                      </Button>
                  ),
                  link: "/",
              },
          ]
        : [
              {
                  inner: <Button faIcon="fas fa-plus">Theme Builder</Button>,
                  link: "/builder",
              },
              {
                  inner: (
                      <Button styleType="info" faIcon="fab fa-github">
                          Login
                      </Button>
                  ),
                  external: true,
                  link: `${process.env.REACT_APP_BASE_URL}/auth/github`,
              },
          ];

    return (
        <JCSSHeader
            styleType="primary"
            logoText="JCSS"
            leftChildren={leftChildren}
            rightChildren={rightChildren}
        />
    );
};

export default Header;
