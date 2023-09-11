import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faUsers,faArrowRightFromBracket,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Sidebaar = ()=>
{
return(
    <>
                <div className="expovent__sidebar" data-background="assets/img/bg/dropdown-bg.png">
                <div className="logo-details">
                    <span>
                    <a href="#"><img className='logo__white' src="/assets/images/logo1.webp" alt=""/></a>
                    </span>
                    <span>
                    <a href="#"><img className='log__smnall' src="/assets/images/logo.webp" alt=""/></a>
                    </span>
                </div>
                <div className="sidebar__inner simple-bar">
                    <div className="dlabnav">
                    <ul className="metismenu" id="menu">
                        <li> <Link className="has-arrow" href="/dashbord" robotoregular="true"  ><FontAwesomeIcon icon={faHouse}/><span className='nav-text'>Dashboard</span> </Link></li>
                        <li className="mm-active"><Link href="/profile" robotoregular="true"> <FontAwesomeIcon icon={faUser}/> <span className='nav-text'>Profile</span> </Link> </li>
                        <li><Link href="#" robotoregular="true"> <FontAwesomeIcon icon={faUsers} /> <span className='nav-text'>User Management </span></Link></li>
                    </ul>
                    
                    <div className="sidebar__profile">
                        <a href="#"><FontAwesomeIcon icon={faArrowRightFromBracket} /><span className="links_name">Log out</span></a>
                    </div>
                    <div className="sidebar__copyright">
                        <p>Copyright @ ezrankings 2023</p>
                    </div>
                    </div>
                </div>
            </div>
    </>
)
}
export default Sidebaar