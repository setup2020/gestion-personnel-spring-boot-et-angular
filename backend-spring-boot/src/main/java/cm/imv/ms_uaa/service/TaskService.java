package cm.imv.ms_uaa.service;

import cm.imv.ms_uaa.dto.TaskDTO;

import java.util.List;

public interface TaskService {

    TaskDTO save(TaskDTO  taskDTO);

    List<TaskDTO> findAllTaskChefOrganisation(String pointB);

    List<TaskDTO>findAllTaskOfValidationBySuperieurOrganisation(Long organisationId);
    List<TaskDTO> findAllTaskAttributeAMaSousOrganisation(Long organisationId);
}
