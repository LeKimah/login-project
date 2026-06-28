import { useState } from "react";
import Formulario from "./components/Formulario";
import ListaUsuarios from "./components/ListaUsuarios";
import Login from "./components/Login";

import { obtenerUsuarios } from "./utils/localStorage";

function App() {
  const [usuarios, setUsuarios] = useState(() => obtenerUsuarios());
  const [formData, setFormData] = useState({ nombre: "", email: "", edad: "" });
  const [editandoId, setEditandoId] = useState(null);
  const [usuarioLogueado, setUsuarioLogueado] = useState(() => {
    const usuarioGuardado = localStorage.getItem("usuarioLogueado");

    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [loginerror, setLoginError] = useState("");
  const [dark, setDark] = useState(false);

  return (
    <>
      <main
        className={`min-h-screen flex flex-col items-center justify-center ${dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        <button
          className="mb-4 mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setDark(!dark)}
        >
          {dark ? "Modo Claro" : "Modo Oscuro"}
        </button>
        <Formulario
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          formData={formData}
          setFormData={setFormData}
          editandoId={editandoId}
          setEditandoId={setEditandoId}
          error={error}
          setError={setError}
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
        <ListaUsuarios
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          setFormData={setFormData}
          setEditandoId={setEditandoId}
          usuarioLogueado={usuarioLogueado}
        />
        <Login
          usuarios={usuarios}
          loginData={loginData}
          setLoginData={setLoginData}
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
          loginerror={loginerror}
          setLoginError={setLoginError}
        />
      </main>
    </>
  );
}

export default App;
