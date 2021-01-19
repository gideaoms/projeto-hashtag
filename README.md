# projeto-hashtag

## Como rodar o projeto
```sh
docker-compose up
```
## Como rodar as migrations
*Certifique-se que o projeto está rodando*
```sh
docker-compose exec api npx knex migrate:latest
```
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
