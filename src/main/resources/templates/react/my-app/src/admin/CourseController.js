import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CourseController() {
  const initialFormState = {
    courseId: '',
    courseName: '',
    courseCredits: null,
    courseCapacity: null,
    courseVacancy: null,
    courseEnrollmentStatus: null,
    faculty: {
      id: '',
      facultyName: '',
    },
  };

  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('/admincourse');
      const data = response.data;
      setCourses(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const addCourse = async () => {
    try {
      const response = await axios.post('/admincourse', course);
      setCourses([...courses, response.data]);
      closePopup();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`/admincourse/${id}`);
      setCourses(courses.filter((course) => course.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateCourse = async () => {
    try {
      await axios.put(`/admincourse/${course.id}`, course);
      setCourses(courses.map((c) => (c.id === course.id ? course : c)));
      closePopup();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'faculty') {
      setCourse((prevCourse) => ({
        ...prevCourse,
        faculty: {
          ...prevCourse.faculty,
          id: value,
        },
      }));
    } else {
      setCourse((prevCourse) => ({
        ...prevCourse,
        [name]: value,
      }));
    }
  };

  const editCourse = (selectedCourse) => {
    setCourse(selectedCourse);
    openPopup();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (course.id) {
      updateCourse();
    } else {
      addCourse();
    }
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setCourse(initialFormState);
  };

  return (
      <div className="course-controller">
        <h1>Course List</h1>
        <table className="course-table">
          <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Credits</th>
            <th>Capacity</th>
            <th>Vacancy</th>
            <th>Enrollment Status</th>
            <th>Faculty Name</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.courseId}</td>
                <td>{course.courseName}</td>
                <td>{course.courseCredits}</td>
                <td>{course.courseCapacity}</td>
                <td>{course.courseVacancy}</td>
                <td>{course.courseEnrollmentStatus ? 'Enrolled' : 'Not Enrolled'}</td>
                <td>{course.faculty.facultyName}</td>
                <td>
                  <button className="edit-button" onClick={() => editCourse(course)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => deleteCourse(course.id)}>
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
                <h2>{course.id ? 'Edit Course' : 'Add Course'}</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Course ID:</label>
                    <input
                        type="text"
                        name="courseId"
                        value={course.courseId}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Course Name:</label>
                    <input
                        type="text"
                        name="courseName"
                        value={course.courseName}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Credits:</label>
                    <input
                        type="number"
                        name="courseCredits"
                        value={course.courseCredits || ''}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Capacity:</label>
                    <input
                        type="number"
                        name="courseCapacity"
                        value={course.courseCapacity || ''}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Vacancy:</label>
                    <input
                        type="number"
                        name="courseVacancy"
                        value={course.courseVacancy || ''}
                        onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Enrollment Status:</label>
                    <select
                        name="courseEnrollmentStatus"
                        value={course.courseEnrollmentStatus}
                        onChange={handleInputChange}
                    >
                      <option value={true}>Enrolled</option>
                      <option value={false}>Not Enrolled</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Faculty Name:</label>
                    <select
                        name="faculty"
                        value={course.faculty.id}
                        onChange={handleInputChange}
                    >
                      <option value="">Select Faculty</option>
                      <option value="1">ISS</option>
                      <option value="2">SOC</option>
                    </select>
                  </div>
                  <div className="popup-buttons">
                    <button type="submit">{course.id ? 'Save' : 'Add'}</button>
                    <button onClick={closePopup}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
        )}

        <button className="add-button" onClick={openPopup}>
          Add Course
        </button>
      </div>
  );
}

export default CourseController;
