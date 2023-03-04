import {useEffect, useState} from 'react'
import { modedas } from '../data/monedas'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'

const ImputSubmit = styled.input`
background-color: #9497ff;
border: none;
width: 100%;
padding: 10px;
color: #fff;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;

&:hover{
    background-color: #7a7dfe;
    cursor: pointer;
}

`

const Formulario = ({setMonedas}) => {

  
  const [criptos, setCriptos]= useState([])
  const [error, setError]= useState(false)



const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', modedas)
const [criptomoneda, Selectcriptomoneda] = useSelectMonedas('Elige tu Cripto moneda', criptos)



SelectMonedas();


useEffect ( ()=>{
const consultarAPI = async () =>{
const url =" https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

const respuesta= await fetch(url)
const resultado = await respuesta.json()


const arrayCriptos = resultado.Data.map(cripto =>{

  const objeto = {
    id: cripto.CoinInfo.Name,
    nombre: cripto.CoinInfo.FullName
    
  }
 
  return objeto
}
)

setCriptos(arrayCriptos)

}
consultarAPI();
}, []) 


const handlesubmit = (e)=>{
e.preventDefault()

if([moneda, criptomoneda].includes('')){

  setError(true);

  return
}

setError(false)
setMonedas({
  moneda, 
  criptomoneda
}
)
}

  return (

    <>
    {error && <Error>Todos los campos son obligatorios </Error>}
    <form
     onSubmit={handlesubmit}
     >

    <SelectMonedas/>


    <Selectcriptomoneda/>


    <ImputSubmit type="submit" value="cotizar" ></ImputSubmit>


    </form>
</>
  )
}

export default Formulario
