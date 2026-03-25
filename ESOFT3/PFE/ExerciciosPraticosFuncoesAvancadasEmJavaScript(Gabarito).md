> **Curso:** Engenharia de Software / Tecnologia em Análise e Desenvolvimento de Sistemas  
> **Disciplina:** Programação Front-End    
> **Tema:**  Funções Avançadas em JavaScript - Exercícios Práticos (Gabarito)  
> **Professor:** José Carlos Flores  
---

## Nível Básico

### Funções Anônimas e Arrow Functions

1.  **Crie uma função anônima que receba dois números e retorne a soma deles. Atribua essa função a uma variável `somar` e execute-a.**

    ```javascript
    const somar = function(a, b) {
      return a + b;
    };
    console.log(somar(5, 3)); // Saída: 8
    ```

2.  **Converta a função do exercício 1 para uma Arrow Function de uma única linha.**

    ```javascript
    const somarArrow = (a, b) => a + b;
    console.log(somarArrow(10, 7)); // Saída: 17
    ```

3.  **Escreva uma Arrow Function que não receba parâmetros e retorne a string "Olá, Mundo!".**

    ```javascript
    const saudacao = () => "Olá, Mundo!";
    console.log(saudacao()); // Saída: Olá, Mundo!
    ```

4.  **Crie uma função anônima que receba um array de strings e imprima cada string no console. Utilize `forEach` com essa função anônima.**

    ```javascript
    const imprimirStrings = function(arr) {
      arr.forEach(function(str) {
        console.log(str);
      });
    };
    imprimirStrings(["Maçã", "Banana", "Pera"]);
    // Saída:
    // Maçã
    // Banana
    // Pera
    ```

5.  **Desenvolva uma Arrow Function que receba um número e retorne `true` se for par, e `false` caso contrário.**

    ```javascript
    const isPar = numero => numero % 2 === 0;
    console.log(isPar(4));  // Saída: true
    console.log(isPar(7));  // Saída: false
    ```

### Callbacks

6.  **Crie uma função `executarAposTempo(callback, tempo)` que receba uma função de callback e um tempo em milissegundos. A função deve executar o callback após o tempo especificado, usando `setTimeout`.**

    ```javascript
    function executarAposTempo(callback, tempo) {
      setTimeout(callback, tempo);
    }
    ```

7.  **Utilize a função `executarAposTempo` do exercício 6 para exibir a mensagem "Callback executado!" após 3 segundos.**

    ```javascript
    executarAposTempo(function() {
      console.log("Callback executado!");
    }, 3000);
    // Saída (após 3 segundos): Callback executado!
    ```

8.  **Escreva uma função `processarArray(arr, callback)` que receba um array e uma função de callback. Para cada elemento do array, a função deve aplicar o callback e retornar um novo array com os resultados.**

    ```javascript
    function processarArray(arr, callback) {
      const novoArray = [];
      for (let i = 0; i < arr.length; i++) {
        novoArray.push(callback(arr[i]));
      }
      return novoArray;
    }
    ```

9.  **Use a função `processarArray` do exercício 8 para dobrar cada número em um array `[1, 2, 3, 4]` (utilizando uma Arrow Function como callback).**

    ```javascript
    const numeros = [1, 2, 3, 4];
    const numerosDobrados = processarArray(numeros, numero => numero * 2);
    console.log(numerosDobrados); // Saída: [2, 4, 6, 8]
    ```

10. **Simule um clique em um botão HTML (sem criar o HTML, apenas o JS) usando `setTimeout` para chamar uma função anônima que exiba um `alert`.**

    ```javascript
    // Simulação de um evento de clique após 2 segundos
    setTimeout(function() {
      alert("Botão simulado clicado!");
    }, 2000);
    // Uma caixa de alerta aparecerá após 2 segundos.
    ```

### Funções de Alta Ordem (HOFs) - Introdução

11. **Dado um array de números `[10, 20, 30, 40]`, use `map()` com uma Arrow Function para retornar um novo array com cada número multiplicado por 2.**

    ```javascript
    const numeros = [10, 20, 30, 40];
    const numerosDobrados = numeros.map(num => num * 2);
    console.log(numerosDobrados); // Saída: [20, 40, 60, 80]
    ```

12. **Dado um array de palavras `["casa", "bola", "carro", "sol"]`, use `filter()` com uma Arrow Function para retornar apenas as palavras com mais de 4 letras.**

    ```javascript
    const palavras = ["casa", "bola", "carro", "sol"];
    const palavrasLongas = palavras.filter(palavra => palavra.length > 4);
    console.log(palavrasLongas); // Saída: ["carro"]
    ```

