import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { menu, menuSoapCall, user } from "../recoil/atoms";
import CardsMenu from "./cardsMenu";

export const ObservacionesFormatter = (observaciones: any) =>
  observaciones.Observacion.map((item: any) => item);

export const PlatosFormatter = (platos: any) =>
  platos.Plato.reduce(
    (acum: any, item: any) =>
      "idPlato" in item
        ? { ...acum, [item.idPlato]: item.NombrePlato[0] }
        : acum,
    {}
  );
export const PlatosDietistaFormatter = (platos: any) =>
  platos.Plato.reduce(
    (acum: any, item: any) =>
      "idPlato" in item ? [...acum, item.NombrePlato[0]] : acum,
    []
  );

export const AlergiasFormatter = (alergias: any) =>
  alergias.Alergia.map((item: any) => item);

export const MenuInfo = () => {
  const [data, setData] = useState({});
  const menuDataSoap: any = useRecoilValue(menuSoapCall);
  const menuData = useRecoilValue(menu);
  const userData = useRecoilValue(user);
  const menuDataSplit = menuData.split("|");
  const informationSplit = userData.split("|");
  const position = Number(informationSplit[2]);
  const idPlatoSelected = menuDataSplit[2 + position];

  const setMenuData = () => {
    if (Object.keys(menuDataSoap).length !== 0) {
      const platoSelected =
        position === 0
          ? PlatosDietistaFormatter(menuDataSoap.MenuPorCama.Platos[0])
          : [
              PlatosFormatter(menuDataSoap.MenuPorCama.Platos[0])[
                idPlatoSelected
              ],
            ];
      const menuArray = {
        NombreDieta: menuDataSoap.MenuPorCama.NombreDieta[0],
        idIngesta: menuDataSoap.MenuPorCama.idIngesta[0],
        idDieta: menuDataSoap.MenuPorCama.idDieta[0],
        TomaSal: menuDataSoap.MenuPorCama.TomaSal[0],
        NombreIngesta: menuDataSoap.MenuPorCama.NombreIngesta[0],
        Observaciones: ObservacionesFormatter(
          menuDataSoap.MenuPorCama.Observaciones[0]
        ),
        Alergias: AlergiasFormatter(menuDataSoap.MenuPorCama.Alergias[0]),
        Plato: platoSelected,
      };
      setData(menuArray);
    }
  };
  useEffect(() => {
    setMenuData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuDataSoap]);

  return (
    <>
      {Object.keys(menuDataSoap).length !== 0 && (
        <CardsMenu position={position} data={data}></CardsMenu>
      )}
    </>
  );
};
export default MenuInfo;
