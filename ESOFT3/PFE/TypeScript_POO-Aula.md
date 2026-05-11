> **Curso:** Engenharia de Software / Tecnologia em Análise e Desenvolvimento de Sistemas  
> **Disciplina:** Programação Front-End    
> **Tema:**  Programação Orientada a Objetos em TypeScript    
> **Professor:** José Carlos Flores  

---

## 1. INTRODUÇÃO À PROGRAMAÇÃO ORIENTADA A OBJETOS

A Programação Orientada a Objetos (POO) constitui um paradigma de programação que organiza o desenvolvimento de software em torno de "objetos" ao invés de funções e lógica. Estes objetos representam entidades do mundo real ou conceitos abstratos, combinando dados (atributos) e comportamentos (métodos) em unidades coesas.

No contexto do desenvolvimento Front-End moderno, o TypeScript emerge como uma ferramenta essencial, oferecendo tipagem estática opcional sobre o JavaScript e fornecendo suporte robusto aos princípios da POO. Esta característica torna o código mais previsível, manutenível e escalável, especialmente em aplicações de grande porte.

---

## 2. CLASSES: A BASE DA POO

### 2.1 Conceito Fundamental

Uma classe funciona como um molde ou blueprint a partir do qual objetos são criados. Ela define a estrutura e o comportamento que os objetos derivados dessa classe possuirão.

```typescript
// Sintaxe básica de uma classe
class Pessoa {
    // Atributos (propriedades)
    nome: string;
    idade: number;
    
    // Métodos (comportamentos)
    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
```

### 2.2 Atributos e Métodos

**Atributos** representam as características ou estados de um objeto. São variáveis declaradas dentro da classe que armazenam dados específicos de cada instância.

**Métodos** definem as ações que um objeto pode realizar. São funções associadas à classe que operam sobre os atributos.

```typescript
class Produto {
    // Atributos
    codigo: string;
    nome: string;
    preco: number;
    quantidadeEmEstoque: number;
    
    // Método para calcular valor total em estoque
    calcularValorEstoque(): number {
        return this.preco * this.quantidadeEmEstoque;
    }
    
    // Método para adicionar produtos ao estoque
    adicionarEstoque(quantidade: number): void {
        this.quantidadeEmEstoque += quantidade;
        console.log(`Adicionado ${quantidade} unidades. Total: ${this.quantidadeEmEstoque}`);
    }
    
    // Método para remover produtos do estoque
    removerEstoque(quantidade: number): boolean {
        if (quantidade <= this.quantidadeEmEstoque) {
            this.quantidadeEmEstoque -= quantidade;
            return true;
        }
        console.log("Quantidade insuficiente em estoque!");
        return false;
    }
}

// Utilização da classe
const produto1 = new Produto();
produto1.codigo = "P001";
produto1.nome = "Notebook Dell";
produto1.preco = 4500.00;
produto1.quantidadeEmEstoque = 10;

console.log(produto1.calcularValorEstoque()); // Saída: 45000
produto1.adicionarEstoque(5); // Saída: Adicionado 5 unidades. Total: 15
```

---

## 3. MODIFICADORES DE VISIBILIDADE

Os modificadores de acesso controlam a visibilidade e o acesso aos atributos e métodos de uma classe, implementando o princípio de encapsulamento.

### 3.1 Public (público)

Membros declarados como `public` podem ser acessados de qualquer lugar, tanto dentro quanto fora da classe. Este é o modificador padrão quando nenhum é especificado.

```typescript
class ContaBancaria {
    public numero: string;
    public titular: string;
    private saldo: number; // Atributo privado
    
    constructor(numero: string, titular: string, saldoInicial: number) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    
    public getSaldo(): number {
        return this.saldo;
    }
    
    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado.`);
        }
    }
}

const conta = new ContaBancaria("12345-6", "Maria Silva", 1000);
console.log(conta.titular); // Acesso permitido: Maria Silva
conta.depositar(500); // Método público acessível
// conta.saldo = 5000; // ERRO: propriedade privada não pode ser acessada diretamente
```

### 3.2 Private (privado)

Membros `private` só podem ser acessados dentro da própria classe onde foram declarados. Este modificador protege dados sensíveis e garante a integridade do objeto.

```typescript
class Funcionario {
    private cpf: string;
    private salario: number;
    public nome: string;
    
    constructor(cpf: string, nome: string, salario: number) {
        this.cpf = cpf;
        this.nome = nome;
        this.salario = salario;
    }
    
    // Getter para acessar o salário de forma controlada
    public getSalario(): number {
        return this.salario;
    }
    
