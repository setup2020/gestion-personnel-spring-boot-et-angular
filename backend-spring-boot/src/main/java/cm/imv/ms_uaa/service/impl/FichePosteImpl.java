package cm.imv.ms_uaa.service.impl;


import cm.imv.ms_uaa.dto.FichePosteDTO;
import cm.imv.ms_uaa.repository.FichePosteRepository;
import cm.imv.ms_uaa.service.FichePosteService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FichePosteImpl implements FichePosteService {

    private final FichePosteRepository fichePosteRepository;

    public FichePosteImpl(FichePosteRepository fichePosteRepository) {
        this.fichePosteRepository = fichePosteRepository;
    }

    @Override
    public FichePosteDTO save(FichePosteDTO fichePosteDTO) {
        return FichePosteDTO.mapToDTO(fichePosteRepository.save(FichePosteDTO.mapToEntity(fichePosteDTO)));
    }

    @Override
    public List<FichePosteDTO> findAll() {
        return fichePosteRepository.findAll().stream().map(FichePosteDTO::mapToDTO).toList();
    }

    @Override
    public FichePosteDTO show(Long id) {
        return FichePosteDTO.mapToDTO(fichePosteRepository.findById(id).orElseThrow());
    }

    @Override
    public void delete(Long id) {

        fichePosteRepository.deleteById(id);

    }
}
