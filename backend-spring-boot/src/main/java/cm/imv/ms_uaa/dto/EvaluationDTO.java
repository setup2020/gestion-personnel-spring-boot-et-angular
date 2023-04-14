package cm.imv.ms_uaa.dto;


import cm.imv.ms_uaa.domain.Evaluation;
import cm.imv.ms_uaa.domain.FichePoste;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EvaluationDTO {

    private Integer connaissanceMarche;
    private Integer connaissanceMetier;
    private Integer connaissanceMilieu;
    private  Integer connaissanceMethode;

    private Integer experienceMarche;
    private Integer experienceMetier;
    private Integer experienceMilieu;
    private Integer experienceMethode;
    private  Integer integration;
    private Integer courtoisie;
    private Integer acculturation;
    private Integer capaciteTravaillerEquipe;
    private Integer penseeCritique;
    private Integer sensInitiative;
    private Integer resilience;
    private Integer jugementPriseDecision;
    private  Integer gestionEquipe;
    private  Integer coordination;
    private Integer maitriseEmotions;
    private Integer valeurMorale;
    private Integer respectNorme;
    private Integer respectExigences;
    private Integer rescpectProcedure;

    public static EvaluationDTO mapToDTO(Evaluation evaluation){

        if(evaluation==null){
            return null;
        }
        return EvaluationDTO.builder()


                .connaissanceMarche(evaluation.getConnaissanceMarche())
                .connaissanceMethode(evaluation.getConnaissanceMethode())
                .connaissanceMetier(evaluation.getConnaissanceMetier())
                .connaissanceMilieu(evaluation.getConnaissanceMilieu())
                .experienceMarche(evaluation.getExperienceMarche())
                .experienceMethode(evaluation.getExperienceMethode())
                .experienceMilieu(evaluation.getExperienceMilieu())
                .experienceMetier(evaluation.getConnaissanceMetier())
                .courtoisie(evaluation.getCourtoisie())
                .acculturation(evaluation.getAcculturation())
                .coordination(evaluation.getCoordination())
                .capaciteTravaillerEquipe(evaluation.getCapaciteTravaillerEquipe())
                .jugementPriseDecision(evaluation.getJugementPriseDecision())
                .integration(evaluation.getIntegration())
                .maitriseEmotions(evaluation.getMaitriseEmotions())
                .penseeCritique(evaluation.getPenseeCritique())
                .gestionEquipe(evaluation.getGestionEquipe())
                .rescpectProcedure(evaluation.getRespectProcedure())
                .resilience(evaluation.getResilience())
                .respectExigences(evaluation.getRespectExigences())
                .respectNorme(evaluation.getRespectNorme())
                .sensInitiative(evaluation.getSensInitiative())
                .build();

    }

    public static Evaluation mapToEntity(EvaluationDTO evaluationDTO){

        if(evaluationDTO==null){
            return null;
        }

        Evaluation evaluation=new Evaluation();


        evaluation.setConnaissanceMarche(evaluationDTO.getExperienceMarche());
        evaluation.setConnaissanceMethode(evaluationDTO.getConnaissanceMethode());
        evaluation.setConnaissanceMetier(evaluationDTO.getConnaissanceMetier());
        evaluation.setConnaissanceMilieu(evaluationDTO.getConnaissanceMilieu());
        evaluation.setExperienceMethode(evaluationDTO.getExperienceMethode());
        evaluation.setExperienceMilieu(evaluationDTO.getExperienceMilieu());
        evaluation.setCourtoisie(evaluationDTO.getCourtoisie());
        evaluation.setAcculturation(evaluationDTO.getAcculturation());
        evaluation.setCoordination(evaluationDTO.getCoordination());
        evaluation.setCapaciteTravaillerEquipe(evaluationDTO.getCapaciteTravaillerEquipe());
        evaluation.setJugementPriseDecision(evaluationDTO.getJugementPriseDecision());
        evaluation.setIntegration(evaluationDTO.getIntegration());
        evaluation.setMaitriseEmotions(evaluationDTO.getMaitriseEmotions());
        evaluation.setPenseeCritique(evaluationDTO.getPenseeCritique());
        evaluation.setResilience(evaluationDTO.getResilience());
        evaluation.setRespectNorme(evaluationDTO.getRespectNorme());
        evaluation.setSensInitiative(evaluationDTO.getSensInitiative());
        evaluation.setRespectExigences(evaluationDTO.getRespectExigences());
        evaluation.setRespectProcedure(evaluationDTO.getRescpectProcedure());
        evaluation.setGestionEquipe(evaluationDTO.getGestionEquipe());
        evaluation.setExperienceMetier(evaluation.getExperienceMetier());


        return evaluation;

    }
}
