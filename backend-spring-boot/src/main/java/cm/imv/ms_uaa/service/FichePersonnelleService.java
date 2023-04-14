package cm.imv.ms_uaa.service;

import cm.imv.ms_uaa.dto.FichePersonnelleDTO;

import java.util.List;

public interface FichePersonnelleService {
    FichePersonnelleDTO save(FichePersonnelleDTO fichePersonnelleDTO);

    List<FichePersonnelleDTO> findAll();

    FichePersonnelleDTO show(Long id);

    void delete(Long id);
}
