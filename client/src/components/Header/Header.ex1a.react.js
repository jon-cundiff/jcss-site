const ex = `import jcssLogo from "./jcss.svg"

const leftChildren = [
    {
        inner: "Home",
        link: "#",
    },
    {
        inner: "About",
        itemChildren: [
            {
                inner: "About Us",
                link: "#",
            },
            {
                inner: "Location",
                link: "#",
            },
        ],
    },
];
const rightChildren = [
    {
        inner: "User",
        itemChildren: [
            {
                inner: "Profile",
                link: "#",
            },
            {
                inner: "Log Out",
                link: "#",
            },
        ],
    },
];`;

export default ex;
