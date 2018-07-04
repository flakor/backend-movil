module.exports = {
   'serverport':3000,
   'tokenexp': 3600,
   'secret': 'MY_SECRET',
   'appId':'26',
   // 'database': 'mongodb://mills:mills@ds123490.mlab.com:23490/mean-tasks'
   // 'database': 'mongodb://localhost:27017/mean-tasks'

   'mssql': {
       user: 'portiz',
       password: 'Portiz',
       server: 'SQLDesarrollo', // You can use 'localhost\\instance' to connect to named instance
       database: 'CGTM',
       //
       options: {
           encrypt: false // Use this if you're on Windows Azure
       }
   },
   'dgtmApi': {
      "tokenUrl": "http://192.168.0.139:8280/token",
          "servicesBaseURL": "https://192.168.0.139:8243/",
          "consumerKey": "QLhdR_SR7rsUYFZolRdUi5D36dMa",
          "consumerSecret": "_s8FizHSoufyfWhftpZmQO_XmDMa",

      "services": {
          "PermisosUsuarioInternet": "Acceso/2.0.0/PermisosUsuarioInternet"
      }
    }

};
