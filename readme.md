
<h1 align="center"> Projeto Interdisciplinar | Backend Pi | DSM</h1>
<p align="center">

  ![]()
  
</p>


Api em NodeJs, para cadastro de usuários e requisição de usuários do projeto Casa Sônia do Grupo-02 do [Projeto Interdisciplinar](https://github.com/Lucas-Ed/grupo-02_pi) da disciplina de Engenharia de Software I, 2024.2, <a href="https://fatecararas.cps.sp.gov.br/tecnologia-em-desenvolvimento-de-softwares-multiplataforma/">Curso DSM- Desenvolvimento de software multiplataforma.</a>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

<p align="center">
  <!-- <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"> -->
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
      <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=whit">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
    <img src="https://img.shields.io/badge/Postgres-316192?style=for-the-badge&logo=postgresql&logoColor=white">
    <img src="https://img.shields.io/badge/Supabase-316192?style=for-the-badge&logo=supabase&logoColor=white">




</p>

Foi utilizado o banco de dados Postgres para armazenar os dados dos usuários cadastrados em ambiente local, para produção foi utilizado o banco de dados ás a service: [Supabase](https://supabase.com).

Baixe este repositório e execute o comando abaixo para instalar as dependências do projeto.

```bash
npm install 

```
No arquivo .env.example, renomeie para .env e adicione as variáveis de ambiente conforme o exemplo abaixo:

```bash
CONNECTION_STRING=postgres://seu-usuario:sua-senha@localhost:5432/cadastros
```
No exemplo acima substitua na url seu usuário e senha do banco de dados Postgres, do PgAdmin.

Execute o backend localmente com o comando abaixo:

```bash
node index.js
```	


Rotas da Api
```bash
http://localhost:3000/
```	
```bash
http://localhost:3000/cadastrados
```	
```bash
http://localhost:3000/cadastrar
```	


<!-------------https://www.dio.me/articles/aprenda-de-uma-vez-redefinir-sua-senha-do-postgresql-usuario-postgres----------------------->

<!---------------https://www.luiztools.com.br/post/criando-uma-webapi-com-node-js-e-postgresql/?utm_source=google&utm_medium=cpc&utm_campaign=12231680300&utm_content=149492543022&utm_term=nodejs%20postgresql&gad_source=1&gclid=Cj0KCQiArby5BhCDARIsAIJvjIRmGCYrC4_xQuXJFmN2ThIjk4MV5L27BEj7NDoMUtuWCtqdtLw_XqkaAj5iEALw_wcB#2-------------------------------->

Caso tenha problemas com conexão do banco de dados PostgreSql(PgAdmin), segue alguns comandos auxiliares, comandos do psql no terminal :

Teste de Conexão Manual:
```bash
psql -U postgres -d cadastros -h localhost
```

listar usuários:
```bash
psql -U postgres -h localhost

```
## Autores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Lucas-Ed">
        <img src="https://avatars.githubusercontent.com/u/30055762?v=4" width="100px;" alt="Lucas"/>
        <br />
        <sub>
          <b>Lucas Eduardo</b>
        </sub>
       </a>
       <br />
       <a href="https://www.instagram.com/lucas.eduardo007/" title="Instagram">@lucas.eduardo007</a> 
       <br />
    </td> 
    <td align="center">
      <a href="https://github.com/Marques894">
        <img src="https://avatars.githubusercontent.com/u/136036690?v=4" width="100px;" alt="Renan"/>
        <br />
        <sub>
          <b>Renan Augusto</b>
        </sub>
       </a>
       <br />
       <a href="https://www.instagram.com/augustti_m/" title="Instagram">@augustti_m</a>
       <br />
    </td>
     <td align="center">
      <a href="https://github.com/willsf2021">
        <img src="https://avatars.githubusercontent.com/u/178531137?v=4" width="100px;" alt="Wilson"/>
        <br />
        <sub>
          <b>wilson</b>
        </sub>
       </a>
       <br />
       <a href="https://www.instagram.com/w.pereira1307" title="instagram">@w.pereira1307</a>
       <br />
    </td>
     <td align="center">
      <a href="https://github.com/FlpRocha236">
        <img src="https://avatars.githubusercontent.com/u/109861866?v=4" width="100px;" alt="Felipe"/>
        <br />
        <sub>
          <b>Felipe Rocha</b>
        </sub>
       </a>
       <br />
       <a href="https://www.instagram.com/fe.r0cha" title="instagram">@fe.r0cha</a>
       <br />
    </td>
    <td align="center">
      <a href="https://github.com/Jefferson434 ">
        <img src="https://avatars.githubusercontent.com/u/179768830?v=4" width="100px;" alt="Jefferson"/>
        <br />
        <sub>
          <b>Jefferson</b>
        </sub>
       </a>
       <br />
       <a href="https://www.instagram.com" title="instagram"></a>
       <br />
    </td>
     <td align="center">
      <a href="https://github.com/BFerreiraCardoso">
        <img src="https://avatars.githubusercontent.com/u/178849487?v=4" width="100px;" alt="Bruna"/>
        <br />
        <sub>
          <b>Bruna Ferreira</b>
        </sub>
       </a>
       <br />
       <a href="https://www.instagram.com" title="instagram"></a>
       <br />
    </td>
  </tr>
  </table>
  <br>

Professor, <a href="https://github.com/orlandosaraivajr">Orlando Saraiva.</a>

  ---
## :memo: Licença

Esse projeto está sob a licença MIT.

---
