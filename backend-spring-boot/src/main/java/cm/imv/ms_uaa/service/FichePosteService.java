package cm.imv.ms_uaa.service;

import cm.imv.ms_uaa.dto.FichePosteDTO;

import java.util.List;

public interface FichePosteService {

    FichePosteDTO save(FichePosteDTO fichePosteDTO);
    List<FichePosteDTO> findAll();
    FichePosteDTO show(Long id);
    void delete(Long id);
}
