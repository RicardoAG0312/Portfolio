import React from 'react';
import styled from 'styled-components';

import ReactJS from "../../assets/react.svg";
import Bootstrap from "../../assets/Bootstrap.svg";
import Git from "../../assets/git.svg";


const Card = ({portada, titulo, texto, imagen1, imagen2, imagen3}) => {
    return (
        <StyledWrapper>
            <div className="book">
                <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: "90%", marginLeft: "32px"}}>
                    <h5> {titulo} </h5>
                    <span> {texto} </span>
                    <div className='gap-3 p-3 d-flex justify-content-center align-items-center' style={{ width: "100%"}}>
                        <img style={{width: "50px", height: "50px", objectFit: "contain"}} src={imagen1} alt="Imagen Logo Framework" />
                        <img style={{width: "50px", height: "50px", objectFit: "contain"}}src={imagen2} alt="Imagen Logo Framework" />
                        <img style={{width: "50px", height: "50px", objectFit: "contain"}} src={imagen3} alt="Imagen Logo Framework" />
                    </div>
                </div>
                <div className="cover">
                    <p> {portada}</p>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
.book {
    position: relative;
    border-radius: 10px;
    width: 250px;
    height: 300px;
    background-color: whitesmoke;
    -webkit-box-shadow: 1px 1px 12px rgba(209,209,209,0.64);
    box-shadow: 0px 3px 12px 5px rgba(209,209,209,0.64)
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: lightgray;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
    .book:hover .cover {
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        -webkit-transform: rotatey(-80deg);
        -ms-transform: rotatey(-80deg);
        transform: rotatey(-80deg);
    }
    .book span {
        font-size: 14px
    }
    p {
        font-size: 16px;
        font-weight: bolder;
    }`;

export default Card;
