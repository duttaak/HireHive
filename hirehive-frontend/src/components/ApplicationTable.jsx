
function ApplicationTable({applications,onDeleteApplication,onEditApplication}) {

    return (

        <table className="table table-striped mt-4">

            <thead>

            <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Package</th>
                <th>Status</th>
                <th>OA Date</th>
                <th>Interview Date</th>
                <th>Notes</th>
                <th>Actions</th>
            </tr>

            </thead>

            <tbody>

            {applications.map((application) => (

                <tr key={application.id}>

                    <td>{application.companyName}</td>
                    <td>{application.role}</td>
                    <td>{application.packageOffered/100000} LPA</td>
                    <td>

                        {application.applicationStatus === "Applied" && (
                            <span className="badge bg-primary">
                            Applied
                            </span>
                        )}

                        {application.applicationStatus === "OA Cleared" && (
                            <span className="badge bg-info">
                            OA Cleared
                            </span>
                        )}

                        {application.applicationStatus === "Interview" && (
                            <span className="badge bg-warning text-dark">
                            Interview
                            </span>
                        )}

                        {application.applicationStatus === "Offer" && (
                            <span className="badge bg-success">
                            Offer
                            </span>
                        )}

                        {application.applicationStatus === "Rejected" && (
                            <span className="badge bg-danger">
                            Rejected
                            </span>
                        )}

                    </td>
                    <td>{application.oaDate}</td>
                    <td>{application.interviewDate}</td>
                    <td>{application.notes}</td>
                    <td>
                        <button onClick={()=>onEditApplication(application)}
                            className="btn btn-warning btn-sm me-2"
                        >
                            Edit
                        </button>
                        <button onClick={()=>{
                            if(window.confirm("Are you sure you want to delete this application?"))
                            onDeleteApplication(application.id);}}
                            className="btn btn-danger btn-sm"
                        >
                            Delete
                        </button>

                    </td>
                </tr>

            ))}

            </tbody>

        </table>

    );

}

export default ApplicationTable;