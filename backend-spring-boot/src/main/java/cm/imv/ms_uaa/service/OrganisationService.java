package cm.imv.ms_uaa.service;

import cm.imv.ms_uaa.domain.Organisation;
import cm.imv.ms_uaa.dto.LineUserPosteDTO;
import cm.imv.ms_uaa.dto.OrganisationDTO;
import cm.imv.ms_uaa.dto.ResponseOrganisationDTO;

import java.util.List;
import java.util.Optional;

public interface OrganisationService {


    /**
     * Save an organisation
     * @param organisationDTO the entity to save
     * @return the persisted entity.
     */
    ResponseOrganisationDTO save(OrganisationDTO organisationDTO);
    /**
     * updates an organisation
     * @param organisation the entity to update
     * @return the persisted entity.
     */
    Organisation update(Organisation organisation);

    /**
     * Partially updates a organisation
     * @param organisation the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Organisation> partialUpdate(Organisation organisation);

    /**
     * Get all the types
     * @return the list of entities
     */
    List<Organisation> findAll();

    /**
     * Get the "id" organisation
     * @param id the id of the entity
     * @return the entity
     */
    OrganisationDTO findOne(Long id);

    /**
     * Delete the "id" organisation
     * @param id the id of entity
     */
    void delete(Long id);

    /**
     * find organisation parent
     * @param id
     * @return
     */
    List<Organisation> findAllByParent(Long id);

    /**
     * find all user the organisation
     * @param id
     * @return
     */
    List<LineUserPosteDTO> findAllUserByOrganisationId(List<Long> id);

    /**
     * find sous organisation by organisation father
     * @param id
     * @return
     */
    List<OrganisationDTO> findAllOrganisationByParent(Long id);

    /**
     * find root (big) organisation
     * @return
     */
    OrganisationDTO findOrganisationRoot();
}
