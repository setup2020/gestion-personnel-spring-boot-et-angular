package cm.imv.ms_uaa.dto;

import cm.imv.ms_uaa.domain.Poste;
import cm.imv.ms_uaa.domain.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class UserDTO {


    private Long id;


    private String login;


    private String password;


    private String firstName;


    private String lastName;


    private String imageUrl;



    private String email;


    private boolean activated;

    public static UserDTO mapToDTO(User user){

        if(user==null){
            return null;
        }
        return UserDTO.builder()
                .id(user.getId())
                .lastName(user.getLastName())
                .firstName(user.getFirstName())
                .email(user.getEmail())
                .activated(user.isActivated())
                .build();

    }

    public static User mapToEntity(UserDTO userDTO){

        if(userDTO==null){
            return null;
        }

        User user=new User();
            user.setActivated(userDTO.isActivated());
            user.setEmail(userDTO.getEmail());
            user.setLogin(userDTO.getLogin());
            user.setLastName(user.getLastName());
            user.setFirstName(user.getFirstName());
            user.setActivated(userDTO.isActivated());
            user.setId(userDTO.getId());


        return user;

    }
}
