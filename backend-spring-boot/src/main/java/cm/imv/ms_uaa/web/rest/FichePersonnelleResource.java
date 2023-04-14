package cm.imv.ms_uaa.web.rest;


import cm.imv.ms_uaa.dto.FichePersonnelleDTO;
import cm.imv.ms_uaa.service.FichePersonnelleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fiche_personnelles")
public class FichePersonnelleResource {
    private final FichePersonnelleService fichePersonnelleService;

    public FichePersonnelleResource(FichePersonnelleService fichePersonnelleService) {
        this.fichePersonnelleService = fichePersonnelleService;
    }

    @PostMapping

    public ResponseEntity<FichePersonnelleDTO> save(@RequestBody FichePersonnelleDTO fichePersonnelleDTO){

        FichePersonnelleDTO result=fichePersonnelleService.save(fichePersonnelleDTO);

        return ResponseEntity.ok(result);

    }

    @GetMapping
    ResponseEntity<List<FichePersonnelleDTO>> findAll(){

        return ResponseEntity.ok(fichePersonnelleService.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<FichePersonnelleDTO> findOne(@PathVariable Long id){

        return ResponseEntity.ok(fichePersonnelleService.show(id));
    }

    @DeleteMapping("/{id}")

    ResponseEntity<Void> delete(@PathVariable  Long id){

        fichePersonnelleService.delete(id);

      return   ResponseEntity.noContent().build();
    }
}
