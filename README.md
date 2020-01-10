nescessario instalar as dependencias do package-lock.json

execute na linha de comando com:

node app.js <cep>

ex:

node app.js 99999999

Se o cep for encontrado com sucesso os dados serão salvos automaticamente no banco de dados
caso contrario retornara o erro que aconteceu.


    """
    observacões

    Não consegui conectar ao servidor que foi fornecido para o exercicio entao todos os meus testes foram 
    feitos em um database que criada localmente com os dados de criação de tabela fornecidos>>>

            CREATE TABLE `dados_dep` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `cep` int(11) DEFAULT NULL,
        `nome` varchar(45) NOT NULL,
        `endereco` varchar(255) DEFAULT NULL,
        `bairro` varchar(255) DEFAULT NULL,
        `estado` varchar(2) DEFAULT NULL,
        `cidade` varchar(255) DEFAULT NULL,
        `retorno_api` json DEFAULT NULL,
        `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
        `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    """

