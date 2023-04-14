package cm.imv.ms_uaa.service;

import cm.imv.ms_uaa.dto.UserPosteDTO;
import org.springframework.stereotype.Service;


public interface UserPosteService {
    UserPosteDTO save(UserPosteDTO userPosteDTO);

}
