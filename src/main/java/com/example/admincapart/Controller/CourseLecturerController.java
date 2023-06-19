package com.example.admincapart.Controller;

import com.example.admincapart.Model.CourseLecturer;
import com.example.admincapart.Service.CourseLecturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/course-lecturers")
public class CourseLecturerController {

    private final CourseLecturerService courseLecturerService;

    @Autowired
    public CourseLecturerController(CourseLecturerService courseLecturerService) {
        this.courseLecturerService = courseLecturerService;
    }

    @GetMapping
    public ResponseEntity<List<CourseLecturer>> getAllCourseLecturers() {
        List<CourseLecturer> courseLecturers = courseLecturerService.getAllCourseLecturers();
        return new ResponseEntity<>(courseLecturers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseLecturer> getCourseLecturerById(@PathVariable Integer id) throws Exception {
        CourseLecturer courseLecturer = courseLecturerService.getCourseLecturerById(id);
        return new ResponseEntity<>(courseLecturer, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CourseLecturer> createCourseLecturer(@RequestBody CourseLecturer courseLecturer) {
        CourseLecturer createdCourseLecturer = courseLecturerService.createCourseLecturer(courseLecturer);
        return new ResponseEntity<>(createdCourseLecturer, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseLecturer> updateCourseLecturer(@PathVariable Integer id, @RequestBody CourseLecturer updatedCourseLecturer) throws Exception {
        CourseLecturer updatedCourseLecturerEntity = courseLecturerService.updateCourseLecturer(id, updatedCourseLecturer);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
