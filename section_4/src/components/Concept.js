import "./Concept.css"

export default function Concept(props) {
    const { title, image, description } = props.item;
    return (
        <li className="concept">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    );
}