import { FormSchema } from "../schema/form";

import { guardarUsuarios } from "../utils/localStorage";

export default function Formulario({
  usuarios,
  setUsuarios,
  formData,
  setFormData,
  editandoId,
  setEditandoId,
  error,
  setError,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const result = FormSchema.safeParse(formData);

    if (!result.success) {
      setError(result.error.flatten().fieldErrors);
      return;
    }

    setError({});

    // EDITAR USUARIO
    if (editandoId) {
      const usuariosActualizados = usuarios.map((usuario) =>
        usuario.id === editandoId
          ? {
              ...formData,
              id: editandoId,
            }
          : usuario,
      );

      setUsuarios(usuariosActualizados);

      guardarUsuarios(usuariosActualizados);

      setEditandoId(null);
    }

    // CREAR USUARIO
    else {
      const nuevoUsuario = {
        ...formData,
        id: crypto.randomUUID(),
      };

      const nuevosUsuarios = [...usuarios, nuevoUsuario];

      setUsuarios(nuevosUsuarios);

      guardarUsuarios(nuevosUsuarios);
    }

    setFormData({
      nombre: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold m-4">Formulario de Registro</h1>
        <label className="block text-gray-700 font-bold" htmlFor="nombre">
          Nombre:
        </label>
        <input
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          type="text"
          value={formData.nombre}
          onChange={(e) =>
            setFormData({
              ...formData,
              nombre: e.target.value,
            })
          }
          id="nombre"
          name="nombre"
        />

        {error.nombre && <p className="mb-4 text-red-500">{error.nombre[0]}</p>}

        <label className="block text-gray-700 font-bold" htmlFor="email">
          Correo Electrónico:
        </label>
        <input
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          id="email"
          name="email"
        />

        {error.email && <p className="mb-4 text-red-500">{error.email[0]}</p>}

        <label className="block text-gray-700 font-bold" htmlFor="password">
          Contraseña:
        </label>
        <input
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
          id="password"
          name="password"
        />

        {error.password && (
          <p className="mb-4 text-red-500">{error.password[0]}</p>
        )}

        <button
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          {editandoId ? "Actualizar Usuario" : "Registrar Usuario"}
        </button>
      </form>
    </>
  );
}
