import { Link } from "react-router-dom";

export default function HomePage() {

    // const navigate = useNavigate()

    // const handleClick = () => {
    //     navigate("/products")
    // }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="products">/products</Link>
      </p>
        {/* <button onClick={handleClick}>Go to /products</button> */}
    </>
  );
}
