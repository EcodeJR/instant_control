import camp from '../assets/camp.jpg'

const Messages = () => {
    return ( 
        <section className="w-full h-fit p-4 bg-primary text-white block lg:absolute top-0 left-0">
            <h1 className="text-center font-semibold text-xl lg:text-2xl" draggable='true'>Chat Room</h1>
            <div className="h-full w-full flex items-end justify-between flex-col py-3">
                <div className="w-full max-h-[60vh] flex-col flex items-end justify-between p-5 overflow-y-scroll">
                    <div className='relative w-fit h-fit flex items-end justify-end my-2'>
                        <div className='bg-black/50 rounded-lg rounded-br-none px-5 py-2 mx-2 flex flex-col items-end justify-between'>
                            <p className='font-semibold text-sm text-yellow-400'>Ecode</p>
                            <p className='text-lg'>Hello, Everybody. How are we today?</p>
                        </div>
                        <img src={camp} alt="man" className='w-[30px] h-[30px] object-cover rounded-full' />
                    </div>
                    <div className='relative w-fit h-fit flex items-end justify-end my-2'>
                            <div className='bg-black/50 rounded-lg rounded-br-none px-5 py-2 mx-2 flex flex-col items-end justify-between'>
                            <p className='font-semibold text-sm text-blue-400'>John</p>
                            <p className='text-lg'>Doing good sir, and you</p>
                            </div>
                        <img src={camp} alt="man" className='w-[30px] h-[30px] object-cover rounded-full' />
                    </div>
                    <div className='relative w-fit h-fit flex items-end justify-end my-2'>
                        <div className='bg-black/50 rounded-lg rounded-br-none px-5 py-2 mx-2 flex flex-col items-end justify-between'>
                            <p className='font-semibold text-sm text-red-400'>Rose</p>
                            <p className='text-lg'>Awesome now that the breaks over sir :)</p>
                        </div>
                        <img src={camp} alt="man" className='w-[30px] h-[30px] object-cover rounded-full' />
                    </div>
                    <div className='relative w-fit h-fit flex items-end justify-end my-2'>
                        <div className='bg-black/50 rounded-lg rounded-br-none px-5 py-2 mx-2 flex flex-col items-end justify-between'>
                            <p className='font-semibold text-sm text-green-400'>Faith</p>
                            <p className='text-lg'>Having a blast sir.</p>
                        </div>
                        <img src={camp} alt="man" className='w-[30px] h-[30px] object-cover rounded-full' />
                    </div>

                    <div className='relative w-fit h-fit flex items-end justify-end my-2'>
                        <div className='bg-black/50 rounded-lg rounded-br-none px-5 py-2 mx-2 flex flex-col items-end justify-between'>
                            <p className='font-semibold text-sm text-yellow-400'>Ecode</p>
                            <p className='text-lg'>Hello, Everybody. How are we today?</p>
                        </div>
                        <img src={camp} alt="man" className='w-[30px] h-[30px] object-cover rounded-full' />
                    </div>
                    <div className='relative w-fit h-fit flex items-end justify-end my-2'>
                            <div className='bg-black/50 rounded-lg rounded-br-none px-5 py-2 mx-2 flex flex-col items-end justify-between'>
                            <p className='font-semibold text-sm text-blue-400'>John</p>
                            <p className='text-lg'>Doing good sir, and you</p>
                            </div>
                        <img src={camp} alt="man" className='w-[30px] h-[30px] object-cover rounded-full' />
                    </div>
                    <div className='relative w-fit h-fit flex items-end justify-end my-2'>
                        <div className='bg-black/50 rounded-lg rounded-br-none px-5 py-2 mx-2 flex flex-col items-end justify-between'>
                            <p className='font-semibold text-sm text-red-400'>Rose</p>
                            <p className='text-lg'>Awesome now that the breaks over sir :)</p>
                        </div>
                        <img src={camp} alt="man" className='w-[30px] h-[30px] object-cover rounded-full' />
                    </div>
                    <div className='relative w-fit h-fit flex items-end justify-end my-2'>
                        <div className='bg-black/50 rounded-lg rounded-br-none px-5 py-2 mx-2 flex flex-col items-end justify-between'>
                            <p className='font-semibold text-sm text-green-400'>Faith</p>
                            <p className='text-lg'>Having a blast sir.</p>
                        </div>
                        <img src={camp} alt="man" className='w-[30px] h-[30px] object-cover rounded-full' />
                    </div>

                </div>
                <div className="w-[90%] h-[10vh] bg-white/15 rounded-md overflow-hidden p-1 flex mx-auto">
                    <input type="text" name="message" id="message" className="w-full h-full p-3 text-lg bg-transparent outline-none" />
                    {/* <input type="file" name="attactment" id="attachment" /> */}
                    <input type="submit" value="send" className="h-full px-4 text-lg font-semibold text-white bg-green-500 rounded-md uppercase cursor-pointer"/>
                </div>
                
            </div>
        </section>
     );
}
 
export default Messages;