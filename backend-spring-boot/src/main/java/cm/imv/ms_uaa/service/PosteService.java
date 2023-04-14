package cm.imv.ms_uaa.service;
import cm.imv.ms_uaa.domain.City;
import cm.imv.ms_uaa.domain.Poste;
import cm.imv.ms_uaa.dto.PosteDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface form managing {@link City}
 */
public interface PosteService {

    /**
     * Save aa city
     * @param posteDTO the entity to save
     * @return the persisted entity.
     */
    PosteDTO save(PosteDTO posteDTO);
    /**
     * updates aa city
     * @param posteDTO the entity to update
     * @return the persisted entity.
     */
    PosteDTO update(PosteDTO posteDTO);

    /**
     * Partially updates a city
     * @param posteDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<PosteDTO> partialUpdate(PosteDTO posteDTO);

    /**
     * Get all the types
     * @return the list of entities
     */
    Page<Poste> findAll(Pageable pageable);

    List<PosteDTO> findAllPosteByOrganisationId(Long OrganisationId);

    /**
     * Get the "id" city
     * @param id the id of the entity
     * @return the entity
     */
    Optional<PosteDTO> findOne(Long id);

    /**
     * Delete the "id" city
     * @param id the id of entity
     */
    void delete(Long id);
}
