export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-heading">
      <h2 className="section-title">{title}</h2>
      <p className="section-sub">{subtitle}</p>
    </div>
  );
}