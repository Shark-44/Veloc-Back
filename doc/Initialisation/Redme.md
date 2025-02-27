#initialisation projet

Apres avoir créé un dossier Veloc-back les commandes ont été les suivantes

- npm init -y
- npm install express typeorm reflect-metadata
- npm install --save-dev typescript ts-node nodemon @types/node @types/express
- npm install mysql2 cors

Ensuite creation du tsconfig.json
 .gitignore
 .env(DB_PORT=3306
DB_HOST=localhost
DB_USER=my_user
DB_PASSWORD=my_password
DB_NAME=my_dbname
JWT_SECRET=after_password)

Ajout des scripts dans package.json:
    "start": "nodemon --exec ts-node src/index.ts",
    "build": "tsc",

Et pour finir data-source qui a été repris dans mon github