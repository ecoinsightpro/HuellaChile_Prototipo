// LiqenInsight HuellaChile — motor de cálculo GEI (independiente de la interfaz).
// Determinista: misma entrada (registro + factor + PCG) => mismo resultado y traza.

import { HC2025_RESUMEN, HC2025_RESUMEN_TOTAL } from './factores-hc2025.js';
export { HC2025_RESUMEN_TOTAL };
export const ENGINE_VERSION = '0.1.0-prototipo';

export const GWP = { id: 'AR5-100', label: 'IPCC AR5, horizonte 100 años', CO2: 1, CH4: 28, N2O: 265, source: 'HC FE 2025 v2 completa, hojas 1.1/1.2 (AR5); IPCC AR5 T8.A.1' };

export const FACTOR_SETS = [
  { id: 'HC2025v2', name: 'HuellaChile FE 2025 Org. y Ev. — v2 (versión completa)', published: '2026-05-08', from: 2025, to: 2025, status: 'Vigente verificada', loaded: true, records: 696, file: 'HuellaChile-Factores-de-emision2025_-Org-y-Ev_v2-Version-completa.xlsx', note: 'Control de cambios v1: FE del SEN 2021–2025 actualizados retroactivamente (Energía Abierta). v2: fuente eléctrica rotulada AR5; vehículo y van eléctricos recalculados.' },
  { id: 'HC2024v6', name: 'HuellaChile FE 2024 Org. y Ev. — v6', published: '2026-05', from: 2024, to: 2024, status: 'Publicada · no cargada', loaded: false, records: null, file: '—', note: 'Necesaria para recalcular o reproducir inventarios 2024.' },
  { id: 'EXT', name: 'Factores externos aprobados por la organización', published: '—', from: 2025, to: 2025, status: 'Sin registros aprobados', loaded: true, records: 0, file: '—', note: 'Requieren documento de respaldo, aprobación interna y explicación en Anexo 7.5.' }
];

