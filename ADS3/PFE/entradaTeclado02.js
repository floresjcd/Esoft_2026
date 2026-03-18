const readline = require("readline/promises");

let nome; // variável global
let idade; // variável global

async function leDados() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  nome = await rl.question("Digite seu nome: ");
  idade = await rl.question("Digite sua idade: ");
  idade = parseInt(idade);

  rl.close();
}

async function iniciar() {
  await leDados(); // lê os dados do usuário

  console.log("\n=== RESULTADO ===");
  console.log(`Nome: ${nome}`);
  console.log(`Idade: ${idade} anos`);
}

iniciar();
