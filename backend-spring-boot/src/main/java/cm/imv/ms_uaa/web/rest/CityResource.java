package cm.imv.ms_uaa.web.rest;

import cm.imv.ms_uaa.domain.City;
import cm.imv.ms_uaa.repository.CityRepository;
import cm.imv.ms_uaa.service.CityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CityResource {
    private final Logger logger= LoggerFactory.getLogger(CityResource.class);
    private static final String ENTITY_NAME="city";
    private   final CityService cityService;
    private final CityRepository cityRepository;
    public CityResource(CityService cityService, CityRepository cityRepository){
        this.cityService=cityService;
        this.cityRepository = cityRepository;
    }

    /**
     * {@code POST /cities}: Create a nex City
     * @param city the {@link ResponseEntity} with status {@code 201 (Created)} and with body
     * @return
     */

    @PostMapping("/cities")
    public ResponseEntity<City> createCity(@RequestBody City city) throws URISyntaxException {
        logger.debug("REST request to save City : {} ", city);
        if(city.getId()!=null){

        }
        City result=cityService.save(city);
        return ResponseEntity.created(new URI("/api/cities/"+result.getId())).body(result);
    }

    /**
     *
     * @param id
     * @param city
     * @return
     */
    @PutMapping("/cities/{id}")
    public ResponseEntity<City> updateCity(@PathVariable(value = "id",required = false) final Long id,@RequestBody City city){
        logger.debug("REST request to update City: {}, {}",id,city);
        if(city.getId()==null){

        }
        if(!Objects.equals(id,city.getId())){

        }
        City result=cityService.update(city);
        return ResponseEntity.ok().body(result);
    }

    @PatchMapping("/cities/{id}")
    public ResponseEntity<Optional<City>> partialUpdateCity(@PathVariable(value = "id",required = false) final Long id, @RequestBody City city)
    {
        logger.debug("REST request to partial update City partially : {}, {}",id,city);
        if(city.getId()==null){

        }
        if(Objects.equals(id,city.getId())){

        }
        if(!cityRepository.existsById(id)){

        }
        Optional<City> result=cityService.partialUpdate(city);
        return ResponseEntity.ok().body(result);
    }

    /**
     *
     * @return
     */

    @GetMapping("/cities")
    public Page<City> getAllTypes(Pageable pageable){
        logger.debug("REST request to get all Cities");
        return cityService.findAll(pageable);
    }

    @GetMapping("/cities/{id}")
    public ResponseEntity<Optional<City>> getCity(@PathVariable Long id){
        logger.debug("REST request to get City: {}",id);
        Optional<City> city=cityService.findOne(id);
        return ResponseEntity.ok().body(city);
    }

    @DeleteMapping("/cities/{id}")
    public ResponseEntity<Void>deleteCity(@PathVariable Long id){
        logger.debug("REST request to delete City : {}", id);
        cityService.delete(id);
        return  ResponseEntity.noContent().build();
    }


}
