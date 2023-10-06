const Alert = ({ type, message }) => {
    return (
        <div class={type} role="alert">
        <p>{message}</p>
        </div>
    );
};

export default Alert;