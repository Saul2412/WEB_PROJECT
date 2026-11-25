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

export default function Registro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Redirigir al dashboard si la sesión ya existe
  useEffect(() => {}, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.correo || !formData.password) {
      alert("Por favor complete los campos obligatorios");
      return;
    }

    if (formData.password.length < 4) {
      alert("La contraseña debe tener al menos 4 caracteres");
      return;
    }

    const payload = {
      ...formData,
      carrera: "Ingeniería en Desarrollo y Gestión de Software",
      proyecto: "",
      empresa: "",
      fechaRegistro: new Date().toLocaleTimeString(),
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
        <p className="eyebrow">ÚNETE A CAMPUSPLAY</p>
        <h1 className="title">Crea tu cuenta.</h1>
        <p className="subtitle">Usa tus datos institucionales para comenzar.</p>

        {/* Nombre completo */}
        <div className="group">
          <label htmlFor="nombre">Nombre completo</label>
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
              placeholder="Tu nombre y apellidos"
              required
            />
          </div>
        </div>

        {/* Correo institucional */}
        <div className="group">
          <label htmlFor="correo">Correo institucional</label>
          <div className="input-wrapper">
            <span className="input-icon">
              <Icon>
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </Icon>
            </span>
            <input
              id="correo"
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="nombre@universidad.edu"
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
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mínimo 4 caracteres"
              required
            />
          </div>
        </div>

        {/* Botón */}
        <button type="submit" className="btn-primary">
          Crear cuenta
          <Icon size={18}>
            <path d="m9 18 6-6-6-6" />
          </Icon>
        </button>

        {/* Iniciar sesión */}
        <p className="signup-row">
          ¿Ya tienes una cuenta? <Link to="/Login">Acceder</Link>
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
