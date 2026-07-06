function Navbar() {
    return (
        <nav
            className="navbar px-4"
            style={{
                height: "65px",
                backgroundImage:
                    "linear-gradient(rgba(255,193,7,0.85), rgba(255,193,7,0.85)), url('https://www.transparenttextures.com/patterns/hexellence.png')",
                borderBottom: "3px solid #E0A800"
            }}
        >
            <div className="ms-auto fw-bold">
                🐝 Welcome back!
            </div>
        </nav>
    );
}

export default Navbar;