13. **Dado um array de números `[1, 2, 3, 4, 5]`, use `reduce()` para calcular a soma de todos os elementos.**

    ```javascript
    const numeros = [1, 2, 3, 4, 5];
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    console.log(soma); // Saída: 15
    ```

14. **Dado um array de objetos `[{nome: "João", idade: 25}, {nome: "Maria", idade: 30}]`, use `map()` para retornar um array apenas com os nomes.**

    ```javascript
    const pessoas = [{nome: "João", idade: 25}, {nome: "Maria", idade: 30}];
    const nomes = pessoas.map(pessoa => pessoa.nome);
    console.log(nomes); // Saída: ["João", "Maria"]
    ```

15. **Dado o mesmo array de objetos do exercício 14, use `filter()` para retornar apenas as pessoas com idade superior a 28.**

    ```javascript
    const pessoas = [{nome: "João", idade: 25}, {nome: "Maria", idade: 30}];
    const maioresDe28 = pessoas.filter(pessoa => pessoa.idade > 28);
    console.log(maioresDe28); // Saída: [{nome: "Maria", idade: 30}]
    ```

---

## Nível Intermediário

### Funções Anônimas e Arrow Functions

16. **Crie uma Arrow Function que receba um array de números e retorne a soma de todos os números pares. Utilize `filter()` e `reduce()`.**

    ```javascript
    const somarPares = arr => {
      return arr.filter(num => num % 2 === 0)
                .reduce((acc, num) => acc + num, 0);
    };
    console.log(somarPares([1, 2, 3, 4, 5, 6])); // Saída: 12 (2 + 4 + 6)
    ```

17. **Implemente uma função que retorne uma Arrow Function. A função externa deve receber um `fator` e a Arrow Function interna deve receber um `numero`, retornando `numero * fator` (Closure).**

    ```javascript
    function criarMultiplicador(fator) {
      return numero => numero * fator;
    }
    const multiplicarPorCinco = criarMultiplicador(5);
    console.log(multiplicarPorCinco(10)); // Saída: 50
    ```

18. **Crie uma IIFE que declare uma variável `contador` e uma função `incrementar`. A IIFE deve retornar a função `incrementar`, permitindo que `contador` seja acessado e modificado apenas por `incrementar`.**

    ```javascript
    const getIncrementar = (function() {
      let contador = 0;
      return function() {
        contador++;
        return contador;
      };
    })();
    console.log(getIncrementar()); // Saída: 1
    console.log(getIncrementar()); // Saída: 2
    // console.log(contador); // Erro: contador is not defined
    ```

19. **Escreva uma Arrow Function que receba um objeto e retorne um novo objeto com as chaves e valores invertidos. Ex: `{a: 1, b: 2}` -> `{1: "a", 2: "b"}`.**

    ```javascript
    const inverterObjeto = obj => {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
      }, {});
    };
    console.log(inverterObjeto({a: 1, b: 2})); // Saída: { '1': 'a', '2': 'b' }
    ```

20. **Dada uma função `logar(mensagem)` e um array de funções `[func1, func2, func3]`, use `forEach` com uma função anônima para executar cada função do array, passando `logar` como callback para cada uma.**

    ```javascript
    const logar = mensagem => console.log("LOG: " + mensagem);

    const func1 = () => "Executando func1";
    const func2 = () => "Executando func2";
    const func3 = () => "Executando func3";

    const funcoes = [func1, func2, func3];

    funcoes.forEach(func => {
      logar(func());
    });
    // Saída:
    // LOG: Executando func1
    // LOG: Executando func2
    // LOG: Executando func3
    ```

### Callbacks e Assincronicidade

21. **Crie uma função `buscarDados(id, callback)` que simule uma requisição assíncrona. Ela deve usar `setTimeout` para simular um atraso de 1 segundo e, em seguida, chamar o `callback` com um objeto `{id: id, nome: "Dado " + id}`.**

    ```javascript
    function buscarDados(id, callback) {
      setTimeout(() => {
        const dado = { id: id, nome: "Dado " + id };
        callback(dado);
      }, 1000);
    }
    ```

