import {React,useState} from 'react'
import {auth, provider} from '../../utils/firebase-config'
import { signInWithPopup } from 'firebase/auth'
import 'firebase/app'

import cl from './Auth.module.scss'
import Loader from '../../components/Loader/Loader'
import googleIcon from '../../img/google.png'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const Auth = ({setIsAuth}) => {
    const [isLoading, setIsLoading] = useState(false)

    const signInWithGoogle = async () => {
        setIsLoading(true)
        try{
            const {user} = await signInWithPopup(auth, provider)
            cookies.set('auth-token', user.refreshToken)
            setIsAuth(true)
        } catch (err){
            console.log(err)
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <>
            {isLoading && ( <Loader/> )}

            <div className={cl.authContainer}>
                <h1 className={cl.authTitle}>Авторизация</h1>
                <h2 className={cl.authText}>Chat app on React</h2>
                <button className={cl.authBtn}  onClick={signInWithGoogle}>
                    <img src={googleIcon} alt="Google" />
                    Войти с помощю Google
                </button>
            </div>
        </>
    )
}

export default Auth 