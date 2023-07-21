import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';
//const imagesprofile = [imgone, imgone, imgone];
//const imagesprofile:any = [];

const Dashboard = () => {

    const [qsidatas, setQsiData] = useState<any>("");
    const [qsidob, setQsiDob] = useState<any>([]);
    const [date, setDate] = useState<any>(new Date());


    useEffect(() => {
        fetch("https://www.quicksort.us/react/intranet.json")
            .then((response) => response.json())
            .then((data) => setQsiData(data.qsi))
            .catch((error) => console.error(error))

    }, []);

    useEffect(() => {
        fetch("https://www.quicksort.us/react/intranet.json")
            .then((response) => response.json())
            .then((data) => setQsiDob(data.DoB))
            .catch((error) => console.error(error))

    }, []);

   

    return (
        <>
            <div className='controldashboard'>
                <div className="row " style={{ display: "flex" }}>
                    <div className="col-xl-4 col-lg-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">{qsidatas.AboutName}</h6>
                            </div>
                            <div className="card-body" >
                                <video controls style={{ width: "100%" }}>
                                    <source src={qsidatas.AboutVideo} type="video/mp4" />
                                </video>

                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary"> <span > {date.toLocaleDateString()} &nbsp;{date.toLocaleTimeString()}</span></h6>
                            </div>

                        </div>


                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 style={{ textAlign: "left" }} className="m-0 font-weight-bold text-primary">{qsidatas.ProfileTitle}</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-4 mb-2">
                                        <div > <img className="rounded-circle img-fluid z-depth-1" src={qsidatas.ProfilePhoto} alt="Management" /> </div><br></br>
                                        <h6 style={{ textAlign: "left" }} className="m-0 font-weight-bold text-primary">{qsidatas.ProfileName}</h6>
                                        <p style={{ textAlign: "left", fontSize: "12px" }} className=" m-0  font-weight-bold text-primary">{qsidatas.ProfilePosition}</p>
                                    </div>
                                    <div className="col-lg-8">
                                        <div style={{ textAlign: "left" }} className="author_infobox_descriptio text-muted mb-4">{qsidatas.ProfileText}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-md-3 mb-4">
                        <div className="card border-left-primary shadow h-100">
                            <div className="card-body1">
                                <p className="m-0 font-weight-bold text-primary" style={{ paddingBottom: "-20px" }} >Today Birthday's</p>
                            </div>
                            <div className="card-body " style={{ paddingLeft: "35px", paddingRight: "35px" }}>

                                <div className="slideshow">
                                    <div className="slideshowSlider" >
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <p className="m-0 font-weight-bold text-primary" style={{ paddingBottom: "-20px" }} >Managing Director</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <p className="m-0 font-weight-bold text-primary" style={{ paddingBottom: "-20px" }} >Quick Sort's Announcement</p>
                                        <br></br>
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <div className=" mb-0 mr-3  text-gray-800">
                                                    <figure>
                                                        <blockquote className="blockquote mb-4">
                                                            <p style={{ textAlign: "left" }}> <i className="fas fa-quote-left fa-lg text-warning me-2"></i> <span className="font-italic">Always show your access card at all the door entry and exit points without fail.</span> </p>
                                                        </blockquote>
                                                        <figcaption style={{ textAlign: "left" }} className="blockquote-footer"> From Management </figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-3 mb-4">
                        <div className="card border-left-primary shadow h-100">
                            <div className="card-body1">
                                <p className="m-0 font-weight-bold text-primary" style={{ paddingBottom: "-20px" }} >New Joinee's</p>
                            </div>
                            <div className="card-body " style={{ paddingLeft: "35px", paddingRight: "35px" }}>

                                <div className="slideshow">
                                    <div className="slideshowSlider" >
                                        
                                    </div>

                                </div>
                            </div>
                            <div className="card-footer">
                                <p className="m-0 font-weight-bold text-primary" style={{ paddingBottom: "-20px" }} >Managing Director</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row " style={{ display: "flex", alignItems: "stretch" }} >
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Office Events</h6>
                            </div>
                            <div className="card-body" >
                                <div className="slideshow">
                                    <div className="slideshowSlider">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Client Visit</h6>
                            </div>
                            <div className="card-body" >
                                <div className="slideshow">
                                    <div className="slideshowSlider" >
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row " >
                    <div className="col-xl-4 col-lg-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Holiday List - 2023</h6>
                            </div>
                            <div className="card-body" >
                                <div style={{ overflowY: "scroll", height: "333px" }}>
                                    <table className="table" >
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Day</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01-01</td>
                                                <td>New Year</td>
                                            </tr>
                                            <tr>
                                                <td>14-01</td>
                                                <td>Pongal</td>
                                            </tr>
                                            <tr>
                                                <td>15-01</td>
                                                <td>Pongal</td>
                                            </tr>
                                            <tr>
                                                <td>16-01</td>
                                                <td>Thiruvallur Day</td>
                                            </tr>
                                            <tr>
                                                <td>26-01</td>
                                                <td>Republic Day</td>
                                            </tr>
                                            <tr>
                                                <td>01-01</td>
                                                <td>New Year</td>
                                            </tr>
                                            <tr>
                                                <td>14-01</td>
                                                <td>Pongal</td>
                                            </tr>
                                            <tr>
                                                <td>15-01</td>
                                                <td>Pongal</td>
                                            </tr>
                                            <tr>
                                                <td>16-01</td>
                                                <td>Thiruvallur Day</td>
                                            </tr>
                                            <tr>
                                                <td>26-01</td>
                                                <td>Republic Day</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Calendar</h6>
                            </div>
                            <div className="card-body" >
                                <div >
                                    <div className="calendar-container">
                                        <Calendar onChange={setDate} value={date} />
                                    </div>
                                    <div className="text-center">
                                        Selected date: {date.toDateString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Current Openings</h6>
                            </div>
                            <div className="card-body" >
                                <div style={{ textAlign: "left", overflowY: "scroll", height: "333px" }} className="card-body  mb-0 font-weight-bold text-gray-800">
                                    <p style={{ textAlign: "left" }}>
                                        No Openings.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row " style={{ display: "flex", alignItems: "stretch" }} >
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Message From Management</h6>
                            </div>
                            <div className="card-body" >
                                <div style={{ textAlign: "left" }} className="card-body  mb-0 font-weight-bold text-gray-800">
                                    <h3><span>Do&apos;s</span></h3>
                                    <ul>
                                        <li>Be
                                            <mark>Punctual</mark>
                                            to work.</li>
                                        <li>
                                            <mark>Improve</mark>
                                            your skill sets continuously.</li>
                                        <li>Deliver
                                            <mark>100% Quality</mark>
                                            .</li>
                                        <li>Keep your workplace
                                            <mark>Clean and tidy</mark>
                                            .</li>
                                        <li>Adhere to the
                                            <mark>HR policy</mark>
                                            of the company.<br />
                                            <br />
                                        </li>
                                    </ul>
                                    <h3><span>Don&apos;ts</span></h3>
                                    <ul>
                                        <li>Don&apos;t
                                            <mark>Assume</mark>
                                            anything while you perform your job.</li>
                                        <li>Don&apos;t work without complete
                                            <mark>Knowledge</mark>
                                            and understanding of the client&apos;s specifications</li>
                                        <li>Don&apos;t do your work with
                                            <mark>Over confidence</mark>
                                            .</li>
                                        <li>Don&apos;t work with your
                                            <mark>Subconscious</mark>
                                            mind.</li>
                                        <li>Don&apos;t let
                                            <mark>Distractions</mark>
                                            affect your work.</li>
                                        <li>Don&apos;t work with
                                            <mark>Delivery pressure</mark>
                                            to complete the job at the last minute.<br />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Message From Management</h6>
                            </div>
                            <div className="card-body" >
                                <div style={{ textAlign: "left", overflowY: "scroll", height: "500px" }} className="card-body  mb-0 font-weight-bold text-gray-800">
                                    <ul style={{ textAlign: "left" }}>
                                        <li>Adhere to the Dress code policy of QSI.</li>
                                        <li>Always wear your ID/Access card inside the company premises.</li>
                                        <li>Always show your access card at all the door entry and exit points without fail.</li>
                                        <li>Ensure that you make Biometric entry at the reception for your in time and out time.</li>
                                        <li>Ensure that you do Sign in at the beginning of the day and Sign out at the end of the day in TMS daily.</li>
                                        <li>Ensure all the permissions, shift changes, and leave are applied in TMS within 24/48 hours as appropriate. (Time limit: Leave/LOP/OD – within 2 days; Permission/Shift change – same day)</li>
                                        <li>Complete the TMS formalities with all approvals by the managers by EOD of 1<sup>st</sup> of every month.</li>
                                        <li>Exceptions in TMS would be given for genuine cases only and there wouldn’t be any exceptions given after 1<sup>st</sup> of the month for the previous month.</li>
                                        <li>With effect from 01-Aug-16, one day leave not applied in TMS would be considered as 1.5 days LOP and others like permission, shift change not applied in TMS would be considered as late and the respective deduction would be made without any notifications.</li>
                                        <li>Health Insurance card from HDFC ERGO for the QSI Employee Health Insurance scheme is valid till your employment period and renewal is not required for every year.</li>
                                        <li>Don&apos;t use mobile phones inside the company premises.</li>
                                        <li>Don&apos;t share your salary package details with any of your colleagues.</li>
                                        <li>Quote your full name, employee id and department for all the communications with the HR and Accounts department.</li>
                                        <li>Send your Suggestions/Grievances to HR through your Department heads.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




            </div>

        </>
    )


}
export default Dashboard