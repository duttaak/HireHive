import { useEffect, useState } from "react";
import {
    deleteApplication,
    getApplications,
    searchApplications
} from "../services/applicationService";
import ApplicationForm from "../components/ApplicationForm";
import ApplicationTable from "../components/ApplicationTable";

function Home() {

    const [searchTerm, setSearchTerm] = useState("");
    const [applications, setApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);

    const fetchApplications = () => {
        getApplications()
            .then((response) => {
                setApplications(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleDelete = (id) => {
        deleteApplication(id)
            .then(() => {
                fetchApplications();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleEdit = (application) => {
        setSelectedApplication(application);
    };

    const handleSearch = () => {

        if (searchTerm.trim() === "") {
            fetchApplications();
            return;
        }

        searchApplications(searchTerm)
            .then((response) => {
                setApplications(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleReset = () => {
        setSearchTerm("");
        fetchApplications();
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    return (

        <div className="container mt-4">

            <h1 className="text-center mb-2">
                🐝 HireHive
            </h1>

            <p className="text-center text-muted mb-4">
                Track your placement applications effortlessly.
            </p>

        </div>

    );
}

export default Home;