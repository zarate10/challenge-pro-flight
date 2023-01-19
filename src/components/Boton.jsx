import './../assets/css/boton.css'

export const Boton = ({ children, setActivated, activated, instruccion }) => { 
    return ( 
        // Si la instrucción es "true" vamos a sumarle uno al activate, sino, le restamos 1.
        <button onClick={() => {instruccion ? setActivated(activated + 1) : setActivated(activated - 1)}} className="btn-carousel">
            { children }
        </button>
    )
}