    // Setter para modificar o salário com validação
    public setSalario(novoSalario: number): boolean {
        if (novoSalario > 0) {
            this.salario = novoSalario;
            return true;
        }
        console.log("Salário inválido!");
        return false;
    }
    
    // Método interno privado
    private calcularINSS(): number {
        return this.salario * 0.11;
    }
    
    public getSalarioLiquido(): number {
        return this.salario - this.calcularINSS();
    }
}

const func1 = new Funcionario("123.456.789-00", "João Santos", 5000);
console.log(func1.nome); // Acesso permitido
console.log(func1.getSalarioLiquido()); // Acesso permitido: 4450
// console.log(func1.cpf); // ERRO: propriedade privada
// func1.calcularINSS(); // ERRO: método privado
```

### 3.3 Protected (protegido)

O modificador `protected` permite acesso dentro da classe declarante e também em classes derivadas (subclasses). É fundamental para implementação de herança.

```typescript
class Animal {
    protected nome: string;
    protected idade: number;
    
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    
    protected emitirSomBase(): string {
        return "Som genérico de animal";
    }
    
    public apresentar(): void {
        console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}

class Cachorro extends Animal {
    private raca: string;
    
    constructor(nome: string, idade: number, raca: string) {
        super(nome, idade);
        this.raca = raca;
    }
    
    public emitirSom(): void {
        // Acesso permitido a membros protected da classe pai
        console.log(`${this.nome} diz: Au Au!`);
        console.log(`Som base: ${this.emitirSomBase()}`);
    }
    
    public getInformacoes(): string {
        return `${this.nome}, ${this.idade} anos, ${this.raca}`;
    }
}

const dog1 = new Cachorro("Rex", 3, "Pastor Alemão");
dog1.apresentar(); // Eu sou Rex e tenho 3 anos.
dog1.emitirSom(); // Rex diz: Au Au!
console.log(dog1.getInformacoes());
// dog1.nome = "Teste"; // ERRO: propriedade protected não acessível externamente
```

### 3.4 Tabela Resumo dos Modificadores

| Modificador | Acesso na Classe | Acesso em Subclasses | Acesso Externo |
|-------------|------------------|----------------------|----------------|
| `public`    | ✓                | ✓                    | ✓              |
| `protected` | ✓                | ✓                    | ✗              |
| `private`   | ✓                | ✗                    | ✗              |

---

## 4. CONSTRUTOR

O construtor é um método especial executado automaticamente quando um novo objeto é instanciado. Sua função principal é inicializar os atributos do objeto com valores iniciais.

### 4.1 Construtor Básico

```typescript
class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    disponivel: boolean;
    
    // Construtor
    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = true;
    }
    
    public emprestar(): boolean {
        if (this.disponivel) {
            this.disponivel = false;
            console.log(`"${this.titulo}" foi emprestado.`);
            return true;
        }
        console.log(`"${this.titulo}" não está disponível.`);
        return false;
    }
    
    public devolver(): void {
        this.disponivel = true;
        console.log(`"${this.titulo}" foi devolvido.`);
    }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const livro2 = new Livro("1984", "George Orwell", 1949);

livro1.emprestar(); // Funciona
livro1.emprestar(); // Não disponível
livro1.devolver();
```

### 4.2 Parâmetros Opcionais e Valores Padrão

```typescript
class Pedido {
    private numero: number;
    private cliente: string;
    private itens: string[];
    private status: string;
    
    constructor(numero: number, cliente: string, itens: string[] = [], status: string = "Pendente") {
        this.numero = numero;
        this.cliente = cliente;
        this.itens = itens;
        this.status = status;
    }
    
    public adicionarItem(item: string): void {
        this.itens.push(item);
        console.log(`Item "${item}" adicionado ao pedido ${this.numero}`);
    }
    
    public getResumo(): string {
        return `Pedido ${this.numero} - Cliente: ${this.cliente} - Itens: ${this.itens.length} - Status: ${this.status}`;
    }
}

const pedido1 = new Pedido(1001, "Ana Paula");
const pedido2 = new Pedido(1002, "Carlos Eduardo", ["Notebook", "Mouse"], "Pago");

console.log(pedido1.getResumo()); // Status padrão: Pendente
console.log(pedido2.getResumo()); // Status personalizado: Pago
```

### 4.3 Parameter Properties (Propriedades de Parâmetro)

O TypeScript oferece uma sintaxe concisa para declarar e inicializar atributos diretamente no construtor.

```typescript
class Endereco {
    constructor(
        public rua: string,
        public numero: number,
        public bairro: string,
        public cidade: string,
        private complemento?: string
    ) {
        // Atributos são automaticamente declarados e inicializados
    }
    
