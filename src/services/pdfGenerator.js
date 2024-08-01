const PDFDocument = require('pdfkit');
const fs = require('fs');

const translations = {
  Baptism: 'Bautismo',
  Confirmation: 'Confirmación',
  Marriage: 'Matrimonio',
  Death: 'Defunción'
};

function generatePDF(departureType, departureData, filePath) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    const departureTypeSpanish = translations[departureType] || departureType;

    doc.fontSize(18).text(`PARROQUIA DE SANTA MARIA BOYACÁ`, { align: 'center' });
    doc.fontSize(16).text(`PARTIDA DE ${departureTypeSpanish.toUpperCase()}`, { align: 'center' });
    doc.moveDown();

    switch (departureType) {
      case 'Baptism':
        generateBaptismContent(doc, departureData);
        break;
      case 'Confirmation':
        generateConfirmationContent(doc, departureData);
        break;
      case 'Marriage':
        generateMarriageContent(doc, departureData);
        break;
      case 'Death':
        generateDeathContent(doc, departureData);
        break;
      default:
        reject(new Error('Tipo de partida no reconocido'));
        return;
    }

    doc.moveDown().moveDown();
    doc.text('[Firma del Párroco]', { align: 'right' });
    doc.text('Sello Parroquial', { align: 'right' });

    doc.end();

    stream.on('finish', () => resolve(filePath));
    stream.on('error', reject);
  });
}


function generateBaptismContent(doc, data) {
  doc.fontSize(12).text(`En la municipio de Santa María (Boyacá), a los ${data.baptismDate.getDate()} días del mes de ${getMonthName(data.baptismDate.getMonth())} del año ${data.baptismDate.getFullYear()},`);
  doc.text('yo, el infrascrito Victor Cardenas, Párroco de esta Parroquia,');
  doc.moveDown();
  doc.text('BAUTICÉ SOLEMNEMENTE A:');
  doc.moveDown();
  doc.text(`Nombres y Apellidos: ${data.baptized.name} ${data.baptized.lastName}`);
  doc.text(`Fecha de Nacimiento: ${data.baptized.birthdate.toLocaleDateString()}`);
  doc.text(`Lugar de Nacimiento: ${data.placeBirth}`);
  doc.text(`Hijo/a de: ${data.fatherName} y ${data.motherName}`);
  doc.moveDown();
  doc.text(`Padrinos: ${data.godfather1} y ${data.godfather2 || 'N/A'}`);
}

function generateConfirmationContent(doc, data) {
  doc.fontSize(12).text(`En la municipio de Santa María (Boyacá), a los ${data.confirmationDate.getDate()} días del mes de ${getMonthName(data.confirmationDate.getMonth())} del año ${data.confirmationDate.getFullYear()},`);
  doc.text('el Excelentísimo Párroco Victor Cardenas,');
  doc.moveDown();
  doc.text('ADMINISTRÓ EL SACRAMENTO DE LA CONFIRMACIÓN A:');
  doc.moveDown();
  doc.text(`Nombres y Apellidos: ${data.confirmed.name} ${data.confirmed.lastName}`);
  doc.text(`Fecha de Nacimiento: ${data.confirmed.birthdate.toLocaleDateString()}`);
  doc.text(`Hijo/a de: ${data.fatherName} y ${data.motherName}`);
  doc.text(`Bautizado/a en: ${data.buatizedParish || 'N/A'}`);
  doc.moveDown();
  doc.text(`Padrino/Madrina: ${data.godfather}`);
}

function generateMarriageContent(doc, data) {
  doc.fontSize(12).text(`En la municipio de Santa María (Boyacá), a los ${data.marriageDate.getDate()} días del mes de ${getMonthName(data.marriageDate.getMonth())} del año ${data.marriageDate.getFullYear()},`);
  doc.text('ante mí, Victor Cardenas, Párroco de esta Parroquia,');
  doc.moveDown();
  doc.text('CONTRAJERON MATRIMONIO CANÓNICO:');
  doc.moveDown();
  doc.text('El contrayente:');
  doc.text(`Nombres y Apellidos: ${data.husband.name} ${data.husband.lastName}`);
  doc.text(`Fecha de Nacimiento: ${data.husband.birthdate.toLocaleDateString()}`);
  doc.text(`Hijo de: ${data.father_husband || 'N/A'} y ${data.mother_husband || 'N/A'}`);
  doc.moveDown();
  doc.text('La contrayente:');
  doc.text(`Nombres y Apellidos: ${data.wife.name} ${data.wife.lastName}`);
  doc.text(`Fecha de Nacimiento: ${data.wife.birthdate.toLocaleDateString()}`);
  doc.text(`Hija de: ${data.father_wife || 'N/A'} y ${data.mother_wife || 'N/A'}`);
  doc.moveDown();
  doc.text(`Testigos: ${data.witness1} y ${data.witness2}`);
}

function generateDeathContent(doc, data) {
  doc.fontSize(12).text(`En la municipio de Santa María (Boyacá), a los ${data.deathDate.getDate()} días del mes de ${getMonthName(data.deathDate.getMonth())} del año ${data.deathDate.getFullYear()},`);
  doc.text('yo, el infrascrito victor Cardenas, Párroco de esta Parroquia,');
  doc.moveDown();
  doc.text('CERTIFICA QUE:');
  doc.moveDown();
  doc.text(`Nombres y Apellidos: ${data.dead.name} ${data.dead.lastName}`);
  doc.text(`Fecha de Nacimiento: ${data.dead.birthdate.toLocaleDateString()}`);
  doc.text(`Hijo/a de: ${data.fatherName} y ${data.motherName}`);
  doc.text(`Estado Civil: ${data.civilStatus}`);
  doc.moveDown();
  doc.text(`Falleció el día ${data.deathDate.toLocaleDateString()} y recibió cristiana sepultura`);
  doc.text(`en el cementerio de ${data.cemeteryName} el día ${data.funeralDate.toLocaleDateString()}.`);
}

function getMonthName(monthIndex) {
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  return months[monthIndex];
}

module.exports = { generatePDF };