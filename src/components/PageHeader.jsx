export default function PageHeader({ eyebrow, title, description, action }) {
  return (
    <div className="page-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
      </div>
      <div className="page-heading-copy">
        <p>{description}</p>
        {action}
      </div>
    </div>
  );
}
