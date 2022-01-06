import './inicio.scss';
import bgVideo from '../../videos/colourful-stars.mp4';


const Inicio = () => {
    return ( 

        <div className='container-fluid contenedor'>

            <video autoPlay loop muted className='video-bg'>
                <source src={ bgVideo } type='video/mp4'>
                </source>
            </video>

    
            <main className='row main d-flex align-items-center'>
                <div className='ms-5 col'>
                    <h1 className='animate__animated animate__fadeIn animate__slower'> Hi, I'm Cesar Muzio</h1>
                    <h2 className='animate__animated animate__bounceInLeft animate__delay-1s'> Web Developer </h2>
                </div>
            </main>
            
        
        </div>


     );
}
 
export default Inicio;