// Devuelve la fecha como la conocemos normalmente en Argentina
export const formatNormalDate = (iso: string) => {

  const [year, month, day] = iso.slice(0, 10).split("-");

  return `${day}/${month}/${year}`;

}


// Devuelve el nombre del mes
export const monthName = (dateString: string): string => {

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("es-AR", {
    month: "long"
  }).format(date).toUpperCase();

};

// Devuelve el anio de la fecha
export const yearOnly = (dateString: string): string => {

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("es-AR", {
    year: "numeric"
  }).format(date);
}