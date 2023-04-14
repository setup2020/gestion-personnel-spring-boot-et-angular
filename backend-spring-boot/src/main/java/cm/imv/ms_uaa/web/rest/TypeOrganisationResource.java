package cm.imv.ms_uaa.web.rest;


import cm.imv.ms_uaa.domain.TypeOrganisation;
import cm.imv.ms_uaa.repository.TypeOrganisationRepository;
import cm.imv.ms_uaa.service.TypeOrganisationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
  * REST controller for managing {@link cm.imv.ms_uaa.domain.TypeOrganisation}.
 * */
@RestController
@RequestMapping("/api")
public class TypeOrganisationResource {
    private final Logger logger= LoggerFactory.getLogger(TypeOrganisationResource.class);
    private final TypeOrganisationService typeOrganisationService;
    private final TypeOrganisationRepository typeOrganisationRepository;

    public TypeOrganisationResource(TypeOrganisationService typeOrganisationService, TypeOrganisationRepository typeOrganisationRepository) {
        this.typeOrganisationService = typeOrganisationService;
        this.typeOrganisationRepository = typeOrganisationRepository;
    }

    /**
     *
     * @param typeOrganisation
     * @return
     * @throws URISyntaxException
     */
    @PostMapping("/type_organisations")
    public ResponseEntity<TypeOrganisation> createTypeOrganisation(@RequestBody TypeOrganisation typeOrganisation) throws URISyntaxException {
        logger.debug("REST request to save TypeOrganisation :{}",typeOrganisation);
        if(typeOrganisation.getId()!=null){}
        TypeOrganisation typeOrganisation1=typeOrganisationService.save(typeOrganisation);
        return ResponseEntity.created(new URI("/api/type_organisations/"+typeOrganisation1.getId())).body(typeOrganisation1);
    }

    @PatchMapping("/type_organisations/{id}")
    public ResponseEntity<Optional<TypeOrganisation>> partialUpdateTypeOrganisation(@PathVariable Long id, @RequestBody TypeOrganisation typeOrganisation){
        if(typeOrganisation.getId()==null){}
        if(!Objects.equals(id,typeOrganisation.getId())){

        }
        if(!typeOrganisationRepository.existsById(id)){

        }
        Optional<TypeOrganisation> t=typeOrganisationService.partialUpdate(typeOrganisation);
        return ResponseEntity.ok().body(t);
    }

    /**
     * {@code Get /type_organisatio,s}: get all the type organisations
     * @return the {@link ResponseEntity} with status {@code 200 (OK)}
     */
    @GetMapping("/types_organisations")
    public List<TypeOrganisation> getAllTypeOrganisations(){
        return typeOrganisationService.findAll();
    }

    /**
     *
     * @param id
     * @return
     */
    public ResponseEntity<Optional<TypeOrganisation>> getTypeOrganisation(@PathVariable Long id){
        logger.debug("REST request to get TYpeOrganisation : {}", id);
        Optional<TypeOrganisation> typeOrganisation=typeOrganisationService.findOne(id);
        return ResponseEntity.ok().body(typeOrganisation);
    }
    @DeleteMapping("/type_organisations/{id}")
    public ResponseEntity<Void> deleteTypeOrganisation(@PathVariable Long id){
        logger.debug("REST request to delete TypeOrganisation: {}", id);
        typeOrganisationService.delete(id);
        return ResponseEntity.noContent().build();
    }

    /**
     *
     * @param id
     * @param t
     * @return
     */
    @PutMapping("/type_orgainsations/{id}")
    public ResponseEntity<TypeOrganisation> updateTypeOrganisation(@PathVariable Long id,@RequestBody TypeOrganisation t){
        if(t.getId()==null){

        }
        if(!Objects.equals(id,t.getId())){

        }
        if(!typeOrganisationRepository.existsById(id)){

        }
        logger.debug("REST request to update TypeOrganisation : {}, {}", id, t);
        TypeOrganisation result=typeOrganisationService.update(t);
        return ResponseEntity.ok().body(result);
    }
}
