package cm.imv.ms_uaa.repository;


import cm.imv.ms_uaa.domain.TypeOrganisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeOrganisationRepository extends JpaRepository<TypeOrganisation, Long> {
}
