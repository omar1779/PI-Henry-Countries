import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutMe (){
    const [modeNight, setModeNight]= useState(true)
    return(
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <div className="text-start">
            <h2 className="display-2">Hello user ,I'm Omar Sosa</h2>
            <h4>
            I am a Front End developer with experience in creating websites and web applications. I specialize in JavaScript.
            I am always seeking to improve my skills to continually grow professionally to be able to contribute consistently to the workgroup with which I am.
            </h4>
            <h4>
            This project was created with these technologies:</h4>
            <h4>ReactJs</h4>
            <h4>NodeJs</h4>
            <h4>Express</h4>
            <h4>Sequelize</h4>
            <h4>PostgreSQL</h4>
            <h4>React-Boostrap</h4><br />
            <h4>And it was presented as the final exam of the SoyHenry academy,approving the individual project</h4>
            </div>
            <div>
                <h2 className="display-2 text-center">Contact</h2>
                <ul className="d-flex justify-content-evenly">
                    <li>
                        <a style={{
                            textDecoration: 'none',
                            color: "black",
                            fontSize : '27px',
                            marginRight: '20px'
                        }}href="https://github.com/omar1779" target='blank'>
                        <i class="fa-brands fa-github">GitHub</i></a>
                    </li>
                    <li>
                        <a style={{
                            fontSize : '27px',
                            marginLeft: '20px'
                        }} href="https://www.linkedin.com/in/omar-codex/" target='blank'>
                        <i  class="fa-brands fa-linkedin">LinkedIn</i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}