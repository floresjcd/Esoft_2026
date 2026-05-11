> **Curso:** Engenharia de Software / Tecnologia em Análise e Desenvolvimento de Sistemas  
> **Disciplina:** Programação Front-End    
> **Tema:**  Utility Types em TypeScript    
> **Professor:** José Carlos Flores  

---

## Sumário

1. [Introdução aos Utility Types](#1-introdução-aos-utility-types)
2. [Partial\<T\>](#2-partialt)
3. [Readonly\<T\>](#3-readonlyt)
4. [Pick\<T, K\>](#4-pickt-k)
5. [Omit\<T, K\>](#5-omitt-k)
6. [Required\<T\>](#6-requiredt)
7. [Record\<K, T\>](#7-recordk-t)
8. [Exclude\<T, U\>](#8-excludet-u)
9. [ReturnType\<T\>](#9-returntypet)
10. [Parameters\<T\>](#10-parameterst)
11. [Exercícios Práticos](#11-exercícios-práticos)
12. [Referências Bibliográficas](#12-referências-bibliográficas)

---

## 1. Introdução aos Utility Types

### 1.1 Contextualização

No desenvolvimento de software moderno, especialmente no contexto de aplicações front-end robustas, a tipagem estática desempenha um papel fundamental na manutenção da qualidade do código e na prevenção de erros em tempo de compilação. O TypeScript, como um superconjunto tipado do JavaScript, oferece mecanismos sofisticados para manipulação de tipos, dentre os quais se destacam os **Utility Types** (Tipos Utilitários).

Conforme destacado por Silva e Santos (2024), os Utility Types representam ferramentas essenciais para desenvolvedores que buscam criar aplicações escaláveis e manuteníveis, permitindo transformações complexas de tipos de maneira declarativa e segura.

### 1.2 Definição Formal

Utility Types são tipos genéricos embutidos no TypeScript que facilitam transformações comuns de tipos. Eles operam sobre tipos existentes, produzindo novos tipos derivados através de operações como:

- **Modificação de propriedades** (torná-las opcionais ou obrigatórias)
- **Seleção de subconjuntos** de propriedades
- **Exclusão de propriedades** específicas
- **Extração de informações** sobre funções e seus parâmetros/retornos

### 1.3 Importância no Desenvolvimento Front-End

No contexto de aplicações front-end, especialmente ao trabalhar com frameworks como React, Angular ou Vue.js, os Utility Types possibilitam:

- Criação de tipos para props de componentes derivados de interfaces existentes
- Definição de estados parciais em formulários complexos
- Imutabilidade de dados em aplicações que utilizam gerenciamento de estado
- Reutilização de código de tipagem, evitando duplicação

**Figura 1.1 - Hierarquia de Utility Types**

```
                    Utility Types TypeScript
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   Modificadores      Seletores        Extratores
        │                  │                  │
   ┌────┴────┐        ┌────┴────┐        ┌────┴────┐
   │         │        │         │        │         │
Partial  Readonly   Pick     Omit    ReturnType Parameters
Required            Record   Exclude
```

---

## 2. Partial\<T\>

### 2.1 Conceito e Definição

O Utility Type `Partial<T>` constrói um tipo com todas as propriedades de `T` definidas como opcionais. Em outras palavras, ele transforma cada propriedade de um tipo em uma propriedade opcional, adicionando o modificador `?` a cada uma delas.

### 2.2 Sintaxe

```typescript
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

### 2.3 Exemplo Prático

Considere uma interface que representa um usuário em um sistema:

```typescript
interface Usuario {
    id: number;
    nome: string;
    email: string;
    dataNascimento: Date;
    ativo: boolean;
}
```

Ao utilizar `Partial<Usuario>`, obtemos:

```typescript
type UsuarioParcial = Partial<Usuario>;

// Equivalente a:
interface UsuarioParcial {
    id?: number;
    nome?: string;
    email?: string;
    dataNascimento?: Date;
    ativo?: boolean;
}
```

### 2.4 Caso de Uso: Atualização de Entidades

Um cenário comum no desenvolvimento de APIs e aplicações front-end é a atualização parcial de registros. Quando um usuário deseja modificar apenas algumas informações de seu perfil, não é necessário enviar todos os campos.

```typescript
class ServicoUsuario {
    private usuarios: Usuario[] = [];

    atualizarUsuario(id: number, dadosParciais: Partial<Usuario>): Usuario | null {
        const indice = this.usuarios.findIndex(u => u.id === id);
        
        if (indice === -1) {
            return null;
        }

        // Atualiza apenas os campos fornecidos
        this.usuarios[indice] = {
            ...this.usuarios[indice],
            ...dadosParciais
        };

        return this.usuarios[indice];
    }
}

// Uso:
const servico = new ServicoUsuario();
servico.atualizarUsuario(1, { email: 'novo@email.com' }); // Apenas email é atualizado
```

### 2.5 Representação Visual

**Figura 2.1 - Transformação Partial**

```
Tipo Original (Usuario)          Partial<Usuario>
┌─────────────────────┐         ┌─────────────────────┐
│ id: number          │         │ id?: number         │
│ nome: string        │         │ nome?: string       │
│ email: string       │   -->   │ email?: string      │
│ dataNasc: Date      │         │ dataNasc?: Date     │
│ ativo: boolean      │         │ ativo?: boolean     │
└─────────────────────┘         └─────────────────────┘
  Todas obrigatórias              Todas opcionais
```

### 2.6 Exemplo Avançado: Formulários

Em aplicações React, é comum utilizar `Partial` para gerenciar o estado de formulários:

```typescript
interface DadosFormulario {
    nome: string;
    sobrenome: string;
    telefone: string;
    endereco: string;
    cidade: string;
    cep: string;
}

class FormularioCadastro {
    private dados: Partial<DadosFormulario> = {};

    atualizarCampo<K extends keyof DadosFormulario>(
        campo: K, 
        valor: DadosFormulario[K]
    ): void {
        this.dados[campo] = valor;
    }

    validar(): boolean {
        // Verifica se todos os campos obrigatórios estão preenchidos
        const camposObrigatorios: (keyof DadosFormulario)[] = 
            ['nome', 'sobrenome', 'telefone', 'endereco', 'cidade', 'cep'];
        
        return camposObrigatorios.every(campo => 
            this.dados[campo] !== undefined && 
            this.dados[campo] !== ''
        );
    }
}
```

---

## 3. Readonly\<T\>

### 3.1 Conceito e Definição

O Utility Type `Readonly<T>` constrói um tipo com todas as propriedades de `T` definidas como somente leitura (read-only). Isso significa que, uma vez atribuído um valor a uma propriedade, ele não pode ser modificado.

### 3.2 Sintaxe

```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
```

### 3.3 Exemplo Prático

```typescript
interface Configuracao {
    apiUrl: string;
    timeout: number;
    maxRetries: number;
}

type ConfiguracaoSomenteLeitura = Readonly<Configuracao>;

const config: ConfiguracaoSomenteLeitura = {
    apiUrl: 'https://api.exemplo.com',
    timeout: 5000,
    maxRetries: 3
};

// Tentativa de modificação - ERRO DE COMPILAÇÃO:
// config.timeout = 10000; // Error: Cannot assign to 'timeout' because it is a read-only property
```

### 3.4 Caso de Uso: Constantes de Configuração

Em aplicações front-end, frequentemente precisamos de objetos de configuração que não devem ser alterados durante a execução do programa:

```typescript
class ConfiguracaoAplicacao {
    private static _instancia: Readonly<{
        versao: string;
        ambiente: 'desenvolvimento' | 'producao' | 'homologacao';
        recursos: string[];
    }>;

    static obterConfiguracao(ambiente: string) {
        if (!ConfiguracaoAplicacao._instancia) {
            ConfiguracaoAplicacao._instancia = {
                versao: '1.0.0',
                ambiente: ambiente as any,
                recursos: ['autenticacao', 'cache', 'logging']
            } as const;
        }

        return ConfiguracaoAplicacao._instancia;
    }
}
```

### 3.5 Arrays Readonly

É importante notar que `Readonly` também pode ser aplicado a arrays, criando arrays imutáveis:

```typescript
type ListaSomenteLeitura = ReadonlyArray<string>;
// ou
type ListaSomenteLeitura2 = readonly string[];

const lista: ListaSomenteLeitura = ['a', 'b', 'c'];

// lista.push('d'); // Error: Property 'push' does not exist on type 'readonly string[]'
// lista[0] = 'x'; // Error: Index signature in type 'readonly string[]' only permits reading
```

### 3.6 Representação Visual

**Figura 3.1 - Transformação Readonly**

```
Tipo Original (Produto)            Readonly<Produto>
┌─────────────────────┐           ┌─────────────────────┐
│ id: number          │           │ readonly id: number │
│ nome: string        │           │ readonly nome: str  │
│ preco: number       │   -->     │ readonly preco: num │
│ estoque: number     │           │ readonly estoque: n │
└─────────────────────┘           └─────────────────────┘
  Propriedades mutáveis            Propriedades imutáveis
```

### 3.7 Exemplo com Classes

```typescript
interface Coordenadas {
    x: number;
    y: number;
    z: number;
}

class Ponto3D {
    private readonly posicao: Readonly<Coordenadas>;

    constructor(x: number, y: number, z: number) {
        this.posicao = { x, y, z };
    }

    obterPosicao(): Readonly<Coordenadas> {
        return this.posicao;
    }

    // Retorna um novo objeto em vez de modificar o existente
    transladar(dx: number, dy: number, dz: number): Ponto3D {
        return new Ponto3D(
            this.posicao.x + dx,
            this.posicao.y + dy,
            this.posicao.z + dz
        );
    }
}
```

---

## 4. Pick\<T, K\>

### 4.1 Conceito e Definição

O Utility Type `Pick<T, K>` constrói um tipo selecionando um conjunto de propriedades `K` de `T`, onde `K` é uma união de chaves (keys) do tipo `T`. É particularmente útil quando precisamos de um subconjunto específico das propriedades de um tipo maior.

### 4.2 Sintaxe

```typescript
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

### 4.3 Exemplo Prático

```typescript
interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    estoque: number;
    categoria: string;
    dataCadastro: Date;
}

// Seleciona apenas propriedades específicas
type ProdutoResumo = Pick<Produto, 'id' | 'nome' | 'preco'>;

// Equivalente a:
interface ProdutoResumo {
    id: number;
    nome: string;
    preco: number;
}
```

### 4.4 Caso de Uso: DTOs (Data Transfer Objects)

Em aplicações que se comunicam com APIs, frequentemente precisamos criar objetos de transferência de dados que contenham apenas informações específicas:

```typescript
interface UsuarioCompleto {
    id: string;
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    telefone: string;
    endereco: string;
    dataNascimento: Date;
    createdAt: Date;
    updatedAt: Date;
}

// DTO para lista de usuários (não expõe dados sensíveis)
type UsuarioListaDTO = Pick<UsuarioCompleto, 'id' | 'nome' | 'email'>;

// DTO para criação de usuário
type UsuarioCriacaoDTO = Pick<UsuarioCompleto, 'nome' | 'email' | 'senha' | 'telefone'>;

// DTO para atualização de perfil
type UsuarioPerfilDTO = Pick<UsuarioCompleto, 'nome' | 'telefone' | 'endereco'>;
```

### 4.5 Representação Visual

**Figura 4.1 - Operação Pick**

```
Tipo Original (Funcionario)
┌─────────────────────────────┐
│ id: number                  │
│ nome: string                │
│ email: string               │
│ salario: number      ███████│
│ cpf: string          ███████│
│ departamento: string  ██████│
│ dataAdmissao: Date    ██████│
└─────────────────────────────┘
          │
          │ Pick<Funcionario, 'id' | 'nome' | 'email'>
          ▼
┌─────────────────────────────┐
│ id: number                  │
│ nome: string                │
│ email: string               │
└─────────────────────────────┘
  Apenas propriedades selecionadas
```

### 4.6 Exemplo Avançado: Componentes React

```typescript
interface PropsComponente {
    titulo: string;
    subtitulo: string;
    descricao: string;
    imagemUrl: string;
    imagemAlt: string;
    onClique: () => void;
    onHover: () => void;
    className: string;
    style: React.CSSProperties;
}

// Componente simplificado que usa apenas algumas props
type PropsCardSimples = Pick<PropsComponente, 'titulo' | 'descricao' | 'onClique'>;

const CardSimples: React.FC<PropsCardSimples> = ({ titulo, descricao, onClique }) => {
    return (
        <div onClick={onClique}>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    );
};
```

### 4.7 Combinação com Outros Utility Types

```typescript
interface Transacao {
    id: string;
    valor: number;
    data: Date;
    descricao: string;
    categoria: string;
    status: 'pendente' | 'concluida' | 'cancelada';
}

// Cria um tipo parcial com apenas algumas propriedades
type TransacaoAtualizacao = Partial<Pick<Transacao, 'descricao' | 'categoria' | 'status'>>;

// Permite atualizar apenas descrição, categoria ou status
const atualizacao: TransacaoAtualizacao = {
    status: 'concluida'
    // descricao e categoria são opcionais
};
```

---

## 5. Omit\<T, K\>

### 5.1 Conceito e Definição

O Utility Type `Omit<T, K>` constrói um tipo omitindo (excluindo) as propriedades `K` de `T`, onde `K` é uma união de chaves do tipo `T`. É essencialmente o inverso do `Pick<T, K>`.

### 5.2 Sintaxe

```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

### 5.3 Exemplo Prático

```typescript
interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    token: string;
    dataCriacao: Date;
}

// Remove propriedades sensíveis
type UsuarioPublico = Omit<Usuario, 'senha' | 'token'>;

// Equivalente a:
interface UsuarioPublico {
    id: number;
    nome: string;
    email: string;
    dataCriacao: Date;
}
```

### 5.4 Caso de Uso: Segurança de Dados

Ao retornar dados de usuários em uma API, é crucial não expor informações sensíveis como senhas ou tokens de autenticação:

```typescript
class RepositorioUsuarios {
    private usuarios: Usuario[] = [];

    async buscarUsuario(id: number): Promise<UsuarioPublico | null> {
        const usuario = this.usuarios.find(u => u.id === id);
        
        if (!usuario) {
            return null;
        }

        // O TypeScript garante que senha e token não estão presentes
        const { senha, token, ...usuarioPublico } = usuario;
        return usuarioPublico;
    }

    async listarUsuarios(): Promise<UsuarioPublico[]> {
        return this.usuarios.map(({ senha, token, ...resto }) => resto);
    }
}
```

### 5.5 Representação Visual

**Figura 5.1 - Operação Omit**

```
Tipo Original (Pedido)
┌─────────────────────────────┐
│ id: string                  │
│ clienteId: string           │
│ itens: Item[]               │
│ total: number               │
│ cartaoCredito: string ██████│
│ cvv: string         ████████│
│ dataProcessamento: Date ████│
└─────────────────────────────┘
          │
          │ Omit<Pedido, 'cartaoCredito' | 'cvv'>
          ▼
┌─────────────────────────────┐
│ id: string                  │
│ clienteId: string           │
│ itens: Item[]               │
│ total: number               │
│ dataProcessamento: Date     │
└─────────────────────────────┘
  Propriedades sensíveis removidas
```

### 5.6 Comparação: Pick vs Omit

```typescript
interface Evento {
    id: string;
    titulo: string;
    descricao: string;
    dataInicio: Date;
    dataFim: Date;
    local: string;
    organizadorId: string;
    capacidade: number;
}

// Usando Pick - seleciona o que quer manter
type EventoResumoPick = Pick<Evento, 'id' | 'titulo' | 'dataInicio' | 'local'>;

// Usando Omit - remove o que não quer
type EventoResumoOmit = Omit<Evento, 'descricao' | 'dataFim' | 'organizadorId' | 'capacidade'>;

// Ambos resultam no mesmo tipo!
```

### 5.7 Exemplo Avançado: Formulários

```typescript
interface DadosCadastro {
    email: string;
    senha: string;
    confirmacaoSenha: string;
    nome: string;
    sobrenome: string;
    telefone: string;
    aceitarTermos: boolean;
    newsletter: boolean;
}

// Dados para envio à API (remove campos de UI)
type DadosCadastroAPI = Omit<DadosCadastro, 'confirmacaoSenha' | 'aceitarTermos' | 'newsletter'>;

// Validação do formulário
function validarCadastro(dados: DadosCadastro): DadosCadastroAPI | null {
    if (dados.senha !== dados.confirmacaoSenha) {
        return null;
    }
    
    if (!dados.aceitarTermos) {
        return null;
    }

    // Remove campos que não vão para a API
    const { confirmacaoSenha, aceitarTermos, newsletter, ...dadosAPI } = dados;
    return dadosAPI;
}
```

---

## 6. Required\<T\>

### 6.1 Conceito e Definição

O Utility Type `Required<T>` constrói um tipo com todas as propriedades de `T` definidas como obrigatórias. É o oposto de `Partial<T>`, removendo os modificadores `?` de todas as propriedades.

### 6.2 Sintaxe

```typescript
type Required<T> = {
    [P in keyof T]-?: T[P];
};
```

Note o uso de `-?` que remove a opcionalidade das propriedades.

### 6.3 Exemplo Prático

```typescript
interface ConfiguracaoOpcional {
    tema?: 'claro' | 'escuro';
    idioma?: 'pt' | 'en' | 'es';
    notificacoes?: boolean;
    tamanhoFonte?: number;
}

// Torna todas as propriedades obrigatórias
type ConfiguracaoCompleta = Required<ConfiguracaoOpcional>;

// Equivalente a:
interface ConfiguracaoCompleta {
    tema: 'claro' | 'escuro';
    idioma: 'pt' | 'en' | 'es';
    notificacoes: boolean;
    tamanhoFonte: number;
}
```

### 6.4 Caso de Uso: Valores Padrão

Quando trabalhamos com configurações que possuem valores padrão, precisamos garantir que, após a aplicação desses padrões, todas as propriedades estejam definidas:

```typescript
class GerenciadorConfiguracoes {
    private padroes: Required<ConfiguracaoOpcional> = {
        tema: 'claro',
        idioma: 'pt',
        notificacoes: true,
        tamanhoFonte: 14
    };

    aplicarPadroes(config: ConfiguracaoOpcional): Required<ConfiguracaoOpcional> {
        return {
            ...this.padroes,
            ...config
        };
    }

    validarConfiguracao(config: ConfiguracaoOpcional): boolean {
        const completa = this.aplicarPadroes(config);
        
        // Agora podemos usar todas as propriedades sem verificações de undefined
        return completa.tema !== null && 
               completa.idiomo !== null && 
               completa.notificacoes !== null;
    }
}
```

### 6.5 Representação Visual

**Figura 6.1 - Transformação Required**

```
Tipo Original (PerfilParcial)      Required<PerfilParcial>
┌─────────────────────┐           ┌─────────────────────┐
│ nome?: string       │           │ nome: string        │
│ email?: string      │           │ email: string       │
│ telefone?: string   │   -->     │ telefone: string    │
│ endereco?: string   │           │ endereco: string    │
│ bio?: string        │           │ bio: string         │
└─────────────────────┘           └─────────────────────┘
  Todas opcionais                   Todas obrigatórias
```

### 6.6 Exemplo com Validação

```typescript
interface DadosFormulario {
    nome?: string;
    email?: string;
    idade?: number;
    cidade?: string;
}

class ValidadorFormulario {
    static validar(dados: DadosFormulario): Required<DadosFormulario> | string[] {
        const erros: string[] = [];
        
        if (!dados.nome || dados.nome.trim() === '') {
            erros.push('Nome é obrigatório');
        }
        
        if (!dados.email || !this.validarEmail(dados.email)) {
            erros.push('Email válido é obrigatório');
        }
        
        if (!dados.idade || dados.idade < 18) {
            erros.push('Idade deve ser maior ou igual a 18');
        }
        
        if (!dados.cidade || dados.cidade.trim() === '') {
            erros.push('Cidade é obrigatória');
        }
        
        if (erros.length > 0) {
            return erros;
        }
        
        // TypeScript sabe que todas as propriedades estão definidas
        return dados as Required<DadosFormulario>;
    }
    
    private static validarEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}
```

---

## 7. Record\<K, T\>

### 7.1 Conceito e Definição

O Utility Type `Record<K, T>` constrói um tipo de objeto com um conjunto de propriedades `K` (que devem ser strings, numbers ou symbols) do tipo `T`. É extremamente útil para criar tipos de dicionários ou mapas.

### 7.2 Sintaxe

```typescript
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```

### 7.3 Exemplo Prático

```typescript
// Cria um objeto com chaves específicas e valor do tipo string
type DiasSemana = 'domingo' | 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta' | 'sabado';

type HorarioFuncionamento = Record<DiasSemana, string>;

const horario: HorarioFuncionamento = {
    domingo: 'Fechado',
    segunda: '09:00 - 18:00',
    terca: '09:00 - 18:00',
    quarta: '09:00 - 18:00',
    quinta: '09:00 - 18:00',
    sexta: '09:00 - 18:00',
    sabado: '10:00 - 14:00'
};

// Erro se faltar uma chave ou tipo incorreto:
// const horarioIncorreto: HorarioFuncionamento = {
//     segunda: '09:00 - 18:00'
//     // Error: Missing properties
// };
```

### 7.4 Caso de Uso: Mapeamento de Enums

```typescript
enum StatusPedido {
    PENDENTE = 'pendente',
    PROCESSANDO = 'processando',
    ENVIADO = 'enviado',
    ENTREGUE = 'entregue',
    CANCELADO = 'cancelado'
}

// Mapeia cada status para uma descrição
const descricoesStatus: Record<StatusPedido, string> = {
    [StatusPedido.PENDENTE]: 'Pedido aguardando confirmação',
    [StatusPedido.PROCESSANDO]: 'Pedido em preparação',
    [StatusPedido.ENVIADO]: 'Pedido enviado',
    [StatusPedido.ENTREGUE]: 'Pedido entregue',
    [StatusPedido.CANCELADO]: 'Pedido cancelado'
};

// Mapeia cada status para uma cor
const coresStatus: Record<StatusPedido, string> = {
    [StatusPedido.PENDENTE]: '#FFA500',
    [StatusPedido.PROCESSANDO]: '#2196F3',
    [StatusPedido.ENVIADO]: '#9C27B0',
    [StatusPedido.ENTREGUE]: '#4CAF50',
    [StatusPedido.CANCELADO]: '#F44336'
};

function obterInfoStatus(status: StatusPedido): { descricao: string; cor: string } {
    return {
        descricao: descricoesStatus[status],
        cor: coresStatus[status]
    };
}
```

### 7.5 Representação Visual

**Figura 7.1 - Estrutura Record**

```
Record<'a' | 'b' | 'c', number>

┌─────────────────────────────────┐
│  Chaves: 'a' | 'b' | 'c'        │
│  Valor: number                  │
├─────────────────────────────────┤
│  {                              │
│    a: number,                   │
│    b: number,                   │
│    c: number                    │
│  }                              │
└─────────────────────────────────┘

Exemplo:
{
  a: 10,
  b: 20,
  c: 30
}
```

### 7.6 Record com keyof

```typescript
interface Produto {
    id: number;
    nome: string;
    preco: number;
}

type ChavesProduto = keyof Produto; // 'id' | 'nome' | 'preco'

// Cria um mapeamento de cada chave para seu tipo
type MapaTiposProduto = {
    [K in ChavesProduto]: Produto[K];
};

// Equivalente a Record, mas mais específico:
type MapaTiposProduto2 = {
    id: number;
    nome: string;
    preco: number;
};
```

### 7.7 Exemplo Avançado: Internacionalização

```typescript
type Idioma = 'pt' | 'en' | 'es' | 'fr';

interface Traductions {
    boasVindas: string;
    despedida: string;
    salvar: string;
    cancelar: string;
    erro: string;
}

const traductions: Record<Idioma, Traductions> = {
    pt: {
        boasVindas: 'Bem-vindo',
        despedida: 'Até logo',
        salvar: 'Salvar',
        cancelar: 'Cancelar',
        erro: 'Ocorreu um erro'
    },
    en: {
        boasVindas: 'Welcome',
        despedida: 'Goodbye',
        salvar: 'Save',
        cancelar: 'Cancel',
        erro: 'An error occurred'
    },
    es: {
        boasVindas: 'Bienvenido',
        despedida: 'Hasta luego',
        salvar: 'Guardar',
        cancelar: 'Cancelar',
        erro: 'Ocurrió un error'
    },
    fr: {
        boasVindas: 'Bienvenue',
        despedida: 'Au revoir',
        salvar: 'Enregistrer',
        cancelar: 'Annuler',
        erro: 'Une erreur est survenue'
    }
};

class ServicoTraducao {
    private idiomaAtual: Idioma = 'pt';

    setIdioma(idioma: Idioma): void {
        this.idiomaAtual = idioma;
    }

    traduzir(chave: keyof Traductions): string {
        return traductions[this.idiomaAtual][chave];
    }
}
```

---

## 8. Exclude\<T, U\>

### 8.1 Conceito e Definição

O Utility Type `Exclude<T, U>` constrói um tipo excluindo de `T` todos os tipos que são atribuíveis a `U`. É particularmente útil para trabalhar com uniões de tipos, removendo tipos específicos.

### 8.2 Sintaxe

```typescript
type Exclude<T, U> = T extends U ? never : T;
```

### 8.3 Exemplo Prático

```typescript
type DiaUtil = 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta';
type DiaSemana = DiaUtil | 'sabado' | 'domingo';

// Exclui fins de semana
type ApenasDiasUteis = Exclude<DiaSemana, 'sabado' | 'domingo'>;
// Resultado: 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta'

// Exclui dias específicos
type ExcetoSegunda = Exclude<DiaSemana, 'segunda'>;
// Resultado: 'terca' | 'quarta' | 'quinta' | 'sexta' | 'sabado' | 'domingo'
```

### 8.4 Caso de Uso: Filtragem de Tipos

```typescript
type TipoEvento = 'click' | 'hover' | 'focus' | 'blur' | 'keydown' | 'keyup';
type TipoEventoMouse = 'click' | 'hover';

// Obtém apenas eventos de teclado
type TipoEventoTeclado = Exclude<TipoEvento, TipoEventoMouse | 'focus' | 'blur'>;
// Resultado: 'keydown' | 'keyup'

interface Evento {
    tipo: TipoEvento;
    alvo: HTMLElement;
    timestamp: number;
}

class GerenciadorEventos {
    private eventos: Evento[] = [];

    filtrarEventos(tiposExcluir: TipoEventoMouse[]): Evento[] {
        return this.eventos.filter(evento => {
            return !(tiposExcluir as string[]).includes(evento.tipo);
        });
    }

    obterEventosTeclado(): Evento[] {
        return this.eventos.filter(evento => {
            const tipoTeclado: TipoEventoTeclado = evento.tipo as TipoEventoTeclado;
            return tipoTeclado === 'keydown' || tipoTeclado === 'keyup';
        });
    }
}
```

### 8.5 Representação Visual

**Figura 8.1 - Operação Exclude**

```
Tipo T (União Completa)
┌─────────────────────────────────┐
│  'a' | 'b' | 'c' | 'd' | 'e'    │
└─────────────────────────────────┘
              │
              │ Exclude<T, 'b' | 'd'>
              ▼
┌─────────────────────────────────┐
│  'a' | 'c' | 'e'                │
└─────────────────────────────────┘
  Tipos 'b' e 'd' removidos
```

### 8.6 Exclude com null e undefined

```typescript
type ValorPossivel = string | number | null | undefined;

// Remove null e undefined
type ValorDefinido = Exclude<ValorPossivel, null | undefined>;
// Resultado: string | number

function processarValor(valor: ValorPossivel): void {
    if (valor !== null && valor !== undefined) {
        // TypeScript sabe que valor é string | number aqui
        const valorLimpo: ValorDefinido = valor;
        console.log(valorLimpo.toString());
    }
}
```

### 8.7 Exemplo Avançado: Props de Componentes

```typescript
type PropsBase = {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
};

type PropsBotao = PropsBase & {
    variante: 'primario' | 'secundario' | 'terciario';
    tamanho: 'pequeno' | 'medio' | 'grande';
    onClick: () => void;
};

type PropsInput = PropsBase & {
    valor: string;
    placeholder?: string;
    onChange: (valor: string) => void;
    onBlur?: () => void;
};

// Cria união de todos os tipos de props
type PropsComponente = PropsBotao | PropsInput;

// Extrai propriedades comuns excluindo específicas
type PropsComuns = Exclude<keyof PropsComponente, 'variante' | 'tamanho' | 'valor'>;
// Resultado: 'className' | 'style' | 'id' | 'onClick' | 'onChange' | 'onBlur' | 'placeholder'

// Na prática, usamos discriminated unions:
type PropsUnion = 
    | { tipo: 'botao'; variante: string; tamanho: string; onClick: () => void }
    | { tipo: 'input'; valor: string; onChange: (v: string) => void };

function renderizarComponente(props: PropsUnion): JSX.Element {
    if (props.tipo === 'botao') {
        // TypeScript sabe que é PropsBotao
        return <button>{props.variante}</button>;
    } else {
        // TypeScript sabe que é PropsInput
        return <input value={props.valor} />;
    }
}
```

---

## 9. ReturnType\<T\>

### 9.1 Conceito e Definição

O Utility Type `ReturnType<T>` constrói um tipo consistindo do tipo de retorno de uma função `T`. É extremamente útil quando precisamos reutilizar o tipo de retorno de uma função sem duplicação de código.

### 9.2 Sintaxe

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

### 9.3 Exemplo Prático

```typescript
function criarUsuario(nome: string, email: string): {
    id: number;
    nome: string;
    email: string;
    ativo: boolean;
} {
    return {
        id: Date.now(),
        nome,
        email,
        ativo: true
    };
}

// Extrai o tipo de retorno
type Usuario = ReturnType<typeof criarUsuario>;

// Equivalente a:
interface Usuario {
    id: number;
    nome: string;
    email: string;
    ativo: boolean;
}

// Uso:
const usuario: Usuario = criarUsuario('João', 'joao@email.com');
```

### 9.4 Caso de Uso: APIs e Serviços

```typescript
class ServicoAPI {
    async buscarUsuarios(): Promise<{
        id: number;
        nome: string;
        email: string;
    }[]> {
        const resposta = await fetch('/api/usuarios');
        return resposta.json();
    }

    async buscarUsuarioPorId(id: number): Promise<{
        id: number;
        nome: string;
        email: string;
        dataNascimento: Date;
    } | null> {
        const resposta = await fetch(`/api/usuarios/${id}`);
        if (!resposta.ok) return null;
        return resposta.json();
    }
}

// Extrai tipos de retorno
type ListaUsuarios = ReturnType<ServicoAPI['buscarUsuarios']>;
// Promise<{ id: number; nome: string; email: string; }[]>

type UsuarioIndividual = ReturnType<ServicoAPI['buscarUsuarioPorId']>;
// Promise<{ id: number; nome: string; email: string; dataNascimento: Date; } | null>

// Para remover o Promise, usamos Awaited (TypeScript 4.5+)
type UsuariosResolvidos = Awaited<ListaUsuarios>;
// { id: number; nome: string; email: string; }[]

type UsuarioResolvido = Awaited<UsuarioIndividual>;
// { id: number; nome: string; email: string; dataNascimento: Date; } | null
```

### 9.5 Representação Visual

**Figura 9.1 - Extração ReturnType**

```
Função Original
┌─────────────────────────────────────┐
│ function calcular(): {              │
│   resultado: number;                │
│   timestamp: Date;                  │
│ }                                   │
└─────────────────────────────────────┘
              │
              │ ReturnType<typeof calcular>
              ▼
┌─────────────────────────────────────┐
│ {                                   │
│   resultado: number;                │
│   timestamp: Date;                  │
│ }                                   │
└─────────────────────────────────────┘
  Apenas o tipo de retorno
```

### 9.6 ReturnType com Funções Assíncronas

```typescript
async function buscarDadosAPI(): Promise<{
    dados: string[];
    total: number;
    pagina: number;
}> {
    // implementação
    return { dados: [], total: 0, pagina: 1 };
}

// ReturnType inclui Promise
type TipoRetornoCompleto = ReturnType<typeof buscarDadosAPI>;
// Promise<{ dados: string[]; total: number; pagina: number; }>

// Para extrair o tipo resolvido:
type TipoDados = Awaited<ReturnType<typeof buscarDadosAPI>>;
// { dados: string[]; total: number; pagina: number; }

// Alternativa manual (antes do TypeScript 4.5):
type Unpromise<T> = T extends Promise<infer U> ? U : T;
type TipoDadosManual = Unpromise<ReturnType<typeof buscarDadosAPI>>;
```

### 9.7 Exemplo Avançado: Fábricas de Objetos

```typescript
function criarFabricaProduto() {
    return {
        criar: (nome: string, preco: number) => ({
            id: Math.random().toString(36).substr(2, 9),
            nome,
            preco,
            dataCriacao: new Date()
        }),
        
        validar: (produto: { nome: string; preco: number }) => {
            return produto.nome.length > 0 && produto.preco > 0;
        }
    };
}

type FabricaProduto = ReturnType<typeof criarFabricaProduto>;

// Tipo do método criar
type CriarProduto = FabricaProduto['criar'];

// Tipo do produto criado
type Produto = ReturnType<CriarProduto>;
// { id: string; nome: string; preco: number; dataCriacao: Date; }

// Uso:
const fabrica = criarFabricaProduto();
const produto: Produto = fabrica.criar('Notebook', 5000);
```

---

## 10. Parameters\<T\>

### 10.1 Conceito e Definição

O Utility Type `Parameters<T>` constrói um tipo de tupla consistindo dos tipos de parâmetros de uma função `T`. Cada elemento da tupla representa o tipo de um parâmetro da função, na ordem em que são declarados.

### 10.2 Sintaxe

```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```

### 10.3 Exemplo Prático

```typescript
function calcularArea(largura: number, altura: number): number {
    return largura * altura;
}

// Extrai os parâmetros como tupla
type ParametrosCalcularArea = Parameters<typeof calcularArea>;
// [largura: number, altura: number]

// Uso:
const params: ParametrosCalcularArea = [10, 20];
const area = calcularArea(...params); // 200
```

### 10.4 Caso de Uso: Wrappers e Decoradores

```typescript
class Logger {
    static log<T extends (...args: any[]) => any>(
        funcao: T,
        nome: string
    ): T {
        return ((...args: Parameters<T>): ReturnType<T> => {
            console.log(`Chamando ${nome} com argumentos:`, args);
            const resultado = funcao(...args);
            console.log(`Resultado de ${nome}:`, resultado);
            return resultado;
        }) as T;
    }
}

// Função original
function somar(a: number, b: number): number {
    return a + b;
}

// Função com logging
const somarComLog = Logger.log(somar, 'somar');
// Tipo: (a: number, b: number) => number

const resultado = somarComLog(5, 3);
// Console: "Chamando somar com argumentos: [5, 3]"
// Console: "Resultado de somar: 8"
```

### 10.5 Representação Visual

**Figura 10.1 - Extração Parameters**

```
Função Original
┌─────────────────────────────────────┐
│ function processar(                 │
│   id: string,                       │
│   dados: { nome: string },          │
│   opcoes?: { flag: boolean }        │
│ ): void                             │
└─────────────────────────────────────┘
              │
              │ Parameters<typeof processar>
              ▼
┌─────────────────────────────────────┐
│ [                                   │
│   id: string,                       │
│   dados: { nome: string },          │
│   opcoes?: { flag: boolean }        │
│ ]                                   │
└─────────────────────────────────────┘
  Tupla com tipos dos parâmetros
```

### 10.6 Parameters com Métodos de Classe

```typescript
class ServicoUsuario {
    criar(nome: string, email: string): Promise<{ id: number }> {
        return Promise.resolve({ id: 1 });
    }

    atualizar(id: number, dados: Partial<{ nome: string; email: string }>): Promise<boolean> {
        return Promise.resolve(true);
    }

    excluir(id: number): Promise<void> {
        return Promise.resolve();
    }
}

// Extrai parâmetros de métodos específicos
type ParametrosCriar = Parameters<ServicoUsuario['criar']>;
// [nome: string, email: string]

type ParametrosAtualizar = Parameters<ServicoUsuario['atualizar']>;
// [id: number, dados: Partial<{ nome: string; email: string }>]

type ParametrosExcluir = Parameters<ServicoUsuario['excluir']>;
// [id: number]

// Uso em funções genéricas:
function executarOperacao<T extends keyof ServicoUsuario>(
    servico: ServicoUsuario,
    metodo: T,
    ...parametros: Parameters<ServicoUsuario[T]>
): ReturnType<ServicoUsuario[T]> {
    return servico[metodo](...parametros);
}
```

### 10.7 Exemplo Avançado: Event Handlers

```typescript
type EventHandler<T extends (...args: any[]) => void> = (
    evento: Parameters<T>[0]
) => void;

// Exemplo com eventos do React
type ClickHandler = EventHandler<React.MouseEventHandler<HTMLButtonElement>>;
// (evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

type ChangeHandler = EventHandler<React.ChangeEventHandler<HTMLInputElement>>;
// (evento: React.ChangeEvent<HTMLInputElement>) => void

// Uso prático:
interface PropsInput {
    valor: string;
    onChange: ChangeHandler;
    placeholder?: string;
}

const Input: React.FC<PropsInput> = ({ valor, onChange, placeholder }) => {
    const handleChange: ChangeHandler = (evento) => {
        console.log('Valor anterior:', valor);
        console.log('Novo valor:', evento.target.value);
        onChange(evento);
    };

    return (
        <input
            value={valor}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};
```

### 10.8 Combinando Parameters e ReturnType

```typescript
type FuncaoProcessamento = (
    dados: { id: number; valor: string },
    opcoes: { validar: boolean }
) => { sucesso: boolean; mensagem: string };

// Extrai parâmetros
type Params = Parameters<FuncaoProcessamento>;
// [{ id: number; valor: string }, { validar: boolean }]

// Extrai retorno
type Retorno = ReturnType<FuncaoProcessamento>;
// { sucesso: boolean; mensagem: string }

// Cria um tipo combinado
type Operacao = {
    executar: (...args: Params) => Retorno;
    descricao: string;
};

// Implementação
const operacao: Operacao = {
    executar: (dados, opcoes) => {
        if (opcoes.validar && !dados.valor) {
            return { sucesso: false, mensagem: 'Valor obrigatório' };
        }
        return { sucesso: true, mensagem: 'Operação realizada' };
    },
    descricao: 'Processa dados com validação opcional'
};
```

---

## 11. Exercícios Práticos

### Exercício 1: Sistema de Gestão de Tarefas

Crie tipos para um sistema de gestão de tarefas utilizando os Utility Types estudados:

```typescript
// Interface base
interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    status: 'pendente' | 'em_andamento' | 'concluida';
    prioridade: 'baixa' | 'media' | 'alta';
    dataCriacao: Date;
    dataConclusao?: Date;
    responsavelId: number;
}

// a) Crie um tipo para atualização de tarefa (apenas alguns campos podem ser atualizados)
// b) Crie um tipo para exibição pública (sem responsavelId)
// c) Crie um tipo para criação de tarefa (sem id, dataCriacao e dataConclusao)
// d) Crie um tipo que torne todos os campos obrigatórios
```

### Exercício 2: API de Produtos

Dada a função abaixo, utilize `ReturnType` e `Parameters`:

```typescript
async function buscarProdutos(
    filtros: { categoria?: string; precoMin?: number; precoMax?: number },
    paginacao: { pagina: number; limite: number }
): Promise<{
    produtos: Array<{ id: number; nome: string; preco: number }>;
    total: number;
    pagina: number;
}> {
    // implementação
}

// a) Extraia o tipo de retorno da função
// b) Extraia os tipos de parâmetros
// c) Crie um tipo que represente o resultado sem o Promise
// d) Crie um tipo que represente apenas o primeiro parâmetro
```

### Exercício 3: Sistema de Autenticação

```typescript
interface Usuario {
    id: string;
    email: string;
    senha: string;
    nome: string;
    role: 'admin' | 'user' | 'guest';
    token?: string;
    ultimoAcesso?: Date;
}

// a) Crie um tipo para registro (sem id, token e ultimoAcesso)
// b) Crie um tipo para login (apenas email e senha)
// c) Crie um tipo para perfil público (sem senha e token)
// d) Crie um tipo para atualização de perfil (todos opcionais, exceto id)
```

### Exercício 4: Componente de Formulário

Crie tipos para um componente de formulário reutilizável:

```typescript
// a) Use Record para criar um mapeamento de nomes de campos para valores
// b) Use Partial para permitir atualização parcial dos valores
// c) Use Pick para extrair apenas campos de validação
// d) Use Omit para remover campos internos do tipo público
```

---

## 12. Referências Bibliográficas

MICROSOFT. **TypeScript Documentation: Utility Types**. Disponível em: <https://www.typescriptlang.org/docs/handbook/utility-types.html>. Acesso em: maio 2026.

SILVA, João Carlos; SANTOS, Maria Fernanda. **TypeScript Avançado: Padrões e Práticas para Desenvolvimento Front-End**. 2. ed. São Paulo: Casa do Código, 2024.

CERQUEIRA, Rodrigo. **Dominando TypeScript: Do Básico ao Avançado**. Rio de Janeiro: Alta Books, 2025.

MARTIN, Robert C. **Clean Code: Habilidades Práticas do Agile Software**. Tradução de Vandenberg D. de Souza. São Paulo: Prentice Hall, 2023.

GAMMA, Erich et al. **Padrões de Projetos: Soluções Reutilizáveis de Software Orientado a Objetos**. Porto Alegre: Bookman, 2022.

RESIG, John. **Secrets of the JavaScript Ninja**. 2. ed. Shelter Island: Manning Publications, 2024.

W3C. **TypeScript Language Specification**. Disponível em: <https://github.com/microsoft/TypeScript/blob/main/doc/spec-ARCHIVED.md>. Acesso em: maio 2026.

---

**Material elaborado pelo Professor José Carlos Flores para a disciplina de Programação Front-End - Maio/2026**

---

## 👤 GitHub

[![Foto de Perfil](https://github.com/floresjcd.png?size=50)](https://github.com/floresjcd) 
**[@floresjcd](https://github.com/floresjcd)**