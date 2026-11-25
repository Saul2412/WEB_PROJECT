import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/index.css";

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

const INITIAL_MATERIALES = [
  {
    id: "FUT-01",
    nombre: "Balón de fútbol",
    categoria: "Fútbol",
    estado: "NUEVO",
    disponibles: 8,
    total: 10,
    color: "green",
  },
  {
    id: "BAS-04",
    nombre: "Balón de básquetbol",
    categoria: "Básquetbol",
    estado: "BUENO",
    disponibles: 5,
    total: 8,
    color: "orange",
  },
  {
    id: "VOL-02",
    nombre: "Balón de voleibol",
    categoria: "Voleibol",
    estado: "BUENO",
    disponibles: 6,
    total: 6,
    color: "blue",
  },
  {
    id: "FUT-08",
    nombre: "Conos de entrenamiento",
    categoria: "Fútbol",
    estado: "DESGASTADO",
    disponibles: 12,
    total: 20,
    color: "yellow",
  },
  {
    id: "BAS-11",
    nombre: "Pechera deportiva",
    categoria: "Básquetbol",
    estado: "NUEVO",
    disponibles: 0,
    total: 12,
    color: "purple",
  },
];

const CATEGORIAS = ["Todos", "Fútbol", "Básquetbol", "Voleibol"];

export default function Index() {
  const [materiales, setMateriales] = useState(INITIAL_MATERIALES);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const handleSolicitar = (id) => {
    setMateriales((prev) =>
      prev.map((item) =>
        item.id === id && item.disponibles > 0
          ? { ...item, disponibles: item.disponibles - 1 }
          : item,
      ),
    );
  };

  const materialesFiltrados = materiales.filter((item) => {
    const coincideTexto =
      item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.id.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria =
      categoriaActiva === "Todos" || item.categoria === categoriaActiva;
    const coincideStock = !soloDisponibles || item.disponibles > 0;

    return coincideTexto && coincideCategoria && coincideStock;
  });

  const renderMaterialIcon = (id) => {
    switch (id) {
      case "FUT-01":
        return (
          <Icon size={32}>
            <circle cx="12" cy="12" r="10" />
            <polygon points="12 7 16 10 14.5 15 9.5 15 8 10" />
            <path d="M12 2v5M21.5 9l-5.5 1M18 20l-3.5-5M6 20l3.5-5M2.5 9l5.5 1" />
          </Icon>
        );
      case "BAS-04":
        return (
          <Icon size={32}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20" />
            <path d="M5 5c3 3 3 11 0 14M19 5c-3 3-3 11 0 14" />
          </Icon>
        );
      case "VOL-02":
        return (
          <Icon size={32}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20M2 12a14.5 14.5 0 0 1 20 0" />
            <path d="M5.5 5.5c4 2 9 2 13 0" />
          </Icon>
        );
      case "FUT-08":
        return (
          <Icon size={32}>
            <path d="M6 20h12" />
            <path d="M8 20 11 5h2l3 15" />
            <path d="M9.5 13h5" />
          </Icon>
        );
      default:
        return (
          <Icon size={32}>
            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
          </Icon>
        );
    }
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-logo">
            <Icon size={22}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v20M2 12h20" />
              <path d="M5 5c3 3 3 11 0 14M19 5c-3 3-3 11 0 14" />
            </Icon>
          </div>
          <div>
            <p className="sidebar-title">CampusPlay</p>
            <p className="sidebar-sub">Universidad</p>
          </div>
        </div>

        <p className="sidebar-section-label">PLATAFORMA</p>
        <nav className="sidebar-nav">
          <Link to="/Index" className="nav-item active">
            <span className="nav-icon-wrap">
              <Icon size={18}>
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </Icon>
            </span>
            Inventario
          </Link>

          <Link to="/Perfil" className="nav-item">
            <span className="nav-icon-wrap">
              <Icon size={18}>
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </Icon>
              <span className="notif-dot" />
            </span>
            Mis préstamos
          </Link>

          <Link to="/Dashboard" className="nav-item">
            <span className="nav-icon-wrap">
              <Icon size={18}>
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </Icon>
            </span>
            Panel admin
          </Link>
        </nav>
      </aside>

      {/* Contenido Principal */}
      <div className="main-content">
        <header className="topbar">
          <div>
            <p className="topbar-eyebrow">¿Qué necesitas hoy?</p>
            <h1 className="topbar-greeting">Hola Saul</h1>
          </div>
          <button
            type="button"
            className="bell-btn"
            aria-label="Notificaciones"
          >
            <Icon size={19}>
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </Icon>
          </button>
        </header>

        <main className="content-body">
          {/* Búsqueda y Switch */}
          <div className="toolbar-row">
            <div className="search-group">
              <div className="search-box">
                <Icon size={18}>
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </Icon>
                <input
                  type="text"
                  placeholder="Buscar material o código"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="filter-btn"
                aria-label="Filtros avanzados"
              >
                <Icon size={18}>
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="7" x2="17" y1="12" y2="12" />
                  <line x1="10" x2="14" y1="18" y2="18" />
                </Icon>
              </button>
            </div>

            <div className="availability-card">
              <div>
                <p className="availability-title">Solo disponibles</p>
                <p className="availability-sub">Ocultar artículos sin stock</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={soloDisponibles}
                className={`switch-toggle ${soloDisponibles ? "on" : ""}`}
                onClick={() => setSoloDisponibles(!soloDisponibles)}
              >
                <span className="switch-thumb" />
              </button>
            </div>
          </div>

          {/* Título de sección */}
          <div className="section-header">
            <div>
              <p className="section-eyebrow">INVENTARIO</p>
              <h2 className="section-title">Material disponible</h2>
            </div>
            <span className="items-count">
              {materialesFiltrados.length} artículos
            </span>
          </div>

          {/* Píldoras de filtro */}
          <div className="category-pills">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`pill-btn ${categoriaActiva === cat ? "active" : ""}`}
                onClick={() => setCategoriaActiva(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tarjetas de inventario */}
          <div className="inventory-grid">
            {materialesFiltrados.map((item) => {
              const agotado = item.disponibles === 0;
              const porcentaje = Math.round(
                (item.disponibles / item.total) * 100,
              );

              return (
                <article key={item.id} className="material-card">
                  <div className="card-top">
                    <div className={`material-icon-box ${item.color}`}>
                      {renderMaterialIcon(item.id)}
                    </div>

                    <div className="card-meta">
                      <div className="card-code-row">
                        <span className="material-code">#{item.id}</span>
                        <span
                          className={`status-badge ${item.estado.toLowerCase()}`}
                        >
                          {item.estado}
                        </span>
                      </div>

                      <h3 className="material-name" title={item.nombre}>
                        {item.nombre}
                      </h3>

                      <div className="stock-row">
                        <div className="progress-track">
                          <div
                            className="progress-fill"
                            style={{ width: `${porcentaje}%` }}
                          />
                        </div>
                        <div className="stock-text">
                          <strong>{item.disponibles}</strong>/{item.total}
                          <br />
                          disp.
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-solicitar"
                    disabled={agotado}
                    onClick={() => handleSolicitar(item.id)}
                  >
                    {agotado ? "Agotado" : "Solicitar"}
                  </button>
                </article>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
