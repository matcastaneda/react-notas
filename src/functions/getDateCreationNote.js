import { getNameMonth } from './getNameMonth';
import { getWeekName } from './getNameWeek';

// TODO: Se obtiene la fecha de creación de la nota con el formato (Sábado 26 Feb, 2022)
const getDateCreationNote = () => {
  let date = new Date();

  let week = getWeekName();
  let day = date.getDate();
  let month = getNameMonth();
  let year = date.getFullYear();

  if (day <= 9) day = '0' + day.toString();

  return week + ' ' + day + ' ' + month + ', ' + year;
};

export default getDateCreationNote;
