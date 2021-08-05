const xml_data = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
<soap:Body>
<MenuPorCama>
<idIngesta>3</idIngesta>
<NombreIngesta>Comida</NombreIngesta>
<idDieta>6</idDieta>
<NombreDieta>Basal</NombreDieta>
<TomaSal>true</TomaSal>
<Observaciones>
<Observacion>El paciente no quiere lechuga</Observacion>
<Observacion>No cerdo</Observacion>
</Observaciones>
<Alergias>
<Alergia>El paciente tiene intolerancia a la piel del melocotón</Alergia>
<Alergia>Gluten</Alergia>
</Alergias>
<Platos>
<Plato>
<idPlato>527887</idPlato>
<NombrePlato>CHOCOLATE A LA TAZA CON LECHE</NombrePlato>
</Plato>
<Plato>
<idPlato>528019</idPlato>
<NombrePlato>CHURROS LAZO</NombrePlato>
</Plato>
<Plato>
<idPlato>528029</idPlato>
<NombrePlato>ARROZ CON POLLO</NombrePlato>
</Plato>
<Plato>
<Plato xsi:nil="true"/>
</Platos>
</MenuPorCama>
</soap:Body>
</soap:Envelope>`;

export default xml_data;
