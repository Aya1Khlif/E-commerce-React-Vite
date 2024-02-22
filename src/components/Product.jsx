import { Link } from "react-router-dom";
import "./product.css";
import Card from "react-bootstrap/Card";
export default function Product(props) {
  const { product, showButton } = props;
  return (
    <>
      <div className="">
        <div className="row">
          <div className="" style={{ height: "100%" }}>
            <Card
              className="card col-md-6 col-sm-12 "
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title> {product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <p>Price : {product.price}</p>
                {showButton && (
                  <Link
                    className="btn btn-primary"
                    to={`/E-commerce-React-Vite/product/${product.id}`}
                  >
                    Details
                  </Link>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
