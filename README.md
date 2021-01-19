# projeto-hashtag

## Como rodar o projeto
Passo 1: crie um arquivo chamado *.env* na raiz do projeto.
Aqui está um exemplo:
```
APP_PORT=3000
APP_HOST=0.0.0.0

DB_CLIENT=postgresql
DB_NAME=postgres
DB_USER=postgres
DB_PASS=123456
DB_HOST=postgres

PGADMIN_PORT=3001
PGADMIN_MAIL=admin@hashtag.com
PGADMIN_PASS=123456
```
Passo 2:
```sh
docker-compose up
```
## Como rodar as migrations
*Certifique-se que o projeto está rodando*
```sh
docker-compose exec api npx knex migrate:latest
```
É possível acessar o admin do banco de dados simplesmente acessando a seguinte url:<br /> *http://localhost:{{ PGADMIN_PORT }}*
## Como fazer commits
Passo 1: adicionar os arquivos
```sh
git add .
```
Passo 2: rodar o commit
```sh
git commit
```
## Endpoints
Listar os *pilots*: {{ URL }}/pilots _GET_<br/>
Cadastrar um *pilot*: {{ URL }}/pilots _POST_

## Cadastro de *pilot*
```json
{
	"name": "string",
	"mass": "number",
	"height": "number",
	"vehicleId": "string uuid"
}
```
