package com.example.admincapart.Service;

import com.example.admincapart.Model.Schedule;
import com.example.admincapart.Repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScheduleService {
    private final ScheduleRepository scheduleRepository;

    @Autowired
    public ScheduleService(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    public Optional<Schedule> getScheduleById(Integer id) {
        return scheduleRepository.findById(id);
    }

    public Schedule createSchedule(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    public Optional<Schedule> updateSchedule(Integer id, Schedule schedule) {
        Optional<Schedule> optionalSchedule = scheduleRepository.findById(id);
        if (optionalSchedule.isPresent()) {
            Schedule existingSchedule = optionalSchedule.get();
            existingSchedule.setScheduleDayOfWeek(schedule.getScheduleDayOfWeek());
            existingSchedule.setScheduleStartTime(schedule.getScheduleStartTime());
            existingSchedule.setScheduleEndTime(schedule.getScheduleEndTime());
            return Optional.of(scheduleRepository.save(existingSchedule));
        } else {
            return Optional.empty();
        }
    }

    public boolean deleteSchedule(Integer id) {
        Optional<Schedule> optionalSchedule = scheduleRepository.findById(id);
        if (optionalSchedule.isPresent()) {
            scheduleRepository.delete(optionalSchedule.get());
            return true;
        } else {
            return false;
        }
    }
}