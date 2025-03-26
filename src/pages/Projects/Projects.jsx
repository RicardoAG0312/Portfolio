import React from 'react'
import MainLayout from '../../layouts/Main'
import ProjectsImg from "../../assets/Developer activity-amico.svg";
import Icons from "../../components/Icons/Icons";
import Card from "../../components/Projects/Card";
import Button from 'react-bootstrap/Button';

import styles from "./projects.module.css";

import Bootstrap from "../../assets/Bootstrap.svg";
import MySQL from "../../assets/mysql.svg";
import Node from "../../assets/nodejs.svg";
import ReactJS from "../../assets/react.svg";
import Git from "../../assets/git.svg";
import Flutter from "../../assets/flutter.svg";

function Projects() {
    return (
        <MainLayout>
        <section className="container" style={{minHeight: "75vh"}}>
            <div className="row" style={{minHeight: "75vh"}}>
                <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-start" >
                    <h1> Proyectos </h1>
                    <h4> Aquí encontrarás algunos de los proyectos en los que he trabajado, aplicando mis conocimientos en desarrollo web y diseño de interfaces. Cada proyecto representa un desafío y una oportunidad de aprendizaje, donde combino creatividad y funcionalidad para ofrecer soluciones efectivas. </h4>
                    <Icons />
                </div>
                <div className="col-md-6 col-12 p-0 d-flex flex-column justify-content-center align-items-center" >
                    <img  src={ProjectsImg} alt="Code typing animation" />
                </div>
            </div>
        </section>
        <section className='container mt-5 mb-5'>
                <header className="p-3 text-center "> 
                    <h2> Mis Proyectos </h2>
                </header>
                    <div className={styles.box_certificates}>
                        <Card 
                            titulo = "Portafolio Web"
                            portada = "Portafolio Web"
                            texto = "Este portafolio web muestra mis proyectos y habilidades en desarrollo frontend, destacando diseño, interactividad y optimización."
                            imagen1 = {ReactJS}
                            imagen2 = {Bootstrap}
                            imagen3 = {Git}
                        />
                        <Card 
                            titulo = "Sistema de Salud"
                            portada = "Sistema de Salud"
                            texto = "Este sistema de salud permite gestionar el registro de pacientes y citas, facilitando la organización y optimización de atención médica."
                            imagen1 = {ReactJS}
                            imagen2 = {Node}
                            imagen3 = {MySQL}
                        />
                        <Card 
                            titulo = "Sistema Educativo"
                            portada = "Sistema Educativo"
                            texto = "Este sistema educativo gestiona el registro y control de notas de alumnos, facilitando la organización y acceso a su historial académico."
                            imagen1 = {ReactJS}
                            imagen2 = {Node}
                            imagen3 = {MySQL}
                        />
                        <Card 
                            titulo = "Sitio Web Inkanet"
                            portada = "Sitio Web Inkanet"
                            texto = "Este sitio web ofrece servicios de ciberseguridad y soluciones digitales, protegiendo datos y optimizando la seguridad en entornos empresariales."
                            imagen1 = {ReactJS}
                            imagen2 = {Bootstrap}
                            imagen3 = {Git}
                        />
                    </div>
                    {/* <div className='text-center'>
                        <Button style={{background: "#e7e7e7", border: "none", color: "black", marginTop: "20px"}} href='https://utpedupe-my.sharepoint.com/:f:/g/personal/u21214916_utp_edu_pe/EsmkSm7gdQRLjc80TUo2fdYB4pPPp5fJV6OvGFJLvlLTjg?e=bZqPeB' target='_blank'> ver más... </Button>
                    </div> */}
        </section>
        </MainLayout>
    )
}

export default Projects
