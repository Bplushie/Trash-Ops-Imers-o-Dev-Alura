let dados = [
    {
        titulo: "Pilha",
        descricao: "A maneira ideal de descartar pilhas é levá-las a pontos de coleta específicos de pilhas e baterias, como supermercados, lojas de eletrônicos ou pontos de coleta públicos. Pilhas contêm metais pesados, como cádmio e mercúrio, que são tóxicos e podem contaminar o solo e a água se descartados incorretamente.",
        local: "Consulte a prefeitura de sua cidade ou localize no site da Green Eletron: https://greeneletron.org.br/localizador",
        palavraChave: ["bateria", "pilhas", "acumulador", "resíduos eletrônicos"]
    },
    {
        titulo: "Eletrônicos",
        descricao: "Celulares, computadores, televisores e outros eletrônicos contêm componentes tóxicos, como chumbo e mercúrio. Esses itens devem ser levados a pontos de coleta específicos para eletrônicos. O descarte inadequado pode causar contaminação ambiental e prejudicar a saúde pública.",
        local: "Consulte a prefeitura de sua cidade ou localize no site da Green Eletron: https://greeneletron.org.br/localizador",
        palavraChave: ["celulares", "computadores", "televisores", "aparelhos eletrônicos"]
    },
    {
        titulo: "Lâmpadas",
        descricao: "Lâmpadas, especialmente as fluorescentes, contêm mercúrio, que é extremamente prejudicial ao meio ambiente e à saúde humana. Devem ser descartadas em pontos de coleta específicos, como supermercados, lojas de materiais de construção ou pontos de coleta públicos.",
        local: "Consulte a prefeitura de sua cidade ou localize no site da Green Eletron: https://greeneletron.org.br/localizador",
        palavraChave: ["fluorescente", "lâmpada", "led", "lâmpadas incandescentes"]
    },
    {
        titulo: "Papel",
        descricao: "O papel pode ser reciclado em lixeiras de coleta seletiva ou em pontos de entrega voluntária. É importante que esteja limpo e seco, pois papéis sujos ou engordurados podem contaminar outros materiais recicláveis.",
        local: "Lixeira de coleta seletiva mais próxima ou pontos de entrega voluntária.",
        palavraChave: ["papéis", "reciclagem de papel", "folhas", "jornal"]
    },
    {
        titulo: "Plástico",
        descricao: "O plástico deve ser limpo e seco antes de ser descartado em lixeiras de coleta seletiva. Plásticos como garrafas PET, embalagens de produtos e recipientes plásticos são recicláveis. Evite plásticos filmes e sacolas plásticas, pois eles podem dificultar o processo de reciclagem.",
        local: "Lixeira de coleta seletiva mais próxima.",
        palavraChave: ["embalagens plásticas", "garrafas PET", "reciclagem de plástico", "plásticos"]
    },
    {
        titulo: "Medicamentos Vencidos",
        descricao: "Medicamentos vencidos não devem ser jogados no lixo comum, pois podem contaminar o solo e a água. Leve-os a farmácias ou postos de saúde que possuam programas de coleta de medicamentos vencidos.",
        local: "Farmácias com programa de coleta de medicamentos ou postos de saúde.",
        palavraChave: ["remédios vencidos", "farmácia", "remédios", "medicamentos"]
    },
    {
        titulo: "Tintas e Solventes",
        descricao: "Tintas, solventes e outros produtos químicos são considerados resíduos perigosos devido ao seu potencial de poluição e toxicidade. Devem ser descartados em locais específicos, como postos de coleta de materiais perigosos ou empresas especializadas.",
        local: "Consulte a prefeitura de sua cidade ou empresas especializadas em descarte de resíduos químicos.",
        palavraChave: ["tinta", "solvente", "produtos químicos", "resíduos perigosos"]
    },
    {
        titulo: "Bandeja de frios",
        descricao: "As bandejas de frios são feitas de isopor, um material não biodegradável que requer descarte específico. Consulte a prefeitura ou empresas de reciclagem para saber onde descartar corretamente.",
        local: "Pontos de coleta específicos para isopor ou lixeiras de coleta seletiva industrial.",
        palavraChave: ["isopor", "embalagem de frios", "bandejas de alimentos", "reciclagem de isopor"]
    },
    {
        titulo: "Papelão",
        descricao: "O papelão é altamente reciclável e deve ser descartado em lixeiras de coleta seletiva. Antes de descartar, achate as caixas de papelão para facilitar o transporte e o processamento.",
        local: "Lixeira de coleta seletiva mais próxima.",
        palavraChave: ["caixas de papelão", "cartão", "embalagens de papelão", "reciclagem de papelão"]
    },
    {
        titulo: "Óleo de cozinha",
        descricao: "O óleo de cozinha usado pode causar sérios danos ao meio ambiente se descartado no ralo ou no lixo comum. Deve ser armazenado em garrafas e entregue em pontos de coleta específicos ou empresas de reciclagem.",
        local: "Pontos de coleta específicos para óleo de cozinha ou empresas de coleta.",
        palavraChave: ["óleo usado", "óleo vegetal", "coleta de óleo", "reciclagem de óleo"]
    },
    {
        titulo: "Vidro",
        descricao: "O vidro é 100% reciclável e pode ser reutilizado infinitamente. Embalagens de vidro, como garrafas e potes, devem ser limpas e descartadas em lixeiras de coleta seletiva.",
        local: "Lixeira de coleta seletiva mais próxima.",
        palavraChave: ["garrafas de vidro", "vidros", "janelas", "reciclagem de vidro"]
    },
    {
        titulo: "Restos de Comida",
        descricao: "Cascas de frutas, legumes, e outros restos de alimentos podem ser compostados. A compostagem é uma excelente forma de reduzir a quantidade de resíduos orgânicos enviados para aterros sanitários.",
        local: "Compostagem domiciliar ou coleta de orgânicos.",
        palavraChave: ["compostagem", "restos alimentares", "resíduos de cozinha", "orgânicos"]
    },
    {
        titulo: "Produtos de Limpeza",
        descricao: "Produtos de limpeza, como detergentes, desinfetantes e alvejantes, contêm substâncias químicas que podem ser prejudiciais ao meio ambiente. Devem ser descartados em postos de coleta específicos para produtos químicos.",
        local: "Postos de coleta de produtos químicos ou empresas especializadas.",
        palavraChave: ["detergentes", "desinfetantes", "limpeza", "produtos químicos"]
    },
    {
        titulo: "Fraldas e Absorventes",
        descricao: "Fraldas descartáveis e absorventes higiênicos não são recicláveis e devem ser descartados no lixo comum. Em algumas localidades, há programas específicos para coleta desses materiais.",
        local: "Lixo comum (em alguns locais, existem programas específicos de coleta).",
        palavraChave: ["descartáveis", "fraldas", "absorventes", "higiene pessoal"]
    },
    {
        titulo: "EPIs (Máscaras, Luvas)",
        descricao: "Equipamentos de proteção individual utilizados contra a COVID-19, como máscaras e luvas, são considerados resíduos infectocontagiosos e devem ser descartados conforme orientação das autoridades locais ou em coletores específicos.",
        local: "Coleta específica para resíduos hospitalares ou conforme orientação das autoridades locais.",
        palavraChave: ["máscaras", "luvas", "equipamentos de proteção", "COVID-19"]
    },
    {
        titulo: "Resíduos Orgânicos (Folhas e Galhos)",
        descricao: "Folhas, galhos e restos de poda podem ser compostados ou descartados em coleta específica de resíduos orgânicos. A compostagem ajuda a transformar esses resíduos em adubo.",
        local: "Coleta de resíduos orgânicos ou compostagem domiciliar.",
        palavraChave: ["podas", "folhas", "galhos", "resíduos de jardim"]
    },
    {
        titulo: "Pneus",
        descricao: "Pneus usados de carros, motos e bicicletas devem ser entregues em pontos de coleta específicos. Eles não são recicláveis em muitos locais devido aos materiais de sua composição, mas podem ser reutilizados ou destinados a programas de reciclagem específicos.",
        local: "Pontos de coleta específicos para pneus.",
        palavraChave: ["borrachas", "rodas", "automóveis", "reciclagem de pneus"]
    },
    {
        titulo: "Móveis",
        descricao: "Móveis velhos ou danificados podem ser reciclados ou doados. Se não estiverem em boas condições, devem ser descartados em locais específicos para coleta seletiva de grandes volumes.",
        local: "Coleta seletiva ou doação para instituições.",
        palavraChave: ["sofás", "cadeiras", "mesas", "mobiliário usado"]
    }
];
