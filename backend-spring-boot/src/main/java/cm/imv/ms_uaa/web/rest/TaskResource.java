package cm.imv.ms_uaa.web.rest;


import cm.imv.ms_uaa.dto.TaskDTO;
import cm.imv.ms_uaa.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskResource {
    private  final TaskService taskService;

    public TaskResource(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping("/tasks")

    public ResponseEntity<TaskDTO> save(@RequestBody TaskDTO taskDTO){

        TaskDTO taskDTO1=taskService.save(taskDTO);
        return ResponseEntity.ok(taskDTO1);
    }

    /**
     * liste des taches d'une utilisateur
     * @param pointB
     * @return
     */
    @GetMapping("/organisation_chef/{pointB}/tasks")
    public ResponseEntity<List<TaskDTO>> findAllTaskByOrganisationChef(@PathVariable String pointB){
        List<TaskDTO> taskDTOS=taskService.findAllTaskChefOrganisation(pointB);
        return ResponseEntity.ok(taskDTOS);
    }

    /**
     * liste des taches a valider par  un supperieur
     * @param organisationId
     * @return
     */
    @GetMapping("/organisation_chef/{organisationId}/tasks_validation")
    public ResponseEntity<List<TaskDTO>> findAllTaskOfValidationBySuperieurOrganisation(@PathVariable Long organisationId){
        List<TaskDTO> taskDTOS=taskService.findAllTaskOfValidationBySuperieurOrganisation(organisationId);
        return ResponseEntity.ok(taskDTOS);
    }

    @GetMapping("/organisation_chef/{organisationId}/tasks_sous_organisations")
    public ResponseEntity<List<TaskDTO>> findAllTaskAttributeAMaSousOrganisation(@PathVariable Long organisationId){
        List<TaskDTO> taskDTOS=taskService.findAllTaskAttributeAMaSousOrganisation(organisationId);
        return ResponseEntity.ok(taskDTOS);
    }
}
