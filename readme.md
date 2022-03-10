## Como iniciar o back end

* 1° fazer o clone do repositório.

* 2° abrir um terminal no diretório do projeto e rodar "yarn" para instalar as dependências.

* 3° rode o comando " yarn dev " e a seginte mensagem aparecerá no console: "Rodando na porta 8080".

* 4° agora basta usar as rotas a baixo para fazer operações diretas a API.

### Rotas da API

http://localhost:8080 => é a rota raiz da aplicação.

http://localhost:8080/login => cria ou loga um usuario na conta, (rota ainda incompleta).

http://localhost:8080/listdo => lista todos os TODOS criados no DB.

http://localhost:8080/createdo => crea um novo TODO, esta rota guarda um .json com a seginte estrutura...<br>
{

	"title": "titulo",
	"description": "descrição",
	"deadline": "data final"

}

http://localhost:8080/deletedo/:"id da tarefa a ser excluida" => deleta a tarefa cujo o id estiver na requisição, subistitua o: "id da tarefa a ser excluida", pelo id da tarefa em si.

http://localhost:8080/updatedo/:id  =>  encontra a tarefa pelo id e subistitui seus dados pelos novos enviado por um arquivo .json com a seguinte estrutura...

{

	"title": "titulo",
	"description": "descrição",
	"deadline": "data final"

}

    ========  Considerações finais ========

  Este Projeto foi desenvolvido em basicamente 24hs, infelizmente por razões de forças maior foi o tempo que consegui para por em prática.
  Ficou faltando fazer a parte de criação de usuários e permissões de usuários.