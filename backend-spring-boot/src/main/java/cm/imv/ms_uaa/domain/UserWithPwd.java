package cm.imv.ms_uaa.domain;

import cm.imv.ms_uaa.dto.AdminUserDTO;

public class UserWithPwd extends AdminUserDTO {
    public static final int PASSWORD_MIN_LENGTH=4;
    public static final int PASSWORD_MAX_LENGTH=100;

    //@Size(min=PASSWORD_MIN_LENGTH,max=PASSWORD_MAX_LENGTH)
    private String password;

    public UserWithPwd(){}


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UserWithPwd{" +
                "password='" + password + '\'' +
                '}';
    }
}
