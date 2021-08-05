export const SoapCallLogin = (
  username: string,
  password: string,
  url: string
) => {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", url, true);

  // build SOAP request
  const sr = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:api=${url}
        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
        xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
            <Login xmlns=${url}>
                <User>${username}</User>
                <Pass>${password}</Pass>
            </Login>
        </soap:Body>
    </soap:Envelope>`;

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        alert(xmlhttp.responseText);
        // alert('done. use firebug/console to see network response');
      }
    }
  };
  // Send the POST request
  xmlhttp.setRequestHeader("Content-Type", "text/xml");
  xmlhttp.send(sr);
  // send request
  // ...
};
export const SoapCallGetMenu = (token: string, idCama: number, url: string) => {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", url, true);

  // build SOAP request
  const sr = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:api=${url}
        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
        xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
            <GetMenuPorCama xmlns=${url}>
                <Control>${token}</Control>
                <IDCama>${idCama}</IDCama>
            </GetMenuPorCama>
        </soap:Body>
    </soap:Envelope>`;

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        alert(xmlhttp.responseText);
        // alert('done. use firebug/console to see network response');
      }
    }
  };

  // Send the POST request
  xmlhttp.setRequestHeader("Content-Type", "text/xml");
  xmlhttp.send(sr);
  // send request
  // ...
};
