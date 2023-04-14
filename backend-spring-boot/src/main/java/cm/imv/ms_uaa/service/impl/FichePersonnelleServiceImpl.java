package cm.imv.ms_uaa.service.impl;

import cm.imv.ms_uaa.dto.FichePersonnelleDTO;
import cm.imv.ms_uaa.repository.FichePersonnelleRepository;
import cm.imv.ms_uaa.service.FichePersonnelleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FichePersonnelleServiceImpl implements FichePersonnelleService {
    private final FichePersonnelleRepository fichePersonnelleRepository;

    public FichePersonnelleServiceImpl(FichePersonnelleRepository fichePersonnelleRepository) {
        this.fichePersonnelleRepository = fichePersonnelleRepository;
    }

    @Override
    public FichePersonnelleDTO save(FichePersonnelleDTO fichePersonnelleDTO) {
        return FichePersonnelleDTO.mapToDTO(fichePersonnelleRepository.save(FichePersonnelleDTO.mapToEntity(fichePersonnelleDTO)));
    }

    @Override
    public List<FichePersonnelleDTO> findAll() {
        return fichePersonnelleRepository.findAll().stream().map(FichePersonnelleDTO::mapToDTO).toList();

    }

    @Override
    public FichePersonnelleDTO show(Long id) {
        return FichePersonnelleDTO.mapToDTO( fichePersonnelleRepository.findById(id).orElseThrow());

    }

    @Override
    public void delete(Long id) {
            fichePersonnelleRepository.deleteById(id);
    }
}
