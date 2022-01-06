import './about.scss';
import foto from '../../imgs/asset2.png'


const About = () => {
    return (  

        <div className='container-fluid wrapper'>
            <div className='row d-flex justify-content-center align-items-center'>
            
                <div className='col-12 col-sm-10 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                    
                    <div className='about-card d-flex flex-column align-items-center animate__animated animate__fadeIn animate__slow'>
                        <div className='img-container'>
                            <img src={ foto } alt='foto-personal'/>
                        </div>
                        <p>
                        Thank you for visit my humble portfolio.. I’m gonna cut to the chase.. and say that I’m MERN stack junior Developer, who got here after taking several courses, and watch an endless series of programming tutorials.. I like learning new stuff every day that allow me to become a better software developer. If I was able to create a WebApp, I think I can create more and more, so I’m looking forward to gain expercience on every field and I’m proudly open to learn new techs. If you’re here, I’d love to be part of your team or company to collaborate on your projects ...
                        </p>
                    </div>
                
                </div>
            </div>
        </div>

    );
}
 
export default About;