import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Control from "./Components/Control/Control";
import NotFountPage from "./Components/Notfountpage/NotFountPage";
import Music from "./Components/Music/Music";
import DialogContainer from "./Components/Messages/DialogContainer";
import UsersContainer from "./Components/FiendUsers/UsersContainer";
import ProfileContainer from "./Components/profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from './Components/Login/Login'

function App() {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <HeaderContainer/>
                <Navbar/>
                <Routes>
                    <Route path='/profile/:invoiceId' element={<ProfileContainer/>}/>
                    <Route path='/dialog' element={<DialogContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/control' element={<Control/>}/>
                    
                    <Route path='/fiend' element={<UsersContainer/>}/>
                    <Route path='/login' element={<LoginPage/>}/>

                    <Route path='*' element={<NotFountPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
