import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

function NavBar() {
    return (
        <div>
            <nav className="flex md:w-auto mxl:px:0 py-2 justify-between items-center bg-white">
                <div className="flex-row px-4 mxl:px-0 text-blue-700">
                    <h1 className="font-bold px-8 text-2xl mxl:px-0 mxl:text-sm">GO UPSC</h1>
                    <p className="text-blue-500 mxl:text-1">BY SUMUKHA-E-SOLUTIONS</p>
                </div>
                <div className="flex justify-evenly items-center">
                    <form className="d-flex" role="search">
                        <input className="form-control p-2 mxl:hidden rounded-lg mx-3 border-black border" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn p-2 rounded-xl bg-blue-500 mxl:hidden text-blue-50" type="submit">Search</button>
                    </form>
                    <button type="button"
                        className=" p-2 mx-2 md:mx:4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 w-38 px-3 ">Login /
                        Register</button>
                </div>
            </nav>
            <hr className="text-gray-200" />
            <div className="mxl:hidden nav2 px-5 h-10 bg-white">
                <ul className="flex px2 py-2 text-sm ">
                    <li className="px-3"><i className="fa-solid fa-house text-gray-500 text-sm"></i> <Link to="/home">HOME</Link></li>
                    <li className="px-3"><i className="fa-solid fa-laptop text-gray-500"></i> DAILY MCQ'S</li>
                    <li className="px-3"><i className="fa-solid fa-laptop text-gray-500"></i><Link to="/testseries">TEST SERIES</Link></li>
                    <li className="px-3"><i className="fa-solid fa-wifi text-gray-500"></i><Link to="/blogs"> DAILY NEWS</Link></li>
                    <li className="px-3"><i className="fa-solid fa-video text-gray-500 m-1"></i><Link to="/blogs"> VIDEOS</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar