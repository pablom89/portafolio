import styled from "styled-components";


export const Wrapper = styled.div`
    background-color: black;
    min-height: 100vh;
    position: relative;
    z-index: 3;
    background: transparent;

    .about-card{
        width: 80%;
        height: auto;
        background-color: rgb( 207, 207, 207, 0.1);
        margin-top: 50px;
        border-radius: 25px;        
        padding: 15px;
        align-items: center;
    }

    .last-about {
        margin-bottom: 10px;
    }

    /////////////// DARK THEME ////////////

    .dark-theme-about > div{
        background-color:#f5f5f5de;
          p,h3,ul,li{
            color: black !important;
            font-weight: bold;
          }
          b{
            font-weight: bold;
            color: #842029 !important;
          }
          .skills, img.skillsExcel-about {
              border: unset !important;
          }
      }
`;

export const GridContainerAbout = styled.div`
    import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poiret+One&family=Signika+Negative:wght@300&display=swap');
     
    /////////////////// GRID ////////////////////

    display: grid;
    grid-template-columns: auto auto;

    .grid-item-about-1{
        grid-column: 1/2;
        grid-row: 1/2;
    }
    
    .grid-item-about-2{
        grid-column: 1/2;
        grid-row: 2/3;
    }
    
    .grid-item-about-3{
        grid-column: 1/2;
        grid-row: 3/4;
    }
    
    .grid-item-about-4{
        grid-column: 2/3;
        grid-row: 1/4;
    }

    @media ( max-width: 767px ){
        grid-template-columns: auto;
        text-align: center;

        .grid-item-about-2{
            grid-column: 1/2;
            grid-row: 3/4;
        }
        
        .grid-item-about-3{
            grid-column: 1/2;
            grid-row: 4/5;
        }
        
        .grid-item-about-4{
            grid-column: 1/2;
            grid-row: 2/3;
        }
    }

    //////// GRID ///////////////

    p{
        color: white;
        padding: 15px;
        text-align: center;
        font-family: 'Signika Negative', sans-serif;
        line-height: 1.5;
        white-space: pre-line;
        text-align: justify;  
    }

    /////// CLASES //////////////

    .img-container{
        margin: 20px;
    }

    img[alt=foto-personal]{
        border-radius: 50%;
        border: 3px solid #d1ad62;
        box-shadow: 0 0 10px #ffc107;
        width: 200px;
        height: 200px;
    }

    img[alt=programador]{
        width: 28px;
        height: 28px;
        vertical-align: text-bottom;
    }

    img.skills{
        border-radius: 50%;
    }
    
    img.skillsExcel-about{
        border-radius: 50%;
        border: 3px solid #d1ad62;
        box-shadow: 0 0 10px white;
        width: 48px;
        height: 48px;
        margin-top: 20px;
    }

    .skills{
        border: 3px solid #d1ad62;
        box-shadow: 0 0 10px white;
    }

`

export const Intereses = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    ul.intereses{
        list-style-type: disc;
        margin: 0px 15px 15px;
        padding: 15px;
        font-family: "Signika Negative", sans-serif;
        line-height: 1.5;
        color: white;
    }

    .intereses li{
        margin-bottom: 10px;
        text-align: justify;
    }

    b.ultimosTrabajosAbout{
        cursor: pointer;
        font-weight: bold;
    }
`