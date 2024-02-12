import camp from '../assets/camp.jpg'

const Notifications = () => {
    return ( 
        <section className="w-full h-fit p-5 bg-gray-200 block lg:absolute top-0 left-0">
            <h1 className="text-center font-semibold text-xl lg:text-2xl" draggable='true'>Notifications</h1>
            <div className="w-full h-fit flex flex-col items-center justify-center">
                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-secondary hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Ecode</h3>
                            <p className="text-base text-gray-500">owner</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new user</h4>
                        <p className="text-base text-gray-500">John was added by Ecode</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-green-400 hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">John</h3>
                            <p className="text-base text-gray-500">photographer</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new image</h4>
                        <p className="text-base text-gray-500">An image was added by John</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-red-400 hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Mike</h3>
                            <p className="text-base text-gray-500">marketing</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Sent a newslatter</h4>
                        <p className="text-base text-gray-500">Mike sent a newslatter to all users</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-blue-400 hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Rose</h3>
                            <p className="text-base text-gray-500">co-owner</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new user</h4>
                        <p className="text-base text-gray-500">Paul was added by Rose</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-secondary hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Ecode</h3>
                            <p className="text-base text-gray-500">owner</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new user</h4>
                        <p className="text-base text-gray-500">Faith was added by Ecode</p>
                    </div>
                </div>


                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-secondary hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Ecode</h3>
                            <p className="text-base text-gray-500">owner</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new user</h4>
                        <p className="text-base text-gray-500">John was added by Ecode</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-green-400 hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">John</h3>
                            <p className="text-base text-gray-500">photographer</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new image</h4>
                        <p className="text-base text-gray-500">An image was added by John</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-red-400 hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Mike</h3>
                            <p className="text-base text-gray-500">marketing</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Sent a newslatter</h4>
                        <p className="text-base text-gray-500">Mike sent a newslatter to all users</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-blue-400 hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Rose</h3>
                            <p className="text-base text-gray-500">co-owner</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new user</h4>
                        <p className="text-base text-gray-500">Paul was added by Rose</p>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] h-fit p-3 my-1 bg-white rounded shadow-md flex flex-col md:flex-row items-center justify-between border-r-4 border-r-secondary hover:translate-x-2 duration-200">
                    <div className="flex items-center justify-around">
                        <img src={camp} alt="man sitting" className='w-[60px] h-[60px] object-cover rounded-full' />
                        <div className="h-full mx-2 flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-lg text-primary">Ecode</h3>
                            <p className="text-base text-gray-500">owner</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-primary">Added a new user</h4>
                        <p className="text-base text-gray-500">Faith was added by Ecode</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Notifications;