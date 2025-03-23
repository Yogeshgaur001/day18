import {Link} from 'react-router-dom'
const Home=()=>{
    return(
        <>
        <h1>Home Page hai ye mera</h1>
        <p>This is a Home Page of our App</p>
        <Link to="/About">Go to about page</Link>
        </>
    )
}

export default Home;