import { useEffect, useState } from "react";
import {
    getApplications,
    deleteApplication,
    searchApplications
} from "../services/applicationService";

import ApplicationForm from "../components/ApplicationForm";
import ApplicationTable from "../components/ApplicationTable";

function Applications() {

    const [applications, setApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchApplications = () => {
        getApplications()
            .then((response) => {
                setApplications(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchApplications();
    }, []);

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

    return (

        <div className="container-fluid">

            <h2 className="mb-4">
                Applications
            </h2>

            <div className="input-group mb-4">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button
                    className="btn btn-primary"
                    onClick={handleSearch}
                >
                    Search
                </button>

                <button
                    className="btn btn-outline-secondary"
                    onClick={handleReset}
                >
                    Reset
                </button>

            </div>

            <ApplicationForm
                onApplicationAdded={fetchApplications}
                selectedApplication={selectedApplication}
            />

            <ApplicationTable
                applications={applications}
                onDeleteApplication={handleDelete}
                onEditApplication={handleEdit}
            />

        </div>

    );
}

export default Applications;