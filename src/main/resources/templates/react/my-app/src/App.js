import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from "./admin/AdminHome";
import StudentController from "./admin/StudentController";
import AddStudentForm from "./admin/AddStudentForm";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route  path="/" exact={true} element={<AdminHome/>}/>
                <Route path='/add-student' element={<AddStudentForm/>}/>
            </Routes>
        </Router>

    )
}

export default App;
