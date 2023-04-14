package cm.imv.ms_uaa.web.rest;

import cm.imv.ms_uaa.domain.City;
import cm.imv.ms_uaa.domain.Poste;
import cm.imv.ms_uaa.dto.PosteDTO;
import cm.imv.ms_uaa.repository.PosteRepository;
import cm.imv.ms_uaa.service.PosteService;
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
public class PosteResource {
    private final Logger logger= LoggerFactory.getLogger(PosteResource.class);
    private static final String ENTITY_NAME="poste";
    private   final PosteService posteService;
    private final PosteRepository posteRepository;

    public PosteResource(PosteService posteService, PosteRepository posteRepository) {
        this.posteService = posteService;
        this.posteRepository = posteRepository;
    }


    /**
     * {@code POST /cities}: Create a nex City
     * @param posteDTO the {@link ResponseEntity} with status {@code 201 (Created)} and with body
     * @return
     */

    @PostMapping("/postes")
    public ResponseEntity<PosteDTO> createPoste(@RequestBody PosteDTO posteDTO) throws URISyntaxException {
        logger.debug("REST request to save Poste : {} ", posteDTO);
        if(posteDTO.getId()!=null){

        }
        PosteDTO result=posteService.save(posteDTO);
        return ResponseEntity.created(new URI("/api/postes/"+result.getId())).body(result);
    }




    /**
     *
     * @return
     */

    @GetMapping("/postes")
    public Page<Poste> getAllPostes(Pageable pageable){
        logger.debug("REST request to get all Postes");
        return posteService.findAll(pageable);
    }

    @GetMapping("/postes/{id}")
    public ResponseEntity<Optional<PosteDTO>> getPoste(@PathVariable Long id){
        logger.debug("REST request to get Poste: {}",id);
        Optional<PosteDTO> posteDTO=posteService.findOne(id);
        return ResponseEntity.ok().body(posteDTO);
    }

    @DeleteMapping("/postes/{id}")
    public ResponseEntity<Void>deletePoste(@PathVariable Long id){
        logger.debug("REST request to delete Poste : {}", id);
        posteService.delete(id);
        return  ResponseEntity.noContent().build();
    }


    @GetMapping("/organisations/{id}/postes")
    public ResponseEntity<List<PosteDTO>>  getAllPosteByOrganisation(@PathVariable Long id){
        logger.debug("REST request to get all Postes");
        return ResponseEntity.ok(posteService.findAllPosteByOrganisationId(id));
    }

}
