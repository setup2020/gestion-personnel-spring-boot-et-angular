package cm.imv.ms_uaa.dto;


import cm.imv.ms_uaa.domain.Task;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TaskDTO {

    private Long id;

    private String name;


    private String pointA;


    private String pointB;

    private String status;

    public static TaskDTO mapToDTO(Task task) {

        if (task == null) {
            return null;
        }
        return TaskDTO.builder()
                .id(task.getId())
                .name(task.getName())
                .pointA(task.getPointA())
                .pointB(task.getPointB())
                .status(task.getStatus())


                .build();

    }

    public static Task mapToEntity(TaskDTO taskDTO) {

        if (taskDTO == null) {
            return null;
        }

        Task task = new Task();

        task.setId(taskDTO.getId());
        task.setName(taskDTO.getName());
        task.setStatus(taskDTO.getStatus());
        task.setPointA(taskDTO.getPointA());
        task.setPointB(taskDTO.getPointB());

        return task;

    }
}
