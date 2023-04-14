package cm.imv.ms_uaa.web.rest;


import cm.imv.ms_uaa.dto.FichePosteDTO;
import cm.imv.ms_uaa.service.FichePosteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/fiche_poste")
public class FichePosteResource {

    private final FichePosteService fichePosteService;

    public FichePosteResource(FichePosteService fichePosteService) {
        this.fichePosteService = fichePosteService;
    }

    @PostMapping
    ResponseEntity<FichePosteDTO> save(@RequestBody FichePosteDTO fichePosteDTO) {
        return ResponseEntity.ok(fichePosteService.save(fichePosteDTO));
    }

    @GetMapping
    ResponseEntity<List<FichePosteDTO>> findAll() {
        return ResponseEntity.ok(fichePosteService.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<FichePosteDTO> show(@PathVariable Long id) {
        return ResponseEntity.ok(fichePosteService.show(id));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(@PathVariable Long id) {
        fichePosteService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
