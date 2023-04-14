package cm.imv.ms_uaa.dto;

import cm.imv.ms_uaa.domain.Organisation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@Builder

public class OrganisationDTO {

    private  Long id;
    private String libelle;
    private String libelleEn;
    private TypeOrganisationDTO typeOrganisationDTO;
    private List<OrganisationDTO> organisationDTOList=new ArrayList<>();
    private Long parent;


    public static Organisation mapToEntity(OrganisationDTO organisationDTO){

        Organisation organisation=new Organisation();
        organisation.setLibelle(organisationDTO.getLibelle());
        organisation.setLibelleEn(organisationDTO.getLibelleEn());
        organisation.setLibelleEn(organisationDTO.getLibelleEn());
        organisation.setTypeOrganisation(TypeOrganisationDTO.mapToEntity(organisationDTO.getTypeOrganisationDTO()));
        organisation.setParent(organisationDTO.getParent());
        organisation.setId(organisationDTO.getId());


        return organisation;
    }

    public static OrganisationDTO mapToDTO(Organisation organisation){

        if(organisation==null){
            return null;
        }
        return OrganisationDTO.builder()
                .id(organisation.getId())
                .libelle(organisation.getLibelle())
                .libelleEn(organisation.getLibelleEn())
                .typeOrganisationDTO(TypeOrganisationDTO.mapToDTO(organisation.getTypeOrganisation()))
                .parent(organisation.getParent())
                .build();

    }

}
