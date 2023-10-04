function parceValueToBRL(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

function parsePorcentage(value, total) {
  return value * 100 / total
}

export {
  parceValueToBRL,
  parsePorcentage
}