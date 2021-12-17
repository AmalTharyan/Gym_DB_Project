package com.example.springtemplate.daos;

import com.example.springtemplate.models.Trainer;

import com.example.springtemplate.repositories.TrainerRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:63342")
public class TrainerRestOrmDao {

  @Autowired
  TrainerRestRepository TrainerRepository;

  @PostMapping("/api/trainer")
  public Trainer createTrainer(@RequestBody Trainer trainer) {
    return TrainerRepository.save(trainer);
  }


  @GetMapping("/api/trainer/find")
  public List<Trainer> findAllTrainers() {
    return TrainerRepository.findAllTrainers();
  }

  @GetMapping("/api/trainer/find/id/{Id}")
  public Trainer findTrainerById(
          @PathVariable("Id") Integer id) {
    return TrainerRepository.findTrainerById(id);
  }

  @PutMapping("/api/trainer/update/{Id}")
  public Trainer updateTrainer(
          @PathVariable("Id") Integer id,
          @RequestBody Trainer trainerUpdates) {
    Trainer trainer = TrainerRepository.findTrainerById(id);
    trainer.setMember_id(trainerUpdates.getMember_id());
    trainer.setFirstName(trainerUpdates.getFirstName());
    trainer.setLastName(trainerUpdates.getLastName());
    trainer.setUsername(trainerUpdates.getUsername());
    trainer.setPassword(trainerUpdates.getPassword());
    trainer.setEmail(trainerUpdates.getEmail());
    trainer.setDob(trainerUpdates.getDob());
    return TrainerRepository.save(trainer);
  }

  @DeleteMapping("/api/trainer/delete/{Id}")
  @ResponseBody
  public void deleteTrainer(@PathVariable("Id") Integer id) {
    TrainerRepository.deleteById(id);
  }
}
