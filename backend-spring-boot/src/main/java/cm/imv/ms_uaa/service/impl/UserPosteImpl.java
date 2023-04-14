package cm.imv.ms_uaa.service.impl;


import cm.imv.ms_uaa.dto.LineUserPosteDTO;
import cm.imv.ms_uaa.dto.UserPosteDTO;
import cm.imv.ms_uaa.repository.LineUserPosteRepository;
import cm.imv.ms_uaa.service.UserPosteService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class UserPosteImpl implements UserPosteService {
    private final LineUserPosteRepository lineUserPosteRepository;

    public UserPosteImpl(LineUserPosteRepository lineUserPosteRepository) {
        this.lineUserPosteRepository = lineUserPosteRepository;
    }

    @Override
    public UserPosteDTO save(UserPosteDTO userOrganisationDTO) {
            UserPosteDTO userPosteDTO=new UserPosteDTO();
            List<LineUserPosteDTO> lines =new ArrayList<>();
        System.out.println("=======================================>"+userOrganisationDTO);
          userOrganisationDTO.getLineUserPosteDTO().stream().forEach(lineUserPosteDTO -> {
             lines.add( LineUserPosteDTO.mapToDTO(lineUserPosteRepository.save(LineUserPosteDTO.mapToEntity(lineUserPosteDTO))));
          });
          userPosteDTO.setLineUserPosteDTO(lines);
        return  userPosteDTO;
    }
}
