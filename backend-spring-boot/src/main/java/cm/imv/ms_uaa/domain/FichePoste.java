package cm.imv.ms_uaa.domain;




import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class FichePoste {

    @Id
    @GeneratedValue()
    private Long id;
    private String nom;
    private String description;
    private String mission;
    private String profil;
    @Embedded
    private Evaluation evaluation;




}
