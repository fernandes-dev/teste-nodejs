const convertDate = (userDate) => {
  // user date deve estar no formato M/D/YYYY e deve ser uma string
  if (typeof userDate !== 'string')
    return false

  // quebra a data do usuário em um array
  const dateArray = userDate.split('/')

  // concatena para obter o formato correto
  const formattedDate = dateArray[2] + dateArray[0] + dateArray[1]

  return formattedDate
}

console.log(convertDate('12/31/2014'));