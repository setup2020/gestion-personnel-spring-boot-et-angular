package cm.imv.ms_uaa.dto;


import cm.imv.ms_uaa.domain.Organisation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@Builder
public class ResponseOrganisationDTO {
    private  Long id;
    private String libelle;
    private String libelleEn;
    private TypeOrganisationDTO typeOrganisation;
    private List<OrganisationDTO> children;
    private OrganisationDTO parent;

    public static ResponseOrganisationDTO mapToDTO(Organisation organisation, Organisation parent, List<Organisation> organisationChildren){

        if(organisation==null){
            return null;
        }
        return ResponseOrganisationDTO.builder()
                .id(organisation.getId())
                .libelle(organisation.getLibelle())
                .libelleEn(organisation.getLibelleEn())
                .parent(OrganisationDTO.mapToDTO(parent))
                .children(organisationChildren.stream().map(OrganisationDTO::mapToDTO).collect(Collectors.toList()))
                .typeOrganisation(TypeOrganisationDTO.mapToDTO(organisation.getTypeOrganisation()))
                .build();

    }
}
