import './contact.scss'
import datosDeContacto from './data.js'



const Contact = () => {

    return (

        <div className='container'>
            <div className='row d-flex justify-content-center m-3 animate__animated animate__fadeIn animate__slow'>
                <div className='col-12 col-md-7 card__contact d-flex flex-column justify-content-around align-items-center'>

                    { datosDeContacto.map( d => {

                        return(
                            <div className='row test d-flex flex-column align-items-center'>
                                <div className='col-12 col-sm-8 col-md-10 contenedor-info'>
                                    { d.icono }
                                    { d.desc }
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>

        </div>

    );
}

export default Contact;