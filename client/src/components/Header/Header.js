import React from "react";
import { Header as JCSSHeader, Button } from "@jon-cundiff/jcss-components";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/actionCreators";

import "./Header.css";

const Header = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const leftChildren = [
        {
            inner: "Buttons",
            link: "/button",
        },
    ];

    const themesList = {
        inner: "Themes",
        className: "no-hover",
        itemChildren: [
            {
                inner: (
                    <>
                        <span>
                            <i className="fas fa-plus mr-2"></i>Theme Builder
                        </span>
                    </>
                ),
                link: "/builder",
            },
            {
                inner: "Browse Themes",
                link: "/themes",
            },
        ],
    };

    const rightChildren = user
        ? [
              themesList,
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
                  className: "no-hover",
              },
          ]
        : [
              themesList,
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
