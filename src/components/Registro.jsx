import "./Registro.css"
import Formulario from './Formulario';
import SocialButton from './SocialButton';
// import Alert from './Alert';

const Registro = () => {
    const socialButtons = [
{ 
    id : 1,
    url :"http://www.facebook.com",
    icon : "fa-brands fa-facebook fa-sm",
},
{
    id : 2,
    url:"http://www.github.com",
    icon: "fa-brands fa-github",
},
{   id:3, 
    url:"http://www.linkedin.com",
icon: "fa-brands fa-linkedin" 
},
    


    ]
    return (
        <div className="app-container">
            <div className="app-title">
                <h1>Crea una cuenta</h1>
            </div>
            <div className="social-networks">
              
               { socialButtons.map ((social ) => (
                  <SocialButton               
                 key = {social.id}
                url = {social.url} 
                icon = {social.icon}

                />
               ))
        }
            </div>
            <p>O usa tu email para registrarte</p>
            <div>
                <Formulario/>
            </div>
        </div>
    );
};

export default Registro;
