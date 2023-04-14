package cm.imv.ms_uaa.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;


public class LoggingConfiguration {



    public LoggingConfiguration(  @Value("${spring.application.name}") String appName,  @Value("${server.port}") String serverPort) {

    }
}
