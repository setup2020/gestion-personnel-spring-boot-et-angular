package cm.imv.ms_uaa.dto;

import cm.imv.ms_uaa.domain.User;
import lombok.Data;

import java.time.Instant;
import java.util.Set;

@Data

public class AdminUserDTO {
    private Long id;


    // @NotBlank
    //@Pattern(regexp = Constants.LOGIN_REGEX)
    //@Size(min = 1, max = 50)
    private String login;

    //@Size(max = 50)
    private String firstName;

    //@Size(max = 50)
    private String lastName;

    //@Email
    //@Size(min = 5, max = 254)
    private String email;

    //  @Size(max = 256)
    private String imageUrl;

    private boolean activated = false;

    //    @Size(min = 2, max = 10)
    private String langKey;

    private String createdBy;

    private Instant createdDate;

    private String lastModifiedBy;

    private Instant lastModifiedDate;


    public AdminUserDTO() {
        // Empty constructor needed for Jackson.
    }

     public AdminUserDTO(User user) {
        this.id = user.getId();
        this.login = user.getLogin();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.activated = user.isActivated();
        this.imageUrl = user.getImageUrl();
        this.createdDate = user.getCreatedDate();

        this.lastModifiedDate = user.getLastModifiedDate();
        //   this.authorities = user.getAuthorities().stream().map(Authority::getName).collect(Collectors.toSet());
    }



    // prettier-ignore
    @Override
    public String toString() {
        return "AdminUserDTO{" +
                "login='" + login + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", activated=" + activated +
                ", langKey='" + langKey + '\'' +
                ", createdBy=" + createdBy +
                ", createdDate=" + createdDate +
                ", lastModifiedBy='" + lastModifiedBy + '\'' +
                ", lastModifiedDate=" + lastModifiedDate +
                "}";
    }
}
