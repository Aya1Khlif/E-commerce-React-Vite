import {Link} from "react-router-dom";
import '../../src/App.css'
import Card from "react-bootstrap/Card";
export default function Product(props) {
  
  const {product,showButton} = props ;
  return (
    <>
      <div className="container">
   <div className="row">
    <div className="col-lg-12  col-sm-12">
    <Card className="card" >
              <Card.Img variant="top" src={product.image}    />
              <Card.Body >
                <Card.Title> {product.title}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text>
                <p>Price : {product.price}</p>
                {showButton &&  (
                    <Link className="btn btn-primary" to={`/product/${product.id}`}>
                    Details
                  </Link>
          )}
              </Card.Body>
            </Card>
    </div>
   </div>
      </div>
    </>
  )
}
