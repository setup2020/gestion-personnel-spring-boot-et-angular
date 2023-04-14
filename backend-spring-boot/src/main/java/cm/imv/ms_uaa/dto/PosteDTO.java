package cm.imv.ms_uaa.dto;

import cm.imv.ms_uaa.domain.LineUserPoste;
import cm.imv.ms_uaa.domain.Poste;
import cm.imv.ms_uaa.domain.TypeOrganisation;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class PosteDTO {
    private String libelle;
    private String libelleEn;
    private boolean responsable;
    private OrganisationDTO organisationDTO;

    private FichePosteDTO fichePosteDTO;
    private  Long id;

    List<LineUserPosteDTO> lineUserPosteDTO;

    public static PosteDTO mapToDTO(Poste poste){

        if(poste==null){
            return null;
        }
        return PosteDTO.builder()
                .id(poste.getId())
                .libelle(poste.getLibelle())
                .libelleEn(poste.getLibelleEn())
                .responsable(poste.isResponsable())
                .fichePosteDTO(FichePosteDTO.mapToDTO(poste.getFichePoste()))

                .organisationDTO(OrganisationDTO.mapToDTO(poste.getOrganisation()))

                .build();

    }

    public static Poste mapToEntity(PosteDTO posteDTO){

        if(posteDTO==null){
            return null;
        }

        Poste poste=new Poste();

        poste.setLibelleEn(posteDTO.getLibelleEn());
        poste.setLibelle(posteDTO.getLibelle());
        poste.setResponsable(posteDTO.isResponsable());
        poste.setOrganisation(OrganisationDTO.mapToEntity(posteDTO.getOrganisationDTO()));
        poste.setId(posteDTO.getId());
        poste.setFichePoste(FichePosteDTO.mapToEntity(posteDTO.getFichePosteDTO()));


        return poste;

    }
}
