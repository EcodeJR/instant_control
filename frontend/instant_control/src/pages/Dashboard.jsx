import { Link } from "react-router-dom";


const Dashboard = () => {
    return ( <>
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">


        <div className="flex flex-col items-center justify-around bg-white text-primary border-primary border-2 rounded-md w-[30%] p-5 relative">
            <h1 className="text-2xl">Newslatters</h1>
            <ol className="list-decimal py-3 tracking-wider">
                <li>emmanueldcode@gmail.com</li>
                <li>emmanueldcode1@gmail.com</li>
                <li>emmanueldcode2@gmail.com</li>
                <li>emmanueldcode3@gmail.com</li>
            </ol>
            <div className="absolute bottom-0 left-0 grid place-items-center w-full py-2 bg-gradient-to-b from-white/20 to-white">
                <Link to='newslatters' className="bg-primary p-1 rounded text-white text-base font-semibold">See more</Link>
            </div>
        </div>



        <div className="flex flex-col items-center justify-around p-3 bg-white text-primary border-primary border-2 rounded-md w-[30vw] relative">
            <h1 className="text-2xl">Contact Forms</h1>
            <div className="flex flex-col items-center justify-around">
                <div className="w-[80%] py-3 px-2 flex items-center justify-around border-[2px] border-primary/40 overflow-hidden">
                    <h3 className="block text-base">Emmanuel Dalyop</h3>
                    <p className="block text-sm px-2">emmanueldcode@gmail.com</p>
                </div>
                <div className="w-[80%] py-3 px-2 py-2 flex items-center justify-around border-[2px] border-primary/40 overflow-hidden">
                    <h3 className="block text-base">Emmanuel Dalyop</h3>
                    <p className="block text-sm px-2">emmanueldcode@gmail.com</p>
                </div>
                <div className="w-[80%] py-3 px-2 flex items-center justify-around border-[2px] border-primary/40 overflow-hidden">
                    <h3 className="block text-base">Emmanuel Dalyop</h3>
                    <p className="block text-sm px-2">emmanueldcode@gmail.com</p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 grid place-items-center w-full py-2 bg-gradient-to-b from-white/20 to-white">
                <Link to='contacts' className="bg-primary p-1 rounded text-white text-base font-semibold">See more</Link>
            </div>
        </div>
    </section>
    
    </> );
}
 
export default Dashboard;