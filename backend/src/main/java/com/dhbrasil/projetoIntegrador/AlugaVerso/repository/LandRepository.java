package com.dhbrasil.projetoIntegrador.AlugaVerso.repository;

import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Land;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LandRepository extends JpaRepository<Land, Integer> {
    List<Land> findByCategoryId(Integer id);
    List<Land> findByMetaverseId(Integer id);
}
