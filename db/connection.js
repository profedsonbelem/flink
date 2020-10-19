const mysql = require('mysql')

module.exports = {
    execSQLQuery: () => {
        const connection = mysql.createPool({
            host: "us-cdbr-east-02.cleardb.com",
            user: "b5e448b4688021",
            port: "3306",
            password: "68e0cd3d",
            database: "heroku_2d72029db592459"
        });
      
        return connection
    }
    
}




