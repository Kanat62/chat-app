import {React,useState,} from 'react'
import cl from './Input.module.scss'

import imgIcon from '../../img/image.svg'
import sendIcon from '../../img/send.svg'
import clearIkon from '../../img/close-outline.svg'

const Input = (props) => {
    const {hangleSubmit,newMessage, setNewMessage,inputRef,setPopupActive, setPopupImgs} = props

    const hangleSelect = (e) => {
        setPopupActive(true)
        const files = Array.from(e.target.files)
        files.forEach((file) => {
            const reader = new FileReader()
            reader.onload = () => {
                const newItem = {id: Date.now(), size: file.size, url: reader.result, }
                setPopupImgs(prev => {
                    console.log(prev,newItem);
                    const  sort = prev.findIndex(item => item.url === newItem.url) 
                    if(sort !== -1) return prev
                    return [...prev, newItem]
                })
            }
            reader.readAsDataURL(file)
        })
    }

  return (
    <form className={cl.inputForm}  onSubmit={hangleSubmit}>
        <div className={cl.inputBox}>

            <input type="text" 
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                className={cl.input}
                placeholder='Type a message' 
            />

            {!newMessage ? (
                <>
                    <img src={imgIcon} 
                        className={cl.inputImg} 
                        onClick={() =>  inputRef.current.click()}
                        alt="img"
                    />
                    <input 
                        type="file" 
                        multiple
                        className={cl.none}
                        ref={inputRef}
                        onChange={hangleSelect}
                    />
                </>
            ):(
                <img src={clearIkon}  className={cl.inputTextClear} onClick={() => setNewMessage('')}/>
            )}
            
        </div>
        <button type='submit' className={cl.inputSend}>
            <img  src={sendIcon}  alt="sendMessage"/>
        </button>
    </form>
  )
}

export default Input