import { useState } from 'react';
import Alert from './Alert';

const Formulario = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '' || confirmPassword ==='') {
      setAlert({ type: 'alert alert-danger', message: 'Todos los campos son obligatorios' });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({ type: 'alert alert-danger', message: 'Las contraseñas no coinciden' });
      return;
    }

    if (!validateEmail(email)) {
      setAlert({ type: 'alert alert-danger', message: 'El correo electrónico no tiene el formato correcto' });
      return;
    }

    setAlert({ type: 'alert alert-success', message: 'Formulario enviado con éxito' });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for='name'>
          <input
            id='name'
            autoFocus
            placeholder='Nombre'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label for='email'>
          <input
            id='email'
            placeholder='ejemplo@correo.com'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label for='new-password'>
          <input
            id='new-password'
            placeholder='Contraseña'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label for='confirm-password'>
          <input
            id='confirm-password'
            placeholder='Confirmar Contraseña'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="submit" class="btn btn-success">Registrar</button>
        {alert && <Alert type={alert.type} message={alert.message} />}
      </form>
    </div>
  );
};

export default Formulario;
