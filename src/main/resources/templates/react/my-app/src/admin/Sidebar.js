import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import React from "react";

const Sidebar = ({ onChangeStatus }) => {
    const handleClick1 = () => {
        onChangeStatus(1);
    };

    const handleClick2 = () => {
        onChangeStatus(2);
    };

    const handleClick3 = () => {
        onChangeStatus(3);
    };

    const handleClick4 = () => {
        onChangeStatus(4);
    };

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Button onClick={handleClick1}>ManageStudent</Button>
                </li>
                <li>
                    <Button onClick={handleClick2}>ManageLecturer</Button>
                </li>
                <li>
                    <Button onClick={handleClick3}>ManageCourse</Button>
                </li>
                <li>
                    <Button onClick={handleClick4}>ManageEnrolment</Button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
