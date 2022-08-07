import React from 'react'
import { Link } from 'react-router-dom'
import Slides from "./Slides"
import "./index.css"

function Home() {
    return (
        <div>
            <h1 className='font-bold md:text-3xl text-xl  mt-3 mb-4 text-blue-500 text-center'>Recent updates on GO-UPSC</h1>
            <Slides/>
            <div className='md:flex'>
                <div className="col-auto mb-10 mxl:mx-auto mxl:w-auto ml-24 border-4 border-blue-400 rounded-2xl bg-white" style={{"width":"20rem"}}>
                    <div className="heading english text-white bg-blue-400 text-center p-2"><span className='text-xl font-semibold'>Daily Current-Affaris</span></div>
                    <div className="content" tabIndex="5000" style={{"overflow": "hidden","outline": "none"}}>
                        <ul>
                            <li>
                            <span className="icon-calende text-slate-400">
                            <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><Link to="/blogs">Monthly Current-Affaris Consolidation (July) 2022<hr className='my-2'/></Link></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Monthly Current-Affaris Consolidation (June) 2022<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Monthly Current-Affaris Consolidation (May) 2022<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Monthly Current-Affaris Consolidation (April) 2022<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Monthly Current-Affaris Consolidation (March) 2022<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Monthly Current-Affaris Consolidation (Februray) 2022<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Monthly Current-Affaris Consolidation (January) 2022<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Monthly Current-Affaris Consolidation (December) 2021<hr className='my-2'/></a></p></li>
                        </ul>
                    </div>
                </div>
                <div className="col-auto mb-10 mxl:mx-auto ml-5 border-orange-400 border-4 rounded-2xl bg-white" style={{"width":"20rem"}}>
                    <div className="heading english text-white bg-orange-400  text-center p-2"><span className='text-xl font-semibold'>Monthly Current-Affaris</span></div>
                    <div className="content" tabIndex="5000" style={{"overflow": "hidden","outline": "none"}}>
                        <ul>
                            <li>
                            <span className="icon-calende text-slate-400">
                            <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (July week-4)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (July week-3)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a  href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (July week-2)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (July week-1)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (June week-4)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (June week-3)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (June week-2)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (June week-1)<hr className='my-2'/></a></p></li>
                        </ul>
                    </div>
                </div>
                <div className="col-auto mb-10 mxl:mx-auto mxl:w-auto ml-5 border-4 bg-white rounded-2xl border-emerald-500" style={{"width":"20rem"}}>
                    <div className="heading english text-white text-center bg-emerald-500 p-2"><span className='text-xl font-semibold'>Daily MCQ'S</span></div>
                    <div className="content" tabIndex="5000" style={{"overflow": "hidden","outline": "none"}}>
                        <ul>
                            <li>
                            <span className="icon-calende text-slate-400">
                            <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (July week-4)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (July week-3)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (July week-2)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (July week-1)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (June week-4)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (June week-3)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (June week-2)<hr className='my-2'/></a></p></li>
                                <li>
                                <span className="icon-calende text-slate-400">
                                <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (June week-1)<hr className='my-2'/></a></p></li>
                        </ul>
                    </div>
                </div>
                <div className="col-auto mb-10 mxl:mx-auto ml-5 border-gray-700 border-4 rounded-2xl bg-white" style={{"width":"20rem"}}>
                    <div className="heading english text-white bg-slate-700 text-center p-2"><span className='text-xl font-semibold'>Test Series</span></div>
                    <div className="content" tabIndex="5000" style={{"overflow": "hidden","outline": "none"}}>
                        <ul>
                            <li>
                            <span className="icon-calende text-slate-400">
                            <i className="fa-solid fa-calendar my-2"></i> 06 Aug 2022</span>
                                <p><a href="https://www.drishtiias.com/free-downloads/monthly-Monthly Current-Affaris-consolidation">Weekly Current-Affaris Consolidation (July week-4)<hr className='my-2'/></a></p></li>
                        </ul>
                    </div>
                </div>
    </div>
    </div>
    )


}

export default Home