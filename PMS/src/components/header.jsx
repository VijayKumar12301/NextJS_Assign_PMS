'use client'

import Link from "next/link"
import { Nav, Navbar } from "react-bootstrap"

export const Appheader = () => {
    return (
        <>
            <Navbar bg="success" data-bs-theme="success" fixed="static">
                <Navbar.Brand>
                    <Link className="nav-link" href={"/products"}>Product Management System</Link>
                </Navbar.Brand>

                <nav>
                <Nav.Item  >
                        <Link className="nav-link" href={"/products"}>Products</Link>
                    </Nav.Item>
                </nav>
                <Nav className="ms-auto" >
                    <Nav.Item >
                        <Link className="nav-link" href={"/login"}>Login</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" href={"/register"} >Register</Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )
}

