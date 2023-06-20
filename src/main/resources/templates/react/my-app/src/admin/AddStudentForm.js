import React, { useState } from 'react';
import axios from 'axios';

function AddStudentForm({ onAddStudent }) {
    const initialFormState = {
        firstname: '',
        surname: '',
        lastname: '',
        accountType: '',
        gender: '',
        username: '',
        password: '',
        email: '',
        birthday: '',
        address: '',
        contactNumber: '',
        enrollmentDate: '',
        gpa: '',
        id: '',
        studentFaculty: {
            id: '',
            facultyName: '',
        },
    };

    const [student, setStudent] = useState(initialFormState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Check if the input name has a dot (indicating a nested property)
        if (name.includes('.')) {
            const [parentProp, childProp] = name.split('.');
            setStudent((prevStudent) => ({
                ...prevStudent,
                [parentProp]: {
                    ...prevStudent[parentProp],
                    [childProp]: value,
                },
            }));
        } else {
            setStudent((prevStudent) => ({
                ...prevStudent,
                [name]: value,
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/adminstudent', student);
            onAddStudent(response.data);
            setStudent(initialFormState);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Surname:
                    <input
                        type="text"
                        name="surname"
                        value={student.surname}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstname" // modified field name to match the desired object property
                        value={student.firstname} // modified field value to match the desired object property
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastname"
                        value={student.lastname}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Account Type:
                    <input
                        type="text"
                        name="accountType"
                        value={student.accountType}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Gender:
                    <input
                        type="text"
                        name="gender"
                        value={student.gender}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={student.username}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={student.password}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Birthday:
                    <input
                        type="text"
                        name="birthday"
                        value={student.birthday}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={student.address}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Contact Number:
                    <input
                        type="text"
                        name="contactNumber"
                        value={student.contactNumber}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Enrollment Date:
                    <input
                        type="text"
                        name="enrollmentDate"
                        value={student.enrollmentDate}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    GPA:
                    <input
                        type="text"
                        name="gpa"
                        value={student.gpa}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    ID:
                    <input
                        type="text"
                        name="id"
                        value={student.id}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Student Faculty ID:
                    <input
                        type="text"
                        name="studentFaculty.id"
                        value={student.studentFaculty.id}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Faculty Name:
                    <input
                        type="text"
                        name="studentFaculty.facultyName"
                        value={student.studentFaculty.facultyName}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddStudentForm;
