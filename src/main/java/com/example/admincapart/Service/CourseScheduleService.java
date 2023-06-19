package com.example.admincapart.Service;

import com.example.admincapart.Model.CourseSchedule;
import com.example.admincapart.Repository.CourseScheduleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseScheduleService {

    private final CourseScheduleRepository courseScheduleRepository;

    @Autowired
    public CourseScheduleService(CourseScheduleRepository courseScheduleRepository) {
        this.courseScheduleRepository = courseScheduleRepository;
    }

    public List<CourseSchedule> getAllCourseSchedules() {
        return courseScheduleRepository.findAll();
    }

    public CourseSchedule getCourseScheduleById(Integer id) throws Exception {
        return courseScheduleRepository.findById(id)
                .orElseThrow(() -> new Exception("Course schedule not found with id: " + id));
    }

    public CourseSchedule createCourseSchedule(CourseSchedule courseSchedule) {
        return courseScheduleRepository.save(courseSchedule);
    }

    public CourseSchedule updateCourseSchedule(Integer id, CourseSchedule updatedCourseSchedule) throws Exception {
        CourseSchedule courseSchedule = courseScheduleRepository.findById(id)
                .orElseThrow(() -> new Exception("Course schedule not found with id: " + id));

        courseSchedule.setCourse(updatedCourseSchedule.getCourse());
        courseSchedule.setSchedule(updatedCourseSchedule.getSchedule());
        courseSchedule.setRoomNumber(updatedCourseSchedule.getRoomNumber());

        return courseScheduleRepository.save(courseSchedule);
    }

    public void deleteCourseSchedule(Integer id) {
        courseScheduleRepository.deleteById(id);
    }
}