22. **Utilize a função `buscarDados` do exercício 21 para buscar o dado com `id = 1` e, após receber o resultado, buscar o dado com `id = 2`. Use callbacks aninhados para demonstrar a sequência.**

    ```javascript
    buscarDados(1, dado1 => {
      console.log("Primeiro dado recebido:", dado1);
      buscarDados(2, dado2 => {
        console.log("Segundo dado recebido:", dado2);
        console.log("Ambos os dados foram processados.");
      });
    });
    // Saída (com atrasos):
    // Primeiro dado recebido: { id: 1, nome: 'Dado 1' }
    // Segundo dado recebido: { id: 2, nome: 'Dado 2' }
    // Ambos os dados foram processados.
    ```

23. **Refatore o exercício 22 para usar Promises (apenas a estrutura, sem implementar a Promise em `buscarDados`).**

    ```javascript
    // Supondo que buscarDados foi refatorada para retornar uma Promise:
    // function buscarDadosPromise(id) {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       const dado = { id: id, nome: "Dado " + id };
    //       resolve(dado);
    //     }, 1000);
    //   });
    // }

    // Exemplo de uso com Promises (assumindo buscarDadosPromise existe)
    // buscarDadosPromise(1)
    //   .then(dado1 => {
    //     console.log("Primeiro dado recebido:", dado1);
    //     return buscarDadosPromise(2);
    //   })
    //   .then(dado2 => {
    //     console.log("Segundo dado recebido:", dado2);
    //     console.log("Ambos os dados foram processados com Promises.");
    //   })
    //   .catch(error => console.error("Erro:", error));

    // Como o exercício pede apenas a estrutura, sem refatorar buscarDados, a solução seria:
    // Esta é uma representação conceitual, pois `buscarDados` original não retorna Promise.
    const buscarDadosComPromise = (id) => new Promise(resolve => buscarDados(id, resolve));

    buscarDadosComPromise(1)
      .then(dado1 => {
        console.log("Primeiro dado recebido (via Promise):", dado1);
        return buscarDadosComPromise(2);
      })
      .then(dado2 => {
        console.log("Segundo dado recebido (via Promise):", dado2);
        console.log("Ambos os dados foram processados com Promises.");
      })
      .catch(error => console.error("Erro:", error));
    ```

24. **Crie uma função `validarUsuario(usuario, senha, sucessoCallback, erroCallback)` que simule uma autenticação. Se `usuario === "admin"` e `senha === "123"`, chame `sucessoCallback`. Caso contrário, chame `erroCallback`.**

    ```javascript
    function validarUsuario(usuario, senha, sucessoCallback, erroCallback) {
      if (usuario === "admin" && senha === "123") {
        sucessoCallback("Autenticação bem-sucedida!");
      } else {
        erroCallback("Usuário ou senha inválidos.");
      }
    }

    validarUsuario("admin", "123",
      (msg) => console.log("Sucesso: " + msg),
      (err) => console.error("Erro: " + err)
    ); // Saída: Sucesso: Autenticação bem-sucedida!

    validarUsuario("user", "abc",
      (msg) => console.log("Sucesso: " + msg),
      (err) => console.error("Erro: " + err)
    ); // Saída: Erro: Usuário ou senha inválidos.
    ```

25. **Implemente um sistema de eventos simples. Crie um objeto `eventEmitter` com métodos `on(eventName, listener)` e `emit(eventName, data)`. Use funções anônimas como `listener`.**

    ```javascript
    const eventEmitter = {
      events: {},
      on: function(eventName, listener) {
        if (!this.events[eventName]) {
          this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
      },
      emit: function(eventName, data) {
        if (this.events[eventName]) {
          this.events[eventName].forEach(listener => listener(data));
        }
      }
    };

    eventEmitter.on("login", function(user) {
      console.log(`Usuário ${user} logado!`);
    });

    eventEmitter.on("logout", user => {
      console.log(`Usuário ${user} deslogado.`);
    });

    eventEmitter.emit("login", "Professor Flores"); // Saída: Usuário Professor Flores logado!
    eventEmitter.emit("logout", "Aluno X");      // Saída: Usuário Aluno X deslogado.
    eventEmitter.emit("cadastro", { nome: "Novo", email: "novo@email.com" }); // Nada acontece, sem listener
    ```

### Funções de Alta Ordem (HOFs) - Avançado

26. **Dado um array de alunos `[{nome: "Alice", nota: 8}, {nome: "Bob", nota: 5}, {nome: "Charlie", nota: 9}]`, use `filter()` para obter os aprovados (nota >= 7) e `map()` para retornar apenas os nomes em maiúsculas.**

    ```javascript
    const alunos = [
      {nome: "Alice", nota: 8},
      {nome: "Bob", nota: 5},
      {nome: "Charlie", nota: 9}
    ];

    const nomesAprovadosMaiusculas = alunos
      .filter(aluno => aluno.nota >= 7)
      .map(aluno => aluno.nome.toUpperCase());

    console.log(nomesAprovadosMaiusculas); // Saída: ["ALICE", "CHARLIE"]
    ```

