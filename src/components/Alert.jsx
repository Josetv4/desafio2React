const Alert = ({ type, message }) => {
    return (

        <div className={type} role="alert">
        <p>{message}</p>
        </div>
    );
};

export default Alert;