// kg de gas por unidad de actividad (gases) o kgCO2e directo (co2e) cuando la base no desagrega.
export const FACTORS = [
  { id: 'FE-11-DIE', set: 'HC2025v2', cat: '1.1', catName: 'Combustión estacionaria', sub: 'Caldera/Generador/General', name: 'Petróleo 2 (Diésel)', unit: 'L', gases: { CO2: 2.69855, CH4: 0.000364176, N2O: 0.0000218506 }, src: 'IPCC 2006 V2 Cap. 2 T2.4; CNE BNE 2024', origin: 'Oficial HC', unc: 'Baja' },
  { id: 'FE-11-GLP', set: 'HC2025v2', cat: '1.1', catName: 'Combustión estacionaria', sub: 'Caldera/Generador/General', name: 'Gas licuado de petróleo', unit: 'L', gases: { CO2: 1.67026, CH4: 0.00013235, N2O: 0.000002647 }, src: 'IPCC 2006 V2 Cap. 2 T2.4; CNE BNE 2024', origin: 'Oficial HC', unc: 'Baja' },
  { id: 'FE-12-DIE', set: 'HC2025v2', cat: '1.2', catName: 'Combustión móvil', sub: 'Vehículos de pasajeros o carga', name: 'Petróleo 2 (Diésel)', unit: 'L', gases: { CO2: 2.69855, CH4: 0.000142029, N2O: 0.000142029 }, src: 'IPCC 2006 V2 Cap. 3 T3.2.1–3.2.2; CNE BNE 2024', origin: 'Oficial HC', unc: 'Baja' },
  { id: 'FE-12-GAS', set: 'HC2025v2', cat: '1.2', catName: 'Combustión móvil', sub: 'Vehículos de pasajeros o carga', name: 'Gasolina', unit: 'L', gases: { CO2: 2.25362, CH4: 0.000812993, N2O: 0.000260158 }, src: 'IPCC 2006 V2 Cap. 3 T3.2.1–3.2.2; CNE BNE 2024', origin: 'Oficial HC', unc: 'Baja' },
  { id: 'FE-14-R410A', set: 'HC2025v2', cat: '1.4', catName: 'Emisiones fugitivas', sub: 'Emisiones fugitivas (Kioto)', name: 'R410A', unit: 'kg', co2e: 1923.5, gas: 'HFC', src: 'IPCC 2006 V3 Cap. 7 T7.8; AR5 T8.A.1', origin: 'Oficial HC', unc: 'Baja' },
  { id: 'FE-21-SEN25', set: 'HC2025v2', cat: '2.1', catName: 'Electricidad', sub: 'Sistema Eléctrico Nacional', name: 'Sistema Eléctrico Nacional — 2025', year: 2025, unit: 'MWh', co2e: 246.7249809, gas: 'CO2', src: 'Ministerio de Energía 2025 (AR5), Energía Abierta', origin: 'Oficial HC', unc: 'Media' },
  { id: 'FE-21-SEN24', set: 'HC2025v2', cat: '2.1', catName: 'Electricidad', sub: 'Sistema Eléctrico Nacional', name: 'Sistema Eléctrico Nacional — 2024', year: 2024, unit: 'MWh', co2e: 213.1398079, gas: 'CO2', src: 'Ministerio de Energía 2024 (AR5), Energía Abierta', origin: 'Oficial HC', unc: 'Media' },
  { id: 'FE-21-SEN23', set: 'HC2025v2', cat: '2.1', catName: 'Electricidad', sub: 'Sistema Eléctrico Nacional', name: 'Sistema Eléctrico Nacional — 2023', year: 2023, unit: 'MWh', co2e: 255.8737418, gas: 'CO2', src: 'Ministerio de Energía 2023 (AR5), Energía Abierta', origin: 'Oficial HC', unc: 'Media' },
  { id: 'FE-22-SEN25', set: 'HC2025v2', cat: '2.2', catName: 'Pérdidas por T&D', sub: 'Sistema Eléctrico Nacional', name: 'Pérdidas T&D SEN — 2025', year: 2025, unit: 'MWh', co2e: 14.06332391, gas: 'CO2', src: 'CEPAL-Enerdata BIEE (pérdidas 5,7 %)', origin: 'Oficial HC', unc: 'Media' },
  { id: 'FE-31-AGUA', set: 'HC2025v2', cat: '3.1', catName: 'Adq. bienes y servicios', sub: 'Adquisición de bienes y servicios', name: 'Agua potable: suministro y tratamiento', unit: 'm³', co2e: 0.36218, gas: 'CO2e', src: 'DEFRA 2025, Water supply / treatment', origin: 'Oficial HC', unc: 'Alta' },
  { id: 'FE-31-NEUN', set: 'HC2025v2', cat: '3.1', catName: 'Adq. bienes y servicios', sub: 'Adquisición de bienes y servicios', name: 'Neumático para camión o bus — nuevo', unit: 'kg', co2e: 6.56, gas: 'CO2e', src: 'KPMG 2025, actualización FE neumáticos', origin: 'Oficial HC', unc: 'Alta' },
  { id: 'FE-31-ACERO', set: 'HC2025v2', cat: '3.1', catName: 'Adq. bienes y servicios', sub: 'Adquisición de bienes y servicios', name: 'Acero general', unit: 't', co2e: 2863.90131, gas: 'CO2e', src: 'DEFRA 2025, Material use', origin: 'Oficial HC', unc: 'Alta' },
  { id: 'FE-32-BUS', set: 'HC2025v2', cat: '3.2', catName: 'Transporte de personas', sub: 'Traslado diario de personal', name: 'Bus interurbano (aprox. 45 pers.)', unit: 'pkm', co2e: 0.02776, gas: 'CO2e', src: 'DEFRA 2025, Business travel – land', origin: 'Oficial HC', unc: 'Alta' },
  { id: 'FE-32-AVD', set: 'HC2025v2', cat: '3.2', catName: 'Transporte de personas', sub: 'Viajes de negocios', name: 'Aéreo — trayecto doméstico (Chile continental)', unit: 'pkm', co2e: 0.13552, gas: 'CO2e', src: 'DEFRA 2025, Business travel – air', origin: 'Oficial HC', unc: 'Alta' },
  { id: 'FE-33-ART', set: 'HC2025v2', cat: '3.3', catName: 'Transporte de carga', sub: 'Productos — terrestre', name: 'Camión articulado promedio carga 11 t', unit: 'tkm', co2e: 0.078, gas: 'CO2e', src: 'DEFRA 2025, Freighting goods', origin: 'Oficial HC', unc: 'Alta' },
  { id: 'FE-36-RS', set: 'HC2025v2', cat: '3.6', catName: 'Trat. y/o disp. de residuos', sub: 'Relleno sanitario', name: 'Residuos comerciales e industriales', unit: 't', co2e: 520.5327, gas: 'CO2e', src: 'DEFRA 2025, Waste disposal', origin: 'Oficial HC', unc: 'Alta' },
  { id: 'FE-36-CHAT', set: 'HC2025v2', cat: '3.6', catName: 'Trat. y/o disp. de residuos', sub: 'Reciclaje', name: 'Metal: chatarra metálica', unit: 't', co2e: 4.68568, gas: 'CO2e', src: 'DEFRA 2025, Waste disposal', origin: 'Oficial HC', unc: 'Alta' }
].concat(HC2025_RESUMEN);

