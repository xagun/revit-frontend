import React from "react";
import './ScrollToTop.component.css'

function ScrollToTop(){

    const toTop =(e) =>{
        window.scrollTo(0,0);
    }
    return(
        <div className = "toTopButton">
            <button onClick ={toTop}><i class="fas fa-arrow-up"></i></button>

        </div>
    )
}

export default ScrollToTop;