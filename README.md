# React Kanban 📋

Um gerenciador de tarefas estilo Kanban moderno, desenvolvido com React, TypeScript e Radix UI. Este projeto permite organizar tarefas em diferentes colunas de status, definir prioridades e gerenciar o ciclo de vida de cada atividade de forma intuitiva.

## 🚀 Funcionalidades

- **Gerenciamento de Tarefas (CRUD):** Criar, visualizar, editar e excluir tarefas.
- **Quadro Kanban:** Visualização clara das tarefas organizadas por "Para Fazer", "Em Progresso" e "Concluídas".
- **Sistema de Prioridades:** Definição de níveis de prioridade (Baixa, Média, Alta) com identificação visual.
- **Validação de Dados:** Formulários validados com Zod para garantir a integridade das informações.
- **Transições Inteligentes:** Botões de ação rápida para mover tarefas entre colunas (ex: Iniciar -> Concluir).
- **Interface Responsiva:** Desenvolvido com Radix UI Themes para uma experiência premium e acessível.
- **Persistência Simulada:** Integração com JSON Server para persistência de dados local durante o desenvolvimento.

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/):** Biblioteca principal para a interface.
- **[Vite](https://vitejs.dev/):** Build tool ultra-rápida.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para maior segurança no desenvolvimento.
- **[Radix UI Themes](https://www.radix-ui.com/themes):** Componentes de UI acessíveis e estilizados.
- **[Zod](https://zod.dev/):** Esquemas de validação de dados.
- **[JSON Server](https://github.com/typicode/json-server):** Mock API para simular um backend REST.

## 📦 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (versão 18 ou superior recomendada).
- Gerenciador de pacotes npm.

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/slayer-br/react-kanban.git
   cd react-kanban
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o Mock Backend (JSON Server):**
   ```bash
   npm run json-server
   ```
   *O servidor rodará por padrão na porta `3000`.*

4. **Iniciar o Frontend (Vite):**
   Abra um novo terminal e execute:
   ```bash
   npm run dev
   ```

5. **Acessar a aplicação:**
   Abra o navegador no endereço indicado pelo Vite (geralmente `http://localhost:5173`).

## 📁 Estrutura do Projeto

- `src/components`: Componentes reutilizáveis da interface (TaskBoard, TaskCard, Form).
- `src/contexts`: Gerenciamento de estado global via Context API.
- `src/hooks`: Hooks customizados para lógica de tarefas.
- `src/entities`: Definições de tipos e interfaces TypeScript.
- `src/services`: Camada de comunicação com a API.

---

## ✨ Autor

- GitHub - <a href="https://github.com/slayer-br" target="_blank" rel="noopener noreferrer">@slayer-br</a>
- LinkedIn - <a href="https://www.linkedin.com/in/carlos-alberto-da-silva-93758b270/" target="_blank" rel="noopener noreferrer">@slayer-br</a>

---
## 📜 Licença  

Este projeto está sob a **Licença MIT**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes. 

Projeto do módulo **React + TypeScript** – [OneBitCode](https://onebitcode.com)