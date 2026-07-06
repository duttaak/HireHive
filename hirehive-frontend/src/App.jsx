import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import Schedule from "./pages/Schedule";
import Analytics from "./pages/Analytics";

function App() {
    return (
        <BrowserRouter>
            <div className="d-flex">
                <Sidebar/>
                <div className="flex-grow-1">
                    <Navbar />
                <div className="container-fluid p-4">
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route
                            path="/applications"
                            element={<Applications/>}
                        />

                        <Route
                            path="/schedule"
                            element={<Schedule/>}
                        />

                        <Route
                            path="/analytics"
                            element={<Analytics/>}
                        />

                    </Routes>
                </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;