    public getEnderecoCompleto(): string {
        const comp = this.complemento ? ` - ${this.complemento}` : "";
        return `${this.rua}, ${this.numero} - ${this.bairro}, ${this.cidade}${comp}`;
    }
}

const endereco1 = new Endereco("Avenida Paulista", 1000, "Bela Vista", "São Paulo", "Apto 101");
const endereco2 = new Endereco("Rua das Flores", 50, "Centro", "Curitiba");

console.log(endereco1.getEnderecoCompleto());
console.log(endereco2.getEnderecoCompleto());
```

---

## 5. INTERFACES

Interfaces definem contratos que as classes devem seguir, especificando quais propriedades e métodos devem existir, sem implementar a lógica. Elas promovem a padronização e facilitam a manutenção do código.

### 5.1 Conceito e Sintaxe Básica

```typescript
// Definição da interface
interface IPessoa {
    nome: string;
    idade: number;
    cpf: string;
    
    // Métodos (apenas assinatura)
    apresentar(): void;
    getDocumento(): string;
}

// Implementação da interface em uma classe
class Cliente implements IPessoa {
    // Atributos obrigatórios
    nome: string;
    idade: number;
    cpf: string;
    
    // Atributos adicionais (opcionais)
    email: string;
    telefone: string;
    
    constructor(nome: string, idade: number, cpf: string, email: string, telefone: string) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
    }
    
    // Implementação dos métodos obrigatórios
    apresentar(): void {
        console.log(`Olá, sou ${this.nome}, tenho ${this.idade} anos.`);
    }
    
    getDocumento(): string {
        return this.cpf;
    }
    
    // Métodos adicionais
    enviarEmail(mensagem: string): void {
        console.log(`Enviando para ${this.email}: ${mensagem}`);
    }
}

const cliente1 = new Cliente("Fernanda Lima", 28, "987.654.321-00", "fernanda@email.com", "(11) 98765-4321");
cliente1.apresentar();
console.log(cliente1.getDocumento());
cliente1.enviarEmail("Promoção especial!");
```

### 5.2 Propriedades Opcionais e Somente Leitura

```typescript
interface IProduto {
    readonly codigo: string;        // Propriedade somente leitura
    nome: string;
    preco: number;
    descricao?: string;             // Propriedade opcional
    categoria?: string;             // Propriedade opcional
    dataCadastro?: Date;
}

class ProdutoEletronico implements IProduto {
    readonly codigo: string;
    nome: string;
    preco: number;
    descricao?: string;
    categoria?: string;
    dataCadastro?: Date;
    private garantiaMeses: number;
    
    constructor(codigo: string, nome: string, preco: number, garantiaMeses: number = 12) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.garantiaMeses = garantiaMeses;
        this.dataCadastro = new Date();
    }
    
    public getGarantia(): string {
        return `${this.garantiaMeses} meses de garantia`;
    }
}

const produto = new ProdutoEletronico("ELEC001", "Smartphone XYZ", 2999.99, 24);
console.log(produto.codigo); // Acesso permitido
// produto.codigo = "NOVO001"; // ERRO: propriedade readonly não pode ser modificada
console.log(produto.getGarantia());
```

### 5.3 Múltiplas Interfaces

Uma classe pode implementar múltiplas interfaces, combinando diferentes contratos.

```typescript
interface IAutenticavel {
    login(usuario: string, senha: string): boolean;
    logout(): void;
}

interface ICadastravel {
    salvar(): boolean;
    atualizar(): boolean;
    excluir(): boolean;
}

class UsuarioSistema implements IAutenticavel, ICadastravel {
    private usuario: string;
    private senha: string;
    private autenticado: boolean;
    private email: string;
    
    constructor(email: string) {
        this.email = email;
        this.usuario = "";
        this.senha = "";
        this.autenticado = false;
    }
    
    // Implementação de IAutenticavel
    login(usuario: string, senha: string): boolean {
        // Simulação de autenticação
        if (usuario.length >= 4 && senha.length >= 6) {
            this.usuario = usuario;
            this.senha = senha;
            this.autenticado = true;
            console.log(`Usuário ${usuario} autenticado com sucesso!`);
            return true;
        }
        console.log("Credenciais inválidas!");
        return false;
    }
    
    logout(): void {
        this.autenticado = false;
        this.usuario = "";
        console.log("Usuário deslogado.");
    }
    
    // Implementação de ICadastravel
    salvar(): boolean {
        if (!this.autenticado) {
            console.log("É necessário estar autenticado para salvar.");
            return false;
        }
        console.log(`Dados do usuário ${this.email} salvos com sucesso!`);
        return true;
    }
    
    atualizar(): boolean {
        if (!this.autenticado) {
            console.log("É necessário estar autenticado para atualizar.");
            return false;
        }
        console.log("Dados atualizados!");
        return true;
    }
    
