package com.example.admincapart.Repository;

import com.example.admincapart.Model.CourseLecturer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseLecturerRepository extends JpaRepository<CourseLecturer, Integer> {

}