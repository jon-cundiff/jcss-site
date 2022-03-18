const ex = `<Header
    styleType="primary"
    logoImg={jcssLogo}
    leftChildren={leftChildren}
    rightChildren={rightChildren}
>
    <div className="header-items">
        <div className="header-item">
            <a href="#">Home</a>
        </div>
        <Dropdown styleType="primary" title="About" className="header-item">
            <div className="header-item">
                <a href="#">About Us</a>
            </div>
            <div className="header-item">
                <a href="#">Location</a>
            </div>
        </Dropdown>
        <Dropdown styleType="primary" title="User" className="header-item mobile-row-end" alignRight>
            <div className="header-item">
                <a href="#">Profile</a>
            </div>
            <div className="header-item">
                <a href="#">Log Out</a>
            </div>
        </Dropdown>
    </div>
</Header>`;

export default ex;
