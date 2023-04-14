package cm.imv.ms_uaa.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Data
@Table(name = "imv_organisation")
public class Organisation implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String libelle;

    @Column(name ="libelle_en")
    private String libelleEn;

    @ManyToOne
    private TypeOrganisation typeOrganisation;

    private Long parent;





}
