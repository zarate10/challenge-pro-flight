import './../css/boxlogo.css'

export const BoxLogo = ({ srcImg, id, active }) => { 
    return ( 
        <div className="box-logo" id={id} style={active === id ? {opacity: 1} : undefined }>
            <img src={srcImg} alt="img" />
        </div>
    )
}