package com.dhbrasil.projetoIntegrador.AlugaVerso.service;


import com.dhbrasil.projetoIntegrador.AlugaVerso.dto.LandDTO;
import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Land;
import com.dhbrasil.projetoIntegrador.AlugaVerso.repository.CategoryRepository;
import com.dhbrasil.projetoIntegrador.AlugaVerso.repository.ImagesRepository;
import com.dhbrasil.projetoIntegrador.AlugaVerso.repository.LandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class LandService {

    @Autowired
    private LandRepository landRepository;

    @Autowired
    private ImagesRepository imagesRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    //Cadastrar terreno
    @Transactional
    public LandDTO insert(LandDTO landDTO){
        Land land = landRepository.save(landDTO.toEntity());

        if (land.getImages() != null) {
            land.getImages().forEach(img -> img.setLand(land));
            imagesRepository.saveAll(land.getImages());
        }

        return new LandDTO(landRepository.findById(land.getId()).get());
    }




}
