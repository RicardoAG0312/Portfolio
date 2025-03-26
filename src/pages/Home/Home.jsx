import MainLayout from "../../layouts/Main";
import React from 'react'
import Icons from "../../components/Icons/Icons";
import CodeTyping from "../../assets/Code typing-amico.svg";
import ProgrammingTyping from "../../assets/Programmer-bro.svg";
import Experience from "../../components/ExperienceHome/Experience";

import Bootstrap from "../../assets/Bootstrap.svg";
import MySQL from "../../assets/mysql.svg";
import Node from "../../assets/nodejs.svg";
import ReactJS from "../../assets/react.svg";
import Git from "../../assets/git.svg";
import Flutter from "../../assets/flutter.svg";

function Home() {
    return (
        <>
            <MainLayout>
            <section className="container" style={{minHeight: "75vh"}}>
                <div className="row" style={{minHeight: "75vh"}}>
                    <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-start" >
                        <h1> Ricardo Goicochea </h1>
                        <h4> Soy un desarrollador de software apasionado por crear soluciones escalables y eficientes. Me enfoco en construir tecnología que impacte de manera positiva, optimizando sistemas y mejorando la experiencia del usuario.</h4>
                        <Icons />
                    </div>
                    <div className="col-md-6 col-12 p-0 d-flex flex-column justify-content-center align-items-center" >
                        <img  src={CodeTyping} alt="Code typing animation" />
                    </div>
                </div>
            </section>
            <section className='container mt-5 mb-5'>
                <header className="p-3 text-center "> 
                    <h2> ¿Qué Realizo? </h2>
                </header>
                <Experience 
                    img1 = {ProgrammingTyping}
                    img2 = {Bootstrap}
                    img3 = {MySQL}
                    img4 = {Node}
                    img5 = {ReactJS}
                    img6 = {Git}
                    img7 = {Flutter}
                />
            </section>
            </MainLayout>
        </>
    )
}

export default Home
