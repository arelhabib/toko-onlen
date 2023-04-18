# Store API
Untuk menjalankan aplikasi lakukan perintah berikut:
1. `npm install` : untuk menginstall package yang diperlukan
2. `cp .env.example .env` : isi dan rubah sesuai dengan environment dan konfigurasi dbms yang digunakan
3. `npm run dbcreate` : untuk inisialisasi database
4. `npm run dbprod` : untuk inisialisasi migrate dan seed

`Note:` jika tidak ada `.env` maka env `development` yang akan dijalankan

## Link Deployment
https://toko-onlen-api.onrender.com

`Note:` jika respon lama dibawah 30s, app sedang mode sleep. jika lebih salahin providernya (minta redeploy, padahal log gada crash)

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
npx sequelize-cli seed:generate --name dev
npx sequelize-cli seed:generate --name prod

```