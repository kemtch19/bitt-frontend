import { KeyRoundIcon, LockKeyhole, MailIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Register = () => {
  // 🧠 Logic

  return (
    <form className="w-screen h-screen flex justify-center items-center bg-linear-to-bl from-blue-600 to-violet-600">
      <div className="border-2 border-gray-600 p-4 shadow rounded-2xl mx-2 bg-base-100">
        <h1 className="text-3xl font-bold text-center p-0.5 px-2 rounded-2xl">
          Sign Up
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Únete a una comunidad amigable y profesional.
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
          <label className="label mt-2 text-sm text-white/90">
            Correo Electrónico
          </label>
          <div className="flex items-center bg-gray-900 rounded-md px-3">
            <MailIcon className="text-gray-400 w-4 h-4" />
            <input
              type="email"
              className="bg-transparent px-1 py-2 outline-none text-white placeholder:text-sm"
              placeholder="Usuario@example.com"
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
          <label className="label mt-2 text-sm text-white/90">
            Confirmar Contraseña
          </label>
          <div className="flex items-center bg-gray-900 rounded-md px-3">
            <LockKeyhole className="text-gray-400 w-4 h-4" />
            <input
              type="email"
              className="bg-transparent px-1 py-2 outline-none text-white placeholder:text-sm"
              placeholder="Confirma tu contraseña"
            />
          </div>
        </div>

        <button className="mt-6 text-center btn btn-info w-full">
          Crear Cuenta
        </button>

        <p className="text-xs my-1 text-center text-gray-400">
          ¿Ya tienes una cuenta?{" "}
          <Link to={"/login"}>
            <b className="text-blue-500">Inicia Sesión</b>
          </Link>
        </p>
        <p className="text-xs mt-6 text-center text-gray-300">
          Al registrarse, aceptas nuestros <u>Términos de servicio</u> y{" "}
          <u>Política de privacidad</u>
        </p>
      </div>
    </form>
  );
};
