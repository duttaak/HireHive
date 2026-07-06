import { useEffect, useState } from "react";
import { getApplications } from "../services/applicationService";
function Schedule(){
    const [applications, setApplications] = useState([]);

    useEffect(() => {

        getApplications()
            .then((response)=>{

                setApplications(response.data);

            })
            .catch((error)=>{

                console.error(error);

            });

    },[]);
    const events = applications
        .flatMap(app=>[

            app.oaDate
                ?{
                    company:app.companyName,
                    type:"Online Assessment",
                    date:app.oaDate
                }
                :null,

            app.interviewDate
                ?{
                    company:app.companyName,
                    type:"Interview",
                    date:app.interviewDate
                }
                :null

        ])

        .filter(Boolean)

        .sort((a,b)=>new Date(a.date)-new Date(b.date));
    return(
    <div className="container">

        <h2 className="mb-4">
            Schedule
        </h2>

        {events.map((event,index)=>(

            <div
                key={index}
                className="card mb-3 shadow-sm"
            >

                <div className="card-body">

                    <h4>

                        {event.company}

                    </h4>

                    <p>

                        {event.type}

                    </p>

                    <p>

                        📅 {new Date(event.date).toLocaleDateString("en-IN",{

                        day:"numeric",

                        month:"long",

                        year:"numeric"

                    })}

                    </p>

                </div>

            </div>

        ))}

    </div>

    );

}
export default Schedule;