import './../assets/css/boxlogo.css'

export const BoxLogo = ({ srcImg, id, actived }) => { 
    return ( 
        <div className="box-logo" id={id} style={actived === id ? {opacity: 1} : undefined }>
            <img src={srcImg} alt="img" />
        </div>
    )
}