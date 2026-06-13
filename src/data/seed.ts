import type { BlogPost, HomePage, Page, Person, Service, SiteSettings } from '@lib/types';

const seoImage = '/images/hero-exterior.jpg';

export const siteSettings: SiteSettings = {
  title: 'Mammolina Montessori',
  description:
    'Escuela internacional Montessori de infantil y primaria en Valencia, autorizada por la Conselleria de Educación de la GVA y acreditada por NEASC.',
  logo: '/images/logo.png',
  email: 'info@mammolinamontessori.com',
  phone: '+34 641 380 198',
  address: 'Calle 608, N. 9, 46182 La Cañada (Paterna)',
  social: {
    instagram: 'https://www.instagram.com/mammolinamontessorivalencia/',
    facebook: 'https://www.facebook.com/mammolinamontessoriinternationalschool/'
  },
  seo: {
    title: 'Colegio Montessori Valencia | Mammolina Montessori',
    description:
      'Escuela internacional Montessori multilingüe de infantil y primaria en Valencia.',
    ogImage: seoImage
  }
};

export const homePage: HomePage = {
  headline: {
    es: 'Mammolina Montessori',
    en: 'Mammolina Montessori'
  },
  subheadline: {
    es: 'Una escuela internacional de infantil y primaria autorizada por la Conselleria de Educación de la GVA y acreditada por NEASC que ofrece una metodología Montessori multilingüe (inglés-francés-español) en un ambiente internacional y un entorno natural.',
    en: 'An international preschool and primary school authorized by the Valencian education authority and accredited by NEASC, offering a multilingual Montessori methodology in an international community and natural setting.'
  },
  heroImage: '/images/hero-exterior.jpg',
  whyTitle: {
    es: '¿Qué encontrarás en Mammolina Montessori?',
    en: 'What will you find at Mammolina Montessori?'
  },
  whyBody: {
    es: 'Como escuela internacional pequeña, privada y familiar, los niños se benefician de un alumnado diverso, un entorno multilingüe enriquecedor, una educación individualizada y un hermoso espacio al aire libre.',
    en: 'As a small, private and family-oriented international school, children benefit from a diverse community, a rich multilingual environment, individualized education and a beautiful outdoor space.'
  },
  highlights: [
    { es: 'Un verdadero entorno Montessori de paz', en: 'A genuine peaceful Montessori environment' },
    { es: 'Ambiente familiar e internacional', en: 'A family-oriented and international atmosphere' },
    { es: 'Respeto por el desarrollo e intereses de cada niño', en: 'Respect for each child’s development and interests' },
    { es: 'Programa curricular Montessori multilingüe', en: 'A multilingual Montessori curriculum' },
    { es: 'Ambientes con materiales y zonas de trabajo Montessori', en: 'Prepared classrooms with Montessori materials and work areas' },
    { es: 'Aprendizaje al aire libre', en: 'Outdoor learning' },
    { es: 'Acompañamiento familiar y escuela de familias', en: 'Family guidance and parent education' },
    { es: 'Actividades culturales y escuelas de vacaciones', en: 'Cultural activities and holiday programs' }
  ],
  essenceTitle: {
    es: 'Montessori es nuestra esencia',
    en: 'Montessori is our essence'
  },
  essenceBody: {
    es: 'Montessori anima a los niños a ser constructivos y hacerse cargo de su aprendizaje y desarrollo. Promueve la autodisciplina, la independencia y la responsabilidad a través del trabajo académico y práctico apropiado para la edad.',
    en: 'Montessori encourages children to be constructive and take ownership of their learning and development. It promotes self-discipline, independence and responsibility through age-appropriate academic and practical work.'
  },
  outdoorTitle: {
    es: 'El espacio natural',
    en: 'The natural space'
  },
  outdoorBody: {
    es: 'En nuestro amplio jardín de más de 2600 m2, lleno de árboles y plantas, los niños exploran y experimentan el mundo natural por ellos mismos.',
    en: 'In our large garden of more than 2600 m2, full of trees and plants, children explore and experience the natural world for themselves.'
  },
  seo: {
    es: siteSettings.seo,
    en: {
      title: 'Montessori School Valencia | Mammolina Montessori',
      description: 'International multilingual Montessori preschool and primary school in Valencia.',
      ogImage: seoImage
    }
  }
};

export const services: Service[] = [
  {
    slug: 'childrens-house',
    title: { es: 'Children’s House', en: 'Children’s House' },
    ageRange: { es: '3 a 6 años', en: 'Ages 3 to 6' },
    summary: {
      es: 'La etapa de la mente absorbente y de la auto creación.',
      en: 'The stage of the absorbent mind and self-construction.'
    },
    details: {
      es: [
        'Guía de habla inglesa e introducción al francés.',
        'Ambiente preparado donde los niños se mueven con libertad y eligen sus materiales y zonas de trabajo.',
        'Las grandes áreas de trabajo son Matemáticas, Sensorial, Lenguaje, Cultura y Vida Práctica.'
      ],
      en: [
        'English-speaking guide and introduction to French.',
        'A prepared environment where children move freely and choose their materials and work areas.',
        'The main work areas are Mathematics, Sensorial, Language, Culture and Practical Life.'
      ]
    },
    image: '/images/hero-exterior.jpg',
    seo: {
      es: { title: 'Children’s House | Mammolina Montessori', description: 'Programa Montessori de 3 a 6 años en Valencia.', ogImage: seoImage },
      en: { title: 'Children’s House | Mammolina Montessori', description: 'Montessori program for ages 3 to 6 in Valencia.', ogImage: seoImage }
    }
  },
  {
    slug: 'primary',
    title: { es: 'Primary', en: 'Primary' },
    ageRange: { es: '6 a 12 años', en: 'Ages 6 to 12' },
    summary: {
      es: 'La etapa del razonamiento, la imaginación y la adquisición de la cultura.',
      en: 'The stage of reasoning, imagination and cultural acquisition.'
    },
    details: {
      es: [
        'Guía de habla inglesa, guía de habla francesa y currículo español y valenciano.',
        'Espacios para experimentación e investigación.',
        'Trabajo autónomo, interdisciplinar y responsable con el propio desarrollo.'
      ],
      en: [
        'English-speaking guide, French-speaking guide, and Spanish and Valencian curriculum.',
        'Spaces for experimentation and research.',
        'Autonomous, interdisciplinary work with responsibility for personal development.'
      ]
    },
    image: '/images/values.jpg',
    seo: {
      es: { title: 'Primary | Mammolina Montessori', description: 'Programa Montessori de primaria de 6 a 12 años.', ogImage: seoImage },
      en: { title: 'Primary | Mammolina Montessori', description: 'Montessori primary program for ages 6 to 12.', ogImage: seoImage }
    }
  }
];

