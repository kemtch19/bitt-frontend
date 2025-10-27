import {convertNumber} from "../../utils/convertNumbers.js"

export const Trends = () => {
  const tendenciesData = [
    {
      name: "DesarrolloWeb",
      number: 1530000,
    },
    {
      name: "UIUX",
      number: 12000,
    },
    {
      name: "NuevasTecnologías",
      number: 9845,
    },
  ];

  return (
    <div className="my-7">
      <h1>Tendencias para ti</h1>
      {tendenciesData.map((d, index) => (
        <div className="my-3">
          <p className="text-xs">{index + 1} · Tendencia</p>
          <h3>#{d.name}</h3>
          <p className="text-xs">{convertNumber(d.number)} Bitters</p>
        </div>
      ))}
    </div>
  );
};
