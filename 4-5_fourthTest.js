const async = require('async')

const ping = async delay => {
  // resposta de retorno
  const pong = 'tempo de execução: '

  // se não tiver delay, retorna imediatamente
  if (!delay) return pong + 0 + 's'

  // verifica se tem delay maior que 3 e retorna erro
  const isArray = Array.isArray(delay)
  if (!isArray && delay > 3 || isArray && delay.find(number => number > 3))
    throw Error('Delay inválido')

  // converte para array para que a iteração funcione
  if (!isArray) delay = [delay]

  const executeDelay = async.timeout((delay) => {
    delay.forEach(n => {
      setTimeout(() => {
        console.log(pong + n.toFixed(1) + 's');
      }, n * 1000);
    })
  });

  executeDelay(delay, function (err, data) { });
}

ping(1)
ping(1.2)
ping(2.7)
ping(3)

// função para gerar numeros aleatórios
function getRandom(min, max) {
  return (Math.random() * (max - min));
}

let delays = [];
for (let i = 0; i < 3; i++)
  delays.push(getRandom(0, 3));

ping(delays)