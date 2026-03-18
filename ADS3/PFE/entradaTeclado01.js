const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let nome = await rl.question("Digite seu nome: ");
  let idade = await rl.question("Digite sua idade: ");
  rl.close();

  console.log(`Olá ${nome}! Você tem ${idade} anos.`);


}

main();
