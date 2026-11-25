import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";

const Icon = ({ children, size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    password: "",
    carrera: "Ingeniería en Desarrollo y Gestión de Software",
  });

  // Redirigir al dashboard si la sesión ya existe
  useEffect(() => {}, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.password) {
      alert("Por favor complete los campos obligatorios");
      return;
    }

    const payload = {
      ...formData,
      proyecto: "",
      empresa: "",
      fechaIngreso: new Date().toLocaleTimeString(),
    };

    navigate("/Index");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-card">
        {/* Marca */}
        <div className="brand">
          <div className="brand-logo">
            <Icon size={28}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v20" />
              <path d="M2 12h20" />
              <path d="M5 5c3 3 3 11 0 14" />
              <path d="M19 5c-3 3-3 11 0 14" />
            </Icon>
          </div>
          <div>
            <p className="brand-name">CampusPlay</p>
            <p className="brand-sub">Deporte universitario</p>
          </div>
        </div>

        {/* Encabezado */}
        <p className="eyebrow">BIENVENIDO DE VUELTA</p>
        <h1 className="title">Todo listo para jugar.</h1>
        <p className="subtitle">
          Accede al material deportivo de tu universidad en segundos.
        </p>

        {/* Nombre */}
        <div className="group">
          <label htmlFor="nombre">Nombre Completo</label>
          <div className="input-wrapper">
            <span className="input-icon">
              <Icon>
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </Icon>
            </span>
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej. Juan Pérez"
              required
            />
          </div>
        </div>

        {/* Contraseña */}
        <div className="group">
          <label htmlFor="password">Contraseña</label>
          <div className="input-wrapper">
            <span className="input-icon">
              <Icon>
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </Icon>
            </span>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="*****"
              required
            />
          </div>
        </div>

        {/* Carrera */}
        <div className="group">
          <label htmlFor="carrera">Carrera</label>
          <div className="input-wrapper is-disabled">
            <span className="input-icon">
              <Icon>
                <path d="M22 10 12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </Icon>
            </span>
            <input
              id="carrera"
              type="text"
              name="carrera"
              value={formData.carrera}
              disabled
            />
          </div>
        </div>

        {/* Botón */}
        <button type="submit" className="btn-primary">
          Acceder
          <Icon size={18}>
            <path d="m9 18 6-6-6-6" />
          </Icon>
        </button>

        {/* Crear cuenta */}
        <p className="signup-row">
          ¿Aún no tienes cuenta? <Link to="/Registro">Crear cuenta</Link>
        </p>

        {/* Pie */}
        <div className="login-footer">
          <Icon size={14}>
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </Icon>
          <span>Acceso protegido por tu institución</span>
        </div>
      </form>
    </div>
  );
}
