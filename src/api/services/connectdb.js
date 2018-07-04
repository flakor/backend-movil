const config = require('../../config');
const sql = require('mssql')

const connection = sql.connect(config.mssql, (err,res)=>{
  if(err){
    throw err;
  } else {
    console.info(`Conectado a SQL Server: ${config.mssql.server} Base de Datos: ${config.mssql.database}`);
  }
})
