import { useEffect, useMemo, useRef, useState } from 'react';
import imgone from './2.jpg'

import './Dashboard.css';
const imagesprofile = [imgone, imgone, imgone];
const delay = 2500;

const Dashboard = () => {

    const [qsidatas, setQsiData] = useState<any>("");
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<any>(null);

    useEffect(() => {
        fetch("https://www.quicksort.us/react/intranet.json")
            .then((response) => response.json())
            .then((data) => setQsiData(data.qsi))
            .catch((error) => console.error(error))
        console.log(qsidatas)
    }, []);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === imagesprofile.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <>
            <div className='controldashboard'>
                <div className="row ">

                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">

                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">{qsidatas.AboutName}</h6>
                            </div>

                            <div className="card-body" >
                                <video className="videocontrol" src={""} controls />

                            </div>
                        </div>
                    </div>


                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 style={{ textAlign: "left" }} className="m-0 font-weight-bold text-primary">{qsidatas.ProfileTitle}</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-4 mb-2 align-items-center">
                                        <div className="avatar mx-4 w-100 white  justify-content-center align-items-center"> <img style={{ maxHeight: "60%" }} className="rounded-circle img-fluid z-depth-1" src={qsidatas.ProfilePhoto} alt="Venkatesh Kumar" /> </div>
                                        <h6 style={{ textAlign: "left" }} className="m-0 font-weight-bold text-primary">{qsidatas.ProfileName}</h6>
                                        <p style={{ textAlign: "left" }} className=" m-0  text-primary">{qsidatas.ProfilePosition}</p>
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
                                    <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                                        {imagesprofile.map((backgroundColor, index) => (
                                            <img src={imgone}
                                                className="slide"
                                                key={index}
                                                style={{ backgroundColor }}
                                            ></img>
                                        ))}
                                    </div>

                                    <div className="slideshowDots">
                                        {imagesprofile.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`slideshowDot${index === idx ? " active" : ""}`}
                                                onClick={() => {
                                                    setIndex(idx);
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>


                    <div className="col-xl-6 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Quote of The Day </div>
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <div className=" mb-0 mr-3  text-gray-800">
                                                    <figure>
                                                        <blockquote className="blockquote mb-4">
                                                            <p> <i className="fas fa-quote-left fa-lg text-warning me-2"></i> <span className="font-italic">Our greatest glory is not in never falling, but in rising every time we fall. </span> </p>
                                                        </blockquote>
                                                        <figcaption className="blockquote-footer"> Digitization Team (Ooty), <cite title="Source Title">Courtesy: Cermel Angeline Mary C</cite> </figcaption>
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
                                <p className="m-0 font-weight-bold text-primary" style={{ paddingBottom: "-20px" }} >New Employees</p>
                            </div>
                            <div className="card-body " style={{ paddingLeft: "35px", paddingRight: "35px" }}>

                                <div className="slideshow">
                                    <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                                        {imagesprofile.map((backgroundColor, index) => (
                                            <img src={imgone}
                                                className="slide"
                                                key={index}
                                                style={{ backgroundColor }}
                                            ></img>
                                        ))}
                                    </div>

                                    <div className="slideshowDots">
                                        {imagesprofile.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`slideshowDot${index === idx ? " active" : ""}`}
                                                onClick={() => {
                                                    setIndex(idx);
                                                }}
                                            ></div>
                                        ))}
                                    </div>
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