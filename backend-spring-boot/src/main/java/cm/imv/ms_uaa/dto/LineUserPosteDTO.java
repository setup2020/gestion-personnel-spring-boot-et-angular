package cm.imv.ms_uaa.dto;


import cm.imv.ms_uaa.domain.LineUserPoste;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LineUserPosteDTO {

    private Long id;
    private boolean responsable;
    private UserDTO userDTO;
    private PosteDTO posteDTO;


   public static LineUserPoste mapToEntity(LineUserPosteDTO lineUserPosteDTO){
         if(lineUserPosteDTO==null){
             return null;
         }

         LineUserPoste lineUserPoste=new LineUserPoste();

         lineUserPoste.setId(lineUserPosteDTO.getId());
         lineUserPoste.setUser(UserDTO.mapToEntity(lineUserPosteDTO.getUserDTO()));
         lineUserPoste.setPoste(PosteDTO.mapToEntity(lineUserPosteDTO.getPosteDTO()));
         return lineUserPoste;
    }

   public static LineUserPosteDTO mapToDTO(LineUserPoste lineUserPoste){
        if(lineUserPoste==null){
            return null;
        }

        return LineUserPosteDTO.builder()
                .id(lineUserPoste.getId())
                .userDTO(UserDTO.mapToDTO(lineUserPoste.getUser()))
                .posteDTO(PosteDTO.mapToDTO(lineUserPoste.getPoste()))
                .build();
    }


}



