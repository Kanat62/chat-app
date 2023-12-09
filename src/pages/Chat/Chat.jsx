import { React,useRef, useState , useEffect} from 'react'
import {addDoc, collection, serverTimestamp,onSnapshot,query,orderBy} from 'firebase/firestore'
import {auth, db} from '../../utils/firebase-config'
import { v4 as uuidv4 } from 'uuid';
import cl from './Chat.module.scss'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import MessagesGroup from '../../components/MessagesGroup/MessagesGroup'
import PopupImgGroup from '../../components/PopupImgGroup/PopupImgGroup'
import {btnAnimation} from '../../utils/functions'

const Chat = () => {
	const [newMessage, setNewMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const messagesRef = collection(db, 'messages')

	const [popupActive, setPopupActive] = useState(false)
	const [popupImgs, setPopupImgs] = useState([])
    const inputRef = useRef(null)



    useEffect( ()=>{
        setIsLoading(true)
        const q = query(messagesRef, orderBy('createdAt'));
        onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages)
            setIsLoading(false)
        });
    },[])
    const hangleSubmit = async (e)=>{
        e.preventDefault()
        if(newMessage === '') return
        setNewMessage('')
        btnAnimation(e.target)
        try {
            await addDoc(messagesRef, {
                uid: auth.currentUser.uid,
                displayName: auth.currentUser.displayName,
                email: auth.currentUser.email,
                photoURL: auth.currentUser.photoURL,
                text:newMessage,
                createdAt: serverTimestamp(),
            })
            console.log('finish');
        } catch (error) {
            return console.log('errors');

        }
    }


    const uploadImg = async (img)=>{
        await addDoc(messagesRef, {
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            img:img.url,
            size:img.size,
            createdAt: serverTimestamp()
        })
    }

    const sendImgs = async (e)=>{
        if(!popupImgs[0]) return
        popupImgs.forEach(img => uploadImg(img))
        setPopupActive(false)
        setPopupImgs([])
    }

	return (
		<div className={cl.chatContainer}>
			<Header />
			<MessagesGroup 
				messages={messages}
				setMessages={setMessages}
                isLoading={isLoading}
			/>
			<Input 
                hangleSubmit={hangleSubmit}
				newMessage={newMessage} 
				setNewMessage={setNewMessage}

				inputRef={inputRef} 
				setPopupActive={setPopupActive}
				setPopupImgs={setPopupImgs}
			/>
			<PopupImgGroup 
                sendImgs={sendImgs}
				inputRef={inputRef}
				active={popupActive}
				setActive={setPopupActive}
				popupImgs={popupImgs}
				setPopupImgs={setPopupImgs}
			/>
		</div>
	)
}

export default Chat
