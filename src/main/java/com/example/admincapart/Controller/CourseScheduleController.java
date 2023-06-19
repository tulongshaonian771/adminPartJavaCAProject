package com.example.admincapart.Controller;

import com.example.admincapart.Model.CourseSchedule;
import com.example.admincapart.Service.CourseScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/course-schedules")
public class CourseScheduleController {

    private final CourseScheduleService courseScheduleService;

    @Autowired
    public CourseScheduleController(CourseScheduleService courseScheduleService) {
        this.courseScheduleService = courseScheduleService;
    }

    @GetMapping
    public ResponseEntity<List<CourseSchedule>> getAllCourseSchedules() {
        List<CourseSchedule> courseSchedules = courseScheduleService.getAllCourseSchedules();
        return new ResponseEntity<>(courseSchedules, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseSchedule> getCourseScheduleById(@PathVariable Integer id) throws Exception {
        CourseSchedule courseSchedule = courseScheduleService.getCourseScheduleById(id);
        return new ResponseEntity<>(courseSchedule, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CourseSchedule> createCourseSchedule(@RequestBody CourseSchedule courseSchedule) {
        CourseSchedule createdCourseSchedule = courseScheduleService.createCourseSchedule(courseSchedule);
        return new ResponseEntity<>(createdCourseSchedule, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseSchedule> updateCourseSchedule(@PathVariable Integer id, @RequestBody CourseSchedule updatedCourseSchedule) throws Exception {
        CourseSchedule updatedCourseScheduleEntity = courseScheduleService.updateCourseSchedule(id, updatedCourseSchedule);
        return new ResponseEntity<>(updatedCourseScheduleEntity, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourseSchedule(@PathVariable Integer id) {
        courseScheduleService.deleteCourseSchedule(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
