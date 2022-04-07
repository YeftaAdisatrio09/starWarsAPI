import React from "react";
import { Link } from "react-router-dom";

import style from "./header.module.css";

const Header = () => {
    return (
        <Link to="/">
            <img src="/images/logo.png" alt="star Wars" className={style.logo} />
        </Link>
    );
};

export default Header;
