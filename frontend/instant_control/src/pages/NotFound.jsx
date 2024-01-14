import { Link } from 'react-router-dom';
const NotFound = () => {
    return ( <>
    <section className="text-white flex flex-col items-center justify-center bg-primary fixed top-0 left-0 h-screen w-screen">
        <h1 className="text-center text-5xl text-red-600 font-bold my-4">404</h1>
        <h1 className="text-center text-3xl font-semibold">Page not found</h1>
        <Link to='/'>Go back.</Link>
    </section>
    </> );
}
 
export default NotFound;