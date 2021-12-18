import React from 'react'
import './splash.css'
import splashImg from '../../img/george-kurtzweil.jpg';



const Splash = () => {

    const downloadFile = () => {
        window.location.href = "../../file/KurtzweilCV2021.pdf"
    }

    return (
        <div className="splash">
             <div className= 'splash-text'>
                <div className="splash-title">
                    <h1>George Kurtzweil</h1>
                    <p>Passionate Teacher</p>
                    <a href = "/KurtzweilCV2021.pdf"    download = 'KurtzweilCV2021.pdf' className="cv-button-splash">
                         Download CV
                     </a>
                </div>
                
            </div>
            
            <div className="splash-img">
                 <img src= {splashImg} alt="george-kurtzweil" />  
            </div>
            
        </div>
       
    )
}

export default Splash;
