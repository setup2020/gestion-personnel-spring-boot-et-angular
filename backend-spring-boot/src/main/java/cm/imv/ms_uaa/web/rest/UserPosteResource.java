package cm.imv.ms_uaa.web.rest;

import cm.imv.ms_uaa.dto.UserPosteDTO;
import cm.imv.ms_uaa.service.UserPosteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserPosteResource {

    private final UserPosteService userPosteService;

    public UserPosteResource(UserPosteService userPosteService) {
        this.userPosteService = userPosteService;
    }

    @PostMapping("/user_poste")
    public ResponseEntity<UserPosteDTO> save(@RequestBody UserPosteDTO userPosteDTO){

        return ResponseEntity.ok(userPosteService.save(userPosteDTO));
    }
}
