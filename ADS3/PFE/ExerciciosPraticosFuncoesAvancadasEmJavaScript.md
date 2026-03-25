

> **Curso:** Engenharia de Software / Tecnologia em Análise e Desenvolvimento de Sistemas  
> **Disciplina:** Programação Front-End    
> **Tema:**  Funções Avançadas em JavaScript - Exercícios Práticos     
> **Professor:** José Carlos Flores  
---

## Nível Básico

### Funções Anônimas e Arrow Functions

1.  Crie uma função anônima que receba dois números e retorne a soma deles. Atribua essa função a uma variável `somar` e execute-a.
2.  Converta a função do exercício 1 para uma Arrow Function de uma única linha.
3.  Escreva uma Arrow Function que não receba parâmetros e retorne a string "Olá, Mundo!".
4.  Crie uma função anônima que receba um array de strings e imprima cada string no console. Utilize `forEach` com essa função anônima.
5.  Desenvolva uma Arrow Function que receba um número e retorne `true` se for par, e `false` caso contrário.

### Callbacks

6.  Crie uma função `executarAposTempo(callback, tempo)` que receba uma função de callback e um tempo em milissegundos. A função deve executar o callback após o tempo especificado, usando `setTimeout`.
7.  Utilize a função `executarAposTempo` do exercício 6 para exibir a mensagem "Callback executado!" após 3 segundos.
8.  Escreva uma função `processarArray(arr, callback)` que receba um array e uma função de callback. Para cada elemento do array, a função deve aplicar o callback e retornar um novo array com os resultados.
9.  Use a função `processarArray` do exercício 8 para dobrar cada número em um array `[1, 2, 3, 4]`.
10. Simule um clique em um botão HTML (sem criar o HTML, apenas o JS) usando `setTimeout` para chamar uma função anônima que exiba um `alert`.

### Funções de Alta Ordem (HOFs) - Introdução

11. Dado um array de números `[10, 20, 30, 40]`, use `map()` com uma Arrow Function para retornar um novo array com cada número multiplicado por 2.
12. Dado um array de palavras `["casa", "bola", "carro", "sol"]`, use `filter()` com uma Arrow Function para retornar apenas as palavras com mais de 4 letras.
13. Dado um array de números `[1, 2, 3, 4, 5]`, use `reduce()` para calcular a soma de todos os elementos.
14. Dado um array de objetos `[{nome: "João", idade: 25}, {nome: "Maria", idade: 30}]`, use `map()` para retornar um array apenas com os nomes.
15. Dado o mesmo array de objetos do exercício 14, use `filter()` para retornar apenas as pessoas com idade superior a 28.

---

## Nível Intermediário

### Funções Anônimas e Arrow Functions

16. Crie uma Arrow Function que receba um array de números e retorne a soma de todos os números pares. Utilize `filter()` e `reduce()`.
17. Implemente uma função que retorne uma Arrow Function. A função externa deve receber um `fator` e a Arrow Function interna deve receber um `numero`, retornando `numero * fator` (Closure).
18. Crie uma IIFE que declare uma variável `contador` e uma função `incrementar`. A IIFE deve retornar a função `incrementar`, permitindo que `contador` seja acessado e modificado apenas por `incrementar`.
19. Escreva uma Arrow Function que receba um objeto e retorne um novo objeto com as chaves e valores invertidos. Ex: `{a: 1, b: 2}` -> `{1: "a", 2: "b"}`.
20. Dada uma função `logar(mensagem)` e um array de funções `[func1, func2, func3]`, use `forEach` com uma função anônima para executar cada função do array, passando `logar` como callback para cada uma.

### Callbacks e Assincronicidade

21. Crie uma função `buscarDados(id, callback)` que simule uma requisição assíncrona. Ela deve usar `setTimeout` para simular um atraso de 1 segundo e, em seguida, chamar o `callback` com um objeto `{id: id, nome: "Dado " + id}`.
22. Utilize a função `buscarDados` do exercício 21 para buscar o dado com `id = 1` e, após receber o resultado, buscar o dado com `id = 2`. Use callbacks aninhados para demonstrar a sequência.
23. Refatore o exercício 22 para usar Promises (apenas a estrutura, sem implementar a Promise em `buscarDados`).
24. Crie uma função `validarUsuario(usuario, senha, sucessoCallback, erroCallback)` que simule uma autenticação. Se `usuario === "admin"` e `senha === "123"`, chame `sucessoCallback`. Caso contrário, chame `erroCallback`.
25. Implemente um sistema de eventos simples. Crie um objeto `eventEmitter` com métodos `on(eventName, listener)` e `emit(eventName, data)`. Use funções anônimas como `listener`.

### Funções de Alta Ordem (HOFs) - Avançado

26. Dado um array de alunos `[{nome: "Alice", nota: 8}, {nome: "Bob", nota: 5}, {nome: "Charlie", nota: 9}]`, use `filter()` para obter os aprovados (nota >= 7) e `map()` para retornar apenas os nomes em maiúsculas.
27. Dado um array de transações `[{valor: 100, tipo: "credito"}, {valor: 50, tipo: "debito"}, {valor: 200, tipo: "credito"}]`, use `reduce()` para calcular o saldo final (créditos somam, débitos subtraem).
28. Implemente uma HOF `compor(...funcoes)` que receba várias funções e retorne uma nova função que as execute em sequência, passando o resultado de uma para a próxima. Ex: `compor(dobrar, somarUm)(5)`.
29. Crie uma HOF `agruparPor(array, propriedade)` que receba um array de objetos e uma string `propriedade`. Ela deve retornar um objeto onde as chaves são os valores únicos da `propriedade` e os valores são arrays de objetos que possuem essa propriedade.
    Ex: `agruparPor(produtos, "categoria")`.
30. Dado um array de strings `["banana", "maçã", "abacaxi", "uva", "laranja"]`, use `filter()` para selecionar as frutas que começam com 'a' e `map()` para retornar essas frutas com a primeira letra em maiúscula. Em seguida, use `reduce()` para concatená-las em uma única string separada por vírgulas.


---

## 👤 GitHub

[![Foto de Perfil](https://github.com/floresjcd.png?size=50)](https://github.com/floresjcd) 
**[@floresjcd](https://github.com/floresjcd)**