27. **Dado um array de transações `[{valor: 100, tipo: "credito"}, {valor: 50, tipo: "debito"}, {valor: 200, tipo: "credito"}]`, use `reduce()` para calcular o saldo final (créditos somam, débitos subtraem).**

    ```javascript
    const transacoes = [
      {valor: 100, tipo: "credito"},
      {valor: 50, tipo: "debito"},
      {valor: 200, tipo: "credito"}
    ];

    const saldoFinal = transacoes.reduce((saldo, transacao) => {
      if (transacao.tipo === "credito") {
        return saldo + transacao.valor;
      } else if (transacao.tipo === "debito") {
        return saldo - transacao.valor;
      }
      return saldo;
    }, 0);

    console.log(saldoFinal); // Saída: 250 (100 - 50 + 200)
    ```

28. **Implemente uma HOF `compor(...funcoes)` que receba várias funções e retorne uma nova função que as execute em sequência, passando o resultado de uma para a próxima. Ex: `compor(dobrar, somarUm)(5)`.**

    ```javascript
    const compor = (...funcoes) => valorInicial => {
      return funcoes.reduce((resultado, func) => func(resultado), valorInicial);
    };

    const dobrar = num => num * 2;
    const somarUm = num => num + 1;
    const triplicar = num => num * 3;

    const dobrarSomarUm = compor(dobrar, somarUm);
    console.log(dobrarSomarUm(5)); // Saída: 11 (5 * 2 + 1)

    const processarCompleto = compor(dobrar, somarUm, triplicar);
    console.log(processarCompleto(2)); // Saída: 15 ((2 * 2 + 1) * 3)
    ```

29. **Crie uma HOF `agruparPor(array, propriedade)` que receba um array de objetos e uma string `propriedade`. Ela deve retornar um objeto onde as chaves são os valores únicos da `propriedade` e os valores são arrays de objetos que possuem essa propriedade. Ex: `agruparPor(produtos, "categoria")`.**

    ```javascript
    const agruparPor = (array, propriedade) => {
      return array.reduce((acumulador, item) => {
        const chave = item[propriedade];
        if (!acumulador[chave]) {
          acumulador[chave] = [];
        }
        acumulador[chave].push(item);
        return acumulador;
      }, {});
    };

    const produtos = [
      { id: 1, nome: 'Caneta', categoria: 'Papelaria' },
      { id: 2, nome: 'Caderno', categoria: 'Papelaria' },
      { id: 3, nome: 'Mouse', categoria: 'Informática' },
      { id: 4, nome: 'Teclado', categoria: 'Informática' },
      { id: 5, nome: 'Borracha', categoria: 'Papelaria' }
    ];

    const produtosAgrupados = agruparPor(produtos, "categoria");
    console.log(produtosAgrupados);
    /* Saída:
    {
      Papelaria: [
        { id: 1, nome: 'Caneta', categoria: 'Papelaria' },
        { id: 2, nome: 'Caderno', categoria: 'Papelaria' },
        { id: 5, nome: 'Borracha', categoria: 'Papelaria' }
      ],
      Informática: [
        { id: 3, nome: 'Mouse', categoria: 'Informática' },
        { id: 4, nome: 'Teclado', categoria: 'Informática' }
      ]
    }
    */
    ```

30. **Dado um array de strings `["banana", "maçã", "abacaxi", "uva", "laranja"]`, use `filter()` para selecionar as frutas que começam com 'a' e `map()` para retornar essas frutas com a primeira letra em maiúscula. Em seguida, use `reduce()` para concatená-las em uma única string separada por vírgulas.**

    ```javascript
    const frutas = ["banana", "maçã", "abacaxi", "uva", "laranja"];

    const resultado = frutas
      .filter(fruta => fruta.startsWith("a")) // [
abacaxi"]
      .map(fruta => fruta.charAt(0).toUpperCase() + fruta.slice(1)) // ["Abacaxi"]
      .reduce((acc, fruta) => acc ? `${acc}, ${fruta}` : fruta, "");

    console.log(resultado); // Saída: Abacaxi
    ```

---

## 👤 GitHub

[![Foto de Perfil](https://github.com/floresjcd.png?size=50)](https://github.com/floresjcd) 
**[@floresjcd](https://github.com/floresjcd)**