package cm.imv.ms_uaa.repository;

import cm.imv.ms_uaa.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {

    List<Task> findAllByPointB(String pointB);
    List<Task>findAllByPointAInAndPointBIn(List<String> pointsA ,List<String>pointsB);
    List<Task> findAllByPointAAndPointBIn(String pointA,List<String> pointsB);
}
