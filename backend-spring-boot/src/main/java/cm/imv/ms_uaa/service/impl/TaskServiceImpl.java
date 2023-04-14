package cm.imv.ms_uaa.service.impl;

import cm.imv.ms_uaa.domain.Task;
import cm.imv.ms_uaa.dto.OrganisationDTO;
import cm.imv.ms_uaa.dto.TaskDTO;
import cm.imv.ms_uaa.repository.TaskRepository;
import cm.imv.ms_uaa.service.OrganisationService;
import cm.imv.ms_uaa.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final OrganisationService organisationService;
    public TaskServiceImpl(TaskRepository taskRepository, OrganisationService organisationService) {
        this.taskRepository = taskRepository;
        this.organisationService = organisationService;
    }

    @Override
    public TaskDTO save(TaskDTO taskDTO) {
        Task save = taskRepository.save(TaskDTO.mapToEntity(taskDTO));

        return TaskDTO.mapToDTO(save);
    }

    @Override
    public List<TaskDTO> findAllTaskChefOrganisation(String pointB) {
        return  taskRepository.findAllByPointB(pointB).stream().map(TaskDTO::mapToDTO).toList();
    }

    @Override
    public List<TaskDTO> findAllTaskOfValidationBySuperieurOrganisation(Long organisationId) {
        List<OrganisationDTO> organisationDTOS=organisationService.findAllOrganisationByParent(organisationId);
        List<String> points= new  ArrayList<String>();
        organisationDTOS.forEach(organisationDTO -> {
            points.add(organisationDTO.getId().toString());
        });


        return taskRepository.findAllByPointAInAndPointBIn(points,points).stream().map(TaskDTO::mapToDTO).toList();
    }

    @Override
    public List<TaskDTO> findAllTaskAttributeAMaSousOrganisation(Long organisationId) {
        List<OrganisationDTO> organisationDTOS=organisationService.findAllOrganisationByParent(organisationId);
        List<String> points= new  ArrayList<String>();
        organisationDTOS.forEach(organisationDTO -> {
            points.add(organisationDTO.getId().toString());
        });

        return taskRepository.findAllByPointAAndPointBIn(organisationId.toString(),points).stream().map(TaskDTO::mapToDTO).toList();
    }
}
