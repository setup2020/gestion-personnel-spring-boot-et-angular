package cm.imv.ms_uaa.service.impl;

import cm.imv.ms_uaa.domain.City;
import cm.imv.ms_uaa.repository.CityRepository;
import cm.imv.ms_uaa.service.CityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


/**
 * Service Implementation for managing {@link City}
 */

@Transactional
@Service
public class CityServiceImpl implements CityService {
    private final Logger logger= LoggerFactory.getLogger(CityServiceImpl.class);
    private final CityRepository cityRepository;

    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }


    @Override
    public City save(City city) {
        logger.debug("Request to save Type: {}",city);
        return cityRepository.save(city);
    }

    @Override
    public City update(City city) {
        logger.debug("Request to update City: {}",city);

        return cityRepository.save(city);
    }

    @Override
    public Optional<City> partialUpdate(City city) {
        logger.debug("Request to partially update City: {} ",city);
        return cityRepository.findById(city.getId())
                .map( existingType->{
                    if(city.getName()!=null){
                        existingType.setName(city.getName());
                    }
                    return existingType;
                }).map(cityRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<City> findAll(Pageable pageable) {
        logger.debug("Request to get all Cities");

        return cityRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<City> findOne(Long id) {
        logger.debug("Request to get City :{}",id);
        return cityRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        logger.debug("Request to delete City : {} ", id);
        cityRepository.deleteById(id);
    }
}
