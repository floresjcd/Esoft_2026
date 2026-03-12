
> **Curso:** Engenharia de Software / Tecnologia em Análise e Desenvolvimento de Sistemas  
> **Disciplina:** Programação Front-End    
> **Tema:**  Ambiente para a prática de desenvolvimento JavaScript    
> **Professor:** José Carlos Flores  
> **Objetivo:** Instalação e configuração de um ambiente de desenvolvimento JavaScript;
---

A seguir apresento um **procedimento completo** para que os alunos montem um **ambiente de desenvolvimento adequado para praticar JavaScript** em seus computadores.

---

# Procedimento para Montagem do Ambiente de Desenvolvimento JavaScript

## 1. Objetivo

Este procedimento tem como objetivo orientar os alunos na **instalação e configuração das ferramentas necessárias para desenvolver e executar programas em JavaScript**, tanto no navegador quanto em ambiente de execução local utilizando **Node.js**.

---

# 2. Ferramentas Necessárias

Para o desenvolvimento em JavaScript utilizaremos as seguintes ferramentas:

1. **Editor de código**

   * Visual Studio Code

2. **Ambiente de execução JavaScript**

   * Node.js

3. **Navegador Web**

   * Google Chrome ou
   * Mozilla Firefox

---

# 3. Instalação do Node.js

O Node.js permite executar códigos JavaScript **fora do navegador**, sendo essencial para o desenvolvimento moderno.

### Passo 1 — Acessar o site oficial

Acesse o site oficial do **Node.js**:

[https://nodejs.org](https://nodejs.org)

### Passo 2 — Baixar a versão recomendada

Selecione a versão **LTS (Long Term Support)**.

Esta versão é mais estável e indicada para estudantes.

### Passo 3 — Instalar o software

Execute o instalador baixado e siga os passos:

1. Clique em **Next**
2. Aceite os termos de licença
3. Mantenha as configurações padrão
4. Clique em **Install**

Após finalizar, clique em **Finish**.

---

# 4. Verificação da Instalação

Após instalar o Node.js, é necessário confirmar se ele está funcionando.

### Passo 1 — Abrir o terminal

No Windows:

* Pressione **Win + R**
* Digite:

```
cmd
```

### Passo 2 — Verificar versão do Node.js

Digite o comando:

```
node -v
```

Se a instalação estiver correta, aparecerá algo semelhante a:

```
v20.10.0
```

### Passo 3 — Verificar o gerenciador de pacotes

Digite:

```
npm -v
```

O **npm** é o gerenciador de pacotes que acompanha o Node.js.

---

# 5. Instalação do Editor de Código

Para escrever os programas utilizaremos o editor **Visual Studio Code**.

### Passo 1 — Acessar o site

[https://code.visualstudio.com](https://code.visualstudio.com)

### Passo 2 — Baixar o instalador

Selecione a versão para seu sistema operacional.

### Passo 3 — Instalar

Durante a instalação marque as opções:

✔ Add to PATH
✔ Add "Open with Code"

Isso facilita o uso do editor.

---

# 6. Instalação de Extensões no Visual Studio Code

Abra o **Visual Studio Code**.

No menu lateral clique em **Extensions** e instale:

### Extensões recomendadas

1. **JavaScript (ES6) Code Snippets**
2. **Prettier – Code Formatter**
3. **Live Server**

Essas extensões auxiliam na escrita e visualização do código.

---

# 7. Criação do Primeiro Projeto JavaScript

Agora criaremos um pequeno projeto para testar o ambiente.

### Passo 1 — Criar uma pasta

Crie uma pasta chamada:

```
javascript-aula1
```

### Passo 2 — Abrir a pasta no VS Code

No menu:

```
File → Open Folder
```

Selecione a pasta criada.

---

# 8. Criar o Primeiro Arquivo JavaScript

Crie um arquivo chamado:

```
app.js
```

Dentro dele escreva:

```javascript
console.log("Olá, mundo!");
console.log("Ambiente JavaScript configurado com sucesso.");
```

---

# 9. Executar o Programa

Abra o **terminal integrado** do VS Code.

Menu:

```
Terminal → New Terminal
```

Digite:

```
node app.js
```

Resultado esperado:

```
Olá, mundo!
Ambiente JavaScript configurado com sucesso.
```

---

# 10. Executando JavaScript no Navegador

Também é possível executar JavaScript em páginas web.

Crie um arquivo chamado:

```
index.html
```

Conteúdo:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Teste JavaScript</title>
</head>
<body>

<h1>Teste de JavaScript</h1>

<script>
    alert("JavaScript funcionando!");
</script>

</body>
</html>
```

Abra o arquivo no navegador **Google Chrome**.

Se aparecer uma mensagem na tela, o JavaScript está funcionando.

---

# 11. Estrutura Recomendada de Projeto

Uma organização comum de projeto é:

```
meu-projeto
│
├── index.html
├── js
│   └── app.js
├── css
│   └── style.css
```

Essa organização separa:

* **HTML** → estrutura
* **CSS** → estilos
* **JavaScript** → lógica do programa

---

# 12. Boas Práticas Iniciais

Para um ambiente de desenvolvimento adequado recomenda-se:

* Utilizar nomes de arquivos claros
* Organizar pastas por tipo de arquivo
* Utilizar **console.log()** para depuração
* Comentar partes importantes do código

Exemplo:

```javascript
// Exibe mensagem no console
console.log("Teste do programa");
```

---

# Conclusão

Após realizar este procedimento, o aluno terá um **ambiente completo para desenvolvimento em JavaScript**, composto por:

* Editor de código profissional
* Ambiente de execução JavaScript local
* Navegador para testes de aplicações web

Essas ferramentas permitirão o desenvolvimento de **scripts, aplicações web e projetos utilizando JavaScript moderno**.

---

**Bons estudos!**

---

## 👤 GitHub

[![Foto de Perfil](https://github.com/floresjcd.png?size=50)](https://github.com/floresjcd) 
**[@floresjcd](https://github.com/floresjcd)**

