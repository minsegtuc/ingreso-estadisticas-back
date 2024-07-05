import { createPool } from 'mysql2/promise';

export const connection = new createPool({
    host: '190.228.29.53',
    user: '0329a64e_admin',
    password: 'mcl5nrohdjP1',
    database: '0329a64e_estadisticas_ingreso',
    port: 3306
    // host: 'localhost',
    // user: 'root',
    // password: 'admin',
    // database: 'mydb',
    // port: 3306
});

