// Ejemplos de prueba. DATOS FICTICIOS: organizaciones inventadas; factores reales HC 2025 v2.
// demo-a: 3 años (2023 y 2024 históricos importados, 2025 calculado con errores intencionales).
// demo-b: 1 año (2025 calculado, datos completos para probar el flujo de aprobación).
// demo-c: viña, 2024 histórico + 2025 calculado con datos incompletos y un establecimiento excluido.
// demo-e: recorrido completo, 2025 en etapa Reconocido con todos los hitos registrados.
// demo-d: clínica, 2025 calculado con todas las fuentes aprobadas y con evidencia (lista para aprobación interna).
export const DEMOS = [
 {
  "id": "demo-a",
  "demo": true,
  "name": "Minera Cordillera Liquen SpA",
  "invs": [
   {
    "id": "a-2023",
    "kind": "hist",
    "year": 2023,
    "total": 51840,
    "d": 15420,
    "e": 31210,
    "o": 5210,
    "base": "HC FE 2023",
    "status": "Verificado (registro histórico)",
    "notes": "FE SEN 2023 vigente a esa fecha. Neumáticos no incluidos.",
    "intensity": {
     "workers": 1080,
     "prod": 18400
    }
   },
   {
    "id": "a-2024",
    "kind": "hist",
    "year": 2024,
    "total": 46980,
    "d": 14960,
    "e": 27150,
    "o": 4870,
    "base": "HC FE 2024 v5",
    "status": "Verificado (registro histórico)",
    "notes": "FE SEN 2024 = 202,1 kgCO₂e/MWh; la base 2025 v2 lo actualizó a 213,1. Neumáticos no incluidos.",
    "intensity": {
     "workers": 1120,
     "prod": 19100
    }
   },
   {
    "id": "a-2025",
    "kind": "calc",
    "org": {
     "name": "Minera Cordillera Liquen SpA",
     "fantasy": "Cordillera Liquen",
     "rut": "99.999.999-9",
     "activity": "Extracción y concentración de minerales de cobre",
     "sector": "Minería metálica",
     "region": "Región de Antofagasta",
     "description": "Operación ficticia de rajo abierto con planta concentradora, oficina central y bodega portuaria. Usada solo para validar flujos y cálculos.",
     "responsible": "Camila Rojas Vidal",
     "role": "Responsable de huella de carbono",
     "phone": "+56 2 0000 0000",
     "email": "huella@cordilleraliquen.demo",
     "modality": "Elaborado por la organización declarante (capacidades internas)",
     "preparers": "Camila Rojas Vidal; Tomás Araya Muñoz",
     "declarant": "Oficina Central · DEMO-0003"
    },
    "period": {
     "year": 2025,
     "from": "01/01/2025",
     "to": "31/12/2025",
     "baseYear": 2023,
     "approach": "Control operacional",
     "approachNote": "Enfoque exigido por el Programa HuellaChile según la plantilla de informe vigente (08/04/2026)."
    },
    "establishments": [
     {
      "id": "E1",
      "name": "Faena Cerro Liquen",
      "vu": "DEMO-0001",
      "type": "Rajo abierto",
      "address": "Camino a Sierra Gorda km 42, Antofagasta",
      "included": true,
      "reason": ""
     },
     {
      "id": "E2",
      "name": "Planta Concentradora Quebrada Seca",
      "vu": "DEMO-0002",
      "type": "Planta de procesos",
      "address": "Ruta B-385 km 18, Antofagasta",
      "included": true,
      "reason": ""
     },
     {
      "id": "E3",
      "name": "Oficina Central",
      "vu": "DEMO-0003",
      "type": "Administrativo",
      "address": "Av. Apoquindo 0000, Las Condes",
      "included": true,
      "reason": ""
     },
     {
      "id": "E4",
      "name": "Bodega Portuaria Angamos",
      "vu": "DEMO-0004",
      "type": "Logística",
      "address": "Recinto portuario, Mejillones",
      "included": true,
      "reason": ""
     },
     {
      "id": "E5",
      "name": "Campamento de exploración Sierra Alta",
      "vu": "DEMO-0005",
      "type": "Exploración",
      "address": "Sector Sierra Alta, Calama",
      "included": false,
      "reason": "Sin actividad operativa durante 2025 (proyecto suspendido desde 11/2024). Se reincorporará al reanudar operaciones."
     }
    ],
    "categories": [
     {
      "key": "d1",
      "group": "Emisiones y remociones directas",
      "name": "Combustión estacionaria",
      "state": "Incluida",
      "detail": "Generadores de respaldo (diésel) y caldera de planta (GLP)."
     },
     {
      "key": "d2",
      "group": "Emisiones y remociones directas",
      "name": "Combustión móvil",
      "state": "Incluida",
      "detail": "Flota de extracción CAEX y flota liviana propia."
     },
     {
      "key": "d3",
      "group": "Emisiones y remociones directas",
      "name": "Uso suelo, cambios en el uso de suelo y silvicultura",
      "state": "No aplica",
      "detail": "Sin cambios de uso de suelo ni plantaciones bajo control en 2025."
     },
     {
      "key": "d4",
      "group": "Emisiones y remociones directas",
      "name": "Procesos industriales",
      "state": "Incluida",
      "detail": "Detonación de explosivos en tronadura (ANFO)."
     },
     {
      "key": "d5",
      "group": "Emisiones y remociones directas",
      "name": "Emisiones fugitivas",
      "state": "Incluida",
      "detail": "Recargas de refrigerante en climatización de planta."
     },
     {
      "key": "e1",
      "group": "Emisiones indirectas por energía importada",
      "name": "Electricidad importada",
      "state": "Incluida",
      "detail": "Suministro desde el Sistema Eléctrico Nacional en los cuatro establecimientos."
     },
     {
      "key": "e2",
      "group": "Emisiones indirectas por energía importada",
      "name": "Otra energía importada y/o pérdidas T&D",
      "state": "No aplica",
      "detail": "La organización no es distribuidora ni transmisora; no adquiere vapor ni calor."
     },
     {
      "key": "o1",
      "group": "Otras emisiones indirectas",
      "name": "Transporte",
      "state": "Incluida",
      "detail": "Traslado de personal, viajes de negocios y transporte de concentrado a puerto."
     },
     {
      "key": "o2",
      "group": "Otras emisiones indirectas",
      "name": "Productos que utiliza la organización",
      "state": "Incluida",
      "detail": "Neumáticos, agua potable, residuos y servicios contratados."
     },
     {
      "key": "o3",
      "group": "Otras emisiones indirectas",
      "name": "Uso de productos de la organización",
      "state": "Excluida",
      "detail": ""
     },
     {
      "key": "i1",
      "group": "Otras emisiones y remociones informativas",
      "name": "Remociones de carbono biogénico",
      "state": "No aplica",
      "detail": ""
     },
     {
      "key": "i2",
      "group": "Otras emisiones y remociones informativas",
      "name": "Emisiones de carbono biogénico",
      "state": "No aplica",
      "detail": ""
     },
     {
      "key": "i3",
      "group": "Otras emisiones y remociones informativas",
      "name": "Emisiones no cubiertas en el Protocolo de Kioto",
      "state": "No aplica",
      "detail": ""
     }
    ],
    "sources": [
     {
      "id": "FS-001",
      "est": "E1",
      "cat": "1.2",
      "name": "Camiones de extracción CAEX",
      "activity": "Consumo de diésel",
      "freq": "mensual",
      "unit": "m³ líq.",
      "factorId": "FE-12-DIE",
      "method": "Datos físicos de consumo",
      "origin": "Registro de despacho de combustible",
      "owner": "Tomás Araya",
      "status": "aprobado",
      "months": [
       398,
       386,
       405,
       401,
       412,
       395,
       404,
       410,
       399,
       402,
       391,
       397
      ],
      "evidence": [
       "Guías de despacho ENEX 2025 (12 PDF)",
       "Planilla control de combustible.xlsx"
      ],
      "version": 3
     },
     {
      "id": "FS-002",
      "est": "E1",
      "cat": "1.2",
      "name": "Flota liviana propia",
      "activity": "Consumo de diésel",
      "freq": "mensual",
      "unit": "L",
      "factorId": "FE-12-DIE",
      "method": "Datos físicos de consumo",
      "origin": "Tarjetas de combustible",
      "owner": "Tomás Araya",
      "status": "revisado",
      "months": [
       17600,
       17150,
       18020,
       17480,
       17890,
       17300,
       17950,
       17620,
       17410,
       17780,
       null,
       17260
      ],
      "evidence": [
       "Estados de cuenta tarjeta flota (11)"
      ],
      "version": 2
     },
     {
      "id": "FS-003",
      "est": "E1",
      "cat": "1.1",
      "name": "Generadores de respaldo",
      "activity": "Consumo de diésel",
      "freq": "mensual",
      "unit": "L",
      "factorId": "FE-11-DIE",
      "method": "Datos físicos de consumo",
      "origin": "Bitácora de generadores",
      "owner": "Ignacio Pérez",
      "status": "ingresado",
      "months": [
       12800,
       13100,
       12650,
       12900,
       13300,
       13050,
       41200,
       13150,
       12750,
       12980,
       13020,
       12890
      ],
      "evidence": [
       "Bitácora generadores 2025.pdf"
      ],
      "version": 1
     },
     {
      "id": "FS-004",
      "est": "E2",
      "cat": "1.1",
      "name": "Caldera de planta",
      "activity": "Consumo de GLP",
      "freq": "mensual",
      "unit": "L",
      "factorId": "FE-11-GLP",
      "method": "Datos físicos de consumo",
      "origin": "Facturas proveedor GLP",
      "owner": "Valentina Soto",
      "status": "aprobado",
      "months": [
       8100,
       7900,
       8050,
       7980,
       8200,
       8150,
       8320,
       8010,
       7890,
       8060,
       7950,
       8020
      ],
      "evidence": [
       "Facturas Lipigas 2025 (12 PDF)"
      ],
      "version": 2
     },
     {
      "id": "FS-005",
      "est": "E2",
      "cat": "1.4",
      "name": "Climatización de planta",
      "activity": "Recarga de refrigerante R410A",
      "freq": "anual",
      "unit": "kg",
      "annual": 42,
      "factorId": "FE-14-R410A",
      "method": "Registro de mantención",
      "origin": "Órdenes de trabajo contratista HVAC",
      "owner": "Valentina Soto",
      "status": "revisado",
      "evidence": [],
      "version": 1
     },
     {
      "id": "FS-006",
      "est": "E1",
      "cat": "2.1",
      "name": "Electricidad faena (medidor M-114)",
      "meter": "M-114",
      "activity": "Consumo eléctrico SEN",
      "freq": "mensual",
      "unit": "MWh",
      "factorId": "FE-21-SEN25",
      "method": "Datos físicos de consumo",
      "origin": "Facturas cliente libre",
      "owner": "Ignacio Pérez",
      "status": "aprobado",
      "months": [
       2580,
       2540,
       2610,
       2600,
       2650,
       2590,
       2620,
       2640,
       2570,
       2600,
       2610,
       2590
      ],
      "evidence": [
       "Facturas suministro 2025 (12 PDF)"
      ],
      "version": 2
     },
     {
      "id": "FS-019",
      "est": "E1",
      "cat": "2.1",
      "name": "Electricidad campamento (carga manual)",
      "meter": "M-114",
      "activity": "Consumo eléctrico SEN",
      "freq": "mensual",
      "unit": "MWh",
      "factorId": "FE-21-SEN25",
      "method": "Datos físicos de consumo",
      "origin": "Planilla enviada por administración campamento",
      "owner": "Rodrigo Fuentes",
      "status": "ingresado",
      "months": [
       210,
       205,
       215,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null
      ],
      "evidence": [
       "Planilla campamento T1.xlsx"
      ],
      "version": 1
     },
     {
      "id": "FS-007",
      "est": "E2",
      "cat": "2.1",
      "name": "Electricidad planta concentradora",
      "meter": "M-201",
      "activity": "Consumo eléctrico SEN",
      "freq": "mensual",
      "unit": "MWh",
      "factorId": "FE-21-SEN25",
      "method": "Datos físicos de consumo",
      "origin": "Facturas cliente libre",
      "owner": "Valentina Soto",
      "status": "aprobado",
      "months": [
       7120,
       7050,
       7180,
       7160,
       7210,
       7140,
       7190,
       7230,
       7100,
       7170,
       7150,
       7120
      ],
      "evidence": [
       "Facturas suministro 2025 (12 PDF)"
      ],
      "version": 2
     },
     {
      "id": "FS-008",
      "est": "E3",
      "cat": "2.1",
      "name": "Electricidad oficina central",
      "meter": "M-310",
      "activity": "Consumo eléctrico SEN",
      "freq": "mensual",
      "unit": "kWh",
      "factorId": "FE-21-SEN25",
      "method": "Datos físicos de consumo",
      "origin": "Boletas distribuidora",
      "owner": "Rodrigo Fuentes",
      "status": "aprobado",
      "months": [
       52100,
       50800,
       51900,
       49700,
       48200,
       47900,
       49100,
       50300,
       50600,
       51800,
       52400,
       53100
      ],
      "evidence": [
       "Boletas 2025 (12 PDF)"
      ],
      "version": 1
     },
     {
      "id": "FS-009",
      "est": "E4",
      "cat": "2.1",
      "name": "Electricidad bodega portuaria",
      "meter": "M-402",
      "activity": "Consumo eléctrico SEN",
      "freq": "mensual",
      "unit": "kWh",
      "factorId": "FE-21-SEN25",
      "method": "Datos físicos de consumo",
      "origin": "Boletas distribuidora",
      "owner": "Rodrigo Fuentes",
      "status": "revisado",
      "months": [
       57200,
       56800,
       57900,
       56400,
       58100,
       57300,
       56900,
       57600,
       57100,
       56700,
       57400,
       57800
      ],
      "evidence": [
       "Boletas 2025 (12 PDF)"
      ],
      "version": 1
     },
     {
      "id": "FS-010",
      "est": "E1",
      "cat": "1.3",
      "name": "Tronadura con ANFO",
      "activity": "Explosivos consumidos",
      "freq": "anual",
      "unit": "t",
      "annual": 3200,
      "factorId": null,
      "method": "Datos físicos de consumo",
      "origin": "Registro de polvorín",
      "owner": "Ignacio Pérez",
      "status": "ingresado",
      "evidence": [
       "Registro polvorín 2025.pdf"
      ],
      "version": 1
     },
     {
      "id": "FS-011",
      "est": "E1",
      "cat": "3.2",
      "name": "Traslado de personal a faena",
      "activity": "Bus interurbano contratado",
      "freq": "anual",
      "unit": "pkm",
      "annual": 10120000,
      "factorId": "FE-32-BUS",
      "method": "Datos físicos (distancia × personas)",
      "origin": "1.150 personas × 8.800 km/año (encuesta y contrato de transporte)",
      "owner": "Camila Rojas",
      "status": "revisado",
      "evidence": [
       "Contrato transporte personal.pdf",
       "Encuesta traslado 2025.xlsx"
      ],
      "version": 1
     },
     {
      "id": "FS-012",
      "est": "E3",
      "cat": "3.2",
      "name": "Viajes de negocios aéreos",
      "activity": "Vuelos domésticos",
      "freq": "anual",
      "unit": "pkm",
      "annual": 1380000,
      "factorId": "FE-32-AVD",
      "method": "Datos físicos (distancia por tramo)",
      "origin": "Reporte agencia de viajes",
      "owner": "Rodrigo Fuentes",
      "status": "aprobado",
      "evidence": [
       "Reporte agencia 2025.xlsx"
      ],
      "version": 1
     },
     {
      "id": "FS-013",
      "est": "E2",
      "cat": "3.3",
      "name": "Transporte de concentrado a puerto",
      "activity": "Camión articulado",
      "freq": "anual",
      "unit": "tkm",
      "annual": 34650000,
      "factorId": "FE-33-ART",
      "method": "Datos físicos (t × km)",
      "origin": "210.000 t × 165 km (guías de despacho)",
      "owner": "Valentina Soto",
      "status": "revisado",
      "evidence": [
       "Guías de despacho concentrado.xlsx"
      ],
      "version": 1
     },
     {
      "id": "FS-014",
      "est": "E1",
      "cat": "3.6",
      "name": "Residuos industriales a relleno",
      "activity": "Disposición en relleno sanitario",
      "freq": "anual",
      "unit": "t",
      "annual": 1180,
      "factorId": "FE-36-RS",
      "method": "Datos físicos (pesaje)",
      "origin": "Certificados SIDREP / destino final",
      "owner": "Ignacio Pérez",
      "status": "aprobado",
      "evidence": [
       "Certificados disposición 2025 (24 PDF)"
      ],
      "version": 1
     },
     {
      "id": "FS-015",
      "est": "E1",
      "cat": "3.6",
      "name": "Chatarra metálica a reciclaje",
      "activity": "Reciclaje",
      "freq": "anual",
      "unit": "t",
      "annual": 2400,
      "factorId": "FE-36-CHAT",
      "method": "Datos físicos (pesaje)",
      "origin": "Guías de retiro gestor",
      "owner": "Ignacio Pérez",
      "status": "aprobado",
      "evidence": [
       "Guías de retiro 2025.pdf"
      ],
      "version": 1
     },
     {
      "id": "FS-016",
      "est": "E1",
      "cat": "3.1",
      "name": "Neumáticos CAEX nuevos",
      "activity": "Adquisición de neumáticos",
      "freq": "anual",
      "unit": "kg",
      "annual": 186000,
      "factorId": "FE-31-NEUN",
      "method": "Datos físicos (masa adquirida)",
      "origin": "Órdenes de compra",
      "owner": "Tomás Araya",
      "status": "ingresado",
      "evidence": [],
      "version": 1
     },
     {
      "id": "FS-017",
      "est": "E2",
      "cat": "3.1",
      "name": "Agua potable",
      "activity": "Suministro de agua potable",
      "freq": "anual",
      "unit": "m³",
      "annual": 142000,
      "factorId": "FE-31-AGUA",
      "method": "Datos físicos de consumo",
      "origin": "Boletas sanitaria",
      "owner": "Valentina Soto",
      "status": "aprobado",
      "evidence": [
       "Boletas agua 2025 (12 PDF)"
      ],
      "version": 1
     },
     {
      "id": "FS-018",
      "est": "E2",
      "cat": "3.1",
      "name": "Servicios de mantención contratados",
      "activity": "Gasto en servicios",
      "freq": "anual",
      "unit": "CLP",
      "annual": 4850000000,
      "factorId": null,
      "method": "Basado en gasto",
      "origin": "Contabilidad (cuenta 5.3.12)",
      "owner": "Camila Rojas",
      "status": "ingresado",
      "evidence": [],
      "version": 1
     }
    ],
    "intensity": {
     "workers": 1150,
     "prod": 20300,
     "prodLabel": "Mineral procesado",
     "prodUnit": "kt",
     "area": 412000
    },
    "assumptions": [
     {
      "label": "Supuesto: traslado de personal",
      "v": "Distancia anual promedio por persona según encuesta interna 2025 y contrato de transporte (1.150 personas × 8.800 km)."
     },
     {
      "label": "Supuesto: transporte de concentrado",
      "v": "210.000 t × 165 km según guías de despacho; camión articulado promedio."
     }
    ],
    "tasks": [
     {
      "id": "T-01",
      "title": "Cargar consumo de noviembre de la flota liviana",
      "owner": "Tomás Araya",
      "est": "Faena Cerro Liquen",
      "due": "31/10/2026",
      "state": "Pendiente"
     },
     {
      "id": "T-02",
      "title": "Justificar consumo de julio de los generadores",
      "owner": "Ignacio Pérez",
      "est": "Faena Cerro Liquen",
      "due": "04/11/2026",
      "state": "Pendiente"
     },
     {
      "id": "T-03",
      "title": "Adjuntar órdenes de trabajo de la recarga de R410A",
      "owner": "Valentina Soto",
      "est": "Planta Quebrada Seca",
      "due": "06/11/2026",
      "state": "En curso"
     },
     {
      "id": "T-04",
      "title": "Definir factor documentado para detonación de ANFO",
      "owner": "Camila Rojas",
      "est": "Organización",
      "due": "15/11/2026",
      "state": "Pendiente"
     },
     {
      "id": "T-05",
      "title": "Resolver duplicidad del medidor M-114",
      "owner": "Rodrigo Fuentes",
      "est": "Faena Cerro Liquen",
      "due": "05/11/2026",
      "state": "Pendiente"
     }
    ],
    "obs": {},
    "accept": {},
    "seen": {},
    "stage": 0,
    "miles": {},
    "snapshot": null,
    "log": []
   }
  ]
 },
 {
  "id": "demo-b",
  "demo": true,
  "name": "Distribuidora Pehuén Ltda.",
  "invs": [
   {
    "id": "b-2025",
    "kind": "calc",
    "org": {
     "name": "Distribuidora Pehuén Ltda.",
     "fantasy": "Pehuén",
     "rut": "88.888.888-8",
     "activity": "Almacenamiento y distribución de alimentos refrigerados",
     "sector": "Transporte y logística",
     "region": "Región Metropolitana",
     "description": "Organización ficticia con un centro de distribución y una oficina comercial. Datos completos, pensada para probar el flujo de aprobación hasta el reconocimiento.",
     "responsible": "Daniela Fuentes Lagos",
     "role": "Jefa de sostenibilidad",
     "phone": "+56 2 0000 0001",
     "email": "huella@pehuen.demo",
     "modality": "Elaborado por la organización declarante (capacidades internas)",
     "preparers": "Daniela Fuentes Lagos",
     "declarant": "Centro de distribución Lampa · DEMO-B001"
    },
    "period": {
     "year": 2025,
     "from": "01/01/2025",
     "to": "31/12/2025",
     "baseYear": 2025,
     "approach": "Control operacional"
    },
    "establishments": [
     {
      "id": "E1",
      "name": "Centro de distribución Lampa",
      "vu": "DEMO-B001",
      "type": "Centro de distribución",
      "address": "Camino Lo Echevers 0000, Lampa",
      "included": true,
      "reason": ""
     },
     {
      "id": "E2",
      "name": "Oficina comercial Providencia",
      "vu": "DEMO-B002",
      "type": "Administrativo",
      "address": "Av. Providencia 0000, Providencia",
      "included": true,
      "reason": ""
     }
    ],
    "categories": [
     {
      "key": "d1",
      "group": "Emisiones y remociones directas",
      "name": "Combustión estacionaria",
      "state": "No aplica",
      "detail": "Sin calderas ni generadores bajo control operacional."
     },
     {
      "key": "d2",
      "group": "Emisiones y remociones directas",
      "name": "Combustión móvil",
      "state": "Incluida",
      "detail": "Flota propia de camiones de reparto (diésel) y vehículos livianos (gasolina)."
     },
     {
      "key": "d3",
      "group": "Emisiones y remociones directas",
      "name": "Uso suelo, cambios en el uso de suelo y silvicultura",
      "state": "No aplica",
      "detail": "Sin cambios de uso de suelo."
     },
     {
      "key": "d4",
      "group": "Emisiones y remociones directas",
      "name": "Procesos industriales",
      "state": "No aplica",
      "detail": "La actividad logística no genera emisiones de proceso."
     },
     {
      "key": "d5",
      "group": "Emisiones y remociones directas",
      "name": "Emisiones fugitivas",
      "state": "Incluida",
      "detail": "Recarga de refrigerante en cámaras de frío."
     },
     {
      "key": "e1",
      "group": "Emisiones indirectas por energía importada",
      "name": "Electricidad importada",
      "state": "Incluida",
      "detail": "Suministro SEN en centro de distribución y oficina."
     },
     {
      "key": "e2",
      "group": "Emisiones indirectas por energía importada",
      "name": "Otra energía importada y/o pérdidas T&D",
      "state": "No aplica",
      "detail": "La organización no es distribuidora ni transmisora de energía."
     },
     {
      "key": "o1",
      "group": "Otras emisiones indirectas",
      "name": "Transporte",
      "state": "Incluida",
      "detail": "Viajes de negocios aéreos."
     },
     {
      "key": "o2",
      "group": "Otras emisiones indirectas",
      "name": "Productos que utiliza la organización",
      "state": "Incluida",
      "detail": "Agua potable y disposición de residuos."
     },
     {
      "key": "o3",
      "group": "Otras emisiones indirectas",
      "name": "Uso de productos de la organización",
      "state": "No aplica",
      "detail": "La organización no fabrica productos."
     },
     {
      "key": "i1",
      "group": "Otras emisiones y remociones informativas",
      "name": "Remociones de carbono biogénico",
      "state": "No aplica",
      "detail": ""
     },
     {
      "key": "i2",
      "group": "Otras emisiones y remociones informativas",
      "name": "Emisiones de carbono biogénico",
      "state": "No aplica",
      "detail": ""
     },
     {
      "key": "i3",
      "group": "Otras emisiones y remociones informativas",
      "name": "Emisiones no cubiertas en el Protocolo de Kioto",
      "state": "No aplica",
      "detail": ""
     }
    ],
    "sources": [
     {
      "id": "FS-001",
      "est": "E1",
      "cat": "1.2",
      "name": "Camiones de reparto",
      "activity": "Consumo de diésel",
      "freq": "mensual",
      "unit": "L",
      "factorId": "FE-12-DIE",
      "method": "Datos físicos de consumo",
      "origin": "Tarjetas de combustible COPEC",
      "owner": "Daniela Fuentes",
      "status": "revisado",
      "months": [
       21500,
       22743,
       22165,
       20613,
       20360,
       21778,
       22788,
       21912,
       20432,
       20517,
       22042,
       22773
      ],
      "evidence": [
       "Reporte tarjetas combustible 2025.xlsx"
      ],
      "version": 1
     },
     {
      "id": "FS-002",
      "est": "E2",
      "cat": "1.2",
      "name": "Vehículos comerciales livianos",
      "activity": "Consumo de gasolina",
      "freq": "mensual",
      "unit": "L",
      "factorId": "FE-12-GAS",
      "method": "Datos físicos de consumo",
      "origin": "Rendiciones de combustible",
      "owner": "Daniela Fuentes",
      "status": "revisado",
      "months": [
       1800,
       1939,
       1874,
       1701,
       1673,
       1831,
       1944,
       1846,
       1681,
       1690,
       1861,
       1942
      ],
      "evidence": [
       "Rendiciones 2025 (12 PDF)"
      ],
      "version": 1
     },
     {
      "id": "FS-003",
      "est": "E1",
      "cat": "1.4",
      "name": "Cámaras de frío",
      "activity": "Recarga de refrigerante R410A",
      "freq": "anual",
      "unit": "kg",
      "annual": 18,
      "factorId": "FE-14-R410A",
      "method": "Registro de mantención",
      "origin": "Órdenes de trabajo del contratista",
      "owner": "Daniela Fuentes",
      "status": "ingresado",
      "evidence": [
       "OT mantención frío 2025.pdf"
      ],
      "version": 1
     },
     {
      "id": "FS-004",
      "est": "E1",
      "cat": "2.1",
      "name": "Electricidad centro de distribución",
      "activity": "Consumo eléctrico SEN",
      "freq": "mensual",
      "unit": "MWh",
      "factorId": "FE-21-SEN25",
      "method": "Datos físicos de consumo",
      "origin": "Boletas Enel",
      "owner": "Daniela Fuentes",
      "status": "revisado",
      "months": [
       310,
       331,
       321,
       295,
       291,
       315,
       332,
       317,
       292,
       293,
       319,
       331
      ],
      "evidence": [
       "Boletas Enel 2025 (12 PDF)"
      ],
      "version": 1
     },
     {
      "id": "FS-005",
      "est": "E2",
      "cat": "2.1",
      "name": "Electricidad oficina",
      "activity": "Consumo eléctrico SEN",
      "freq": "mensual",
      "unit": "kWh",
      "factorId": "FE-21-SEN25",
      "method": "Datos físicos de consumo",
      "origin": "Boletas Enel",
      "owner": "Daniela Fuentes",
      "status": "ingresado",
      "months": [
       5200,
       5701,
       5468,
       4842,
       4741,
       5312,
       5719,
       5366,
       4770,
       4804,
       5418,
       5713
      ],
      "evidence": [
       "Boletas oficina 2025 (12 PDF)"
      ],
      "version": 1
     },
     {
      "id": "FS-006",
      "est": "E2",
      "cat": "3.2",
      "name": "Viajes de negocios aéreos",
      "activity": "Vuelos nacionales",
      "freq": "anual",
      "unit": "pkm",
      "annual": 184000,
      "factorId": "FE-32-AVD",
      "method": "Datos físicos de distancia",
      "origin": "Reporte agencia de viajes",
      "owner": "Daniela Fuentes",
      "status": "ingresado",
      "evidence": [
       "Reporte agencia 2025.xlsx"
      ],
      "version": 1
     },
     {
      "id": "FS-007",
      "est": "E1",
      "cat": "3.1",
      "name": "Agua potable",
      "activity": "Consumo de agua",
      "freq": "anual",
      "unit": "m³",
      "annual": 6400,
      "factorId": "FE-31-AGUA",
      "method": "Datos físicos de consumo",
      "origin": "Boletas sanitaria",
      "owner": "Daniela Fuentes",
      "status": "revisado",
      "evidence": [
       "Boletas agua 2025.pdf"
      ],
      "version": 1
     },
     {
      "id": "FS-008",
      "est": "E1",
      "cat": "3.6",
      "name": "Residuos a relleno sanitario",
      "activity": "Disposición de residuos",
      "freq": "anual",
      "unit": "t",
      "annual": 96,
      "factorId": "FE-36-RS",
      "method": "Datos físicos de masa",
      "origin": "Certificados de disposición",
      "owner": "Daniela Fuentes",
      "status": "ingresado",
      "evidence": [
       "Certificados relleno 2025.pdf"
      ],
      "version": 1
     }
    ],
    "intensity": {
     "workers": 140,
     "prod": 52000,
     "prodLabel": "Carga despachada",
     "prodUnit": "t",
     "area": 18500
    },
    "assumptions": [
     {
      "label": "Supuesto: viajes aéreos",
      "v": "Distancias por tramo informadas por la agencia de viajes; factor de trayecto doméstico."
     }
    ],
    "tasks": [
     {
      "id": "T-01",
      "title": "Revisar y aprobar las 8 fuentes",
      "owner": "Daniela Fuentes",
      "est": "Organización",
      "due": "15/11/2026",
      "state": "Pendiente"
     }
    ],
    "obs": {},
    "accept": {},
    "seen": {},
    "stage": 0,
    "miles": {},
    "snapshot": null,
    "log": []
   }
  ]
 },
 {
  "id": "demo-c",
  "demo": true,
  "name": "Viña Valle del Ruil S.A.",
  "invs": [
   {
    "id": "c-2024",
    "kind": "hist",
    "year": 2024,
    "total": 2310,
    "d": 640,
    "e": 1380,
    "o": 290,
    "base": "HC FE 2024 v5",
    "status": "Verificado (registro histórico)",
    "notes": "Primer inventario verificado. No incluyó residuos de vinificación.",
    "intensity": {
     "workers": 210,
     "prod": 3900
    }
   },
   {
    "id": "c-2025",
    "kind": "calc",
    "org": {
     "name": "Viña Valle del Ruil S.A.",
     "fantasy": "Valle del Ruil",
     "rut": "88.888.888-8",
     "activity": "Elaboración y embotellado de vinos",
     "sector": "Agroindustria",
     "region": "Región del Maule",
     "description": "Viña ficticia con bodega de vinificación y fundo de viñedos con riego tecnificado. Usada solo para validar flujos y cálculos.",
     "responsible": "Paula Henríquez Lagos",
     "role": "Jefa de sustentabilidad",
     "phone": "+56 71 000 0000",
     "email": "huella@valledelruil.demo",
     "modality": "Elaborado por la organización declarante (capacidades internas)",
     "preparers": "Paula Henríquez Lagos; Ignacio Soto Fuentealba",
     "declarant": "Bodega Ruil · DEMO-C001"
    },
    "period": {
     "year": 2025,
     "from": "01/01/2025",
     "to": "31/12/2025",
     "baseYear": 2024,
     "approach": "Control operacional",
     "approachNote": "Enfoque exigido por el Programa HuellaChile según la plantilla de informe vigente (08/04/2026)."
    },
    "establishments": [
     {
      "id": "E1",
      "name": "Bodega Ruil",
      "vu": "DEMO-C001",
      "type": "Bodega de vinificación",
      "address": "Ruta K-25 km 9, San Javier",
      "included": true,
      "reason": ""
     },
     {
      "id": "E2",
      "name": "Fundo Los Coihues",
      "vu": "DEMO-C002",
      "type": "Viñedo",
      "address": "Camino Melozal s/n, San Javier",
      "included": true,
      "reason": ""
     },
     {
      "id": "E3",
      "name": "Sala de ventas Santiago",
      "vu": "DEMO-C003",
      "type": "Comercial",
      "address": "Av. Italia 0000, Providencia",
      "included": false,
      "reason": "Arrendada en local compartido sin medición propia; menos del 1 % de las emisiones estimadas."
     }
    ],
    "categories": [
     {
      "key": "d1",
      "group": "Emisiones y remociones directas",
      "name": "Combustión estacionaria",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "d2",
      "group": "Emisiones y remociones directas",
      "name": "Combustión móvil",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "d3",
      "group": "Emisiones y remociones directas",
      "name": "Uso suelo, cambios en el uso de suelo y silvicultura",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "d4",
      "group": "Emisiones y remociones directas",
      "name": "Procesos industriales",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "d5",
      "group": "Emisiones y remociones directas",
      "name": "Emisiones fugitivas",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "e1",
      "group": "Emisiones indirectas por energía importada",
      "name": "Electricidad importada",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "e2",
      "group": "Emisiones indirectas por energía importada",
      "name": "Otra energía importada y/o pérdidas T&D",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "o1",
      "group": "Otras emisiones indirectas",
      "name": "Transporte",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "o2",
      "group": "Otras emisiones indirectas",
      "name": "Productos que utiliza la organización",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "o3",
      "group": "Otras emisiones indirectas",
      "name": "Uso de productos de la organización",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "i1",
      "group": "Otras emisiones y remociones informativas",
      "name": "Remociones de carbono biogénico",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "i2",
      "group": "Otras emisiones y remociones informativas",
      "name": "Emisiones de carbono biogénico",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "i3",
      "group": "Otras emisiones y remociones informativas",
      "name": "Emisiones no cubiertas en el Protocolo de Kioto",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     }
    ],
    "sources": [
     {
      "id": "FS-001",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "1.1",
      "name": "Caldera de bodega",
      "activity": "Consumo de gas licuado",
      "freq": "mensual",
      "unit": "L",
      "factorId": "FE-11-GLP",
      "origin": "Facturas Abastible",
      "owner": "Ignacio Soto",
      "status": "aprobado",
      "months": [
       2319,
       2945,
       3800,
       4655,
       5281,
       5510,
       5281,
       4655,
       3800,
       2945,
       2319,
       2090
      ],
      "evidence": [
       "Facturas GLP 2025.pdf"
      ]
     },
     {
      "id": "FS-002",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E2",
      "cat": "1.2",
      "name": "Tractores y maquinaria agrícola",
      "activity": "Consumo de diésel",
      "freq": "mensual",
      "unit": "L",
      "factorId": "FE-12-DIE",
      "origin": "Registro de estanque interno",
      "owner": "Ignacio Soto",
      "status": "revisado",
      "months": [
       10810,
       11989,
       12420,
       11989,
       10810,
       9200,
       7590,
       6411,
       5980,
       6411,
       7590,
       9200
      ],
      "evidence": [
       "Planilla estanque fundo 2025.xlsx"
      ]
     },
     {
      "id": "FS-003",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "1.2",
      "name": "Camionetas de supervisión",
      "activity": "Consumo de gasolina",
      "freq": "mensual",
      "unit": "L",
      "factorId": "FE-12-GAS",
      "origin": "Tarjetas de combustible",
      "owner": "Ignacio Soto",
      "status": "ingresado",
      "months": [
       1540,
       1521,
       1470,
       1400,
       1330,
       1279,
       1260,
       1279,
       1330,
       null,
       null,
       null
      ],
      "evidence": []
     },
     {
      "id": "FS-004",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "1.4",
      "name": "Cámaras de frío de bodega",
      "activity": "Recarga de refrigerante",
      "freq": "anual",
      "unit": "kg",
      "factorId": "FE-14-R410A",
      "origin": "Informe de mantención",
      "owner": "Ignacio Soto",
      "status": "revisado",
      "annual": 18,
      "evidence": [
       "Informe mantención frío 2025.pdf"
      ]
     },
     {
      "id": "FS-005",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "2.1",
      "name": "Electricidad bodega y embotellado",
      "activity": "Consumo eléctrico",
      "freq": "mensual",
      "unit": "kWh",
      "factorId": "FE-21-SEN25",
      "origin": "Boletas CGE",
      "owner": "Paula Henríquez",
      "status": "aprobado",
      "months": [
       142000,
       163300,
       178893,
       184600,
       178893,
       163300,
       142000,
       120700,
       105107,
       99400,
       105107,
       120700
      ],
      "evidence": [
       "Boletas CGE 2025.pdf"
      ]
     },
     {
      "id": "FS-006",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E2",
      "cat": "2.1",
      "name": "Electricidad riego tecnificado",
      "activity": "Consumo eléctrico",
      "freq": "mensual",
      "unit": "kWh",
      "factorId": "FE-21-SEN25",
      "origin": "Boletas CGE",
      "owner": "Paula Henríquez",
      "status": "aprobado",
      "months": [
       112850,
       105903,
       86925,
       61000,
       35075,
       16097,
       9150,
       16097,
       35075,
       61000,
       86925,
       105903
      ],
      "evidence": [
       "Boletas CGE riego 2025.pdf"
      ]
     },
     {
      "id": "FS-007",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "3.3",
      "name": "Despacho de vino a puerto San Antonio",
      "activity": "Transporte terrestre contratado",
      "freq": "anual",
      "unit": "tkm",
      "factorId": "FE-33-ART",
      "origin": "Guías de despacho",
      "owner": "Paula Henríquez",
      "status": "ingresado",
      "annual": 1240000,
      "evidence": [
       "Resumen guías despacho 2025.xlsx"
      ]
     },
     {
      "id": "FS-008",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "3.6",
      "name": "Orujo y residuos de vinificación",
      "activity": "Disposición en relleno",
      "freq": "anual",
      "unit": "t",
      "factorId": "FE-36-RS",
      "origin": "Certificados de disposición",
      "owner": "Ignacio Soto",
      "status": "ingresado",
      "annual": 310,
      "evidence": []
     },
     {
      "id": "FS-009",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "3.1",
      "name": "Agua potable bodega",
      "activity": "Consumo de agua",
      "freq": "anual",
      "unit": "m³",
      "factorId": "FE-31-AGUA",
      "origin": "Boletas Essbio",
      "owner": "Paula Henríquez",
      "status": "revisado",
      "annual": 8400,
      "evidence": [
       "Boletas agua 2025.pdf"
      ]
     }
    ],
    "intensity": {
     "workers": 225,
     "prod": 4100,
     "prodLabel": "Vino embotellado",
     "prodUnit": "miles de litros",
     "area": 420
    },
    "assumptions": [
     {
      "label": "Supuesto: transporte a puerto",
      "v": "Distancia Bodega–San Antonio de 290 km por guía; carga por guía de despacho."
     }
    ],
    "tasks": [
     {
      "id": "T-01",
      "title": "Completar gasolina oct–dic",
      "owner": "Ignacio Soto",
      "est": "Bodega Ruil",
      "due": "30/11/2026",
      "state": "Pendiente"
     },
     {
      "id": "T-02",
      "title": "Subir certificados de disposición de orujo",
      "owner": "Ignacio Soto",
      "est": "Bodega Ruil",
      "due": "05/12/2026",
      "state": "Pendiente"
     }
    ],
    "obs": {},
    "accept": {},
    "seen": {},
    "stage": 0,
    "miles": {},
    "snapshot": null,
    "log": []
   }
  ]
 },
 {
  "id": "demo-d",
  "demo": true,
  "name": "Clínica Austral Notro SpA",
  "invs": [
   {
    "id": "d-2025",
    "kind": "calc",
    "org": {
     "name": "Clínica Austral Notro SpA",
     "fantasy": "Clínica Notro",
     "rut": "77.777.777-7",
     "activity": "Servicios de salud hospitalarios y ambulatorios",
     "sector": "Salud",
     "region": "Región de Los Lagos",
     "description": "Clínica ficticia con edificio hospitalario y centro médico ambulatorio. Todas las fuentes aprobadas para probar aprobación interna y verificación.",
     "responsible": "Valentina Orellana Paz",
     "role": "Coordinadora de gestión ambiental",
     "phone": "+56 65 000 0000",
     "email": "huella@clinicanotro.demo",
     "modality": "Elaborado con apoyo de consultor externo",
     "preparers": "Valentina Orellana Paz; Rodrigo Matus Ríos",
     "declarant": "Edificio clínico · DEMO-D001"
    },
    "period": {
     "year": 2025,
     "from": "01/01/2025",
     "to": "31/12/2025",
     "baseYear": 2025,
     "approach": "Control operacional",
     "approachNote": "Enfoque exigido por el Programa HuellaChile según la plantilla de informe vigente (08/04/2026)."
    },
    "establishments": [
     {
      "id": "E1",
      "name": "Edificio clínico Puerto Montt",
      "vu": "DEMO-D001",
      "type": "Hospitalario",
      "address": "Av. Presidente Ibáñez 0000, Puerto Montt",
      "included": true,
      "reason": ""
     },
     {
      "id": "E2",
      "name": "Centro médico Puerto Varas",
      "vu": "DEMO-D002",
      "type": "Ambulatorio",
      "address": "San Francisco 0000, Puerto Varas",
      "included": true,
      "reason": ""
     }
    ],
    "categories": [
     {
      "key": "d1",
      "group": "Emisiones y remociones directas",
      "name": "Combustión estacionaria",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "d2",
      "group": "Emisiones y remociones directas",
      "name": "Combustión móvil",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "d3",
      "group": "Emisiones y remociones directas",
      "name": "Uso suelo, cambios en el uso de suelo y silvicultura",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "d4",
      "group": "Emisiones y remociones directas",
      "name": "Procesos industriales",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "d5",
      "group": "Emisiones y remociones directas",
      "name": "Emisiones fugitivas",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "e1",
      "group": "Emisiones indirectas por energía importada",
      "name": "Electricidad importada",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "e2",
      "group": "Emisiones indirectas por energía importada",
      "name": "Otra energía importada y/o pérdidas T&D",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "o1",
      "group": "Otras emisiones indirectas",
      "name": "Transporte",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "o2",
      "group": "Otras emisiones indirectas",
      "name": "Productos que utiliza la organización",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "o3",
      "group": "Otras emisiones indirectas",
      "name": "Uso de productos de la organización",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "i1",
      "group": "Otras emisiones y remociones informativas",
      "name": "Remociones de carbono biogénico",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "i2",
      "group": "Otras emisiones y remociones informativas",
      "name": "Emisiones de carbono biogénico",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "i3",
      "group": "Otras emisiones y remociones informativas",
      "name": "Emisiones no cubiertas en el Protocolo de Kioto",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     }
    ],
    "sources": [
     {
      "id": "FS-001",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "1.1",
      "name": "Calderas de agua caliente",
      "activity": "Consumo de gas licuado",
      "freq": "mensual",
      "unit": "L",
      "factorId": "FE-11-GLP",
      "origin": "Facturas Lipigas",
      "owner": "Rodrigo Matus",
      "status": "aprobado",
      "months": [
       8750,
       9252,
       10625,
       12500,
       14375,
       15748,
       16250,
       15748,
       14375,
       12500,
       10625,
       9252
      ],
      "evidence": [
       "Facturas GLP 2025.pdf"
      ]
     },
     {
      "id": "FS-002",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "1.1",
      "name": "Grupos electrógenos de respaldo",
      "activity": "Consumo de diésel",
      "freq": "anual",
      "unit": "L",
      "factorId": "FE-11-DIE",
      "origin": "Bitácora de pruebas de generadores",
      "owner": "Rodrigo Matus",
      "status": "aprobado",
      "annual": 6800,
      "evidence": [
       "Bitácora generadores 2025.pdf"
      ]
     },
     {
      "id": "FS-003",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "1.2",
      "name": "Ambulancias",
      "activity": "Consumo de diésel",
      "freq": "mensual",
      "unit": "L",
      "factorId": "FE-12-DIE",
      "origin": "Tarjetas de combustible",
      "owner": "Rodrigo Matus",
      "status": "aprobado",
      "months": [
       3132,
       3101,
       3016,
       2900,
       2784,
       2699,
       2668,
       2699,
       2784,
       2900,
       3016,
       3101
      ],
      "evidence": [
       "Reporte tarjetas 2025.xlsx"
      ]
     },
     {
      "id": "FS-004",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "1.4",
      "name": "Climatización de pabellones",
      "activity": "Recarga de refrigerante",
      "freq": "anual",
      "unit": "kg",
      "factorId": "FE-14-R410A",
      "origin": "Informe de mantención HVAC",
      "owner": "Rodrigo Matus",
      "status": "aprobado",
      "annual": 42,
      "evidence": [
       "Informe HVAC 2025.pdf"
      ]
     },
     {
      "id": "FS-005",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "2.1",
      "name": "Electricidad edificio clínico",
      "activity": "Consumo eléctrico",
      "freq": "mensual",
      "unit": "MWh",
      "factorId": "FE-21-SEN25",
      "origin": "Boletas Enel",
      "owner": "Valentina Orellana",
      "status": "aprobado",
      "months": [
       471,
       463,
       441,
       410,
       379,
       357,
       349,
       357,
       379,
       410,
       441,
       463
      ],
      "evidence": [
       "Boletas Enel 2025.pdf"
      ]
     },
     {
      "id": "FS-006",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E2",
      "cat": "2.1",
      "name": "Electricidad centro médico",
      "activity": "Consumo eléctrico",
      "freq": "mensual",
      "unit": "kWh",
      "factorId": "FE-21-SEN25",
      "origin": "Boletas Enel",
      "owner": "Valentina Orellana",
      "status": "aprobado",
      "months": [
       42560,
       41949,
       40280,
       38000,
       35720,
       34051,
       33440,
       34051,
       35720,
       38000,
       40280,
       41949
      ],
      "evidence": [
       "Boletas Enel CM 2025.pdf"
      ]
     },
     {
      "id": "FS-007",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "3.6",
      "name": "Residuos asimilables a domiciliarios",
      "activity": "Disposición en relleno",
      "freq": "anual",
      "unit": "t",
      "factorId": "FE-36-RS",
      "origin": "Certificados de disposición",
      "owner": "Valentina Orellana",
      "status": "aprobado",
      "annual": 265,
      "evidence": [
       "Certificados relleno 2025.pdf"
      ]
     },
     {
      "id": "FS-008",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "3.1",
      "name": "Agua potable",
      "activity": "Consumo de agua",
      "freq": "anual",
      "unit": "m³",
      "factorId": "FE-31-AGUA",
      "origin": "Boletas Aguas Andinas",
      "owner": "Valentina Orellana",
      "status": "aprobado",
      "annual": 52000,
      "evidence": [
       "Boletas agua 2025.pdf"
      ]
     },
     {
      "id": "FS-009",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "3.2",
      "name": "Viajes de capacitación aéreos",
      "activity": "Traslado de personas",
      "freq": "anual",
      "unit": "pkm",
      "factorId": "FE-32-AVD",
      "origin": "Agencia de viajes",
      "owner": "Valentina Orellana",
      "status": "aprobado",
      "annual": 186000,
      "evidence": [
       "Informe agencia 2025.pdf"
      ]
     }
    ],
    "intensity": {
     "workers": 640,
     "prod": 38500,
     "prodLabel": "Días cama ocupados",
     "prodUnit": "días cama",
     "area": 24800
    },
    "assumptions": [
     {
      "label": "Supuesto: viajes aéreos",
      "v": "Distancias por tramo informadas por la agencia; factor de trayecto doméstico."
     }
    ],
    "tasks": [
     {
      "id": "T-01",
      "title": "Cerrar control de calidad y aprobar internamente",
      "owner": "Valentina Orellana",
      "est": "Organización",
      "due": "20/11/2026",
      "state": "Pendiente"
     }
    ],
    "obs": {},
    "accept": {},
    "seen": {},
    "stage": 0,
    "miles": {},
    "snapshot": null,
    "log": []
   }
  ]
 },
 {
  "id": "demo-e",
  "demo": true,
  "name": "Centro de Salud Lenga SpA",
  "invs": [
   {
    "id": "e-2023",
    "kind": "hist",
    "year": 2023,
    "total": 1610,
    "d": 540,
    "e": 820,
    "o": 250,
    "base": "HC FE 2023",
    "status": "Verificado (registro histórico)",
    "notes": "Año base.",
    "intensity": {
     "workers": 495,
     "prod": 29800
    }
   },
   {
    "id": "e-2024",
    "kind": "hist",
    "year": 2024,
    "total": 1540,
    "d": 525,
    "e": 770,
    "o": 245,
    "base": "HC FE 2024 v5",
    "status": "Reconocido (registro histórico)",
    "notes": "",
    "intensity": {
     "workers": 505,
     "prod": 30400
    }
   },
   {
    "id": "e-2025",
    "kind": "calc",
    "org": {
     "name": "Centro de Salud Lenga SpA",
     "fantasy": "Salud Lenga",
     "rut": "66.666.666-6",
     "activity": "Servicios de salud hospitalarios y ambulatorios",
     "sector": "Salud",
     "region": "Región de Magallanes",
     "description": "Organización ficticia con el recorrido completo: datos capturados, control de calidad cerrado, aprobación interna, verificación externa, postulación y reconocimiento HuellaChile.",
     "responsible": "Ignacio Barrientos Soto",
     "role": "Jefe de sustentabilidad",
     "phone": "+56 61 000 0000",
     "email": "huella@saludlenga.demo",
     "modality": "Elaborado por la organización declarante (capacidades internas)",
     "preparers": "Ignacio Barrientos Soto; Fernanda Cárcamo Díaz",
     "declarant": "Hospital Lenga · DEMO-E001"
    },
    "period": {
     "year": 2025,
     "from": "01/01/2025",
     "to": "31/12/2025",
     "baseYear": 2023,
     "approach": "Control operacional",
     "approachNote": "Enfoque exigido por el Programa HuellaChile según la plantilla de informe vigente (08/04/2026)."
    },
    "establishments": [
     {
      "id": "E1",
      "name": "Hospital Lenga Punta Arenas",
      "vu": "DEMO-E001",
      "type": "Hospitalario",
      "address": "Av. Bulnes 0000, Punta Arenas",
      "included": true,
      "reason": ""
     },
     {
      "id": "E2",
      "name": "Centro ambulatorio Puerto Natales",
      "vu": "DEMO-E002",
      "type": "Ambulatorio",
      "address": "Baquedano 0000, Puerto Natales",
      "included": true,
      "reason": ""
     }
    ],
    "categories": [
     {
      "key": "d1",
      "group": "Emisiones y remociones directas",
      "name": "Combustión estacionaria",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "d2",
      "group": "Emisiones y remociones directas",
      "name": "Combustión móvil",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "d3",
      "group": "Emisiones y remociones directas",
      "name": "Uso suelo, cambios en el uso de suelo y silvicultura",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "d4",
      "group": "Emisiones y remociones directas",
      "name": "Procesos industriales",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "d5",
      "group": "Emisiones y remociones directas",
      "name": "Emisiones fugitivas",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "e1",
      "group": "Emisiones indirectas por energía importada",
      "name": "Electricidad importada",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "e2",
      "group": "Emisiones indirectas por energía importada",
      "name": "Otra energía importada y/o pérdidas T&D",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "o1",
      "group": "Otras emisiones indirectas",
      "name": "Transporte",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "o2",
      "group": "Otras emisiones indirectas",
      "name": "Productos que utiliza la organización",
      "state": "Incluida",
      "detail": ""
     },
     {
      "key": "o3",
      "group": "Otras emisiones indirectas",
      "name": "Uso de productos de la organización",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "i1",
      "group": "Otras emisiones y remociones informativas",
      "name": "Remociones de carbono biogénico",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "i2",
      "group": "Otras emisiones y remociones informativas",
      "name": "Emisiones de carbono biogénico",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     },
     {
      "key": "i3",
      "group": "Otras emisiones y remociones informativas",
      "name": "Emisiones no cubiertas en el Protocolo de Kioto",
      "state": "No aplica",
      "detail": "La organización no tiene fuentes de esta categoría."
     }
    ],
    "sources": [
     {
      "id": "FS-001",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "1.1",
      "name": "Calderas de agua caliente",
      "activity": "Consumo de gas licuado",
      "freq": "mensual",
      "unit": "L",
      "factorId": "FE-11-GLP",
      "origin": "Facturas Lipigas",
      "owner": "Fernanda Cárcamo",
      "status": "aprobado",
      "months": [
       7175,
       7587,
       8713,
       10250,
       11788,
       12913,
       13325,
       12913,
       11788,
       10250,
       8713,
       7587
      ],
      "evidence": [
       "Facturas GLP 2025 Lenga.pdf"
      ]
     },
     {
      "id": "FS-002",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "1.1",
      "name": "Grupos electrógenos de respaldo",
      "activity": "Consumo de diésel",
      "freq": "anual",
      "unit": "L",
      "factorId": "FE-11-DIE",
      "origin": "Bitácora de pruebas de generadores",
      "owner": "Fernanda Cárcamo",
      "status": "aprobado",
      "annual": 5576,
      "evidence": [
       "Bitácora generadores 2025 Lenga.pdf"
      ]
     },
     {
      "id": "FS-003",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "1.2",
      "name": "Ambulancias",
      "activity": "Consumo de diésel",
      "freq": "mensual",
      "unit": "L",
      "factorId": "FE-12-DIE",
      "origin": "Tarjetas de combustible",
      "owner": "Fernanda Cárcamo",
      "status": "aprobado",
      "months": [
       2568,
       2543,
       2473,
       2378,
       2283,
       2213,
       2188,
       2213,
       2283,
       2378,
       2473,
       2543
      ],
      "evidence": [
       "Reporte tarjetas 2025 Lenga.xlsx"
      ]
     },
     {
      "id": "FS-004",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "1.4",
      "name": "Climatización de pabellones",
      "activity": "Recarga de refrigerante",
      "freq": "anual",
      "unit": "kg",
      "factorId": "FE-14-R410A",
      "origin": "Informe de mantención HVAC",
      "owner": "Fernanda Cárcamo",
      "status": "aprobado",
      "annual": 34,
      "evidence": [
       "Informe HVAC 2025 Lenga.pdf"
      ]
     },
     {
      "id": "FS-005",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "2.1",
      "name": "Electricidad edificio clínico",
      "activity": "Consumo eléctrico",
      "freq": "mensual",
      "unit": "MWh",
      "factorId": "FE-21-SEN25",
      "origin": "Boletas Enel",
      "owner": "Ignacio Barrientos",
      "status": "aprobado",
      "months": [
       386,
       380,
       362,
       336,
       311,
       293,
       286,
       293,
       311,
       336,
       362,
       380
      ],
      "evidence": [
       "Boletas Enel 2025 Lenga.pdf"
      ]
     },
     {
      "id": "FS-006",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E2",
      "cat": "2.1",
      "name": "Electricidad centro médico",
      "activity": "Consumo eléctrico",
      "freq": "mensual",
      "unit": "kWh",
      "factorId": "FE-21-SEN25",
      "origin": "Boletas Enel",
      "owner": "Ignacio Barrientos",
      "status": "aprobado",
      "months": [
       34899,
       34398,
       33030,
       31160,
       29290,
       27922,
       27421,
       27922,
       29290,
       31160,
       33030,
       34398
      ],
      "evidence": [
       "Boletas Enel CM 2025 Lenga.pdf"
      ]
     },
     {
      "id": "FS-007",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "3.6",
      "name": "Residuos asimilables a domiciliarios",
      "activity": "Disposición en relleno",
      "freq": "anual",
      "unit": "t",
      "factorId": "FE-36-RS",
      "origin": "Certificados de disposición",
      "owner": "Ignacio Barrientos",
      "status": "aprobado",
      "annual": 217,
      "evidence": [
       "Certificados relleno 2025 Lenga.pdf"
      ]
     },
     {
      "id": "FS-008",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "3.1",
      "name": "Agua potable",
      "activity": "Consumo de agua",
      "freq": "anual",
      "unit": "m³",
      "factorId": "FE-31-AGUA",
      "origin": "Boletas Aguas Andinas",
      "owner": "Ignacio Barrientos",
      "status": "aprobado",
      "annual": 42640,
      "evidence": [
       "Boletas agua 2025 Lenga.pdf"
      ]
     },
     {
      "id": "FS-009",
      "method": "Datos físicos de consumo",
      "version": 1,
      "est": "E1",
      "cat": "3.2",
      "name": "Viajes de capacitación aéreos",
      "activity": "Traslado de personas",
      "freq": "anual",
      "unit": "pkm",
      "factorId": "FE-32-AVD",
      "origin": "Agencia de viajes",
      "owner": "Ignacio Barrientos",
      "status": "aprobado",
      "annual": 152520,
      "evidence": [
       "Informe agencia 2025 Lenga.pdf"
      ]
     }
    ],
    "intensity": {
     "workers": 520,
     "prod": 31200,
     "prodLabel": "Días cama ocupados",
     "prodUnit": "días cama",
     "area": 20100
    },
    "assumptions": [
     {
      "label": "Supuesto: viajes aéreos",
      "v": "Distancias por tramo informadas por la agencia; factor de trayecto doméstico."
     },
     {
      "label": "Supuesto: refrigerantes",
      "v": "Recargas informadas por el contratista HVAC; se asume que toda recarga repone una fuga del período."
     }
    ],
    "tasks": [
     {
      "id": "T-01",
      "title": "Cargar consumos mensuales 2025",
      "owner": "Fernanda Cárcamo",
      "est": "Organización",
      "due": "31/01/2026",
      "state": "Completada"
     },
     {
      "id": "T-02",
      "title": "Cerrar control de calidad y aprobar internamente",
      "owner": "Ignacio Barrientos",
      "est": "Organización",
      "due": "20/03/2026",
      "state": "Completada"
     },
     {
      "id": "T-03",
      "title": "Responder observaciones del verificador",
      "owner": "Ignacio Barrientos",
      "est": "Organización",
      "due": "30/05/2026",
      "state": "Completada"
     }
    ],
    "obs": {},
    "accept": {},
    "seen": {},
    "stage": 6,
    "miles": {
     "1": {
      "date": "2026-03-10",
      "who": "Ignacio Barrientos Soto",
      "ev": "Control de calidad cerrado sin observaciones abiertas"
     },
     "2": {
      "date": "2026-03-20",
      "who": "Ignacio Barrientos Soto",
      "ev": "Aprobación de gerencia general · Acta 03/2026"
     },
     "3": {
      "date": "2026-04-02",
      "who": "AENOR",
      "ev": "Contrato de verificación N° V-2026-118"
     },
     "4": {
      "date": "2026-06-15",
      "who": "",
      "ev": "Declaración de verificación favorable · Informe AENOR-HC-2026-044.pdf"
     },
     "5": {
      "date": "2026-07-01",
      "who": "",
      "ev": "Postulación ingresada en plataforma HuellaChile · folio HC-2026-7781"
     },
     "6": {
      "date": "2026-09-30",
      "who": "",
      "ev": "Diploma y sello de Cuantificación HuellaChile 2025"
     }
    },
    "snapshot": null,
    "log": [
     {
      "t": "30/09/2026",
      "msg": "Reconocido · 30/09/2026 · Diploma y sello de Cuantificación HuellaChile 2025",
      "user": "Ignacio Barrientos Soto"
     },
     {
      "t": "01/07/2026",
      "msg": "Postulado · 01/07/2026 · folio HC-2026-7781",
      "user": "Ignacio Barrientos Soto"
     },
     {
      "t": "15/06/2026",
      "msg": "Verificado · 15/06/2026 · Declaración de verificación favorable",
      "user": "Ignacio Barrientos Soto"
     },
     {
      "t": "28/05/2026",
      "msg": "Observaciones del verificador respondidas (3)",
      "user": "Ignacio Barrientos Soto"
     },
     {
      "t": "02/04/2026",
      "msg": "En verificación · AENOR · contrato V-2026-118",
      "user": "Ignacio Barrientos Soto"
     },
     {
      "t": "20/03/2026",
      "msg": "Inventario aprobado internamente · snapshot congelado",
      "user": "Ignacio Barrientos Soto"
     },
     {
      "t": "10/03/2026",
      "msg": "Inventario marcado como revisado",
      "user": "Ignacio Barrientos Soto"
     },
     {
      "t": "31/01/2026",
      "msg": "Consumos mensuales 2025 cargados (CSV)",
      "user": "Fernanda Cárcamo Díaz"
     },
     {
      "t": "15/01/2026",
      "msg": "Inventario 2025 creado a partir de plantilla vacía",
      "user": "Ignacio Barrientos Soto"
     }
    ],
    "report": {
     "fecha": "2026-03-18",
     "mejoras": "Medir el consumo de GLP con medidores propios en lugar de facturas.\nSolicitar al contratista HVAC el registro de recargas por equipo.",
     "acciones": "Recambio de calderas de GLP por bombas de calor en 2027.\nContrato de suministro eléctrico con atributos renovables desde 2027.",
     "conclusiones": ""
    },
    "fullDemo": true
   }
  ]
 }
];
export const DEFAULT_CATEGORIES = [
 {
  "key": "d1",
  "group": "Emisiones y remociones directas",
  "name": "Combustión estacionaria",
  "state": "Incluida",
  "detail": ""
 },
 {
  "key": "d2",
  "group": "Emisiones y remociones directas",
  "name": "Combustión móvil",
  "state": "Incluida",
  "detail": ""
 },
 {
  "key": "d3",
  "group": "Emisiones y remociones directas",
  "name": "Uso suelo, cambios en el uso de suelo y silvicultura",
  "state": "Incluida",
  "detail": ""
 },
 {
  "key": "d4",
  "group": "Emisiones y remociones directas",
  "name": "Procesos industriales",
  "state": "Incluida",
  "detail": ""
 },
 {
  "key": "d5",
  "group": "Emisiones y remociones directas",
  "name": "Emisiones fugitivas",
  "state": "Incluida",
  "detail": ""
 },
 {
  "key": "e1",
  "group": "Emisiones indirectas por energía importada",
  "name": "Electricidad importada",
  "state": "Incluida",
  "detail": ""
 },
 {
  "key": "e2",
  "group": "Emisiones indirectas por energía importada",
  "name": "Otra energía importada y/o pérdidas T&D",
  "state": "Incluida",
  "detail": ""
 },
 {
  "key": "o1",
  "group": "Otras emisiones indirectas",
  "name": "Transporte",
  "state": "Incluida",
  "detail": ""
 },
 {
  "key": "o2",
  "group": "Otras emisiones indirectas",
  "name": "Productos que utiliza la organización",
  "state": "Incluida",
  "detail": ""
 },
 {
  "key": "o3",
  "group": "Otras emisiones indirectas",
  "name": "Uso de productos de la organización",
  "state": "Incluida",
  "detail": ""
 },
 {
  "key": "i1",
  "group": "Otras emisiones y remociones informativas",
  "name": "Remociones de carbono biogénico",
  "state": "No aplica",
  "detail": ""
 },
 {
  "key": "i2",
  "group": "Otras emisiones y remociones informativas",
  "name": "Emisiones de carbono biogénico",
  "state": "No aplica",
  "detail": ""
 },
 {
  "key": "i3",
  "group": "Otras emisiones y remociones informativas",
  "name": "Emisiones no cubiertas en el Protocolo de Kioto",
  "state": "No aplica",
  "detail": ""
 }
];
