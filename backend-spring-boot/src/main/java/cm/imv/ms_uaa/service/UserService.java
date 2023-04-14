package cm.imv.ms_uaa.service;

import cm.imv.ms_uaa.domain.User;
import cm.imv.ms_uaa.dto.LineUserPosteDTO;
import cm.imv.ms_uaa.dto.UserDTO;
import cm.imv.ms_uaa.repository.AuthorityRepository;
import cm.imv.ms_uaa.repository.LineUserPosteRepository;
import cm.imv.ms_uaa.repository.UserRepository;
import cm.imv.ms_uaa.dto.AdminUserDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class UserService {
    private final Logger logger= LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private  final AuthorityRepository authorityRepository;
    private final LineUserPosteRepository lineUserPosteRepository;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthorityRepository authorityRepository, LineUserPosteRepository lineUserPosteRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityRepository = authorityRepository;
        this.lineUserPosteRepository = lineUserPosteRepository;
    }

    public UserDTO createUser(UserDTO userDTO){
        User user=new User();
        user.setLogin(userDTO.getLogin().toLowerCase());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        if(userDTO.getEmail()!=null){
            user.setEmail(userDTO.getEmail().toLowerCase());


        }
        user.setImageUrl(userDTO.getImageUrl());
        String encryptedPassword=passwordEncoder.encode("1234");
        user.setPassword(encryptedPassword);
        user.setActivated(true);

        userRepository.save(user);
        logger.debug("Created Information for User: {}",user);
        return UserDTO.mapToDTO(user);
    }

    public Optional<AdminUserDTO> updateUser(AdminUserDTO userDTO) {
        return Optional
                .of(userRepository.findById(userDTO.getId()))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .map(user -> {
                    user.setLogin(userDTO.getLogin().toLowerCase());
                    user.setFirstName(userDTO.getFirstName());
                    user.setLastName(userDTO.getLastName());
                    if (userDTO.getEmail() != null) {
                        user.setEmail(userDTO.getEmail().toLowerCase());
                    }
                    user.setImageUrl(userDTO.getImageUrl());
                    user.setActivated(userDTO.isActivated());

                    logger.debug("Changed Information for User: {}", user);
                    return user;
                })
                .map(AdminUserDTO::new);
    }

    public void deleteUser(String login){
        userRepository.findOneByLogin(login)
                .ifPresent(user -> {
                    userRepository.delete(user);
                    logger.debug("Delete User: {}",user);
                });
    }
    @Transactional(readOnly = true)
    public Page<AdminUserDTO> getAllManagedUsers(Pageable pageable){
        return userRepository.findAll(pageable).map(AdminUserDTO::new);
    }


    public List<LineUserPosteDTO> getPosteUser(Long id){
        return lineUserPosteRepository.findLineUserPosteByUserId(id).stream().map(LineUserPosteDTO::mapToDTO).toList();
    }
}
