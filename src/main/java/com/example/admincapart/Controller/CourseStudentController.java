package com.example.admincapart.Controller;

import com.example.admincapart.Model.CourseStudent;
import com.example.admincapart.Service.CourseStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/course-students")
public class CourseStudentController {

    private final CourseStudentService courseStudentService;

    @Autowired
    public CourseStudentController(CourseStudentService courseStudentService) {
        this.courseStudentService = courseStudentService;
    }

    @GetMapping
    public ResponseEntity<List<CourseStudent>> getAllCourseStudents() {
        List<CourseStudent> courseStudents = courseStudentService.getAllCourseStudents();
        return new ResponseEntity<>(courseStudents, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseStudent> getCourseStudentById(@PathVariable Integer id) throws Exception {
        CourseStudent courseStudent = courseStudentService.getCourseStudentById(id);
        return new ResponseEntity<>(courseStudent, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CourseStudent> createCourseStudent(@RequestBody CourseStudent courseStudent) {
        CourseStudent createdCourseStudent = courseStudentService.createCourseStudent(courseStudent);
        return new ResponseEntity<>(createdCourseStudent, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseStudent> updateCourseStudent(@PathVariable Integer id, @RequestBody CourseStudent updatedCourseStudent) throws Exception {
        CourseStudent updatedCourseStudentEntity = courseStudentService.updateCourseStudent(id, updatedCourseStudent);
        return new ResponseEntity<>(updatedCourseStudentEntity, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourseStudent(@PathVariable Integer id) {
        courseStudentService.deleteCourseStudent(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
