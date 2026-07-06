import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function StatusPieChart({ applications }) {

    const data = {

        labels: [
            "Applied",
            "OA Cleared",
            "Interview",
            "Offer",
            "Rejected"
        ],

        datasets: [
            {
                label: "Applications",

                data: [

                    applications.filter(
                        app => app.applicationStatus === "Applied"
                    ).length,

                    applications.filter(
                        app => app.applicationStatus === "OA Cleared"
                    ).length,

                    applications.filter(
                        app => app.applicationStatus === "Interview"
                    ).length,

                    applications.filter(
                        app => app.applicationStatus === "Offer"
                    ).length,

                    applications.filter(
                        app => app.applicationStatus === "Rejected"
                    ).length
                ],

                backgroundColor: [

                    "#36A2EB",
                    "#9966FF",
                    "#FFCE56",
                    "#4BC0C0",
                    "#FF6384"
                ],
                borderWidth: 2
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "right"
            }
        }
    };

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h4 className="mb-3">
                    Applications by Status
                </h4>
                <div
                    style={{
                        width: "450px",
                        margin: "auto"
                    }}
                >
                    <Pie
                        data={data}
                        options={options}
                    />
                </div>
            </div>
        </div>
    );
}

export default StatusPieChart;