import { guardarUsuarios } from "../utils/localStorage";

export default function UsuarioCard({
  usuario,
  usuarios,
  setUsuarios,
  setFormData,
  setEditandoId,
}) {
  const eliminarUsuario = (idEliminar) => {
    const usuariosFiltrados = usuarios.filter(
      (usuario) => usuario.id !== idEliminar,
    );

    setUsuarios(usuariosFiltrados);

    guardarUsuarios(usuariosFiltrados);
  };

  return (
      <div className="mt-4 p-4 border border-gray-300 rounded flex flex-col items-center">
        <p className="block text-gray-700">Nombre: {usuario.nombre}</p>
        <p className="block text-gray-700">Email: {usuario.email}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setFormData({
              nombre: usuario.nombre,
              email: usuario.email,
              password: usuario.password,
            });
            setEditandoId(usuario.id);
          }}
        >
          Editar
        </button>
        <button
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => eliminarUsuario(usuario.id)}
        >
          Eliminar
        </button>
      </div>
  );
}
