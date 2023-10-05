

const SocialButton = ({url, icon}) => {
    return (
        <div className="socialButton">
            <a href={url} target="_blank" class="btn btn-lg btn-outline-dark rounded-circle" role="button">
                <i class={icon}></i>
            </a>
        </div>
    );
};

export default SocialButton;
