package cm.imv.ms_uaa.repository;


import cm.imv.ms_uaa.domain.LineUserPoste;
import cm.imv.ms_uaa.domain.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrganisationRepository extends JpaRepository<Organisation, Long> {

    List<Organisation> findAllByParent(Long id);


    @Query("select lup from LineUserPoste  lup where lup.poste.id IN (:ids)")
    List<LineUserPoste> findAllUserOrganisation(@Param("ids") List<Long> ids);

    List<Organisation> findAllOrganisationByParent(Long id);
    Organisation findByParentNull();


}
