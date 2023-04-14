package cm.imv.ms_uaa.dto;

import cm.imv.ms_uaa.domain.TypeOrganisation;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TypeOrganisationDTO {

    private String libelle;
    private String libelleEn;
    private boolean hasChild;

    private boolean hasParent;
    private Long id;

    public static TypeOrganisationDTO mapToDTO(TypeOrganisation typeOrganisation) {

        if (typeOrganisation == null) {
            return null;
        }
        return TypeOrganisationDTO.builder()
                .id(typeOrganisation.getId())
                .libelle(typeOrganisation.getLibelle())
                .libelleEn(typeOrganisation.getLibelleEn())

                .build();

    }

    public static TypeOrganisation mapToEntity(TypeOrganisationDTO typeOrganisationDTO) {

        if (typeOrganisationDTO == null) {
            return null;
        }

        TypeOrganisation typeOrganisation = new TypeOrganisation();
        typeOrganisation.setHasChild(typeOrganisationDTO.isHasChild());
        typeOrganisation.setHasParent(typeOrganisationDTO.isHasParent());
        typeOrganisation.setLibelleEn(typeOrganisationDTO.getLibelleEn());
        typeOrganisation.setLibelle(typeOrganisationDTO.getLibelle());
        typeOrganisation.setId(typeOrganisationDTO.getId());

        return typeOrganisation;

    }
}