// Valor aplicado por la plataforma en una declaración 2024 (Excel de respaldo entregado, hoja FE).
export const FACTOR_HISTORY = [
  { key: 'SEN 2024', unit: 'kgCO₂e/MWh', values: [{ label: 'Aplicado en declaración 2024 (respaldo plataforma, 12/2025)', v: 202.1 }, { label: 'Base HC 2025 v2 (05/2026, actualización retroactiva)', v: 213.1398079 }] }
];

export const UNITS = {
  L: { dim: 'volumen-liq', toBase: 1, label: 'litros' }, 'm³ líq.': { dim: 'volumen-liq', toBase: 1000, label: 'metros cúbicos (líquido)' },
  kWh: { dim: 'energia', toBase: 0.001, label: 'kWh' }, MWh: { dim: 'energia', toBase: 1, label: 'MWh' }, GWh: { dim: 'energia', toBase: 1000, label: 'GWh' },
  kg: { dim: 'masa', toBase: 1, label: 'kilogramos' }, t: { dim: 'masa', toBase: 1000, label: 'toneladas' },
  'm³': { dim: 'volumen-agua', toBase: 1, label: 'metros cúbicos' },
  pkm: { dim: 'pkm', toBase: 1, label: 'pasajero-km' }, tkm: { dim: 'tkm', toBase: 1, label: 'tonelada-km' },
  CLP: { dim: 'gasto', toBase: 1, label: 'pesos chilenos' },
  g: { dim: 'masa', toBase: 0.001, label: 'gramos' }, km: { dim: 'km', toBase: 1, label: 'kilómetros' }, h: { dim: 'hora', toBase: 1, label: 'horas' }, noche: { dim: 'noche', toBase: 1, label: 'pieza por noche' }
};

export function convert(qty, from, to) {
  const a = UNITS[from], b = UNITS[to];
  if (!a || !b) return { ok: false, error: `Unidad desconocida (${from} → ${to})` };
  if (a.dim !== b.dim) return { ok: false, error: `Unidades incompatibles: ${a.label} no se puede convertir a ${b.label}` };
  return { ok: true, value: qty * a.toBase / b.toBase, factor: a.toBase / b.toBase };
}

export const fmt = (n, d = 1) => n == null || isNaN(n) ? '—' : n.toLocaleString('es-CL', { minimumFractionDigits: d, maximumFractionDigits: d });
const sig = n => n.toLocaleString('es-CL', { maximumSignificantDigits: 6 });

export function factorById(id) { return FACTORS.find(f => f.id === id) || null; }

export function factorApplies(f, year) {
  const set = FACTOR_SETS.find(s => s.id === f.set);
  if (!set || !set.loaded) return { ok: false, error: `Base ${f.set} no cargada` };
  if (year < set.from || year > set.to) return { ok: false, error: `La base ${set.name} aplica a ${set.from}${set.to !== set.from ? '–' + set.to : ''}, no a ${year}` };
  if (f.year != null && f.year !== year) return { ok: false, error: `Factor del año ${f.year} no corresponde al inventario ${year}` };
  return { ok: true };
}

