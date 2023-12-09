import React from 'react'
import cl from './MessageDate.module.scss'

const MessageDate = () => {

    return (
        <div className={cl.messageDateBox}>
            <div className={cl.messageDateBorder}></div>
            <div className={cl.messageDate}>12:12:@3</div>
            <div className={cl.messageDateBorder}></div>
        </div>
    )
}

export default MessageDate

