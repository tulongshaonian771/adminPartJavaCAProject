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

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Button onClick={handleClick1}>StudentController</Button>
                </li>
                <li>
                    <Button onClick={handleClick2}>LectureController</Button>
                </li>
                <li>
                    <Button onClick={handleClick3}>ModuleController</Button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
