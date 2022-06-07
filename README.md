# fastek тестовое задание

<pre>
1)Express
2)sequelize ORM
3)Postgres DB
</pre>

### Start project
##### Create new .env file based on .env.example and fill it
<pre>
<span><strong>npm i</strong>                         <small>//Install dependencies</small></span>
<span><strong>npx sequelize-cli db:create</strong>   <small>//Create database if not exist in Postgres</small></span>
<span><strong>npx sequelize-cli db:migrate</strong>  <small>//Run migrations</small></span>
<span><strong>npx sequelize-cli db:seed:all</strong> <small>//Run seeds with test data</small></span>
<span><strong>npm run dev</strong>                   <small>//Run project</small></span>
</pre>
