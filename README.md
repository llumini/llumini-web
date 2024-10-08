# POC para Salvamento e Renderização de Notas em Markdown

O objetivo desta POC é verificar se a implementação de notas em Markdown pode ser integrada ao sistema de forma eficiente, tanto no armazenamento quanto na renderização. Também vamos avaliar se a renderização no front-end pode ser melhorada com a inclusão de componentes adicionais.

### Hipóteses:

- Provavelmente, a nota deve ser criada no momento em que o usuário clicar em "Nova Nota", contendo o conteúdo vazio. A partir daí, a nota só pode ser editada e salva.

### Desafios:

- Como garantir que salvar a nota no banco de dados não seja uma operação custosa? Evitando chamadas desnecessárias ao banco de dados.

### To-Do:

- [x] Enviar os dados do markdown para o back-end e salvar no banco de dados.
- [ ] Criar a página de visualização das notas.
- [ ] Implementar a página de criação de notas.
- [ ] Implementar a edição de notas.
