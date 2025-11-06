export const Login = () => {
  // 🧠 Logic

  return (
    <form className="w-screen h-screen flex items-center justify-center bg-linear-to-bl from-blue-600 to-violet-600">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-2xl">
        <legend className="fieldset-legend text-2xl text-center bg-blue-500 p-0.5 px-2 rounded-2xl">Sign In</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </form>
  );
};
