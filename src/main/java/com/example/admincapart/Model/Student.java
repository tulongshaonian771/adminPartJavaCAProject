package com.example.admincapart.Model;
import jakarta.persistence.*;

import lombok.Data;

import java.util.Date;


@Entity
@Data
public class Student extends Person{
    @Temporal(TemporalType.DATE)
    private Date enrollmentDate;

    @ManyToOne
    @JoinColumn(name = "student_faculty_id")
    private Faculty studentFaculty;

    private Float gpa;
}
