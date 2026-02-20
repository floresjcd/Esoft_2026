

> **Curso:** Engenharia de Software  
> **Disciplina:** Análise e Projeto Orientado a Objetos    
> **Tema:**  Instalação do OpenJDK no Windows 11    
> **Professor:** José Carlos Flores  
> **Objetivo:** Instalação e configuração do **OpenJDK** no sistema operacional Linux para garantir que seu ambiente de desenvolvimento Java esteja pronto para uso.
---

# Manual de Instalação do OpenJDK no Linux

Este manual foi elaborado para orientar você, passo a passo, no processo de instalação e configuração do **OpenJDK** em sistemas operacionais baseados em Linux. Como seu professor, organizei as instruções para as distribuições mais comuns, garantindo que seu ambiente Java esteja pronto para o desenvolvimento.

---

## 1. Introdução

No ecossistema Linux, o **OpenJDK** é a escolha padrão para desenvolvimento Java. A instalação é geralmente realizada através dos gerenciadores de pacotes nativos de cada distribuição, o que simplifica o processo de atualização e manutenção.

---

## 2. Instalação via Gerenciador de Pacotes

### Distribuições baseadas em Debian/Ubuntu (Ubuntu, Linux Mint, Kali)
1.  Abra o terminal (`Ctrl + Alt + T`).
2.  Atualize o índice de pacotes:
    ```bash
    sudo apt update
    ```
3.  Instale o OpenJDK 21 (LTS):
    ```bash
    sudo apt install openjdk-21-jdk
    ```

### Distribuições baseadas em Red Hat/Fedora (Fedora, CentOS, RHEL)
1.  Abra o terminal.
2.  Instale o OpenJDK 21 (LTS) usando o `dnf` ou `yum`:
    ```bash
    sudo dnf install java-21-openjdk-devel
    ```

### Distribuições baseadas em Arch Linux
1.  Abra o terminal.
2.  Instale o pacote oficial:
    ```bash
    sudo pacman -S jdk21-openjdk
    ```

---

## 3. Gerenciando Múltiplas Versões (Opcional)

Se você tiver várias versões do Java instaladas, pode alternar entre elas facilmente:

*   **No Ubuntu/Debian:**
    ```bash
    sudo update-alternatives --config java
    ```
    Escolha o número correspondente à versão desejada e pressione Enter.

---

## 4. Configuração das Variáveis de Ambiente

Para que o sistema e outras ferramentas (como Maven ou Gradle) reconheçam o Java, é importante configurar a variável `JAVA_HOME`.

1.  Descubra o caminho de instalação:
    ```bash
    readlink -f $(which java)
    ```
    *(O caminho geralmente é algo como `/usr/lib/jvm/java-21-openjdk-amd64/bin/java`. O JAVA_HOME será o caminho até a pasta antes de `/bin/java`)*.

2.  Edite o arquivo de perfil do seu shell (ex: `.bashrc` para Bash ou `.zshrc` para Zsh):
    ```bash
    nano ~/.bashrc
    ```
3.  Adicione as seguintes linhas ao final do arquivo:
    ```bash
    export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
    export PATH=$JAVA_HOME/bin:$PATH
    ```
4.  Salve o arquivo (`Ctrl + O`, `Enter`) e saia (`Ctrl + X`).
5.  Aplique as alterações:
    ```bash
    source ~/.bashrc
    ```

---

## 5. Verificação da Instalação

Após a instalação, verifique se o ambiente está correto:

1.  Verifique a versão do Java:
    ```bash
    java -version
    ```
2.  Verifique o compilador:
    ```bash
    javac -version
    ```
3.  Confirme a variável de ambiente:
    ```bash
    echo $JAVA_HOME
    ```

---

## 6. Tabela de Comandos por Distribuição

| Distribuição | Comando de Instalação | Gerenciador |
| :--- | :--- | :--- |
| **Ubuntu/Debian** | `sudo apt install openjdk-21-jdk` | apt |
| **Fedora** | `sudo dnf install java-21-openjdk-devel` | dnf |
| **Arch Linux** | `sudo pacman -S jdk21-openjdk` | pacman |
| **CentOS/RHEL** | `sudo yum install java-21-openjdk-devel` | yum |

---

## Conclusão

O OpenJDK foi instalado e configurado com sucesso no seu sistema Linux. O uso do terminal torna o processo rápido e eficiente, permitindo que você foque no que realmente importa: programar.


**Bons estudos!**

---

## 👤 GitHub

[![Foto de Perfil](https://github.com/floresjcd.png?size=50)](https://github.com/floresjcd) 
**[@floresjcd](https://github.com/floresjcd)**
