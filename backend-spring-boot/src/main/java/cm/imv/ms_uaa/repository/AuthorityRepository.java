package cm.imv.ms_uaa.repository;

import cm.imv.ms_uaa.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorityRepository extends JpaRepository<Authority,String> {
}
