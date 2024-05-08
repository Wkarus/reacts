import { useState } from "react";

import Perfil from "./components/Perfil/";
import Formulario from "./components/Formulario";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
  <>
    <Perfil nome=" icaro" endereço= "https://github.com/Wkarus.png" />
  
  {formularioEstaVisivel && (
    <Formulario />
  )}


  <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle form</button>
  </>
  )
}
export default App
