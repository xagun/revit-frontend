import React from 'react';
import {AppRouting} from './App.routing';
import { BrowserRouter } from "react-router-dom";
import MessengerChat from './MessengerChat/MessengerChat.component';


export const App = () => {
    return(
        <BrowserRouter>
       
       <AppRouting />
       
<MessengerChat />
        </BrowserRouter>
    )
}