import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div
            className="bg-dark text-white p-3"
            style={{
                width: "180px",
                minHeight: "100vh",
                backgroundColor:"#3E2723"
            }}
        >
            <div className="text-center mb-5">

                <h1 style={{fontSize:"60px"}}>🐝</h1>

                <h3>HireHive</h3>

            </div>
            <div className="d-grid gap-3">

                <Link className="btn btn-warning" to="/">
                    Dashboard
                </Link>

                <Link className="btn btn-warning" to="/applications">
                    Applications
                </Link>

                <Link className="btn btn-warning" to="/schedule">
                    Schedule
                </Link>

                <Link className="btn btn-warning" to="/analytics">
                    Analytics
                </Link>
            </div>
        </div>

    );

}

export default Sidebar;