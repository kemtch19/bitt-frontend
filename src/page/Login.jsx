export const Login = () => {
  // 🧠 Logic

  return (
    <form>
      <h1>Login</h1>
      <p>ingrese su email</p>
      <input type="text" placeholder="email" />
      <p>ingrese su password</p>
      <input type="password" placeholder="password" />
      <div className="flex">
        <button className="bg-amber-400" type="submit">
          Enviar
        </button>
        <button className="bg-cyan-400" type="reset">
          Cancelar
        </button>
      </div>
    </form>
  );
};
