const axios= require('axios')
const mysql= require('mysql')

const params = {'cep': process.argv[2]}


function doQuery(cep,nome,bairro,endereco,cidade,estado,retornoapi){
    return "INSERT INTO `dados_dep`(cep,nome,bairro,endereco,cidade,estado,retorno_api) VALUES ('"+cep+"','"+nome+"','"+bairro+"','"+endereco+"','"+cidade+"','"+estado+"','"+retornoapi+"')";
}

// const connection = mysql.createConnection({
//     host     : 'lstaging.cweudo5c98bn.sa-east-1.rds.amazonaws.com',
//     user     : 'pyqa',
//     password : 'sUQu1gH7gl9#uBoKnB',
//     database : 'teste_py'
//   });

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'alunos'
  });  
  
  axios.get('http://cep.bldstools.com/', {params}).then(function (response) {
      if(response.data.code == 200){
          const data = response.data.result
          let cep = data.cep
          let nome = "user"
          let bairro = data.bairro
          let endereco = data.logradouro
          let cidade = data.localidade
          let estado = data.uf
          let retornoApi = response.data.result
          

          console.log(data)


          connection.connect(function(err) {
            if (err) {
              console.error('error connecting: ' + err.stack);
              return;
            }
           
            
          });
          
         connection.query(doQuery(
             cep=cep,
             nome=nome,
             bairro=bairro,
             endereco=endereco,
             cidade=cidade,
             estado=estado,
             retornoapi=retornoApi))

             console.log("Os dados foram salvos no Banco de dados")


         connection.end()
    }else{
        console.log(response)
    }
    
   }).catch(function(error){
       if(error){
           
       }

   })

   