    excluir(): boolean {
        if (!this.autenticado) {
            console.log("É necessário estar autenticado para excluir.");
            return false;
        }
        console.log("Conta excluída!");
        return true;
    }
}

const user = new UsuarioSistema("usuario@email.com");
user.login("admin", "123456");
user.salvar();
user.logout();
user.salvar(); // Falhará - não autenticado
```

### 5.4 Interface estendendo outra Interface

```typescript
interface IVeiculo {
    marca: string;
    modelo: string;
    ano: number;
    ligar(): void;
    desligar(): void;
}

interface IVeiculoMotorizado extends IVeiculo {
    combustivel: string;
    tanqueCheio: number;
    abastecer(litros: number): void;
}

class Motocicleta implements IVeiculoMotorizado {
    marca: string;
    modelo: string;
    ano: number;
    combustivel: string;
    tanqueCheio: number;
    private nivelCombustivel: number;
    private ligado: boolean;
    
    constructor(marca: string, modelo: string, ano: number, combustivel: string, tanqueCheio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.combustivel = combustivel;
        this.tanqueCheio = tanqueCheio;
        this.nivelCombustivel = 0;
        this.ligado = false;
    }
    
    ligar(): void {
        if (this.nivelCombustivel > 0) {
            this.ligado = true;
            console.log(`${this.marca} ${this.modelo} ligada!`);
        } else {
            console.log("Sem combustível para ligar!");
        }
    }
    
    desligar(): void {
        this.ligado = false;
        console.log("Motocicleta desligada.");
    }
    
    abastecer(litros: number): void {
        if (this.nivelCombustivel + litros <= this.tanqueCheio) {
            this.nivelCombustivel += litros;
            console.log(`Abastecido ${litros}L. Total: ${this.nivelCombustivel}L`);
        } else {
            console.log("Tanque não comporta essa quantidade!");
        }
    }
}

const moto1 = new Motocicleta("Honda", "CB 500", 2024, "Gasolina", 17);
moto1.abastecer(10);
moto1.ligar();
moto1.desligar();
```

---

## 6. HERANÇA (EXTENDS)

A herança permite que uma classe (subclasse ou classe derivada) herde atributos e métodos de outra classe (superclasse ou classe base), promovendo reutilização de código e estabelecendo relacionamentos hierárquicos.

### 6.1 Conceito e Sintaxe Básica

```typescript
// Classe base (superclasse)
class SerHumano {
    protected nome: string;
    protected idade: number;
    protected cpf: string;
    
    constructor(nome: string, idade: number, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    
    public apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
    
    public envelhecer(): void {
        this.idade++;
        console.log(`${this.nome} agora tem ${this.idade} anos.`);
    }
}

// Classe derivada (subclasse)
class Estudante extends SerHumano {
    private matricula: string;
    private curso: string;
    private notas: number[];
    
    constructor(nome: string, idade: number, cpf: string, matricula: string, curso: string) {
        // Chamada obrigatória ao construtor da classe pai
        super(nome, idade, cpf);
        this.matricula = matricula;
        this.curso = curso;
        this.notas = [];
    }
    
    // Método específico da subclasse
    public adicionarNota(nota: number): void {
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
            console.log(`Nota ${nota} adicionada para ${this.nome}`);
        } else {
            console.log("Nota inválida! Deve estar entre 0 e 10.");
        }
    }
    
    public calcularMedia(): number {
        if (this.notas.length === 0) return 0;
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
    
    // Sobrescrita de método (override)
    public apresentar(): void {
        // Reutilizando método da classe pai
        super.apresentar();
        console.log(`Sou estudante de ${this.curso}, matrícula ${this.matricula}`);
        console.log(`Média atual: ${this.calcularMedia().toFixed(2)}`);
    }
}

// Utilização
const estudante1 = new Estudante("Pedro Henrique", 20, "123.456.789-00", "2024001", "Engenharia de Software");
estudante1.adicionarNota(8.5);
estudante1.adicionarNota(9.0);
estudante1.adicionarNota(7.5);
estudante1.apresentar();
estudante1.envelhecer(); // Método herdado
```

### 6.2 Hierarquia de Classes

```typescript
// Classe base
class Funcionario {
    protected nome: string;
    protected matricula: string;
    protected salarioBase: number;
    
    constructor(nome: string, matricula: string, salarioBase: number) {
        this.nome = nome;
        this.matricula = matricula;
        this.salarioBase = salarioBase;
    }
    
    public calcularSalario(): number {
        return this.salarioBase;
    }
    
