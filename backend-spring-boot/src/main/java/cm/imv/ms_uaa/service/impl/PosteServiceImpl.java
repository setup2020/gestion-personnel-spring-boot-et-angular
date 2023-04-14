package cm.imv.ms_uaa.service.impl;

import cm.imv.ms_uaa.domain.City;
import cm.imv.ms_uaa.domain.Poste;
import cm.imv.ms_uaa.dto.PosteDTO;
import cm.imv.ms_uaa.repository.CityRepository;
import cm.imv.ms_uaa.repository.PosteRepository;
import cm.imv.ms_uaa.service.CityService;
import cm.imv.ms_uaa.service.PosteService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


/**
 * Service Implementation for managing {@link City}
 */

@Transactional
@Service
public class PosteServiceImpl implements PosteService {
    private final Logger logger= LoggerFactory.getLogger(PosteServiceImpl.class);
    private final PosteRepository posteRepository;

    public PosteServiceImpl(PosteRepository posteRepository) {
        this.posteRepository = posteRepository;
    }


    @Override
    public PosteDTO save(PosteDTO posteDTO) {
        Poste poste=posteRepository.save(PosteDTO.mapToEntity(posteDTO));
        return PosteDTO.mapToDTO(poste);
    }

    @Override
    public PosteDTO update(PosteDTO posteDTO) {
        Poste poste=posteRepository.save(PosteDTO.mapToEntity(posteDTO));
        return PosteDTO.mapToDTO(poste);
    }

    @Override
    public Optional<PosteDTO> partialUpdate(PosteDTO posteDTO) {
        return Optional.empty();
    }

    @Override
    public Page<Poste> findAll(Pageable pageable) {

        return posteRepository.findAll(pageable);
    }

    @Override
    public Optional<PosteDTO> findOne(Long id) {
        return Optional.of(posteRepository.findById(id).map(PosteDTO::mapToDTO).orElseThrow());
    }

    @Override
    public void delete(Long id) {
            posteRepository.deleteById(id);
    }

    @Override
    public List<PosteDTO> findAllPosteByOrganisationId(Long organisationId) {
        return posteRepository.findByOrganisationId(organisationId).stream().map(PosteDTO::mapToDTO).collect(Collectors.toList());
    }
}
