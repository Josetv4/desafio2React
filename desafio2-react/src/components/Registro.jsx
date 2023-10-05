import "./Registro.css"
import Formulario from './Formulario';
import SocialButton from './SocialButton';
// import Alert from './Alert';

const Registro = () => {
    return (
        <div className="app-container">
            <div className="app-title">
                <h1>Crea una cuenta</h1>
            </div>
            <div className="social-networks">
                <SocialButton
                    url="http://www.facebook.com"
                    icon= "fa-brands fa-facebook fa-sm"
                />
                <SocialButton
                    url="http://www.github.com"
                    icon= "fa-brands fa-github"
                />
                <SocialButton
                    url="http://www.linkedin.com"
                    icon= "fa-brands fa-linkedin"
                />
                
            </div>
            <p>O usa tu email para registrarte</p>
            <div>
                <Formulario/>
            </div>
        </div>
    );
};

export default Registro;
