const removePropOfObject = (obj, prop) => {
  /* 
  *  obj deve ser um objeto
  *  prop deve ser uma propriedade válida do objeto
  */
  if (typeof obj !== 'object' || !obj[prop])
    return false

  delete obj[prop]
  return true
}

// objeto de entrada
const obj = {
  name: 'Teste',
  type: 'Teste'
}

// retorna true
console.log(removePropOfObject(obj, 'name'));

// retorna false
console.log(removePropOfObject(obj, 'teste'));