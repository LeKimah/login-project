export default function Login({
  usuarios,
  loginData,
  setLoginData,
  usuarioLogueado,
  setUsuarioLogueado,
  loginerror,
  setLoginError,
}) {
  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      setLoginError("Email o contraseña incorrectos");
      return;
    }

    setLoginError("");

    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.email === loginData.email &&
        usuario.password === loginData.password,
    );

    if (usuarioEncontrado) {
      setUsuarioLogueado(usuarioEncontrado);

      localStorage.setItem(
        "usuarioLogueado",
        JSON.stringify(usuarioEncontrado),
      );
    }

    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      {usuarioLogueado ? (
        <div className="flex flex-col items-center">
          <h2 className="mt-4 text-green-500 text-sm font-bold items-center">
            Bienvenido, {usuarioLogueado.nombre}!
          </h2>

          <button
            className="mt-4 mb-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setUsuarioLogueado(null);
              localStorage.removeItem("usuarioLogueado");
            }}
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <form
          className="mt-4 mb-4 flex flex-col gap-4 w-80 p-4 border border-gray-300 rounded shadow-md"
          onSubmit={handleLogin}
        >
          <input
            className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />

          <input
            className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />

          <button
            className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Iniciar sesión
          </button>

          {loginerror && <p className="text-red-500 text-sm">{loginerror}</p>}
        </form>
      )}
    </>
  );
}
