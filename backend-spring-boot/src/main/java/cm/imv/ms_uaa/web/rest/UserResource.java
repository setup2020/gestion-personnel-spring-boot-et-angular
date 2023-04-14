package cm.imv.ms_uaa.web.rest;


import cm.imv.ms_uaa.domain.User;
import cm.imv.ms_uaa.dto.LineUserPosteDTO;
import cm.imv.ms_uaa.dto.UserDTO;
import cm.imv.ms_uaa.repository.UserRepository;
import cm.imv.ms_uaa.service.UserService;
import cm.imv.ms_uaa.dto.AdminUserDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
public class UserResource {
    private static final List<String> ALLOWED_ORDERED_PROPERTIES = Collections.unmodifiableList(
            Arrays.asList(
                    "id",
                    "login",
                    "firstName",
                    "lastName",
                    "email",
                    "activated",
                    "langKey",
                    "createdBy",
                    "createdDate",
                    "lastModifiedBy",
                    "lastModifiedDate"
            )
    );
    private final Logger logger= LoggerFactory.getLogger(UserResource.class);
    private final UserService userService;
    private final UserRepository userRepository;

    public UserResource(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    /**
     * {@code POST /admin/users} : Creates a new user.
     * <p>
     * Creates a new user if the login and email are not already used, and send an mail with an activation link
     * @param userDTO the user to create
     * @return the {@link ResponseEntity} with status {@code 201 (Created)}
     * @throws URISyntaxException
     */
    @PostMapping("/users")
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) throws URISyntaxException {
      /*  logger.debug("REST request to save User: {}", userDTO);
        if (userDTO.getId() != null) {

        } else if (userRepository.findOneByLogin(userDTO.getLogin().toLowerCase()).isPresent()) {

        } else if (userRepository.findOneByEmailIgnoreCase(userDTO.getEmail()).isPresent()) {
        }*/

        UserDTO newUser = userService.createUser(userDTO);
        // send mail
        return ResponseEntity.created(new URI("/api/admin/users/" + newUser.getLogin()))
                .body(newUser);
    }

    /**
     * {@code PUT /admin/users} Updates an existing User.
     * @param userDTO
     * @return
     */
    @PutMapping("/users")
    public ResponseEntity<Optional<AdminUserDTO>> updateUser(@RequestBody AdminUserDTO userDTO){
        logger.debug("REST request to update User : {}",userDTO);
        Optional<User> existingUser=userRepository.findOneByEmailIgnoreCase(userDTO.getEmail());
        if(existingUser.isPresent() && (!existingUser.get().getId().equals(userDTO.getId()))){
            // throw new
        }
        existingUser=userRepository.findOneByLogin(userDTO.getLogin().toLowerCase());
        if(existingUser.isPresent() && (!existingUser.get().getId().equals(userDTO.getId()))){
            // throw new login
        }
        Optional<AdminUserDTO> updatedUser=userService.updateUser(userDTO);
        return ResponseEntity.ok().body(updatedUser);
    }

    @DeleteMapping("users/{login}")
    public ResponseEntity<Void> deleteUser(@PathVariable String login){
        logger.debug("REST request to delete User: {}",login);
        userService.deleteUser(login);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/users")
    public ResponseEntity<List<AdminUserDTO>> getAllUsers(Pageable pageable){
        logger.debug("REST request to get all User for an admin");
        if(!onlyContainsAllowedProperties(pageable)){
            return ResponseEntity.badRequest().build();
        }
        final Page<AdminUserDTO> page=userService.getAllManagedUsers(pageable);
        return new ResponseEntity<>(page.getContent(),HttpHeaders.EMPTY, HttpStatus.OK);
    }

    private boolean onlyContainsAllowedProperties(Pageable pageable) {
        return pageable.getSort().stream().map(Sort.Order::getProperty).allMatch(ALLOWED_ORDERED_PROPERTIES::contains);
    }



    @GetMapping("/users/{id}/postes")
    public ResponseEntity<List<LineUserPosteDTO>> getAllPosteUser(@PathVariable Long id){
        logger.debug("REST request to get all User for an admin");

        final List<LineUserPosteDTO> page=userService.getPosteUser(id);
        return new ResponseEntity<>(page,HttpHeaders.EMPTY, HttpStatus.OK);
    }
}
