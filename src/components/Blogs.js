import React, { useState } from 'react'

function Blogs() {
    const [condition, set] = useState(false);
    const [condition1, set1] = useState(false);
    function handle() {
        if (condition === true) {
            set(false);
        } else {
            set(true);
        }
    }
    function handle1() {
        if (condition1 === true) {
            set1(false);
        } else {
            set1(true);
        }
    }
    return (
        <div>
            <div className="mxl:hidden main text-center mt-3 ">
                <h1 className="text-sm md:text-4xl font-semibold">DAILY NEWSPAPER ANALYSIS</h1>
                <p className="text-sm mxl:text-2xl p-2">Get your daily dose of knowledge</p>
                <div className="flex">
                    <div className="ml-64 mxl:hidden my-4 rounded-2xl flex w-44 h-72 bg-white">
                        <ul id="cat_nav" className=" items-center">
                            <li className="py-3 mx-2"><i className="mx-2 fa-solid fa-newspaper"></i> July 18,2022 <i className="fa-solid fa-angle-right ml-4"></i></li>
                            <hr className="mx-3" />
                            <li className="py-3 mx-2"><i className=" mx-2 fa-solid fa-newspaper"></i> July 17,2022 <i
                                className="fa-solid fa-angle-right ml-4"></i></li>
                            <hr className="mx-3" />
                            <li className="py-3 mx-2"><i className="mx-2 fa-solid fa-newspaper"></i> July 16,2022 <i
                                className="fa-solid fa-angle-right ml-4"></i></li>
                            <hr className="mx-3" />
                            <li className="py-3 mx-2"><i className="mx-2 fa-solid fa-newspaper"></i> July 15,2022 <i
                                className="fa-solid fa-angle-right ml-4"></i></li>
                            <hr className="mx-3" />
                            <li className="py-3 mx-2"><i className="mx-2 fa-solid fa-newspaper"></i> July 14,2022 <i
                                className="fa-solid fa-angle-right ml-4"></i></li>
                        </ul>
                    </div>
                    <div className="items-start text-center m-4 mxl:w-auto text-2xl rounded-2xl text-gray-600 bg-white" style={condition || condition1 ? { "height": "auto" } : { "height": "20rem" }}>
                        <h1 className="font-sans"><i
                            className="ml-4 mr-2 my-2 text-left border-gray-500 text-gray-600 p-2 rounded-xl border-2 text-3xl fa-solid fa-newspaper"></i>
                            DAILY NEWSPAPER ANALYSIS - July 14,2022<i
                                className="text-gray-400 text-2xl ml-52 pr-5 fa-solid fa-arrow-up-right-from-square"></i>
                            <hr className="ml-1" />
                        </h1>
                        <div className="mx-3 my-3 items-start text-gray-500">
                            <h3 className="text-lg text-start">Effect of GST on today's World and inflation. <i
                                className="fa-solid fa-angle-down text-lg ml-96" onClick={handle} value="1"></i></h3>
                            {condition && <div><p className='text-blue-500 text-left text-lg'>Content:</p><p className='text-sm text-left mx-3' style={{ "width": "45rem", "height": "auto" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vitae nemo, debitis veritatis odio voluptatem id quasi perspiciatis laborum sint, omnis vero iure repellendus quia incidunt excepturi ipsum mollitia adipisci? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ad culpa in, quia vel nam minus, sed perferendis amet, repellendus laborum ratione ea sapiente magnam fuga quisquam recusandae rem. Eaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorum accusantium, placeat est quos illo nemo dolores quam incidunt nihil tempore nobis odio sunt accusamus magnam amet? Suscipit, nam adipisci? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inventore facere obcaecati velit magnam sunt suscipit temporibus, quod nam alias accusantium fugit aspernatur fuga enim quidem nesciunt iste, expedita adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita minus doloremque reiciendis dolorum perspiciatis, excepturi quibusdam sit. Saepe accusantium voluptas nisi modi, magnam voluptatem cumque at numquam. Iste, cupiditate eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus impedit cumque minima similique possimus quo reiciendis maiores in nesciunt exercitationem quae ea praesentium, aliquid modi excepturi aspernatur qui quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam nesciunt natus mollitia, iusto fugit optio? Maxime iusto alias, nisi, dolorum eaque dolorem eius, nostrum architecto sunt sed non obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit nulla nobis, perferendis recusandae, impedit adipisci illum provident minus porro placeat dolores magni error consequatur sint, nam similique laboriosam totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta repellendus sequi quas eius perspiciatis magnam, neque porro amet itaque iure quibusdam, dolore, cum quidem totam! Assumenda labore iste repellat esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quidem adipisci a nisi temporibus enim quod animi laudantium et? Magnam officia commodi architecto totam vitae eveniet pariatur excepturi, recusandae suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt beatae nesciunt odit inventore! Distinctio, est enim optio assumenda officiis, voluptates eaque architecto omnis non itaque deleniti minus, ut debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi distinctio itaque obcaecati quia sed asperiores, doloremque saepe quidem, quae, corporis sapiente molestias accusantium ut consectetur recusandae dolorem laborum aut aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae optio nisi maiores officiis tempore magnam aspernatur rerum quam in voluptas, repudiandae itaque, neque odit quis nobis. Delectus, blanditiis porro. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vitae nemo, debitis veritatis odio voluptatem id quasi perspiciatis laborum sint, omnis vero iure repellendus quia incidunt excepturi ipsum mollitia adipisci? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ad culpa in, quia vel nam minus, sed perferendis amet, repellendus laborum ratione ea sapiente magnam fuga quisquam recusandae rem. Eaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorum accusantium, placeat est quos illo nemo dolores quam incidunt nihil tempore nobis odio sunt accusamus magnam amet? Suscipit, nam adipisci? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inventore facere obcaecati velit magnam sunt suscipit temporibus, quod nam alias accusantium fugit aspernatur fuga enim quidem nesciunt iste, expedita adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita minus doloremque reiciendis dolorum perspiciatis, excepturi quibusdam sit. Saepe accusantium voluptas nisi modi, magnam voluptatem cumque at numquam. Iste, cupiditate eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus impedit cumque minima similique possimus quo reiciendis maiores in nesciunt exercitationem quae ea praesentium, aliquid modi excepturi aspernatur qui quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam nesciunt natus mollitia, iusto fugit optio? Maxime iusto alias, nisi, dolorum eaque dolorem eius, nostrum architecto sunt sed non obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit nulla nobis, perferendis recusandae, impedit adipisci illum provident minus porro placeat dolores magni error consequatur sint, nam similique laboriosam totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta repellendus sequi quas eius perspiciatis magnam, neque porro amet itaque iure quibusdam, dolore, cum quidem totam! Assumenda labore iste repellat esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quidem adipisci a nisi temporibus enim quod animi laudantium et? Magnam officia commodi architecto totam vitae eveniet pariatur excepturi, recusandae suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt beatae nesciunt odit inventore! Distinctio, est enim optio assumenda officiis, voluptates eaque architecto omnis non itaque deleniti minus, ut debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi distinctio itaque obcaecati quia sed asperiores, doloremque saepe quidem, quae, corporis sapiente molestias accusantium ut consectetur recusandae dolorem laborum aut aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae optio nisi maiores officiis tempore magnam aspernatur rerum quam in voluptas, repudiandae itaque, neque odit quis nobis. Delectus, blanditiis porro. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vitae nemo, debitis veritatis odio voluptatem id quasi perspiciatis laborum sint, omnis vero iure repellendus quia incidunt excepturi ipsum mollitia adipisci? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ad culpa in, quia vel nam minus, sed perferendis amet, repellendus laborum ratione ea sapiente magnam fuga quisquam recusandae rem. Eaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorum accusantium, placeat est quos illo nemo dolores quam incidunt nihil tempore nobis odio sunt accusamus magnam amet? Suscipit, nam adipisci? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inventore facere obcaecati velit magnam sunt suscipit temporibus, quod nam alias accusantium fugit aspernatur fuga enim quidem nesciunt iste, expedita adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita minus doloremque reiciendis dolorum perspiciatis, excepturi quibusdam sit. Saepe accusantium voluptas nisi modi, magnam voluptatem cumque at numquam. Iste, cupiditate eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus impedit cumque minima similique possimus quo reiciendis maiores in nesciunt exercitationem quae ea praesentium, aliquid modi excepturi aspernatur qui quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam nesciunt natus mollitia, iusto fugit optio? Maxime iusto alias, nisi, dolorum eaque dolorem eius, nostrum architecto sunt sed non obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit nulla nobis, perferendis recusandae, impedit adipisci illum provident minus porro placeat dolores magni error consequatur sint, nam similique laboriosam totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta repellendus sequi quas eius perspiciatis magnam, neque porro amet itaque iure quibusdam, dolore, cum quidem totam! Assumenda labore iste repellat esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quidem adipisci a nisi temporibus enim quod animi laudantium et? Magnam officia commodi architecto totam vitae eveniet pariatur excepturi, recusandae suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt beatae nesciunt odit inventore! Distinctio, est enim optio assumenda officiis, voluptates eaque architecto omnis non itaque deleniti minus, ut debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi distinctio itaque obcaecati quia sed asperiores, doloremque saepe quidem, quae, corporis sapiente molestias accusantium ut consectetur recusandae dolorem laborum aut aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae optio nisi maiores officiis tempore magnam aspernatur rerum quam in voluptas, repudiandae itaque, neque odit quis nobis. Delectus, blanditiis porro.
                            </p> <i class="fa-solid fa-angle-up m-3" onClick={handle}></i></div>}
                        </div>
                        <div className="m-3 items-start text-gray-500">
                            <h3 className="text-lg text-start">INSIGHTS DAILY CURRENT AFFAIRS PIB SUMMARY july-4-22 Part-3 <i
                                className="fa-solid fa-angle-down text-lg ml-40 pl-11" onClick={handle1}></i></h3>
                            {condition1 && <div><p className='text-blue-500 text-left text-lg'>Content:</p><p className='text-sm mx-3' style={{ "width": "45rem", "height": "auto" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vitae nemo, debitis veritatis odio voluptatem id quasi perspiciatis laborum sint, omnis vero iure repellendus quia incidunt excepturi ipsum mollitia adipisci? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ad culpa in, quia vel nam minus, sed perferendis amet, repellendus laborum ratione ea sapiente magnam fuga quisquam recusandae rem. Eaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolorum accusantium, placeat est quos illo nemo dolores quam incidunt nihil tempore nobis odio sunt accusamus magnam amet? Suscipit, nam adipisci? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum inventore facere obcaecati velit magnam sunt suscipit temporibus, quod nam alias accusantium fugit aspernatur fuga enim quidem nesciunt iste, expedita adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita minus doloremque reiciendis dolorum perspiciatis, excepturi quibusdam sit. Saepe accusantium voluptas nisi modi, magnam voluptatem cumque at numquam. Iste, cupiditate eligendi!</p></div>}
                        </div>
                        <div className="m-3 items-start text-gray-500">
                            <h3 className="text-lg text-start">INSIGHTS DAILY CURRENT AFFAIRS PIB SUMMARY july-4-22 Part-2 <i
                                className="fa-solid fa-angle-down text-lg ml-40 pl-11" onClick={handle1}></i></h3>
                        </div>
                        <div className="m-3 items-start text-gray-500">
                            <h3 className="text-lg text-start">INSIGHTS DAILY CURRENT AFFAIRS PIB SUMMARY july-4-22 Part-1 <i
                                className="fa-solid fa-angle-down text-lg ml-40 pl-11" onClick={handle1}></i></h3>
                        </div>
                        <button className="bg-blue-500 rounded-xl mr-96 text-sm text-white p-2" style={{"marginRight":"36rem"}}>Test Your Knowledge</button>
                    </div>
                </div>
                <div className="text-2xl rounded-2xl text-gray-600 bg-white" style={{ "height": "auto", "marginLeft": "28.5rem", "marginRight": "17rem" }}>
                    <h1 className="font-sans"><i
                        className="ml-4 mr-2 my-2 text-left border-gray-500 text-gray-600 p-2 rounded-xl border-2 text-3xl fa-solid fa-newspaper"></i>
                        DAILY NEWSPAPER ANALYSIS - July 14,2022<i
                            className="text-gray-400 text-2xl ml-52 pr-5 fa-solid fa-arrow-up-right-from-square"></i>
                        <hr className="ml-1" />
                        <div className="m-3 items-start text-gray-500">
                            <h3 className="text-lg text-start">INSIGHTS DAILY CURRENT AFFAIRS PIB SUMMARY july-4-22 Part-1 <i
                                className="fa-solid fa-angle-down text-lg ml-40 mb-4 pl-11" ></i></h3>
                        </div>
                    </h1>
                </div>
                <div className="text-2xl rounded-2xl text-gray-600 bg-white" style={{ "height": "auto", "marginLeft": "28.5rem", "marginRight": "17rem" }}>
                    <h1 className="font-sans"><i
                        className="ml-4 mr-2 my-2 text-left border-gray-500 text-gray-600 p-2 rounded-xl border-2 text-3xl fa-solid fa-newspaper"></i>
                        DAILY NEWSPAPER ANALYSIS - July 14,2022<i
                            className="text-gray-400 text-2xl ml-52 pr-5 fa-solid fa-arrow-up-right-from-square"></i>
                        <hr className="ml-1" />
                        <div className="m-3 items-start text-gray-500">
                            <h3 className="text-lg text-start">INSIGHTS DAILY CURRENT AFFAIRS PIB SUMMARY july-4-22 Part-1 <i
                                className="fa-solid fa-angle-down text-lg ml-40 mb-4 pl-11" ></i></h3>
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Blogs