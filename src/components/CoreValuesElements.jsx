import "../styles/CoreValuesElements.css";

function CoreValuesElements({ image, title, content }) {
  return (
    <div className="coreValuesElement">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default CoreValuesElements;
