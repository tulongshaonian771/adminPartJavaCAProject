import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentController() {
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

  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);


  const fetchStudents = async () => {
    try {
      const response = await axios.get('/adminstudent');
      const data = response.data;
      setStudents(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const addStudent = async () => {
    try {
      const response = await axios.post('/adminstudent', student);
      setStudents([...students, response.data]);
      closePopup();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`/adminstudent/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateStudent = async () => {
    try {
      await axios.put(`/adminstudent/${student.id}`, student);
      setStudents(
          students.map((s) => (s.id === student.id ? student : s))
      );
      closePopup();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'studentFaculty') {
      setStudent((prevStudent) => ({
        ...prevStudent,
        studentFaculty: {
          ...prevStudent.studentFaculty,
          id: value,
        },
      }));
    } else {
      setStudent((prevStudent) => ({
        ...prevStudent,
        [name]: value,
      }));
    }
  };

  const editStudent = (selectedStudent) => {
    setStudent(selectedStudent);
    openPopup();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.id) {
      updateStudent();
    } else {
      addStudent();
    }
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setStudent(initialFormState);
  };

  return (
      <div className="student-controller">
        <h1>Student List</h1>
        <table className="student-table">
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
            <th>Email</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Enrollment Date</th>
            <th>Faculty Name</th>
            <th>GPA</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {students.map((student) => (
              <tr key={student.id}>
                <td>{student.firstname}</td>
                <td>{student.surname}</td>
                <td>{student.lastname}</td>
                <td>{student.accountType}</td>
                <td>{student.gender}</td>
                <td>{student.username}</td>
                <td>{student.password}</td>
                <td>{student.email}</td>
                <td>{student.birthday}</td>
                <td>{student.address}</td>
                <td>{student.contactNumber}</td>
                <td>{student.enrollmentDate}</td>
                <td>{student.studentFaculty.facultyName}</td>
                <td>{student.gpa}</td>
                <td>
                  <button className="edit-button" onClick={() => editStudent(student)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => deleteStudent(student.id)}>
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
                <h2>{student.id ? 'Edit Student' : 'Add Student'}</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstname"
                        value={student.firstname}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Surname:</label>
                    <input
                        type="text"
                        name="surname"
                        value={student.surname}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastname"
                        value={student.lastname}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Account Type:</label>
                    <input
                        type="text"
                        name="accountType"
                        value={student.accountType}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender:</label>
                    <input
                        type="text"
                        name="gender"
                        value={student.gender}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={student.username}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="text"
                        name="password"
                        value={student.password}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={student.email}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Birthday:</label>
                    <input
                        type="text"
                        name="birthday"
                        value={student.birthday}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={student.address}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Number:</label>
                    <input
                        type="text"
                        name="contactNumber"
                        value={student.contactNumber}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Enrollment Date:</label>
                    <input
                        type="text"
                        name="enrollmentDate"
                        value={student.enrollmentDate}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Faculty Name:</label>
                    <select
                        name="studentFaculty"
                        value={student.studentFaculty.id}
                        onChange={handleInputChange}
                    >
                      <option value="">Select Faculty</option>
                      <option value="1">ISS</option>
                      <option value="2">SOC</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>GPA:</label>
                    <input
                        type="text"
                        name="gpa"
                        value={student.gpa}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="popup-buttons">
                    <button type="submit">{student.id ? 'Save' : 'Add'}</button>
                    <button onClick={closePopup}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
        )}

        <button className="add-button" onClick={openPopup}>Add Student</button>
      </div>
  );
}

export default StudentController;
