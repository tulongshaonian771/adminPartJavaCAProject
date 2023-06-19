package com.example.admincapart.Service;

import com.example.admincapart.Model.Lecturer;
import com.example.admincapart.Repository.LecturerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LecturerService {
    private final LecturerRepository lecturerRepository;

    @Autowired
    public LecturerService(LecturerRepository lecturerRepository) {
        this.lecturerRepository = lecturerRepository;
    }

    public List<Lecturer> getAllLecturers() {
        return lecturerRepository.findAll();
    }

    public Lecturer getLecturerById(Integer id) throws Exception {
        return lecturerRepository.findById(id)
                .orElseThrow(() -> new Exception("Lecturer not found with id: " + id));
    }

    public Lecturer updateLecturer(Integer id, Lecturer updatedLecturer) throws Exception {
        Lecturer lecturer = lecturerRepository.findById(id)
                .orElseThrow(() -> new Exception("Lecturer not found with id: " + id));

        lecturer.setUsername(updatedLecturer.getUsername());
        lecturer.setBirthday(updatedLecturer.getBirthday());
        lecturer.setGender(updatedLecturer.getGender());
        lecturer.setFaculty(updatedLecturer.getFaculty());
        lecturer.setFirstname(updatedLecturer.getFirstname());
        lecturer.setLastname(updatedLecturer.getLastname());
        lecturer.setPassword(updatedLecturer.getPassword());
        lecturer.setSurname(updatedLecturer.getSurname());
        lecturer.setAddress(updatedLecturer.getAddress());
        lecturer.setContactNumber(updatedLecturer.getContactNumber());
        lecturer.setEmail(updatedLecturer.getEmail());

        return lecturerRepository.save(lecturer);
    }

    public void deleteLecturer(Integer id) {
        Lecturer lecturer = lecturerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Lecturer not found with id: " + id));

        lecturerRepository.delete(lecturer);
    }
}