    public getInformacoes(): string {
        return `${this.matricula} - ${this.nome} - R$ ${this.calcularSalario().toFixed(2)}`;
    }
}

// Primeira nível de herança
class FuncionarioCLT extends Funcionario {
    private beneficioVR: number;
    private beneficioVT: number;
    
    constructor(nome: string, matricula: string, salarioBase: number, beneficioVR: number, beneficioVT: number) {
        super(nome, matricula, salarioBase);
        this.beneficioVR = beneficioVR;
        this.beneficioVT = beneficioVT;
    }
    
    public calcularSalario(): number {
        return this.salarioBase + this.beneficioVR + this.beneficioVT;
    }
}

// Segundo nível de herança
class Gerente extends FuncionarioCLT {
    private bonusGestao: number;
    private equipeSize: number;
    
    constructor(nome: string, matricula: string, salarioBase: number, beneficioVR: number, beneficioVT: number, bonusGestao: number) {
        super(nome, matricula, salarioBase, beneficioVR, beneficioVT);
        this.bonusGestao = bonusGestao;
        this.equipeSize = 0;
    }
    
    public calcularSalario(): number {
        return super.calcularSalario() + this.bonusGestao;
    }
    
    public adicionarEquipe(qtd: number): void {
        this.equipeSize += qtd;
        console.log(`Gerente ${this.nome} agora gerencia ${this.equipeSize} pessoas`);
    }
}

// Utilização
const funcionario1 = new Funcionario("João Silva", "F001", 2000);
const clt1 = new FuncionarioCLT("Maria Santos", "F002", 3000, 500, 300);
const gerente1 = new Gerente("Carlos Oliveira", "F003", 5000, 600, 400, 2000);

console.log(funcionario1.getInformacoes()); // R$ 2000.00
console.log(clt1.getInformacoes()); // R$ 3800.00
console.log(gerente1.getInformacoes()); // R$ 8000.00
gerente1.adicionarEquipe(5);
```

### 6.3 Palavra-chave `super`

A palavra-chave `super` é utilizada para:
1. Chamar o construtor da classe pai
2. Acessar métodos da classe pai que foram sobrescritos

```typescript
class Conta {
    protected numero: string;
    protected titular: string;
    protected saldo: number;
    
    constructor(numero: string, titular: string, saldo: number = 0) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }
    
    public depositar(valor: number): boolean {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado.`);
            return true;
        }
        return false;
    }
    
    public sacar(valor: number): boolean {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado.`);
            return true;
        }
        console.log("Saque não permitido!");
        return false;
    }
    
    public getSaldo(): number {
        return this.saldo;
    }
}

class ContaPoupanca extends Conta {
    private taxaJuros: number;
    
    constructor(numero: string, titular: string, taxaJuros: number, saldo: number = 0) {
        super(numero, titular, saldo);
        this.taxaJuros = taxaJuros;
    }
    
