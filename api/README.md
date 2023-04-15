# Store API
Untuk menjalankan aplikasi lakukan perintah berikut:
1. `npm install` : untuk menginstall package yang diperlukan
2. `cp .env.example .env` : isi dan rubah sesuai dengan environment dan konfigurasi dbms yang digunakan
3. `npm run dbcreate` : untuk inisialisasi database dan migrating

`Note:` jika tidak dirubah maka env `development` yang akan dijalankan

## Link Deployment


## API documentation
open or access route `/api/docs`

## Sequelize generate model
```
npx sequelize-cli model:generate --name user --attributes username:string,email:string,password:string,roleId:integer
npx sequelize-cli model:generate --name role --attributes level_access:string
npx sequelize-cli model:generate --name product --attributes name:string,imageName:string,imageData:blob,price:integer,stock:integer,description:text,categoryId:integer
npx sequelize-cli model:generate --name category --attributes name:string

```

## Sequelize generate seed
```
npx sequelize-cli seed:generate --name user
npx sequelize-cli seed:generate --name role
npx sequelize-cli seed:generate --name product
npx sequelize-cli seed:generate --name category

```