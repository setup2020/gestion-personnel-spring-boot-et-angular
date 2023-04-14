package cm.imv.ms_uaa;

import cm.imv.ms_uaa.domain.TypeOrganisation;
import cm.imv.ms_uaa.dto.UserDTO;
import cm.imv.ms_uaa.service.TypeOrganisationService;
import cm.imv.ms_uaa.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

public class MsUaaApplication {
    private static final Logger logger = LoggerFactory.getLogger(MsUaaApplication.class);
    @Autowired
    TypeOrganisationService typeOrganisationService;
    @Autowired
    UserService userService;

    public static void main(String[] args) {
        SpringApplication.run(MsUaaApplication.class, args);

    }


    //	@Bean
    public void insertData() {
        TypeOrganisation typeOrganisation = new TypeOrganisation();
        typeOrganisation.setLibelle("Direction Générale");
        typeOrganisation.setLibelleEn("Direction Générale");
        typeOrganisation.setHasParent(true);
        typeOrganisation.setHasChild(false);
        typeOrganisationService.save(typeOrganisation);
    }

    //@Bean
    public void insertUser() {

        userService.createUser(UserDTO.builder()
                .login("pascal").lastName("pascal").email("pascal@gmail.com")
                .build());


        userService.createUser(UserDTO.builder()
                .login("passy").lastName("passy").email("passy@gmail.com")
                .build());

        userService.createUser(UserDTO.builder()
                .login("Jordan").lastName("Jordan").email("Jordan@gmail.com")
                .build());

        userService.createUser(UserDTO.builder()
                .login("Claire").lastName("Claire").email("Claire@gmail.com")
                .build());


        userService.createUser(UserDTO.builder()
                .login("Lugresse").lastName("Lugresse").email("Lugresse@gmail.com")
                .build());


        userService.createUser(UserDTO.builder()
                .login("huguette").lastName("huguette").email("huguette@gmail.com")
                .build());
    }

}
