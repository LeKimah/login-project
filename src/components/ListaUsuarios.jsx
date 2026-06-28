import UsuarioCard from "./UsuarioCard";

export default function ListaUsuarios({
  usuarios,
  setUsuarios,

  setFormData,

  setEditandoId,
}) {
  return (
    <>
      <h2 className="block text-gray-700 font-bold flex flex-col items-center">
        Usuarios Registrados
      </h2>
      {usuarios.map((usuario) => (
        <UsuarioCard
          key={usuario.id}
          usuario={usuario}
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          setFormData={setFormData}
          setEditandoId={setEditandoId}
        />
      ))}
    </>
  );
}
