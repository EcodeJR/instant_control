// import { Link } from "react-router-dom";


const Dashboard = () => {
    return ( <>
    <section className="w-full h-full">

        <div className="w-[80%] bg-primary/10 rounded-md mx-auto mt-10 flex items-center justify-around p-4">
            <div className="flex flex-col items-center justify-center text-primary">
                <h3 className="font-semibold text-xs lg:text-base text-secondary">Newslatters</h3>
                <p className="font-bold text-3xl lg:text-5xl">50</p>
            </div>
            <div className="flex flex-col items-center justify-center text-primary">
                <h3 className="font-semibold text-xs lg:text-base text-secondary">Contact Mails</h3>
                <p className="font-bold text-3xl lg:text-5xl">20</p>
            </div>
            <div className="flex flex-col items-center justify-center text-primary">
                <h3 className="font-semibold text-xs lg:text-base text-secondary">Bookings</h3>
                <p className="font-bold text-3xl lg:text-5xl">100</p>
            </div>
            <div className="flex flex-col items-center justify-center text-primary">
                <h3 className="font-semibold text-xs lg:text-base text-secondary">Photos</h3>
                <p className="font-bold text-3xl lg:text-5xl">200</p>
            </div>
        </div>
    </section>
    
    </> );
}
 
export default Dashboard;