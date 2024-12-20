const data = {
  rol: [
    ({
      idrol: 1,
      nombre: "admin",
    },
    {
      idrol: 2,
      nombre: "voluntario",
    },
    {
      idrol: 3,
      nombre: "organizacion",
    }),
  ],
  usuarios: [
    ({
      idusuario: 1,
      nombre: "Juan",
      apellido: "Pérez",
      email: "juan.perez@example.com",
      clave: "clave123",
      descripcion: "Administrador del sistema",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 1,
        nombre: "admin",
      },
    },
    {
      idusuario: 2,
      nombre: "Ana",
      apellido: "Gómez",
      email: "ana.gomez@example.com",
      clave: "clave456",
      descripcion: "Voluntaria en proyectos comunitarios",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 2,
        nombre: "voluntario",
      },
    },
    {
      idusuario: 3,
      nombre: "Carlos",
      apellido: "Ramírez",
      email: "carlos.ramirez@example.com",
      clave: "clave789",
      descripcion: "Voluntario en eventos de caridad",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 2,
        nombre: "voluntario",
      },
    },
    {
      idusuario: 4,
      nombre: "Lucía",
      apellido: "Fernández",
      email: "lucia.fernandez@example.com",
      clave: "clave101",
      descripcion: "Voluntaria en campañas de salud",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 2,
        nombre: "voluntario",
      },
    },
    {
      idusuario: 5,
      nombre: "Miguel",
      apellido: "Martínez",
      email: "miguel.martinez@example.com",
      clave: "clave202",
      descripcion: "Administrador del sitio",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 1,
        nombre: "admin",
      },
    },
    {
      idusuario: 6,
      nombre: "Sofía",
      apellido: "Lopez",
      email: "sofia.lopez@example.com",
      clave: "clave303",
      descripcion: "Voluntaria en proyectos educativos",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 2,
        nombre: "voluntario",
      },
    },
    {
      idusuario: 7,
      nombre: "David",
      apellido: "García",
      email: "david.garcia@example.com",
      clave: "clave404",
      descripcion: "Voluntario en proyectos de tecnología",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 2,
        nombre: "voluntario",
      },
    },
    {
      idusuario: 8,
      nombre: "Elena",
      apellido: "Rodríguez",
      email: "elena.rodriguez@example.com",
      clave: "clave505",
      descripcion: "Voluntaria en campañas de medio ambiente",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 2,
        nombre: "voluntario",
      },
    },
    {
      idusuario: 9,
      nombre: "José",
      apellido: "Hernández",
      email: "jose.hernandez@example.com",
      clave: "clave606",
      descripcion: "Voluntario en proyectos comunitarios",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 2,
        nombre: "voluntario",
      },
    },
    {
      idusuario: 10,
      nombre: "Marta",
      apellido: "Ruiz",
      email: "marta.ruiz@example.com",
      clave: "clave707",
      descripcion: "Voluntaria en eventos deportivos",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 2,
        nombre: "voluntario",
      },
    }),
  ],
  organizacion: [
    ({
      idorganizacion: 1,
      nombre_organizacion: "Fundación Esperanza",
      descripcion:
        "Organización dedicada a ayudar a comunidades en situación de vulnerabilidad.",
      url_web: "https://fundacionesperanza.org",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 3,
        nombre: "organizacion",
      },
    },
    {
      idorganizacion: 2,
      nombre_organizacion: "Voluntarios Unidos",
      descripcion:
        "Grupo de voluntarios que colaboran en proyectos de diversas ONGs.",
      url_web: "https://voluntariosunidos.org",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 3,
        nombre: "organizacion",
      },
    },
    {
      idorganizacion: 3,
      nombre_organizacion: "Red Solidaria",
      descripcion:
        "Organización que apoya la educación y el desarrollo sostenible.",
      url_web: "https://redsolidaria.org",
      url_avatar: "https://placehold.co/100x100",
      rol_idrol: {
        idrol: 3,
        nombre: "organizacion",
      },
    }),
  ],
  categoria: [
    ({
      idcategoria: 1,
      nombre_categoria: "Educación",
    },
    {
      idcategoria: 2,
      nombre_categoria: "Salud",
    },
    {
      idcategoria: 3,
      nombre_categoria: "Medio Ambiente",
    },
    {
      idcategoria: 4,
      nombre_categoria: "Desarrollo Comunitario",
    },
    {
      idcategoria: 5,
      nombre_categoria: "Tecnología",
    }),
  ],
  proyecto: [
    {
      idproyecto: 1,
      titulo: "Alfabetización Digital",
      descripcion:
        "Programa para enseñar competencias digitales básicas a adultos mayores. El objetivo es reducir la brecha digital y mejorar la calidad de vida de los participantes.",
      requisitos: "Conocimiento básico de informática.",
      estado: "en proceso",
      fecha_inicio: "2024-01-15",
      fecha_finalizado: null,
      url_img_1:
        "https://i.pinimg.com/564x/df/0e/e4/df0ee4995542cb396ac551b01796b576.jpg",
      url_img_2: "https://placehold.co/600x600/00FF00/FFF",
      url_img_3: "https://placehold.co/600x600/0000FF/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 1,
        nombre_organizacion: "Fundación Esperanza",
        descripcion:
          "Organización dedicada a ayudar a comunidades en situación de vulnerabilidad.",
        url_web: "https://fundacionesperanza.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 2,
      titulo: "Salud para Todos",
      descripcion: "Campaña de salud preventiva en comunidades rurales.",
      requisitos: "Experiencia en atención médica.",
      estado: "terminado",
      fecha_inicio: "2023-03-01",
      fecha_finalizado: "2023-12-01",
      url_img_1:
        "https://i.pinimg.com/564x/ff/d7/2e/ffd72eb1a4effa03e05418afe3e4107f.jpg",
      url_img_2: "https://placehold.co/600x600/FF00FF/FFF",
      url_img_3: "https://placehold.co/600x600/00FFFF/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 2,
        nombre_organizacion: "Voluntarios Unidos",
        descripcion:
          "Grupo de voluntarios que colaboran en proyectos de diversas ONGs.",
        url_web: "https://voluntariosunidos.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 3,
      titulo: "Reforestación Urbana",
      descripcion:
        "Iniciativa para plantar árboles en áreas urbanas y suburbanas.",
      requisitos: "Voluntarios interesados en jardinería.",
      estado: "reciente",
      fecha_inicio: "2024-05-01",
      fecha_finalizado: null,
      url_img_1:
        "https://i.pinimg.com/564x/3e/c4/15/3ec4152e14595a62faf33a3c4cfa1789.jpg",
      url_img_2: "https://placehold.co/600x600/FF0000/FFF",
      url_img_3: "https://placehold.co/600x600/0000FF/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 3,
        nombre_organizacion: "Red Solidaria",
        descripcion:
          "Organización que apoya la educación y el desarrollo sostenible.",
        url_web: "https://redsolidaria.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 4,
      titulo: "Talleres de Capacitación",
      descripcion: "Talleres gratuitos para mejorar habilidades profesionales.",
      requisitos: "Experiencia en el área de capacitación.",
      estado: "en proceso",
      fecha_inicio: "2024-03-01",
      fecha_finalizado: null,
      url_img_1:
        "https://i.pinimg.com/564x/92/14/a3/9214a355a4dd6ff0a09fbf91735ddea0.jpg",
      url_img_2: "https://placehold.co/600x600/00FFFF/FFF",
      url_img_3: "https://placehold.co/600x600/FFFF00/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 1,
        nombre_organizacion: "Fundación Esperanza",
        descripcion:
          "Organización dedicada a ayudar a comunidades en situación de vulnerabilidad.",
        url_web: "https://fundacionesperanza.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 5,
      titulo: "Programación para Jóvenes",
      descripcion:
        "Curso de introducción a la programación para jóvenes de secundaria.",
      requisitos:
        "Interés en la programación y habilidades básicas de informática.",
      estado: "terminado",
      fecha_inicio: "2023-06-01",
      fecha_finalizado: "2023-12-15",
      url_img_1:
        "https://i.pinimg.com/736x/94/4f/1a/944f1a47f322e66bf05f26e1f6ff8f97.jpg",
      url_img_2: "https://placehold.co/600x600/FF0000/FFF",
      url_img_3: "https://placehold.co/600x600/00FF00/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 2,
        nombre_organizacion: "Voluntarios Unidos",
        descripcion:
          "Grupo de voluntarios que colaboran en proyectos de diversas ONGs.",
        url_web: "https://voluntariosunidos.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 6,
      titulo: "Campaña de Reciclaje",
      descripcion:
        "Iniciativa para promover el reciclaje en la comunidad local.",
      requisitos:
        "Voluntarios para realizar actividades de educación y recolección.",
      estado: "reciente",
      fecha_inicio: "2024-07-01",
      fecha_finalizado: null,
      url_img_1:
        "https://i.pinimg.com/564x/c3/46/e5/c346e5435b17da8c098d30edbd9b95ef.jpg",
      url_img_2: "https://placehold.co/600x600/FF00FF/FFF",
      url_img_3: "https://placehold.co/600x600/00FFFF/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 3,
        nombre_organizacion: "Red Solidaria",
        descripcion:
          "Organización que apoya la educación y el desarrollo sostenible.",
        url_web: "https://redsolidaria.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 7,
      titulo: "Cuidado Infantil",
      descripcion:
        "Programa de atención y cuidado para niños en situación de vulnerabilidad.",
      requisitos: "Experiencia en cuidado infantil.",
      estado: "en proceso",
      fecha_inicio: "2024-02-01",
      fecha_finalizado: null,
      url_img_1:
        "https://i.pinimg.com/564x/94/fd/fc/94fdfcbc253ccb36bc07a89b619347d7.jpg",
      url_img_2: "https://placehold.co/600x600/00FF00/FFF",
      url_img_3: "https://placehold.co/600x600/0000FF/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 1,
        nombre_organizacion: "Fundación Esperanza",
        descripcion:
          "Organización dedicada a ayudar a comunidades en situación de vulnerabilidad.",
        url_web: "https://fundacionesperanza.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 8,
      titulo: "Desarrollo Sostenible",
      descripcion:
        "Proyecto para fomentar prácticas sostenibles en la comunidad.",
      requisitos: "Interés en desarrollo sostenible y medio ambiente.",
      estado: "reciente",
      fecha_inicio: "2024-06-01",
      fecha_finalizado: null,
      url_img_1:
        "https://i.pinimg.com/564x/6d/e7/05/6de7056d4d1d7374bf774ffb3b30929e.jpg",
      url_img_2: "https://placehold.co/600x600/FFFF00/FFF",
      url_img_3: "https://placehold.co/600x600/FF00FF/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 2,
        nombre_organizacion: "Voluntarios Unidos",
        descripcion:
          "Grupo de voluntarios que colaboran en proyectos de diversas ONGs.",
        url_web: "https://voluntariosunidos.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 9,
      titulo: "Asistencia Legal",
      descripcion:
        "Servicios legales gratuitos para personas de bajos recursos.",
      requisitos: "Abogados voluntarios y personal administrativo.",
      estado: "en proceso",
      fecha_inicio: "2024-04-01",
      fecha_finalizado: null,
      url_img_1: "https://placehold.co/600x600/FF00FF/FFF",
      url_img_2: "https://placehold.co/600x600/00FFFF/FFF",
      url_img_3: "https://placehold.co/600x600/FFFF00/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 3,
        nombre_organizacion: "Red Solidaria",
        descripcion:
          "Organización que apoya la educación y el desarrollo sostenible.",
        url_web: "https://redsolidaria.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 10,
      titulo: "Programa de Becas",
      descripcion: "Becas para estudiantes de bajos recursos.",
      requisitos: "Estudiantes con excelente rendimiento académico.",
      estado: "terminado",
      fecha_inicio: "2023-05-01",
      fecha_finalizado: "2023-12-15",
      url_img_1: "https://placehold.co/600x600/FFFF00/FFF",
      url_img_2: "https://placehold.co/600x600/00FF00/FFF",
      url_img_3: "https://placehold.co/600x600/0000FF/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 2,
        nombre_organizacion: "Voluntarios Unidos",
        descripcion:
          "Grupo de voluntarios que colaboran en proyectos de diversas ONGs.",
        url_web: "https://voluntariosunidos.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 11,
      titulo: "Red de Apoyo a Mujeres",
      descripcion:
        "Programa de apoyo para mujeres en situación de vulnerabilidad.",
      requisitos: "Interés en el apoyo y empoderamiento de mujeres.",
      estado: "en proceso",
      fecha_inicio: "2024-01-01",
      fecha_finalizado: null,
      url_img_1: "https://placehold.co/600x600/FF0000/FFF",
      url_img_2: "https://placehold.co/600x600/00FF00/FFF",
      url_img_3: "https://placehold.co/600x600/0000FF/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 1,
        nombre_organizacion: "Fundación Esperanza",
        descripcion:
          "Organización dedicada a ayudar a comunidades en situación de vulnerabilidad.",
        url_web: "https://fundacionesperanza.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 12,
      titulo: "Centro de Apoyo Psicológico",
      descripcion:
        "Servicios de apoyo psicológico gratuito para personas necesitadas.",
      requisitos: "Psicólogos voluntarios y personal administrativo.",
      estado: "reciente",
      fecha_inicio: "2024-08-01",
      fecha_finalizado: null,
      url_img_1: "https://placehold.co/600x600/FFFF00/FFF",
      url_img_2: "https://placehold.co/600x600/FF00FF/FFF",
      url_img_3: "https://placehold.co/600x600/00FFFF/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 3,
        nombre_organizacion: "Red Solidaria",
        descripcion:
          "Organización que apoya la educación y el desarrollo sostenible.",
        url_web: "https://redsolidaria.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 13,
      titulo: "Feria de Empleo",
      descripcion:
        "Feria de empleo para conectar a candidatos con empleadores locales.",
      requisitos: "Experiencia en organización de eventos.",
      estado: "en proceso",
      fecha_inicio: "2024-09-01",
      fecha_finalizado: null,
      url_img_1: "https://placehold.co/600x600/FF00FF/FFF",
      url_img_2: "https://placehold.co/600x600/00FFFF/FFF",
      url_img_3: "https://placehold.co/600x600/FFFF00/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 2,
        nombre_organizacion: "Voluntarios Unidos",
        descripcion:
          "Grupo de voluntarios que colaboran en proyectos de diversas ONGs.",
        url_web: "https://voluntariosunidos.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 14,
      titulo: "Cultura y Arte",
      descripcion:
        "Promoción y apoyo a eventos culturales y artísticos en la comunidad.",
      requisitos: "Interés en cultura y arte.",
      estado: "reciente",
      fecha_inicio: "2024-10-01",
      fecha_finalizado: null,
      url_img_1: "https://placehold.co/600x600/FF0000/FFF",
      url_img_2: "https://placehold.co/600x600/00FF00/FFF",
      url_img_3: "https://placehold.co/600x600/0000FF/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 1,
        nombre_organizacion: "Fundación Esperanza",
        descripcion:
          "Organización dedicada a ayudar a comunidades en situación de vulnerabilidad.",
        url_web: "https://fundacionesperanza.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
    {
      idproyecto: 15,
      titulo: "Deportes y Recreación",
      descripcion:
        "Organización de eventos deportivos y recreativos para jóvenes.",
      requisitos: "Experiencia en organización de eventos deportivos.",
      estado: "en proceso",
      fecha_inicio: "2024-05-01",
      fecha_finalizado: null,
      url_img_1: "https://placehold.co/600x600/FFFF00/FFF",
      url_img_2: "https://placehold.co/600x600/FF00FF/FFF",
      url_img_3: "https://placehold.co/600x600/00FFFF/FFF",
      organizacion_idorganizacion: {
        idorganizacion: 3,
        nombre_organizacion: "Red Solidaria",
        descripcion:
          "Organización que apoya la educación y el desarrollo sostenible.",
        url_web: "https://redsolidaria.org",
        url_avatar: "https://placehold.co/100x100",
        rol_idrol: {
          idrol: 3,
          nombre: "organizacion",
        },
      },
    },
  ],
};
export default data;
