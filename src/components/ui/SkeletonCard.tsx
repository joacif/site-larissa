export default function SkeletonCard() {
  return (
    <div
      className="service-card"
      aria-busy="true"
      aria-label="Carregando serviço..."
    >
      <div className="skeleton" style={{ height: 12, width: "40%", marginBottom: 16 }} />
      <div className="skeleton" style={{ height: 22, width: "80%", marginBottom: 12 }} />
      <div className="skeleton" style={{ height: 14, width: "100%", marginBottom: 8 }} />
      <div className="skeleton" style={{ height: 14, width: "90%", marginBottom: 8 }} />
      <div className="skeleton" style={{ height: 14, width: "75%", marginBottom: 24 }} />
      <div className="skeleton" style={{ height: 12, width: "35%", marginBottom: 20 }} />
      <div className="skeleton" style={{ height: 38, width: "60%" }} />
    </div>
  );
}