// Cálculo de una fuente: cantidad total (en unidad del registro) × factor × PCG.
export function calculate({ qty, unit, factorId, year }) {
  const trace = [];
  if (qty == null || isNaN(qty)) return { ok: false, error: 'Sin dato de actividad', trace };
  if (qty < 0) return { ok: false, error: 'Dato de actividad negativo', trace };
  const f = factorById(factorId);
  if (!f) return { ok: false, error: 'Sin factor de emisión asignado. El motor no sustituye factores faltantes.', trace };
  const ap = factorApplies(f, year);
  if (!ap.ok) return { ok: false, error: ap.error, trace };
  const c = convert(qty, unit, f.unit);
  if (!c.ok) return { ok: false, error: c.error, trace };
  trace.push({ k: 'Dato de actividad', v: `${sig(qty)} ${unit}` });
  if (c.factor !== 1) trace.push({ k: 'Conversión de unidad', v: `${sig(qty)} ${unit} × ${sig(c.factor)} = ${sig(c.value)} ${f.unit}` });
  const byGas = {};
  if (f.gases) {
    for (const g of Object.keys(f.gases)) {
      const kgGas = c.value * f.gases[g];
      byGas[g] = kgGas * GWP[g];
      trace.push({ k: `${g}`, v: `${sig(c.value)} ${f.unit} × ${sig(f.gases[g])} kg${g}/${f.unit} × PCG ${GWP[g]} = ${sig(byGas[g])} kgCO₂e` });
    }
  } else {
    byGas[f.gas] = c.value * f.co2e;
    trace.push({ k: `Factor agregado (${f.gas})`, v: `${sig(c.value)} ${f.unit} × ${sig(f.co2e)} kgCO₂e/${f.unit} = ${sig(byGas[f.gas])} kgCO₂e` });
  }
  const kg = Object.values(byGas).reduce((a, b) => a + b, 0);
  trace.push({ k: 'Total', v: `${sig(kg)} kgCO₂e = ${sig(kg / 1000)} tCO₂e` });
  return { ok: true, kg, t: kg / 1000, byGas, factor: f, trace, engine: ENGINE_VERSION, gwp: GWP.id };
}

export const sumMonths = m => m.reduce((a, b) => a + (b == null ? 0 : b), 0);

// Vínculo límite → fuentes. Cat. 1 y 2 se vinculan a la Tabla 4; Cat. 3 queda sin vincular hasta resolver H-03.
export const CAT_TO_T4 = { '1.1': 'd1', '1.2': 'd2', '1.3': 'd4', '1.4': 'd5', '2.1': 'e1', '2.2': 'e2' };
export function boundaryOf(state, s) {
  if (s.included === false) return 'Fuente excluida manualmente';
  const e = (state.establishments || []).find(x => x.id === s.est);
  if (e && !e.included) return `Establecimiento «${e.name}» excluido del límite organizacional`;
  const c = (state.categories || []).find(x => x.key === CAT_TO_T4[s.cat]);
  if (c && c.state !== 'Incluida') return `Categoría «${c.name}» marcada como «${c.state}» en la Tabla 4`;
  return null;
}
export function computeInventory(state) {
  const year = state.period.year;
  const rows = state.sources.map(s => {
    const qty = s.freq === 'mensual' ? sumMonths(s.months) : s.annual;
    const excludedBy = boundaryOf(state, s);
    const res = excludedBy ? { ok: false, error: excludedBy, trace: [] } : calculate({ qty, unit: s.unit, factorId: s.factorId, year });
    return { ...s, included: !excludedBy, excludedBy, qty, res, t: res.ok ? res.t : 0 };
  });
  const total = rows.reduce((a, r) => a + r.t, 0);
  const byCat = {}, byGas = { CO2: 0, CH4: 0, N2O: 0, HFC: 0, PFC: 0, SF6: 0, NF3: 0, CO2e: 0 }, byEst = {}, byStatus = { aprobado: 0, revisado: 0, ingresado: 0 };
  for (const r of rows) {
    if (!r.res.ok) continue;
    byCat[r.cat] = (byCat[r.cat] || 0) + r.t;
    byEst[r.est] = (byEst[r.est] || 0) + r.t;
    byStatus[r.status] = (byStatus[r.status] || 0) + r.t;
    for (const g in r.res.byGas) byGas[g] = (byGas[g] || 0) + r.res.byGas[g] / 1000;
  }
  const scope = k => Object.entries(byCat).filter(([c]) => c.startsWith(k)).reduce((a, [, v]) => a + v, 0);
  return { rows, total, byCat, byGas, byEst, byStatus, scopes: { d: scope('1.'), e: scope('2.'), o: scope('3.') } };
}

function median(a) { const s = [...a].sort((x, y) => x - y); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; }
const MES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

