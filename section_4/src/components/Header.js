export default function Header(props) {
    const { image, alt, title, description } = props.item;
    return (
        <header>
            <img src={image} alt={alt} />
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    );
}