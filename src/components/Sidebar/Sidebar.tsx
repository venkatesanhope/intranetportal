import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebar.css';
import logo from './Logo.png'
const Sidebar = () => {

    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">QSI.NET</div>
                </a>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active"> <a className="nav-link" href="index.html"> <img className="img-fluid" src={logo} /></a> </li>
                <hr className="sidebar-divider" />
                <li className="nav-item"> <a className="nav-link" href="charts.html">  <span>TMS - CHENNAI</span></a> </li>
                <li className="nav-item"> <a className="nav-link" href="tables.html"> <i className="fas fa-fw fa-table"></i> <span>TMS - OOTY</span></a> </li>
                <li className="nav-item"> <a className="nav-link" href="tables.html"> <i className="fas fa-fw fa-table"></i> <span>MAIL LINK</span></a> </li>
                <li className="nav-item"> <a className="nav-link" href="tables.html"> <i className="fas fa-fw fa-table"></i> <span>CLIENT VISIT</span></a> </li>
                <li className="nav-item"> <a className="nav-link" href="tables.html"> <i className="fas fa-fw fa-table"></i> <span>QSPURT PRODUCTION TRACKING</span></a> </li>
                <li className="nav-item"> <a className="nav-link" href="tables.html"> <i className="fas fa-fw fa-table"></i> <span>MANAGEMENT TEAM</span></a> </li>
                <li className="nav-item"> <a className="nav-link" href="tables.html"> <i className="fas fa-fw fa-table"></i> <span>QUICK STAR</span></a> </li>
                <li className="nav-item"> <a className="nav-link" href="tables.html"> <i className="fas fa-fw fa-table"></i> <span>SOCIAL ACTIVITIES</span></a> </li>
                <li className="nav-item"> <a className="nav-link" href="tables.html"> <i className="fas fa-fw fa-table"></i> <span>ARCHIVES</span></a> </li>
            </ul>
        </>
    )
}
export default Sidebar