// Reglas de calidad. Severidad: bloqueante | advertencia | recomendación.
// RUT chileno: dígito verificador módulo 11 y formato 12.345.678-5.
export function rutClean(v) { return String(v || '').replace(/[^0-9kK]/g, '').toUpperCase(); }
export function rutDV(body) { let s = 0, m = 2; for (let i = body.length - 1; i >= 0; i--) { s += +body[i] * m; m = m === 7 ? 2 : m + 1; } const r = 11 - (s % 11); return r === 11 ? '0' : r === 10 ? 'K' : String(r); }
export function rutValid(v) { const c = rutClean(v); if (c.length < 2) return false; const b = c.slice(0, -1), d = c.slice(-1); if (!/^\d{1,8}$/.test(b) || +b < 1000000) return false; return rutDV(b) === d; }
export function rutFormat(v) { const c = rutClean(v); if (c.length < 2) return c; const b = c.slice(0, -1).replace(/^0+/, ''), d = c.slice(-1); return b.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + d; }

export function validate(state, inv) {
  const out = [];
  const add = (id, sev, rule, obj, msg, ref) => out.push({ id, sev, rule, obj, msg, ref });
  for (const r of inv.rows) {
    if (r.included === false) continue;
    if (!r.res.ok) {
      if (r.method === 'Basado en gasto') add(`Q-${r.id}-SB`, 'bloqueante', 'R06 Método basado en gasto', r.id, `${r.name}: método de gasto sin FE externo aprobado ni justificación de inexistencia de datos físicos o de proveedor.`, 'Pronunciamiento HC 13/05/2026');
      else add(`Q-${r.id}-FE`, 'bloqueante', 'R01 Factor faltante o no aplicable', r.id, `${r.name}: ${r.res.error}`, 'Encargo §6.12');
    }
    if (r.freq === 'mensual') {
      const miss = r.months.map((v, i) => v == null ? MES[i] : null).filter(Boolean);
      if (miss.length) add(`Q-${r.id}-MISS`, 'advertencia', 'R03 Períodos sin dato', r.id, `${r.name}: sin dato en ${miss.join(', ')}.`, 'Integridad');
      const vals = r.months.filter(v => v != null);
      if (vals.length > 3) {
        const md = median(vals);
        r.months.forEach((v, i) => { if (v != null && md > 0 && (v > 2.5 * md || v < 0.3 * md)) add(`Q-${r.id}-OUT${i}`, 'advertencia', 'R04 Valor atípico', r.id, `${r.name}: ${MES[i]} = ${fmt(v, 0)} ${r.unit} frente a mediana ${fmt(md, 0)} ${r.unit}. Requiere justificación.`, 'Exactitud'); });
      }
    }
    if (!r.evidence || r.evidence.length === 0) add(`Q-${r.id}-EV`, 'advertencia', 'R05 Evidencia faltante', r.id, `${r.name}: sin respaldo documental adjunto.`, 'Verificación ISO 14064-3');
    if (r.status === 'ingresado') add(`Q-${r.id}-ST`, 'recomendación', 'R07 Dato sin revisión', r.id, `${r.name}: dato ingresado, pendiente de revisión interna.`, 'Flujo interno');
  }
  // R08: un mismo medidor o N° de cliente en dos fuentes incluidas con datos en el mismo mes = mismo consumo contado dos veces.
  const meters = {};
  for (const r of inv.rows) { const m = (r.meter || '').trim().toUpperCase(); if (m && r.included !== false) (meters[m] = meters[m] || []).push(r); }
  const mesOf = r => r.freq === 'mensual' ? (r.months || []).map(v => v != null && v !== 0) : Array(12).fill(r.annual != null && r.annual !== 0);
  const qtyIn = (r, idx) => r.freq === 'mensual' ? idx.reduce((a, i) => a + ((r.months || [])[i] || 0), 0) : (r.annual || 0) * idx.length / 12;
  for (const m in meters) { const g = meters[m];
    for (let a = 0; a < g.length; a++) for (let b = a + 1; b < g.length; b++) {
      const A = g[a], B = g[b], ma = mesOf(A), mb = mesOf(B), idx = ma.map((v, i) => v && mb[i] ? i : -1).filter(i => i >= 0);
      if (!idx.length) continue;
      const per = idx.length === 12 ? 'todo el año' : idx.map(i => MES[i]).join(', ');
      const same = A.unit === B.unit, dup = same ? Math.min(qtyIn(A, idx), qtyIn(B, idx)) : null;
      add(`Q-MTR-${m}-${A.id}-${B.id}`, 'bloqueante', 'R08 Posible doble contabilización', `${A.id}, ${B.id}`,
        `El medidor ${m} está asignado a ${A.id} «${A.name}» y a ${B.id} «${B.name}», ambas con consumo en ${per}.${dup != null ? ` Al menos ${fmt(dup, 0)} ${A.unit} se estarían sumando dos veces.` : ''} Deja ese consumo en una sola fuente: borra los meses repetidos, excluye o elimina la fuente duplicada, o corrige el medidor si son suministros distintos.`, 'Integridad / Encargo §11');
    } }
  for (const c of state.categories) if (c.state === 'Excluida' && !(c.detail || '').trim()) add(`Q-CAT-${c.key}`, 'bloqueante', 'R02 Exclusión sin justificación', c.name, `Categoría «${c.name}» excluida sin justificación.`, 'Informe Tabla 4');
  for (const e of state.establishments || []) {
    if (!e.included && !(e.reason || '').trim()) add(`Q-EST-${e.id}`, 'bloqueante', 'R11 Establecimiento excluido sin justificación', e.name, `«${e.name}» está excluido del límite sin justificación.`, 'Informe Tabla 3 · Anexo 7.2');
    if (e.included && !inv.rows.some(r => r.est === e.id && r.included)) add(`Q-ESTV-${e.id}`, 'recomendación', 'R12 Establecimiento sin fuentes', e.name, `«${e.name}» está incluido pero no tiene fuentes de emisión en el inventario.`, 'Integridad');
  }
  for (const [cat, key] of Object.entries(CAT_TO_T4)) {
    const c = (state.categories || []).find(x => x.key === key);
    if (c && c.state === 'Incluida' && !inv.rows.some(r => r.cat === cat && r.included)) add(`Q-T4-${key}`, 'advertencia', 'R13 Categoría incluida sin fuentes', c.name, `La Tabla 4 declara «${c.name}» como incluida, pero el inventario no tiene fuentes ${cat} activas.`, 'Informe Tabla 4');
  }
  const rut = state.org && state.org.rut;
  if (!(rut || '').trim()) add('Q-RUT', 'bloqueante', 'R14 RUT de la organización', 'Organización', 'Falta el RUT de la organización.', 'Informe Tabla 2');
  else if (!rutValid(rut)) add('Q-RUT', 'bloqueante', 'R14 RUT de la organización', 'Organización', `RUT «${rut}» no es válido: el dígito verificador no corresponde.`, 'Informe Tabla 2');
  const sumCats = Object.values(inv.byCat).reduce((a, b) => a + b, 0);
  if (Math.abs(sumCats - inv.total) > 1e-9) add('Q-SUM', 'bloqueante', 'R10 Subtotales ≠ total', '—', 'La suma de categorías no coincide con el total.', 'Coherencia');
  return out;
}

