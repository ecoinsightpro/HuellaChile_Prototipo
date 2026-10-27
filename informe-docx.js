// Genera el Informe de Cuantificación (.docx, OOXML) desde los mismos bloques que la vista previa.
// Sin dependencias: ZIP sin compresión (STORE) + CRC32.
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = u => { let c = 0xFFFFFFFF; for (let i = 0; i < u.length; i++) c = CRC[(c ^ u[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
const enc = new TextEncoder();
function zip(files) {
  const parts = [], central = []; let off = 0;
  for (const f of files) {
    const name = enc.encode(f.name), data = typeof f.data === 'string' ? enc.encode(f.data) : f.data, crc = crc32(data);
    const h = new DataView(new ArrayBuffer(30)); h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, 0, true); h.setUint32(14, crc, true); h.setUint32(18, data.length, true); h.setUint32(22, data.length, true); h.setUint16(26, name.length, true);
    parts.push(new Uint8Array(h.buffer), name, data);
    const c = new DataView(new ArrayBuffer(46)); c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint32(16, crc, true); c.setUint32(20, data.length, true); c.setUint32(24, data.length, true); c.setUint16(28, name.length, true); c.setUint32(42, off, true);
    central.push(new Uint8Array(c.buffer), name); off += 30 + name.length + data.length;
  }
  const cs = central.reduce((a, b) => a + b.length, 0), e = new DataView(new ArrayBuffer(22));
  e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true); e.setUint32(12, cs, true); e.setUint32(16, off, true);
  return new Blob([...parts, ...central, new Uint8Array(e.buffer)], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
}
const x = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const run = (t, o = {}) => String(t).split('\n').map((ln, i) => `<w:r><w:rPr>${o.b ? '<w:b/>' : ''}${o.i ? '<w:i/>' : ''}${o.c ? `<w:color w:val="${o.c}"/>` : ''}${o.sz ? `<w:sz w:val="${o.sz}"/><w:szCs w:val="${o.sz}"/>` : ''}${o.hl ? `<w:shd w:val="clear" w:color="auto" w:fill="${o.hl}"/>` : ''}</w:rPr>${i ? '<w:br/>' : ''}<w:t xml:space="preserve">${x(ln)}</w:t></w:r>`).join('');
const para = (t, o = {}) => `<w:p><w:pPr>${o.style ? `<w:pStyle w:val="${o.style}"/>` : ''}${o.jc ? `<w:jc w:val="${o.jc}"/>` : ''}${o.ind ? `<w:ind w:left="${o.ind}" w:hanging="${o.hang || 0}"/>` : ''}${o.shd ? `<w:shd w:val="clear" w:color="auto" w:fill="${o.shd}"/>` : ''}<w:spacing w:before="${o.before ?? 0}" w:after="${o.after ?? 120}"/>${o.keep ? '<w:keepNext/>' : ''}</w:pPr>${o.raw || run(t, o)}</w:p>`;
const fr = cols => { const out = []; const re = /repeat\((\d+),\s*minmax\([^,]+,\s*([\d.]+)fr\)\)|minmax\([^,]+,\s*([\d.]+)fr\)/g; let m; while ((m = re.exec(cols))) { if (m[1]) for (let i = 0; i < +m[1]; i++) out.push(+m[2]); else out.push(+m[3]); } return out.length ? out : [1]; };
const W = 9638;
function table(b) {
  const f = fr(b.cols), sum = f.reduce((a, v) => a + v, 0), w = f.map(v => Math.round(v / sum * W));
  const rows = b.rows.map(r => { let ci = 0; const cells = r.cells.map(c => { const span = +(String(c.span).replace('span ', '')) || 1, cw = w.slice(ci, ci + span).reduce((a, v) => a + v, 0); ci += span; const hex = c.bg.replace('#', ''), fg = c.fg.replace('#', '');
    return `<w:tc><w:tcPr><w:tcW w:w="${cw}" w:type="dxa"/>${span > 1 ? `<w:gridSpan w:val="${span}"/>` : ''}<w:shd w:val="clear" w:color="auto" w:fill="${hex}"/><w:vAlign w:val="center"/></w:tcPr>${para(c.v || '', { b: c.fw >= 700, c: fg, sz: 18, jc: c.al === 'right' ? 'right' : c.al === 'center' ? 'center' : 'left', ind: c.pl === '18px' ? 240 : 0, after: 0 })}</w:tc>`; }).join('');
    return `<w:tr><w:trPr><w:cantSplit/></w:trPr>${cells}</w:tr>`; }).join('');
  const bd = ['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(k => `<w:${k} w:val="single" w:sz="4" w:space="0" w:color="000000"/>`).join('');
  return `<w:tbl><w:tblPr><w:tblW w:w="${W}" w:type="dxa"/><w:tblBorders>${bd}</w:tblBorders><w:tblLayout w:type="fixed"/><w:tblCellMar><w:left w:w="80" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${w.map(v => `<w:gridCol w:w="${v}"/>`).join('')}</w:tblGrid>${rows}</w:tbl>${para('', { after: 120 })}`;
}
const b64 = d => { const s = atob(d.split(',')[1]); const u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return u; };
const dims = src => new Promise(r => { const im = new Image(); im.onload = () => r({ w: im.naturalWidth, h: im.naturalHeight, im }); im.onerror = () => r(null); im.src = src; });
async function piePng(slices) {
  const cv = document.createElement('canvas'), S = 2; cv.width = 620 * S; cv.height = 240 * S; const g = cv.getContext('2d'); g.scale(S, S); g.fillStyle = '#FFFFFF'; g.fillRect(0, 0, 620, 240);
  g.save(); g.translate(20, 20); for (const sl of slices) if (sl.d) { g.fillStyle = sl.fill; g.strokeStyle = '#FFFFFF'; g.lineWidth = 1.5; const p = new Path2D(sl.d); g.fill(p); g.stroke(p); }
  g.font = 'bold 11px Arial'; g.fillStyle = '#FFFFFF'; g.textAlign = 'center'; for (const sl of slices) if (sl.lbl) g.fillText(sl.lbl, +sl.lx, +sl.ly); g.restore();
  g.textAlign = 'left'; slices.forEach((sl, i) => { const y = 70 + i * 34; g.fillStyle = sl.fill; g.fillRect(260, y - 10, 14, 14); g.fillStyle = '#000000'; g.font = 'bold 13px Arial'; g.fillText(sl.name, 284, y + 2); g.font = '12px Arial'; g.fillText(sl.val, 284, y + 18); });
  return cv.toDataURL('image/png');
}
export async function buildDocx(pages, meta = {}) {
  const media = []; let rid = 10;
  const addImg = async (src, maxW = 6000000, maxH = 4000000) => { const dm = await dims(src); if (!dm) return ''; let cx = maxW, cy = Math.round(maxW * dm.h / dm.w); if (cy > maxH) { cy = maxH; cx = Math.round(maxH * dm.w / dm.h); } const png = /^data:image\/png/.test(src), id = 'rId' + (++rid), fn = `image${media.length + 1}.${png ? 'png' : 'jpeg'}`; media.push({ id, fn, data: b64(src) }); const n = media.length;
    return `<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:docPr id="${n}" name="Imagen ${n}"/><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${n}" name="${fn}"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${id}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>`; };
  let body = '';
  for (let pi = 0; pi < pages.length; pi++) {
    if (pi) body += '<w:p><w:r><w:br w:type="page"/></w:r></w:p>';
    for (const b of pages[pi].blocks) {
      if (b.cover) { body += para('INFORME:', { b: 1, c: '1F497D', sz: 44, jc: 'center', before: 1200, after: 240 }) + para('CUANTIFICACIÓN DE EMISIONES DE GASES DE EFECTO INVERNADERO, año ' + b.year, { b: 1, c: '1F497D', sz: 40, jc: 'center', after: 360 }) + para(b.org, { b: 1, sz: 34, jc: 'center', after: 480 });
        body += b.logo ? para('', { jc: 'center', after: 480, raw: await addImg(b.logo, 2600000, 1300000) }) : para('< LOGO Organización >', { c: '808080', jc: 'center', after: 480, hl: 'FFF2CC' }); body += para(b.prep, { jc: 'center', sz: 22 }); }
      else if (b.dateRow) body += para('Fecha: ' + (b.v || '').split('-').reverse().join('/'), { jc: 'right', after: 360 });
      else if (b.band) body += para(b.text, { b: 1, c: 'FFFFFF', shd: '1F497D', sz: 24, before: 240, after: 200 });
      else if (b.h1) body += para(b.text, { style: 'Heading1', keep: 1 });
      else if (b.h2) body += para(b.text, { style: 'Heading2', keep: 1 });
      else if (b.sub) body += para(b.text, { b: 1, keep: 1 });
      else if (b.p) body += para(b.text, { jc: 'both' });
      else if (b.li) body += para('', { ind: 360, hang: 240, raw: run('•\u00A0\u00A0') + run(b.text) });
      else if (b.cap) body += para(b.text, { b: 1, sz: 18, c: '1F497D', keep: 1, before: 120, after: 80 });
      else if (b.pend) body += para(b.text, { hl: 'FFF2CC', c: '7F6000' });
      else if (b.toc) body += para('', { ind: b.pl === '22px' ? 360 : 0, raw: run(b.n + '\u00A0\u00A0' + b.t, { b: b.fw >= 700 }) , after: 60 });
      else if (b.tbl) body += table(b);
      else if (b.pie) body += para('', { jc: 'center', raw: await addImg(await piePng(b.slices), 5400000, 2100000) });
      else if (b.img) body += b.src ? para('', { jc: 'center', raw: await addImg(b.src) }) : para('<' + b.text + '>', { hl: 'FFF2CC', c: '7F6000', jc: 'center', before: 600, after: 600 });
    }
  }
  const NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"';
  const sect = `<w:sectPr><w:headerReference w:type="default" r:id="rId3"/><w:footerReference w:type="default" r:id="rId4"/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1418" w:right="1134" w:bottom="1418" w:left="1134" w:header="709" w:footer="709" w:gutter="0"/><w:titlePg/></w:sectPr>`;
  const doc = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document ${NS}><w:body>${body}${sect}</w:body></w:document>`;
  const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial" w:eastAsia="Arial"/><w:sz w:val="20"/><w:szCs w:val="20"/><w:lang w:val="es-CL"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="264" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="360" w:after="160"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:color w:val="1F497D"/><w:sz w:val="26"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="240" w:after="120"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/><w:color w:val="1F497D"/><w:sz w:val="22"/></w:rPr></w:style></w:styles>`;
  const hdr = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:hdr ${NS}>${para((meta.draft ? 'BORRADOR · ' : '') + 'Informe de Cuantificación de GEI ' + (meta.year || '') + ' · ' + (meta.org || ''), { sz: 16, c: meta.draft ? 'C00000' : '808080', jc: 'right', after: 0 })}</w:hdr>`;
  const ftr = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:ftr ${NS}><w:p><w:pPr><w:jc w:val="right"/></w:pPr><w:r><w:rPr><w:sz w:val="16"/><w:color w:val="808080"/></w:rPr><w:t xml:space="preserve">${x(meta.footer || '')}  ·  Página </w:t></w:r><w:r><w:rPr><w:sz w:val="16"/><w:color w:val="808080"/></w:rPr><w:fldChar w:fldCharType="begin"/></w:r><w:r><w:rPr><w:sz w:val="16"/></w:rPr><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r><w:r><w:rPr><w:sz w:val="16"/></w:rPr><w:fldChar w:fldCharType="separate"/></w:r><w:r><w:rPr><w:sz w:val="16"/><w:color w:val="808080"/></w:rPr><w:t>1</w:t></w:r><w:r><w:rPr><w:sz w:val="16"/></w:rPr><w:fldChar w:fldCharType="end"/></w:r></w:p></w:ftr>`;
  const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/><Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>${media.map(m => `<Relationship Id="${m.id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${m.fn}"/>`).join('')}</Relationships>`;
  const ct = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Default Extension="png" ContentType="image/png"/><Default Extension="jpeg" ContentType="image/jpeg"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>`;
  const root = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>`;
  const core = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${x('Informe de Cuantificación de GEI ' + (meta.year || '') + ' · ' + (meta.org || ''))}</dc:title><dc:creator>LiqenInsight HuellaChile</dc:creator><dc:description>${x(meta.footer || '')}</dc:description><dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString().slice(0, 19)}Z</dcterms:created></cp:coreProperties>`;
  return zip([{ name: '[Content_Types].xml', data: ct }, { name: '_rels/.rels', data: root }, { name: 'docProps/core.xml', data: core }, { name: 'word/document.xml', data: doc }, { name: 'word/styles.xml', data: styles }, { name: 'word/header1.xml', data: hdr }, { name: 'word/footer1.xml', data: ftr }, { name: 'word/_rels/document.xml.rels', data: rels }, ...media.map(m => ({ name: 'word/media/' + m.fn, data: m.data }))]);
}
