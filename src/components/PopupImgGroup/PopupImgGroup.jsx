import {React, useEffect} from 'react'
import cl from './PopupImgGroup.module.scss'
import {formatBytes} from '../../utils/functions'
import sendIcon from '../../img/send.svg'
import deleteIcon from '../../img/close-outline.svg'

const PopupImgGroup = (props) => {
    const {sendImgs,active,setActive,inputRef,popupImgs, setPopupImgs} = props
    const hangleDelete = (id) => {
        setPopupImgs(prev => prev.filter(item => item.id !== id))
        if(popupImgs.length === 1) return setActive(false)
    }
    return (
        <div className={active ? cl.popupImgsGroup : cl.popupNone}>
            <header className={cl.popupHeader}>
                <div className={cl.popupCount}>Выбрано: {popupImgs.length}</div>
                <div className={cl.popupClose} onClick={() => {
                    setActive(false)
                    setPopupImgs([])
                }}>
                    <img src={deleteIcon} alt="" />
                </div>
            </header>

            <section className={cl.popupImgItems}>
                {!!popupImgs[0] && popupImgs.map(img=> (
                    <div className={cl.imgItem} key={img.id}>
                        <div className={cl.imgItemDelete} onClick={()=>hangleDelete(img.id)}>
                            <img src={deleteIcon} alt="" />
                        </div>
                        <div className={cl.imgItemBox}>
                            <img src={img.url} alt="" />
                        </div>
                        <div className={cl.imgItemSize}>{formatBytes(img.size)}</div>
                    </div>
                ))}
            </section>

            <footer className={cl.popupBtns}>
                <button className={cl.btnSelect} onClick={() =>  inputRef.current.click()}>
                    Выбрать
                </button>
                <button  className={cl.btnSend} onClick={sendImgs}>
                    <img  src={sendIcon}  alt="sendMessage"/>
                </button>
            </footer>
        </div>
    )
}

export default PopupImgGroup