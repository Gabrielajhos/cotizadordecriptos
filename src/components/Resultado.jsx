import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
color: #fff;
font-family: 'Lato', sans-serif;
display: flex;
align-items: flex-start;
gap: 1rem;
margin-top: 30px;

`
const Imagen = styled.img`
display: block;
width: 120px;


`

const Texto = styled.p`
font-size: 18px;

`

const Precio = styled.p`
font-size: 24px;
span{
    font-weight: 700;
}

`

const Resultado = ({resultado}) => {

    console.log(resultado);

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
    
    <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagencripto'></Imagen>
    <div>
      <Precio>El precio es de: <span>{PRICE}</span></Precio>
      <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
      <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
      <Texto>Variación últimas 24 Horas: <span>{CHANGEPCT24HOUR}</span></Texto>
      <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
     </div> 
    </Contenedor>
  )
}

export default Resultado
