import { Link } from "react-router-dom";
import { KeyRoundIcon, UserIcon } from "lucide-react";

export const Login = () => {
  // 🧠 Logic

  return (
    <form className="w-screen h-screen flex items-center justify-center bg-linear-to-bl from-blue-600 to-violet-600">
      <div className="border-2 border-gray-600 p-4 shadow rounded-2xl mx-2 bg-base-100">
        <h1 className="text-3xl font-bold text-center p-0.5 px-2 rounded-2xl">
          Sign In
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Introduce tus datos para iniciar sesión bitter
        </p>
        <div className="mt-6">
          <label className="text-sm text-white/90">Nombre Completo</label>
          <div className="flex items-center bg-gray-900 rounded-md px-3">
            <UserIcon className="text-gray-400 w-4 h-4" />
            <input
              type="text"
              className="bg-transparent outline-none text-white w-full px-1 py-2 placeholder:text-sm"
              placeholder="Usuario"
            />
          </div>
          <label className="label mt-2 text-sm text-white/90">Contraseña</label>
          <div className="flex items-center bg-gray-900 rounded-md px-3">
            <KeyRoundIcon className="text-gray-400 w-4 h-4" />
            <input
              type="password"
              className="bg-transparent px-1 py-2 outline-none text-white placeholder:text-sm"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <u className="text-xs text-blue-500">¿Olvidaste tu contraseña?</u>
          <button className="mt-6 text-center btn btn-info w-full" >
            Iniciar Sesión
          </button>
          <p className="text-xs mt-6 text-center text-gray-400">
            ¿Aún no tienes cuenta?
            <Link to={"/register"}>
              <b className="text-blue-500">Regístrate Aquí</b>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};
