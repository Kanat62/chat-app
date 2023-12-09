import {React,useRef,useEffect} from 'react'
import MessageClient from '../MessageClient/MessageClient'
import MessageUser from '../MessageUser/MessageUser'
import MessageDate from '../MessageDate/MessageDate'
import Loader from '../Loader/Loader'
import cl from './MessagesGroup.module.scss'
import {auth} from '../../utils/firebase-config'
const MessagesGroup = ({messages, setMessages,isLoading}) => {

	const scrollEl = useRef()
	useEffect(()=>{
		scrollEl.current.scrollTop = scrollEl.current.scrollHeight 
	},[messages])

	return (
		<div className={cl.messagesContainer} ref={scrollEl}>
			{/* <MessageClient/> 
			
			<MessageDate/>*/}
			

			{messages[0] ?
                messages.map(message=>(
                    auth.currentUser.uid === message.uid ? 
                    ( 
                        <MessageUser key={message.id} message={message}/>
                    )
                    :
                    (
                        <MessageClient key={message.id} message={message}/>
                    )
                ))
                :
                <></>                
            }
		</div>
	)
}

export default MessagesGroup