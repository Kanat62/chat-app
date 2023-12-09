import React from "react";
import cl from "./MessageClient.module.scss";
import { converter } from "../../utils/functions";
import { formatBytes } from "../../utils/functions";

const MessageClient = ({ message }) => {
    return (
        <div className={cl.messagesItem}>
            <div className={cl.itemAvatar}>
                <img src={message.photoURL} alt="icon" />
            </div>

            {message.text ? (
                <div className={cl.item}>
                    <div className={cl.itemName}>{message.displayName}</div>
                    <div  className={cl.itemBox}>
                        <div className={cl.itemText}>{message.text}</div>
                        <div className={cl.itemTime}>
                            {converter(message?.createdAt?.seconds)}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cl.itemImgContainer}>
                    <div className={cl.itemName}>{message.displayName}</div>
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
                    </div>
                </div>
            )}
        </div>
    );
};

export default MessageClient;
