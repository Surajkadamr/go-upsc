import React from 'react'
import { Link } from 'react-router-dom'

function NavBar1() {
  return (
    <div>
        <div className="w-full h-10">
	<section id="bottom-navigation" className=" md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
	<section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
		<div id="tabs" className="flex justify-between">
			<Link to="/home" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <i className="fa-solid fa-house text-gray-500"></i> 
				<span className="tab tab-home block text-xs">Home</span>
			</Link>
			<a href="/" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <i className="fa-solid fa-laptop text-gray-500"></i>
				<span className="tab tab-kategori block text-xs">DAILY MCQ'S</span>
			</a>
			<Link to="/blogs" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <i className="mx-2 fa-solid fa-newspaper text-gray-500"></i>
				<span className="tab tab-explore block text-xs">TEST SERIES</span>
			</Link>
			<a href="/" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <i className="fa-solid fa-wifi text-gray-500"></i>
				<span className="tab tab-whishlist block text-xs">DAILY NEWS</span>
			</a>
			<a href="/" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <i className="fa-solid fa-video text-gray-500 m-1"></i>
				<span className="tab tab-account block text-xs">VIDEOS</span>
			</a>
		</div>
	</section>
    </section>
</div>
    </div>
  )
}

export default NavBar1