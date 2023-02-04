export const dateFormatter = fecha => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  };
  return new Date(fecha).toLocaleDateString('pt-BR', options);
};
