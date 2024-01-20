import camp from '../assets/camp.jpg'

const Gallery = () => {
    return ( <>
    <div className="w-full h-full text-primary p-5 block lg:absolute top-0 left-0">
        <h1 className="text-3xl text-center font-semibold uppercase">Gallery</h1>
        <div className="w-full py-5">
            <div className="w-[80%] md:w-[60%] h-[40vh] md:h-[40vh] bg-primary/10 hover:bg-primary/20 rounded-lg relative flex items-center justify-center mx-auto cursor-grab">
                <h3 className="text-lg text-primary">Drag & Drop</h3>
                <input type="file" name="image" id="image" className="absolute bottom-3 left-[50%] translate-x-[-50%] cursor-grab" />
            </div>
        </div>
        <div className='w-full mt-4'>
            <h2 className='text-center text-2xl font-bold text-primary'>Photo Show Room</h2>
            <div className='w-full p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center'>
                <div className='relative'>
                    <img src={camp} alt="a man sitting" className='w-full object-contain' />
                    <button className='absolute bottom-0 left-0 w-full p-3 text-xl text-red-600 bg-white/70 font-bold'>Delete</button>
                </div>

                <div className='relative'>
                    <img src={camp} alt="a man sitting" className='w-full object-contain' />
                    <button className='absolute bottom-0 left-0 w-full p-3 text-xl text-red-600 bg-white/70 font-bold'>Delete</button>
                </div>

                <div className='relative'>
                    <img src={camp} alt="a man sitting" className='w-full object-contain' />
                    <button className='absolute bottom-0 left-0 w-full p-3 text-xl text-red-600 bg-white/70 font-bold'>Delete</button>
                </div>

                <div className='relative'>
                    <img src={camp} alt="a man sitting" className='w-full object-contain' />
                    <button className='absolute bottom-0 left-0 w-full p-3 text-xl text-red-600 bg-white/70 font-bold'>Delete</button>
                </div>

                <div className='relative'>
                    <img src={camp} alt="a man sitting" className='w-full object-contain' />
                    <button className='absolute bottom-0 left-0 w-full p-3 text-xl text-red-600 bg-white/70 font-bold'>Delete</button>
                </div>

                <div className='relative'>
                    <img src={camp} alt="a man sitting" className='w-full object-contain' />
                    <button className='absolute bottom-0 left-0 w-full p-3 text-xl text-red-600 bg-white/70 font-bold'>Delete</button>
                </div>

                <div className='relative'>
                    <img src={camp} alt="a man sitting" className='w-full object-contain' />
                    <button className='absolute bottom-0 left-0 w-full p-3 text-xl text-red-600 bg-white/70 font-bold'>Delete</button>
                </div>

                <div className='relative'>
                    <img src={camp} alt="a man sitting" className='w-full object-contain' />
                    <button className='absolute bottom-0 left-0 w-full p-3 text-xl text-red-600 bg-white/70 font-bold'>Delete</button>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Gallery;