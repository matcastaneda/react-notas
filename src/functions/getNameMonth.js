// TODO: Se obtiene el nombre del mes actual
export const getNameMonth = () => {
  let date = new Date();

  let numMonth = date.getMonth() + 1;
  date.setMonth(numMonth - 1);
  const month = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(
    date,
  );

  const monthUpperCase = month.charAt(0).toUpperCase() + month.substring(1, 3);

  return monthUpperCase;
};
