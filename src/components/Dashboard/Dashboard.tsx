import { useEffect, useMemo, useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import image1 from './1.jpg';
import image2 from './3.jpg';
import image3 from './9.jpg';
import image4 from './2.jpg';
import './Dashboard.css';
const Dashboard = () => {

    const [qsidatas, setQsiData] = useState<any>("");
    const [dataCount, setDataCount] = useState(0);
    const images = [
        { url: image4 },
        { url: image2 },
        { url: image3 },
        { url: image1 },
        { url: image2 },
        { url: image3 },
        { url: image1 },
    ];
    useEffect(() => {
        fetch("https://www.quicksort.us/react/intranet.json")
            .then((response) => response.json())
            .then((data) => setQsiData(data.qsi))
            .catch((error) => console.error(error))
        console.log(qsidatas)
    }, []);

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
                                <video className="videocontrol" src={ ""} controls />

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


                    <div className="col-xl-6 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100">
                            <div className="card-body1">
                                <p className="m-0 font-weight-bold text-primary" style={{ paddingBottom: "-20px" }} >New Employees</p>
                            </div>
                            <div className="card-body ">
                            <div className="row" >
                                    <SimpleImageSlider
                                        width={250}
                                        height={160}
                                        images={images}
                                        showBullets={false}
                                        showNavs={true}
                                        slideDuration={0.5}
                                    />
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
                </div>

            </div>

        </>
    )


}
export default Dashboard