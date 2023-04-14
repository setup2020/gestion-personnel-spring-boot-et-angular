package cm.imv.ms_uaa.repository;

import cm.imv.ms_uaa.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User ,Long> {
    Optional<User> findOneByLogin(String login);

    Optional<User> findOneByEmailIgnoreCase(String email);
}
