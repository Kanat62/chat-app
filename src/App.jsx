import {React,useState} from "react";
import Auth from "./pages/Auth/Auth";
import Chat from "./pages/Chat/Chat";
import './styles/global.scss'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

function App() {
    const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))

    if(!isAuth){
        return (
            <Auth setIsAuth={setIsAuth}/>
        );
    }
    return (
        <Chat/>
    )
}

export default App;
