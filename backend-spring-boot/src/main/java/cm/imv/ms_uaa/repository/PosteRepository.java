package cm.imv.ms_uaa.repository;

import cm.imv.ms_uaa.domain.City;
import cm.imv.ms_uaa.domain.Poste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PosteRepository extends JpaRepository<Poste,Long> {

    List<Poste> findByOrganisationId(Long organisationId);
    
}
