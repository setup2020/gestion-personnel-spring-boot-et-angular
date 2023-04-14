package cm.imv.ms_uaa.dto;

import cm.imv.ms_uaa.domain.FichePersonnelle;
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
public class FichePersonnelleDTO {

    @Embedded
    private EvaluationDTO evaluationDTO;
    private String mission;
    private Long id;

    public static FichePersonnelleDTO mapToDTO(FichePersonnelle fichePersonnelle){

        if(fichePersonnelle==null){
            return null;
        }
        return FichePersonnelleDTO.builder()
                .id(fichePersonnelle.getId())
                .mission(fichePersonnelle.getMission())
                .evaluationDTO(EvaluationDTO.mapToDTO(fichePersonnelle.getEvaluation()))

                .build();

    }

    public static FichePersonnelle mapToEntity(FichePersonnelleDTO fichePersonnelleDTO){

        if(fichePersonnelleDTO==null){
            return null;
        }

        FichePersonnelle fichePersonnelle=new FichePersonnelle();
        fichePersonnelle.setMission(fichePersonnelleDTO.getMission());
        fichePersonnelle.setId(fichePersonnelleDTO.getId());
        fichePersonnelle.setEvaluation(EvaluationDTO.mapToEntity(fichePersonnelleDTO.getEvaluationDTO()));
        return fichePersonnelle;

    }
}
