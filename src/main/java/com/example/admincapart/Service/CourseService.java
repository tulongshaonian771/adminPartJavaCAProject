package com.example.admincapart.Service;

import com.example.admincapart.Model.Course;
import com.example.admincapart.Repository.CourseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseById(Integer id) throws Exception {
        return courseRepository.findById(id)
                .orElseThrow(() -> new Exception("Course not found with id: " + id));
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course updateCourse(Integer id, Course updatedCourse) throws Exception {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new Exception("Course not found with id: " + id));

        course.setCourseId(updatedCourse.getCourseId());
        course.setCourseName(updatedCourse.getCourseName());
        course.setCourseCredits(updatedCourse.getCourseCredits());
        course.setCourseCapacity(updatedCourse.getCourseCapacity());
        course.setCourseVacancy(updatedCourse.getCourseVacancy());
        course.setCourseEnrollmentStatus(updatedCourse.getCourseEnrollmentStatus());

        return courseRepository.save(course);
    }

    public void deleteCourse(Integer id) {
        courseRepository.deleteById(id);
    }
}

