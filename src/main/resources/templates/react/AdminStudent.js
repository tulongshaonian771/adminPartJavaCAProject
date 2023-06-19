import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminStudentControllerTest() {
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({});
    const [newStudent, setNewStudent] = useState({});
    const [updatedStudent, setUpdatedStudent] = useState({});
    const [deletedStudentId, setDeletedStudentId] = useState(null);

    // 获取所有学生
    const getAllStudents = async () => {
        try {
            const response = await axios.get('/adminstudent/');
            setStudents(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // 根据ID获取学生
    const getStudentById = async (id) => {
        try {
            const response = await axios.get(`/adminstudent/${id}`);
            setStudent(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // 创建学生
    const createStudent = async () => {
        try {
            const response = await axios.post('/adminstudent', newStudent);
            setNewStudent({});
            getAllStudents();
        } catch (error) {
            console.error(error);
        }
    };

    // 更新学生
    const updateStudent = async (id) => {
        try {
            const response = await axios.put(`/adminstudent/${id}`, updatedStudent);
            setUpdatedStudent({});
            getAllStudents();
        } catch (error) {
            console.error(error);
        }
    };

    // 删除学生
    const deleteStudent = async (id) => {
        try {
            await axios.delete(`/adminstudent/${id}`);
            setDeletedStudentId(id);
            getAllStudents();
        } catch (error) {
            console.error(error);
        }
    };

    // 在组件挂载时获取所有学生
    useEffect(() => {
        getAllStudents();
    }, []);

    return (
        <div>
            <h2>学生列表</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>

            <h2>根据ID获取学生</h2>
            <input
                type="number"
                placeholder="请输入学生ID"
                onChange={(e) => getStudentById(e.target.value)}
            />
            {student && (
                <div>
                    <h3>学生详情</h3>
                    <p>ID: {student.id}</p>
                    <p>姓名: {student.name}</p>
                    <p>年龄: {student.age}</p>
                    <p>性别: {student.gender}</p>
                </div>
            )}

            <h2>创建学生</h2>
            <input
                type="text"
                placeholder="姓名"
                value={newStudent.name || ''}
                onChange={(e) =>
                    setNewStudent({ ...newStudent, name: e.target.value })
                }
            />
            <input
                type="number"
                placeholder="年龄"
                value={newStudent.age || ''}
                onChange={(e) =>
                    setNewStudent({ ...newStudent, age: parseInt(e.target.value) })
                }
            />
            <input
                type="text"
                placeholder="性别"
                value={newStudent.gender || ''}
                onChange={(e) =>
                    setNewStudent({ ...newStudent, gender: e.target.value })
                }
            />
            <button onClick={createStudent}>创建</button>

            <h2>更新学生</h2>
            <input
                type="number"
                placeholder="请输入学生ID"
                onChange={(e) => setUpdatedStudent({ ...updatedStudent, id: e.target.value })}
            />
            <input
                type="text"
                placeholder="姓名"
                value={updatedStudent.name || ''}
                onChange={(e) =>
                    setUpdatedStudent({ ...updatedStudent, name: e.target.value })
                }
            />
            <input
                type="number"
                placeholder="年龄"
                value={updatedStudent.age || ''}
                onChange={(e) =>
                    setUpdatedStudent({ ...updatedStudent, age: parseInt(e.target.value) })
                }
            />
            <input
                type="text"
                placeholder="性别"
                value={updatedStudent.gender || ''}
                onChange={(e) =>
                    setUpdatedStudent({ ...updatedStudent, gender: e.target.value })
                }
            />
            <button onClick={() => updateStudent(updatedStudent.id)}>更新</button>

            <h2>删除学生</h2>
            <input
                type="number"
                placeholder="请输入学生ID"
                onChange={(e) => deleteStudent(e.target.value)}
            />
            {deletedStudentId && <p>已删除学生ID: {deletedStudentId}</p>}
        </div>
    );
}

export default AdminStudentControllerTest;
