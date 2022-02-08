import "./contact.scss";
import datosDeContacto from "./data.js";

const Contact = ({actual}) => {
  return (
    <div className="container" style={{ position: "relative", zIndex: "3" }}>
      <div className="contactForm row d-flex justify-content-center m-3 animate__animated animate__fadeIn animate__slow">
        <div>
       
        </div>
        <div className="col-12 col-md-7 card__contact d-flex flex-column justify-content-around align-items-center">
          {datosDeContacto.map((d) => {
            return (
              <div className="row test d-flex flex-column align-items-center">
                <a href={d.dir || "#"} target={d.dir && !d.correo ? "_blank" : ""} style={{textDecoration: "none"}}>
                <div className="col-12 col-sm-8 col-md-10 contenedor-info">
                  {d.icono}
                  {actual ? d.descEn : d.desc}
                </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
