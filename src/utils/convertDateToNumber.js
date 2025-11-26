export const convertDateToNumber = (date) => {
  const createdDate = new Date(date);
  const now = new Date();

  // restar las dos fechas me devuelve los datos en milisegundos 
  const diffs = now - createdDate;

  // divide los 1000ms * 60 segundos * 60 minutos * 24 horas y vamos a redondear hacia abajo para que tome días completos 1.5 lo pasa a 1 día 
  const diffsDays = Math.floor(diffs / (1000 * 60 * 60 * 24));

  return diffsDays;
};
