// TODO: Se obtiene el nombre del día actual
export const getWeekName = () => {
  let date = new Date();
  const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  let weekNumber = date.getDay();

  let weekName = dias[weekNumber];

  return weekName;
};
