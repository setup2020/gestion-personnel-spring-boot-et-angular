package cm.imv.ms_uaa.repository;

import cm.imv.ms_uaa.domain.City;
import cm.imv.ms_uaa.domain.LineUserPoste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LineUserPosteRepository extends JpaRepository<LineUserPoste,Long> {

    List<LineUserPoste> findLineUserPosteByUserId(Long id);


}
