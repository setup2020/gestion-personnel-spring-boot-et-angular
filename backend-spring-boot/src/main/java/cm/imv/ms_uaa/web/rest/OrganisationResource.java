package cm.imv.ms_uaa.web.rest;


import cm.imv.ms_uaa.domain.Organisation;
import cm.imv.ms_uaa.dto.LineUserPosteDTO;
import cm.imv.ms_uaa.service.OrganisationService;
import cm.imv.ms_uaa.dto.OrganisationDTO;
import cm.imv.ms_uaa.dto.ResponseOrganisationDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class OrganisationResource  {

    private static final Logger logger= LoggerFactory.getLogger(OrganisationResource.class);
    private final OrganisationService organisationService;

    public OrganisationResource(OrganisationService organisationService) {
        this.organisationService = organisationService;
    }

    @GetMapping("/organisation")
    public List<Organisation> getAllOrganisation(){
        logger.debug("REST request to get all Organisations");
        return organisationService.findAll();
    }

    @GetMapping("/organisations/{id}")
    public OrganisationDTO getOneOrganisation(@PathVariable Long id){
        logger.debug("REST request to get all Organisations");
        return organisationService.findOne(id);
    }


    @DeleteMapping("/organisations/{id}")
    public ResponseEntity<Void> deleteOrganisation(@PathVariable Long id){
        logger.debug("REST request to delete OrganisationAbstract : {}", id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/sous_organisations/{id}")
    public ResponseEntity<List<Organisation>> findAllByParent(@PathVariable Long id){
        List<Organisation> organisations=organisationService.findAllByParent(id);
        return ResponseEntity.ok().body(organisations);
    }

    @PostMapping("/organisations")
    public ResponseEntity<ResponseOrganisationDTO> save(@RequestBody OrganisationDTO organisationDTO){
        ResponseOrganisationDTO organisationDTO1=organisationService.save(organisationDTO);
        return ResponseEntity.ok(organisationDTO1);
    }

    @GetMapping("/organisations/{id}/users")
    public List<LineUserPosteDTO> getAllOrganisationUsers(@PathVariable List<Long> id){
        logger.debug("REST request to get all User By  Organisation");
        return organisationService.findAllUserByOrganisationId(id);
    }


    @GetMapping("/organisation/{id}/sous_organisations")
    public ResponseEntity<List<OrganisationDTO>> findAllSousOrganisationByParent(@PathVariable Long id){
        List<OrganisationDTO> organisations=organisationService.findAllOrganisationByParent(id);
        return ResponseEntity.ok().body(organisations);
    }

}
