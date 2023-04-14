package cm.imv.ms_uaa.service;
import cm.imv.ms_uaa.domain.City;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface form managing {@link City}
 */
public interface CityService {

    /**
     * Save aa city
     * @param city the entity to save
     * @return the persisted entity.
     */
    City save(City city);
    /**
     * updates aa city
     * @param city the entity to update
     * @return the persisted entity.
     */
    City update(City city);

    /**
     * Partially updates a city
     * @param city the entity to update partially.
     * @return the persisted entity.
     */
    Optional<City> partialUpdate(City city);

    /**
     * Get all the types
     * @return the list of entities
     */
    Page<City> findAll(Pageable pageable);

    /**
     * Get the "id" city
     * @param id the id of the entity
     * @return the entity
     */
    Optional<City> findOne(Long id);

    /**
     * Delete the "id" city
     * @param id the id of entity
     */
    void delete(Long id);
}
