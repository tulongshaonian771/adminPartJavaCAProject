import React, {useState} from 'react';
import '../App.css';
import AppNavbar from '../AppNavbar';
import StudentController from "./StudentController";
import Sidebar from "./Sidebar";
import LecturerController from "./LecturerController";
import ModuleController from "./CourseController";
import CourseController from "./CourseController";

const AdminHome = () => {

    const [contextStatus, setContextStatus] = useState(1);

    const handleChangeStatus = (newStatus) => {
        setContextStatus(newStatus);
    };

    let componentToRender = null;

    if (contextStatus === 1) {componentToRender = <StudentController />;}
    else if (contextStatus === 2) {componentToRender = <LecturerController />;}
    else if (contextStatus === 3) {componentToRender = <CourseController />;}

    return (
        <div className="container">
            <div className="navbar"><AppNavbar/></div>
            <div className="sidebar"><Sidebar onChangeStatus={handleChangeStatus}/></div>
            <div>{componentToRender}</div>
        </div>
    );
}

export default AdminHome;