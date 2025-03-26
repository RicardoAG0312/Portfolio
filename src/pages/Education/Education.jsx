import React from 'react'
import MainLayout from '../../layouts/Main'
import EducationImg from '../../assets/education.svg'
import Certificates from '../../components/Certificates/Certificates';
import Button from 'react-bootstrap/Button';


import { Timeline } from '@mui/lab';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';

import styles from "./education.module.css";

import UdemyLogo from "../../assets/udemy_dark.svg";
import CourseraLogo from "../../assets/coursera.svg";
import NetzunLogo from "../../assets/netzun.svg";
import UTPLogo from "../../assets/utp.svg";
import Icons from '../../components/Icons/Icons';



function Education() {
    return (
        <>
            <MainLayout>
            <section className="container" style={{minHeight: "75vh"}}>
                <div className="row" style={{minHeight: "75vh"}}>
                    <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-start" >
                        <h1> Education </h1>
                        <h4> Soy un desarrollador autodidacta con formación universitaria, siempre en constante aprendizaje. Me he capacitado en plataformas como Udemy, YouTube, Edutin, Platzi y Netzun, combinando teoría y práctica para fortalecer mis habilidades. </h4>
                        <Icons />
                    </div>
                    <div className="col-md-6 col-12 p-0 d-flex flex-column justify-content-center align-items-center" >
                        <img  src={EducationImg} alt="Code typing animation" />
                    </div>
                </div>
            </section>
            <section className='container mt-5 mb-5'>
                <header className="p-3 text-center "> 
                    <h2> Lo que he aprendido en el camino </h2>
                </header>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="#6d6d6d"
                        >
                        <img style={{width: "200px", height: "100px", objectFit: "contain"}} src={UTPLogo} alt="Code typing animation" />
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot className={styles.time_line_dot}>
                            1
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className='d-flex flex-column justify-content-center' sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Universidad Tecnológica del Perú
                            </Typography>
                            <Typography> 2021 - Actualidad </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="#6d6d6d"
                        >
                        <img className={styles.img} src={UdemyLogo} alt="Code typing animation" />
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot className={styles.time_line_dot}>
                            2
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className='d-flex flex-column justify-content-center' sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Udemy
                        </Typography>
                        <Typography> 2022 - Actualidad </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        >
                        <img style={{width: "75px", height: "100px", objectFit: "contain"}} src={NetzunLogo} alt="Code typing animation" />
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot className={styles.time_line_dot}>
                            3
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className='d-flex flex-column justify-content-center' sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Netzun
                        </Typography>
                        <Typography> 2022 - Actualidad </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        >
                        <img className={styles.img} src={CourseraLogo} alt="Code typing animation" />
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                                <TimelineDot className={styles.time_line_dot}>
                                    4
                                </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className='d-flex flex-column justify-content-center' sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Coursera  
                            </Typography>
                            <Typography> 2022 - Actualidad </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </section>
            <section className='container mt-5 mb-5'>
                <header className="p-3 text-center "> 
                    <h2> Mis Certificados </h2>
                </header>
                    <div className={styles.box_certificates}>
                        <Certificates 
                            titulo = "Certificado Desarrollo Web"
                            imagen = {UdemyLogo}
                            descripcion = "Adquirí habilidades en React para crear interfaces interactivas y dinámicas con componentes reutilizables."
                        
                        />
                        <Certificates 
                            titulo = "Certificado Flutter"
                            imagen = {NetzunLogo}
                            descripcion = "Aprendí a construir aplicaciones móviles multiplataforma con Flutter y Dart, dominando el diseño UI."
                        
                        />
                        <Certificates 
                            titulo = "Certificado Git"
                            imagen = {CourseraLogo}
                            descripcion = "Manejo eficiente del control de versiones, flujo de trabajo con ramas y colaboración en equipo utilizando Git"
                        
                        />
                        <Certificates 
                            titulo = "Certificado Inglés"
                            imagen = {UTPLogo}
                            descripcion = "Desarrollé habilidades de comunicación en inglés con fluidez en lectura, escritura y expresión oral a nivel B2."
                        
                        />
                        <Certificates 
                            titulo = "Certificado Excel"
                            imagen = {UdemyLogo}
                            descripcion = "Dominé el uso avanzado de Microsoft Excel optimizando la gestión y procesamiento de información."
                        
                        />
                    </div>
                    <div className='text-center'>
                        <Button style={{background: "#e7e7e7", border: "none", color: "black", marginTop: "20px"}} href='https://utpedupe-my.sharepoint.com/:f:/g/personal/u21214916_utp_edu_pe/EsmkSm7gdQRLjc80TUo2fdYB4pPPp5fJV6OvGFJLvlLTjg?e=bZqPeB' target='_blank'> ver más... </Button>
                    </div>
            </section>
            </MainLayout>
        </>
    )
}

export default Education
