// lógica centralizada para la llamada a la API, solo js

export const login = async (input, password) => {
  const res = await fetch("http://localhost:1111/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input, password }),
    credentials: "include",
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Credenciales inválidas");

  return data;
};

export const logout = async () => {
  await fetch("http://localhost:1111/logout", {
    method: "POST",
    credentials: "include",
  });
};

export const getMe = async () => {
  const res = await fetch("http://localhost:1111/users/me", {
    credentials: "include",
  });
  if (!res.ok) throw new Error("No autenticado, no te puedes desloguear");
  return res.json();
};
