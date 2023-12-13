export const formatDate = (date: string): string => {
  const objDate = new Date(date);
  return objDate.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
};
