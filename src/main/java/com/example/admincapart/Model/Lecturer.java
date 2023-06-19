package com.example.admincapart.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Lecturer extends Person{
    @ManyToOne
    @JoinColumn(name = "lecturer_faculty_id")
    private Faculty faculty;
}
