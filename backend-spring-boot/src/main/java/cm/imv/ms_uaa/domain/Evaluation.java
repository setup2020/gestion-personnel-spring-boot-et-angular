package cm.imv.ms_uaa.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Evaluation implements Serializable {

    @Column(name = "connaissance_marche",length = 3)
    private Integer connaissanceMarche;

    @Column(name = "connaissance_metier",length = 3)
    private Integer connaissanceMetier;

    @Column(name = "connaissance_milieu",length = 3)
    private Integer connaissanceMilieu;
    @Column(name = "connaissance_methode",length = 3)
    private  Integer connaissanceMethode;
    @Column(name = "experience_marche",length = 3)
    private Integer experienceMarche;
    @Column(name = "experience_metier",length = 3)
    private Integer experienceMetier;
    @Column(name = "experience_milieu",length = 3)
    private Integer experienceMilieu;
    @Column(name = "experience_methode",length = 3)
    private Integer experienceMethode;
    @Column(name = "integration",length = 3)
    private  Integer integration;
    @Column(name = "courtoisie",length = 3)
    private Integer courtoisie;
    @Column(name = "acculturation",length = 3)
    private Integer acculturation;
    @Column(name = "capacite_travailler_equipe",length = 3)
    private Integer capaciteTravaillerEquipe;
    @Column(name = "pensee_critique",length = 3)
    private Integer penseeCritique;
    @Column(name = "sens_initiative",length = 3)
    private Integer sensInitiative;
    @Column(name = "resilience",length = 3)
    private Integer resilience;
    @Column(name = "jugement_prise_decision",length = 3)
    private Integer jugementPriseDecision;
    @Column(name = "gestion_equipe",length = 3)
    private  Integer gestionEquipe;
    @Column(name = "coordination",length = 3)
    private  Integer coordination;
    @Column(name = "maitrise_emotions",length = 3)
    private Integer maitriseEmotions;
    @Column(name = "valeur_moralr",length = 3)
    private Integer valeurMorale;
    @Column(name = "respect_norme",length = 3)
    private Integer respectNorme;
    @Column(name = "respect_exigence",length = 3)
    private Integer respectExigences;
    @Column(name = "respect_prodecure",length = 3)
    private Integer respectProcedure;

}
