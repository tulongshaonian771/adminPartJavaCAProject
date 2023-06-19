package com.example.admincapart.Algorithm;
/*
import com.master.caps.Model.Course;
import com.master.caps.Model.CourseLecturer;
import com.master.caps.Model.CourseSchedule;
import com.master.caps.Model.Lecturer;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


public class ScheduleArrangement {

    public static List<CourseSchedule> scheduleCourses(List<CourseLecturer> courseLecturers, List<String> classrooms) {
        List<CourseSchedule> schedule = new ArrayList<>();
        // 初始化每天的课程安排为空
        for (int day = 0; day < 5; day++) {
            for (int timeSlot = 0; timeSlot < 8; timeSlot++) {
                schedule.add(null);
            }
        }

        // 遍历每个老师
        for (CourseLecturer Lecturer : courseLecturers) {
            Course courses = Lecturer.getCourse();
            boolean scheduled=false;

                // 遍历每天和时间槽
                for (int day = 0; day < 5 && !scheduled; day++) {
                    for (int timeSlot = 0; timeSlot < 8 && !scheduled; timeSlot++) {
                        // 检查时间槽和教室是否可用
                        if (isTimeSlotAvailable(schedule, day, timeSlot) && isClassroomAvailable(schedule, classrooms, day, timeSlot)) {
                            // 设置课程时间槽和教室
                            String classroom = getClassroomForTimeSlot(schedule, classrooms, day, timeSlot);
                            schedule.set(day * 8 + timeSlot, course);
                            course.setClassroom(classroom);
                            scheduled = true;
                        }
                    }

                // 如果无法安排课程，则输出提示信息
                if (!scheduled) {
                    System.out.println("Unable to schedule course: " + course.getCoursename() + " for Lecturer: " + Lecturer.getFullName());
                }
            }
        }

        return schedule;
    }

    public static boolean isTimeSlotAvailable(List<Course> schedule, int day, int timeSlot) {
        Course course = schedule.get(day * 8 + timeSlot);
        return course == null;
    }

    public static boolean isClassroomAvailable(List<Course> schedule, List<String> classrooms, int day, int timeSlot) {
        String classroom = getClassroomForTimeSlot(schedule, classrooms, day, timeSlot);
        return classroom != null;
    }

    public static String getClassroomForTimeSlot(List<Course> schedule, List<String> classrooms, int day, int timeSlot) {
        Set<String> occupiedClassrooms = new HashSet<>();
        for (int i = 0; i < day * 8 + timeSlot; i++) {
            Course course = schedule.get(i);
            if (course != null) {
                occupiedClassrooms.add(course.getClassroom());
            }
        }
        for (String classroom : classrooms) {
            if (!occupiedClassrooms.contains(classroom)) {
                return classroom;
            }
        }
        return null;
    }


    // 生成指定数量的教室
    public static List<String> generateClassrooms(int count) {
        List<String> classrooms = new ArrayList<>();
        for (int i = 1; i <= count; i++) {
            classrooms.add(new String("Classroom" + i));
        }
        return classrooms;
    }


}
*/