import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LecturerController() {
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
        id: '',
        faculty: {
            id: '',
            facultyName: '',
        },
    };

    const [lecturers, setLecturers] = useState([]);
    const [lecturer, setLecturer] = useState(initialFormState);
    const [isLoading, setIsLoading] = useState(true);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        fetchLecturers();
    }, []);

    const fetchLecturers = async () => {
        try {
            const response = await axios.get('/adminlecturer');
            const data = response.data;
            setLecturers(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const addLecturer = async () => {
        try {
            const response = await axios.post('/adminlecturer', lecturer);
            setLecturers([...lecturers, response.data]);
            closePopup();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteLecturer = async (id) => {
        try {
            await axios.delete(`/adminlecturer/${id}`);
            setLecturers(lecturers.filter((lecturer) => lecturer.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const updateLecturer = async () => {
        try {
            await axios.put(`/adminlecturer/${lecturer.id}`, lecturer);
            setLecturers(
                lecturers.map((l) => (l.id === lecturer.id ? lecturer : l))
            );
            closePopup();
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "faculty") {
            setLecturer((prevLecturer) => ({
                ...prevLecturer,
                faculty: {
                    ...prevLecturer.faculty,
                    id: value,
                },
            }));
        } else {
            setLecturer((prevLecturer) => ({
                ...prevLecturer,
                [name]: value,
            }));
        }
    };

    const editLecturer = (selectedLecturer) => {
        setLecturer(selectedLecturer);
        openPopup();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (lecturer.id) {
            updateLecturer();
        } else {
            addLecturer();
        }
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setLecturer(initialFormState);
    };

    return (
        <div className="lecturer-controller">
            <h1>Lecturer List</h1>
            <table className="lecturer-table">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Surname</th>
                    <th>Last Name</th>
                    <th>Account Type</th>
                    <th>Gender</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Birthday</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                    <th>Faculty Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {lecturers.map((lecturer) => (
                    <tr key={lecturer.id}>
                        <td>{lecturer.firstname}</td>
                        <td>{lecturer.surname}</td>
                        <td>{lecturer.lastname}</td>
                        <td>{lecturer.accountType}</td>
                        <td>{lecturer.gender}</td>
                        <td>{lecturer.username}</td>
                        <td>{lecturer.password}</td>
                        <td>{lecturer.email}</td>
                        <td>{lecturer.birthday}</td>
                        <td>{lecturer.address}</td>
                        <td>{lecturer.contactNumber}</td>
                        <td>{lecturer.faculty.facultyName}</td>
                        <td>
                            <button
                                className="edit-button"
                                onClick={() => editLecturer(lecturer)}
                            >
                                Edit
                            </button>
                            <button
                                className="delete-button"
                                onClick={() => deleteLecturer(lecturer.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>{lecturer.id ? 'Edit Lecturer' : 'Add Lecturer'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>First Name:</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    value={lecturer.firstname}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Surname:</label>
                                <input
                                    type="text"
                                    name="surname"
                                    value={lecturer.surname}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name:</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    value={lecturer.lastname}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Account Type:</label>
                                <input
                                    type="text"
                                    name="accountType"
                                    value={lecturer.accountType}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Gender:</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={lecturer.gender}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Username:</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={lecturer.username}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input
                                    type="text"
                                    name="password"
                                    value={lecturer.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={lecturer.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Birthday:</label>
                                <input
                                    type="text"
                                    name="birthday"
                                    value={lecturer.birthday}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={lecturer.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Contact Number:</label>
                                <input
                                    type="text"
                                    name="contactNumber"
                                    value={lecturer.contactNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Faculty Name:</label>
                                <select
                                    name="faculty"
                                    value={lecturer.faculty.id}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Faculty</option>
                                    <option value="1">ISS</option>
                                    <option value="2">SOC</option>
                                </select>
                            </div>
                            <div className="popup-buttons">
                                <button type="submit">
                                    {lecturer.id ? 'Save' : 'Add'}
                                </button>
                                <button onClick={closePopup}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <button className="add-button" onClick={openPopup}>
                Add Lecturer
            </button>
        </div>
    );
}

export default LecturerController;
