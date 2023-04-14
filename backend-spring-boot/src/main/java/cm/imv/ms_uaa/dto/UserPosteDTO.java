package cm.imv.ms_uaa.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserPosteDTO {

    List<LineUserPosteDTO> lineUserPosteDTO;
}
