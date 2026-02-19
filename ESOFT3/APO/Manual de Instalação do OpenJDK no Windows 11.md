
> **Curso:** Engenharia de Software  
> **Disciplina:** Análise e Projeto Orientado a Objetos    
> **Tema:**  Instalação do OpenJDK no Windows 11    
> **Professor:** José Carlos Flores  
> **Objetivo:** Instalação e configuração do **OpenJDK** no sistema operacional Windows 11 para garantir que seu ambiente de desenvolvimento Java esteja pronto para uso.
---


# Manual de Instalação do OpenJDK no Windows 11

Este manual foi elaborado para orientar você, passo a passo, no processo de instalação e configuração do **OpenJDK** no sistema operacional Windows 11. Como seu professor, organizei as instruções de forma clara e técnica para garantir que seu ambiente de desenvolvimento Java esteja pronto para uso.

---

## 1. Introdução

O **OpenJDK** (Open Java Development Kit) é a implementação de referência de código aberto da plataforma Java SE. Para desenvolvedores, ele é essencial para compilar e executar aplicações Java. Neste guia, utilizaremos a versão **LTS (Long-Term Support)** mais recente recomendada para estabilidade.

---

## 2. Passo a Passo da Instalação

### Passo 1: Download do OpenJDK
Existem diversas distribuições confiáveis do OpenJDK. Recomendo o uso do **Eclipse Temurin (da Adoptium)** ou o **Microsoft Build of OpenJDK** por oferecerem instaladores simplificados para Windows.

1.  Acesse o site oficial da [Adoptium](https://adoptium.net/).
2.  Selecione a versão mais recente do **JDK 21 (LTS)**.
3.  Escolha o sistema operacional **Windows** e a arquitetura **x64**.
4.  Clique no botão de download para o arquivo com extensão **.msi** (Windows Installer).

### Passo 2: Execução do Instalador
1.  Localize o arquivo baixado em sua pasta de downloads e dê um clique duplo para iniciar.
2.  Na tela de boas-vindas, clique em **Next**.
3.  **Importante:** Na tela de seleção de recursos, certifique-se de que as seguintes opções estejam marcadas para serem instaladas no disco rígido local:
    *   *Add to PATH*
    *   *Set JAVA_HOME variable*
4.  Clique em **Next** e depois em **Install**.
5.  Se o Windows solicitar permissão de administrador, clique em **Sim**.
6.  Ao finalizar, clique em **Finish**.

---

## 3. Configuração Manual das Variáveis de Ambiente
Caso você tenha optado por baixar o arquivo **.zip** em vez do instalador, ou se as variáveis não foram configuradas automaticamente, siga os passos abaixo:

### Configurando o JAVA_HOME
1.  Abra o menu Iniciar e digite "Editar as variáveis de ambiente do sistema" e pressione Enter.
2.  Na aba **Avançado**, clique no botão **Variáveis de Ambiente**.
3.  Em **Variáveis do Sistema**, clique em **Novo**.
4.  No campo *Nome da variável*, digite: `JAVA_HOME`.
5.  No campo *Valor da variável*, insira o caminho da pasta onde o JDK foi extraído (ex: `C:\Program Files\Eclipse Adoptium\jdk-21.x.x`).
6.  Clique em **OK**.

### Adicionando ao Path
1.  Ainda na janela de Variáveis de Ambiente, em **Variáveis do Sistema**, localize a variável **Path** e clique em **Editar**.
2.  Clique em **Novo** e digite: `%JAVA_HOME%\bin`.
3.  Clique em **OK** em todas as janelas abertas.

---

## 4. Verificação da Instalação

Para garantir que tudo foi configurado corretamente, siga estes passos:

1.  Pressione as teclas `Win + R`, digite `cmd` e pressione Enter para abrir o **Prompt de Comando**.
2.  Digite o seguinte comando e pressione Enter:
    ```bash
    java -version
    ```
3.  O resultado esperado deve exibir informações sobre a versão do OpenJDK instalada, como no exemplo abaixo:
    > openjdk version "21.0.x" ...
    > OpenJDK Runtime Environment Temurin-21.0.x...
4.  Verifique também o compilador com:
    ```bash
    javac -version
    ```

---

## 5. Tabela de Resumo de Comandos e Variáveis

| Item | Descrição | Valor Exemplo |
| :--- | :--- | :--- |
| **JAVA_HOME** | Variável que aponta para o diretório raiz do JDK. | `C:\Java\jdk-21` |
| **Path** | Variável que permite executar comandos Java de qualquer pasta. | `%JAVA_HOME%\bin` |
| **java -version** | Comando para verificar a versão do ambiente de execução. | N/A |
| **javac -version** | Comando para verificar a versão do compilador Java. | N/A |

---

## Conclusão

Você concluiu com sucesso a instalação do OpenJDK no Windows 11. Agora seu computador está preparado para o desenvolvimento de software utilizando a linguagem Java. Se encontrar qualquer dificuldade, revise os passos de configuração das variáveis de ambiente.

**Bons estudos!**

---

## 👤 GitHub

[![Foto de Perfil](https://github.com/floresjcd.png?size=50)](https://github.com/floresjcd) 
**[@floresjcd](https://github.com/floresjcd)**

