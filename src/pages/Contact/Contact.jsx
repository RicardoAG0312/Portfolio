import React from 'react'
import MainLayout from '../../layouts/Main'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from "./Contact.module.css";

const textos = [
    {
        texto: "Desarrollo con enfoque en la seguridad, aplicando las mejores prácticas para proteger datos y evitar vulnerabilidades."
    },
    {
        texto: " Implemento estrategias avanzadas para mejorar la velocidad y eficiencia de las aplicaciones, garantizando tiempos de carga reducidos."
    },
    {
        texto: "Diseño interfaces atractivas y funcionales, priorizando la usabilidad y la experiencia del usuario en cada proyecto."
    }
]

function Contact() {
    return (
        <>
            <MainLayout>
            <section className="container" style={{minHeight: "100vh"}}>
                <div className="row" style={{minHeight: "100vh"}}>
                    <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-start" >
                        <h1> Contáctame </h1>
                        <h4> Estoy disponible para nuevos desafíos y colaboraciones. Si buscas un desarrollador comprometido en crear soluciones innovadoras, contáctame. </h4>
                        <h4> ¿Por qué conmigo? </h4>
                        <ul>
                            {textos.map((texto, index) => (
                                <li style={{margin: "10px 0", listStyle: "circle"}} key={index}> <strong> {texto.texto} </strong> </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6 col-12 p-0 d-flex flex-column justify-content-center align-items-center" >
                    <Form action="https://formsubmit.co/ricardo41216383@gmail.com" method="POST" style={{ width: "80%"}}>
                        <Form.Group className="mb-3 w-100" controlId="formBasicText">
                            <Form.Label> Nombres: </Form.Label>
                            <Form.Control name="Nombres" type="text" placeholder="Ingresa tus nombres" required/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-100" controlId="formBasicText">
                            <Form.Label> Apellidos: </Form.Label>
                            <Form.Control name="Apellidos" type="text" placeholder="Ingresa tus apellidos" required/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-100" controlId="formBasicText">
                            <Form.Label> Número Celular: </Form.Label>
                            <Form.Control name="Celular" type="text" placeholder="Ingresa tu número" required/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                            <Form.Label> Correo Electrónico: </Form.Label>
                            <Form.Control name="Correo" type="email" placeholder="Ingresa tu correo" required/>
                        </Form.Group>
                        <Button className={style.boton} variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>

                    </div>
                </div>
            </section>
            </MainLayout>
        </>
    )
}

export default Contact
