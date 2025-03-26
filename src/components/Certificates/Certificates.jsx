import React from 'react'
import styles from "../../pages/Education/education.module.css";
import Card from 'react-bootstrap/Card';

function Certificates({titulo, imagen, descripcion}) {
    return (
        <Card className={styles.card} style={{ width: '100%'}}>
            <div className={styles.card_img}>
                <img src={imagen} alt="Udemy Logo" />
            </div>
            <Card.Body>
                <Card.Title> {titulo} </Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Certificates


