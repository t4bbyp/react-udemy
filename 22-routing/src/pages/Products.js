import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "1", title: "Product 1" },
  { id: "2", title: "Product 2" },
  { id: "3", title: "Product 3" },
];

function ProductsPage() {
  return (
    <>
      <h1>products page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
