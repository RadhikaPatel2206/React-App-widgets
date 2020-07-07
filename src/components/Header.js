import React from "react";

const Header = () => {
    return (
        <div
            className="ui tabular menu"
            style={{ marginTop: "30px", marginBottom: "30px" }}
        >
            <a className="item" href="/">
                Accordion
            </a>
            <a className="item" href="/">
                List
            </a>
            <a className="item" href="/">
                Dropdown
            </a>
            <a className="item" href="/">
                Translate
            </a>
        </div>
    );
};

export default Header;
