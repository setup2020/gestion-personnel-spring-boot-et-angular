package cm.imv.ms_uaa.repository;

import cm.imv.ms_uaa.domain.FichePoste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FichePosteRepository extends JpaRepository<FichePoste,Long> {
}
