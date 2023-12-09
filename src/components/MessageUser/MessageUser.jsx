import { React, useEffect } from "react";
import cl from "./MessageUser.module.scss";
import { converter } from "../../utils/functions";
import { formatBytes } from "../../utils/functions";
import checkmark from "../../img/checkmark.svg";

const MessageUser = ({ message }) => {
    return (
        <div className={cl.messagesItem}>
            {message.text ? (
                <div className={cl.item}>
                    <div className={cl.itemText}>{message.text}</div>
                    <div className={cl.itemBox}>
                        <div className={cl.itemTime}>
                            {converter(message?.createdAt?.seconds)}
                        </div>
                        <img
                            className={cl.itemCheckmark}
                            src={checkmark}
                            alt=""
                        />
                    </div>
                </div>
            ) : (
                <div className={cl.itemImgContainer}>
                    <div className={cl.itemImgBox}>
                        <img src={message.img} alt="" />
                    </div>
                    <div className={cl.itemImgInfo}>
                        <div className={cl.itemImgWeight}>
                            {formatBytes(message.size)}
                        </div>
                        <div className={cl.itemTime}>
                            {converter(message?.createdAt?.seconds)}
                        </div>
                        <img
                            className={cl.itemCheckmark}
                            src={checkmark}
                            alt=""
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MessageUser;
