package cm.imv.ms_uaa.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "imv_type_organisation")

public class TypeOrganisation implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String libelle;

    @Column(name = "libelle_en")
    private String libelleEn;

    @Column(name = "has_parent")
    private boolean hasParent;

    @Column(name = "has_child")
    private boolean hasChild;



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TypeOrganisation that)) return false;
        return Objects.equals(id, that.id) && Objects.equals(libelle, that.libelle) && Objects.equals(libelleEn, that.libelleEn);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, libelle, libelleEn);
    }

    @Override
    public String toString() {
        return "TypeOrganisation{" +
                "id=" + id +
                ", libelle='" + libelle + '\'' +
                ", libelleEn='" + libelleEn + '\'' +
                '}';
    }
}
