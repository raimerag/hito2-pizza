import { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const validate = (formData) => {
    const newErrors = {};

    if (!formData.email) newErrors.email = "El email es obligatorio";
    else if (!formData.email.trim()) newErrors.email = "No debe haber espacios";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Formato invalido";

    if (!formData.password) newErrors.password = "La contraseña es obligatoria";
    else if (!formData.password.trim())
      newErrors.password = "No debe haber espacios";
    else if (!passRegex.test(formData.password))
      newErrors.password =
        "Debe contener mayúsculas, minúsculas, números y 8+ caracteres";

    if (!formData.repeatPassword)
      newErrors.repeatPassword = "La contraseña es obligatoria";
    else if (!formData.repeatPassword.trim())
      newErrors.repeatPassword = "No debe haber espacios";
    else if (formData.repeatPassword !== formData.password)
      newErrors.repeatPassword = "Las Contraseñas no coinciden";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);

    setErrors(validate(updatedForm));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSuccess(true);
    setForm({ email: "", password: "", repeatPassword: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="hero bg-base-300 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">¡Registrate Ahora!</h1>
              <p className="py-6">¡Registrate y Prueba las Mejores Pizzas!</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Correo Electronico</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                    value={form.email}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                  <label className="label">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    value={form.password}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                  )}
                  <label className="label">Repetir la Contraseña</label>
                  <input
                    type="password"
                    name="repeatPassword"
                    className="input"
                    placeholder="Confirme Contraseña"
                    onChange={handleChange}
                    value={form.repeatPassword}
                  />
                  {errors.repeatPassword && (
                    <p className="text-red-500 text-xs">
                      {errors.repeatPassword}
                    </p>
                  )}

                  {success && (
                    <div
                      role="alert"
                      className="flex justify-center m-2 text-success"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Registro Exitoso</span>
                    </div>
                  )}
                  <div>
                    <a className="link link-hover">
                      ¿Haz olvidado tu contraseña?
                    </a>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Crear Cuenta
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
