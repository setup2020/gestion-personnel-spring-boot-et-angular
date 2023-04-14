package cm.imv.ms_uaa.service.impl;

import cm.imv.ms_uaa.domain.Organisation;
import cm.imv.ms_uaa.dto.LineUserPosteDTO;
import cm.imv.ms_uaa.repository.LineUserPosteRepository;
import cm.imv.ms_uaa.repository.OrganisationRepository;
import cm.imv.ms_uaa.service.OrganisationService;
import cm.imv.ms_uaa.dto.OrganisationDTO;
import cm.imv.ms_uaa.dto.ResponseOrganisationDTO;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@Slf4j
@Transactional
public class OrganisationServiceImpl implements OrganisationService {
    private static  final Logger logger= LoggerFactory.getLogger(OrganisationServiceImpl.class);
    private final OrganisationRepository organisationRepository;
    private final LineUserPosteRepository lineUserPosteRepository;

    public OrganisationServiceImpl(OrganisationRepository organisationRepository, LineUserPosteRepository lineUserPosteRepository) {
        this.organisationRepository = organisationRepository;
        this.lineUserPosteRepository = lineUserPosteRepository;
    }

    @Override
    public ResponseOrganisationDTO save(OrganisationDTO organisationDTO) {
        log.info("organisation {}",organisationDTO);
        List<Organisation> organisationsChildren= new  ArrayList<>();
       Organisation parent=null;
        Organisation organisation= organisationRepository.save(OrganisationDTO.mapToEntity(organisationDTO));
        if(organisationDTO.getTypeOrganisationDTO().isHasChild()){
         organisationsChildren=   organisationDTO.getOrganisationDTOList()
                 .stream().
                 map(organisationDTO1 -> OrganisationDTO.mapToEntity(
                         new OrganisationDTO(
                                 null,
                                 organisationDTO1.getLibelle(),
                                 organisationDTO1.getLibelleEn(),
                                 organisationDTO1.getTypeOrganisationDTO()
                                 ,organisationDTO1.getOrganisationDTOList(),organisation.getId()))).map(organisationRepository::save).toList();

        }

        if(organisationDTO.getTypeOrganisationDTO().isHasParent() && organisationDTO.getParent()!=null){
            parent=organisationRepository.findById(organisationDTO.getParent()).orElseThrow();
        }

        logger.debug("Request to save OrganisationAbstract: {}",organisation);
        return ResponseOrganisationDTO.mapToDTO(organisation,parent,organisationsChildren);
    }

    @Override
    public Organisation update(Organisation organisation) {
        logger.debug("Request to update OrganisationAbstract: {}",organisation);
        return  organisationRepository.save(organisation);
    }

    @Override
    public Optional<Organisation> partialUpdate(Organisation organisation) {
        return Optional.empty();
    }

    @Override
    public List<Organisation> findAll() {
        logger.debug("Request to get all Organisations");
        return organisationRepository.findAll();
    }

    @Override
    public OrganisationDTO findOne(Long id) {
        logger.debug("Request to get OrganisationAbstract :{}",id);
        return  OrganisationDTO.mapToDTO(organisationRepository.findById(id).orElseThrow());
    }

    @Override
    public void delete(Long id) {
        logger.debug("Request to delete OrganisationAbstract : {} ", id);
        organisationRepository.deleteById(id);

    }

    @Override
    public List<Organisation> findAllByParent(Long id) {
        return  organisationRepository.findAllByParent(id);
    }

    @Override
    public List<LineUserPosteDTO> findAllUserByOrganisationId(List<Long> id) {


        return organisationRepository.findAllUserOrganisation(id).stream().map(LineUserPosteDTO::mapToDTO).collect(Collectors.toList());
    }

    @Override
    public List<OrganisationDTO> findAllOrganisationByParent(Long id) {
        return  organisationRepository.findAllByParent(id).stream().map(OrganisationDTO::mapToDTO).toList();
    }

    @Override
    public OrganisationDTO findOrganisationRoot() {
        Organisation organisation=organisationRepository.findByParentNull();
        logger.debug("Find orgaisation root {}",organisation);
        return OrganisationDTO.mapToDTO(organisation);
    }
}
