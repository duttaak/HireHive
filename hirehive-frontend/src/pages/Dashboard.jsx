import { useEffect, useState } from "react";
import { getApplications } from "../services/applicationService";

function Dashboard(){

    const [applications, setApplications] = useState([]);

    const fetchApplications = () => {
        getApplications()
            .then((response) => {
                setApplications(response.data);
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    const totalApplications = applications.length;

    const appliedApplications = applications.filter(
        application => application.applicationStatus === "Applied"
    ).length;

    const OAApplications = applications.filter(
        application => application.applicationStatus === "OA Cleared"
    ).length;

    const interviewApplications = applications.filter(
        application => application.applicationStatus === "Interview"
    ).length;

    const offerApplications = applications.filter(
        application => application.applicationStatus === "Offer"
    ).length;

    const rejectApplications = applications.filter(
        application => application.applicationStatus === "Rejected"
    ).length;

    const today = new Date();

    const upcomingEvents = applications
        .flatMap(application => [
            application.oaDate
                ? {
                    company: application.companyName,
                    type: "OA",
                    date: application.oaDate
                }
                : null,

            application.interviewDate
                ? {
                    company: application.companyName,
                    type: "Interview",
                    date: application.interviewDate
                }
                : null
        ])
        .filter(Boolean)
        .filter(event => new Date(event.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5);

    return(
        <div className="container mt-4">

        <div className="row g-3 mb-4">

            <div className="col-md-2">
                <div className="card text-center bg-primary text-white shadow-sm">
                    <div className="card-body">
                        <h6>Total</h6>
                        <h3>{totalApplications}</h3>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card text-center bg-info text-white shadow-sm">
                    <div className="card-body">
                        <h6>Applied</h6>
                        <h3>{appliedApplications}</h3>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card text-center bg-secondary text-white shadow-sm">
                    <div className="card-body">
                        <h6>OA Cleared</h6>
                        <h3>{OAApplications}</h3>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card text-center bg-warning text-dark shadow-sm">
                    <div className="card-body">
                        <h6>Interview</h6>
                        <h3>{interviewApplications}</h3>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card text-center bg-success text-white shadow-sm">
                    <div className="card-body">
                        <h6>Offers</h6>
                        <h3>{offerApplications}</h3>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card text-center bg-danger text-white shadow-sm">
                    <div className="card-body">
                        <h6>Rejected</h6>
                        <h3>{rejectApplications}</h3>
                    </div>
                </div>
            </div>
        </div>
            <div className="card mt-4 shadow-sm">
                <div className="card-body">
                    <h5>Upcoming Events</h5>
                    {upcomingEvents.length === 0 ? (
                        <p>No upcoming events.</p>
                    ) : (
                        upcomingEvents.map((event,index)=>(
                            <div key={index} className="mb-2">
                                <strong>{event.company}</strong>
                                <br/>
                                {event.type}
                                <br/>
                                {event.date}
                                <hr/>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </div>
    )
}

export default Dashboard;