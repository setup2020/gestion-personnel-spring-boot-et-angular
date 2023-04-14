package cm.imv.ms_uaa.service;

import cm.imv.ms_uaa.domain.TypeOrganisation;

import java.util.List;
import java.util.Optional;

public interface TypeOrganisationService {

    /**
     * Save an TypeOrganisation
     * @param typeOrganisation the entity to save
     * @return the persisted entity.
     */
    TypeOrganisation save(TypeOrganisation typeOrganisation);
    /**
     * updates an TypeOrganisation
     * @param typeOrganisation the entity to update
     * @return the persisted entity.
     */
    TypeOrganisation update(TypeOrganisation typeOrganisation);

    /**
     * Partially updates a TypeOrganisation
     * @param typeOrganisation the entity to update partially.
     * @return the persisted entity.
     */
    Optional<TypeOrganisation> partialUpdate(TypeOrganisation typeOrganisation);

    /**
     * Get all the TypeOrganisations
     * @return the list of entities
     */
    List<TypeOrganisation> findAll();

    /**
     * Get the "id" TypeOrganisation
     * @param id the id of the entity
     * @return the entity
     */
    Optional<TypeOrganisation> findOne(Long id);

    /**
     * Delete the "id" TypeOrganisation
     * @param id the id of entity
     */
    void delete(Long id);
}