    // Sobrescrita com comportamento adicional
    public sacar(valor: number): boolean {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para saque!");
            return false;
        }
        // Chama o método da classe pai
        return super.sacar(valor);
    }
    
    public aplicarJuros(): void {
        const juros = this.saldo * (this.taxaJuros / 100);
        this.saldo += juros;
        console.log(`Juros de R$ ${juros.toFixed(2)} aplicados. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    }
}

const poupanca1 = new ContaPoupanca("001-1", "Ana Paula", 0.5, 1000);
poupanca1.depositar(500);
poupanca1.aplicarJuros();
poupanca1.sacar(200);
console.log(`Saldo final: R$ ${poupanca1.getSaldo().toFixed(2)}`);
```

---

## 7. OVERRIDE (SOBRESCRIÇÃO DE MÉTODOS)

O override permite que uma subclasse forneça uma implementação específica para um método já definido em sua classe pai, mantendo a mesma assinatura (nome, parâmetros e tipo de retorno).

### 7.1 Conceito e Aplicação

```typescript
class FormaGeometrica {
    protected nome: string;
    
    constructor(nome: string) {
        this.nome = nome;
    }
    
    public calcularArea(): number {
        return 0;
    }
    
    public calcularPerimetro(): number {
        return 0;
    }
    
    public descrever(): string {
        return `Forma: ${this.nome}`;
    }
}

class Retangulo extends FormaGeometrica {
    private base: number;
    private altura: number;
    
    constructor(base: number, altura: number) {
        super("Retângulo");
        this.base = base;
        this.altura = altura;
    }
    
    // Override do método calcularArea
    public calcularArea(): number {
        return this.base * this.altura;
    }
    
    // Override do método calcularPerimetro
    public calcularPerimetro(): number {
        return 2 * (this.base + this.altura);
    }
    
    // Override do método descrever
    public descrever(): string {
        return `${super.descrever()} - Base: ${this.base}, Altura: ${this.altura}`;
    }
}

class Circulo extends FormaGeometrica {
    private raio: number;
    
    constructor(raio: number) {
        super("Círculo");
        this.raio = raio;
    }
    
    public calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2);
    }
    
    public calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
    
    public descrever(): string {
        return `${super.descrever()} - Raio: ${this.raio}`;
    }
}

// Utilização
const formas: FormaGeometrica[] = [
    new Retangulo(5, 3),
    new Circulo(4),
    new Retangulo(10, 7)
];

formas.forEach(forma => {
    console.log(forma.descrever());
    console.log(`Área: ${forma.calcularArea().toFixed(2)}`);
    console.log(`Perímetro: ${forma.calcularPerimetro().toFixed(2)}`);
    console.log("---");
});
```

### 7.2 Modificador `final` (impedindo override)

Em algumas situações, você pode querer impedir que um método seja sobrescrito. No TypeScript, isso pode ser feito através de convenções ou utilizando ferramentas de linting.

```typescript
class BaseSegura {
    public metodoNormal(): void {
        console.log("Pode ser sobrescrito");
    }
    
    // Por convenção, métodos que não devem ser sobrescritos
    // podem ser documentados ou tornados privados/protected
    protected metodoInternoCritico(): void {
        console.log("Método crítico - não sobrescrever");
    }
}
```

---

## 8. CLASSES ABSTRATAS

Classes abstratas funcionam como um híbrido entre classes e interfaces. Elas podem conter tanto membros implementados quanto membros abstratos (sem implementação). Não é possível instanciar uma classe abstrata diretamente.

### 8.1 Conceito e Sintaxe

```typescript
// Classe abstrata não pode ser instanciada diretamente
abstract class DispositivoEletronico {
    protected marca: string;
    protected modelo: string;
    protected ligado: boolean;
    
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.ligado = false;
    }
    
    // Método abstrato (deve ser implementado pelas subclasses)
    abstract ligar(): void;
    abstract desligar(): void;
    
    // Método concreto (implementação padrão)
    public getInformacoes(): string {
        const status = this.ligado ? "Ligado" : "Desligado";
        return `${this.marca} ${this.modelo} - ${status}`;
    }
    
    // Outro método concreto
    public reiniciar(): void {
        console.log("Reiniciando dispositivo...");
        this.desligar();
        this.ligar();
    }
}

// Implementação concreta
class Smartphone extends DispositivoEletronico {
    private bateria: number;
    private appsInstalados: string[];
    
    constructor(marca: string, modelo: string, bateria: number = 100) {
        super(marca, modelo);
        this.bateria = bateria;
        this.appsInstalados = [];
    }
    
    // Implementação obrigatória dos métodos abstratos
    public ligar(): void {
        if (this.bateria > 0) {
            this.ligado = true;
            console.log(`${this.marca} ${this.modelo} ligado!`);
        } else {
            console.log("Bateria descarregada!");
        }
    }
    
    public desligar(): void {
        this.ligado = false;
        console.log("Dispositivo desligado.");
    }
    
    // Métodos específicos
    public instalarApp(nome: string): void {
        this.appsInstalados.push(nome);
        console.log(`App ${nome} instalado!`);
    }
    
    public usarApp(nome: string, minutos: number): void {
        if (!this.ligado) {
            console.log("Ligue o dispositivo primeiro!");
            return;
        }
        const consumo = minutos * 0.5;
        this.bateria -= consumo;
        console.log(`Usando ${nome} por ${minutos}min. Bateria: ${this.bateria.toFixed(1)}%`);
    }
    
    public getBateria(): number {
        return this.bateria;
    }
}

class Tablet extends DispositivoEletronico {
    private tamanhoTela: number;
    private suporteCaneta: boolean;
    
    constructor(marca: string, modelo: string, tamanhoTela: number, suporteCaneta: boolean = false) {
        super(marca, modelo);
        this.tamanhoTela = tamanhoTela;
        this.suporteCaneta = suporteCaneta;
    }
    
    public ligar(): void {
        this.ligado = true;
        console.log(`Tablet ${this.marca} ${this.modelo} de ${this.tamanhoTela}" ligado!`);
    }
    
    public desligar(): void {
        this.ligado = false;
        console.log("Tablet desligado.");
    }
    
    public usarCaneta(): void {
        if (this.suporteCaneta && this.ligado) {
            console.log("Usando caneta stylus...");
        } else if (!this.suporteCaneta) {
            console.log("Este tablet não suporta caneta!");
        } else {
            console.log("Ligue o tablet primeiro!");
        }
    }
}

