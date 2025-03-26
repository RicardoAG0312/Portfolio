import React from 'react'

const textos = [
    {
        texto: "Web moderna y responsiva con Bootstrap y React.js para experiencias interactivas y fluidas."
    },
    {
        texto: "Back-end sólido con Node.js y Express.js, creando APIs rápidas y escalables."
    },
    {
        texto: "Desarrollo móvil con Flutter, aplicaciones nativas para Android e iOS con gran rendimiento."
    },
    {
        texto: "Bases de datos eficientes con MySQL, asegurando rendimiento y seguridad en la gestión de datos."
    },
    {
        texto: "Flujo de trabajo optimizado con Git, asegurando control de versiones, colaboración eficiente y despliegue seguro."
    }
]

function Experience({img1, img2, img3, img4, img5, img6, img7}) {
    return (
        <div className='row' style={{minHeight: "400px"}}>
            <div className="col-md-6 col-12 p-0 d-flex flex-column justify-content-center align-items-center">
            <img  src={img1} alt="Code typing animation" />
            </div>
            <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">
                <h3> Full Stack Development </h3>
                <div className='mt-2 mb-5 d-flex justify-content-center align-items-center gap-3'>
                    <img  className="img-fluid " style={{objectFit: "contain", maxWidth: "60px", height: "60px" }} src={img2} alt="Code typing animation" />
                    <img  className="img-fluid " style={{objectFit: "contain", maxWidth: "60px", height: "60px" }} src={img3} alt="Code typing animation" />
                    <img  className="img-fluid " style={{objectFit: "contain", maxWidth: "60px", height: "60px" }} src={img4} alt="Code typing animation" />
                    <img  className="img-fluid " style={{objectFit: "contain", maxWidth: "60px", height: "60px" }} src={img5} alt="Code typing animation" />
                    <img  className="img-fluid " style={{objectFit: "contain", maxWidth: "60px", height: "60px" }} src={img6} alt="Code typing animation" />
                    <img  className="img-fluid " style={{objectFit: "contain", maxWidth: "60px", height: "60px" }} src={img7} alt="Code typing animation" />
                </div>
                <ul>
                    {textos.map((texto, index) => (
                        <li style={{margin: "10px 0", listStyle: "circle"}} key={index}> {texto.texto} </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Experience
