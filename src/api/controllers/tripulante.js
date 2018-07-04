const config = require('../../config');
const sql = require('mssql')

module.exports.tripulanteRead = function(req, res) {


  request = new sql.Request();
    request.query(`EXEC [${config.mssql.database}].[${config.mssql.user}].PA_B_DatosTripulante ${req.params.id}`, (err, result) =>{
      if(err)
        throw err;

      datos = result.recordset;

      request.query(`EXEC [${config.mssql.database}].[${config.mssql.user}].PA_B_EspecialidadTripulante ${req.params.id}`, (err, result) =>{
        if(err)
          throw err;

        especialidades = result.recordset;

          request.query(`EXEC [${config.mssql.database}].[${config.mssql.user}].PA_B_CursosTripulante ${req.params.id}`, (err, result) =>{
            if(err)
              throw err;

              cursos = result.recordset;

              request.query(`EXEC [${config.mssql.database}].[${config.mssql.user}].PA_B_TituloTripulante ${req.params.id}`, (err, result) =>{
                if(err)
                  throw err;

                  titulos = result.recordset;

                  person = {
                            datos,
                            titulos: titulos,
                            especialidades: especialidades,
                            cursos: cursos}


                  res.send(person);


            })

        })

    })

  })

};
