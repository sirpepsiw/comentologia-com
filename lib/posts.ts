export const LEGEND = "Derechos de la imagen a Jose Feliciano Lopez Becerra y comentologia.com"

export type ContentBlock =
  | { type: "text"; heading?: string; paragraphs: string[] }
  | { type: "image"; src: string }
  | { type: "video"; src: string }
  | {
      type: "transcript";
      heading?: string;
      exchanges: { speaker: string; text: string }[];
    };

export interface Post {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  color: string;
  gradient: string;
  date: string;
  excerpt: string;
  coverImage: string;
  blocks: ContentBlock[];
  isTranscript?: boolean;
  exclusiveToken?: string;
  hiddenFromHome?: boolean;
}

export const posts: Post[] = [
  {
    slug: "los-chayoteros-del-poder",
    title: "Los Chayoteros del Poder",
    subtitle: "La red invisible entre la política y los medios en México",
    category: "Política",
    color: "bg-primary",
    gradient: "from-rose-500 to-pink-600",
    date: "2024-12-03",
    excerpt:
      "En los pasillos del poder, entre conferencias mañaneras, campañas millonarias y guerras digitales, existe una palabra que nunca desaparece del vocabulario político mexicano: el chayote.",
    coverImage: "HH4rvS-XYAIzbk4.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "En los pasillos del poder, entre conferencias mañaneras, campañas millonarias y guerras digitales, existe una palabra que nunca desaparece del vocabulario político mexicano: el chayote. Una expresión popular que durante décadas ha sido utilizada para describir los pagos, favores o contratos entregados a comunicadores y medios a cambio de cobertura favorable, silencios estratégicos o ataques dirigidos.",
          "Aunque oficialmente nadie acepta formar parte de estas redes, en la conversación pública el término \"chayotero\" sigue apareciendo cada vez que un periodista, influencer o conductor parece alinearse demasiado con algún partido político.",
        ],
      },
      {
        type: "image",
        src: "HH4rvS-XYAIzbk4.jpeg",
      },
      {
        type: "text",
        heading: "Del periódico impreso a las granjas digitales",
        paragraphs: [
          "Lo que antes ocurría en sobres amarillos y comidas privadas, hoy también se mueve a través de contratos publicitarios, campañas digitales y estructuras de bots. Analistas señalan que el viejo sistema evolucionó: ya no solo participan periódicos y televisoras, sino páginas virales, cuentas anónimas y creadores de contenido político que dominan TikTok, Facebook y X.",
          "En temporadas electorales, el fenómeno explota. Hashtags coordinados, tendencias sospechosamente sincronizadas y ataques masivos contra figuras públicas se convierten en parte del espectáculo político mexicano.",
          "Fuentes cercanas al mundo de la comunicación aseguran que existen auténticos \"cuartos de guerra digitales\" dedicados a moldear la conversación pública minuto a minuto.",
        ],
      },
      {
        type: "text",
        heading: "La política convertida en espectáculo",
        paragraphs: [
          "La situación política en México atraviesa uno de sus momentos más polarizados. Mientras el oficialismo presume apoyo popular y continuidad, la oposición acusa concentración de poder, manipulación mediática y uso político de recursos públicos.",
          "La batalla ya no se libra únicamente en el Congreso o en los debates presidenciales. Ahora también ocurre en transmisiones en vivo, canales de YouTube y programas de opinión donde algunos comunicadores se han convertido prácticamente en figuras políticas.",
          "Para muchos ciudadanos, distinguir entre información, propaganda y entretenimiento resulta cada vez más difícil.",
        ],
      },
      {
        type: "text",
        heading: "Influencers, filtraciones y guerras internas",
        paragraphs: [
          "Uno de los fenómenos más polémicos de los últimos años ha sido la entrada de influencers al terreno político. Algunos apoyan abiertamente candidatos; otros aseguran ser \"independientes\", aunque constantemente son señalados por presuntos acuerdos económicos o privilegios.",
          "Las filtraciones de audios, chats privados y documentos también se han vuelto armas frecuentes en las disputas entre grupos políticos. Cada semana aparece un nuevo escándalo: desde supuestos desvíos millonarios hasta conflictos internos entre operadores electorales.",
          "Y mientras unos exigen transparencia, otros responden acusando campañas de desprestigio organizadas desde las sombras.",
        ],
      },
      {
        type: "text",
        heading: "El negocio detrás del escándalo",
        paragraphs: [
          "Expertos en medios coinciden en que la polémica vende. Un escándalo político puede generar millones de reproducciones, contratos publicitarios y crecimiento inmediato para páginas de noticias y creadores de contenido.",
          "Por eso, algunos críticos aseguran que el ecosistema digital mexicano vive de la confrontación permanente: mientras más enojo, más tráfico; mientras más escándalo, más dinero.",
        ],
      },
      {
        type: "text",
        heading: "¿Periodismo o propaganda?",
        paragraphs: [
          "La gran pregunta sigue dividiendo opiniones: ¿México vive una transformación en la comunicación política… o simplemente una nueva versión del viejo sistema del chayote?",
          "Lo cierto es que, entre conferencias, filtraciones, influencers y guerras digitales, el ciudadano promedio se encuentra atrapado en una tormenta de información donde la verdad parece cada vez más difícil de identificar.",
          "Y en un país donde la política nunca duerme, los \"chayoteros\" siguen siendo protagonistas silenciosos del espectáculo nacional.",
        ],
      },
    ],
  },
  {
    slug: "mexico-frente-a-la-violencia",
    title: "México frente a la violencia: una crisis que transforma generaciones",
    category: "Sociedad",
    color: "bg-accent",
    gradient: "from-pink-400 to-purple-500",
    date: "2024-12-07",
    excerpt:
      "La violencia en México se ha convertido en uno de los temas más complejos y dolorosos de las últimas décadas. Lo que comenzó como una disputa entre grupos criminales evolucionó hacia una crisis que afecta la vida cotidiana de millones.",
    coverImage: "G42XVFLXYAAzH6i.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "La violencia en México se ha convertido en uno de los temas más complejos y dolorosos de las últimas décadas. Lo que comenzó como una disputa entre grupos criminales en distintas regiones del país evolucionó hacia una crisis que afecta la vida cotidiana de millones de personas: familias desplazadas, negocios cerrados, comunidades enteras bajo miedo constante y una profunda desconfianza hacia las instituciones.",
          "Durante años, estados como Chiapas, Michoacán, Guerrero, Sinaloa y Tamaulipas han sido escenarios frecuentes de enfrentamientos armados, desapariciones y extorsiones. Sin embargo, el problema ya no pertenece únicamente a ciertas zonas del país; la violencia se expandió hasta impactar ciudades medianas y grandes centros urbanos.",
        ],
      },
      {
        type: "image",
        src: "G42XVFLXYAAzH6i.jpeg",
      },
      {
        type: "text",
        heading: "El origen de una guerra silenciosa",
        paragraphs: [
          "Especialistas señalan que la violencia en México no tiene una sola causa. La pobreza, la corrupción, la impunidad y el crecimiento del crimen organizado forman parte de una combinación que debilitó la seguridad pública durante décadas. A esto se suma la falta de oportunidades para miles de jóvenes que, en muchas regiones, encuentran en los grupos criminales una falsa salida económica.",
          "La llamada \"guerra contra el narcotráfico\", iniciada a mediados de los años 2000, marcó un antes y un después. El despliegue militar buscaba contener a los cárteles, pero también provocó fragmentaciones internas, luchas territoriales y un incremento de los niveles de violencia. Con el paso del tiempo, varios grupos dejaron de dedicarse exclusivamente al tráfico de drogas y comenzaron a involucrarse en secuestro, extorsión, trata de personas y control económico regional.",
        ],
      },
      {
        type: "text",
        heading: "Las víctimas invisibles",
        paragraphs: [
          "Detrás de cada cifra existe una historia. Madres buscando a sus hijos desaparecidos, comerciantes pagando \"derecho de piso\", periodistas amenazados y comunidades desplazadas forman parte de una realidad que rara vez aparece completa en los titulares.",
          "Uno de los sectores más golpeados ha sido el periodismo. Reporteros y medios locales trabajan bajo amenazas constantes al investigar redes criminales o corrupción política. En muchas regiones, informar se convirtió en una actividad de alto riesgo.",
          "También la juventud vive atrapada entre dos mundos: la falta de oportunidades y la normalización de la violencia. En redes sociales, la figura del criminal muchas veces es romantizada mediante música, series o contenido digital, generando un fenómeno cultural complejo donde el miedo y la admiración llegan a mezclarse.",
        ],
      },
      {
        type: "text",
        heading: "El impacto económico y social",
        paragraphs: [
          "La inseguridad no solo afecta vidas humanas; también golpea directamente la economía. Empresas cierran, inversionistas se retiran y pequeños negocios enfrentan cobros ilegales para poder operar. En algunos municipios, la población modifica sus horarios, evita salir de noche y limita actividades cotidianas por temor.",
          "Además, el desplazamiento interno crece silenciosamente. Familias enteras abandonan sus hogares buscando seguridad en otros estados o ciudades. Muchas veces llegan sin apoyo gubernamental y deben reconstruir su vida desde cero.",
        ],
      },
      {
        type: "text",
        heading: "¿Existe una solución?",
        paragraphs: [
          "Expertos coinciden en que no existe una respuesta rápida. Combatir la violencia requiere fortalecer instituciones, mejorar sistemas de justicia, combatir la corrupción y generar oportunidades reales de educación y empleo.",
          "También se ha planteado la necesidad de reconstruir el tejido social: recuperar espacios públicos, apoyar la salud mental de las víctimas y garantizar protección a quienes denuncian delitos.",
          "Mientras tanto, millones de mexicanos continúan viviendo entre la esperanza y la incertidumbre, esperando que algún día la violencia deje de definir la vida diaria del país.",
        ],
      },
    ],
  },
  {
    slug: "podcast-marifer-centeno-jordi-rosado",
    title: "Podcast: Marifer Centeno con Jordi Rosado",
    subtitle:
      "El lenguaje corporal de los famosos: lo que realmente esconden",
    category: "Podcast",
    color: "bg-gold",
    gradient: "from-amber-400 to-orange-500",
    date: "2024-12-11",
    excerpt:
      "En este episodio, Marifer Centeno, especialista en grafología y lenguaje corporal, revela cómo las celebridades muestran —y ocultan— sus verdaderas emociones.",
    coverImage: "GolsGyZWkAAt9PU.jpeg",
    isTranscript: true,
    blocks: [
      {
        type: "transcript",
        heading: "Intro",
        exchanges: [
          {
            speaker: "Jordi Rosado",
            text: "Bienvenidos a un nuevo episodio. Hoy tenemos a una invitada que siempre genera conversación en redes sociales, televisión y espectáculos. Ella es especialista en grafología y lenguaje corporal… ¡Marifer Centeno!",
          },
          {
            speaker: "Marifer Centeno",
            text: "Gracias Jordi, feliz de estar aquí. Hoy vamos a hablar de algo fascinante: cómo el cuerpo revela emociones, inseguridades y hasta secretos que muchas veces la gente intenta ocultar.",
          },
        ],
      },
      {
        type: "image",
        src: "GolsGyZWkAAt9PU.jpeg",
      },
      {
        type: "transcript",
        heading: "Segmento 1: ¿Los famosos pueden fingir emociones?",
        exchanges: [
          {
            speaker: "Jordi Rosado",
            text: "A ver Marifer, cuando vemos a celebridades llorar en entrevistas o en realities… ¿realmente se puede detectar si están fingiendo?",
          },
          {
            speaker: "Marifer Centeno",
            text: "Totalmente. El cuerpo siempre habla. Hay microexpresiones imposibles de controlar. Muchas veces la voz dice una cosa, pero las manos, la postura o incluso la mirada cuentan otra historia.",
          },
          {
            speaker: "Jordi Rosado",
            text: "¿Te ha pasado que ves una entrevista y dices \"esto no me cuadra nada\"?",
          },
          {
            speaker: "Marifer Centeno",
            text: "Todo el tiempo. Hay personas que sonríen mientras muestran señales claras de ansiedad o incomodidad. El cuerpo no sabe mentir tan bien como las palabras.",
          },
        ],
      },
      {
        type: "transcript",
        heading: "Segmento 2: El impacto de la fama",
        exchanges: [
          {
            speaker: "Jordi Rosado",
            text: "¿La fama cambia el lenguaje corporal?",
          },
          {
            speaker: "Marifer Centeno",
            text: "Muchísimo. Hay famosos que desarrollan posturas defensivas porque viven bajo presión constante. Otros crean una personalidad pública completamente distinta a la privada.",
          },
          {
            speaker: "Jordi Rosado",
            text: "Eso debe ser agotador.",
          },
          {
            speaker: "Marifer Centeno",
            text: "Lo es. Imagínate sentirte observado todo el tiempo. Muchas celebridades terminan desarrollando estrés crónico, inseguridad y miedo al rechazo.",
          },
        ],
      },
      {
        type: "image",
        src: "Goxux9PXwAAQYQb.jpeg",
      },
      {
        type: "transcript",
        heading: "Segmento 3: Redes sociales y controversias",
        exchanges: [
          {
            speaker: "Jordi Rosado",
            text: "Las redes sociales ahora destruyen o elevan carreras en minutos.",
          },
          {
            speaker: "Marifer Centeno",
            text: "Exacto. Y eso también se refleja físicamente. Cuando una figura pública atraviesa polémicas fuertes, suele cambiar su manera de hablar, respirar o incluso moverse.",
          },
          {
            speaker: "Jordi Rosado",
            text: "¿Crees que actualmente vivimos demasiado pendientes de la aprobación digital?",
          },
          {
            speaker: "Marifer Centeno",
            text: "Sí. Muchas personas construyen personajes completos para internet. Y mantener esa imagen puede terminar afectando emocionalmente.",
          },
        ],
      },
      {
        type: "transcript",
        heading: "Segmento final",
        exchanges: [
          {
            speaker: "Jordi Rosado",
            text: "Marifer, siempre es impresionante escucharte porque haces que la gente vea detalles que normalmente pasan desapercibidos.",
          },
          {
            speaker: "Marifer Centeno",
            text: "Gracias Jordi. Creo que aprender a observar el lenguaje corporal nos ayuda también a entender mejor nuestras emociones.",
          },
          {
            speaker: "Jordi Rosado",
            text: "Gracias por acompañarnos. Y a toda la gente que escuchó este episodio, recuerden seguirnos para más conversaciones increíbles.",
          },
        ],
      },
    ],
  },
  {
    slug: "la-grafologia",
    title: "La grafología: ¿realmente la letra puede revelar quién eres?",
    category: "Psicología",
    color: "bg-primary",
    gradient: "from-rose-400 to-red-500",
    date: "2024-12-14",
    excerpt:
      "La escritura a mano ha fascinado a científicos, psicólogos y curiosos durante siglos. Entre las disciplinas más polémicas relacionadas con ella se encuentra la grafología.",
    coverImage: "GnFV6w9WsAAZM2f.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "La escritura a mano ha fascinado a científicos, psicólogos y curiosos durante siglos. Entre las disciplinas más polémicas relacionadas con ella se encuentra la grafología, una práctica que afirma que la personalidad de una persona puede interpretarse a través de su forma de escribir. Desde firmas elegantes hasta letras apresuradas y trazos agresivos, los grafólogos sostienen que cada detalle refleja emociones, comportamientos y rasgos psicológicos ocultos.",
          "Aunque para algunos es una herramienta de análisis personal, para otros sigue siendo considerada una pseudociencia. Aun así, la grafología continúa generando interés en ámbitos como el entretenimiento, la selección de personal y el análisis de figuras públicas.",
        ],
      },
      {
        type: "image",
        src: "GnFV6w9WsAAZM2f.jpeg",
      },
      {
        type: "text",
        heading: "¿Qué es la grafología?",
        paragraphs: [
          "La grafología es el estudio e interpretación de la escritura manuscrita con el objetivo de identificar características de personalidad, estado emocional y comportamiento humano. Sus orígenes modernos se remontan al siglo XIX, cuando diversos investigadores europeos comenzaron a relacionar ciertos patrones de escritura con rasgos psicológicos.",
          "Los especialistas en grafología analizan aspectos como: tamaño de las letras, presión del trazo, inclinación de la escritura, separación entre palabras, velocidad al escribir y forma de la firma.",
          "Según esta práctica, una escritura grande podría indicar seguridad y necesidad de atención, mientras que una letra pequeña reflejaría introspección y concentración. Una firma ilegible, por ejemplo, suele interpretarse como una personalidad reservada o compleja.",
        ],
      },
      {
        type: "image",
        src: "GnFV7abWcAArHAR.jpeg",
      },
      {
        type: "text",
        heading: "¿Cómo funciona un análisis grafológico?",
        paragraphs: [
          "Un análisis grafológico no se limita únicamente a observar la caligrafía. El contexto también juega un papel importante: el tipo de papel, la rapidez con la que se escribió el texto e incluso el estado emocional del momento.",
          "Algunos ejemplos comunes de interpretación incluyen:",
          "Letras inclinadas hacia la derecha — Se relacionan con personas emocionales, sociables y expresivas.",
          "Escritura recta — Podría indicar autocontrol y equilibrio emocional.",
          "Trazos fuertes y marcados — Se asocian con determinación, energía o temperamento intenso.",
          "Espacios amplios entre palabras — Pueden reflejar independencia o necesidad de libertad personal.",
          "Letras muy juntas — A veces se interpretan como señales de dependencia emocional o necesidad de compañía.",
        ],
      },
      {
        type: "image",
        src: "GnFV8KrWEAAL0Gz.jpeg",
      },
      {
        type: "text",
        heading: "La grafología en la cultura popular",
        paragraphs: [
          "En los últimos años, la grafología ha ganado popularidad en programas de televisión, redes sociales y contenido viral. Diversos creadores de contenido y especialistas mediáticos han utilizado análisis de firmas y manuscritos de celebridades para interpretar relaciones, emociones y conflictos públicos.",
          "Uno de los nombres más conocidos en el mundo hispano es Maryfer Centeno, quien ha llevado la grafología al terreno del entretenimiento televisivo y digital, analizando desde artistas hasta políticos y figuras virales.",
          "Gracias a plataformas como TikTok y YouTube, millones de personas han comenzado a interesarse en interpretar su propia escritura, convirtiendo la grafología en una tendencia moderna de autoanálisis.",
        ],
      },
      {
        type: "text",
        heading: "¿La grafología tiene respaldo científico?",
        paragraphs: [
          "Aquí es donde surge la controversia. La mayoría de las organizaciones científicas consideran que la grafología no cuenta con evidencia sólida que demuestre su efectividad para evaluar la personalidad de manera precisa.",
          "Diversos estudios psicológicos han concluido que los resultados suelen ser subjetivos y difíciles de comprobar científicamente. Por ello, muchas empresas dejaron de utilizar pruebas grafológicas en procesos de contratación laboral. Sin embargo, sus defensores aseguran que, utilizada correctamente, puede servir como una herramienta complementaria de observación psicológica y emocional.",
        ],
      },
      {
        type: "text",
        heading: "¿Por qué sigue siendo tan popular?",
        paragraphs: [
          "La respuesta es simple: la escritura es profundamente personal. En una época dominada por teclados y pantallas, la letra manuscrita conserva cierto misterio humano que despierta curiosidad.",
          "Además, la idea de que un simple trazo pueda revelar secretos de la personalidad resulta atractiva para muchas personas. La grafología mezcla psicología, intuición y observación, elementos que continúan captando la atención del público.",
        ],
      },
      {
        type: "text",
        heading: "Conclusión",
        paragraphs: [
          "La grafología sigue dividiendo opiniones entre quienes la consideran una herramienta útil de análisis y quienes la ven únicamente como entretenimiento. Lo cierto es que, más allá de la controversia científica, la escritura continúa siendo una expresión única de cada individuo.",
          "Quizá la letra no revele absolutamente todo sobre una persona, pero sí refleja hábitos, emociones y parte de la identidad de quien sostiene el bolígrafo. Y en un mundo cada vez más digital, eso la vuelve todavía más intrigante.",
        ],
      },
    ],
  },
  {
    slug: "contenido-exclusivo-tiktok-comentologia",
    title:
      "Lo que TikTok no te enseñó: los momentos virales que están rompiendo internet",
    category: "Tendencias",
    color: "bg-accent",
    gradient: "from-pink-400 to-rose-600",
    date: "2024-12-17",
    excerpt:
      "Hay videos que duran segundos pero dejan una huella eterna en internet. Caídas épicas, indirectas explosivas, lives fuera de control y momentos que hicieron colapsar TikTok.",
    coverImage: "cover.svg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Hay videos que duran segundos… pero dejan una huella eterna en internet. Caídas épicas, indirectas explosivas, lives fuera de control, romances inesperados, peleas, confesiones y momentos que hicieron colapsar TikTok en cuestión de horas. Y ahora, todo ese contenido llega reunido en un solo lugar.",
          "Bienvenido al espacio donde los clips más comentados, las tendencias más polémicas y los momentos más virales cobran vida sin filtros. Aquí no solo ves lo que fue tendencia… descubres el detrás de cámaras, las reacciones ocultas y el contenido que muchos intentaron borrar.",
          "Cada publicación está seleccionada para quienes viven conectados al mundo del entretenimiento digital, el chisme viral y las historias que dominan las redes sociales. Desde influencers en polémica hasta los videos más absurdamente divertidos del momento, este contenido exclusivo está pensado para quienes siempre quieren ver \"lo que pasó después\".",
        ],
      },
      {
        type: "video",
        src: "video-1.mp4",
      },
      {
        type: "text",
        heading: "¿Qué encontrarás?",
        paragraphs: [
          "Recopilaciones exclusivas de momentos virales",
          "Reacciones y análisis de tendencias de TikTok",
          "Contenido que desapareció de redes",
          "Historias detrás de los videos más compartidos",
          "Memes, edits y momentos que rompieron internet",
        ],
      },
      {
        type: "video",
        src: "video-2.mp4",
      },
      {
        type: "text",
        paragraphs: [
          "Si eres de los que pasa horas en TikTok buscando el próximo escándalo viral o el clip más random del día, este contenido es para ti. Prepárate para entrar al lado más intenso, divertido y caótico de TikTok. Porque mientras todos ven el video viral… aquí descubrirás toda la historia.",
        ],
      },
      {
        type: "video",
        src: "video-3.mp4",
      },
    ],
  },

  {
    slug: "los-25-mitos-del-cafe",
    title: "25 mentiras del café que casi todos creemos",
    category: "Ciencia",
    color: "bg-primary",
    gradient: "from-rose-500 to-pink-600",
    date: "2024-12-20",
    excerpt:
      "El café es una de las bebidas más consumidas del mundo, pero también una de las más rodeadas de mitos. Entre consejos de internet y datos heredados, muchas cosas que damos por ciertas simplemente no son verdad.",
    coverImage: "HIUrfNFXIAAA0jX.jpeg",
    blocks: [
      {
        type: "image",
        src: "HIUrfNFXIAAA0jX.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "El café es una de las bebidas más consumidas del mundo, pero también una de las más rodeadas de mitos. Entre consejos de internet, frases de oficina y 'datos' heredados por generaciones, muchas cosas que damos por ciertas simplemente no son verdad.",
        ],
      },
      {
        type: "text",
        heading: "Mitos populares sobre el café",
        paragraphs: [
          '1. "El café deshidrata muchísimo" — La cafeína tiene un ligero efecto diurético, pero el café también es agua. Tomarlo con moderación no te "seca" automáticamente.',
          '2. "Mientras más oscuro el café, más cafeína tiene" — En realidad, los tuestes oscuros suelen tener un poco menos de cafeína que los claros porque el calor degrada parte de ella.',
          '3. "El espresso tiene más cafeína que cualquier café" — El espresso es más concentrado, sí. Pero una taza grande de café filtrado normalmente tiene más cafeína total.',
          '4. "El café detiene el crecimiento" — No existe evidencia científica sólida de que el café haga más bajita a una persona.',
          '5. "Tomar café en la noche siempre causa insomnio" — Depende muchísimo de la persona, la tolerancia y la cantidad. Hay gente que duerme perfecto después de una taza nocturna.',
          '6. "El descafeinado no tiene cafeína" — Sí tiene. Solo tiene muchísimo menos.',
        ],
      },
      {
        type: "text",
        heading: "Mitos sobre calidad y preparación",
        paragraphs: [
          '7. "El café instantáneo es falso café" — Sigue siendo café real; simplemente fue deshidratado después de prepararse.',
          '8. "El café amargo es café de calidad" — A veces el amargor excesivo significa que el grano está quemado o mal preparado.',
          '9. "Agregar leche destruye todos los beneficios" — No. La leche cambia algunas propiedades, pero el café sigue teniendo antioxidantes y cafeína.',
          '10. "El café siempre sube la presión peligrosamente" — Puede elevarla temporalmente en algunas personas, pero no significa automáticamente un problema grave.',
          '11. "Tomar café daña el corazón" — El consumo moderado generalmente no se relaciona con daño cardíaco en personas sanas.',
          '12. "El café premium siempre viene caro" — El precio no garantiza calidad. Mucho café costoso vive más del marketing que del sabor.',
        ],
      },
      {
        type: "text",
        heading: "Mitos sobre efectos en el cuerpo",
        paragraphs: [
          '13. "El café frío tiene menos cafeína" — Depende del método. Algunos cold brew tienen muchísima más cafeína que el café caliente.',
          '14. "El café quita completamente el sueño" — Puede ayudarte a sentirte más despierto, pero no reemplaza dormir bien.',
          '15. "El café vacío el estómago y adelgaza" — No es una fórmula mágica para bajar de peso.',
          '16. "Entre más café tomes, más productivo eres" — Después de cierto punto solo obtienes ansiedad, manos temblorosas y pensamientos a 300 km/h.',
          '17. "El mejor café siempre debe tomarse negro" — Eso es gusto personal. Disfrutarlo con leche, hielo o azúcar no te hace "menos conocedor".',
          '18. "El café causa adicción igual que drogas duras" — La cafeína puede generar dependencia leve, pero no funciona igual que sustancias altamente adictivas.',
        ],
      },
      {
        type: "text",
        heading: "Mitos sobre sabor y efecto real",
        paragraphs: [
          '19. "Todos los cafés saben igual" — El origen, el tostado y el método cambian muchísimo el sabor.',
          '20. "El café gourmet siempre sabe fuerte" — Un buen café puede ser suave, dulce, floral o afrutado.',
          '21. "Tomar café acelera el metabolismo de forma brutal" — El efecto existe, pero es pequeño. No convierte mágicamente el cuerpo en un horno industrial.',
          '22. "Si no te despierta, ya no sirve" — La tolerancia cambia el efecto. Eso no significa que el café esté "débil".',
          '23. "El café recién molido siempre será perfecto" — Si el grano es malo, molerlo fresco no hace milagros.',
          '24. "El café es malo para todos los jóvenes" — La clave es la moderación. El exceso sí puede causar nerviosismo o afectar el sueño.',
          '25. "Necesitas café para funcionar" — Muchos sienten eso... hasta que duermen ocho horas seguidas por primera vez en meses.',
        ],
      },
      {
        type: "text",
        paragraphs: [
          "☕ Al final, el café no es un villano ni una poción mágica. Es simplemente una bebida con ciencia, cultura y muchísimos mitos alrededor.",
        ],
      },
    ],
  },
  {
    slug: "david-sinclair-y-el-envejecimiento-en-ratones",
    title: "David Sinclair y el envejecimiento en ratones",
    subtitle: "Los experimentos que revolucionaron el debate sobre la longevidad",
    category: "Ciencia",
    color: "bg-accent",
    gradient: "from-violet-400 to-purple-600",
    date: "2024-12-23",
    excerpt:
      "Durante décadas, el envejecimiento fue considerado inevitable. Pero un científico australiano llamado David Sinclair se convirtió en una de las figuras más polémicas al afirmar algo que parecía ciencia ficción: el envejecimiento podría ralentizarse e incluso revertirse parcialmente.",
    coverImage: "Gv5jpfDXYAAeAK8.jpeg",
    blocks: [
      {
        type: "image",
        src: "Gv5jpfDXYAAeAK8.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Durante décadas, el envejecimiento fue considerado un proceso inevitable: las células se desgastan, los órganos fallan y el cuerpo simplemente deja de funcionar con la misma eficiencia. Sin embargo, un científico australiano llamado David Sinclair se convirtió en una de las figuras más polémicas y famosas del mundo de la longevidad al afirmar algo que parecía ciencia ficción: el envejecimiento podría ralentizarse... e incluso revertirse parcialmente.",
          "Gran parte de esa fama surgió gracias a una serie de experimentos realizados en ratones de laboratorio.",
        ],
      },
      {
        type: "text",
        heading: "¿Quién es David Sinclair?",
        paragraphs: [
          "David Sinclair es profesor en la Harvard Medical School y se especializa en genética y biología del envejecimiento. Sus investigaciones se enfocan en comprender por qué envejecemos y cómo ciertos mecanismos celulares podrían 'reiniciar' partes del cuerpo dañadas por el tiempo.",
          "Sinclair ganó notoriedad mundial por estudiar moléculas relacionadas con la energía celular y la reparación del ADN, especialmente las llamadas sirtuinas, proteínas asociadas con la supervivencia celular y el estrés biológico.",
          "Su trabajo mezcla genética, metabolismo y biotecnología, pero también ha generado controversia debido a las enormes expectativas que muchas personas tienen sobre una posible 'cura' para el envejecimiento.",
        ],
      },
      {
        type: "text",
        heading: "La teoría: el envejecimiento como pérdida de información",
        paragraphs: [
          "Según Sinclair, el envejecimiento no ocurre solamente porque las células se dañan, sino porque pierden información epigenética. La epigenética funciona como un sistema de instrucciones que le dice a cada célula qué debe hacer. Aunque el ADN siga presente, con el tiempo esas instrucciones comienzan a desorganizarse.",
          "En palabras simples: el ADN sería el hardware y la epigenética sería el software. La hipótesis de Sinclair es que, si ese 'software' puede restaurarse, el cuerpo podría recuperar funciones juveniles.",
        ],
      },
      {
        type: "text",
        heading: "El experimento que rejuveneció tejidos en ratones",
        paragraphs: [
          "Uno de los experimentos más famosos del equipo de Sinclair consistió en activar genes conocidos como factores de Yamanaka, utilizados originalmente para convertir células adultas en células madre. El problema es que activar esos genes completamente puede ser peligroso y causar tumores. Por eso, el equipo buscó una 'reprogramación parcial': rejuvenecer las células sin borrar su identidad.",
          "En ratones envejecidos observaron resultados sorprendentes: mejora en tejidos dañados, recuperación parcial de nervios ópticos, incremento en funciones celulares asociadas con juventud biológica y cambios epigenéticos similares a los de animales más jóvenes. Uno de los estudios más comentados mostró que ratones viejos recuperaron parte de su visión después de un tratamiento genético experimental.",
        ],
      },
      {
        type: "text",
        heading: "El papel del NAD+",
        paragraphs: [
          "Otro punto central en las investigaciones de Sinclair es una molécula llamada NAD+, que participa en procesos relacionados con producción de energía, reparación celular, funcionamiento de las mitocondrias y activación de sirtuinas. Sinclair sostiene que los niveles de NAD+ disminuyen con la edad y que restaurarlos podría mejorar la salud celular.",
          "Por eso investigó compuestos como NMN (Nicotinamida Mononucleótido), Resveratrol y NR (Nicotinamida Ribósido). En algunos estudios con ratones, estos compuestos parecían mejorar metabolismo, resistencia física y marcadores biológicos relacionados con envejecimiento.",
        ],
      },
      {
        type: "text",
        heading: "¿Qué tan reales son estos resultados?",
        paragraphs: [
          "Muchos científicos consideran que las investigaciones de Sinclair ayudaron a impulsar enormemente el campo de la longevidad. Hoy existen laboratorios alrededor del mundo investigando reprogramación celular, terapias epigenéticas, senescencia celular, regeneración de tejidos y extensión de vida saludable. La idea ya no parece completamente imposible.",
          "Sin embargo, muchos investigadores critican que algunos resultados han sido exagerados mediáticamente. Los principales cuestionamientos: los ratones no son humanos y muchos tratamientos que funcionan en ratones fracasan en personas. Además, aunque existen ensayos en humanos, todavía no hay pruebas definitivas de que puedan extender significativamente la vida humana.",
          "Sinclair también ha sido criticado por la enorme industria de suplementos y biotecnología que surgió alrededor de estas investigaciones, donde muchos productos comerciales usan términos como 'anti-aging', 'rejuvenecimiento' o 'edad biológica' sin evidencia contundente.",
        ],
      },
      {
        type: "text",
        heading: "Conclusión",
        paragraphs: [
          "¿Estamos cerca de revertir el envejecimiento? La respuesta corta es: todavía no. Pero el trabajo de David Sinclair cambió la conversación científica sobre el envejecimiento. Antes la idea dominante era que el deterioro era irreversible. Ahora numerosos laboratorios consideran posible reparar parcialmente ciertos daños asociados con la edad.",
          "Eso no significa inmortalidad ni que exista una píldora capaz de detener el tiempo. Pero sí implica que la ciencia está empezando a tratar el envejecimiento como un proceso biológico modificable, y no únicamente como un destino inevitable. Quizás en las próximas décadas, los descubrimientos iniciados en pequeños laboratorios con ratones terminen cambiando la medicina humana para siempre.",
        ],
      },
    ],
  },
  {
    slug: "el-aterrizaje-del-perseverance-rover-en-marte",
    title: "El aterrizaje del Perseverance rover",
    subtitle: "La misión que llevó a la humanidad un paso más cerca de descubrir vida en Marte",
    category: "Ciencia",
    color: "bg-primary",
    gradient: "from-red-400 to-orange-500",
    date: "2024-12-26",
    excerpt:
      "El 18 de febrero de 2021 ocurrió uno de los eventos más importantes de la exploración espacial moderna. El Perseverance rover logró aterrizar en el cráter Jezero de Marte, una misión destinada a buscar señales de vida antigua.",
    coverImage: "GxDhBLtWIAAfzKo.jpeg",
    blocks: [
      {
        type: "image",
        src: "GxDhBLtWIAAfzKo.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "El 18 de febrero de 2021 ocurrió uno de los eventos más importantes de la exploración espacial moderna. Después de viajar millones de kilómetros por el espacio, la sonda robótica que transportaba al Perseverance rover logró aterrizar exitosamente en el hemisferio norte del planeta Marte, específicamente en el famoso cráter Jezero.",
          "La misión fue desarrollada por la NASA y representó años de investigación, ingeniería y preparación científica. Su objetivo no era solamente recorrer Marte: la verdadera meta era buscar señales de vida antigua y preparar el camino para futuras misiones humanas.",
        ],
      },
      {
        type: "text",
        heading: "¿Qué es el Perseverance?",
        paragraphs: [
          "El Perseverance rover es un vehículo robótico diseñado para explorar la superficie marciana. Su tamaño es similar al de un automóvil pequeño y está equipado con cámaras de alta resolución, sensores científicos, micrófonos y herramientas capaces de analizar rocas y suelo marciano. Fue lanzado desde la Tierra el 30 de julio de 2020 a bordo de un cohete Atlas V y tardó casi siete meses en llegar a Marte.",
        ],
      },
      {
        type: "text",
        heading: 'Los "siete minutos de terror"',
        paragraphs: [
          "Aterrizar en Marte es extremadamente difícil. La atmósfera marciana es demasiado delgada para frenar completamente una nave usando paracaídas, pero también es lo suficientemente densa para generar temperaturas enormes durante la entrada. Los ingenieros llaman a esta fase 'los siete minutos de terror'.",
          "Durante ese corto periodo, la nave debe realizar automáticamente decenas de maniobras sin intervención humana, ya que la señal entre Marte y la Tierra tarda varios minutos en viajar. El aterrizaje incluyó escudo térmico, paracaídas supersónico, sistema de navegación automática, cohetes de descenso y una plataforma aérea llamada Sky Crane que bajó cuidadosamente el rover mediante cables.",
          "Todo tenía que funcionar perfectamente. Un solo error habría destruido la misión. Pero finalmente, el mundo escuchó las palabras que confirmaron el éxito: 'Touchdown confirmed'.",
        ],
      },
      {
        type: "text",
        heading: "¿Por qué el cráter Jezero?",
        paragraphs: [
          "El lugar de aterrizaje no fue elegido al azar. El cráter Jezero es una enorme formación geológica que, según los científicos, hace miles de millones de años contenía agua líquida. Las imágenes satelitales muestran antiguos canales y un delta fluvial, señales de que alguna vez existió un lago marciano. Y donde hubo agua... podría haber existido vida microbiana.",
        ],
      },
      {
        type: "text",
        heading: "Los objetivos científicos",
        paragraphs: [
          "El rover analiza minerales y estructuras en las rocas marcianas para detectar posibles biofirmas, señales químicas asociadas con microorganismos antiguos. También perfora rocas y almacena muestras en tubos especiales para que futuras misiones puedan recogerlos y traerlos a la Tierra.",
          "Además estudia el clima marciano —temperaturas extremas, tormentas de polvo, radiación y composición atmosférica— información esencial para futuras misiones humanas. El rover transportó el helicóptero experimental Ingenuity, que realizó el primer vuelo controlado de la historia en otro planeta.",
        ],
      },
      {
        type: "text",
        heading: "Imágenes y sonidos de otro mundo",
        paragraphs: [
          "Por primera vez, la humanidad pudo escuchar sonidos reales de Marte gracias a los micrófonos del rover. Capturó panorámicas en alta resolución, videos de aterrizaje, grabaciones del viento marciano y fotografías de formaciones rocosas antiguas. Estas imágenes ayudaron a acercar Marte al público como nunca antes.",
        ],
      },
      {
        type: "text",
        heading: "Conclusión",
        paragraphs: [
          "Desde su llegada, el rover ha encontrado evidencia de que el cráter Jezero tuvo condiciones potencialmente habitables: rocas sedimentarias formadas por agua, minerales asociados con ambientes húmedos, compuestos orgánicos y evidencia de actividad geológica antigua. Aunque esto no prueba la existencia de vida, sí fortalece la idea de que Marte pudo haber sido muy diferente en el pasado.",
          "La misión del Perseverance es parte de un proyecto mucho más grande. Agencias espaciales y compañías privadas sueñan con enviar seres humanos a Marte. Mientras continúa recorriendo el cráter Jezero, el Perseverance sigue ampliando nuestro conocimiento sobre el planeta rojo y acercando a la humanidad a una nueva era de exploración espacial.",
        ],
      },
    ],
  },
  {
    slug: "christina-koch-la-mujer-que-rompio-records-en-el-espacio",
    title: "Christina Koch: la mujer que rompió récords en el espacio",
    subtitle: "La astronauta que viajó alrededor de la Luna y marcó historia",
    category: "Ciencia",
    color: "bg-accent",
    gradient: "from-blue-400 to-indigo-600",
    date: "2024-12-29",
    excerpt:
      "En la exploración espacial moderna, pocos nombres han ganado tanta relevancia como Christina Koch. Desde largas estancias en la ISS hasta participar en Artemis, representa una nueva generación de exploradores.",
    coverImage: "HFlyWpOW4AACLWl.jpeg",
    blocks: [
      {
        type: "image",
        src: "HFlyWpOW4AACLWl.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "En la historia de la exploración espacial moderna, pocos nombres han ganado tanta relevancia en los últimos años como el de Christina Koch. Ingeniera, científica y astronauta de la NASA, Koch se convirtió en una figura histórica gracias a sus récords en el espacio y su participación en algunas de las misiones más importantes de la nueva era espacial.",
          "Desde largas estancias en la Estación Espacial Internacional hasta convertirse en una de las primeras personas en participar en el programa Artemis, Christina Koch representa una nueva generación de exploradores espaciales.",
        ],
      },
      {
        type: "text",
        heading: "¿Quién es Christina Koch?",
        paragraphs: [
          "Christina Koch nació el 29 de enero de 1979 en Grand Rapids, Michigan. Desde joven mostró interés por la ciencia, la ingeniería y la exploración. Estudió Ingeniería Eléctrica y Física en la Universidad Estatal de Carolina del Norte, donde también obtuvo una maestría en ingeniería.",
          "Antes de convertirse en astronauta, trabajó en proyectos científicos relacionados con instrumentación espacial y participó en investigaciones en algunos de los lugares más extremos del planeta: Antártida, Groenlandia, Alaska y Samoa Americana. Estas experiencias ayudaron a prepararla física y mentalmente para las condiciones extremas del espacio.",
        ],
      },
      {
        type: "text",
        heading: "El récord de permanencia en el espacio",
        paragraphs: [
          "En 2013, Koch fue seleccionada como astronauta por la NASA. Después de años de entrenamiento, realizó su primera misión espacial en 2019 rumbo a la Estación Espacial Internacional. Allí permaneció 328 días consecutivos en el espacio, convirtiéndose en la mujer con la estancia espacial continua más larga de la historia hasta ese momento.",
          "Durante la misión orbitó la Tierra más de 5,000 veces, recorrió aproximadamente 139 millones de millas y participó en cientos de experimentos científicos. La investigación ayudó a estudiar cómo afecta el espacio al cuerpo humano, información clave para futuras misiones a Marte y la Luna.",
        ],
      },
      {
        type: "text",
        heading: "La primera caminata espacial femenina",
        paragraphs: [
          "En octubre de 2019, Christina Koch y la astronauta Jessica Meir realizaron la primera caminata espacial completamente femenina de la historia. El evento fue considerado un momento histórico para la representación de las mujeres en la exploración espacial. Durante la caminata repararon un sistema eléctrico de la estación mientras flotaban a cientos de kilómetros sobre la Tierra.",
          "Koch terminó realizando seis caminatas espaciales en total, acumulando más de 42 horas fuera de la estación espacial.",
        ],
      },
      {
        type: "text",
        heading: "Artemis II y el regreso a la Luna",
        paragraphs: [
          "Después de su histórica misión en la ISS, Koch fue seleccionada para formar parte de Artemis II, la misión que representa el regreso de astronautas al entorno lunar por primera vez desde la era Apolo. Con Artemis II, Christina Koch se convirtió en la primera mujer en viajar más allá de la órbita baja terrestre y una de las primeras mujeres en participar en una misión alrededor de la Luna.",
          "La misión tiene como objetivo probar sistemas de navegación y supervivencia antes de futuras misiones que buscarán llevar nuevamente seres humanos a la superficie lunar.",
        ],
      },
      {
        type: "text",
        heading: "Conclusión",
        paragraphs: [
          "Más allá de los récords y las misiones históricas, Christina Koch se convirtió en una figura inspiradora para jóvenes interesados en ciencia, tecnología, ingeniería, astronomía y exploración espacial. Su carrera demuestra cómo la combinación de preparación científica, disciplina y curiosidad puede llevar a una persona desde laboratorios terrestres hasta el espacio profundo.",
          "Mientras la NASA continúa preparándose para regresar a la Luna y eventualmente llegar a Marte, figuras como Christina Koch ayudan a demostrar que la exploración espacial del futuro será más diversa, tecnológica y ambiciosa que nunca.",
        ],
      },
    ],
  },
  {
    slug: "entrevista-exclusiva-mafiantv-polemica-internet",
    title: "Entrevista exclusiva con MafianTV",
    subtitle: "Polémica, internet y el lado oculto de las comunidades digitales",
    category: "Entrevista",
    color: "bg-gold",
    gradient: "from-amber-400 to-orange-500",
    date: "2024-12-31",
    excerpt:
      "En el mundo actual de internet, donde las polémicas se convierten en tendencia en cuestión de horas, existen creadores que destacan por su personalidad directa. Hablamos con MafianTV sobre comunidades digitales y el impacto de vivir conectado.",
    coverImage: "GnuJg_IXMAAG_bc.jpeg",
    isTranscript: true,
    blocks: [
      {
        type: "image",
        src: "GnuJg_IXMAAG_bc.jpeg",
      },
      {
        type: "transcript",
        heading: '"Internet ya no es solamente entretenimiento"',
        exchanges: [
          {
            speaker: "Entrevistador",
            text: "¿Cómo describirías el internet actual comparado con el de hace unos años?",
          },
          {
            speaker: "MafianTV",
            text: "Antes internet se sentía más libre y más espontáneo. Hoy todo se mueve demasiado rápido. Una discusión pequeña puede convertirse en una guerra digital en minutos. Ya no es solo entretenimiento; ahora internet mueve reputaciones, dinero y comunidades completas.",
          },
        ],
      },
      {
        type: "transcript",
        heading: "Las comunidades digitales y el anonimato",
        exchanges: [
          {
            speaker: "Entrevistador",
            text: "Muchas comunidades online viven entre el humor, las filtraciones y las polémicas. ¿Por qué crees que ocurre eso?",
          },
          {
            speaker: "MafianTV",
            text: "El anonimato cambia completamente cómo se comporta la gente. Hay personas que en internet dicen cosas que jamás dirían cara a cara. Y cuando juntas eso con audiencias grandes, egos y conflictos, terminas creando un ambiente muy intenso. Las comunidades digitales suelen funcionar como micro sociedades, con reglas internas, líderes, rivalidades y narrativas propias.",
          },
        ],
      },
      {
        type: "transcript",
        heading: "La presión de crear contenido",
        exchanges: [
          {
            speaker: "Entrevistador",
            text: "¿La gente realmente entiende lo difícil que puede ser vivir de internet?",
          },
          {
            speaker: "MafianTV",
            text: "No siempre. Mucha gente piensa que solo es prender cámara y ya, pero detrás hay presión constante. Tienes que mantener relevancia, cuidar tu comunidad y lidiar con críticas todos los días. Uno de los mayores problemas es que los creadores rara vez pueden desconectarse completamente.",
          },
        ],
      },
      {
        type: "transcript",
        heading: "El impacto de las polémicas online",
        exchanges: [
          {
            speaker: "Entrevistador",
            text: "¿Qué opinas sobre la cultura de cancelación y las funas en internet?",
          },
          {
            speaker: "MafianTV",
            text: "Hay casos donde las críticas son válidas, claro. Pero también existe una obsesión por destruir personas públicamente. Mucha gente participa en ataques masivos sin siquiera conocer todo el contexto. Las redes sociales amplifican emociones colectivas y hacen que las discusiones escalen rápidamente.",
          },
        ],
      },
      {
        type: "transcript",
        heading: "El futuro del contenido digital",
        exchanges: [
          {
            speaker: "Entrevistador",
            text: "¿Cómo imaginas internet dentro de cinco o diez años?",
          },
          {
            speaker: "MafianTV",
            text: "Más inteligencia artificial, más automatización y probablemente más caos también. Pero al final la gente siempre va a buscar comunidades donde sentirse parte de algo. El contenido en vivo seguirá creciendo porque las audiencias buscan experiencias más espontáneas y menos producidas.",
          },
        ],
      },
      {
        type: "transcript",
        heading: '"Las comunidades pueden construir... o destruir"',
        exchanges: [
          {
            speaker: "MafianTV",
            text: "Internet puede ayudar muchísimo a una persona, darle amistades, oportunidades y hasta trabajo. Pero también puede destruir emocionalmente a alguien si todo se convierte en odio constante. Las redes sociales ya no son solamente plataformas de entretenimiento, sino espacios donde ocurren conflictos, movimientos culturales y debates públicos en tiempo real.",
          },
        ],
      },
      {
        type: "text",
        heading: "Conclusión",
        paragraphs: [
          "La entrevista con MafianTV muestra el lado complejo del entretenimiento digital moderno. Entre comunidades online, controversias, fama instantánea y presión constante, los creadores de contenido viven en un entorno que cambia todos los días y donde cualquier publicación puede convertirse en tendencia global.",
          "Y aunque internet continúa evolucionando a una velocidad enorme, algo parece mantenerse igual: la necesidad humana de conectar, expresarse y formar parte de una comunidad.",
        ],
      },
    ],
  },
  {
    slug: "conciliacion-maryfer-mr-doctor",
    title: "La conciliación entre Maryfer Centeno y Mr. Doctor",
    subtitle: "Así vivimos el encuentro y captamos imágenes exclusivas",
    category: "Tendencias",
    color: "bg-accent",
    hiddenFromHome: true,
    gradient: "from-pink-400 to-rose-600",
    date: "2024-12-05",
    excerpt:
      "Después de meses de polémicas, indirectas en redes sociales y una batalla mediática que mantuvo dividida a gran parte de internet, finalmente ocurrió uno de los encuentros más esperados por la comunidad digital mexicana: la conciliación entre Maryfer Centeno y Mr. Doctor.",
    coverImage: "G1ngxl_XQAA5Y1e.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Después de meses de polémicas, indirectas en redes sociales y una batalla mediática que mantuvo dividida a gran parte de internet, finalmente ocurrió uno de los encuentros más esperados por la comunidad digital mexicana: la conciliación entre Maryfer Centeno y Mr. Doctor. El momento reunió cámaras, medios independientes y decenas de curiosos que buscaban conocer el desenlace de una de las controversias más comentadas de los últimos meses.",
          "Nuestro equipo estuvo presente durante la llegada de ambas figuras públicas y logró captar fotografías exclusivas del ambiente previo a la reunión, así como de los momentos posteriores al encuentro. Desde temprano, el lugar comenzó a llenarse de creadores de contenido, periodistas y seguidores atentos a cualquier declaración.",
        ],
      },
      {
        type: "image",
        src: "G1ngxl_XQAA5Y1e.jpeg",
      },
      {
        type: "text",
        heading: "El contexto del encuentro",
        paragraphs: [
          "Maryfer Centeno arribó acompañada de su equipo legal y de comunicación, manteniendo una actitud reservada ante los medios. Minutos después apareció Mr. Doctor, quien también evitó hacer declaraciones extensas antes de ingresar al recinto. A pesar de la tensión acumulada por semanas de enfrentamientos públicos, el ambiente se mantuvo relativamente tranquilo durante el inicio de la conciliación.",
          "Las diferencias entre ambos creadores habían escalado rápidamente en plataformas digitales, donde videos, reacciones y comentarios encendieron el debate entre seguidores de ambas partes. La situación se convirtió en tendencia en múltiples ocasiones, alimentando discusiones sobre los límites del contenido en internet, las críticas públicas y la responsabilidad de los influencers frente a sus audiencias.",
        ],
      },
      {
        type: "text",
        heading: "La reunión y su desenlace",
        paragraphs: [
          "Durante varias horas se llevaron a cabo conversaciones privadas entre representantes y abogados de ambas partes. Aunque no se revelaron todos los detalles de la reunión, trascendió que el objetivo principal era buscar una resolución que evitara que el conflicto siguiera creciendo mediáticamente.",
          "A la salida, el ambiente lucía mucho más relajado. Ambos creadores abandonaron el lugar por separado, pero sin la tensión visible que había marcado sus apariciones anteriores. Fue precisamente en ese momento cuando logramos capturar algunas de las imágenes más comentadas de la jornada, mostrando el cierre de un episodio que mantuvo a miles de usuarios pendientes en redes sociales.",
        ],
      },
      {
        type: "text",
        heading: "Un fenómeno digital",
        paragraphs: [
          "Más allá de la controversia, la conciliación dejó claro el enorme impacto que tienen actualmente los conflictos digitales dentro del entretenimiento y la cultura de internet en México. Lo que comenzó como una disputa entre creadores terminó convirtiéndose en un fenómeno viral seguido por millones de personas.",
          "Las fotografías exclusivas y la cobertura completa del encuentro rápidamente comenzaron a circular entre páginas de espectáculos y comunidades digitales, consolidando este momento como uno de los eventos más comentados dentro del ecosistema de creadores de contenido en habla hispana.",
        ],
      },
    ],
  },
  {
    slug: "aves-extintas-por-el-ser-humano",
    title: "El dodo: el símbolo mundial de la extinción",
    subtitle: "Y otras aves que desaparecieron por la actividad humana",
    category: "Ciencia",
    color: "bg-primary",
    gradient: "from-emerald-500 to-teal-600",
    date: "2024-12-15",
    excerpt:
      "El dodo habitaba la isla Mauricio, en el océano Índico. Era un ave no voladora que evolucionó sin depredadores naturales, lo que hizo que perdiera el miedo hacia otros animales. Cuando los marineros europeos llegaron a la isla durante el siglo XVII, encontraron una especie extremadamente vulnerable.",
    coverImage: "Gy52Mz_WgAAGPeL.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "El dodo habitaba la isla Mauricio, en el océano Índico. Era un ave no voladora que evolucionó sin depredadores naturales, lo que hizo que perdiera el miedo hacia otros animales. Cuando los marineros europeos llegaron a la isla durante el siglo XVII, encontraron una especie extremadamente vulnerable.",
          "Contrario a muchas representaciones populares, el dodo no era un animal torpe o \"tonto\". Su comportamiento confiado simplemente era producto de un entorno aislado donde nunca necesitó desarrollar mecanismos de defensa frente a humanos o mamíferos depredadores.",
        ],
      },
      {
        type: "image",
        src: "Gy52Mz_WgAAGPeL.jpeg",
      },
      {
        type: "text",
        heading: "El dodo",
        paragraphs: [
          "La extinción del dodo ocurrió por varios factores combinados:",
          "Caza por parte de marineros.",
          "Destrucción de su hábitat.",
          "Introducción de ratas, cerdos y monos que consumían sus huevos.",
          "Se cree que desapareció alrededor de 1681, convirtiéndose en una de las primeras especies documentadas en extinguirse directamente por actividad humana.",
        ],
      },
      {
        type: "text",
        heading: "El moa: las aves gigantes de Nueva Zelanda",
        paragraphs: [
          "Mucho antes de que Nueva Zelanda fuera colonizada por europeos, existían aves gigantes conocidas como moas. Algunas especies podían superar los tres metros de altura cuando estiraban el cuello y pesar más de 200 kilogramos.",
          "Los moas tampoco podían volar y dominaron los ecosistemas terrestres de la región durante miles de años. No tenían grandes depredadores naturales, salvo el águila de Haast, una enorme rapaz considerada una de las aves depredadoras más grandes de la historia.",
          "La llegada de los primeros pobladores polinesios alrededor del siglo XIII cambió todo. La caza intensiva y la quema de bosques redujeron rápidamente las poblaciones hasta provocar su desaparición en apenas unos siglos.",
          "Hoy, los restos fósiles encontrados en cuevas y pantanos permiten reconstruir cómo lucían estas impresionantes aves.",
        ],
      },
      {
        type: "text",
        heading: "El alca gigante: el \"pingüino\" del Atlántico",
        paragraphs: [
          "El alca gigante vivía en las costas frías del Atlántico Norte y tenía un aspecto similar al de un pingüino, aunque no estaba relacionado directamente con ellos. Era excelente nadadora, pero incapaz de volar.",
          "Durante siglos fue cazada por su carne, grasa y plumas. Las colonias reproductivas eran fáciles de localizar, lo que aceleró la disminución de la especie.",
          "En el siglo XIX, además de la explotación comercial, los coleccionistas comenzaron a pagar grandes cantidades por especímenes disecados y huevos, aumentando todavía más la presión sobre las últimas poblaciones.",
          "Los dos últimos ejemplares conocidos fueron asesinados en Islandia en 1844, marcando oficialmente la extinción de la especie.",
        ],
      },
      {
        type: "text",
        heading: "La paloma migratoria: miles de millones hasta desaparecer",
        paragraphs: [
          "La historia de la paloma migratoria es una de las más impactantes de la era moderna. En el siglo XIX existían cantidades gigantescas de estas aves en Norteamérica. Algunos registros describen bandadas tan enormes que oscurecían el cielo durante horas.",
          "Se estima que llegaron a existir entre 3 y 5 mil millones de individuos.",
          "Pero precisamente esa abundancia generó la falsa idea de que nunca podrían extinguirse. La caza industrial y la destrucción masiva de bosques acabaron rápidamente con la especie.",
          "El último ejemplar conocido, llamado Martha, murió en el zoológico de Cincinnati en 1914.",
          "La desaparición de la paloma migratoria se convirtió en un caso emblemático para la conservación moderna y ayudó a impulsar leyes de protección animal en Estados Unidos.",
        ],
      },
      {
        type: "text",
        heading: "El canto perdido del Kauaʻi ʻōʻō",
        paragraphs: [
          "Pocas historias son tan tristes como la del Kauaʻi ʻōʻō, un ave originaria de Hawái. Su población disminuyó debido a enfermedades introducidas, pérdida de hábitat y especies invasoras.",
          "En la década de 1980 se grabó el canto de uno de los últimos machos conocidos. Lo más impactante es que el ave parecía emitir llamados esperando respuesta de una hembra que nunca llegó.",
          "Esa grabación terminó convirtiéndose en uno de los sonidos más melancólicos de la historia de la conservación animal.",
          "Actualmente, el Kauaʻi ʻōʻō es considerado oficialmente extinto.",
        ],
      },
      {
        type: "text",
        heading: "Por qué desaparecen tantas aves en islas",
        paragraphs: [
          "Las islas han sido especialmente vulnerables a las extinciones. Muchas aves evolucionaron allí sin depredadores terrestres, perdiendo la capacidad de volar o desarrollando comportamientos extremadamente confiados.",
          "Cuando llegaron humanos junto con ratas, gatos, perros y cerdos, los ecosistemas cambiaron de forma radical.",
          "Las especies insulares suelen tener poblaciones pequeñas, distribución limitada, baja diversidad genética y poca adaptación a depredadores externos. Por eso, una alteración relativamente pequeña puede provocar un colapso irreversible.",
        ],
      },
      {
        type: "text",
        heading: "Las aves que aún podrían desaparecer",
        paragraphs: [
          "Aunque estas historias pertenecen al pasado, muchas especies modernas enfrentan amenazas similares. La destrucción de hábitats, el cambio climático y el tráfico ilegal continúan poniendo en peligro aves alrededor del mundo.",
          "Algunas especies críticamente amenazadas incluyen el kakapo de Nueva Zelanda, el cóndor de California, varias especies de guacamayas tropicales y aves marinas afectadas por contaminación plástica.",
          "La diferencia es que hoy existe mayor conciencia científica y programas de conservación que intentan evitar nuevas pérdidas irreversibles.",
        ],
      },
      {
        type: "text",
        heading: "El legado de las aves extintas",
        paragraphs: [
          "Las aves extintas no son solo curiosidades históricas. Representan advertencias sobre la rapidez con la que un ecosistema puede cambiar y sobre el impacto humano en la biodiversidad.",
          "El dodo, el moa y muchas otras especies desaparecieron antes de que la humanidad entendiera realmente las consecuencias de sus acciones. Sus historias ayudaron a impulsar movimientos de conservación que hoy buscan proteger a las especies que aún sobreviven.",
          "Cada fósil, ilustración y grabación perdida recuerda una realidad incómoda: una vez que una especie desaparece, no hay manera de recuperarla completamente.",
        ],
      },
    ],
  },
  {
    slug: "monitoreo-del-sueno-y-sueno-rem",
    title: "El monitoreo del sueño y la importancia del sueño REM",
    subtitle: "Cómo la tecnología está revelando lo que ocurre mientras dormimos",
    category: "Ciencia",
    color: "bg-accent",
    gradient: "from-cyan-400 to-blue-500",
    date: "2024-12-25",
    excerpt:
      "Dormir parece una actividad simple: cerrar los ojos, descansar y despertar al día siguiente. Sin embargo, mientras el cuerpo permanece aparentemente inmóvil, el cerebro atraviesa una compleja serie de procesos biológicos fundamentales para la memoria, las emociones, el sistema inmunológico y la salud mental.",
    coverImage: "GyUcF8EXEAEViEZ.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Dormir parece una actividad simple: cerrar los ojos, descansar y despertar al día siguiente. Sin embargo, mientras el cuerpo permanece aparentemente inmóvil, el cerebro atraviesa una compleja serie de procesos biológicos fundamentales para la memoria, las emociones, el sistema inmunológico y la salud mental. En los últimos años, el monitoreo del sueño se ha convertido en una de las áreas de mayor crecimiento dentro de la tecnología de salud y bienestar, especialmente por el interés en comprender mejor el sueño REM, una de las fases más importantes del descanso humano.",
          "Relojes inteligentes, anillos biométricos, aplicaciones móviles y dispositivos médicos ahora prometen medir la calidad del sueño con niveles de precisión cada vez mayores. Pero detrás de las gráficas y puntuaciones que muestran estas herramientas existe una enorme cantidad de ciencia relacionada con el funcionamiento del cerebro durante la noche.",
        ],
      },
      {
        type: "image",
        src: "GyUcF8EXEAEViEZ.jpeg",
      },
      {
        type: "text",
        heading: "¿Qué es exactamente el sueño?",
        paragraphs: [
          "El sueño es un estado biológico activo regulado por el cerebro y el sistema nervioso. Durante décadas se creyó que dormir era simplemente una etapa de \"apagado\" del organismo, pero hoy se sabe que muchas funciones cerebrales aumentan su actividad mientras dormimos.",
          "El sueño cumple funciones esenciales como: consolidación de la memoria, regulación emocional, reparación celular, producción hormonal, fortalecimiento del sistema inmunológico y eliminación de desechos metabólicos del cerebro.",
          "Cuando una persona duerme, no permanece en un único estado continuo. El cerebro atraviesa ciclos compuestos por distintas fases que se repiten varias veces durante la noche.",
        ],
      },
      {
        type: "text",
        heading: "Las fases del sueño",
        paragraphs: [
          "El sueño se divide principalmente en dos grandes categorías: sueño NREM (Non-Rapid Eye Movement) y sueño REM (Rapid Eye Movement). Cada ciclo completo dura aproximadamente entre 90 y 120 minutos.",
        ],
      },
      {
        type: "image",
        src: "GyUcGlzWsAA4zCT.jpeg",
      },
      {
        type: "text",
        heading: "Sueño NREM",
        paragraphs: [
          "El sueño NREM incluye varias etapas de profundidad creciente. La etapa 1 es la transición entre la vigilia y el sueño, donde el cuerpo comienza a relajarse. La etapa 2 es la estabilización del sueño, donde la temperatura corporal baja y el cerebro genera patrones eléctricos específicos. La etapa 3 es el sueño profundo o de ondas lentas, donde ocurre gran parte de la recuperación física del organismo.",
        ],
      },
      {
        type: "image",
        src: "GyUcHU7XUAUbOiF.jpeg",
      },
      {
        type: "text",
        heading: "El sueño REM: la fase más misteriosa del descanso",
        paragraphs: [
          "El sueño REM es una etapa única caracterizada por movimientos rápidos de los ojos, actividad cerebral intensa y sueños particularmente vívidos. Durante esta fase el cerebro muestra patrones similares a los de la vigilia, los músculos del cuerpo quedan temporalmente paralizados y se produce la mayoría de los sueños narrativos complejos.",
          "El sueño REM suele aparecer aproximadamente 90 minutos después de quedarse dormido, y sus periodos se vuelven más largos hacia el final de la noche. Durante mucho tiempo los científicos discutieron cuál era exactamente su función, pero hoy existe consenso en que cumple múltiples tareas críticas.",
        ],
      },
      {
        type: "text",
        heading: "¿Por qué el sueño REM es tan importante?",
        paragraphs: [
          "El sueño REM ayuda a organizar información adquirida durante el día. Estudios han demostrado que dormir mejora el aprendizaje y la retención de conocimientos. Las conexiones neuronales relevantes se fortalecen mientras otras menos importantes se debilitan.",
          "Dormir adecuadamente ayuda a procesar experiencias emocionales intensas. Algunas investigaciones sugieren que el cerebro \"reprocesa\" emociones difíciles durante el sueño REM para reducir su impacto psicológico. La privación de REM se ha relacionado con ansiedad, irritabilidad, depresión y mayor reactividad emocional.",
          "Muchas personas experimentan ideas creativas después de dormir. El sueño REM parece favorecer conexiones inusuales entre conceptos y mejorar el pensamiento asociativo.",
        ],
      },
      {
        type: "image",
        src: "GyUcI9HWkAIJXa7.jpeg",
      },
      {
        type: "text",
        heading: "Cómo funciona el monitoreo del sueño",
        paragraphs: [
          "El monitoreo moderno del sueño utiliza sensores capaces de registrar diferentes señales fisiológicas del cuerpo. Entre las más comunes se encuentran la frecuencia cardíaca, variabilidad cardíaca, movimiento corporal, respiración, temperatura corporal y oxigenación sanguínea.",
          "Los dispositivos utilizan algoritmos para estimar en qué fase del sueño se encuentra la persona.",
        ],
      },
      {
        type: "image",
        src: "GyUcIC2XEAQb0Jj.jpeg",
      },
      {
        type: "text",
        heading: "Polisomnografía: el estándar médico",
        paragraphs: [
          "Aunque los wearables son populares, el método más preciso sigue siendo la polisomnografía, una prueba médica realizada en laboratorios especializados. Este estudio registra ondas cerebrales mediante electroencefalograma, movimientos oculares, actividad muscular, respiración y ritmo cardíaco.",
          "Gracias a esta información, los especialistas pueden diagnosticar trastornos como apnea del sueño, narcolepsia, insomnio y parasomnias.",
        ],
      },
      {
        type: "image",
        src: "GyUcJ8wWwAE33ET.jpeg",
      },
      {
        type: "text",
        heading: "¿Los relojes inteligentes realmente detectan el sueño REM?",
        paragraphs: [
          "Los dispositivos de consumo han mejorado considerablemente, pero todavía tienen limitaciones. La mayoría no mide directamente actividad cerebral, sino que infieren las fases del sueño usando patrones fisiológicos indirectos como cambios en la frecuencia cardíaca, inmovilidad corporal y variabilidad respiratoria.",
          "Aunque no son tan precisos como un estudio clínico, muchos wearables logran estimaciones razonablemente útiles para hábitos generales de sueño.",
        ],
      },
      {
        type: "image",
        src: "GyUcKpQWgAEOJOK.jpeg",
      },
      {
        type: "text",
        heading: "Qué puede alterar el sueño REM",
        paragraphs: [
          "Numerosos factores afectan esta fase del descanso. Altos niveles de cortisol por estrés y ansiedad pueden fragmentar el sueño y reducir el tiempo en REM. Aunque algunas personas sienten sueño tras beber alcohol, éste altera significativamente la arquitectura normal del sueño y reduce la calidad del REM.",
          "Dormir poco durante varios días puede provocar \"rebote REM\", donde el cerebro intenta compensar aumentando esta fase posteriormente. La exposición nocturna a luz artificial también puede alterar la producción de melatonina y retrasar el inicio del sueño.",
        ],
      },
      {
        type: "image",
        src: "GyUcLfiWYAIwLy-.jpeg",
      },
      {
        type: "text",
        heading: "Trastornos relacionados con el sueño REM",
        paragraphs: [
          "Normalmente, el cuerpo permanece paralizado durante el sueño REM para evitar actuar físicamente los sueños. En el trastorno de conducta del sueño REM, esa parálisis falla parcialmente. Las personas pueden hablar, golpear, patear o levantarse dormidas.",
          "Este trastorno ha despertado gran interés científico porque en algunos casos puede estar relacionado con enfermedades neurodegenerativas futuras.",
        ],
      },
      {
        type: "text",
        heading: "Sueño REM y salud mental",
        paragraphs: [
          "Diversas investigaciones han encontrado conexiones profundas entre el sueño REM y enfermedades psiquiátricas. Personas con depresión, trastorno bipolar, estrés postraumático y ansiedad severa frecuentemente presentan alteraciones en la arquitectura del sueño.",
          "Algunos antidepresivos incluso modifican directamente la duración del sueño REM.",
        ],
      },
      {
        type: "image",
        src: "GyUcMR2WgAE7quN.jpeg",
      },
      {
        type: "text",
        heading: "El futuro del monitoreo del sueño",
        paragraphs: [
          "La tecnología de sueño se está desarrollando rápidamente gracias a la inteligencia artificial y sensores biométricos avanzados. Los futuros sistemas podrían detectar enfermedades neurológicas tempranas, identificar niveles de estrés crónico, optimizar horarios personalizados de descanso y ajustar automáticamente iluminación y temperatura del entorno.",
          "También se investiga el uso de algoritmos capaces de detectar patrones asociados con deterioro cognitivo antes de que aparezcan síntomas visibles.",
        ],
      },
      {
        type: "text",
        heading: "¿Cuánto sueño REM necesita una persona?",
        paragraphs: [
          "En adultos, el sueño REM representa aproximadamente entre el 20% y 25% del tiempo total de sueño. En promedio, los adultos necesitan 1.5 a 2 horas por noche, mientras que los bebés pueden llegar hasta el 50% del sueño total.",
        ],
      },
      {
        type: "text",
        heading: "Conclusión",
        paragraphs: [
          "Durante décadas, la sociedad moderna glorificó dormir poco como símbolo de productividad. Hoy, la ciencia apunta en la dirección opuesta: la calidad del sueño influye prácticamente en todos los sistemas del cuerpo humano.",
          "El monitoreo del sueño ha permitido que millones de personas observen patrones que antes eran invisibles. Aunque los dispositivos domésticos todavía no sustituyen estudios médicos especializados, sí han ayudado a generar mayor conciencia sobre la importancia del descanso.",
          "El sueño REM, en particular, sigue siendo una de las áreas más fascinantes de la neurociencia moderna. Mientras dormimos, el cerebro reorganiza recuerdos, procesa emociones y realiza tareas esenciales para mantener el equilibrio mental y físico.",
        ],
      },
      {
        type: "image",
        src: "GyUcNF8WAAcOp4e.jpeg",
      },
    ],
  },
  {
    slug: "las-posadas-en-mexico",
    title: "Las Posadas en México: la tradición que une fe, comunidad y fiesta",
    category: "Cultura",
    color: "bg-accent",
    gradient: "from-amber-400 to-red-500",
    date: "2024-12-19",
    excerpt:
      "Cuando llega diciembre, las calles de muchos barrios mexicanos comienzan a llenarse de luces, música, piñatas y reuniones familiares. Entre todas las celebraciones navideñas, una de las más queridas y representativas es la tradición de las posadas, una costumbre que mezcla elementos religiosos, culturales y festivos que han pasado de generación en generación.",
    coverImage: "HJKQoINXMAA-xAr.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Cuando llega diciembre, las calles de muchos barrios mexicanos comienzan a llenarse de luces, música, piñatas y reuniones familiares. Entre todas las celebraciones navideñas, una de las más queridas y representativas es la tradición de las posadas, una costumbre que mezcla elementos religiosos, culturales y festivos que han pasado de generación en generación.",
          "Las posadas no solo marcan el inicio de la Navidad en México, también representan convivencia, unión comunitaria y una identidad cultural profundamente arraigada en la historia del país.",
        ],
      },
      {
        type: "image",
        src: "HJKQoINXMAA-xAr.jpeg",
      },
      {
        type: "text",
        heading: "¿Qué son las posadas?",
        paragraphs: [
          "Las posadas son celebraciones que se realizan tradicionalmente del 16 al 24 de diciembre. Cada noche simboliza el recorrido de María y José buscando refugio antes del nacimiento de Jesús en Belén.",
          "Durante estas reuniones, un grupo de personas representa a los peregrinos, mientras otro grupo permanece dentro de una casa simulando a los anfitriones. A través de cantos tradicionales, conocidos como \"pedir posada\", se recrea la búsqueda de alojamiento hasta que finalmente se abren las puertas y comienza la celebración.",
          "Aunque tienen un origen religioso, con el tiempo las posadas evolucionaron hasta convertirse en eventos sociales y familiares llenos de comida, juegos, música y alegría.",
        ],
      },
      {
        type: "text",
        heading: "El origen histórico de las posadas",
        paragraphs: [
          "La tradición tiene raíces que se remontan al periodo colonial en México. Durante el siglo XVI, los frailes españoles buscaban evangelizar a los pueblos indígenas y adaptaron ciertas festividades prehispánicas relacionadas con el solsticio de invierno.",
          "Se dice que los agustinos del convento de Acolman, en el actual Estado de México, organizaron algunas de las primeras celebraciones conocidas como \"misas de aguinaldo\". Estas ceremonias se realizaban durante nueve días antes de Navidad y con el tiempo dieron origen a las posadas modernas.",
          "La mezcla entre tradiciones indígenas y costumbres cristianas ayudó a crear una celebración única que hoy es reconocida como una de las expresiones culturales más emblemáticas de México.",
        ],
      },
      {
        type: "text",
        heading: "Los elementos más representativos de una posada",
        paragraphs: [
          "Uno de los momentos más importantes ocurre cuando los asistentes cantan alternando versos entre quienes están afuera y quienes están dentro de la casa. Este diálogo musical simboliza la negativa inicial y posteriormente la aceptación de María y José. La canción tradicional de las posadas es conocida prácticamente por todos los mexicanos y suele acompañarse con velas o luces de bengala.",
          "Otro de los elementos más esperados es la piñata. La clásica piñata de siete picos tiene un significado simbólico relacionado con los siete pecados capitales, mientras que romperla representa la lucha contra las tentaciones. En su interior suelen colocarse dulces y frutas como tejocotes, cañas, jícamas y mandarinas.",
          "Las posadas también son famosas por su gastronomía. Dependiendo de la región del país, pueden encontrarse tamales, buñuelos, ponche caliente, atole, tostadas, enchiladas y champurrado. El ponche navideño destaca por su combinación de frutas como tejocote, guayaba, caña y ciruela pasa.",
        ],
      },
      {
        type: "text",
        heading: "Las posadas en la actualidad",
        paragraphs: [
          "Aunque muchas familias conservan el formato tradicional, las posadas modernas también han evolucionado. En escuelas, oficinas y grupos de amigos se organizan convivios inspirados en esta tradición, a veces incorporando intercambios de regalos, karaoke, juegos y música contemporánea.",
          "Sin embargo, incluso con los cambios generacionales, el espíritu principal sigue siendo el mismo: reunirse, compartir y fortalecer los lazos entre las personas.",
        ],
      },
      {
        type: "text",
        heading: "Una tradición que representa a México",
        paragraphs: [
          "Las posadas son mucho más que una celebración religiosa. Representan una mezcla de historia, identidad cultural y convivencia comunitaria que ha sobrevivido durante siglos.",
          "En un mundo donde muchas tradiciones cambian rápidamente, las posadas siguen siendo un símbolo de unión familiar y alegría colectiva. Ya sea en pequeños pueblos o grandes ciudades, cada diciembre esta costumbre vuelve a llenar de música, color y calidez los hogares mexicanos.",
        ],
      },
    ],
  },
  {
    slug: "criadero-burros-mexicanos",
    title: "Imágenes inéditas del último criadero de burros mexicanos sorprenden en redes",
    category: "Sociedad",
    color: "bg-primary",
    gradient: "from-emerald-500 to-teal-600",
    date: "2024-12-22",
    excerpt:
      "En medio de las montañas y caminos rurales donde alguna vez los burros fueron esenciales para la vida cotidiana, un pequeño criadero dedicado a preservar estas especies mexicanas ha comenzado a llamar la atención gracias a una serie de fotografías inéditas que muestran cómo viven actualmente estos animales.",
    coverImage: "poner_primero.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "En medio de las montañas y caminos rurales donde alguna vez los burros fueron esenciales para la vida cotidiana, un pequeño criadero dedicado a preservar estas especies mexicanas ha comenzado a llamar la atención gracias a una serie de fotografías inéditas que muestran cómo viven actualmente estos animales.",
          "Las imágenes, compartidas recientemente por cuidadores y visitantes, muestran escenas poco conocidas de burros criados en ambientes naturales, lejos del ruido urbano y de las grandes granjas industriales. En varias fotografías pueden verse ejemplares descansando bajo árboles, recorriendo senderos de tierra y conviviendo con comunidades rurales que todavía mantienen tradiciones ganaderas ancestrales.",
        ],
      },
      {
        type: "image",
        src: "poner_primero.jpeg",
      },
      {
        type: "text",
        heading: "El papel histórico del burro en México",
        paragraphs: [
          "Durante siglos, los burros fueron fundamentales para el transporte de mercancías, cosechas y herramientas en distintas regiones del país. Antes de la modernización del transporte, estos animales eran considerados aliados indispensables para campesinos, comerciantes y viajeros.",
          "Sin embargo, con el paso del tiempo y la llegada de vehículos motorizados, la población de burros comenzó a disminuir drásticamente en muchas zonas rurales. Actualmente, diversos grupos buscan conservar ciertas líneas y ejemplares debido a su importancia cultural e histórica.",
        ],
      },
      {
        type: "image",
        src: "052b9019-3c0b-412b-827a-7b1aeb5760c8.png",
      },
      {
        type: "text",
        heading: "Fotografías que muestran una tradición en riesgo",
        paragraphs: [
          "Las nuevas imágenes también han despertado conversación sobre el abandono progresivo de muchas tradiciones relacionadas con la vida rural mexicana. Algunos de los retratos muestran establos antiguos, herramientas de trabajo tradicionales y rutas utilizadas históricamente para carga y transporte.",
          "En varias fotografías destaca la cercanía entre los cuidadores y los animales, evidenciando el vínculo que todavía existe en algunas comunidades donde los burros continúan formando parte de la vida diaria.",
        ],
      },
      {
        type: "image",
        src: "223702fd-ffc7-417b-8302-a61a2d8f34b6.png",
      },
      {
        type: "text",
        heading: "Un símbolo silencioso del México rural",
        paragraphs: [
          "Aunque muchas veces pasan desapercibidos, los burros siguen siendo parte importante de la memoria colectiva de México. Han aparecido en leyendas, películas, artesanías y expresiones populares que forman parte de la identidad cultural del país.",
          "Las fotografías inéditas del criadero han servido para recordar la importancia de conservar no solo a los animales, sino también las historias y tradiciones que los rodean.",
          "En redes sociales, cientos de usuarios han reaccionado con nostalgia, destacando cómo estos animales acompañaron durante décadas la vida en ranchos, pueblos y comunidades alejadas de las ciudades.",
        ],
      },
    ],
  },

  {
    slug: "critical-ignoring",
    title: "Critical Ignoring: El arte de elegir qué no merece tu atención",
    category: "Tecnología",
    color: "bg-accent",
    hiddenFromHome: true,
    gradient: "from-violet-400 to-purple-600",
    date: "2022-02-23",
    excerpt:
      "Vivimos en una época donde la información compite por cada segundo de nuestro tiempo. Noticias, tendencias, polémicas, videos virales y discusiones interminables aparecen constantemente en nuestras pantallas.",
    coverImage: "G_EDW8TXYAAfXGP.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Vivimos en una época donde la información compite por cada segundo de nuestro tiempo. Noticias, tendencias, polémicas, videos virales y discusiones interminables aparecen constantemente en nuestras pantallas. Ante este escenario surge un concepto cada vez más relevante: Critical Ignoring o ignorancia crítica.",
          "Lejos de significar desinterés o apatía, el critical ignoring es la capacidad de decidir conscientemente qué información merece nuestra atención y cuál no. Se trata de una habilidad fundamental para evitar la sobrecarga informativa, reducir la desinformación y proteger nuestro bienestar mental.",
        ],
      },
      {
        type: "image",
        src: "G_EDW8TXYAAfXGP.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Los expertos señalan que no podemos verificar, leer o analizar todo lo que encontramos en internet. Por ello, aprender a ignorar contenido engañoso, provocador o irrelevante puede ser tan importante como desarrollar el pensamiento crítico. En lugar de reaccionar a cada estímulo digital, el critical ignoring nos invita a seleccionar cuidadosamente dónde invertimos nuestro tiempo y energía.",
          "Aplicar esta práctica implica reconocer titulares diseñados para generar indignación, evitar discusiones que no conducen a ningún resultado productivo y filtrar fuentes poco confiables. En un entorno donde la atención se ha convertido en uno de los recursos más valiosos, saber qué ignorar puede marcar la diferencia entre estar informado y sentirse abrumado.",
          "Quizás el verdadero desafío de la era digital no sea acceder a más información, sino aprender a distinguir qué información merece realmente nuestra atención.",
        ],
      },
    ],
  },
  {
    slug: "que-es-la-comentologia",
    title: "¿Qué es La Comentología?",
    category: "Cultura",
    color: "bg-gold",
    hiddenFromHome: true,
    gradient: "from-amber-400 to-orange-500",
    date: "2022-02-23",
    excerpt:
      "Si alguna vez te has encontrado leyendo los comentarios de una publicación durante más tiempo que la noticia original, entonces ya conoces el espíritu de La Comentología.",
    coverImage: "1500x500 (1).jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Si alguna vez te has encontrado leyendo los comentarios de una publicación durante más tiempo que la noticia original, entonces ya conoces el espíritu de La Comentología.",
          "Pero, ¿qué es exactamente?",
          "La Comentología es el arte de analizar, interpretar y disfrutar las reacciones que generan los temas más comentados del momento. No se trata únicamente de hablar de celebridades, escándalos virales o polémicas en redes sociales; se trata de entender por qué la gente comenta, debate, se indigna, se emociona o convierte cualquier acontecimiento en tendencia.",
        ],
      },
      {
        type: "image",
        src: "1500x500 (1).jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "En un mundo donde todos tienen una opinión y una conexión a internet, los comentarios se han convertido en un fenómeno social por derecho propio. A veces son más entretenidos que la noticia original, otras veces revelan teorías inesperadas y, en ocasiones, terminan creando historias completamente nuevas.",
          "En La Comentología de La Comentóloga, exploramos ese universo donde se mezclan el espectáculo, la cultura digital, las curiosidades de internet y las conversaciones que están dando de qué hablar. Aquí analizamos los temas virales, los momentos más comentados de la farándula, las tendencias que dominan las redes y esos detalles curiosos que nadie vio venir.",
        ],
      },
      {
        type: "image",
        src: "poner_primero.jpg",
      },
      {
        type: "text",
        paragraphs: [
          "Porque detrás de cada publicación viral existe una pregunta fascinante:",
          "¿Qué está diciendo la gente?",
          "Y justamente ahí comienza la Comentología.",
          "Bienvenidos a un espacio donde los comentarios también son noticia.",
        ],
      },
    ],
  },
  {
    slug: "luz-maria-ricardo-vilchis-nueva-etapa",
    title: "Luz María y Ricardo Vilchis: Unidos por una Nueva Etapa",
    subtitle: "Exclusiva de La Comentología",
    category: "Política",
    color: "bg-primary",
    hiddenFromHome: true,
    gradient: "from-rose-500 to-pink-600",
    date: "2026-05-15",
    excerpt:
      "En el dinámico mundo de la política y la opinión pública, pocas alianzas generan tanta conversación como la que actualmente protagonizan Luz María y Ricardo Vilchis. En esta nueva etapa, ambos han mostrado una postura de respaldo mutuo, compartiendo proyectos, ideas y una visión que busca conectar con distintos sectores de la sociedad.",
    coverImage: "715913146_122116124912978314_3813130498124533077_n.jpg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "En el dinámico mundo de la política y la opinión pública, pocas alianzas generan tanta conversación como la que actualmente protagonizan Luz María y Ricardo Vilchis. En esta nueva etapa, ambos han mostrado una postura de respaldo mutuo, compartiendo proyectos, ideas y una visión que busca conectar con distintos sectores de la sociedad.",
          "Desde eventos públicos hasta encuentros con simpatizantes, la presencia conjunta de Luz María y Ricardo ha despertado el interés de seguidores y observadores, quienes analizan cada paso de esta colaboración que promete dar mucho de qué hablar durante los próximos meses.",
        ],
      },
      {
        type: "image",
        src: "715913146_122116124912978314_3813130498124533077_n.jpg",
      },
      {
        type: "text",
        heading: "Un Mensaje de Unidad",
        paragraphs: [
          "Durante recientes apariciones, ambos personajes han destacado la importancia del trabajo en equipo, el diálogo y la participación ciudadana. Para muchos, esta cercanía representa una estrategia que busca fortalecer su presencia pública y consolidar una imagen de unidad frente a los retos que se presentan en el panorama actual.",
          "Fuentes cercanas aseguran que la coordinación entre ambos ha sido constante, permitiendo construir una agenda basada en objetivos compartidos y en la búsqueda de una mayor conexión con la ciudadanía.",
        ],
      },
      {
        type: "image",
        src: "711531660_122116124780978314_7512382372630249055_n.jpg",
      },
      {
        type: "text",
        heading: "La Reacción en Redes Sociales",
        paragraphs: [
          "Como era de esperarse, las redes sociales no tardaron en reaccionar. Miles de usuarios han comentado fotografías, videos y publicaciones relacionadas con esta dupla, generando debates, muestras de apoyo y también cuestionamientos sobre el futuro de este proyecto.",
          "La conversación digital ha convertido a Luz María y Ricardo Vilchis en protagonistas de tendencias y espacios de análisis, demostrando el impacto que sus acciones tienen en la opinión pública.",
        ],
      },
      {
        type: "text",
        heading: "Detrás de Cámaras: La Exclusiva de Comentología",
        paragraphs: [
          "La revista digital Comentología tuvo acceso a material exclusivo que muestra momentos inéditos de convivencia, preparación de eventos y encuentros con simpatizantes. Estas imágenes reflejan una faceta más cercana y humana de ambos personajes, alejándose por un momento de los reflectores y mostrando la complicidad que ha fortalecido esta alianza.",
        ],
      },
      {
        type: "image",
        src: "711531660_122116125176978314_2657281850285990359_n.jpg",
      },
      {
        type: "text",
        heading: "Lo Que Viene",
        paragraphs: [
          "Aunque todavía existen muchas preguntas sobre los próximos pasos de esta colaboración, lo cierto es que Luz María y Ricardo Vilchis han logrado captar la atención de la opinión pública. Su presencia conjunta continúa generando expectativa y mantendrá a analistas, simpatizantes y críticos atentos a cada movimiento.",
          "En Comentología, seguiremos de cerca esta historia para traer a nuestros lectores entrevistas, fotografías inéditas y los detalles que marcan la diferencia detrás de los titulares.",
          "¿Será esta alianza el inicio de un proyecto con mayor alcance? La conversación apenas comienza y, como siempre, en Comentología estaremos atentos para contarte cada detalle.",
        ],
      },
    ],
  },
  {
    slug: "detencion-misael-fragoso-redes",
    title: "La Detención de Misael Fragoso: El Caso que Sacude las Redes Sociales",
    subtitle: "Exclusiva de La Comentología",
    category: "Tendencias",
    color: "bg-accent",
    gradient: "from-pink-400 to-rose-600",
    date: "2026-06-01",
    excerpt:
      "Las redes sociales y diversos espacios digitales se han visto inundados de comentarios tras darse a conocer la detención de Misael Fragoso, un hecho que rápidamente se convirtió en tema de conversación entre seguidores, creadores de contenido y usuarios de internet.",
    coverImage: "716291901_122116012754978314_3169363192120689680_n.jpg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Las redes sociales y diversos espacios digitales se han visto inundados de comentarios tras darse a conocer la detención de Misael Fragoso, un hecho que rápidamente se convirtió en tema de conversación entre seguidores, creadores de contenido y usuarios de internet.",
          "La noticia ha generado una ola de reacciones, especulaciones y debates sobre las circunstancias que rodean el caso. Mientras algunos piden esperar a que las autoridades presenten información oficial, otros han expresado su opinión a través de publicaciones, videos y transmisiones en vivo.",
        ],
      },
      {
        type: "image",
        src: "716291901_122116012754978314_3169363192120689680_n.jpg",
      },
      {
        type: "text",
        heading: "¿Qué se Sabe Hasta el Momento?",
        paragraphs: [
          "Hasta ahora, la información disponible continúa desarrollándose y gran parte de los detalles permanecen sujetos a las investigaciones correspondientes. Como ocurre en este tipo de situaciones, es importante distinguir entre los datos confirmados por fuentes oficiales y los rumores que suelen circular en redes sociales.",
          "Especialistas en comunicación digital señalan que la velocidad con la que se difunde la información puede provocar confusiones, por lo que recomiendan mantenerse atentos a los comunicados oficiales antes de sacar conclusiones definitivas.",
        ],
      },
      {
        type: "text",
        heading: "Reacciones en Internet",
        paragraphs: [
          "La detención de Misael Fragoso ha provocado una intensa conversación en plataformas digitales. Entre los comentarios más frecuentes se encuentran:",
          "Usuarios que solicitan transparencia en el proceso.",
          "Seguidores que han mostrado apoyo al involucrado.",
          "Personas que exigen una investigación completa.",
          "Creadores de contenido que analizan el impacto mediático del caso.",
          "La noticia se ha convertido en tendencia en diversos espacios digitales, donde miles de usuarios participan activamente en la discusión.",
        ],
      },
      {
        type: "text",
        heading: "El Impacto Mediático",
        paragraphs: [
          "Más allá de los aspectos legales, el caso pone nuevamente sobre la mesa el papel que juegan las redes sociales en la construcción de la opinión pública. En cuestión de horas, un acontecimiento puede transformarse en tendencia nacional y generar miles de reacciones antes de que exista una versión completa de los hechos.",
          "Este fenómeno demuestra cómo la información, las opiniones y las narrativas digitales pueden influir en la percepción de un caso que aún se encuentra en desarrollo.",
        ],
      },
      {
        type: "text",
        heading: "La Comentología Seguirá Informando",
        paragraphs: [
          "Desde La Comentología, seguiremos atentos a cualquier actualización relevante sobre este caso, manteniendo el compromiso de informar con responsabilidad y verificando los datos antes de su publicación.",
          "Mientras las investigaciones avanzan y surgen nuevos detalles, la historia de la detención de Misael Fragoso continúa generando preguntas, debate y una gran expectativa entre quienes siguen de cerca este acontecimiento.",
          "La conversación sigue abierta, y en La Comentología te mantendremos informado sobre cada nuevo capítulo de esta historia.",
        ],
      },
    ],
  },
  {
    slug: "la-nera-llega-con-todo-lanzamiento-musical",
    title: "La Ñera Llega con Todo: El Lanzamiento que Está Dando de Qué Hablar en la Escena Musical",
    subtitle: "Exclusiva de Comentología",
    category: "Música",
    color: "bg-gold",
    hiddenFromHome: true,
    gradient: "from-amber-400 to-orange-500",
    date: "2025-01-15",
    excerpt:
      "La música popular tiene una nueva protagonista y su nombre ya comienza a sonar con fuerza entre los amantes de los ritmos urbanos, regionales y de barrio. Se trata de \"La Ñera\", un proyecto musical que acaba de presentar su esperado material discográfico, generando conversación entre seguidores, creadores de contenido y curiosos de la cultura popular.",
    coverImage: "portada.jpg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "La música popular tiene una nueva protagonista y su nombre ya comienza a sonar con fuerza entre los amantes de los ritmos urbanos, regionales y de barrio. Se trata de \"La Ñera\", un proyecto musical que acaba de presentar su esperado material discográfico, generando conversación entre seguidores, creadores de contenido y curiosos de la cultura popular.",
        ],
      },
      {
        type: "image",
        src: "portada.jpg",
      },
      {
        type: "text",
        heading: "Un Lanzamiento con Identidad Propia",
        paragraphs: [
          "Desde el primer vistazo, La Ñera apuesta por una imagen auténtica, desenfadada y cercana a la gente. Lejos de las fórmulas tradicionales de la industria, este lanzamiento busca conectar con quienes se identifican con las historias de esfuerzo, amistad, amor, desamor y la vida cotidiana de los barrios latinoamericanos.",
          "El álbum combina sonidos modernos con influencias populares que han marcado a generaciones enteras. Cada tema parece construido para contar una historia distinta, manteniendo una esencia fresca y una personalidad que difícilmente pasa desapercibida.",
        ],
      },
      {
        type: "image",
        src: "583ba2fc-10ce-4730-a829-97cd0923f45d (1).png",
      },
      {
        type: "text",
        heading: "La Presentación Exclusiva",
        paragraphs: [
          "Durante el evento de lanzamiento, asistentes e invitados especiales pudieron conocer de primera mano algunos de los detalles detrás de la producción. El ambiente estuvo marcado por la emoción de los seguidores, quienes celebraron cada adelanto musical y compartieron sus primeras impresiones en redes sociales.",
          "Entre luces, fotografías y momentos de convivencia, quedó claro que el proyecto busca convertirse en algo más que un simple disco: pretende transformarse en una representación cultural de quienes encuentran en la música una forma de expresar su realidad.",
        ],
      },
      {
        type: "text",
        heading: "Las Canciones que Prometen Conquistar al Público",
        paragraphs: [
          "Aunque cada oyente tendrá sus favoritas, las primeras reacciones apuntan a que varias canciones podrían convertirse en himnos para fiestas, reuniones y tendencias digitales. Las letras, cargadas de lenguaje popular y referencias cotidianas, han sido uno de los aspectos más comentados por quienes ya tuvieron acceso al material.",
          "La producción también destaca por su variedad musical, ofreciendo momentos para bailar, cantar y reflexionar, una combinación que suele ser clave para conectar con diferentes públicos.",
        ],
      },
      {
        type: "text",
        heading: "El Fenómeno en Redes Sociales",
        paragraphs: [
          "Desde el anuncio oficial del proyecto, el nombre de La Ñera ha comenzado a circular con fuerza en plataformas digitales. Videos, comentarios y publicaciones de fanáticos han contribuido a generar expectativa alrededor del lanzamiento.",
          "Los creadores detrás del proyecto han apostado por una estrategia cercana a la comunidad digital, compartiendo contenido exclusivo, detrás de cámaras y momentos inéditos que permiten a los seguidores sentirse parte de esta nueva etapa.",
        ],
      },
      {
        type: "text",
        heading: "Lo que Viene para La Ñera",
        paragraphs: [
          "Fuentes cercanas al proyecto aseguran que este lanzamiento es apenas el comienzo. Presentaciones en vivo, colaboraciones especiales y nuevo contenido audiovisual formarían parte de los planes para los próximos meses.",
          "Si algo quedó claro tras este estreno es que La Ñera ha llegado para hacerse notar. Con una propuesta que mezcla identidad popular, carisma y una conexión directa con el público, el proyecto apunta a convertirse en uno de los temas más comentados del momento.",
        ],
      },
      {
        type: "text",
        heading: "Comentología Opina",
        paragraphs: [
          "En una época donde muchos artistas buscan fórmulas repetidas para alcanzar la viralidad, La Ñera apuesta por la autenticidad y el orgullo de sus raíces. El resultado es un lanzamiento que ya está generando conversación y que promete seguir dando material para hablar en las próximas semanas.",
          "¿Estamos ante el nacimiento de un nuevo fenómeno musical? El tiempo lo dirá, pero una cosa es segura: en Comentología seguiremos atentos a cada paso de La Ñera.",
        ],
      },
    ],
  },
  {
    slug: "mc-in-wonderland-horror-teatro",
    title: "MC IN WONDERLAND HORROR: LA PESADILLA COBRA VIDA EN LOS ESCENARIOS",
    subtitle: "Por Revista Digital Comentología",
    category: "Espectáculos",
    color: "bg-accent",
    hiddenFromHome: true,
    gradient: "from-violet-400 to-purple-600",
    date: "2025-01-22",
    excerpt:
      "El telón está a punto de levantarse para una de las producciones más ambiciosas, oscuras y fascinantes del año. El equipo creativo detrás de \"MC in Wonderland Horror\" anunció oficialmente el desarrollo de esta innovadora obra teatral que promete transportar al público a una versión retorcida del clásico mundo fantástico.",
    coverImage: "HI5NZG2XcAAUCJT.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "El telón está a punto de levantarse para una de las producciones más ambiciosas, oscuras y fascinantes del año. El equipo creativo detrás de \"MC in Wonderland Horror\" anunció oficialmente el desarrollo de esta innovadora obra teatral que promete transportar al público a una versión retorcida y aterradora del clásico mundo fantástico que todos creen conocer.",
          "Con una propuesta visual impactante, una escenografía inmersiva y personajes que desafían la imaginación, la producción busca combinar el misterio, el horror psicológico y la fantasía oscura en una experiencia única para los amantes del teatro.",
        ],
      },
      {
        type: "image",
        src: "HI5NZG2XcAAUCJT.jpeg",
      },
      {
        type: "text",
        heading: "Una historia donde la locura gobierna",
        paragraphs: [
          "En esta nueva interpretación, los espectadores serán testigos de un universo donde las reglas de la realidad se rompen constantemente. Entre bosques embrujados, fiestas macabras y personajes inquietantes, la historia explorará temas como el miedo, la identidad y los secretos ocultos detrás de las apariencias.",
          "La producción adelanta que los asistentes encontrarán una atmósfera cargada de tensión, con sorprendentes efectos visuales y momentos que mantendrán al público al borde de sus asientos.",
        ],
      },
      {
        type: "text",
        heading: "Una escenografía que se convierte en personaje",
        paragraphs: [
          "Uno de los elementos más comentados durante el desarrollo ha sido la espectacular escenografía diseñada especialmente para la obra. Inspirada en un bosque encantado convertido en pesadilla, contará con árboles retorcidos y senderos misteriosos, una tétrica fiesta de té abandonada, cartas gigantes y elementos surrealistas, un trono central que domina el escenario e iluminación envolvente con efectos de niebla y sombras dinámicas.",
          "Los productores aseguran que cada rincón del escenario fue pensado para sumergir completamente al espectador en esta oscura aventura.",
        ],
      },
      {
        type: "image",
        src: "c71bfb71-2c99-44c5-8c1d-e4870a51882b.png",
      },
      {
        type: "text",
        heading: "Un elenco comprometido con la experiencia",
        paragraphs: [
          "Aunque todavía no se han revelado todos los nombres del reparto, fuentes cercanas a la producción aseguran que el elenco se encuentra trabajando intensamente en la construcción de personajes complejos y perturbadores que sorprenderán al público desde el primer acto.",
          "Los ensayos ya han comenzado y el ambiente detrás de cámaras refleja la emoción de un proyecto que busca marcar un antes y un después dentro de las producciones teatrales independientes.",
        ],
      },
      {
        type: "text",
        heading: "Próximamente más sorpresas",
        paragraphs: [
          "Durante las próximas semanas se espera el anuncio oficial de fechas, sede, venta de boletos y nuevas imágenes exclusivas del montaje.",
          "Desde Comentología estaremos siguiendo cada etapa del desarrollo de MC in Wonderland Horror, llevando a nuestros lectores entrevistas exclusivas, fotografías inéditas y todos los detalles detrás de esta intrigante producción que promete convertirse en uno de los eventos teatrales más comentados del año.",
          "La cuenta regresiva ha comenzado. La pregunta es: ¿estás listo para entrar en Wonderland... y descubrir sus horrores?",
        ],
      },
    ],
  },
  {
    slug: "tomatazos-cines-leyes-origen",
    title:
      "Tomatazos, cines y leyes: el curioso origen de una tradición que llegó hasta nuestros días",
    category: "Cultura",
    color: "bg-primary",
    hiddenFromHome: true,
    gradient: "from-rose-500 to-pink-600",
    date: "2025-02-03",
    excerpt:
      "Cuando una película recibe malas críticas solemos escuchar expresiones como: \"la destrozaron\", \"fue un fracaso\" o incluso \"le dieron tomatazos\". Pero ¿alguna vez te has preguntado de dónde viene realmente la idea de lanzar tomates a un espectáculo?",
    coverImage: "portada.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Cuando una película recibe malas críticas solemos escuchar expresiones como: \"la destrozaron\", \"fue un fracaso\" o incluso \"le dieron tomatazos\". Pero ¿alguna vez te has preguntado de dónde viene realmente la idea de lanzar tomates a un espectáculo y qué relación tiene con las leyes y los cines modernos?",
        ],
      },
      {
        type: "image",
        src: "portada.jpeg",
      },
      {
        type: "text",
        heading: "El origen de los \"tomatazos\"",
        paragraphs: [
          "La imagen de un público enfurecido lanzando tomates a actores sobre un escenario forma parte del imaginario popular occidental. Aunque existen debates sobre qué tan frecuente fue realmente esta práctica, durante los siglos XVIII y XIX era común que los espectadores manifestaran su descontento de manera mucho más ruidosa y agresiva que en la actualidad.",
          "En teatros y espectáculos públicos, los asistentes podían abuchear, silbar e incluso arrojar objetos a los artistas cuando consideraban que una actuación era deficiente. Los tomates, frutas demasiado maduras y otros alimentos baratos se convirtieron en símbolos de desaprobación porque eran fáciles de conseguir y causaban un impacto visible sin representar un riesgo tan grave como otros objetos.",
          "Con el tiempo, la imagen del tomate volando hacia el escenario se volvió una representación cultural del rechazo del público, incluso cuando en la práctica ocurría con mucha menos frecuencia de lo que muestran las películas y caricaturas.",
        ],
      },
      {
        type: "text",
        heading: "De los teatros a los cines",
        paragraphs: [
          "Cuando el cine comenzó a popularizarse a finales del siglo XIX y principios del XX, heredó muchas costumbres del mundo teatral. Sin embargo, las salas de cine pronto establecieron reglas más estrictas para garantizar el orden.",
          "A diferencia del teatro tradicional, donde la interacción con los artistas podía ser directa, en el cine no había actores presentes sobre el escenario. Aun así, los espectadores continuaron expresando su opinión mediante aplausos, abucheos y comentarios, aunque lanzar objetos dejó de ser una conducta aceptada.",
          "La expresión \"dar tomatazos\" sobrevivió como una metáfora. Ya no significaba arrojar tomates físicamente, sino criticar duramente una obra, película o presentación.",
        ],
      },
      {
        type: "image",
        src: "9ZZWnAGL_400x400.jpg",
      },
      {
        type: "text",
        heading: "La ley y el comportamiento en los cines",
        paragraphs: [
          "Actualmente, las salas de cine son espacios privados abiertos al público. Esto significa que sus propietarios pueden establecer reglamentos internos siempre que respeten la legislación vigente.",
          "En muchos países, lanzar objetos dentro de una sala puede considerarse una falta administrativa o incluso una conducta sancionable si pone en riesgo a otras personas o daña las instalaciones. Además, los cines suelen reservarse el derecho de expulsar a quienes alteren el orden o afecten la experiencia de otros espectadores.",
          "Las normas modernas buscan proteger tanto la seguridad como la comodidad de los asistentes. Lo que en otros tiempos podía verse como una forma de participación del público hoy sería considerado una conducta inapropiada.",
        ],
      },
      {
        type: "text",
        heading: "¿Por qué seguimos diciendo \"tomatazos\"?",
        paragraphs: [
          "La razón es simple: las expresiones culturales suelen sobrevivir mucho después de que desaparecen las costumbres que les dieron origen.",
          "Hoy, cuando un crítico publica una reseña negativa o una película recibe una mala calificación del público, se dice que recibió \"tomatazos\". De hecho, varios sitios especializados en cine han adoptado esta imagen como símbolo de la opinión de los espectadores, utilizando el tomate como un ícono universal de aprobación o desaprobación.",
          "La frase se ha convertido en una manera divertida de describir el juicio del público sin necesidad de que ningún tomate salga volando.",
        ],
      },
      {
        type: "text",
        heading: "Conclusión",
        paragraphs: [
          "La expresión \"dar tomatazos\" nació de una antigua tradición asociada al rechazo público en teatros y espectáculos. Con el paso del tiempo, las leyes, los reglamentos y la evolución de los espacios de entretenimiento hicieron desaparecer estas conductas de los cines modernos. Sin embargo, la imagen del tomate como símbolo de una mala recepción sobrevivió y continúa formando parte del lenguaje popular y de la cultura cinematográfica.",
          "La próxima vez que escuches que una película recibió muchos \"tomatazos\", recuerda que detrás de esa simple expresión existe una historia que conecta siglos de entretenimiento, normas de convivencia y la forma en que el público expresa su opinión.",
        ],
      },
    ],
  },
  {
    slug: "brujeria-comentologia-black-metal",
    title:
      "\"Brujería\": el lanzamiento que marcó un antes y un después en la Comentología Black Metal",
    category: "Música",
    color: "bg-gold",
    hiddenFromHome: true,
    gradient: "from-amber-400 to-orange-500",
    date: "2025-02-10",
    excerpt:
      "La escena de la Comentología Black Metal ha sido durante años un espacio donde la música extrema, la crítica cultural y la creatividad digital convergen para dar forma a una identidad única. Dentro de este contexto, pocos acontecimientos han generado tanta expectativa como el lanzamiento de \"Brujería\".",
    coverImage: "portada.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "La escena de la Comentología Black Metal ha sido durante años un espacio donde la música extrema, la crítica cultural y la creatividad digital convergen para dar forma a una identidad única. Dentro de este contexto, pocos acontecimientos han generado tanta expectativa como el lanzamiento de \"Brujería\", el primer álbum oficial del proyecto Comentología Black Metal.",
          "Más que un simple debut, \"Brujería\" representa el inicio de una propuesta artística que busca combinar la estética oscura y atmosférica del black metal con una visión contemporánea de la cultura digital y las comunidades en línea.",
        ],
      },
      {
        type: "image",
        src: "portada.jpeg",
      },
      {
        type: "text",
        heading: "El nacimiento de un proyecto diferente",
        paragraphs: [
          "Desde sus primeras apariciones, Comentología Black Metal llamó la atención por su capacidad para mezclar referencias tradicionales del metal extremo con elementos propios de la era de internet. Lejos de limitarse a los temas clásicos del género, el proyecto exploró narrativas relacionadas con la identidad digital, los fenómenos sociales en línea y el choque entre lo antiguo y lo moderno.",
          "Con \"Brujería\", esa visión alcanzó su primera materialización en formato de larga duración.",
        ],
      },
      {
        type: "image",
        src: "d1ff0574-9d8d-4530-955e-b86225f7192b.png",
      },
      {
        type: "text",
        heading: "Un álbum envuelto en misterio",
        paragraphs: [
          "Fiel al espíritu del black metal, el lanzamiento estuvo rodeado de una atmósfera de misterio y expectativa. El nombre \"Brujería\" evoca imágenes de rituales, conocimientos ocultos y tradiciones ancestrales, elementos que históricamente han estado presentes en la iconografía del género.",
          "Sin embargo, el álbum no se limita a reproducir símbolos conocidos. A través de su concepto, busca reinterpretar la idea de la brujería como una metáfora del conocimiento prohibido, la transformación y la búsqueda de identidad en un mundo cada vez más conectado.",
        ],
      },
      {
        type: "text",
        heading: "Sonido y propuesta artística",
        paragraphs: [
          "Musicalmente, \"Brujería\" toma inspiración de las raíces del black metal, incorporando guitarras atmosféricas, pasajes sombríos y una producción que prioriza la creación de ambientes inmersivos.",
          "Al mismo tiempo, el proyecto introduce elementos propios que le permiten diferenciarse dentro de una escena ampliamente diversa. Esta combinación de tradición e innovación ha sido uno de los aspectos más comentados por quienes han seguido el desarrollo de la propuesta.",
        ],
      },
      {
        type: "image",
        src: "DGhNpcw3_400x400.jpg",
      },
      {
        type: "text",
        heading: "La recepción de la comunidad",
        paragraphs: [
          "El lanzamiento de \"Brujería\" fue recibido con interés tanto por seguidores del black metal como por miembros de comunidades digitales que ya conocían el proyecto. Las discusiones en redes sociales, foros y espacios especializados destacaron especialmente la originalidad del concepto y la manera en que conecta referencias culturales aparentemente distantes.",
          "Para muchos, el álbum representa una muestra de cómo los géneros musicales pueden adaptarse a nuevas formas de expresión sin perder su esencia.",
        ],
      },
      {
        type: "text",
        heading: "Un punto de partida",
        paragraphs: [
          "Más allá de su recepción inicial, \"Brujería\" debe entenderse como el comienzo de una trayectoria. Como primer lanzamiento de Comentología Black Metal, el disco establece las bases de una identidad artística que aún tiene mucho por explorar.",
          "En una época donde la música y la cultura digital se encuentran más entrelazadas que nunca, proyectos como este demuestran que todavía existen nuevas formas de reinterpretar géneros con décadas de historia.",
        ],
      },
      {
        type: "image",
        src: "eb7aab9f-c1a4-40d6-8443-35ee89fbe462.png",
      },
      {
        type: "text",
        heading: "Conclusión",
        paragraphs: [
          "El lanzamiento de \"Brujería\" marca un hito para Comentología Black Metal al convertirse en su primer álbum oficial. Con una propuesta que combina elementos clásicos del black metal con una visión contemporánea inspirada en la cultura digital, el disco se presenta como una obra que busca abrir nuevos caminos dentro de una escena en constante evolución.",
          "Para los seguidores del proyecto, \"Brujería\" no es solo un álbum debut: es el primer capítulo de una historia que apenas comienza.",
        ],
      },
    ],
  },
  {
    slug: "las-novias-de-chucky-comentologia",
    title:
      "Las Novias de Chucky: La tira cómica exclusiva de la Comentología que conquistó a sus lectores",
    category: "Espectáculos",
    color: "bg-accent",
    hiddenFromHome: true,
    gradient: "from-violet-400 to-purple-600",
    date: "2025-02-17",
    excerpt:
      "En el vasto universo de publicaciones independientes, pocas historietas han logrado generar tanta conversación como \"Las Novias de Chucky\", una serie de cómics publicada de manera exclusiva dentro de la Comentología.",
    coverImage: "portada.jpg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "En el vasto universo de publicaciones independientes, pocas historietas han logrado generar tanta conversación entre los seguidores de la cultura popular como \"Las Novias de Chucky\", una serie de cómics publicada de manera exclusiva dentro de la Comentología.",
          "Inspirada en el formato clásico de revistas populares como El Libro Vaquero, la historieta mezcla humor, drama, romance, situaciones absurdas y referencias a la cultura digital, creando una identidad propia que rápidamente encontró una audiencia fiel.",
        ],
      },
      {
        type: "image",
        src: "portada.jpg",
      },
      {
        type: "text",
        heading: "El nacimiento de una idea inesperada",
        paragraphs: [
          "La historia surgió originalmente como una sección experimental dentro de la Comentología. Lo que comenzó como una parodia de las historietas románticas tradicionales terminó convirtiéndose en una de las publicaciones más comentadas por los lectores.",
          "La premisa era sencilla: seguir las desventuras amorosas de Chucky, un personaje carismático cuya vida sentimental es tan caótica como impredecible. Cada edición presenta nuevas situaciones, romances imposibles, rivalidades, malentendidos y giros inesperados que mantienen a los lectores pendientes del siguiente capítulo.",
        ],
      },
      {
        type: "image",
        src: "48e507b4-3010-4155-b729-c3f51106ecbd.png",
      },
      {
        type: "text",
        heading: "Un homenaje a las historietas clásicas",
        paragraphs: [
          "Uno de los aspectos más llamativos de Las Novias de Chucky es su clara inspiración en las historietas de bolsillo que marcaron a generaciones de lectores en México y Latinoamérica.",
          "La serie recupera elementos tradicionales como: narración directa y sencilla, personajes exagerados y memorables, portadas llamativas, historias autoconclusivas con continuidad ligera, y humor popular combinado con drama romántico.",
          "Sin embargo, la obra actualiza la fórmula incorporando referencias a redes sociales, memes, comunidades digitales y situaciones contemporáneas.",
        ],
      },
      {
        type: "text",
        heading: "Personajes que dieron vida a la serie",
        paragraphs: [
          "A lo largo de sus entregas han aparecido numerosos personajes que forman parte del peculiar universo de Chucky. Entre ellos destacan: las distintas \"novias\" que dan nombre a la serie, amigos y rivales que constantemente complican la vida del protagonista, personajes inspirados en figuras reconocibles de internet, y vecinos, familiares y personajes recurrentes que aportan humor a cada historia.",
          "Esta combinación ha permitido que cada número tenga una identidad propia sin perder la esencia de la serie.",
        ],
      },
      {
        type: "image",
        src: "87519ca1-d6aa-4838-aa87-978fd69fab08.png",
      },
      {
        type: "text",
        heading: "Un fenómeno dentro de la Comentología",
        paragraphs: [
          "Con el paso del tiempo, Las Novias de Chucky dejó de ser una simple sección para convertirse en una de las publicaciones más esperadas por la comunidad.",
          "Los lectores comenzaron a debatir teorías sobre los personajes, compartir sus capítulos favoritos y crear sus propias interpretaciones de las historias, contribuyendo a que la historieta se transformara en un fenómeno cultural dentro del ecosistema de la Comentología.",
        ],
      },
      {
        type: "text",
        heading: "El futuro de la historieta",
        paragraphs: [
          "Gracias a su popularidad, muchos seguidores esperan nuevas aventuras, personajes inéditos y recopilaciones especiales que permitan conservar las historias más recordadas de la serie.",
          "Lo que comenzó como una idea sencilla terminó demostrando que las historietas de estilo clásico siguen teniendo un lugar importante entre las nuevas generaciones de lectores.",
        ],
      },
      {
        type: "image",
        src: "c525d17e-b778-40ec-ad4a-87c5712d07e2.png",
      },
      {
        type: "text",
        heading: "Conclusión",
        paragraphs: [
          "Las Novias de Chucky representa una curiosa mezcla entre la tradición de las historietas populares latinoamericanas y la cultura digital contemporánea. Con personajes memorables, humor característico y un formato accesible, la serie se ha convertido en una de las propuestas más distintivas de la Comentología.",
          "Más que una simple tira cómica, es una muestra de cómo los formatos clásicos pueden reinventarse para conectar con nuevas audiencias sin perder el encanto que los hizo populares en primer lugar.",
        ],
      },
    ],
  },
  {
    slug: "pinturas-monjas-siglo-xv-digitalizacion",
    title:
      "En exclusiva: digitalizamos las perturbadoras pinturas de monjas del siglo XV",
    category: "Cultura",
    color: "bg-accent",
    hiddenFromHome: true,
    gradient: "from-purple-400 to-indigo-600",
    date: "2025-02-24",
    excerpt:
      "Un hallazgo que parece sacado de una novela gótica ha despertado la curiosidad de historiadores, artistas y amantes de los misterios medievales. Gracias a un proyecto de preservación digital, un conjunto de extrañas pinturas atribuidas a comunidades religiosas del siglo XV ha vuelto a ver la luz.",
    coverImage: "portada.png",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Un hallazgo que parece sacado de una novela gótica ha despertado la curiosidad de historiadores, artistas y amantes de los misterios medievales. Gracias a un reciente proyecto de preservación digital, un conjunto de extrañas pinturas atribuidas a comunidades religiosas del siglo XV ha vuelto a ver la luz después de permanecer oculto durante siglos en archivos y colecciones privadas.",
          "Las obras, que muestran escenas inquietantes de visiones, rituales, figuras espectrales y representaciones poco convencionales de la vida monástica, han sido calificadas por algunos especialistas como uno de los conjuntos pictóricos más enigmáticos de la época.",
        ],
      },
      {
        type: "image",
        src: "portada.png",
      },
      {
        type: "text",
        heading: "Arte religioso... o algo más",
        paragraphs: [
          "Durante la Edad Media, los conventos no solo eran centros de oración. También funcionaban como espacios de producción artística, donde monjas y religiosos copiaban manuscritos, elaboraban ilustraciones y documentaban experiencias espirituales.",
          "Sin embargo, algunas de las pinturas recientemente digitalizadas parecen alejarse de las representaciones tradicionales. Entre las imágenes destacan: monjas rodeadas por figuras aladas de apariencia inquietante, escenas nocturnas iluminadas por extrañas luces, representaciones simbólicas de tentaciones y visiones, criaturas híbridas que combinan rasgos humanos y animales, e interpretaciones alegóricas del pecado y la redención.",
          "Aunque hoy pueden parecer perturbadoras, los expertos recuerdan que muchas de estas imágenes eran utilizadas para representar luchas espirituales internas y conceptos teológicos complejos.",
        ],
      },
      {
        type: "image",
        src: "0d24eae7-04ea-433a-8ff7-75ba1c20bdd1.png",
      },
      {
        type: "text",
        heading: "El proceso de digitalización",
        paragraphs: [
          "Las obras fueron sometidas a un proceso de escaneo de alta resolución que permitió recuperar detalles invisibles a simple vista.",
          "Gracias a la tecnología moderna fue posible identificar: trazos ocultos bajo capas de pintura, correcciones realizadas por los artistas originales, pigmentos que habían perdido intensidad con el paso de los siglos, e inscripciones marginales que habían permanecido ilegibles durante generaciones.",
          "Los archivos digitales obtenidos permiten estudiar las pinturas sin poner en riesgo las delicadas piezas originales.",
        ],
      },
      {
        type: "text",
        heading: "Las teorías alrededor de las pinturas",
        paragraphs: [
          "Como suele ocurrir con los descubrimientos históricos poco comunes, las obras han generado numerosas teorías.",
          "Algunos investigadores consideran que las imágenes representan experiencias místicas documentadas por las propias religiosas. Otros creen que se trata de alegorías visuales destinadas a enseñar conceptos religiosos a una población mayoritariamente analfabeta. Y, por supuesto, no faltan quienes ven en las pinturas evidencias de antiguas leyendas, supersticiones o relatos sobrenaturales que circulaban en los conventos de la época.",
          "Hasta ahora no existe consenso definitivo sobre el significado de varias de las escenas más extrañas.",
        ],
      },
      {
        type: "image",
        src: "1500x500 (3).jpeg",
      },
      {
        type: "text",
        heading: "Un vistazo a la mentalidad medieval",
        paragraphs: [
          "Más allá de su apariencia inquietante, estas pinturas ofrecen una ventana única al mundo espiritual y cultural del siglo XV.",
          "En una época marcada por epidemias, guerras, cambios políticos y profundas creencias religiosas, las imágenes reflejan los miedos, esperanzas y preguntas existenciales de quienes las crearon.",
          "Lo que hoy puede parecer oscuro o perturbador era, para muchas personas de aquel tiempo, una representación natural de la batalla entre el bien y el mal.",
        ],
      },
      {
        type: "text",
        heading: "Conclusión",
        paragraphs: [
          "La digitalización de estas enigmáticas pinturas de monjas del siglo XV está permitiendo que nuevas generaciones exploren un capítulo poco conocido de la historia del arte religioso. Entre símbolos extraños, visiones misteriosas y escenas difíciles de interpretar, las obras continúan fascinando a investigadores y curiosos por igual.",
          "Una cosa es segura: siglos después de haber sido creadas, estas inquietantes imágenes siguen provocando exactamente lo mismo que provocaron en su tiempo... asombro, preguntas y un profundo sentimiento de misterio.",
        ],
      },
      {
        type: "image",
        src: "UL6CHh-i_400x400.jpg",
      },
    ],
  },
  {
    slug: "netflix-serie-monjas-zombis",
    title: "¿Netflix prepara una serie de monjas zombis? El inquietante rumor que está incendiando las redes",
    category: "Rumores",
    color: "bg-accent",
    gradient: "from-violet-400 to-purple-600",
    date: "2024-03-15",
    excerpt: "¿Monjas, zombis y terror sobrenatural? Esa es la combinación que, según un creciente rumor en redes sociales y foros de entretenimiento, podría convertirse en una de las próximas apuestas de Netflix para los amantes del horror.",
    coverImage: "portada.png",
    exclusiveToken: "290109AdoPXs",
    hiddenFromHome: true,
    blocks: [
      {
        type: "text",
        paragraphs: [
          "¿Monjas, zombis y terror sobrenatural? Esa es la combinación que, según un creciente rumor en redes sociales y foros de entretenimiento, podría convertirse en una de las próximas apuestas de Netflix para los amantes del horror.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Aunque no existe ninguna confirmación oficial por parte de Netflix, las especulaciones apuntan a un proyecto que mezclaría el horror religioso con una epidemia zombi, un subgénero que ha ganado fuerza durante los últimos años gracias al éxito de producciones como Kingdom, All of Us Are Dead y otras series de supervivencia.",
        ],
      },
      {
        type: "image",
        src: "bHTvKrAU_400x400.jpg",
      },
      {
        type: "text",
        paragraphs: [
          "¿De dónde surge el rumor? Las teorías comenzaron a circular después de que varios usuarios afirmaran haber visto referencias a un supuesto proyecto en fase temprana de desarrollo. Hasta el momento, ninguna fuente confiable ha confirmado la existencia de la serie, por lo que toda la información debe tomarse con cautela. Aun así, la premisa ha capturado la imaginación de miles de fanáticos del género.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "¿Cómo sería la historia? Los rumores describen una trama ambientada en un monasterio aislado donde una antigua reliquia desencadena una infección capaz de convertir a religiosas y habitantes cercanos en criaturas violentas. Un pequeño grupo de sobrevivientes tendría que descubrir el origen de la plaga mientras enfrenta secretos ocultos por la Iglesia durante siglos. La mezcla recordaría a películas de terror religioso con el ritmo frenético de una historia de zombis.",
        ],
      },
      {
        type: "image",
        src: "Gx8ExrCXgAAZbCp.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "¿Por qué emociona tanto a los fans? Las historias que combinan elementos religiosos con horror sobrenatural suelen generar mucha conversación. Si además se añade una invasión zombi, el resultado podría ofrecer una propuesta distinta dentro del catálogo de Netflix. Muchos usuarios incluso comparan la idea con una versión mucho más oscura de Warrior Nun.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "¿Es real? Por ahora, no. No hay anuncios oficiales, reparto confirmado, fecha de estreno ni registros públicos que respalden la existencia de esta supuesta serie. Si Netflix llegara a confirmar un proyecto con esta temática, sería una de las producciones más llamativas para los aficionados al horror sobrenatural.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "¿Tú verías una serie de monjas zombis? Cuéntanos en los comentarios.",
        ],
      },
    ],
  },
  {
    slug: "la-plaga-expo-ivan",
    title: "La Plaga estuvo con Iván en la Expo 2026 y conseguimos imágenes exclusivas",
    category: "Exclusiva",
    color: "bg-gold",
    gradient: "from-amber-400 to-orange-500",
    date: "2024-04-20",
    excerpt: "La Expo 2026 reunió a cientos de asistentes, creadores de contenido, marcas y entusiastas de la tecnología y el entretenimiento. La Plaga estuvo presente para ofrecer una cobertura diferente.",
    coverImage: "portada.jpeg",
    exclusiveToken: "290109AdoPXs",
    hiddenFromHome: true,
    blocks: [
      {
        type: "text",
        paragraphs: [
          "La Expo 2026 reunió a cientos de asistentes, creadores de contenido, marcas y entusiastas de la tecnología y el entretenimiento. La Plaga estuvo presente para ofrecer una cobertura diferente, mostrando no solo lo que ocurrió en el escenario principal, sino también todo aquello que normalmente queda fuera de las cámaras.",
        ],
      },
      {
        type: "image",
        src: "GxQK3XaWAAAkfdR.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Acompañamos a Iván durante gran parte de su recorrido por la exposición, documentando cada momento importante con fotografías y videos exclusivos. Recorrimos los diferentes pabellones, proyectos, demostraciones tecnológicas, lanzamientos y experiencias interactivas.",
        ],
      },
      {
        type: "image",
        src: "Atinale-al-numero.png",
      },
      {
        type: "image",
        src: "Expertos-color-make-1.webp",
      },
      {
        type: "text",
        paragraphs: [
          "En los próximos días estaremos publicando una galería completa con fotografías inéditas, clips exclusivos y un resumen en video con los momentos más destacados de la Expo 2026.",
        ],
      },
      {
        type: "image",
        src: "Conecta-con-asesores.webp",
      },
      {
        type: "image",
        src: "Workshops.webp",
      },
    ],
  },
  {
    slug: "galeria-arte-elisa-ruiz-fajardo",
    title: "La Plaga presenta: Galería de Arte Exclusiva de Laura Ruiz Estrada",
    category: "Arte",
    color: "bg-accent",
    gradient: "from-purple-400 to-indigo-600",
    date: "2024-06-01",
    excerpt: "El arte tiene la capacidad de detener el tiempo, provocar emociones y contar historias. La Plaga se enorgullece en presentar una galería de arte exclusiva dedicada a la obra de Laura Ruiz Estrada.",
    coverImage: "portada.png",
    exclusiveToken: "290109AdoPXs",
    hiddenFromHome: true,
    blocks: [
      {
        type: "text",
        paragraphs: [
          "El arte tiene la capacidad de detener el tiempo, provocar emociones y contar historias. La Plaga se enorgullece en presentar una galería de arte exclusiva dedicada a la obra de Laura Ruiz Estrada, un espacio digital donde podrás apreciar de cerca el talento, la sensibilidad y la visión artística de una creadora que convierte cada pieza en una experiencia visual.",
        ],
      },
      {
        type: "image",
        src: "04e44a17-2941-41f3-a7c8-2a79fe92d99b.png",
      },
      {
        type: "text",
        paragraphs: [
          "Esta exposición reúne una cuidada selección de obras que reflejan la identidad de la artista, permitiendo al visitante explorar cada detalle, textura y composición desde una perspectiva única.",
        ],
      },
      {
        type: "image",
        src: "2fd6d579-fd66-4fc7-a979-d66c1ddb306b.png",
      },
      {
        type: "text",
        paragraphs: [
          "Si eres amante del arte, la ilustración, la pintura o simplemente disfrutas descubrir nuevos talentos, esta galería es una invitación a recorrer una colección que celebra la creatividad y la expresión artística contemporánea.",
        ],
      },
      {
        type: "image",
        src: "c95986e8-e01a-43e5-8dcd-7baf07d252ef.png",
      },
      {
        type: "text",
        paragraphs: [
          "Descubre cada obra, conoce a la artista y sumérgete en una experiencia visual única. Solo en La Plaga.",
        ],
      },
    ],
  },
  {
    slug: "apolo-gato-detecta-cancer",
    title: "Apolo, el gato que detecta el cáncer: cuando el instinto felino sorprende a la ciencia",
    category: "Curiosidades",
    color: "bg-primary",
    gradient: "from-rose-500 to-pink-600",
    date: "2024-08-10",
    excerpt: "En el mundo existen historias extraordinarias que parecen sacadas de una película. Una de ellas es la de Apolo, un gato cuya aparente capacidad para detectar cambios en la salud de las personas ha llamado la atención de investigadores y médicos.",
    coverImage: "GoLrYxlXAAAtXi8.jpeg",
    exclusiveToken: "290109AdoPXs",
    hiddenFromHome: true,
    blocks: [
      {
        type: "text",
        paragraphs: [
          "En el mundo existen historias extraordinarias que parecen sacadas de una película. Una de ellas es la de Apolo, un gato cuya aparente capacidad para detectar cambios en la salud de las personas ha llamado la atención de investigadores y médicos.",
        ],
      },
      {
        type: "image",
        src: "GoLrYxlXAAAtXi8.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Los animales poseen sentidos mucho más desarrollados que los humanos. Su olfato, oído y capacidad para percibir cambios sutiles en el comportamiento o en los olores corporales les permiten identificar situaciones que muchas veces pasan desapercibidas para nosotros.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Según relatos compartidos por sus dueños, Apolo comenzó a mostrar una conducta inusual al insistir repetidamente en permanecer cerca de una zona específica del cuerpo de una persona de la familia. Lo que inicialmente parecía una simple muestra de afecto terminó convirtiéndose en una señal de alerta cuando una revisión médica posterior detectó una anomalía.",
        ],
      },
      {
        type: "image",
        src: "HLB6f1kXsAAoYOe.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "¿Pueden los gatos detectar el cáncer? Aunque la evidencia científica sobre los gatos es limitada en comparación con los perros, los expertos creen que algunos animales pueden percibir compuestos orgánicos volátiles liberados por el cuerpo cuando existen determinadas enfermedades.",
        ],
      },
      {
        type: "image",
        src: "GsjCfjaXEAAbdNs.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "La detección temprana continúa siendo una de las herramientas más importantes en la lucha contra el cáncer. Revisiones periódicas, chequeos preventivos y atención oportuna ante cualquier síntoma siguen siendo fundamentales.",
        ],
      },
      {
        type: "image",
        src: "Gxr73I1XsAENzec.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Apolo se ha convertido en un símbolo de ese vínculo especial entre humanos y animales, recordándonos que, aunque todavía quedan muchos misterios por comprender sobre las capacidades de nuestras mascotas, su conexión con nosotros puede llegar a ser sorprendentemente profunda.",
        ],
      },
    ],
  },
  {
    slug: "solsticio-ano-nuevo-2024",
    title: "El Solsticio de Año Nuevo 2024: un fenómeno astronómico que marcó el inicio de un nuevo ciclo",
    category: "Ciencia",
    color: "bg-accent",
    gradient: "from-violet-400 to-purple-600",
    date: "2024-10-05",
    excerpt: "Cada año, millones de personas alrededor del mundo celebran la llegada del Año Nuevo con fiestas, reuniones familiares y tradiciones. Sin embargo, muchos observadores del cielo prestan atención a los fenómenos astronómicos que acompañan el comienzo de cada año.",
    coverImage: "G-hrirlXMAAl0hf.jpeg",
    exclusiveToken: "290109AdoPXs",
    hiddenFromHome: true,
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Cada año, millones de personas alrededor del mundo celebran la llegada del Año Nuevo con fiestas, reuniones familiares y tradiciones. Sin embargo, muchos observadores del cielo prestan atención a los fenómenos astronómicos que acompañan el comienzo de cada año. Entre ellos destaca el llamado 'solsticio de Año Nuevo'.",
        ],
      },
      {
        type: "image",
        src: "G-hrirlXMAAl0hf.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "¿Qué es un solsticio? Un solsticio ocurre cuando el Sol alcanza su máxima separación angular respecto al ecuador terrestre. El solsticio de diciembre de 2024 tuvo lugar el 21 de diciembre, marcando el inicio oficial del invierno en el hemisferio norte y del verano en el hemisferio sur.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "La conexión con el Año Nuevo: Aunque técnicamente no existe un 'solsticio de Año Nuevo', muchas culturas han asociado históricamente el cambio de año con el ciclo solar. Después del solsticio de diciembre, la duración de la luz diurna comienza a aumentar, simbolizando renovación, esperanza y el inicio de una nueva etapa.",
        ],
      },
      {
        type: "image",
        src: "G867C10W4AA_9tq.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Tradiciones alrededor del mundo:\n- Encendido de velas y fogatas para simbolizar el regreso de la luz.\n- Reuniones familiares que representan la unión y la continuidad.\n- Rituales de limpieza y renovación.\n- Observaciones astronómicas.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "El inicio de 2024 representó mucho más que un simple cambio de fecha: una oportunidad para reflexionar sobre los ciclos de la naturaleza, el paso del tiempo y las nuevas oportunidades.",
        ],
      },
    ],
  },
  {
    slug: "apoyo-perritos-calle",
    title: "En La Plaga salimos a apoyar a perritos en situación de calle: te sorprenderá lo que aprendimos",
    category: "Comunidad",
    color: "bg-accent",
    gradient: "from-pink-400 to-rose-600",
    date: "2024-11-15",
    excerpt: "El equipo de La Plaga decidió salir a conocer de cerca la realidad que enfrentan los perritos en situación de calle, llevando alimento, agua y apoyo. Lo que parecía una actividad sencilla terminó convirtiéndose en una experiencia llena de aprendizajes.",
    coverImage: "portada.jpeg",
    exclusiveToken: "290109AdoPXs",
    hiddenFromHome: true,
    blocks: [
      {
        type: "text",
        paragraphs: [
          "El equipo de La Plaga decidió salir a conocer de cerca la realidad que enfrentan los perritos en situación de calle, llevando alimento, agua y apoyo. Lo que parecía una actividad sencilla terminó convirtiéndose en una experiencia llena de aprendizajes, momentos emotivos y reflexiones.",
        ],
      },
      {
        type: "image",
        src: "portada.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "A diario, cientos de perros sobreviven en las calles enfrentando el calor, la lluvia, el hambre y múltiples peligros. Algunos se mostraban desconfiados; otros se acercaban inmediatamente en busca de una caricia. Muchos han desarrollado estrategias para sobrevivir: conocen horarios de comida, han encontrado refugios improvisados. El contacto humano, la atención y el afecto parecen ser tan importantes como la comida misma.",
        ],
      },
      {
        type: "image",
        src: "image.jpg",
      },
      {
        type: "text",
        paragraphs: [
          "También conocimos a personas que ayudan de manera desinteresada: comerciantes que dejan recipientes con agua, vecinos que alimentan a los perros diariamente y rescatistas que dedican tiempo y recursos para mejorar sus vidas.",
        ],
      },
      {
        type: "image",
        src: "Perros-callejeros-mexico-3.jpg",
      },
      {
        type: "text",
        paragraphs: [
          "Formas de contribuir:\n- Promoviendo la adopción responsable.\n- Esterilizando a nuestras mascotas.\n- Apoyando refugios y asociaciones protectoras de animales.\n- Colocando agua para los animales durante temporadas de calor.\n- Fomentando una cultura de respeto y cuidado hacia los seres vivos.",
        ],
      },
      {
        type: "image",
        src: "Perro_tomando_el_sol,_Ipiales,_Colombia,_2015-07-21,_DD_06.jpeg",
      },
      {
        type: "image",
        src: "Captura-de-Pantalla-2021-08-25-a-las-16.09.00.png",
      },
      {
        type: "text",
        paragraphs: [
          "Salimos con la intención de ayudar, pero regresamos con una valiosa lección: la empatía puede transformar vidas. Te sorprendería cuánto puede enseñarte un perrito de la calle sobre resiliencia, lealtad y esperanza.",
        ],
      },
    ],
  },
  {
    slug: "visita-palacio-bellas-artes",
    title: "En La Plaga visitamos el Palacio de Bellas Artes y tomamos fotos exclusivas",
    category: "Cultura",
    color: "bg-primary",
    gradient: "from-rose-500 to-pink-600",
    date: "2024-12-01",
    excerpt: "El equipo de La Plaga tuvo la oportunidad de recorrer uno de los recintos culturales más emblemáticos de México: el majestuoso Palacio de Bellas Artes. Capturamos fotografías exclusivas que muestran detalles arquitectónicos, artísticos e históricos.",
    coverImage: "portada.jpeg",
    exclusiveToken: "290109AdoPXs",
    hiddenFromHome: true,
    blocks: [
      {
        type: "text",
        paragraphs: [
          "El equipo de La Plaga tuvo la oportunidad de recorrer uno de los recintos culturales más emblemáticos de México: el majestuoso Palacio de Bellas Artes. Capturamos fotografías exclusivas que muestran detalles arquitectónicos, artísticos e históricos.",
        ],
      },
      {
        type: "image",
        src: "portada.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Una joya arquitectónica en el corazón de México. Su construcción comenzó a principios del siglo XX. Cada rincón cuenta una historia; sus fachadas, esculturas y decoraciones reflejan el talento de artistas y arquitectos.",
        ],
      },
      {
        type: "image",
        src: "GpL8tU3XUAAEYNo.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Nos enfocamos en fotografiar detalles que escapan a la mirada de los visitantes apresurados: acabados interiores, vistas de sus salones y murales que representan la historia y la identidad cultural mexicana.",
        ],
      },
      {
        type: "image",
        src: "Bellas-Artes1-1.jpg",
      },
      {
        type: "text",
        paragraphs: [
          "El Palacio de Bellas Artes no es únicamente un edificio histórico; es un lugar donde convergen la música, la danza, el teatro y las artes visuales.",
        ],
      },
      {
        type: "image",
        src: "4.jpg",
      },
      {
        type: "image",
        src: "palacio-postal-min-p74cvg25wabizkhil7lu5t9tfwgblpqyengn97ymoo.png",
      },
      {
        type: "image",
        src: "rm1.jpg",
      },
      {
        type: "text",
        paragraphs: [
          "Muy pronto estaremos compartiendo nuestra galería completa con las imágenes exclusivas. Porque en La Plaga seguimos explorando lugares extraordinarios, capturando imágenes únicas y llevando a nuestros lectores historias que merecen ser contadas.",
        ],
      },
    ],
  },
  {
    slug: "estudio-mariposas",
    title: "En La Plaga fuimos a estudiar mariposas y descubrimos un mundo fascinante",
    category: "Ciencia",
    color: "bg-accent",
    gradient: "from-violet-400 to-purple-600",
    date: "2024-07-01",
    excerpt: "A simple vista, las mariposas pueden parecer solo uno de los insectos más bellos de la naturaleza, pero detrás de sus coloridos patrones y delicado vuelo existe un universo lleno de ciencia, adaptación y sorprendentes secretos.",
    coverImage: "portada.jpeg",
    exclusiveToken: "290109AdoPXs",
    hiddenFromHome: true,
    blocks: [
      {
        type: "text",
        paragraphs: [
          "A simple vista, las mariposas pueden parecer solo uno de los insectos más bellos de la naturaleza, pero detrás de sus coloridos patrones y delicado vuelo existe un universo lleno de ciencia, adaptación y sorprendentes secretos. Por eso, el equipo de La Plaga salió al campo para observar y estudiar de cerca a estos increíbles polinizadores.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Lo que comenzó como una jornada de observación terminó convirtiéndose en una experiencia llena de descubrimientos sobre la biodiversidad y la importancia de conservar los ecosistemas donde habitan estas especies.",
        ],
      },
      {
        type: "image",
        src: "20cli-butterflies-articleLarge.webp",
      },
      {
        type: "text",
        paragraphs: [
          "Durante nuestro recorrido pudimos observar distintas especies de mariposas en su entorno natural. Cada una presentaba colores, tamaños y comportamientos diferentes, demostrando la enorme diversidad que existe dentro de este grupo de insectos.",
        ],
      },
      {
        type: "image",
        src: "GxF5JcgXIAABorC.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Aprendimos que los colores de sus alas no solo sirven para llamar la atención. En muchos casos funcionan como mecanismos de defensa, camuflaje o incluso para advertir a posibles depredadores de que podrían ser tóxicas.",
        ],
      },
      {
        type: "image",
        src: "GxF5LEoWQAEK1Tn.jpeg",
      },
      {
        type: "image",
        src: "GxF5MRoWYAA8fJI.jpeg",
      },
      {
        type: "image",
        src: "monarca.webp",
      },
      {
        type: "text",
        paragraphs: [
          "Uno de los aspectos más fascinantes que estudiamos fue su ciclo de vida. Las mariposas pasan por una transformación extraordinaria conocida como metamorfosis completa: huevo, oruga, crisálida y mariposa adulta. Este proceso es considerado uno de los fenómenos más sorprendentes de la naturaleza y continúa siendo objeto de estudio por parte de científicos de todo el mundo.",
        ],
      },
      {
        type: "image",
        src: "GxF6NDHXAAATV8E.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Además de su belleza, las mariposas cumplen una función fundamental como polinizadoras. Al visitar flores en busca de néctar, ayudan a transportar polen entre plantas, contribuyendo a la reproducción de numerosas especies vegetales. Su presencia también es un indicador de la salud ambiental de una región, ya que suelen ser sensibles a los cambios en el clima, la contaminación y la pérdida de hábitat.",
        ],
      },
      {
        type: "image",
        src: "Captura-de-pantalla-2025-02-07-a-las-2.12.44 p.m.webp",
      },
      {
        type: "image",
        src: "GxF6OiKWMAACg-7.jpeg",
      },
      {
        type: "image",
        src: "GxF6Pb-XMAAOOC7.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Durante la jornada descubrimos que muchas especies dependen de plantas muy específicas para sobrevivir. Si esas plantas desaparecen, las poblaciones de mariposas también pueden verse afectadas. Esto nos recordó la importancia de proteger áreas verdes, jardines y espacios naturales que sirven de refugio para estos y otros polinizadores.",
        ],
      },
      {
        type: "image",
        src: "GxF6z7bWQAAb2N_.jpeg",
      },
      {
        type: "image",
        src: "GxF6z7kWAAEIBMT.jpeg",
      },
      {
        type: "image",
        src: "GxF7E5-WMAAE6aM.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "La experiencia dejó claro que incluso los seres más pequeños desempeñan un papel importante en el equilibrio de los ecosistemas. Observar a las mariposas en su ambiente natural nos permitió comprender mejor la compleja red de vida que existe a nuestro alrededor.",
        ],
      },
      {
        type: "image",
        src: "GxF7lXqWUAAr6IN.jpeg",
      },
      {
        type: "image",
        src: "GxF7RqUXUAAh6zT.jpeg",
      },
      {
        type: "image",
        src: "GxF8FylWAAAzfvp.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "En La Plaga, seguimos explorando el mundo para acercar a nuestros lectores historias curiosas, educativas y sorprendentes. Y después de esta visita, podemos afirmar algo con certeza: las mariposas son mucho más que un espectáculo visual; son auténticas protagonistas de la naturaleza.",
        ],
      },
      {
        type: "image",
        src: "GxF8oikXkAADtq1.jpeg",
      },
      {
        type: "image",
        src: "GxF8oimXUAAmIcs.jpeg",
      },
    ],
  },
  {
    slug: "cosecha-pitayas-vivero",
    title: "En La Plaga fuimos a cosechar pitayas al vivero más grande de México",
    category: "Naturaleza",
    color: "bg-accent",
    gradient: "from-violet-400 to-purple-600",
    date: "2024-09-15",
    excerpt: "La naturaleza siempre guarda experiencias sorprendentes, y esta vez el equipo de La Plaga tuvo la oportunidad de visitar uno de los viveros más impresionantes del país para participar en la cosecha de pitayas.",
    coverImage: "portada.jpeg",
    exclusiveToken: "290109AdoPXs",
    hiddenFromHome: true,
    blocks: [
      {
        type: "text",
        paragraphs: [
          "La naturaleza siempre guarda experiencias sorprendentes, y esta vez el equipo de La Plaga tuvo la oportunidad de visitar uno de los viveros más impresionantes del país para participar en la cosecha de pitayas, una de las frutas más llamativas y apreciadas de México.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Entre extensos cultivos, paisajes llenos de color y cientos de plantas cargadas de fruto, vivimos una jornada que nos permitió conocer de cerca el proceso de producción de esta exótica fruta que cada año conquista más mercados dentro y fuera del país.",
        ],
      },
      {
        type: "image",
        src: "portada.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "La pitaya, también conocida como 'fruta del dragón', destaca por sus intensos colores y su apariencia única. Su sabor dulce y refrescante la ha convertido en una de las frutas favoritas de muchas personas, además de ser reconocida por su aporte de vitaminas, antioxidantes y fibra.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Durante nuestra visita pudimos observar ejemplares de diferentes variedades, cada una con características particulares en color, tamaño y sabor.",
        ],
      },
      {
        type: "image",
        src: "Victor-2-1-1024x768.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Recorrer los campos durante la temporada de cosecha fue una experiencia inolvidable. Los frutos maduros destacan entre los cactus trepadores, creando un paisaje espectacular que parece sacado de otro mundo. Aprendimos que la recolección debe realizarse en el momento exacto para garantizar la mejor calidad posible. Un fruto cosechado demasiado pronto o demasiado tarde puede afectar su sabor y textura.",
        ],
      },
      {
        type: "image",
        src: "Victor-3-1024x771.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Uno de los datos más interesantes que descubrimos es que las plantas de pitaya pertenecen a la familia de los cactus. A pesar de ello, producen algunos de los frutos más coloridos y llamativos que pueden encontrarse en la agricultura mexicana.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "La producción de pitaya ha crecido significativamente en los últimos años gracias a la alta demanda de esta fruta tanto en México como en otros países. Los productores continúan innovando y mejorando sus técnicas para ofrecer cosechas de gran calidad. Visitar uno de los viveros más grandes del país nos permitió apreciar el esfuerzo, dedicación y conocimiento que hacen posible que esta fruta llegue a nuestras mesas.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "La visita de La Plaga fue mucho más que una simple cosecha. Fue una oportunidad para conocer de cerca una parte importante de la agricultura mexicana, aprender sobre el cultivo de la pitaya y capturar fotografías exclusivas de un lugar impresionante. Muy pronto compartiremos imágenes inéditas de esta aventura entre enormes cultivos, frutos exóticos y paisajes que demuestran por qué México es una potencia agrícola llena de riqueza natural.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "¿Alguna vez has probado una pitaya recién cosechada? Nosotros sí, y la experiencia fue tan sorprendente como deliciosa.",
        ],
      },
    ],
  },
  {
    slug: "fotos-sector-salud",
    title: "La Plaga e Iván tomaron fotos exclusivas en el sector salud",
    category: "Exclusiva",
    color: "bg-gold",
    gradient: "from-amber-400 to-orange-500",
    date: "2024-05-15",
    excerpt: "En una cobertura especial, el equipo de La Plaga, acompañado por Iván, tuvo acceso a diversas áreas relacionadas con el sector salud para documentar de cerca el trabajo que diariamente realizan médicos, enfermeros y personal administrativo.",
    coverImage: "portada.jpg",
    exclusiveToken: "290109AdoPXs",
    hiddenFromHome: true,
    blocks: [
      {
        type: "text",
        paragraphs: [
          "En una cobertura especial, el equipo de La Plaga, acompañado por Iván, tuvo acceso a diversas áreas relacionadas con el sector salud para documentar de cerca el trabajo que diariamente realizan médicos, enfermeros, técnicos y personal administrativo para atender a la población.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Durante esta visita, logramos capturar una serie de fotografías exclusivas que muestran el esfuerzo, la organización y el compromiso que hacen posible el funcionamiento de los servicios de salud.",
        ],
      },
      {
        type: "image",
        src: "portada.jpg",
      },
      {
        type: "text",
        paragraphs: [
          "Muchas veces, cuando acudimos a una clínica u hospital, solo vemos una pequeña parte del trabajo que se realiza. Sin embargo, detrás de cada paciente atendido existe una compleja red de profesionales que colaboran para brindar atención oportuna y de calidad.",
        ],
      },
      {
        type: "image",
        src: "Sector-Salud.png",
      },
      {
        type: "text",
        paragraphs: [
          "Nuestras cámaras pudieron documentar algunos de estos procesos, mostrando el esfuerzo coordinado de quienes trabajan día a día para mantener en funcionamiento los servicios médicos.",
        ],
      },
      {
        type: "image",
        src: "G0M937LXkAAF9Xc.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Durante el recorrido, La Plaga e Iván registraron imágenes inéditas que reflejan la actividad cotidiana del sector salud. Desde áreas de atención hasta espacios de trabajo especializados, cada fotografía cuenta una historia de dedicación y servicio.",
        ],
      },
      {
        type: "image",
        src: "Gx3eheSXwAAYci8.jpeg",
      },
      {
        type: "text",
        paragraphs: [
          "Las imágenes capturadas permiten apreciar aspectos que normalmente permanecen fuera de la vista del público, ofreciendo una perspectiva diferente sobre la labor que realizan miles de trabajadores de la salud.",
        ],
      },
      {
        type: "image",
        src: "GxJYPCZWcAEEGqj.png",
      },
      {
        type: "text",
        paragraphs: [
          "Uno de los aspectos que más llamó nuestra atención fue la combinación entre tecnología, capacitación y trabajo humano que permite atender a una gran cantidad de personas cada día. Cada procedimiento, cada registro y cada atención forman parte de un sistema diseñado para responder a las necesidades de la comunidad de manera eficiente y segura.",
        ],
      },
      {
        type: "image",
        src: "sector-salud-carencias-crecientes-en-mexico_e4836942-e057-4e50-b717-09d5c3e7db0b_medialjnimgndimage=fullsize.webp",
      },
      {
        type: "image",
        src: "1.jpg",
      },
      {
        type: "text",
        paragraphs: [
          "Esta visita reafirmó la importancia de reconocer el trabajo de quienes forman parte del sector salud. Más allá de los equipos y las instalaciones, son las personas quienes hacen posible que los servicios funcionen y lleguen a quienes los necesitan.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Las fotografías exclusivas obtenidas por La Plaga e Iván buscan acercar a nuestros lectores a una realidad que pocas veces puede observarse desde dentro. En La Plaga seguimos llevando historias, reportajes y fotografías exclusivas desde los lugares donde ocurren los acontecimientos que marcan la vida de nuestra comunidad.",
        ],
      },
    ],
  },
  {
    slug: "carlos-mata-vision-ecatepec",
    title: "EXCLUSIVA | Carlos Mata habla sobre su visión para Ecatepec",
    subtitle:
      '"Es momento de construir un municipio más seguro, moderno y con oportunidades para todos"',
    category: "Política",
    color: "bg-primary",
    gradient: "from-rose-500 to-pink-600",
    date: "2024-07-01",
    excerpt:
      "En una conversación exclusiva con el equipo de nuestra revista digital, Carlos Mata compartió su perspectiva sobre el presente y el futuro de Ecatepec, abordando temas fundamentales para el desarrollo del municipio.",
    coverImage: "carlos.jpg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Ecatepec, Estado de México. En una conversación exclusiva con el equipo de nuestra revista digital, Carlos Mata compartió su perspectiva sobre el presente y el futuro de Ecatepec, abordando temas que considera fundamentales para el desarrollo del municipio: seguridad, infraestructura, servicios públicos, empleo, participación ciudadana y atención a las comunidades.",
          "Durante la entrevista, Mata señaló que Ecatepec enfrenta retos importantes derivados de años de crecimiento acelerado, pero sostuvo que también cuenta con el potencial humano y económico para convertirse en uno de los municipios más fuertes del país si existe una estrategia de largo plazo y un trabajo coordinado entre autoridades y ciudadanía.",
          '"Ecatepec no necesita promesas vacías; necesita proyectos que puedan convertirse en resultados medibles. La gente quiere vivir con tranquilidad, tener calles en buen estado, agua, alumbrado y oportunidades para sacar adelante a sus familias."',
        ],
      },
      {
        type: "image",
        src: "carlos.jpg",
      },
      {
        type: "text",
        heading: "Seguridad: coordinación, tecnología y prevención",
        paragraphs: [
          "Uno de los ejes que destacó fue la importancia de fortalecer la seguridad pública mediante una mejor coordinación entre corporaciones, el uso de tecnología, mayor capacitación para los cuerpos policiacos y estrategias de prevención que involucren a jóvenes, escuelas y organizaciones vecinales.",
        ],
      },
      {
        type: "text",
        heading: "Desarrollo económico e inversión",
        paragraphs: [
          "Asimismo, explicó que el desarrollo económico debe convertirse en una prioridad para atraer nuevas inversiones que generen empleos bien remunerados, al tiempo que se impulsa el crecimiento de pequeños y medianos negocios locales.",
          '"Cuando llegan inversiones también llegan oportunidades. Debemos facilitar que quien quiera emprender o invertir encuentre condiciones para hacerlo, porque eso beneficia directamente a las familias de Ecatepec."',
        ],
      },
      {
        type: "text",
        heading: "Infraestructura y servicios públicos",
        paragraphs: [
          "En materia de infraestructura, Carlos Mata habló sobre la necesidad de modernizar vialidades, mejorar el transporte, recuperar espacios públicos y dar mantenimiento permanente a parques, avenidas y zonas habitacionales.",
          "También subrayó la importancia de garantizar servicios públicos eficientes, particularmente en rubros como alumbrado, recolección de basura y abastecimiento de agua, temas que calificó como esenciales para mejorar la calidad de vida de la población.",
        ],
      },
      {
        type: "text",
        heading: "Juventud y participación ciudadana",
        paragraphs: [
          '"Nuestros jóvenes necesitan espacios deportivos, culturales y tecnológicos donde puedan desarrollar su talento. Apostar por ellos significa apostar por el futuro de Ecatepec."',
          "Respecto a la participación ciudadana, señaló que considera indispensable mantener un diálogo permanente con vecinos, comerciantes, empresarios y organizaciones sociales para construir soluciones de manera conjunta.",
        ],
      },
      {
        type: "text",
        heading: "Transparencia y visión de futuro",
        paragraphs: [
          "Para Carlos Mata, el desarrollo del municipio debe basarse en la transparencia, la rendición de cuentas y una administración cercana a la gente, donde las decisiones respondan a las necesidades reales de cada comunidad.",
          "Al concluir la entrevista, reiteró que su visión contempla un Ecatepec con mayor seguridad, mejores servicios, crecimiento económico y espacios dignos para las familias.",
          '"Mi compromiso es seguir trabajando y escuchando a la ciudadanía. Ecatepec tiene todo para convertirse en un referente de desarrollo, pero eso solo será posible con planeación, trabajo constante y la participación de todos."',
          "La entrevista permitió conocer una perspectiva enfocada en el fortalecimiento institucional, el desarrollo urbano y la participación social como elementos clave para el futuro del municipio.",
        ],
      },
    ],
  },
  {
    slug: "tiroteo-ecatepec",
    title: "ÚLTIMA HORA | Comentología está en el lugar: el discurso terminó en el caos",
    category: "Última Hora",
    color: "bg-primary",
    gradient: "from-rose-600 to-red-700",
    date: "2025-06-01",
    excerpt:
      "Cobertura especial desde Ecatepec: el evento político encabezado por Carlos Mata terminó de manera inesperada. Nuestro equipo documentó los momentos.",
    coverImage: "portada.jpeg",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Ecatepec de Morelos, Estado de México — 1 de junio de 2025.",
          "Ecatepec acaba de convertirse en el centro de una jornada que nadie esperaba. El equipo de Comentología se encuentra en el lugar de los hechos realizando una cobertura especial del evento político encabezado por Carlos Mata. Lo que inició como un acto público con cientos de asistentes cambió drásticamente en cuestión de segundos, dando paso a momentos de confusión que transformaron por completo el ambiente.",
          "Desde temprana hora nuestro equipo se instaló en distintos puntos del recinto para documentar la llegada de simpatizantes, líderes vecinales y ciudadanos que acudió al evento. La plaza lucía llena. Banderas, lonas, música y decenas de personas esperando el inicio del discurso marcaban el ambiente de una mañana que parecía transcurrir con absoluta normalidad.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Cuando Carlos Mata comenzó su intervención, la atención de los asistentes se concentró por completo en el escenario. Durante varios minutos el acto se desarrolló sin contratiempos. Los aplausos respondían a cada mensaje y las cámaras no dejaban de registrar cada instante.",
          "Sin embargo, todo cambió de manera repentina.",
        ],
      },
      {
        type: "video",
        src: "tiroteo1.mp4",
      },
      {
        type: "text",
        paragraphs: [
          "En cuestión de segundos, el ambiente dio un giro inesperado. La tranquilidad dio paso al desconcierto. Los asistentes comenzaron a reaccionar de manera inmediata mientras el evento quedaba completamente interrumpido. La multitud buscó alejarse de la zona y el lugar pasó de ser un escenario político a una escena marcada por la incertidumbre.",
        ],
      },
      {
        type: "video",
        src: "tiroteo2.mp4",
      },
      {
        type: "text",
        paragraphs: [
          "Comentología permaneció en el sitio durante todo momento.",
          "Mientras muchas personas abandonaban el lugar, nuestro equipo continuó documentando lo que ocurría. Cada fotografía capturada refleja la intensidad de esos minutos: sillas vacías, pancartas abandonadas, organizadores intentando recuperar el control y cientos de personas reaccionando ante una situación completamente inesperada.",
          "Nuestros fotógrafos se desplazaron por distintos puntos del evento para obtener una cobertura completa de lo sucedido. Ninguna de las imágenes que estaremos publicando durante las próximas horas proviene de terceros. Todo el material fue obtenido exclusivamente por el equipo de Comentología.",
        ],
      },
      {
        type: "text",
        paragraphs: [
          "Al momento de la publicación de esta nota, seguimos en el lugar recopilando información y organizando el material fotográfico y audiovisual capturado durante la cobertura. En las próximas horas estaremos compartiendo nuevas imágenes, videos y una cronología completa de esta historia ficticia conforme avance nuestra producción narrativa.",
          "Esta es una cobertura especial de Comentología. Si quieres conocer todos los detalles de esta historia de ficción y acceder a la galería completa con imágenes exclusivas, permanece atento a nuestras próximas publicaciones.",
        ],
      },
    ],
  },

];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
