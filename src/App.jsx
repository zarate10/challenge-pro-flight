import { useState } from 'react'
import { Boton } from './components/Boton'
import { BoxLogo } from './components/BoxLogo'

import './css/styles.css'

import logo from './img/logo.png'

export const App = () => { 

    const [activate, setActivate] = useState(0)

    // Se podrían pushear o modificar las imágenes según el índice, sin la necesidad
    // de cambiar el algoritmo del sistema y seguiría funcionando correctamente.
    const images = [logo, logo, logo, logo] 

    
    if (activate === images.length) { 
        setActivate(0)
    } 

    if (activate === -1) { 
        setActivate(images.length - 1)
    } 

    return ( 
        <>
            <div className="contenedor">
                <Boton setActivate={setActivate} activate={activate} instruccion={false}>⇐</Boton>

                {images.map((element, index) => { 
                    return <BoxLogo key={index} srcImg={element} id={index} active={activate} />
                })}

                <Boton setActivate={setActivate} activate={activate} instruccion={true}>⇒</Boton>
            </div>
        </>
    )
}