export const people: Person[] = [
  {
    name: 'Cristina Cort',
    role: { es: 'Dirección', en: 'Director' },
    bio: {
      es: 'Cristina es directora de Mammolina Montessori y acompaña el proyecto educativo y familiar de la escuela.',
      en: 'Cristina is the director of Mammolina Montessori and guides the school’s educational and family project.'
    },
    image: '/images/cristina.jpg'
  },
  {
    name: 'Ana Pérez',
    role: { es: 'Children’s House', en: 'Children’s House' },
    bio: {
      es: 'Maestra de educación infantil y diplomada en pedagogía Montessori.',
      en: 'Early childhood teacher and Montessori pedagogy graduate.'
    },
    image: '/images/ana.png'
  },
  {
    name: 'Noelia Suero',
    role: { es: 'Children’s House', en: 'Children’s House' },
    bio: {
      es: 'Guía Montessori 3-6 con experiencia internacional en educación infantil.',
      en: 'Montessori guide for ages 3-6 with international early childhood experience.'
    },
    image: '/images/noelia.jpg'
  },
  {
    name: 'Julia Lacroix',
    role: { es: 'Children’s House', en: 'Children’s House' },
    bio: {
      es: 'Asistente Montessori francesa con experiencia en escuelas internacionales.',
      en: 'French Montessori assistant with experience in international schools.'
    },
    image: '/images/julia-lacroix.jpg'
  },
  {
    name: 'Ruby Li',
    role: { es: 'Children’s House', en: 'Children’s House' },
    bio: {
      es: 'Educadora multilingüe con formación internacional en educación infantil.',
      en: 'Multilingual educator with international early childhood training.'
    },
    image: '/images/ruby.jpg'
  },
  {
    name: 'Danielle Hardoon',
    role: { es: 'Primary', en: 'Primary' },
    bio: {
      es: 'Guía Montessori de primaria con amplia experiencia internacional.',
      en: 'Primary Montessori guide with extensive international experience.'
    },
    image: '/images/danielle.jpg'
  },
  {
    name: 'Théo Ronsin',
    role: { es: 'Primary', en: 'Primary' },
    bio: {
      es: 'Maestro con formación Montessori de primaria y experiencia internacional.',
      en: 'Teacher with Montessori primary training and international experience.'
    },
    image: '/images/theo.jpg'
  },
  {
    name: 'Lorena Calatayud',
    role: { es: 'Primary', en: 'Primary' },
    bio: {
      es: 'Maestra de infantil y primaria vinculada al proyecto desde sus comienzos.',
      en: 'Early childhood and primary teacher connected to the project since its beginnings.'
    },
    image: '/images/lorena.jpg'
  },
  {
    name: 'Laura Arán',
    role: { es: 'Educación Musical', en: 'Music Education' },
    bio: {
      es: 'Maestra especialista en educación musical, musicoterapeuta y profesora de yoga para infancia.',
      en: 'Music education specialist, music therapist and yoga teacher for children.'
    },
    image: '/images/laura.jpg'
  },
  {
    name: 'Karina Garmendia',
    role: { es: 'Orientadora', en: 'Counsellor' },
    bio: {
      es: 'Educadora, psicopedagoga y terapeuta especializada en acompañamiento infantil y familiar.',
      en: 'Educator, psychopedagogue and therapist specialized in child and family guidance.'
    },
    image: '/images/karina.jpg'
  },
  {
    name: 'Rocio Cort',
    role: { es: 'Administración', en: 'Administration' },
    bio: {
      es: 'Responsable de administración y apoyo a familias en la gestión diaria de la escuela.',
      en: 'Administration lead supporting families in the school’s daily management.'
    },
    image: '/images/rocio.jpg'
  },
  {
    name: 'David Molina',
    role: { es: 'Extraescolares y enriquecimiento cultural', en: 'Extracurricular and cultural enrichment' },
    bio: {
      es: 'Responsable de actividades extraescolares y propuestas culturales de la comunidad.',
      en: 'Responsible for extracurricular activities and cultural enrichment proposals.'
    },
    image: '/images/david.jpg'
  },
  {
    name: 'Julia Muñoz',
    role: { es: 'Community Manager', en: 'Community Manager' },
    bio: {
      es: 'Cuida la comunicación, el branding, las redes sociales y la web de Mammolina.',
      en: 'Supports Mammolina’s communication, branding, social media and website.'
    },
    image: '/images/julia-munoz.jpg'
  }
];

