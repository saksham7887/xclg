import './navbar.css'
import logo from '../imga/logo.jpg'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary py-0  bg-light shadow p-3  bg-body-tertiary rounded" >
                <div className="container">
                    <Link to='/'>   <a className="navbar-brand " >
                        <img src={logo}  className="logoa"  alt="" /> </a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "><i class="fa-solid fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse navbartop" id="navbarNav">
                        <ul className="navbar-nav mx-auto nav_ul align-items-center">
                            <li className="nav-item">
                                <Link to='/'>     <a className="nav-link active mx-3" aria-current="page" >Home</a></Link>
                            </li>




                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us

                                </a>
                                <ul class="dropdown-menu">
                                    <Link to='/About'  >   <li><a class="dropdown-item" href="#">About KIT</a></li></Link>
                                    <Link to='/About1'  >  <li><a class="dropdown-item" href="#" >About Sansath</a></li></Link>
                                    <Link to='/About2'  >  <li><a class="dropdown-item" href="#">Chairman</a></li></Link>
                                </ul>
                            </li>





                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Department

                                </a>
                                <ul class="dropdown-menu">
                                    <Link to='/Computer'  >  <li><a class="dropdown-item" href="#">Computer engineering</a></li></Link>
                                    <Link to='/Mechanical'  >  <li><a class="dropdown-item" href="#">Mechanical engineering</a></li></Link>
                                    <Link to='/Civil '  >  <li><a class="dropdown-item" href="#">Civil engineering</a></li></Link>
                                    <Link to='/Electrical'  >  <li><a class="dropdown-item" href="#">Electrical engineering</a></li></Link>
                                    <Link to='/Chemical'  >  <li><a class="dropdown-item" href="#">Chemical engineering </a></li></Link>
                                </ul>
                            </li>






                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Examination

                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="https://msbte.org.in/portal/question-paper-search/">Question Pepar</a></li>
                                    <li><a class="dropdown-item" href="https://msbte.org.in/pcwebBTRes/pcResult01/pcfrmViewMSBTEResult.aspx">Result Winter 2023</a></li>
                                    <li><a class="dropdown-item" href="https://curriculum.msbte.edu.in/msbteacmon/curdev/outer.php?q=get_lab_manuals">Manual Pdf</a></li>

                                </ul>
                            </li>






                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Facilities

                                </a>
                                <ul class="dropdown-menu">
                                    <Link to='/Computerlab'  >  <li><a class="dropdown-item" href="#">Computer Lab</a></li></Link>
                                    <Link to='/Library'  >  <li><a class="dropdown-item" href="#">Library</a></li></Link>
                                    <Link to='/WorkShop '  >  <li><a class="dropdown-item" href="#">WorkShop</a></li></Link>

                                </ul>
                            </li>






                            <li className="nav-item">
                                <Link to='/Gallery'>      <a className="nav-link mx-3" >Gallery</a></Link>
                            </li>





                            <li className="nav-item">
                                <Link to='/Contact'>      <a className="nav-link mx-3" >Contact</a></Link>

                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>

        </>
    );
}

export default Navbar;