package cm.imv.ms_uaa.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Poste implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String libelle;

    @Column(name = "libelle_en")
    private String libelleEn;
    private boolean responsable;

    @ManyToOne
    Organisation organisation;

    @ManyToOne
    FichePoste fichePoste;



}
