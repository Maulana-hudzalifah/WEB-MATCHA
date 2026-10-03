"use client";

import { useEffect, useState } from "react";

const links = [
    { href: "#home", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#medsos", label: "Medsos" },];


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    
    return (
        <header className="navbar">
            <div className="window-dots">
                <span className="dot dot--red" />
                <span className="dot dot--blue" />
                <span className="dot dot--green" />
            </div>

            <a href="#home" className="logo" onClick={close}>matcha.exe</a>

            <button type="button"
                className={`menu-toggle ${open ? "is-open" : ""}`} 
                            aria-label="Buka menu" 
                            aria-expanded={open} 
                            onClick={() => setOpen(!open)}>
                    
                <span className="menu-toggle-bar"></span>
                <span className="menu-toggle-bar"></span>
            </button>

            <nav className={`nav-links ${open ? "is-open" : ""}`}>
                {links.map((l) => (
                <a key={l.href} href={l.href} className="nav-link" onClick={close}>
                    {l.label}
                </a>))}
            </nav>
        </header>
    );
}

