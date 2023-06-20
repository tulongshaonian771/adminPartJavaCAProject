package com.example.admincapart.Controller.Admin;

import com.example.admincapart.Model.Lecturer;
import com.example.admincapart.Model.Student;
import com.example.admincapart.Service.LecturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/adminlecturer")
public class AdminLecturerController {
    private final LecturerService lecturerService;

    @Autowired
    public AdminLecturerController(LecturerService lecturerService) {
        this.lecturerService = lecturerService;
    }

    @GetMapping
    public ResponseEntity<List<Lecturer>> getAllLecturers() {
        List<Lecturer> lecturers = lecturerService.getAllLecturers();
        return new ResponseEntity<>(lecturers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lecturer> getLecturerById(@PathVariable Integer id) throws Exception {
        Lecturer lecturer = lecturerService.getLecturerById(id);
        return new ResponseEntity<>(lecturer, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Lecturer> updateLecturer(@PathVariable Integer id, @RequestBody Lecturer updatedLecturer) throws Exception {
        Lecturer updatedLecturerEntity = lecturerService.updateLecturer(id, updatedLecturer);
        return new ResponseEntity<>(updatedLecturerEntity, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Lecturer> createLecturer(@RequestBody Lecturer lecturer) {
        Lecturer createdlecturer = lecturerService.createLecturer(lecturer);
        return new ResponseEntity<>(createdlecturer, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLecturer(@PathVariable Integer id) {
        lecturerService.deleteLecturer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