// Utilização
const celular1 = new Smartphone("Samsung", "Galaxy S24", 100);
celular1.ligar();
celular1.instalarApp("WhatsApp");
celular1.usarApp("WhatsApp", 30);
console.log(celular1.getInformacoes());

const tablet1 = new Tablet("Apple", "iPad Pro", 12.9, true);
tablet1.ligar();
tablet1.usarCaneta();
tablet1.reiniciar();

// const dispositivo = new DispositivoEletronico("Teste", "X"); // ERRO: classe abstrata não pode ser instanciada
```

### 8.2 Vantagens das Classes Abstratas

1. **Código reutilizável**: Métodos concretos podem ser compartilhados entre subclasses
2. **Contrato obrigatório**: Métodos abstratos garantem que todas as subclasses implementem comportamentos específicos
3. **Estado compartilhado**: Atributos protegidos podem ser herdados e reutilizados
4. **Polimorfismo**: Permite tratar diferentes subclasses de forma uniforme

### 8.3 Comparação: Interface vs Classe Abstrata

| Característica | Interface | Classe Abstrata |
|----------------|-----------|-----------------|
| Instanciação | Não | Não |
| Implementação de métodos | Não (apenas assinatura) | Sim (métodos concretos e abstratos) |
| Atributos com estado | Não | Sim |
| Construtor | Não | Sim |
| Herança múltipla | Sim (implementar várias) | Não (estender apenas uma) |
| Modificadores de acesso | Public (implícito) | Todos (public, protected, private) |

---

## 9. EXEMPLO INTEGRADOR: SISTEMA DE GESTÃO ACADÊMICA

Vamos consolidar todos os conceitos em um exemplo prático e completo.

```typescript
// Interface para relatórios
interface IRelatorio {
    gerarRelatorio(): string;
}

// Classe abstrata base
abstract class Pessoa {
    protected id: number;
    protected nome: string;
    protected email: string;
    
    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
    
    abstract getTipo(): string;
    
    public getDadosBasicos(): string {
        return `[${this.id}] ${this.nome} - ${this.email}`;
    }
}

// Enum para status de matrícula
enum StatusMatricula {
    ATIVO = "Ativo",
    TRANCADO = "Trancado",
    CONCLUIDO = "Concluído",
    CANCELADO = "Cancelado"
}

// Classe concreta: Professor
class Professor extends Pessoa implements IRelatorio {
    private matricula: string;
    private disciplinas: string[];
    private salario: number;
    
    constructor(id: number, nome: string, email: string, matricula: string, salario: number) {
        super(id, nome, email);
        this.matricula = matricula;
        this.disciplinas = [];
        this.salario = salario;
    }
    
    public getTipo(): string {
        return "Professor";
    }
    
    public adicionarDisciplina(disciplina: string): void {
        if (!this.disciplinas.includes(disciplina)) {
            this.disciplinas.push(disciplina);
            console.log(`Disciplina "${disciplina}" adicionada ao professor ${this.nome}`);
        }
    }
    
    public getSalario(): number {
        return this.salario + (this.disciplinas.length * 500);
    }
    
    public gerarRelatorio(): string {
        return `RELATÓRIO DE PROFESSOR\n${"=".repeat(30)}\n${this.getDadosBasicos()}\nMatrícula: ${this.matricula}\nDisciplinas: ${this.disciplinas.join(", ")}\nSalário: R$ ${this.getSalario().toFixed(2)}`;
    }
}

// Classe concreta: Aluno
class Aluno extends Pessoa implements IRelatorio {
    private matricula: string;
    private curso: string;
    private status: StatusMatricula;
    private disciplinasCursadas: number;
    
    constructor(id: number, nome: string, email: string, matricula: string, curso: string) {
        super(id, nome, email);
        this.matricula = matricula;
        this.curso = curso;
        this.status = StatusMatricula.ATIVO;
        this.disciplinasCursadas = 0;
    }
    
    public getTipo(): string {
        return "Aluno";
    }
    
    public cursarDisciplina(): void {
        this.disciplinasCursadas++;
        console.log(`${this.nome} cursou mais uma disciplina. Total: ${this.disciplinasCursadas}`);
    }
    
    public trancarMatricula(): void {
        if (this.status === StatusMatricula.ATIVO) {
            this.status = StatusMatricula.TRANCADO;
            console.log(`Matrícula de ${this.nome} trancada.`);
        }
    }
    
    public reativarMatricula(): void {
        if (this.status === StatusMatricula.TRANCADO) {
            this.status = StatusMatricula.ATIVO;
            console.log(`Matrícula de ${this.nome} reativada.`);
        }
    }
    
