import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EnrollmentController() {
    const [courseStudents, setCourseStudents] = useState([]);

    useEffect(() => {
        fetchCourseStudents();
    }, []);

    const fetchCourseStudents = async () => {
        try {
            const response = await axios.get('/adminenrolment'); // 替换为您的后端API地址
            const courseStudents = response.data.filter(
                (courseStudent) => courseStudent.requestStatus === 1
            );
            setCourseStudents(courseStudents);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditStatus = async (courseStudentId) => {
        try {
            await axios.put(`/adminenrolment/${courseStudentId}`, { status: 0 }); // 替换为您的后端API地址
            fetchCourseStudents(); // 更新列表
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Course Students</h1>
            <table>
                <thead>
                <tr>
                    <th>Course ID</th>
                    <th>Student ID</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {courseStudents.map((courseStudent) => (
                    <tr key={courseStudent.id}>
                        <td>{courseStudent.course.id}</td>
                        <td>{courseStudent.student.id}</td>
                        <td>
                            <button onClick={() => handleEditStatus(courseStudent.id)}>
                                Edit
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnrollmentController;
