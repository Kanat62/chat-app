import { React, useState } from "react";
import { auth, db } from "../../utils/firebase-config";
import cl from "./Header.module.scss";
import menu from "../../img/menu.svg";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const clearMessages = async () => {

        console.log("deleted");
    };
    return (
        <div className={cl.header}>
            <div className={cl.headerTitle}>Chat App</div>

            <div className={cl.headerBox}>
                <div className={cl.headerIcon}>
                    {auth?.currentUser?.photoURL && (
                        <img src={auth?.currentUser?.photoURL} alt="icon" />
                    )}
                </div>
                <div
                    className={cl.headerMenu}
                    onClick={() => setMenuActive(true)}
                >
                    <img src={menu} alt=":" />
                </div>

                <div
                    className={menuActive ? cl.headerPopupOpen : cl.headerPopup}
                >
                    <p onClick={clearMessages}>Clear all</p>
                </div>
            </div>

            <div
                className={menuActive ? cl.headerPopupWrapper : cl.headerPopup}
                onClick={() => setMenuActive(false)}
            ></div>
        </div>
    );
};

export default Header;
