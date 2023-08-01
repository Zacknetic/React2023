import { Link } from "react-router-dom";

const PRODUCTS = [
    { productId: "p1", title: "A Book", price: 6, description: "A great book!" },
    { productId: "p2", title: "A Carpet", price: 66, description: "Red and green." },
    { productId: "p3", title: "An Online Course", price: 6, description: "Learn React!" },
    ];

    // const path = "/products"

export default function ProductsPage() {
  return (
    <>
      <h1>My Products Page</h1>
        <ul>
            {PRODUCTS.map((product) => (
                <li key={product.productId}>
                    {/* <Link to={`${path}/${product.productId}`}>{product.title}</Link> */}
                    <Link to={`${product.productId}`} relative="true">{product.title}</Link>

                </li>
            ))}
        </ul>
    </>
  );
}
