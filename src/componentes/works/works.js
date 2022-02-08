import './works.scss';
import trabajos from './trabajos';

const MyWorks = ({actual}) => {

    return ( 
    
        <div className='container-fluid my-works__wrapper' style={{position: "relative", zIndex:"3"}}>
            <div className='row filacaja'>
                <div className='col d-flex flex-column justify-content-center align-items-center'>
                    
                    { trabajos.map( (trabajo, index) => {
                        return(

                        <div key={index} className='card__jobs row d-flex animate__animated animate__fadeIn animate__slow'>
                            <div className='col-12 mb-3'>
                                <h3 className="mb-2"> { actual ? trabajo.tituloEn : trabajo.titulo}</h3>
                                <p style={{whiteSpace: "pre-line", lineHeight: "1.2", marginBottom:"10px"}}> { actual ? trabajo.descripEn : trabajo.descrip} </p>
                                <a href={trabajo.link} target="_blank" style={{lineHeight: "1.2", textAling:"center", color:"blue"}}> { trabajo.link} </a>
                             </div>
                             <div className='col-12' style={{height: "400px"}}>
                                { trabajo.iframe || <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100%"}}>Cargando...</div> }
                            </div> 
                        </div>
                        )
                    })}

                </div>
            </div>
        </div>

                 
    );
}
 
export default MyWorks;