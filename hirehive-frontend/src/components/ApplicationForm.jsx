import {useEffect, useState} from "react";
import {addApplication, updateApplication} from "../services/applicationService.js";

function ApplicationForm({onApplicationAdded,selectedApplication}) {

    const [application,setApplication]=useState(
        {
            companyName:"",
            role:"",
            packageOffered:0,
            applicationStatus:"",
            oaDate: "",
            interviewDate: "",
            notes:""
        }
    );
    useEffect(()=> {
        if(selectedApplication!=null) {
            setApplication(...selectedApplication);
        }
    },[selectedApplication]);


    const handleSubmit = (e) => {
        e.preventDefault();
        let request;
        if(application.id){
            request=updateApplication(application.id,application);
        }
        else {
            request=addApplication(application);
        }
        request.then(() => {
            setApplication({
                companyName: "",
                role: "",
                packageOffered: 0,
                applicationStatus: "",
                oaDate:"",
                interviewDate: "",
                notes:""
            });
            onApplicationAdded();
        })
            .catch((error) => {
                console.error(error);
            });
    };
    return (

        <form className="card mt-4 p-4" onSubmit={handleSubmit}>

            <h3>Add New Application</h3>
            <label htmlFor="companyName" className="form-label">
                Company Name
            </label>
            <input
                id="companyName"
                type="text"
                className="form-control"
                value={application.companyName}
                onChange={(e) => setApplication({...application,companyName: e.target.value})}
            />
            <label htmlFor="role" className="form-label">
                Role
            </label>
            <input
                id="role"
                type="text"
                className="form-control"
                value={application.role}
                onChange={(e) => setApplication({...application,role:e.target.value})}
            />
            <label htmlFor="packageOffered" className="form-label">
                Package Offered
            </label>
            <input
                id="packageOffered"
                type="number"
                className="form-control"
                value={application.packageOffered}
                onChange={(e) => setApplication({...application,packageOffered:e.target.value})}
            />
            <label htmlFor="applicationStatus" className="form-label">
                Application Status
            </label>
            <select
                id="applicationStatus"
                className="form-select"
                value={application.applicationStatus}
                onChange={(e) =>
                    setApplication({
                        ...application,
                        applicationStatus: e.target.value
                    })
                }
            >

                <option value="">Select Status</option>
                <option value="Applied">Applied</option>
                <option value="OA Cleared">OA Cleared</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>

            </select>

            <label>OA Date</label>

            <input
                type="date"
                className="form-control"
                value={application.oaDate || ""}
                onChange={(e)=>
                    setApplication({
                        ...application,
                        oaDate:e.target.value
                    })
                }
            />
            <label>Interview Date</label>
            <input
                type="date"
                className="form-control"
                value={application.interviewDate || ""}
                onChange={(e)=>
                    setApplication({
                        ...application,
                        interviewDate:e.target.value
                    })
                }
            />

            <label className="form-label mt-3">
                Notes
            </label>

            <textarea
                rows="3"
                className="form-control"
                value={application.notes || ""}
                onChange={(e)=>
                    setApplication({
                        ...application,
                        notes:e.target.value
                    })
                }
            />

            <button className="btn btn-success mt-4">
                {application.id ? "Update Application" : "Save Application"}
            </button>

        </form >


    );

}

export default ApplicationForm;