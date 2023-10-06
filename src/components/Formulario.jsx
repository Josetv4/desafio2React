import { useState } from 'react';
import Alert from './Alert';

const Formulario = ({ handleRegistro, confirmation, message }) => {
  
  
   


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name === '' || email === '' || password === '' || confirmPassword ==='' ) {

      handleRegistro(2)
      setAlert(true);
      return;
    }

    if (password !== confirmPassword) {
      handleRegistro(3)
      setAlert(true);
      return;
    }

    if (!validateEmail(email)) {
      handleRegistro(4)
      setAlert(true);
      return;
    }

    handleRegistro(1)
    setAlert(true);
    
  };



  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          <input
            id='name'
            autoFocus
            placeholder='Nombre'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          <input
            id='email'
            placeholder='ejemplo@correo.com'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='new-password'>
          <input
            id='new-password'
            placeholder='Contraseña'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor='confirm-password'>
          <input
            id='confirm-password'
            placeholder='Confirmar Contraseña'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-success">Registrar</button>
      
      </form>

      {alert ? <Alert type={confirmation} message={message} /> :null}
    </div>
    </>
  );
};

export default Formulario;
