  // Datos de ejemplo para cada sección
        const books = {
            espanol: [
               {
        title: "Alan Chapman - Magia avanzada para principiantes",
        imageUrl: "https://prodimage.images-bn.com/pimages/9781904658412_p0_v3_s600x595.jpg",
        downloadUrl: "https://drive.google.com/file/d/16zeibpVGIvZAGthD-E7Yd1t0qQsqnTex/view?usp=sharing",
        description: "Una guía práctica para adentrarse en el mundo de la magia moderna."
    },
    {
        title: "Ray Sherwin - El libro de los resultados",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJrAOSBiHRqFWa43ytrgzDkyjEKk70lHvNg&s",
        downloadUrl: "https://drive.google.com/file/d/1d8e8a7e-_PEECiAD3l_xQk4qhoiRBceX/view?usp=sharing",
        description: "Explora técnicas efectivas para lograr resultados mágicos."
    },
    {
        title: "Ray Sherwin - El teatro de la magia",
        imageUrl: "https://weiserantiquarian.cdn.bibliopolis.com/pictures/55620.jpg?auto=webp&v=1525885829",
        downloadUrl: "https://drive.google.com/file/d/1kq_DJ6nvj-rqpTu_ge9DWyGPp983g1b_/view?usp=sharing",
        description: "Un enfoque teatral y práctico de la magia ritual."
    },
    {
        title: "Frater UD - Magia práctica de los sigilos",
        imageUrl: "https://images.cdn1.buscalibre.com/fit-in/360x360/b8/30/2b9e958b7773dada3cf9a1b8b22c4580.jpg",
        downloadUrl: "https://drive.google.com/file/d/18LdiSBX2WCkUynZ_uV-7PoC0yMMcrGlN/view?usp=drive_link",
        description: "Aprende a crear y usar sigilos para manifestar tus deseos."
    },
    {
        title: "Jan Fries - Magia(k) visual",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7PWe3-G79Z01atEkKeGD3AMbwEN3cETTsA&s",
        downloadUrl: "https://drive.google.com/file/d/1r5KRuTDmTmWPYHupJmdOLDcUtMCi5JLi/view?usp=sharing",
        description: "Un enfoque visual y creativo de la magia."
    },
    {
        title: "Bluefluke 'El traidor' - Manual de campo del psiconauta",
        imageUrl: "https://ia801609.us.archive.org/BookReader/BookReaderImages.php?zip=/5/items/the-psychonaut-field-manual/The%20Psychonaut%20Field%20Manual_jp2.zip&file=The%20Psychonaut%20Field%20Manual_jp2/The%20Psychonaut%20Field%20Manual_0000.jp2&id=the-psychonaut-field-manual&scale=4&rotate=0",
        downloadUrl: "https://drive.google.com/file/d/1xMr6eeWJ7WQbwL1MJwDo4ZTXqja2Zkdf/view?usp=drive_link",
        description: "Una guía ilustrada para la exploración de la mente y la magia."
    },
    {
        title: "Robert Anton Wilson - Prometeo Asciende",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPgRGKnrmGvG9EswMOL8rdCcQ-JUmzbVE0w&s",
        downloadUrl: "https://drive.google.com/file/d/1nKbPaZP0RvvomxcFkqyitiHzNhgyqZsC/view?usp=sharing",
        description: "Un viaje a través de la psicodelia, la magia y la filosofía."
    },
    {
        title: "Austin Osman Spare - El libro del placer",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbMKGcJ7kbM-mwSdhuuvReAULMLjAMlyVEw&s",
        downloadUrl: "https://drive.google.com/file/d/1ThkqgT4knSQ_T3pM1DwRSEiDmtPwWy0T/view?usp=drive_link",
        description: "Un clásico de la magia del caos y el arte de los sigilos."
    },
    {
        title: "Phil Hine - Caos primordial",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328044695i/420560.jpg",
        downloadUrl: "https://drive.google.com/file/d/1zhZ0P-EmPU7nE50_Ab5bzDgHhAnFbWUj/view?usp=sharing",
        description: "Una introducción a la magia del caos y sus prácticas."
    },
    {
        title: "Phil Hine - Caos condensado",
        imageUrl: "https://pictures.abebooks.com/isbn/9781618696632-us.jpg",
        downloadUrl: "https://drive.google.com/file/d/1PfJkVGDT8oScs438RM421yIscnCN-6iC/view?usp=sharing",
        description: "Una guía concisa y práctica de la magia del caos."
    },
    {
        title: "Damon Brand - Servidores mágicos",
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_727665-MLA81248869458_122024-O.webp",
        downloadUrl: "https://drive.google.com/file/d/1kq_DJ6nvj-rqpTu_ge9DWyGPp983g1b_/view?usp=sharing",
        description: "Cómo crear y trabajar con servidores mágicos."
    },
    {
        title: "Damon Brand- Palabras de poder",
        imageUrl: "https://m.media-amazon.com/images/I/81WkoZzM1UL._AC_UF1000,1000_QL80_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1zYv4cccprFeEo-mlNkb2cfNXjnQBpslL/view?usp=sharing",
        description: "El uso de palabras y lenguaje en la magia."
    },
    {
        title: "Damon Brand - Protección mágica",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4T6zJGD9nonHEL3_3ot03K_DTHFWSgJmJw&s",
        downloadUrl: "https://drive.google.com/file/d/1WyvrcxeesH4hMcWiQ5S2PYy60sOIPD1V/view?usp=drivesdk",
        description: "Técnicas y rituales para la protección mágica."
    },
    {
        title: "Damon Brand - Arcángeles de la magia",
        imageUrl: "https://m.media-amazon.com/images/I/61+yP-QtHvL.jpg",
        downloadUrl: "https://drive.google.com/file/d/1gPXcBG0iYQKIWpHm8GR1on5EFZvuP_qN/view?usp=sharing",
        description: "Trabajo con arcángeles en la práctica mágica."
    },
    {
        title: "Damon Brand - Magickal Cashbook (español)",
        imageUrl: "https://images.cdn3.buscalibre.com/fit-in/360x360/7f/0f/7f0fe153667ccb807eb6266da026b58f.jpg",
        downloadUrl: "https://drive.google.com/file/d/1F9Xx_JlgG4CP2geA4Yfm-f7vLm0WROWm/view?usp=sharing",
        description: "Un manual práctico de magia moderna para la fortuna."
    },
    {
        title: "Damon Brand - Angeles de la ira",
        imageUrl: "https://m.media-amazon.com/images/I/61pSnucdINL._AC_UF1000,1000_QL80_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1uVDLrJp14tSwQ2_OxD5FrHWpv1h1IxEu/view?usp=sharing",
        description: "Trabajo con entidades para canalizar la ira."
    },
    {
        title: "Grant Morrison - Magia pop (extracto de texto)",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLC50iI9YN-tsfQHLqcFkDV_UNDXjiC3fAA&s",
        downloadUrl: "https://drive.google.com/file/d/166NU4hwn1_qlmSt6zhzUk7HAbC3OatzR/view?usp=sharing",
        description: "Un vistazo a la magia en la cultura pop."
    },
    {
        title: "Peter J. Carroll - Liber Null & Psiconauta (nueva edición)",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxBCINOnhNVFSFdFpAi-LVfzVGRjWRltKAQ&s",
        downloadUrl: "https://drive.google.com/file/d/16sNCtDC4ydHW5uO-ah71iC0IGKjnC_6K/view?usp=sharing",
        description: "Un clásico de la magia del caos."
    },
    {
        title: "Peter J. Carroll - Époch (el esotericón y los portales del caos)",
        imageUrl: "https://m.media-amazon.com/images/I/71RSoqOjRzL._AC_UF1000,1000_QL80_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1XLhivZ1T6ZBgXORXAs06abC91JE8pwlp/view?usp=drive_link",
        description: "Exploración de los portales del caos y el esotericón."
    },
    {
        title: "Peter J. Carroll - La filosofía y la práctica de la magia (texto breve)",
        imageUrl: "https://inversionica.com/assets/front/img/user/blogs/1733972344.jpg",
        downloadUrl: "https://drive.google.com/file/d/19ZHhSr4Jno1a2t4nJyn8OjD6mBuQEbTW/view?usp=sharing",
        description: "Una introducción a la filosofía y práctica mágica."
    },
    {
        title: "Peter J. Carroll - Liber Kaos",
        imageUrl: "https://images.cdn1.buscalibre.com/fit-in/360x360/a4/54/a454e4292e309dea1f4a0a58ef278148.jpg",
        downloadUrl: "https://drive.google.com/file/d/1Gw2_XZjN_IzE1a9iSKM72W1m8T5Ze734/view?usp=drive_link",
        description: "Un manual avanzado de magia del caos."
    },
    {
        title: "Peter J. Carroll - La postura de la muerte (texto breve)",
        imageUrl: "https://inversionica.com/assets/front/img/user/blogs/1733972344.jpg",
        downloadUrl: "https://drive.google.com/file/d/1o8Dnm-4S1RuapZJ7n7vU2qmbkmn9uB5N/view?usp=sharing",
        description: "Técnicas mágicas relacionadas con la muerte y el renacimiento."
    },
    {
        title: "Peter J. Carroll - Un trabajo mágico más efectivo (texto breve)",
        imageUrl: "https://inversionica.com/assets/front/img/user/blogs/1733972344.jpg",
        downloadUrl: "https://drive.google.com/file/d/1sAmZmXyTSQrZIJLcPzQpmUqs2vBc3gcB/view?usp=sharing",
        description: "Consejos para mejorar la efectividad en la práctica mágica."
    },
    {
        title: "Peter J. Carroll - Voluntad (texto breve)",
        imageUrl: "https://inversionica.com/assets/front/img/user/blogs/1733972344.jpg",
        downloadUrl: "https://drive.google.com/file/d/1oBXC6sSPTs5_rzHHd2a1YuuHa-JTY3Ud/view?usp=drive_link",
        description: "El poder de la voluntad en la magia."
    },
    {
        title: "Peter J. Carroll - Principio caótica (texto breve)",
        imageUrl: "https://inversionica.com/assets/front/img/user/blogs/1733972344.jpg",
        downloadUrl: "https://drive.google.com/file/d/1JMkEu8xqfWLytI-cwjtyzTT3VN24rlX_/view?usp=sharing",
        description: "Exploración del principio caótico en la magia."
    },
    {
        title: "Peter J. Carroll - Compendio del caos: la magia de los iluminados de tanateros",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420432445i/9278307.jpg",
        downloadUrl: "https://drive.google.com/file/d/1eReDewUg7WXMJqXIYIDWI0Hv4NdayAq9/view?usp=drive_link",
        description: "Un compendio de técnicas y filosofías de la magia del caos."
    },
{
        title: "Jhon Kreiter - Crear un Servidor: Aprovecha el poder de las formas de pensamiento",
        imageUrl: "https://m.media-amazon.com/images/I/71HYvZ-a-mL._SL1500_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1gLahTL436J0_WQG-e-_Y4NCdjAMDFkHm/view?usp=sharing",
        description: "Aprovecha el poder de las formas de pensamiento."
    },
    {
        title: "Jhon Kreiter - Manifestar riqueza, prosperidad con formas de pensamiento y servidores",
        imageUrl: "https://m.media-amazon.com/images/I/81vkQzNfhdL._SL1500_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1APM0jkCgFISS4Q2kSJzTbXl23rlULCsF/view?usp=sharing",
        description: "Manifestar riqueza y prosperidad con formas de pensamiento y servidores."
    },
{
        title: "Kaerlos - El Libro de las Bestias Auricas: Sincronización áurica con las fuerzas del vacío",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgceizbBpqUeC3WHo-PXIyD0Y_D25W1jifA&s",
        downloadUrl: "https://drive.google.com/file/d/11WHbkSHFGXd2kGpQhJ_OXn_4ZF2WS-x5/view?usp=drivesdk",
        description: "Un grimorio sobre fuerzas del vacío."
    },
 {
        title: "Lon Milo DuQuette y Christopher S. Hyatt - Goetia Ilustrado",
        imageUrl: "https://covers.openlibrary.org/b/id/794580-L.jpg",
        downloadUrl: "https://drive.google.com/file/d/1sbK9h8V0Otzm5VpMpMBOfuaTLIh6iVFT/view?usp=drive_link",
        description: "El *Goetia Ilustrado* de Lon Milo DuQuette ofrece una versión accesible y humorística del *Lemegeton*, con ilustraciones y guías prácticas para evocar a los 72 espíritus, desmitificando y adaptando la magia ceremonial a una perspectiva moderna."
    },

{
        title: "Donald Tyson- Espiritus Familiares",
        imageUrl: "https://m.media-amazon.com/images/I/51WePh52R7L._AC_UF1000,1000_QL80_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1ApouUH1xZjBZq-1_eUjt3BG7_vZFYxjJ/view?usp=drive_link",
        description: "*Espíritus Familiares* de Donald Tyson es una guía práctica sobre la creación y manejo de espíritus servidores en la magia ceremonial, basada en tradiciones esotéricas y enfoques modernos."
    },
{
        title: "Richard Metzger - Book of Lies: Desinformation guide to magick and the occult",
        imageUrl: "https://m.media-amazon.com/images/I/71xH6ZrekrL._UF894,1000_QL80_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1GSq8BC0gLrxi7gm_PkuP8In4K0QCKXZz/view?usp=drive_link",
        description: "*Book of Lies* de Richard Metzger es una colección ecléctica de ensayos, arte y reflexiones sobre contracultura, ocultismo y temas transgresores, presentados de manera visual y provocativa."
    },
{
        title: "Principia Discordia",
        imageUrl: "https://archive.org/services/img/principiadiscordia/full/pct:200/0/default.jpg",
        downloadUrl: "https://drive.google.com/file/d/1hh1IvokLHnRzuaQ-A_1nk_vjaQKCZA-Q/view?usp=drive_link",
        description: "El Principia Discordia es un texto satírico y filosófico que funda el discordianismo, una religión no convencional centrada en el caos, la irreverencia y el humor. Promueve la libertad individual, la subversión de las estructuras rígidas y la celebración del desorden como una fuerza creativa."
    }

            ],
            ingles: [
              {
        title: "Colección recuperada Revista Chaos International",
        imageUrl: "https://i.ibb.co/LXjXH54t/chaos-international-portada.jpg",
        downloadUrl: "https://drive.google.com/file/d/1IJl_xtB3zDPEbTWnoRIvKZl4Vb9WTwXW/view?usp=drive_link",
        description: "La reconocida revista sobre la cual se gestó el movimiento Magia del Caos (Se debe descomprimir)."
    },
            {
        title: "John Kreiter - Create a Servitor Companion",
        imageUrl: "https://th.bing.com/th/id/OIP.3ojYooLK6UogdFqC0CaqgQAAAA?rs=1&pid=ImgDetMain",
        downloadUrl: "https://drive.google.com/file/d/1pqDMfATseBQ0au6mRQmsOeOH_aWwwGow/view?usp=sharing",
        description: "Create a powerful servitor companion."
    },
    {
        title: "Create a Servitor: Harness the Power of Thought Forms - John Kreiter",
        imageUrl: "https://m.media-amazon.com/images/I/71HYvZ-a-mL._SL1500_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1nQmdEITaMsvHdY80X4cvD5ZX-g6gNFkS/view?usp=sharing",
        description: "Harness the power of thought forms."
    },
    {
        title: "John Kreiter - Out Of Body Experiences",
        imageUrl: "https://johnkreiter.com/wp-content/uploads/out-of-body-experiences-quickly-and-easily-cover-3d.png",
        downloadUrl: "https://drive.google.com/file/d/1dSjrqEpJeEUYSkIpiZ3C_NaWT7oQgruT/view?usp=sharing",
        description: "Techniques for out-of-body experiences."
    },
    {
        title: "John Kreiter - Overcoming the Archon Through Alchemy",
        imageUrl: "https://image.torob.com/base/images/QI/9O/QI9O2wB206Ayb9Pd.jpg_/560x560.webp",
        downloadUrl: "https://drive.google.com/file/d/1yy_Vz-4zTAwMMvSMUwKMA0l5QVyofrO2/view?usp=sharing",
        description: "Overcome the Archon through alchemical techniques."
    },
    {
        title: "John Kreiter - The Magnum Opus",
        imageUrl: "https://m.media-amazon.com/images/I/71jeqV290XL._SL1360_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1E5pa89DnXrKqmUkuuj_2v1GAfJUPZeZd/view?usp=sharing",
        description: "A deep dive into mystical transformation."
    },
    {
        title: "John Kreiter - The Occult Experience",
        imageUrl: "https://m.media-amazon.com/images/I/61x7zPrc3EL._SL1360_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1Wo3_gjEOV3mjbmuMYd3Z7_naKnXkUEz5/view?usp=sharing",
        description: "Exploring the hidden world of the occult."
    },
    {
        title: "John Kreiter - The Way of the Death Defier",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635991869i/59535186.jpg",
        downloadUrl: "https://drive.google.com/file/d/1HRMUgPUVHZGJm_lr8PX8kJqlIuZMB8RW/view?usp=sharing",
        description: "A path to transcendence and transformation."
    },
    {
        title: "John Kreiter - The Way of the Projectionist",
        imageUrl: "https://m.media-amazon.com/images/I/61IgTUiGqTL._SL1423_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1rgq5HNRkiMpsmsupJSPUIe4HZqKd_1XS/view?usp=sharing",
        description: "Master the art of astral projection."
    },
    {
        title: "John Kreiter - Vampire's Way to Psychic Self-Defense",
        imageUrl: "https://m.media-amazon.com/images/I/71i+n6HOVSL._SL1360_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1XPf73h_VNvLY8a3c1QJvo3VJdrC9jbEX/view?usp=sharing",
        description: "Psychic self-defense techniques from a vampire's perspective."
    },
    {
        title: "John Kreiter - Manifest Wealth and Prosperity with Thought Forms",
        imageUrl: "https://m.media-amazon.com/images/I/81vkQzNfhdL._SL1500_.jpg",
        downloadUrl: "https://drive.google.com/file/d/1xkvnlQB_ClEAY-WJUYOIabiPMiqjrxnX/view?usp=sharing",
        description: "Use thought forms to attract prosperity."
    }
            ],
            magick: [
               {
        title: "Agrippa, Cornelio - Filosofía Oculta I (Magia Natural - Libro I):",
        imageUrl: "https://m.media-amazon.com/images/I/71DTroQ9BWL._AC_UF1000,1000_QL80_.jpg",
        downloadUrl: "https://drive.google.com/file/d/10skk-wvN2iUslmTrXzadGZJ2wv6WcoIi/view?usp=drive_link",
        description: "Agripa explora la magia natural, centrándose en las fuerzas ocultas de la naturaleza, los elementos y la influencia de los cuerpos celestes en el mundo físico."
    },

{
        title: "Agrippa, Cornelio - Filosofía Oculta II (Magia Celeste- Libro II)",
        imageUrl: "https://images.cdn2.buscalibre.com/fit-in/360x360/f8/2b/f82b810de74412f9eebd00363d122958.jpg",
        downloadUrl: "https://drive.google.com/file/d/1KF9m_t9xtvB44rnz5Krs_naYK5GqTDus/view?usp=drive_link",
        description: "Se adentra en la magia celestial, analizando la relación entre los planetas, las estrellas y las prácticas mágicas, incluyendo numerología y simbolismo astrológico."
    },
{
        title: "Agrippa, Cornelio - Filosofia Oculta III (Magia Ceremonial - Libro III)",
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_610183-MLA31649218165_082019-O.webp",
        downloadUrl: "https://drive.google.com/file/d/18YExX1Hq02OWiWg2NLLSQJwZB6QXXi6N/view?usp=drive_link",
        description: "Aborda la magia divina y teúrgica, enfocándose en la conexión con lo divino, la invocación de ángeles y espíritus, y la elevación espiritual del mago."
    },

{
        title: "Asenath Mason - Rituales draconianos",
        imageUrl: "https://th.bing.com/th/id/OIP.WjnrfyBxKu_zt7fEaP2VyAHaLL?rs=1&pid=ImgDetMain",
        downloadUrl: "https://drive.google.com/file/d/1-iZVfudlGhyHcme_vP7oPIYfrPXLeioa/view?usp=drive_link",
        description: "Explora prácticas mágicas centradas en el poder y la energía de los dragones, combinando rituales, invocaciones y meditaciones para trabajar con fuerzas arquetípicas y draconianas."
    },
{
        title: "Asenath Mason - Necronomicon Gnosis",
        imageUrl: "https://m.media-amazon.com/images/I/511r3sqot9L.jpg",
        downloadUrl: "https://drive.google.com/file/d/1tbORCEJUx1OjZGZqkW7XXjyombraEYgu/view?usp=drive_link",
        description: "Un enfoque práctico y esotérico sobre el Necronomicon, integrando rituales y conocimientos gnósticos para conectar con entidades y fuerzas oscuras."
    },
{
        title: "Asenath Mason - Grimorio de Tiamat",
        imageUrl: "https://cdn.webshopapp.com/shops/258038/files/410057594/manus-sinistra-asenath-mason-el-grimorio-de-tiamat.jpg",
        downloadUrl: "https://drive.google.com/file/d/1vnlAI99phTgJXqgRPGG83COaimuDdnoH/view?usp=drive_link",
        description: "Un manual de magia oscura que profundiza en el culto a Tiamat, la diosa primordial del caos, con rituales y técnicas para invocar su poder y sabiduría"
    },
{
        title: "Asenath Mason - El Libro de Mefisto",
        imageUrl: "https://i.etsystatic.com/18590845/r/il/224993/2192075194/il_794xN.2192075194_tawv.jpg",
        downloadUrl: "https://drive.google.com/file/d/1vlugVJOUi93VtDPrwI-cOJRKsHmvdH_x/view?usp=drive_link",
        description: "Centrado en la figura de Mefistófeles, este libro ofrece rituales y enseñanzas para trabajar con este espíritu infernal, explorando su simbolismo y su papel en la magia ceremonial."
    },
{
        title: "Asenath Mason - Portales a las dimensiones Interestelares",
        imageUrl: "https://www.becomealivinggod.com/wp-content/uploads/2016/08/asenath-mason3.jpg",
        downloadUrl: "https://drive.google.com/file/d/11RqRlFtNNVqdQfZGqrOHX3YaK--7UgjI/view?usp=drive_link",
        description: "Una guía para abrir portales dimensionales y explorar reinos interestelares a través de la magia, conectando con entidades y energías cósmicas."
    }
            ],
            mitologia: [
                {
        title: "Carl Gustav Jung - El hombre y sus símbolos",
        imageUrl: "https://images.cdn3.buscalibre.com/fit-in/360x360/94/4d/944d82f3b928a32ba578f9678f99beb4.jpg",
        downloadUrl: "https://drive.google.com/file/d/1JWVwu7qHp0Zqja6OpgE3Ji-TlaHWkgko/view?usp=drive_link",
        description: "Una introducción accesible a la psicología junguiana, explorando cómo los símbolos y los sueños revelan el inconsciente y su influencia en la vida humana."
    },
{
        title: "Carl Gustav Jung - Arquetipos E Inconsciente Colectivo",
        imageUrl: "https://archive.org/services/img/jung-carl-gustav.-arquetipos-e-inconsciente-colectivo-ocr-1970/full/pct:200/0/default.jpg",
        downloadUrl: "https://drive.google.com/file/d/1sZdkx0zxwxggby4sgoSapp0dwaQoTkCH/view?usp=drive_link",
        description: "Profundiza en los arquetipos universales y el inconsciente colectivo, conceptos clave de la psicología analítica, y su impacto en la psique individual y cultural."
    },
{
        title: "Carl Gustav Jung - Sincronicidad",
        imageUrl: "https://th.bing.com/th/id/OIP.p6AQY9OtQi2vxkigjWcb6AHaLn?rs=1&pid=ImgDetMain",
        downloadUrl: "https://drive.google.com/file/d/17QhkCfHIoHV9JCV29Dz8kJ5PatfkrbUQ/view?usp=drive_link",
        description: "Examina el concepto de sincronicidad, la conexión significativa entre eventos aparentemente no relacionados, y su relación con la psique, la causalidad y el significado profundo."
    },
{
        title: "Paul Levy - Dispelling Wetiko",
        imageUrl: "https://th.bing.com/th/id/R.5440d0eff03595f32e4e7687dc3d67de?rik=U1bBIEhoAzl0MA&pid=ImgRaw&r=0",
        downloadUrl: "https://drive.google.com/file/d/1Hl5dYvnYYJ37a_5cjlPLDShfUk_46gvO/view?usp=drivesdk",
        description: "Explora el concepto del wetiko, una fuerza psicoespiritual de egoísmo y destrucción, y ofrece herramientas para reconocerlo y transformarlo, promoviendo la curación individual y colectiva."
    }
            ],
            oraculos: [
                {
        title: "Tarot Mistico Egipcio (Mazo Imprimir) Alta Calidad",
        imageUrl: "https://thumbs.dreamstime.com/b/reading-egyptian-tarot-13705632.jpg",
        downloadUrl: "https://drive.google.com/file/d/1GzuNw1MImSnnvfCHniNQXZgOa5KanYMR/view?usp=drive_link",
        description: "Tarot mistico egipcio Mazo para imprimir en alta calidad"
    },
{
        title: "40 Servidores - Tommie Kelly (Mazo para imprimir) Alta Calidad",
        imageUrl: "https://cdn.awsli.com.br/287/287142/produto/75441921/3397657fb9.jpg",
        downloadUrl: "https://drive.google.com/file/d/1GoAObwVVS9WacTYcZh8HEb5hivYr7aDD/view?usp=drive_link",
        description: "Mazo para imprimir en alta calidad, debe ser descomprimido"
    },

{
        title: "40 Servidores - Tommie Kelly Manual/Grimorio en español",
        imageUrl: "https://i.pinimg.com/736x/0e/b3/ec/0eb3eccb240b1894f2f837177b504dd4.jpg",
        downloadUrl: "https://drive.google.com/file/d/1GjDYL9didfnR-x-eiTM5TMBbSyUs5PFx/view?usp=drive_link",
        description: "Grimorio y Manual del sistema Mágico y de Adivinación de los 40 Sirvientes, basado en las dinamicas de la Magia del Caos"
    },
{
        title: "Tarot de Thot (Aleister Crowley) (Mazo para imprimir) Alta Calidad",
        imageUrl: "https://i.ibb.co/Y746xSXb/thot-tarot.jpg",
        downloadUrl: "https://drive.google.com/file/d/1RIIzyGyhCn29w3u0z_J6oLWdslHZq_EN/view?usp=drive_link",
        description: "El reconocido tarot creado por Aleister Crowley, remasterizado digital en excelente calidad"
    },

{
        title: "Atom Bomb Tarot - Bluefluke (Mazo para imprimir en Alta definición)",
        imageUrl: "https://caotize.se/wp-content/uploads/carta-de-tarot-a-roda-da-fortuna-wheel-of-fortune/10-A-Roda-da-Fortuna-The-Wheel-of-Fortune-Bluefluke-Tarot-Magia-do-Caos-Caotize-se.jpg",
        downloadUrl: "https://drive.google.com/file/d/1AQ25ihYIzeI9LAHuSUkY5neQjNgAA3GM/view?usp=drive_link",
        description: "El tarot del artista, discordiano y Mago del Caos Bluefluke, con bases en ideas caoístas y Los 8 circuitos de Timothy Leary"
    },
{
        title: "Necronomicon Tarot - Donald Tyson (Mazo para imprimir)",
        imageUrl: "https://i.etsystatic.com/24706697/r/il/c174cb/3608744453/il_1588xN.3608744453_jhf0.jpg",
        downloadUrl: "https://drive.google.com/file/d/1nQgtoedttp1u-cdDy7sXUrWfiwya97KX/view?usp=drive_link",
        description: "Tarot basado en las fuerzas primigenias del necronomicon de H.P. Lovecraft del reconocido autor Donald Tyson"
    }
            ],
            brujeria: [
                {
        title: "Arin Murphy-Hiscock -  Libro de la Bruja Verde",
        imageUrl: "https://www.mejoreslibros.top/wp-content/uploads/2020/11/La-Bruja-Verde.jpg",
        downloadUrl: "https://drive.google.com/file/d/1Vr0IrRkSi6EWdp2bTX3siaw2hT8hQxdz/view?usp=drive_link",
        description: "Una guía práctica para la brujería verde, enfocada en la conexión con la naturaleza, el uso de hierbas y la magia natural."
    },
{
        title: "Beatrix Minerba Linden - Libro Verde de la Bruja Solitaria",
        imageUrl: "https://m.media-amazon.com/images/I/61ud4IBTE1L._SL1500_.jpg",
        downloadUrl: "https://drive.google.com/file/d/17t9YAPEmgKvFLoEBf340qAiAyMFzZWTH/view?usp=sharing",
        description: "Un manual para brujas solitarias que combina tradiciones, rituales y prácticas mágicas centradas en la autosuficiencia y la conexión espiritual."
    },

{
        title: "Raymond Buckland - Wicca libro completo de la brujería",
        imageUrl: "https://magiaycristales.cl/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-15-at-10.19.02-AM.jpeg",
        downloadUrl: "https://drive.google.com/file/d/1Zz2l3QGvqaDlB_P5i4fdJmpimFl406pb/view?usp=drive_link",
        description: "Una introducción exhaustiva a la Wicca, cubriendo rituales, herramientas, festividades y prácticas esenciales para principiantes y practicantes."
    },

{
        title: "Scott Cunningham Wicca: Guia para el practicante solitario",
        imageUrl: "https://imagessl3.casadellibro.com/a/l/t5/23/9788496111523.jpg",
        downloadUrl: "https://drive.google.com/file/d/1ShPrtqbPcbmSVrXarTFQzUvQHxb81oK5/view?usp=drive_link",
        description: "Un clásico moderno que ofrece una aproximación accesible y práctica a la Wicca, ideal para quienes practican en solitario."
    },
{
        title: "Gerald Gardner - Libro de las sombras de Doreen Valente",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1670547024i/64657968.jpg",
        downloadUrl: "https://drive.google.com/file/d/1tqQILoZlxr2GEz0vzz1XqhbXzEvAPvvK/view?usp=drive_link",
        description: "Una recopilación de rituales, hechizos y enseñanzas fundamentales de la Wicca gardneriana, con contribuciones clave de Doreen Valiente."
    }
            ]
        };

        // Función para renderizar libros en un contenedor
        function renderBooks(containerId, books) {
            const container = document.getElementById(containerId);
            container.innerHTML = books.map(book => `
                <div class="book-card">
                    <img src="${book.imageUrl}" alt="${book.title}">
                    <h3>${book.title}</h3>
                    <p>${book.description}</p>
                    <a href="${book.downloadUrl}" target="_blank">Descargar</a>
                </div>
            `).join('');
        }

        // Renderizar todos los libros al cargar la página
        renderBooks('bookContainer', books.espanol);
        renderBooks('englishBookContainer', books.ingles);
        renderBooks('magickBookContainer', books.magick);
        renderBooks('mitologiaBookContainer', books.mitologia);
        renderBooks('oraculosBookContainer', books.oraculos);
        renderBooks('brujeriaBookContainer', books.brujeria);

        // Función para buscar libros
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const allBooks = [...books.espanol, ...books.ingles, ...books.magick, ...books.mitologia, ...books.oraculos, ...books.brujeria];
            const filteredBooks = allBooks.filter(book => book.title.toLowerCase().includes(searchTerm));

            if (searchTerm) {
                // Ocultar todas las categorías originales
                document.querySelectorAll('.book-container').forEach(container => container.style.display = 'none');
                document.querySelectorAll('h2').forEach(header => header.style.display = 'none');

                // Mostrar la categoría "Todos los libros"
                document.getElementById('todos-los-libros').style.display = 'block';
                document.getElementById('todosLosLibrosContainer').style.display = 'grid';

                // Renderizar los libros filtrados en el contenedor "Todos los libros"
                renderBooks('todosLosLibrosContainer', filteredBooks);
            } else {
                // Restaurar las categorías originales
                document.querySelectorAll('.book-container').forEach(container => container.style.display = 'grid');
                document.querySelectorAll('h2').forEach(header => header.style.display = 'block');

                // Ocultar la categoría "Todos los libros"
                document.getElementById('todos-los-libros').style.display = 'none';
                document.getElementById('todosLosLibrosContainer').style.display = 'none';
            }
        });

        // Cerrar desplegables al hacer clic en una opción
        document.querySelectorAll('.dropdown-content a').forEach(link => {
            link.addEventListener('click', () => {
                // Oculta todos los desplegables al hacer clic en un enlace
                document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            });
        });

        // Manejar desplegables al hacer clic en el botón
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.addEventListener('click', (event) => {
                event.stopPropagation(); // Evita que el evento se propague
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                const isActive = dropdownContent.classList.contains('active');

                // Cerrar todos los desplegables
                document.querySelectorAll('.dropdown-content').forEach(d => {
                    d.classList.remove('active');
                });

                // Abrir el desplegable actual si no estaba abierto
                if (!isActive) {
                    dropdownContent.classList.add('active');
                }
            });
        });

        // Cerrar desplegables al hacer clic fuera de ellos
        document.addEventListener('click', () => {
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        });

        // Manejar el comportamiento de hover
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            const dropdownContent = dropdown.querySelector('.dropdown-content');

            // Mostrar el desplegable al pasar el mouse
            dropdown.addEventListener('mouseenter', () => {
                dropdownContent.classList.add('active');
            });

            // Ocultar el desplegable al quitar el mouse
            dropdown.addEventListener('mouseleave', () => {
                dropdownContent.classList.remove('active');
            });
        });

        // Función para compartir en redes sociales y copiar enlace
        document.querySelectorAll('.share-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const url = option.getAttribute('data-url');
                const text = option.getAttribute('data-text') || '';

                if (option.classList.contains('whatsapp')) {
                    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
                } else if (option.classList.contains('facebook')) {
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                } else if (option.classList.contains('instagram')) {
                    window.open(`https://www.instagram.com/?url=${encodeURIComponent(url)}`, '_blank');
                } else if (option.classList.contains('copy')) {
                    navigator.clipboard.writeText(url).then(() => {
                        alert('Enlace copiado al portapapeles');
                    });
                }
            });
        });

        // Manejar el menú desplegable de compartir
        const shareButton = document.querySelector('.share-button');
        const shareDropdown = document.querySelector('.share-dropdown');

        shareButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el evento se propague
            shareDropdown.classList.toggle('active');
        });

        // Cerrar el menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!shareDropdown.contains(e.target)) {
                shareDropdown.classList.remove('active');
            }
        });