    public gerarRelatorio(): string {
        return `RELATÓRIO DE ALUNO\n${"=".repeat(30)}\n${this.getDadosBasicos()}\nMatrícula: ${this.matricula}\nCurso: ${this.curso}\nStatus: ${this.status}\nDisciplinas Cursadas: ${this.disciplinasCursadas}`;
    }
}

// Sistema de gestão
class SistemaAcademico {
    private pessoas: Pessoa[];
    
    constructor() {
        this.pessoas = [];
    }
    
    public adicionarPessoa(pessoa: Pessoa): void {
        this.pessoas.push(pessoa);
        console.log(`${pessoa.getTipo()} ${pessoa.getDadosBasicos()} cadastrado(a)!`);
    }
    
    public gerarRelatorioGeral(): void {
        console.log("\n" + "=".repeat(50));
        console.log("RELATÓRIO GERAL DO SISTEMA");
        console.log("=".repeat(50));
        
        this.pessoas.forEach(pessoa => {
            if (pessoa instanceof Professor || pessoa instanceof Aluno) {
                console.log("\n" + pessoa.gerarRelatorio());
                console.log("-".repeat(50));
            }
        });
    }
    
    public getTotalPessoas(): number {
        return this.pessoas.length;
    }
}

// Demonstração do sistema
const sistema = new SistemaAcademico();

// Criando professores
const prof1 = new Professor(1, "Dr. Carlos Mendes", "carlos@universidade.edu", "P001", 8000);
prof1.adicionarDisciplina("Programação Front-End");
prof1.adicionarDisciplina("TypeScript Avançado");

const prof2 = new Professor(2, "Dra. Ana Beatriz", "ana@universidade.edu", "P002", 9000);
prof2.adicionarDisciplina("Banco de Dados");

// Criando alunos
const aluno1 = new Aluno(101, "João Pedro", "joao@aluno.edu", "A2024001", "Engenharia de Software");
const aluno2 = new Aluno(102, "Maria Fernanda", "maria@aluno.edu", "A2024002", "Análise de Sistemas");

// Adicionando ao sistema
sistema.adicionarPessoa(prof1);
sistema.adicionarPessoa(prof2);
sistema.adicionarPessoa(aluno1);
sistema.adicionarPessoa(aluno2);

// Operações
aluno1.cursarDisciplina();
aluno1.cursarDisciplina();
aluno2.cursarDisciplina();
aluno1.trancarMatricula();
aluno1.reativarMatricula();

// Gerando relatório
sistema.gerarRelatorioGeral();
console.log(`\nTotal de pessoas cadastradas: ${sistema.getTotalPessoas()}`);
```

---

## 10. CONSIDERAÇÕES FINAIS

A Programação Orientada a Objetos com TypeScript oferece ferramentas poderosas para o desenvolvimento de aplicações Front-End robustas e escaláveis. A combinação da tipagem estática do TypeScript com os princípios da POO permite:

1. **Código mais seguro**: Detecção de erros em tempo de compilação
2. **Manutenibilidade**: Estrutura organizada e previsível
3. **Reutilização**: Herança e composição evitam duplicação
4. **Abstração**: Modelagem fiel de domínios complexos
5. **Polimorfismo**: Flexibilidade no tratamento de diferentes tipos

O domínio destes conceitos é fundamental para o desenvolvimento de aplicações modernas utilizando frameworks como Angular, React (com TypeScript) e Vue.js, que se beneficiam enormemente das características apresentadas nesta aula.

---

## REFERÊNCIAS BIBLIOGRÁFICAS

GAMMA, Erich et al. **Padrões de Projetos: Soluções Reutilizáveis de Software Orientado a Objetos**. Porto Alegre: Bookman, 2009.

MARTIN, Robert C. **Clean Code: Habilidades Práticas do Agile Software**. São Paulo: Pearson Prentice Hall, 2009.

MICROSOFT. **TypeScript Documentation**. Disponível em: https://www.typescriptlang.org/docs/. Acesso em: maio 2026.

RESIG, John; PROEA, Bear Bibeault. **Secrets of the JavaScript Ninja**. 2. ed. Shelter Island: Manning Publications, 2016.

SEDDON, Adam. **Learning TypeScript**. Birmingham: Packt Publishing, 2022.

SOMMERVILLE, Ian. **Engenharia de Software**. 10. ed. São Paulo: Pearson Education do Brasil, 2019.

ZAKAS, Nicholas C. **Understanding ECMAScript 6**. San Francisco: No Starch Press, 2016.

---

**Material elaborado pelo Professor José Carlos Flores para a disciplina de Programação Front-End - Maio/2026**

---

## 👤 GitHub

[![Foto de Perfil](https://github.com/floresjcd.png?size=50)](https://github.com/floresjcd) 
**[@floresjcd](https://github.com/floresjcd)**