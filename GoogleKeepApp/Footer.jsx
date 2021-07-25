import React from "react";

const Footer = () => {
    // dynamic year for footer copyright
    const year = new Date().getFullYear();
    return (
        <>
            <footer>
                <p>copyright © {year}</p>
            </footer>
        </>
    )
}
export default Footer;