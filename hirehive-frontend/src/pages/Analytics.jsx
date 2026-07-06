import { useEffect, useState } from "react";
import { getApplications } from "../services/applicationService";

import StatusPieChart from "../components/StatusPieChart";

function Analytics() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {

        getApplications()
            .then((response) => {

                setApplications(response.data);

            })
            .catch((error) => {

                console.error(error);

            });

    }, []);

    return (

        <div className="container-fluid">

            <h2 className="mb-4">
                Analytics
            </h2>

            <StatusPieChart
                applications={applications}
            />

        </div>

    );

}

export default Analytics;