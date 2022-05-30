package com.dhbrasil.projetoIntegrador.AlugaVerso.config;

import com.dhbrasil.projetoIntegrador.AlugaVerso.model.*;
import com.dhbrasil.projetoIntegrador.AlugaVerso.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.awt.*;
import java.util.Arrays;
import java.util.Collections;
import java.util.Set;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private AttributesRepository attributesRepository;

    @Autowired
    private MetaverseRepository metaverseRepository;

    @Autowired
    private ImagesRepository imagesRepository;

    @Autowired
    private LandRepository landRepository;

    @Override
    public void run(String... args) throws Exception {

        Category c1 = new Category(null, "Metaverso 1", "https://img.ibxk.com.br/2021/10/20/second-live-metaverso-20155124402367.jpg", "Espaço para reuniões");
        Category c2 = new Category(null, "Metaverso 2", "https://st4.depositphotos.com/1793519/23667/i/600/depositphotos_236672870-stock-photo-3d-render-visualization-of-a.jpg", "Espaço para filmes");
        Category c3 = new Category(null, "Metaverso 3", "https://veja.abril.com.br/wp-content/uploads/2022/02/metaverso.jpg", "Espaço para compras");
        Category c4 = new Category(null, "Metaverso 4", "https://img.olhardigital.com.br/wp-content/uploads/2021/12/Pessoas-no-metaverso.jpg", "Espaço para interações casuais");
        Category c5 = new Category(null, "Metaverso 5", "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3219212:1650310166/Igreja-no-metaverso.jpg?f=default&$p$f=04a14e3", "Espaço para celebrações religiosas");
        categoryRepository.saveAll(Arrays.asList(c1, c2, c3, c4, c5));

        Attributes a1 = new Attributes(null, "Icone casa", "icone casa");
        Attributes a2 = new Attributes(null, "Icone cancelar", "icone cancelar");
        Attributes a3 = new Attributes(null, "Icone comércio", "icone comercio");
        Attributes a4 = new Attributes(null, "Icone atividades culturais", "icone atv culturais");
        attributesRepository.saveAll(Arrays.asList(a1, a2, a3, a4));

        Metaverse m1 = new Metaverse(null, "Roblox Corporarion");
        Metaverse m2 = new Metaverse(null, "Microsoft");
        Metaverse m3 = new Metaverse(null, "NVIDIA");
        Metaverse m4 = new Metaverse(null, "Meta");
        Metaverse m5 = new Metaverse(null, "Decentraland");
        metaverseRepository.saveAll(Arrays.asList(m1, m2, m3, m4, m5));

        Land l1 = new Land(null, "Terreno 1", "Terreno no metaverso 1", "10", "20", 320.0);
        Land l2 = new Land(null, "Terreno 2", "Terreno no metaverso 1", "10", "20", 320.0);
        l1.setMetaverse(m1);
        l2.setMetaverse(m2);
        l1.setCategory(c1);
        l2.setCategory(c2);
        l1 = landRepository.save(l1);
        l2 = landRepository.save(l2);


        Images i1 = new Images( "Imagem A", "Imagem A", l1);
        Images i2 = new Images( "Imagem B", "Imagem B", l1);
        Images i3 = new Images( "Imagem C", "Imagem C", l2);
        Images i4 = new Images( "Imagem D", "Imagem D", l2);
        imagesRepository.saveAll(Arrays.asList(i1, i2, i3, i4));


    }
}

