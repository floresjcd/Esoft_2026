

> **Curso:** Engenharia de Software  
> **Disciplina:** Análise e Projeto Orientado a Objetos    
> **Professor:** José Carlos Flores  
> **Tema:**  Preparação do Ambiente Java no VS Code (Windows 11)    
> **Objetivo:** Fornecer um guia passo a passo detalhado para configurar seu ambiente de desenvolvimento Java no Windows 11 utilizando o Visual Studio Code..
---



# Manual de Preparação do Ambiente Java no VS Code (Windows 11)

Este manual fornece um guia passo a passo detalhado para configurar seu ambiente de desenvolvimento Java no Windows 11 utilizando o Visual Studio Code.

## 1. Introdução
Para desenvolver e testar aplicações Java no VS Code, você precisará de três componentes principais:
1.  **Java Development Kit (JDK)**: O ambiente de execução e ferramentas de compilação.
2.  **Visual Studio Code (VS Code)**: O editor de código.
3.  **Extension Pack for Java**: Um conjunto de extensões que adiciona suporte à linguagem Java no VS Code.

---

## 2. Passo 1: Instalação do JDK (Java Development Kit)
O JDK é essencial para compilar e rodar código Java.

1.  Acesse o site oficial da [Oracle Java](https://www.oracle.com/java/technologies/downloads/) ou utilize uma distribuição OpenJDK como o [Adoptium (Eclipse Temurin)](https://adoptium.net/).
2.  **Recomendação**: Para o Windows 11, baixe a versão **LTS (Long Term Support)** mais recente (atualmente JDK 17, 21 ou superior).
3.  Escolha o instalador **x64 MSI Installer** ou **x64 Installer**.
4.  Execute o arquivo baixado e siga as instruções do assistente de instalação.
    *   *Dica*: Anote o caminho da instalação (geralmente `C:\Program Files\Java\jdk-xx`).

### Configuração das Variáveis de Ambiente
Embora muitos instaladores façam isso automaticamente, é importante verificar:
1.  No menu Iniciar, pesquise por "Editar as variáveis de ambiente do sistema".
2.  Clique em **Variáveis de Ambiente**.
3.  Em "Variáveis do Sistema", clique em **Novo** para criar a variável `JAVA_HOME` com o caminho do seu JDK.
4.  Encontre a variável `Path`, selecione-a, clique em **Editar** e adicione `%JAVA_HOME%\bin`.

---

## 3. Passo 2: Instalação do Visual Studio Code
1.  Acesse [code.visualstudio.com](https://code.visualstudio.com/).
2.  Clique no botão **Download for Windows**.
3.  Execute o instalador e aceite os termos.
4.  **Importante**: Na tela de tarefas adicionais, marque as opções:
    *   Adicionar ação "Abrir com Code" ao menu de contexto do Windows Explorer.
    *   **Adicionar ao PATH (requer reinicialização)**.

---

## 4. Passo 3: Configuração das Extensões Java
O VS Code puro não "entende" Java nativamente. Precisamos das extensões certas.

1.  Abra o VS Code.
2.  Clique no ícone de **Extensões** na barra lateral esquerda (ou pressione `Ctrl+Shift+X`).
3.  Pesquise por **"Extension Pack for Java"** (publicado pela Microsoft).
4.  Clique em **Install**. Este pacote inclui:
    *   Language Support for Java™ by Red Hat
    *   Debugger for Java
    *   Test Runner for Java
    *   Maven for Java
    *   Project Manager for Java

---

## 5. Passo 4: Criando e Testando sua Primeira Aplicação
Agora vamos garantir que tudo está funcionando.

1.  No VS Code, pressione `Ctrl+Shift+P` para abrir a Paleta de Comandos.
2.  Digite **"Java: Create Java Project"** e selecione.
3.  Escolha **"No build tools"** para um projeto simples.
4.  Selecione uma pasta no seu computador para salvar o projeto.
5.  Dê um nome ao projeto (ex: `OlaMundo`).
6.  O VS Code criará uma estrutura básica com um arquivo `App.java`.
7.  Abra o arquivo `App.java` e você verá um código "Hello World".
8.  Clique no botão **Run** (ícone de play) no canto superior direito ou pressione `F5`.

---

## 6. Solução de Problemas Comuns
*   **Comando 'java' não reconhecido**: Verifique se o PATH foi configurado corretamente e reinicie o computador.
*   **Versão do JDK incompatível**: O VS Code geralmente requer um JDK 17 ou superior para rodar as próprias extensões, embora você possa compilar projetos para versões anteriores.
*   **Lentidão no IntelliSense**: Na primeira vez que abrir um projeto Java, o VS Code precisará baixar o servidor de linguagem (Language Server). Aguarde a barra de progresso no canto inferior direito concluir.

---

## 7. Conclusão
Seu ambiente Windows 11 está pronto para o desenvolvimento Java profissional. Você agora pode criar, depurar e testar suas aplicações diretamente no VS Code.

---

## 👤 GitHub

[![Foto de Perfil](https://github.com/floresjcd.png?size=50)](https://github.com/floresjcd) 
**[@floresjcd](https://github.com/floresjcd)**
