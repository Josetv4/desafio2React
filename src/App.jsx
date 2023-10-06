import './App.css'
import Registro from './components/Registro';
import { useState } from 'react';

function App() {




const [message, setMessage] = useState("");
const [confirmation, setConfirmation] = useState("");

const handleRegistro = (estado) => {
  if (estado == 1) {
    setMessage('Formulario enviado con éxito'); 
    setConfirmation('alert alert-success');
  } else if (estado == 2) { 
    setMessage('Todos los campos son obligatorios'); 
    setConfirmation('alert alert-danger');
  } else if (estado == 3) { 
    setMessage('Las contraseñas no coinciden'); 
    setConfirmation('alert alert-danger');
  } else if (estado == 4) { 
    setMessage('El correo electrónico no tiene el formato correcto'); 
    setConfirmation('alert alert-danger');
  }
};

  return (

    <>
      <Registro 
       handleRegistro ={handleRegistro}
       confirmation = {confirmation}
       message = {message}       
      />
    </>
  )
}

export default App;
