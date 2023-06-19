package com.example.admincapart.Service;

import com.example.admincapart.Model.Faculty;
import com.example.admincapart.Repository.FacultyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacultyService {

    private final FacultyRepository facultyRepository;
    @Autowired
    public FacultyService(FacultyRepository facultyRepository) {
        this.facultyRepository = facultyRepository;
    }

    public List<Faculty> getAllFaculties() {
        return facultyRepository.findAll();
    }

    public Faculty getFacultyById(Integer id) throws Exception {
        return facultyRepository.findById(id)
                .orElseThrow(() -> new Exception("Faculty not found with id: " + id));
    }

    public Faculty createFaculty(Faculty faculty) {
        return facultyRepository.save(faculty);
    }

    public Faculty updateFaculty(Integer id, Faculty updatedFaculty) throws Exception {
        Faculty faculty = facultyRepository.findById(id)
                .orElseThrow(() -> new Exception("Faculty not found with id: " + id));

        faculty.setFacultyName(updatedFaculty.getFacultyName());
        return facultyRepository.save(faculty);
    }

    public void deleteFaculty(Integer id) {
        facultyRepository.deleteById(id);
    }
}

