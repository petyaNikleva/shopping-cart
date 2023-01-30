import { Button, Container, Nav, Navbar as NavBarsBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function NavBar() {
    const {openCart, cartQuantity} = useShoppingCart();

    return <NavBarsBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
                <Button
                onClick={openCart}
                style={{ width: "3rem", height: "3rem", position: "relative" }}
                variant="outline-primary"
                className="rounded-circle"
            >
                <svg style={{ color: "blue" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="80" cy="216" r="14"></circle><circle cx="184" cy="216" r="14"></circle>
                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="blue" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path>
                </svg>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        color: "white", 
                        width: "1.5rem", 
                        height: "1.5rem",
                        position: "absolute", 
                        bottom: 0, 
                        right: 0,
                        transform: "translate(25%, 25%)"
                    }} 
                >
                        {cartQuantity}
                </div>
                </Button>)
    
            }
            
        </Container>
    </NavBarsBs>
}