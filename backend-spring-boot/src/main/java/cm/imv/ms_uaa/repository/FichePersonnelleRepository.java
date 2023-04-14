package cm.imv.ms_uaa.repository;

import cm.imv.ms_uaa.domain.FichePersonnelle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FichePersonnelleRepository extends JpaRepository<FichePersonnelle,Long> {
}
