package cm.imv.ms_uaa.dto;

import cm.imv.ms_uaa.domain.FichePoste;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embedded;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FichePosteDTO {



    private Long id;
    private String nom;
    private String description;
    private String mission;
    private String profil;

    @Embedded
    private EvaluationDTO evaluationDTO;


    public static FichePosteDTO mapToDTO(FichePoste fichePoste){

        if(fichePoste==null){
            return null;
        }
        return FichePosteDTO.builder()
                .id(fichePoste.getId())
                .nom(fichePoste.getNom())
                .evaluationDTO(EvaluationDTO.mapToDTO(fichePoste.getEvaluation()))
                .mission(fichePoste.getMission())

                .build();

    }

    public static FichePoste mapToEntity(FichePosteDTO fichePosteDTO){

        if(fichePosteDTO==null){
            return null;
        }

        FichePoste fichePoste=new FichePoste();
        fichePoste.setNom(fichePosteDTO.getNom());
        fichePoste.setDescription(fichePosteDTO.getDescription());
        fichePoste.setEvaluation(EvaluationDTO.mapToEntity(fichePosteDTO.getEvaluationDTO()));
        fichePoste.setMission(fichePosteDTO.getMission());
        return fichePoste;

    }
}
