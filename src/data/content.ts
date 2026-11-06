import { ProcessStep, ServiceItem, PricingTier, FaqItem } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Descontaminación Profunda",
    tagline: "Purificación nanométrica del sustrato",
    description: "Eliminación exhaustiva de partículas de hierro incrustadas, ferodo de frenos, alquitrán de carretera y pulverizados industriales mediante agentes férricos químicos y arcilla japonesa de grado fino.",
    mobileSummary: "Purificación férrica química y clay bar ultrafina.",
    mobileHighlight: "99.8% Pureza",
    details: [
      "Lavado preliminar de llantas con ph neutro y pinceles de pelo de jabalí",
      "Descontaminante férrico químico con indicador de color púrpura",
      "Clay bar ultra suave con lubricante hidrófilo sin agresión mecánica"
    ],
    metrics: [
      { label: "Pureza de Superficie", value: "99.8%" },
      { label: "Tiempo Estimado", value: "2.5 h" }
    ],
    cardPosition: 'left',
    carShiftXPercent: 24 // Desktop split: car shifted right, left is 100% free
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Lavado Foam Activo",
    tagline: "Baño espumoso de pH neutro sin contacto",
    description: "Cubrimiento total del vehículo en una densa cortina de Snow Foam encapsuladora de suciedad. Técnica de dos cubos con rejillas de decantación grit-guard y guantes de microfibra de lana virgen de 1200 GSM.",
    mobileSummary: "Baño Snow Foam de pH neutro sin contacto mecánico.",
    mobileHighlight: "0% Microswirls",
    details: [
      "Espuma de alta densidad que emulsiona la suciedad estática",
      "Aclarado con agua desmineralizada y osmotizada por ionización",
      "Secado con turbina de aire caliente filtrado a 60°C sin fricción"
    ],
    metrics: [
      { label: "Agua Osmotizada", value: "0 TDS" },
      { label: "Contacto Mecánico", value: "0% Swirls" }
    ],
    cardPosition: 'right',
    carShiftXPercent: -24 // Desktop split: car shifted left, right is 100% free
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Corrección de Pintura",
    tagline: "Restauración óptica multietapa de nivel concurso",
    description: "Medición micrométrica con tecnología de ultrasonidos en paneles metálicos y plásticos. Corte y refinado con pulidoras orbitales BigFoot RUPES y compuestos abrasivos de micro-diamante para erradicar el 98% de defectos.",
    mobileSummary: "Pulido multietapa RUPES. Eliminación permanente de defectos.",
    mobileHighlight: "+98% Defectos Erradicados",
    details: [
      "Medición de espesor panel a panel con micrómetro digital de precisión",
      "Eliminación permanente de swirls, marcas de túnel de lavado y hologramas",
      "Refinado con esponjas de celdas abiertas hasta alcanzar claridad óptica total"
    ],
    metrics: [
      { label: "Eliminación de Defectos", value: "+95-98%" },
      { label: "Medición Ultrasónica", value: "±0.5 µm" }
    ],
    cardPosition: 'left',
    carShiftXPercent: 24
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Tratamiento Cerámico 9H",
    tagline: "Fusión molecular SiO2 & Grafeno de alta densidad",
    description: "Aplicación en sala blanca climatizada con control estricto de humedad (45%) y temperatura (21°C). El recubrimiento se ancla químicamente a los poros del barniz, creando un escudo cristalino de dureza mineral 9H certificada.",
    mobileSummary: "Fusión molecular de cuarzo y grafeno curada con IR.",
    mobileHighlight: "Dureza 9H Certificada",
    details: [
      "Matriz de polisilazano y nanopartículas de óxido de grafeno",
      "Curado asistido mediante paneles infrarrojos de onda corta (Short-Wave IR)",
      "Resistencia extrema a pH 2-13, radiación UV severa y excrementos ácidos"
    ],
    metrics: [
      { label: "Dureza Certificada", value: "9H+" },
      { label: "Ángulo de Contacto", value: "115° Hidrófobo" }
    ],
    cardPosition: 'right',
    carShiftXPercent: -24
  },
  {
    id: 5,
    stepNumber: "05",
    title: "Acabado Espejo & Entrega",
    tagline: "Perfección visual absoluta y certificación oficial",
    description: "Inspección fotométrica con lámparas Scangrip de espectro solar (CRI 96+). Sellado de cristales hidrófobos, protección cerámica de llantas desmontadas y expedición del pasaporte digital de garantía por 5 años.",
    mobileSummary: "Sellado hidrófobo total y pasaporte digital de garantía.",
    mobileHighlight: "5 Años Garantía Escrita",
    details: [
      "Sellado hidrofóbico cerámico en parabrisas y cristales laterales",
      "Protección térmica de llantas y pinzas de freno hasta 700°C",
      "Entrega con informe fotográfico macro y protocolo de mantenimiento"
    ],
    metrics: [
      { label: "Garantía Escrita", value: "5 Años" },
      { label: "Brillo Reflectivo", value: "99 GU" }
    ],
    cardPosition: 'left',
    carShiftXPercent: 24
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ceramico-9h",
    title: "Tratamiento Cerámico 9H & Grafeno",
    subtitle: "Protección molecular de larga duración con brillo efecto mojado",
    category: "Coating Molecular",
    description: "Recubrimiento cerámico de grado profesional aplicado en ambiente estéril. Genera una capa de vidrio de alta densidad que repele agua, suciedad, aceites y salitre gallego, facilitando lavados futuros y evitando la decoloración solar.",
    features: [
      "Dureza de lápiz 9H certificada por SGS internacional",
      "Efecto de autolimpieza hidrofóbica extrema (efecto loto)",
      "Protección frente a microarañazos de secado y químicos agresivos",
      "Curado controlado por lámparas de infrarrojos de onda corta",
      "Garantía oficial por escrito de 3 a 7 años según formulación"
    ],
    duration: "2 a 3 días",
    startingPrice: "Desde 590€",
    recommendedFor: "Vehículos deportivos, nuevos y berlinas de alta gama",
    badge: "SERVICIO ESTRELLA",
    icon: "ShieldCheck"
  },
  {
    id: "ppf-proteccion",
    title: "PPF (Paint Protection Film)",
    subtitle: "Película invisible de uretano autorregenerable de grado aeroespacial",
    category: "Blindaje de Carrocería",
    description: "La armadura definitiva contra impactos de gravilla en carretera, abrasiones, roces de aparcamiento y arañazos de llaves. Lámina termoplástica prémium de 200 micras cortada a medida por plotter digital para ajuste invisible milimétrico.",
    features: [
      "Capacidad autorregenerable con el calor solar o agua templada",
      "Absorción total de impactos de piedras y proyectiles de autovía",
      "Transparencia óptica cristalina sin efecto piel de naranja",
      "Tratamiento hidrófobo cerámico incorporado en la capa superior",
      "Garantía de 10 años contra amarilleamiento o desprendimiento"
    ],
    duration: "3 a 5 días",
    startingPrice: "Desde 1.150€",
    recommendedFor: "Superdeportivos, frontales de impacto y coches de circuito",
    badge: "MÁXIMA PROTECCIÓN",
    icon: "Layers"
  },
  {
    id: "correccion-pintura",
    title: "Corrección de Pintura de Alta Definición",
    subtitle: "Restauración milimétrica del barniz sin rebajes agresivos",
    category: "Restauración Óptica",
    description: "Proceso artesanal de pulido multietapa que devuelve a la carrocería la profundidad y nitidez de fábrica. Eliminamos swirls, marcas circulares de lavados anteriores, rayas aisladas, piel de naranja y halos de pulidos defectuosos.",
    features: [
      "Mapeo de espesores con micrómetro digital ultrasónico antes de pulir",
      "Compuestos abrasivos alemanes solubles en agua libres de siliconas",
      "Eliminación garantizada del 90% al 98% de defectos ópticos",
      "Inspección rigurosa bajo iluminación fría/cálida de espectro solar (Scangrip)",
      "Acabado de espejo puro con máxima definición de reflejo"
    ],
    duration: "2 días",
    startingPrice: "Desde 420€",
    recommendedFor: "Vehículos con pintura fatigada, marcas circulares o tras repintado",
    icon: "Sparkles"
  },
  {
    id: "interior-detailing",
    title: "Detailing Interior & Cuero Noble",
    subtitle: "Desinfección profunda a vapor seco y acondicionamiento térmico",
    category: "Habitáculo de Élite",
    description: "Restauración del habitáculo con vapor seco a 180°C que desinfecta y disuelve la suciedad sin saturar moquetas. Nutrición hidrofugante de pieles naturales con productos específicos mate y protección cerámica de tapicerías y alcántara.",
    features: [
      "Limpieza y purificación de conductos de climatización con generador de ozono",
      "Tratamiento mate de volantes y asientos de cuero sin brillo artificial grasiento",
      "Impermeabilización hidrófuga textil y alcántara contra derrames de líquidos",
      "Desmontaje de banquetas si se requiere para acceso total al chasis interior",
      "Aroma premium exclusivo neutro sin perfumes sintéticos invasivos"
    ],
    duration: "1 a 2 días",
    startingPrice: "Desde 280€",
    recommendedFor: "Tapicerías de piel clara, clásicos y vehículos de uso diario",
    icon: "Armchair"
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "esencial-detail",
    name: "Esencial Detail",
    subtitle: "Renovación estética & protección estacional",
    price: "450€",
    priceNote: "IVA incluido · Según tamaño de vehículo",
    duration: "24 a 36 horas",
    warranty: "1 Año de Protección",
    description: "Ideal para vehículos jóvenes que buscan restaurar el brillo perdido, eliminar pequeños swirls superficiales y obtener una protección hidrófuga duradera.",
    features: [
      { name: "Descontaminación química y con clay bar suave", included: true },
      { name: "Lavado de dos cubos con Snow Foam activo", included: true },
      { name: "Corrección de pintura en 1 etapa (acabado brillo +60%)", included: true },
      { name: "Sellador polimérico cerámico SiO2 (12 meses)", included: true },
      { name: "Acondicionamiento de gomas y neumáticos", included: true },
      { name: "Limpieza básica interior y aspirado profundo", included: true },
      { name: "Tratamiento cerámico multicapa 9H de carrocería", included: false },
      { name: "Protección cerámica de llantas y pinzas desmontadas", included: false },
      { name: "Tratamiento hidrófugo de cristales lluvia extrema", included: false }
    ],
    ctaText: "Seleccionar Esencial"
  },
  {
    id: "proteccion-ceramica",
    name: "Protección Cerámica 9H",
    subtitle: "El estándar dorado de Apex Detail Studio",
    price: "890€",
    priceNote: "IVA incluido · Paquete más solicitado",
    duration: "2 a 3 días",
    isPopular: true,
    warranty: "5 Años Garantía Oficial",
    description: "El paquete definitivo para apasionados del motor. Corrección de pintura profunda en 2 fases con aplicación de recubrimiento cerámico certificado multicapa 9H.",
    features: [
      { name: "Descontaminación exhaustiva química y férrica al 100%", included: true },
      { name: "Lavado de descontaminación de bajos y pasos de rueda", included: true },
      { name: "Corrección de pintura en 2 etapas (eliminación >90% defectos)", included: true },
      { name: "Recubrimiento Cerámico 9H (Carrocería completa)", included: true },
      { name: "Curado térmico con lámparas infrarrojas de onda corta", included: true },
      { name: "Tratamiento hidrofóbico en parabrisas y cristales laterales", included: true },
      { name: "Sellado frontal cerámico de llantas de aleación", included: true },
      { name: "Limpieza detallada de vano motor e interiores", included: true },
      { name: "Certificado oficial Apex Studio & Pasaporte Digital 5 años", included: true }
    ],
    ctaText: "Elegir Protección Cerámica"
  },
  {
    id: "apex-ultimate",
    name: "Apex Ultimate Bespoke",
    subtitle: "Perfección absoluta sin restricciones de tiempo",
    price: "1.790€",
    priceNote: "IVA incluido · Consulta para personalizaciones",
    duration: "4 a 6 días",
    warranty: "7 Años Garantía Escrita",
    description: "La cumbre del car care internacional. Corrección multietapa al milímetro hasta nivel de concurso, doble capa cerámica con matriz de grafeno y blindaje PPF en áreas críticas.",
    features: [
      { name: "Inspección micrométrica panel a panel con informe digital", included: true },
      { name: "Corrección de pintura multietapa sin límite de pasadas (>98%)", included: true },
      { name: "Recubrimiento cerámico bicapa 9H+ infundido en Grafeno", included: true },
      { name: "Lámina PPF autorregenerable en frontal de impacto (paragolpes + faros)", included: true },
      { name: "Desmontaje completo de 4 llantas para coating cerámico interior/exterior", included: true },
      { name: "Tratamiento cerámico de pinzas de freno y pasos de rueda", included: true },
      { name: "Detailing interior de piel, alcántara y desinfección total por ozono", included: true },
      { name: "Kit VIP de mantenimiento post-entrega (champú pH neutro, toallas 1200GSM)", included: true },
      { name: "Inspecciones de garantía anuales gratuitas durante 7 años", included: true }
    ],
    ctaText: "Solicitar Apex Ultimate"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-curado",
    category: "curado",
    question: "¿Cuánto tiempo necesita el recubrimiento cerámico para curar y cuándo puedo lavar el coche?",
    answer: "En Apex Detail Studio entregamos el vehículo totalmente estabilizado gracias a nuestro proceso de curado asistido por infrarrojos de onda corta (Short-Wave IR) a 65°C en cabina. No obstante, el polímero molecular continúa su reticulación química con el oxígeno durante los 7 días posteriores a la entrega. Durante esta primera semana se puede circular con normalidad bajo lluvia, pero se recomienda evitar lavar el coche con detergentes químicos o champús agresivos para permitir que el 100% de la dureza 9H se asiente en la superficie."
  },
  {
    id: "faq-mantenimiento",
    category: "mantenimiento",
    question: "¿Cómo debo lavar el coche tras el tratamiento para conservar la garantía?",
    answer: "El mantenimiento tras un recubrimiento cerámico es extraordinariamente sencillo gracias a su ángulo de contacto hidrófobo de más de 115°: la suciedad no se adhiere con fuerza. Recomendamos el método tradicional de dos cubos con champú de pH neutro sin ceras sintéticas y un guante de microfibra de alta densidad. Nunca debe introducirse el vehículo en túneles de rodillos automáticos de cerdas plásticas. Con cada tratamiento entregamos una guía detallada de mantenimiento y ofrecemos revisiones periódicas en nuestro estudio de Lugo."
  },
  {
    id: "faq-diferencia-ppf",
    category: "garantias",
    question: "¿Cuál es la diferencia real entre el Tratamiento Cerámico 9H y el PPF (Paint Protection Film)?",
    answer: "El tratamiento cerámico es una capa líquida nanotecnológica de cuarzo/grafeno de 2 a 3 micras que se endurece sobre el barniz, aportando un brillo reflectivo deslumbrante, facilidad de lavado extrema e inmunidad frente a la radiación UV, lluvia ácida y agentes biológicos. El PPF, por su parte, es una película física elástica de poliuretano de 200 micras de grosor diseñada específicamente para absorber la energía cinética de piedras e impactos de autovía que perforarían cualquier pintura. En Apex a menudo recomendamos la combinación perfecta: PPF en el frontal de impacto y cerámica 9H en el resto de la carrocería."
  },
  {
    id: "faq-garantia",
    category: "garantias",
    question: "¿Cómo funciona la garantía escrita oficial de Apex Detail Studio?",
    answer: "Nuestras garantías (de 1, 5 y 7 años según el paquete contratado) son documentos contractuales por escrito vinculados al bastidor del vehículo. Cubren la pérdida prematura de propiedades hidrofóbicas, desprendimiento, oxidación y degradación por rayos UV. Para validar la cobertura extendida en el tiempo, realizamos una inspección visual y descontaminación de mantenimiento periódica en nuestras instalaciones de O Ceao (Lugo)."
  },
  {
    id: "faq-coche-nuevo",
    category: "proceso",
    question: "¿Tiene sentido aplicar un tratamiento cerámico a un coche nuevo recién sacado de concesionario?",
    answer: "Es precisamente el mejor momento para hacerlo. Aunque parezca contradictorio, los coches nuevos procedentes de fábrica sufren contaminación férrica durante el transporte en trenes o barcos, y a menudo presentan marcas de preparación deficiente en concesionario. Al tratarlo desde el primer día, preservamos el barniz original íntegro al 100%, sellándolo bajo una armadura cerámica antes de que sufra las primeras marcas del asfalto o del clima gallego."
  }
];

export const STUDIO_INFO = {
  name: "Apex Detail Studio",
  slogan: "Automotive Detailing & Surface Protection Specialists",
  address: "Polígono Industrial O Ceao, Rúa da Industria, 42",
  postalCode: "27003",
  city: "Lugo",
  region: "Galicia",
  country: "España",
  phone: "+34 982 28 44 90",
  mobile: "+34 691 00 22 11",
  email: "contacto@apexdetailstudio.es",
  schedule: {
    weekdays: "Lunes a Viernes: 08:30 - 19:30",
    saturday: "Sábados: 09:00 - 14:00 (Cita previa exclusiva)",
    sunday: "Domingos: Cerrado"
  },
  coordinates: {
    lat: "43.0384° N",
    lng: "7.5562° W"
  },
  certifications: [
    "Certified Detailer IDA (International Detailing Association)",
    "GYEON Quartz Certified Installer",
    "XPEL Factory Trained Film Applicator",
    "Rupes Authorized Polishing Center"
  ]
};