export const pages: Page[] = [
  {
    slug: 'nuestra-escuela',
    title: { es: 'Nuestra escuela', en: 'Our school' },
    summary: {
      es: 'La pedagogía Montessori es el eje de nuestro proyecto y una preparación para la vida.',
      en: 'Montessori pedagogy is the heart of our project and a preparation for life.'
    },
    body: {
      es: [
        'Nuestra esencia Montessori',
        'La pedagogía Montessori es el eje de nuestro proyecto. Su planteamiento educativo va más allá de una metodología: comprende mirar al niño como creador de sí mismo y protagonista de su desarrollo y sus aprendizajes.',
        'La educación Montessori es una preparación para la vida donde la libertad y la disciplina son las dos caras de una misma moneda.',
        'La cooperación y el respeto forman parte esencial del proyecto educativo, buscando el máximo desarrollo de las potencialidades del ser humano en contacto con su entorno y la naturaleza.',
        'Planificación del centro',
        'Cada mañana: Ciclo de trabajo ininterrumpido Montessori.',
        'Tres horas en las que los niños trabajan de manera autónoma en el ambiente y atienden sus presentaciones. Los niños toman el almuerzo en el momento de descanso que elijan.',
        'Cada tarde: Libre elección y actividades co-curriculares.',
        'Ejercicio, deportes, música y jardinería.',
        'A la salida: Actividades extraescolares opcionales.',
        'Para último curso de Children’s House y Primaria, a partir de las 16h: ajedrez, arte, teatro y tenis.',
        'Modelo Educativo',
        'Es Montessori',
        'La educación como ayuda a la vida del ser humano. Montessori busca responder a las necesidades del niño según sus diferentes etapas de desarrollo en un ambiente preparado.',
        'Neurociencia',
        'Respalda y apoya nuestra actividad educativa. Nos ayuda a comprender y actuar de manera más consciente.',
        'Emociones',
        'El bienestar emocional es un elemento indispensable del desarrollo integral.',
        'Disciplina Positiva',
        'El niño como protagonista de su vida, educando desde la firmeza, la amabilidad y el respeto mutuo.'
      ],
      en: [
        'Our Montessori essence',
        'Montessori pedagogy is the axis of our project. It is more than a methodology: it means seeing the child as creator of themselves and protagonist of their learning.',
        'Montessori education is a preparation for life, where freedom and discipline are two sides of the same coin.',
        'Cooperation and respect are essential to a project that seeks the fullest development of human potential in contact with the environment and nature.',
        'School planning',
        'Every morning: uninterrupted Montessori work cycle.',
        'Three hours in which children work autonomously in the environment and receive presentations.',
        'Every afternoon: free choice and co-curricular activities.',
        'Exercise, sports, music and gardening.',
        'After school: optional extracurricular activities.',
        'For the final year of Children’s House and Primary, from 16h: chess, art, theatre and tennis.',
        'Educational model',
        'It is Montessori',
        'Education as an aid to life, responding to the needs of the child through different developmental stages.',
        'Neuroscience',
        'It supports our educational practice and helps us act more consciously.',
        'Emotions',
        'Emotional wellbeing is an essential element of holistic development.',
        'Positive Discipline',
        'The child as protagonist, educated with firmness, kindness and mutual respect.'
      ]
    },
    heroImage: '/images/school-essence.jpg',
    seo: {
      es: { title: 'Nuestra escuela | Mammolina Montessori', description: 'Conoce la escuela Mammolina Montessori en Valencia.', ogImage: seoImage },
      en: { title: 'Our school | Mammolina Montessori', description: 'Discover Mammolina Montessori school in Valencia.', ogImage: seoImage }
    }
  },
  {
    slug: 'que-es-montessori',
    title: { es: '¿Qué es Montessori?', en: 'What is Montessori?' },
    summary: {
      es: 'La filosofía Montessori es una manera de mirar y comprender al niño.',
      en: 'Montessori philosophy is a way of seeing and understanding the child.'
    },
    body: {
      es: [
        '¿Qué es Montessori?',
        'La filosofía Montessori es mucho más que una disposición estética del aula o un conjunto de materiales de madera. Es una propuesta pedagógica sólida que respeta los ritmos naturales de la infancia y acompaña su crecimiento integral.',
        'Desarrollado por la Dra. Maria Montessori hace más de un siglo, este enfoque reconoce que cada niño está guiado por una fuerza creadora interior.',
        'En Mammolina no solo enseñamos asignaturas sino que acompañamos a los niños en su propio proceso educativo.',
        'Los tres pilares de nuestra propuesta',
        '1. El niño: protagonista de su propio aprendizaje',
        'Creemos que los niños nacen con una curiosidad genuina por comprender el mundo. Fomentamos la motivación intrínseca y el sentido de logro personal.',
        '2. El ambiente preparado',
        'El entorno está diseñado cuidadosamente para invitar a la exploración, la concentración y el trabajo autónomo.',
        '3. El adulto como guía',
        'El adulto observa, acompaña y prepara las condiciones para que el niño pueda construirse a sí mismo.'
      ],
      en: [
        'What is Montessori?',
        'Montessori philosophy is much more than an aesthetic classroom or beautiful wooden materials. It is a solid pedagogical proposal that respects the natural rhythms of childhood.',
        'Developed by Dr. Maria Montessori more than a century ago, it recognizes that each child is guided by an inner creative force.',
        'At Mammolina we accompany children in their own educational process.',
        'The three pillars of our proposal',
        '1. The child as protagonist',
        'Children are born with genuine curiosity. We foster intrinsic motivation and personal achievement.',
        '2. The prepared environment',
        'The environment invites exploration, concentration and autonomous work.',
        '3. The adult as guide',
        'The adult observes, accompanies and prepares the conditions for development.'
      ]
    },
    heroImage: '/images/montessori-garden.jpg',
    seo: {
      es: { title: '¿Qué es Montessori? | Mammolina Montessori', description: 'Qué es la pedagogía Montessori.', ogImage: seoImage },
      en: { title: 'What is Montessori? | Mammolina Montessori', description: 'What Montessori pedagogy is.', ogImage: seoImage }
    }
  },
  {
    slug: 'acreditacion-neasc',
    title: { es: 'Acreditación NEASC', en: 'NEASC Accreditation' },
    summary: {
      es: 'El camino hacia la acreditación NEASC de Mammolina Montessori.',
      en: 'Mammolina Montessori’s path toward NEASC accreditation.'
    },
    body: {
      es: [
        'El camino hacia la acreditación NEASC de Mammolina Montessori',
        '¿Qué es NEASC?',
        'La Asociación de Escuelas y Colegios de Nueva Inglaterra trabaja con escuelas públicas, privadas e internacionales para evaluar, apoyar y promover una educación de alta calidad.',
        'Acreditación NEASC',
        'La acreditación NEASC es un ciclo continuo y voluntario de evaluaciones internas y externas, planificación estratégica e informes apoyados por la colaboración de expertos.',
        'Un marco de mejora continua',
        'Su finalidad es ayudar a los centros a alcanzar sus propios objetivos de aprendizaje sin dejar de cumplir normas de acreditación reconocidas internacionalmente.'
      ],
      en: [
        'Mammolina Montessori’s path toward NEASC accreditation',
        'What is NEASC?',
        'The New England Association of Schools and Colleges works with public, private and international schools to evaluate, support and promote high quality education.',
        'NEASC accreditation',
        'NEASC accreditation is a continuous voluntary cycle of internal and external review, strategic planning and expert-supported reporting.',
        'A framework for continuous improvement',
        'Its purpose is to help schools achieve their learning goals while meeting internationally recognized standards.'
      ]
    },
    heroImage: '/images/neasc-path.jpg',
    seo: {
      es: { title: 'Acreditación NEASC | Mammolina Montessori', description: 'Acreditación NEASC de Mammolina Montessori.', ogImage: seoImage },
      en: { title: 'NEASC Accreditation | Mammolina Montessori', description: 'Mammolina Montessori NEASC accreditation.', ogImage: seoImage }
    }
  },
  {
    slug: 'neurociencia-y-psicologia-de-montessori',
    title: { es: 'La Neurociencia y la Psicología detrás de Montessori', en: 'The Neuroscience and Psychology behind Montessori' },
    summary: {
      es: 'Las bases neurocientíficas y psicológicas del método Montessori.',
      en: 'The neuroscientific and psychological foundations of Montessori.'
    },
    body: {
      es: [
        'Las Bases Neurocientíficas y Psicológicas del Método Montessori: Cultivar la Concentración para toda La Vida',
        'El método Montessori hace hincapié en el aprendizaje autodirigido, la experiencia directa y los períodos ininterrumpidos de concentración profunda.',
        'Expertos como Daniel Goleman y Mihaly Csikszentmihalyi confirman la eficacia del método Montessori, sobre todo en el desarrollo de la concentración profunda.',
        'Perspectivas neurocientíficas de la concentración',
        'Las aulas Montessori están diseñadas para promover exploración, descubrimiento, motivación intrínseca, autorregulación y amor por el aprendizaje.',
        'Una base para toda la vida',
        'La concentración profunda, la autonomía y la disciplina interior sostienen el desarrollo social, emocional e intelectual.'
      ],
      en: [
        'The neuroscientific and psychological foundations of Montessori: cultivating lifelong concentration',
        'Montessori emphasizes self-directed learning, direct experience and uninterrupted periods of deep concentration.',
        'Researchers such as Daniel Goleman and Mihaly Csikszentmihalyi confirm its value in developing attention and flow.',
        'Neuroscientific perspectives on concentration',
        'Montessori classrooms promote exploration, discovery, intrinsic motivation and self-regulation.',
        'A foundation for life',
        'Deep concentration, autonomy and inner discipline support social, emotional and intellectual development.'
      ]
    },
    heroImage: '/images/hero-garden-1.jpg',
    seo: {
      es: { title: 'Neurociencia y Psicología de Montessori | Mammolina Montessori', description: 'Bases neurocientíficas y psicológicas de Montessori.', ogImage: seoImage },
      en: { title: 'Neuroscience and Psychology of Montessori | Mammolina Montessori', description: 'Neuroscience and psychology behind Montessori.', ogImage: seoImage }
    }
  },
  {
    slug: 'educacion-cosmica-en-montessori',
    title: { es: 'Educación Cósmica en Montessori', en: 'Cosmic Education in Montessori' },
    summary: {
      es: 'La educación cósmica ayuda a los niños a comprender su lugar dentro del universo.',
      en: 'Cosmic education helps children understand their place in the universe.'
    },
    body: {
      es: [
        'Educación Cósmica en Montessori',
        'La educación cósmica es un concepto iniciado por la Dra. María Montessori, basado en la creencia de que la educación debe ayudar a los niños a comprender su lugar dentro del universo más amplio.',
        'El principio fundamental es la interconexión e interdependencia de todas las cosas en el universo.',
        'Un marco para abordar preguntas existenciales',
        'Este enfoque está especialmente diseñado para niños de seis a doce años, que comienzan a buscar respuestas a preguntas profundas sobre el mundo, la vida y la historia humana.',
        'Responsabilidad y pertenencia',
        'La educación cósmica inspira a los estudiantes a aprender sobre su papel en la preservación del equilibrio y el avance de la sociedad.'
      ],
      en: [
        'Cosmic Education in Montessori',
        'Cosmic education is a concept initiated by Dr. Maria Montessori, based on the belief that education should help children understand their place in the wider universe.',
        'Its central principle is the interconnection and interdependence of all things.',
        'A framework for existential questions',
        'This approach is especially designed for children ages six to twelve as they ask deep questions about the world, life and human history.',
        'Responsibility and belonging',
        'Cosmic education inspires students to understand their role in preserving balance and advancing society.'
      ]
    },
    heroImage: '/images/cosmic-education.png',
    seo: {
      es: { title: 'Educación Cósmica en Montessori | Mammolina Montessori', description: 'Educación cósmica Montessori.', ogImage: seoImage },
      en: { title: 'Cosmic Education in Montessori | Mammolina Montessori', description: 'Montessori cosmic education.', ogImage: seoImage }
    }
  },
  {
    slug: 'equipo',
    title: { es: 'Equipo', en: 'Team' },
    summary: {
      es: 'El equipo humano que acompaña a las familias y a los niños en Mammolina.',
      en: 'The team accompanying families and children at Mammolina.'
    },
    body: {
      es: [
        'Cristina Cort - Dirección',
        'Nacida en Valencia, Cristina es directora de Mammolina Montessori y acompaña el proyecto educativo y familiar de la escuela.',
        'Ana Pérez - Children’s House',
        'Maestra de educación infantil y diplomada en pedagogía Montessori.',
        'Danielle Hardoon - Primary',
        'Guía Montessori de primaria con amplia experiencia internacional.',
        'Rocio Cort - Administración',
        'Responsable de administración y apoyo a familias en la gestión diaria de la escuela.'
      ],
      en: [
        'Cristina Cort - Director',
        'Cristina is the director of Mammolina Montessori and guides the school’s educational and family project.',
        'Ana Pérez - Children’s House',
        'Early childhood teacher and Montessori pedagogy graduate.',
        'Danielle Hardoon - Primary',
        'Primary Montessori guide with extensive international experience.',
        'Rocio Cort - Administration',
        'Administration lead supporting families in the school’s daily management.'
      ]
    },
    heroImage: '/images/cristina.jpg',
    seo: {
      es: { title: 'Equipo | Mammolina Montessori', description: 'Equipo de Mammolina Montessori.', ogImage: seoImage },
      en: { title: 'Team | Mammolina Montessori', description: 'Mammolina Montessori team.', ogImage: seoImage }
    }
  },
  {
    slug: 'actividades-extraescolares',
    title: { es: 'Actividades Extraescolares', en: 'Extracurricular Activities' },
    summary: {
      es: 'Actividades para alumnos de Mammolina Montessori después de la jornada escolar.',
      en: 'Activities for Mammolina Montessori students after the school day.'
    },
    body: {
      es: [
        'Actividades Extraescolares para alumnos de Mammolina Montessori',
        'Ajedrez',
        'Lunes de 16:00 a 17:00 para Primaria y niños nacidos en 2020.',
        'A través del ajedrez los niños desarrollan habilidades como resolución de problemas, planificación, lectura y matemáticas.',
        'Arte, teatro y tenis',
        'Propuestas opcionales que completan la vida escolar con creatividad, movimiento, expresión y convivencia.',
        'Condiciones',
        'Las actividades se organizan por curso escolar y plazas disponibles. Contacta con la escuela para confirmar horarios y grupos.'
      ],
      en: [
        'Extracurricular activities for Mammolina Montessori students',
        'Chess',
        'Mondays from 16:00 to 17:00 for Primary and children born in 2020.',
        'Through chess, children develop problem-solving, planning, reading and mathematical skills.',
        'Art, theatre and tennis',
        'Optional activities that complete school life with creativity, movement and community.',
        'Conditions',
        'Activities are organized by school year and available places. Contact the school to confirm timetables and groups.'
      ]
    },
    heroImage: '/images/summer-school.jpg',
    seo: {
      es: { title: 'Actividades Extraescolares | Mammolina Montessori', description: 'Actividades extraescolares de Mammolina Montessori.', ogImage: seoImage },
      en: { title: 'Extracurricular Activities | Mammolina Montessori', description: 'Mammolina Montessori extracurricular activities.', ogImage: seoImage }
    }
  },
  {
    slug: 'comunidad',
    title: { es: 'Comunidad', en: 'Community' },
    summary: {
      es: 'Alumnos, familias y guías caminamos juntos para crear el entorno ideal.',
      en: 'Students, families and guides walk together to create the ideal environment.'
    },
    body: {
      es: [
        'Comunidad',
        'En nuestro colegio, la comunidad está en el centro de todo lo que hacemos. Alumnos, familias y guías caminamos juntos para crear el entorno ideal donde los niños puedan explorar, aprender y crecer de acuerdo con nuestra filosofía Montessori.',
        'Te invitamos a conocer más sobre las personas que forman nuestro equipo, la asociación de madres y padres, y las diversas actividades y experiencias que compartimos a lo largo del curso escolar.',
        'Equipo',
        'Un equipo internacional acompaña a los niños y sus familias con una mirada Montessori común.',
        'Asociación de familias',
        'La asociación de padres y madres fortalece la vida comunitaria de la escuela.',
        'Experiencias',
        'Silent Journey, salidas a la naturaleza y encuentros escolares fortalecen los lazos entre alumnos, familias y escuela.'
      ],
      en: [
        'Community',
        'Community is at the center of everything we do. Students, families and guides walk together to create the right environment for children to explore, learn and grow.',
        'We invite you to learn about our team, parent association and the experiences we share throughout the school year.',
        'Team',
        'An international team accompanies children and families with a shared Montessori vision.',
        'Parent association',
        'The parent association strengthens the school community.',
        'Experiences',
        'Silent Journey, nature outings and school gatherings strengthen ties between students, families and school.'
      ]
    },
    heroImage: '/images/hero-garden-2.jpg',
    seo: {
      es: { title: 'Comunidad | Mammolina Montessori', description: 'Comunidad de Mammolina Montessori.', ogImage: seoImage },
      en: { title: 'Community | Mammolina Montessori', description: 'Mammolina Montessori community.', ogImage: seoImage }
    }
  },
  {
    slug: 'la-asociacion-de-padres-y-madres',
    title: { es: 'La Asociación de Padres y Madres de Mammolina', en: 'Mammolina Parent Association' },
    summary: {
      es: 'Una asociación activa que brinda eventos, apoyo y comunicación a la comunidad educativa.',
      en: 'An active association providing events, support and communication for the school community.'
    },
    body: {
      es: [
        'Asociación de Padres y Madres de Mammolina',
        'En Mammolina Montessori nos sentimos orgullosos de tener una asociación de padres y madres activa y enérgica que brinda eventos, apoyo y comunicación a la comunidad educativa.',
        'Recibe una cálida bienvenida de la Asociación de Padres y Madres de Mammolina (MPA)',
        'Cuando te unes a Mammolina, no solo inscribes a tu hijo/a en un colegio: te unes a una comunidad cálida, activa y solidaria.',
        'Aquí perteneces desde el primer día',
        'Cada padre, madre y cuidador/a es automáticamente miembro de la MPA.',
        'Qué hacemos',
        'Organizamos encuentros, apoyamos nuevas familias y colaboramos con la escuela para enriquecer la vida comunitaria.'
      ],
      en: [
        'Mammolina Parent Association',
        'We are proud to have an active parent association providing events, support and communication for the educational community.',
        'A warm welcome from the Mammolina Parent Association',
        'When you join Mammolina, you join a warm, active and supportive community.',
        'You belong from day one',
        'Every parent and carer automatically becomes part of the MPA.',
        'What we do',
        'We organize gatherings, support new families and collaborate with the school to enrich community life.'
      ]
    },
    heroImage: '/images/hero-exterior.jpg',
    seo: {
      es: { title: 'Asociación de Padres y Madres | Mammolina Montessori', description: 'Asociación de familias de Mammolina.', ogImage: seoImage },
      en: { title: 'Parent Association | Mammolina Montessori', description: 'Mammolina parent association.', ogImage: seoImage }
    }
  },
  {
    slug: 'el-silent-journey-montessori',
    title: { es: 'El Silent Journey Montessori', en: 'The Montessori Silent Journey' },
    summary: {
      es: 'Una experiencia para observar el mundo educativo desde los ojos del niño.',
      en: 'An experience to observe the educational world through the child’s eyes.'
    },
    body: {
      es: [
        'El Silent Journey Montessori',
        'Entrando al mundo de tu hijo/a',
        'En Mammolina Montessori creemos que una manera maravillosa de comprender la experiencia educativa de un niño/a es vivirla y verla a través de sus ojos.',
        '¿Qué es el Silent Journey?',
        'Es un recorrido guiado e inmersivo a través de nuestros ambientes Montessori, experimentado completamente en silencio.',
        'Descubrimiento y reflexión',
        'Los participantes observan el diseño, los materiales y el ambiente preparado que respalda el aprendizaje autónomo.',
        'Para familias y comunidad',
        'Esta experiencia permite comprender con más profundidad la independencia, la concentración y el respeto presentes en el aula.'
      ],
      en: [
        'The Montessori Silent Journey',
        'Entering your child’s world',
        'A wonderful way to understand a child’s educational experience is to live it and see it through their eyes.',
        'What is the Silent Journey?',
        'It is an immersive guided journey through our Montessori environments, experienced completely in silence.',
        'Discovery and reflection',
        'Participants observe the design, materials and prepared environment that support autonomous learning.',
        'For families and community',
        'This experience deepens understanding of independence, concentration and respect in the classroom.'
      ]
    },
    heroImage: '/images/montessori-garden.jpg',
    seo: {
      es: { title: 'El Silent Journey Montessori | Mammolina Montessori', description: 'Silent Journey Montessori en Mammolina.', ogImage: seoImage },
      en: { title: 'Montessori Silent Journey | Mammolina Montessori', description: 'Mammolina Montessori Silent Journey.', ogImage: seoImage }
    }
  },
  {
    slug: 'colegio-internacional-valencia',
    title: { es: 'Colegio Internacional Valencia', en: 'International School Valencia' },
    summary: {
      es: 'Mammolina Montessori es una escuela verdaderamente internacional en Valencia.',
      en: 'Mammolina Montessori is a truly international school in Valencia.'
    },
    body: {
      es: [
        'Colegio Internacional Valencia – Mammolina Montessori',
        'Mammolina Montessori es una escuela verdaderamente internacional, con alumnos y alumnas de todo el mundo en nuestras clases.',
        'Niños y niñas de familias de España, Estados Unidos, Ucrania, Francia, Alemania, Inglaterra, Polonia, Lituania y muchos otros países aprenden y se desarrollan con nosotros.',
        'Beneficios de la Educación Internacional',
        'La diversidad del alumnado representa muchas nacionalidades, culturas e idiomas.',
        'Un ambiente multilingüe',
        'El inglés, el francés, el español y el valenciano se integran de manera natural en la vida escolar.',
        'Una comunidad abierta',
        'La escuela acompaña a familias locales e internacionales en un entorno familiar y cercano.'
      ],
      en: [
        'International School Valencia – Mammolina Montessori',
        'Mammolina Montessori is a truly international school, with students from around the world in our classrooms.',
        'Children from Spain, the United States, Ukraine, France, Germany, England, Poland, Lithuania and many other countries learn and grow with us.',
        'Benefits of international education',
        'Student diversity represents many nationalities, cultures and languages.',
        'A multilingual environment',
        'English, French, Spanish and Valencian are integrated naturally into school life.',
        'An open community',
        'The school supports local and international families in a close, family-oriented environment.'
      ]
    },
    heroImage: '/images/hero-garden-1.jpg',
    seo: {
      es: { title: 'Colegio Internacional Valencia | Mammolina Montessori', description: 'Colegio internacional Montessori en Valencia.', ogImage: seoImage },
      en: { title: 'International School Valencia | Mammolina Montessori', description: 'International Montessori school in Valencia.', ogImage: seoImage }
    }
  },
  {
    slug: 'aviso-legal',
    title: { es: 'Aviso legal', en: 'Legal Notice' },
    summary: { es: 'Aviso legal para mammolinamontessori.com.', en: 'Legal notice for mammolinamontessori.com.' },
    body: {
      es: ['Aviso legal', 'Última Actualización: 31-07-2025', 'Mammolina Montessori Valencia S.L, responsable del sitio web, pone a disposición de los usuarios este documento para dar cumplimiento a las obligaciones legales aplicables.', 'Toda persona que acceda a este sitio web asume el papel de usuario y se compromete al cumplimiento de las disposiciones aquí dispuestas.'],
      en: ['Legal notice', 'Last updated: 31-07-2025', 'Mammolina Montessori Valencia S.L, responsible for the website, provides this document to comply with applicable legal obligations.', 'Anyone accessing this website assumes the role of user and agrees to comply with these provisions.']
    },
    seo: { es: { title: 'Aviso legal | Mammolina Montessori', description: 'Aviso legal.', ogImage: seoImage }, en: { title: 'Legal Notice | Mammolina Montessori', description: 'Legal notice.', ogImage: seoImage } }
  },
  {
    slug: 'politica-de-privacidad',
    title: { es: 'Política de Privacidad', en: 'Privacy Policy' },
    summary: { es: 'Política de privacidad para mammolinamontessori.com.', en: 'Privacy policy for mammolinamontessori.com.' },
    body: {
      es: ['Política de Privacidad', 'Última Actualización: 31-07-2025', 'Mammolina Montessori Valencia S.L es el responsable del tratamiento de los datos personales del usuario.', 'Los datos se tratan de conformidad con el Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018.'],
      en: ['Privacy Policy', 'Last updated: 31-07-2025', 'Mammolina Montessori Valencia S.L is responsible for processing user personal data.', 'Data is processed in accordance with Regulation (EU) 2016/679 and Spanish data protection law.']
    },
    seo: { es: { title: 'Política de Privacidad | Mammolina Montessori', description: 'Política de privacidad.', ogImage: seoImage }, en: { title: 'Privacy Policy | Mammolina Montessori', description: 'Privacy policy.', ogImage: seoImage } }
  },
  {
    slug: 'politica-de-cookies',
    title: { es: 'Política de cookies', en: 'Cookie Policy' },
    summary: { es: 'Información sobre cookies.', en: 'Cookie information.' },
    body: {
      es: ['INFORMACIÓN SOBRE COOKIES', 'Conforme con la normativa aplicable, es necesario obtener el consentimiento expreso del usuario para las cookies no imprescindibles.', '¿QUÉ SON LAS COOKIES?', 'Las cookies son herramientas empleadas por servidores web para almacenar y recuperar información acerca de sus visitantes.'],
      en: ['COOKIE INFORMATION', 'Under applicable rules, express consent is required for non-essential cookies.', 'WHAT ARE COOKIES?', 'Cookies are tools used by web servers to store and retrieve information about visitors.']
    },
    seo: { es: { title: 'Política de cookies | Mammolina Montessori', description: 'Política de cookies.', ogImage: seoImage }, en: { title: 'Cookie Policy | Mammolina Montessori', description: 'Cookie policy.', ogImage: seoImage } }
  },
  {
    slug: 'terminos-y-condiciones',
    title: { es: 'Términos y Condiciones', en: 'Terms and Conditions' },
    summary: { es: 'Términos y condiciones de uso del sitio web.', en: 'Website terms and conditions.' },
    body: {
      es: ['Términos y Condiciones', 'Bienvenidos al sitio web de Mammolina Montessori. Al acceder o utilizar nuestro sitio web y sus servicios, usted acepta cumplir estos términos y condiciones.', '1. Aceptación de Términos', 'Al acceder a este sitio web, usted acepta estar sujeto a estos términos y a la normativa aplicable.', '2. Uso del Contenido', 'Todo el contenido proporcionado en este sitio web es sólo para fines informativos.'],
      en: ['Terms and Conditions', 'Welcome to the Mammolina Montessori website. By accessing or using this website and its services, you agree to these terms and conditions.', '1. Acceptance of Terms', 'By accessing this website, you agree to be bound by these terms and applicable regulations.', '2. Use of Content', 'All content on this website is provided for informational purposes only.']
    },
    seo: { es: { title: 'Términos y Condiciones | Mammolina Montessori', description: 'Términos y condiciones.', ogImage: seoImage }, en: { title: 'Terms and Conditions | Mammolina Montessori', description: 'Terms and conditions.', ogImage: seoImage } }
  },
  {
    slug: 'contact',
    title: { es: 'Contacto', en: 'Contact' },
    summary: {
      es: 'Somos una escuela internacional con sede en Paterna, una zona tranquila al norte de la ciudad de Valencia, España.',
      en: 'We are an international school based in Paterna, a quiet area north of the city of Valencia, Spain.'
    },
    body: {
      es: [
        'Nos sentimos privilegiados de ofrecer un jardín de 2600m2, con plantas, árboles, un huerto y una cancha de tenis y balonmano.',
        'No dudes en contactarnos si tienes alguna pregunta o en concertar una visita para ver nuestra escuela y conocer los principios Montessori que utilizamos.',
        'Antes de reservar tu visita, por favor conoce más sobre nuestra misión y enfoque Montessori.'
      ],
      en: [
        'We feel privileged to offer a 2600m2 garden with plants, trees, a vegetable garden and a tennis and handball court.',
        'Please contact us if you have any questions or would like to arrange a visit to see our school and learn about the Montessori principles we use.',
        'Before booking your visit, please learn more about our mission and Montessori approach.'
      ]
    },
    heroImage: '/images/hero-exterior.jpg',
    seo: {
      es: { title: 'Contacto | Mammolina Montessori', description: 'Contacta con Mammolina Montessori.', ogImage: seoImage },
      en: { title: 'Contact | Mammolina Montessori', description: 'Contact Mammolina Montessori.', ogImage: seoImage }
    }
  },
  {
    slug: 'proceso-de-admision-y-matricula',
    title: { es: 'Proceso de admisión y matrícula', en: 'Admissions and enrollment process' },
    summary: {
      es: 'El enfoque Montessori es una experiencia integral que da sus mejores frutos cuando la familia y la escuela caminan en la misma dirección.',
      en: 'The Montessori approach is a holistic experience that works best when family and school move in the same direction.'
    },
    body: {
      es: [
        'ANTES DE TU VISITA',
        'Elegir una escuela es una decisión importante. En Montessori, no solo hablamos de un espacio físico, sino de una manera concreta de entender la infancia y el aprendizaje.',
        'NUESTRA MISIÓN',
        'Ofrecemos un entorno preparado donde los niños desarrollan disciplina interior, responsabilidad y un deseo genuino de aprender, en un ambiente cuidado, respetuoso y sereno que sostiene su crecimiento diario.',
        'LOS FUNDAMENTOS MONTESSORI',
        'El desarrollo por planos: comprendemos que el niño atraviesa etapas diferenciadas, cada una con necesidades psicológicas específicas.',
        'La mente absorbente y la mente razonadora: en la primera etapa el aprendizaje es sensorial y concreto; en primaria, la razón y la imaginación se convierten en motores del conocimiento.',
        'Aprendizaje individualizado: cada niño progresa a su ritmo dentro de un marco estructurado y cuidadosamente preparado.',
        'Motivación intrínseca: fomentamos la concentración, la responsabilidad y el amor por el trabajo bien hecho.',
        'Comunidad y vida social: nuestras aulas de edades mixtas funcionan como una pequeña sociedad donde los niños aprenden a cooperar, liderar, pedir ayuda y resolver conflictos.',
        'Entorno multilingüe: el inglés, el francés y el español forman parte de la vida escolar, integrados en el ambiente y en el programa.',
        'LO QUE PODRÁS OBSERVAR DURANTE TU VISITA',
        'Un ambiente ordenado y sereno, periodos largos de trabajo ininterrumpido, niños que eligen, se concentran y perseveran, y guías preparados que observan y acompañan respetuosamente.',
        'UNA REFLEXIÓN ANTES DE PROGRAMAR TU VISITA',
        'Montessori no es un modelo académico acelerado ni competitivo. Si buscas un entorno estructurado, respetuoso con el desarrollo y centrado en la autonomía, la responsabilidad y la vida en comunidad, esta visita será valiosa.',
        'PASOS EN EL PROCESO DE ADMISIÓN Y MATRÍCULA',
        '1. Visita guiada',
        'El primer paso es concertar una visita guiada con nuestra directora para observar nuestra escuela en funcionamiento y conocer nuestra filosofía Montessori.',
        '2. Solicitud de admisión y cuestionario',
        'Tras la visita, podéis solicitar la admisión enviando el formulario de solicitud, una copia del último informe escolar y un cuestionario familiar.',
        '3. Decisión de admisión',
        'Después del análisis de nuestro equipo, la directora comunica la recomendación basada en los criterios de admisión y el compromiso de la familia con el programa.',
        '4. Matrícula',
        'Una vez admitida la solicitud os informaremos de los pasos necesarios: firma del contrato escolar, pago de matrícula y depósito de garantía.'
      ],
      en: [
        'BEFORE YOUR VISIT',
        'Choosing a school is an important decision. Montessori is not only a physical space, but a way of understanding childhood and learning.',
        'OUR MISSION',
        'We offer a prepared environment where children develop inner discipline, responsibility and a genuine desire to learn.',
        'THE MONTESSORI FOUNDATIONS',
        'Children move through distinct developmental stages, each with specific psychological needs.',
        'Learning is individualized and each child progresses at their own pace within a structured prepared environment.',
        'ADMISSIONS AND ENROLLMENT STEPS',
        '1. Guided visit',
        'The first step is arranging a guided visit with our director.',
        '2. Admission request and questionnaire',
        'After the visit, families may submit an application, school report where applicable, and questionnaire.',
        '3. Admission decision',
        'The director communicates the recommendation after review by the team.',
        '4. Enrollment',
        'Once admitted, families receive the steps for contract signing, enrollment payment and deposit.'
      ]
    },
    seo: {
      es: { title: 'Proceso de admisión y matrícula | Mammolina Montessori', description: 'Proceso de admisión y matrícula de Mammolina Montessori.' },
      en: { title: 'Admissions and enrollment process | Mammolina Montessori', description: 'Admissions and enrollment process at Mammolina Montessori.' }
    }
  },
  {
    slug: 'horarios-y-tarifas',
    title: { es: 'Horarios y tarifas', en: 'Timetables and fees' },
    summary: {
      es: 'La inscripción en Mammolina Montessori es una inversión en el desarrollo y la felicidad de tu hijo/a.',
      en: 'Enrollment at Mammolina Montessori is an investment in your child’s development and happiness.'
    },
    body: {
      es: [
        'Información e inscripción',
        '+34 641 380 198  info@mammolinamontessori.com  Carrer 608, nº9. 46182 Montecañada, Paterna. Valencia, España',
        'Nuestros precios son muy competitivos si se comparan con los de otros colegios privados de Valencia y alrededores.',
        'Children’s House (3-6 años) Cuota mensual (10 meses por año académico)',
        'Día completo (9-16h): 595€ p/m, 535€ para hermanos',
        'Primary (6-12 años) Cuota mensual (10 meses por año académico)',
        'Día completo (9-16h): 650€ p/m, 585€ para hermanos',
        'Cuota de Admisión e Inscripción (no reembolsable)',
        '620€',
        '400€ hermanos y a partir de 2º año',
        'Servicios complementarios:',
        'Servicio de Catering Ecológico: Tamar - 129€ p/m'
      ],
      en: [
        'Information and enrollment',
        '+34 641 380 198  info@mammolinamontessori.com  Carrer 608, nº9. 46182 Montecañada, Paterna. Valencia, Spain',
        'Our fees are competitive compared with other private schools in Valencia and the surrounding area.',
        'Children’s House (ages 3-6) monthly fee',
        'Full day (9-16h): 595€ per month, 535€ for siblings',
        'Primary (ages 6-12) monthly fee',
        'Full day (9-16h): 650€ per month, 585€ for siblings',
        'Admission and enrollment fee (non-refundable)',
        '620€',
        '400€ siblings and from the second year',
        'Complementary services:',
        'Organic catering service: Tamar - 129€ per month'
      ]
    },
    seo: {
      es: { title: 'Horarios y tarifas | Mammolina Montessori', description: 'Horarios, tarifas y servicios complementarios.' },
      en: { title: 'Timetables and fees | Mammolina Montessori', description: 'Timetables, fees and complementary services.' }
    }
  },
  {
    slug: 'preguntas-frecuentes',
    title: { es: 'Preguntas frecuentes', en: 'Frequently Asked Questions' },
    summary: {
      es: 'Elegir una nueva escuela puede ser un proceso complicado. Aquí encontrarás las preguntas más comunes.',
      en: 'Choosing a new school can be complex. Here are answers to common questions.'
    },
    body: {
      es: [
        '1. ¿Puedo visitar la Escuela?',
        'Por supuesto. Pedimos a todas las familias que reserven con antelación una visita guiada con nuestra Directora, Cristina Cort.',
        '2. ¿Qué hace que la educación Montessori sea diferente?',
        'En una escuela Montessori, los niños eligen actividades que les interesan dentro de un ambiente preparado. Cada niño sigue su propio ritmo.',
        '3. ¿A qué edades se dirige el colegio?',
        'Damos la bienvenida a niños de entre 3 y 12 años. Children’s House: de 3 a 6 años. Primary: de 6 a 12 años.',
        '4. ¿Quiénes acompañarán a mi hijo?',
        'Nuestros profesores se llaman guías. Son profesionales con certificación Montessori que observan a cada niño individualmente.',
        '5. ¿Cómo es el plan de estudios?',
        'Seguimos un currículum Montessori auténtico que cubre Matemáticas, Ciencias, Lengua, Historia y áreas culturales de manera integral.',
        '6. ¿Qué pasa si mi hijo/a no habla español?',
        'Somos una escuela multilingüe. Inglés, francés, español y valenciano se integran según la edad y etapa del niño.',
        '7. ¿Hay uniforme escolar?',
        'No. Pedimos ropa práctica que ayude al niño a sentirse cómodo e independiente.',
        '8. ¿Cómo gestionáis el acoso escolar o la seguridad?',
        'La seguridad es prioridad absoluta. Utilizamos Educación para la Paz y una política de tolerancia cero frente al acoso.',
        '9. ¿Cuáles son los costes?',
        'Como centro privado internacional, nuestras cuotas incluyen matrícula anual, depósito de garantía y mensualidad.',
        '10. ¿Es difícil para las familias internacionales matricularse?',
        'No. El proceso es directo y aceptamos nuevas familias durante todo el año.'
      ],
      en: [
        '1. Can I visit the school?',
        'Yes. Families should book a guided visit in advance with our Director, Cristina Cort.',
        '2. What makes Montessori different?',
        'Children choose meaningful work within a prepared environment and progress at their own pace.',
        '3. What ages does the school serve?',
        'We welcome children from 3 to 12 years old.',
        '4. Who guides my child?',
        'Our teachers are Montessori guides who observe and support each child individually.',
        '5. What is the curriculum like?',
        'We follow an authentic Montessori curriculum across academic and cultural areas.',
        '6. What if my child does not speak Spanish?',
        'We are a multilingual school, and language support is integrated naturally.',
        '7. Is there a uniform?',
        'No. Children should wear practical, comfortable clothing.',
        '8. How do you handle bullying and safety?',
        'Safety is a priority, with Peace Education and clear support protocols.',
        '9. What are the costs?',
        'Fees include annual enrollment, deposit and monthly payments.',
        '10. Is enrollment difficult for international families?',
        'No. The process is direct and families may join throughout the year.'
      ]
    },
    seo: {
      es: { title: 'Preguntas frecuentes | Mammolina Montessori', description: 'Preguntas frecuentes sobre Mammolina Montessori.' },
      en: { title: 'Frequently Asked Questions | Mammolina Montessori', description: 'Frequently asked questions about Mammolina Montessori.' }
    }
  },
  {
    slug: 'enlaces-utiles',
    title: { es: 'Enlaces útiles', en: 'Useful links' },
    summary: {
      es: 'Recursos útiles sobre educación Montessori, traslado y vida en España y Valencia.',
      en: 'Useful resources about Montessori education, relocating to Spain, and living in Valencia.'
    },
    body: {
      es: [
        'Referencias Montessori:',
        'International Montessori Association, Wikipedia Montessori Education, Montessori Para Todos, Montessori Global Growth Fund, Asociación Montessori España, Trillium Montessori, American Montessori Society, Center for Guided Montessori Studies y Catherine L’Ecuyer.',
        'Trasladarse a España:',
        'Expatica, Mumabroad, Internations y Citizen Remote ofrecen guías útiles para familias que se trasladan a España.',
        'Información específica sobre Valencia:',
        'TravelSpain24, Ajuntament de Valencia, Wikitravel Valencia y Valencia Metro Map.',
        'Profesores y escuelas de español:',
        'Spanish Course Spain, Eva English/Spanish Teacher, Taronja School y Understand Valencia.',
        'Recursos comunitarios en Español:',
        'Agenda de Isa, Valencia Secreta, Visit Valencia y Love Valencia.',
        'Por favor, ten en cuenta que no producimos ninguno de los contenidos de estos sitios web de terceros.'
      ],
      en: [
        'Montessori references:',
        'International Montessori Association, Wikipedia Montessori Education, Montessori Para Todos, Montessori Global Growth Fund, Montessori Spain Association, Trillium Montessori, American Montessori Society, Center for Guided Montessori Studies and Catherine L’Ecuyer.',
        'Moving to Spain:',
        'Expatica, Mumabroad, Internations and Citizen Remote offer helpful guides for families moving to Spain.',
        'Valencia-specific information:',
        'TravelSpain24, Valencia City Council, Wikitravel Valencia and Valencia Metro Map.',
        'Spanish teachers and schools:',
        'Spanish Course Spain, Eva English/Spanish Teacher, Taronja School and Understand Valencia.',
        'Community resources in Spanish:',
        'Agenda de Isa, Valencia Secreta, Visit Valencia and Love Valencia.',
        'Please note that Mammolina does not produce the content on these third-party websites.'
      ]
    },
    seo: {
      es: { title: 'Enlaces útiles | Mammolina Montessori', description: 'Recursos útiles sobre Montessori, España y Valencia.' },
      en: { title: 'Useful links | Mammolina Montessori', description: 'Useful resources about Montessori, Spain and Valencia.' }
    }
  },
  {
    slug: 'privacy-policy',
    title: { es: 'Política de privacidad', en: 'Privacy policy' },
    summary: { es: 'Información sobre privacidad y protección de datos.', en: 'Privacy and data protection information.' },
    body: {
      es: ['Esta página debe completarse con el texto legal final validado por la escuela.'],
      en: ['This page should be completed with the final legal text approved by the school.']
    },
    seo: {
      es: { title: 'Política de privacidad | Mammolina Montessori', description: 'Política de privacidad de Mammolina Montessori.' },
      en: { title: 'Privacy policy | Mammolina Montessori', description: 'Mammolina Montessori privacy policy.' }
    }
  },
  {
    slug: 'terms',
    title: { es: 'Aviso legal', en: 'Legal notice' },
    summary: { es: 'Condiciones legales del sitio web.', en: 'Website legal terms.' },
    body: {
      es: ['Esta página debe completarse con el aviso legal final validado por la escuela.'],
      en: ['This page should be completed with the final legal notice approved by the school.']
    },
    seo: {
      es: { title: 'Aviso legal | Mammolina Montessori', description: 'Aviso legal de Mammolina Montessori.' },
      en: { title: 'Legal notice | Mammolina Montessori', description: 'Mammolina Montessori legal notice.' }
    }
  }
];

export const posts: BlogPost[] = [
  {
    slug: 'silent-journey-montessori',
    title: { es: 'El Silent Journey Montessori', en: 'The Montessori Silent Journey' },
    publishedAt: '2026-02-01',
    excerpt: {
      es: 'Una experiencia para comprender el ambiente Montessori desde dentro.',
      en: 'An experience to understand the Montessori environment from within.'
    },
    body: {
      es: [
        'El Silent Journey permite a las familias recorrer el ambiente preparado desde la mirada del niño.',
        'Es una oportunidad para conectar con los materiales, los ritmos y la filosofía Montessori.'
      ],
      en: [
        'The Silent Journey allows families to walk through the prepared environment from the child’s perspective.',
        'It is an opportunity to connect with the materials, rhythms and Montessori philosophy.'
      ]
    },
    image: '/images/values.jpg',
    seo: {
      es: { title: 'El Silent Journey Montessori | Mammolina', description: 'Experiencia Silent Journey en Mammolina Montessori.', ogImage: '/images/values.jpg' },
      en: { title: 'The Montessori Silent Journey | Mammolina', description: 'Silent Journey experience at Mammolina Montessori.', ogImage: '/images/values.jpg' }
    }
  }
];
