import './../css/boton.css'

export const Boton = ({ children, setActivate, activate, instruccion }) => { 
    return ( 
        // Si la instrucción es "true" vamos a sumarle uno al activate, sino, le restamos 1.
        <button onClick={() => {instruccion ? setActivate(activate + 1) : setActivate(activate - 1)}}>
            { children }
        </button>
    )
}