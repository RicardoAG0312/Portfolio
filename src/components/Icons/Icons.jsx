import React from 'react'
import Button from 'react-bootstrap/Button';
import styles from "./Icons.module.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


function Icons() {
    return (
        <>
            <div className={styles.box_icons}>
                <a
                href="https://github.com/RicardoAG0312?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub />
                </a>
                <a
                href="https://www.linkedin.com/in/ricardo-goicochea-535103240/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaLinkedin />
                </a>
                <a
                href="ricardo41216383@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <SiGmail />
                </a>
            </div>
            <Button className={styles.boton}> ⭐ Star Me On Github </Button>
        </>
    )
}

export default Icons
