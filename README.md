# README

Este é um repositório do GitHub contendo um projeto que utiliza o Vite para desenvolvimento e TypeScript para compilação. Abaixo estão os comandos necessários para instalar as dependências, configurar o ambiente e compilar o projeto:

## Configuração do Ambiente

Antes de iniciar o desenvolvimento ou compilação do projeto, é necessário configurar o arquivo de ambiente. Copie o arquivo `.env.example` para `.env` e faça as modificações necessárias de acordo com sua configuração local.

```bash
cp .env.example .env
```

Em seguida, abra o arquivo `.env` e modifique as variáveis de acordo com sua configuração.

## Comandos

### Instalar Dependências

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento utilizando Vite, execute o seguinte comando:

```bash
npm run dev
```

Este comando iniciará um servidor de desenvolvimento local e abrirá automaticamente o navegador padrão com a aplicação em execução. O servidor será atualizado automaticamente sempre que houver alterações nos arquivos do projeto.

### Compilação

Para compilar o projeto utilizando TypeScript e Vite, execute o seguinte comando:

```bash
npm run build
```

Este comando compilará o projeto utilizando o TypeScript e o Vite, gerando os arquivos otimizados para produção na pasta `dist`.
