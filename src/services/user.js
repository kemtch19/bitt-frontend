const PREFIX_LOCAL = "http://localhost:1111/users/id";

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${PREFIX_LOCAL}/${id}`);

    if (!response.ok) throw new Error("Error al obtener este usuario");

    const data = await response.json();

    console.log(`data: ${data.user}`);

    return data;
  } catch (e) {
    console.log(`Error al obtener este usuario: ${e.message}`);
    return null;
  }
};
