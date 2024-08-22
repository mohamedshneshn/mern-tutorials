/*

React Router
------------
- used to navigate between different pages in react

import { BrowserRouter as Router, Routes, Route , Link ,useNavigate , useParams} from "react-router-dom";



- npm install react-router-dom

- App.js
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import {Container} from "react-bootstrap";
    import Home from "./pages/Home";
    import About from "./pages/About";
    import Contact from "./pages/Contact";
    import ProductDetails from "./pages/ProductDetails";
    import Header from "./components/Header";
    import Footer from "./components/Footer";

    const App = () => {
    return (
        <Router>
        <Header />
        <main className="py-3">
            <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                //:id is a dynamic parameter that can be accessed using useParams hook
            </Routes>
            </Container>
        </main>
        <Footer />
        </Router>
    );
    };

    export default App;

   
--------------------------------------------------------------------------------------------------------------------------------
    import { useParams } from "react-router-dom";
    import Product from "../components/Product";

    const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p._id === id);

    return (
        <div>
        <Product product={product} />
        </div>
    );
    };

    export default ProductDetails;

----------------------------------------------------------------------------------------------------------------------------------
    import { Link } from "react-router-dom";

    const Product = ({ product }) => {
    return (
        <div>
        <Link to={`/product/${product._id}`}>
            <h3>{product.name}</h3>

            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>{product.rating} Stars ({product.numReviews} Reviews)</p>    
        </Link>
        </div>
    );
    };

    export default Product;
--------------------------------------------------------------------------------------------------------------------------------
    import { Link } from "react-router-dom";
    import Product from "../components/Product";
    import products from "../products";


    const Home = () => {
    return (
        <div>
        <h1>Latest Products</h1>
        <div>
            {products.map((product) => (
            <Product key={product._id} product={product} />
            ))}
        </div>
        </div>
    );
    };

    export default Home;

--------------------------------------------------------------------------------------------------------------------------------
    import { useNavigate } from "react-router-dom";

    const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about");
    };

    return (
        <div>
        <h1>Home</h1>
        <button onClick={handleClick}>About</button>
        </div>
    );
    };

    export default Home;

------------------------------------------------------------------------------------------------------------------------------------
what is the difference between Link and anchor tag and useNavigate and Route 
------------------------------------------------------------------------------------------------------------------------------------
- Link is used to navigate between different pages in react without reloading the page when clicked .
- anchor tag is used to navigate between different pages in html but it will reload the page when clicked.

- useNavigate is a hook that is used to navigate between different pages in react without reloading the page when called.
- Route is used to navigate between different pages in react without reloading the page at specified path.

-----------------------------------------------------------------------------------------------------------------------------------



    
      






*/
