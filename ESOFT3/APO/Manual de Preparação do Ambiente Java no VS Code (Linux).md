
> **Curso:** Engenharia de Software  
> **Disciplina:** Análise e Projeto Orientado a Objetos    
> **Professor:** José Carlos Flores  
> **Tema:**  Preparação do Ambiente Java no VS Code (Linux)    
> **Objetivo:** Fornecer um guia passo a passo detalhado para configurar seu ambiente de desenvolvimento Java no Linux utilizando o Visual Studio Code..
---

# Manual de Preparação do Ambiente Java no VS Code (Linux)

Este manual fornece um guia passo a passo detalhado para configurar seu ambiente de desenvolvimento Java no Linux (Ubuntu, Debian, Fedora e outras distribuições) utilizando o Visual Studio Code.

## 1. Introdução
Para desenvolver e testar aplicações Java no Linux, você precisará de:
1.  **Java Development Kit (JDK)**: O ambiente de desenvolvimento (compilador e bibliotecas).
2.  **Visual Studio Code (VS Code)**: O editor de código.
3.  **Extension Pack for Java**: O conjunto de extensões oficiais da Microsoft.

---

## 2. Passo 1: Instalação do JDK (Java Development Kit)
No Linux, a forma mais comum de instalar o Java é através do gerenciador de pacotes da sua distribuição. Recomendamos o **OpenJDK**, que é a implementação de código aberto padrão.

### No Ubuntu / Debian / Mint (APT):
Abra o terminal e execute:
```bash
sudo apt update
sudo apt install default-jdk
```
Para instalar uma versão específica (ex: Java 21):
```bash
sudo apt install openjdk-21-jdk
```

### No Fedora / Red Hat / CentOS (DNF):
```bash
sudo dnf install java-latest-openjdk-devel
```

### No Arch Linux (Pacman):
```bash
sudo pacman -S jdk-openjdk
```

### Verificação da Instalação
Após a instalação, verifique se o Java está acessível:
```bash
java -version
javac -version
```

---

## 3. Passo 2: Configuração das Variáveis de Ambiente
Muitas ferramentas (como Maven e Gradle) precisam da variável `JAVA_HOME`.

1.  Descubra onde o Java foi instalado:
    ```bash
    readlink -f $(which java)
    ```
    *(Geralmente em `/usr/lib/jvm/java-x-openjdk-amd64`)*.
2.  Abra o arquivo de configuração do seu shell (ex: `.bashrc` ou `.zshrc`):
    ```bash
    nano ~/.bashrc
    ```
3.  Adicione as seguintes linhas ao final do arquivo:
    ```bash
    export JAVA_HOME=/usr/lib/jvm/default-java  # Ajuste para o caminho real se necessário
    export PATH=$JAVA_HOME/bin:$PATH
    ```
4.  Aplique as alterações:
    ```bash
    source ~/.bashrc
    ```

---

## 4. Passo 3: Instalação do Visual Studio Code
Existem várias formas de instalar o VS Code no Linux:

1.  **Via Pacote (.deb ou .rpm)**: Baixe em [code.visualstudio.com](https://code.visualstudio.com/download) e instale com `sudo dpkg -i` ou `sudo dnf install`.
2.  **Via Snap (Ubuntu e outros)**:
    ```bash
    sudo snap install --classic code
    ```
3.  **Via Flatpak**:
    ```bash
    flatpak install flathub com.visualstudio.code
    ```

---

## 5. Passo 4: Configuração das Extensões Java
1.  Abra o VS Code.
2.  Pressione `Ctrl+Shift+X` para abrir a aba de Extensões.
3.  Pesquise por **"Extension Pack for Java"** e clique em **Install**.
4.  Este pacote instalará automaticamente o suporte para linguagem, depurador, Maven e testes.

---

## 6. Passo 5: Criando e Testando sua Primeira Aplicação
1.  No VS Code, pressione `Ctrl+Shift+P`.
2.  Digite **"Java: Create Java Project"**.
3.  Selecione **"No build tools"**.
4.  Escolha uma pasta e dê um nome ao projeto (ex: `OlaLinux`).
5.  Abra o arquivo `App.java`.
6.  Clique em **Run** acima do método `main` ou pressione `F5`.

---

## 7. Solução de Problemas Comuns
*   **Permissão Negada**: Se o VS Code não conseguir ler arquivos, verifique as permissões da pasta do projeto com `chmod`.
*   **Múltiplas Versões de Java**: Use o comando `sudo update-alternatives --config java` para alternar entre diferentes versões do JDK instaladas no sistema.
*   **Ambiente Wayland**: Se o VS Code apresentar falhas visuais no Wayland, tente iniciá-lo com flags específicas ou use a versão estável mais recente.

---

## 8. Conclusão
Seu ambiente Linux está agora configurado para desenvolvimento Java de alto desempenho. O uso do terminal combinado com o poder do VS Code torna o Linux uma das melhores plataformas para programadores Java.

**Bons estudos!**
---

## 👤 GitHub

[![Foto de Perfil](https://github.com/floresjcd.png?size=50)](https://github.com/floresjcd) 
**[@floresjcd](https://github.com/floresjcd)**