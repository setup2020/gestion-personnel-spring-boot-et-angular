package cm.imv.ms_uaa.service.impl;

import cm.imv.ms_uaa.domain.TypeOrganisation;
import cm.imv.ms_uaa.repository.TypeOrganisationRepository;
import cm.imv.ms_uaa.service.TypeOrganisationService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
/**
 * Service Implementation for managing {@link TypeOrganisation}.
 */
@Service
@Transactional
@Slf4j
public class TypeOrganisationServiceImpl  implements TypeOrganisationService {

    private  static final Logger logger= LoggerFactory.getLogger(TypeOrganisationService.class);
    private final TypeOrganisationRepository typeOrganisationRepository;

    public TypeOrganisationServiceImpl(TypeOrganisationRepository typeOrganisationRepository) {
        this.typeOrganisationRepository = typeOrganisationRepository;
    }

    @Override
    public TypeOrganisation save(TypeOrganisation typeOrganisation) {


        logger.debug("Request to save TypeOrganisation: {}",typeOrganisation);

        return typeOrganisationRepository.save(typeOrganisation);
    }

    @Override
    public TypeOrganisation update(TypeOrganisation typeOrganisation) {
        logger.debug("Request to save TypeOrganisation: {}",typeOrganisation);
        return typeOrganisationRepository.save(typeOrganisation);
    }

    @Override
    public Optional<TypeOrganisation> partialUpdate(TypeOrganisation typeOrganisation) {
        logger.debug("Request to partially update TypeOrganisation: {} ",typeOrganisation);
        return typeOrganisationRepository.findById(typeOrganisation.getId()).map(
                existingType->{
                    if(typeOrganisation.getLibelle()!=null){
                        existingType.setLibelle(typeOrganisation.getLibelle());
                    }
                    if(typeOrganisation.getLibelleEn()!=null){
                        existingType.setLibelleEn(typeOrganisation.getLibelleEn());
                    }

                    return existingType;
                }
        ).map(typeOrganisationRepository::save);
    }


    @Transactional(readOnly = true)
    @Override
    public List<TypeOrganisation> findAll() {
        logger.debug("Request to get all TypeOrganisation");
        return typeOrganisationRepository.findAll();
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<TypeOrganisation> findOne(Long id) {
        logger.debug("Request to get TypeOrganisation :{}",id);
        return typeOrganisationRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        logger.debug("Request to delete TypeOrganisation : {} ", id);

            typeOrganisationRepository.deleteById(id);
    }
}
