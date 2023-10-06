import PropTypes from 'prop-types';

const SocialButton = ({ id, url, icon }) => {
    SocialButton.propTypes = {
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
     
      };
      
    return (
        <div className="socialButton" id={id}   target="_blank">
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