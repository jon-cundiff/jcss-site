import React from "react";
import { Header as JCSSHeader, Button } from "@jon-cundiff/jcss-components";
import { useSelector, useDispatch } from "react-redux";
import { getGuestUser, logoutUser } from "../../store/actions/actionCreators";

import "./Header.css";
import jcssLogo from "./jcss.svg";

const Header = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const leftChildren = [
        {
            inner: "Documentation",
            itemChildren: [
                {
                    inner: "Getting Started",
                    link: "/docs/getting-started",
                },
                {
                    inner: "Layout",
                    link: "/docs/layout",
                },
                {
                    inner: "Header",
                    link: "/docs/header",
                },
                {
                    inner: "Footer",
                    link: "/docs/footer",
                },
                {
                    inner: "Button",
                    link: "/docs/button",
                },
                {
                    inner: "Dropdown",
                    link: "/docs/dropdown",
                },
                {
                    inner: "Card",
                    link: "/docs/card",
                },
                {
                    inner: "Alert",
                    link: "/docs/alert",
                },
            ],
        },
    ];

    const themesList = {
        inner: "Themes",
        itemChildren: [
            {
                inner: (
                    <>
                        <i className="fas fa-plus mr-4"></i>
                        <span>Theme Builder</span>
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
              },
          ]
        : [
              themesList,
              {
                  inner: "Login",
                  itemChildren: [
                      {
                          inner: (
                              <>
                                  <i className="fab fa-github mr-4"></i>
                                  <span>Login With GitHub</span>
                              </>
                          ),
                          external: true,
                          link: `${process.env.REACT_APP_BASE_URL}/auth/github`,
                      },
                      {
                          inner: (
                              <div
                                  onClick={() => dispatch(getGuestUser())}
                                  className="pointer"
                              >
                                  <i className="fas fa-circle-user mr-4"></i>
                                  <span>Guest Login</span>
                              </div>
                          ),
                      },
                  ],
              },
          ];

    return (
        <JCSSHeader
            styleType="primary"
            logoImg={jcssLogo}
            leftChildren={leftChildren}
            rightChildren={rightChildren}
        />
    );
};

export default Header;
