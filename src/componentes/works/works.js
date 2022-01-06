import './works.scss';
import trabajos from './trabajos';

const MyWorks = () => {

    return ( 
    
        <div className='container-fluid my-works__wrapper'>
            <div className='row filacajetuda'>
                <div className='col d-flex flex-column justify-content-center align-items-center'>
                    
                    { trabajos.map( trabajo => {
                        return(

                        <div className='card__jobs row d-flex animate__animated animate__fadeIn animate__slow'>
                            <div className='col-12 col-xl-6'>
                                <h3> { trabajo.titulo }</h3>
                                <p> { trabajo.descrip} </p>
                             </div>
                             <div className='col-12 col-xl-6'>
                                { trabajo.iframe }
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