// Pruebas del motor: valores esperados tomados de la planilla oficial. Tolerancia relativa 1e-5 por redondeo de factores por gas a 6 cifras.
export function runTests() {
  const t = [];
  const near = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
  const T = (name, fn) => { try { const r = fn(); t.push({ name, ok: r.ok, detail: r.detail }); } catch (e) { t.push({ name, ok: false, detail: e.message }); } };
  T('Diésel móvil 1.000 L = 2.740,16 kgCO₂e (HC 2025 v2: 2,74016 kgCO₂e/L)', () => { const r = calculate({ qty: 1000, unit: 'L', factorId: 'FE-12-DIE', year: 2025 }); return { ok: near(r.kg, 2740.1603392865517, 1e-5), detail: `${r.kg.toFixed(4)} kg` }; });
  T('Conversión 1 m³ líq. → 1.000 L (diésel móvil)', () => { const r = calculate({ qty: 1, unit: 'm³ líq.', factorId: 'FE-12-DIE', year: 2025 }); return { ok: near(r.kg, 2740.1603392865517, 1e-5), detail: `${r.kg.toFixed(4)} kg` }; });
  T('Diésel estacionario por gas: CH₄ = 10,1969 kgCO₂e/m³ y N₂O = 5,7904 kgCO₂e/m³', () => { const r = calculate({ qty: 1000, unit: 'L', factorId: 'FE-11-DIE', year: 2025 }); return { ok: near(r.byGas.CH4, 10.196928, 1e-5) && near(r.byGas.N2O, 5.790409, 1e-5), detail: `CH₄ ${r.byGas.CH4.toFixed(4)} · N₂O ${r.byGas.N2O.toFixed(4)}` }; });
  T('Suma por gas = factor agregado del RESUMEN (2,71453 kgCO₂e/L)', () => { const r = calculate({ qty: 1, unit: 'L', factorId: 'FE-11-DIE', year: 2025 }); return { ok: near(r.kg, 2.71453325744664, 1e-5), detail: `${r.kg.toFixed(6)} kg/L` }; });
  T('Electricidad 1.000 kWh SEN 2025 = 246,725 kgCO₂e', () => { const r = calculate({ qty: 1000, unit: 'kWh', factorId: 'FE-21-SEN25', year: 2025 }); return { ok: near(r.kg, 246.7249809, 1e-6), detail: `${r.kg.toFixed(4)} kg` }; });
  T('Aplicabilidad: FE SEN 2025 rechazado en inventario 2024', () => { const r = calculate({ qty: 1, unit: 'MWh', factorId: 'FE-21-SEN25', year: 2024 }); return { ok: !r.ok, detail: r.error || 'aceptado (error)' }; });
  T('Factor faltante: error explícito, sin sustitución', () => { const r = calculate({ qty: 10, unit: 't', factorId: null, year: 2025 }); return { ok: !r.ok && !r.kg, detail: r.error }; });
  T('Unidades incompatibles: kg sobre factor en litros', () => { const r = calculate({ qty: 10, unit: 'kg', factorId: 'FE-12-DIE', year: 2025 }); return { ok: !r.ok, detail: r.error }; });
  T('Consolidación: suma de fuentes = total por categoría = total por instalación', () => {
    const st = { period: { year: 2025 }, sources: [{ id: 'a', est: 'E1', cat: '1.2', freq: 'anual', annual: 100, unit: 'L', factorId: 'FE-12-DIE', status: 'aprobado' }, { id: 'b', est: 'E2', cat: '2.1', freq: 'anual', annual: 5, unit: 'MWh', factorId: 'FE-21-SEN25', status: 'revisado' }] };
    const i = computeInventory(st); const c = Object.values(i.byCat).reduce((a, b) => a + b, 0), e = Object.values(i.byEst).reduce((a, b) => a + b, 0);
    return { ok: near(i.total, c, 1e-12) && near(i.total, e, 1e-12), detail: `${i.total.toFixed(6)} t` };
  });
  T('RUT: dígito verificador módulo 11', () => { const ok = rutValid('76.086.428-5') && rutValid('11.111.111-1') && rutValid('12345678-5') && !rutValid('12.345.678-9') && rutDV('7654321') === '6' && rutFormat('123456785') === '12.345.678-5'; return { ok, detail: '76.086.428-5 ✓ · 12.345.678-9 ✗ · formato 12.345.678-5' }; });
  T('R08 doble contabilización por medidor (mes a mes)', () => { const st = { period: { year: 2025 }, establishments: [{ id: 'E', included: true }], categories: [], org: { rut: '76.086.428-5' }, sources: [{ id: 'A', est: 'E', cat: '2.1', meter: 'm-1', freq: 'mensual', unit: 'MWh', factorId: 'FE-21-SEN25', months: [10, 10, 10, null, null, null, null, null, null, null, null, null], evidence: ['x'], status: 'aprobado' }, { id: 'B', est: 'E', cat: '2.1', meter: 'M-1 ', freq: 'mensual', unit: 'MWh', factorId: 'FE-21-SEN25', months: [null, 4, null, 5, null, null, null, null, null, null, null, null], evidence: ['x'], status: 'aprobado' }, { id: 'C', est: 'E', cat: '2.1', meter: 'M-1', freq: 'mensual', unit: 'MWh', factorId: 'FE-21-SEN25', months: [null, null, null, null, 7, null, null, null, null, null, null, null], evidence: ['x'], status: 'aprobado' }] }; const f = validate(st, computeInventory(st)).filter(x => x.rule.startsWith('R08')); const ok = f.length === 1 && f[0].obj === 'A, B' && /feb/.test(f[0].msg) && !/abr/.test(f[0].msg) && /4 MWh/.test(f[0].msg); return { ok, detail: ok ? 'A–B solapan solo en feb (4 MWh); C no solapa' : JSON.stringify(f.map(x => x.msg)) }; });
  return t;
}
