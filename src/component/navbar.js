import {Link} from 'react-router-dom';
function NavBar(){
    return(
        <>
        <div>
            
            <ul>
                <li>
     <Link to='Home'>Home</Link><br/></li>
       <li> <Link to="About" style={{backgroundColor:"yellow"}}>About</Link></li>
       {/* <a href='/Home'>Home</a><br/>
        <a href='About'>about</a>*/}
        <li><Link to='contact'>Contact</Link><br/></li>
       <li> <Link to='/User/yogesh'>Yogesh</Link><br/></li>
       <li> <Link to='/User/sharma'>Sharma</Link><br/></li>
        </ul>*
        </div>
        </>
    )
}

export default NavBar;