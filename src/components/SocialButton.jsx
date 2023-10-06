

const SocialButton = ({  url, icon }) => {

      
    return (
        <div className="socialButton"  target="_blank">
            <a

                href={url}
             
                className="btn btn-lg btn-outline-dark rounded-circle"
                role="button"
            >
                <i className={icon}></i>
            </a>
        </div>
    );
};

export default SocialButton;