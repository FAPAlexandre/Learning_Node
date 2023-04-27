//Modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk');

//Modulos internos
const fs = require("fs");

//Iniciando a função das ações da conta
operation()
//Criando as ações da conta
function operation () {

    inquirer.prompt([{
        type: 'list',
        name:  'action',
        message: 'What would you like to do?',
        choices: ['Criar conta', 'Consultar saldo', 'Depositat', 'Sacar', 'Sair']
    },
]).then((answer) => {
    const action = answer['action'];

    if( action === 'Criar conta') {
        createAccount()
    }
})
.catch(error => console.error(error))
}

//Create an account

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco'))
    console.log(chalk.green('Defina as ações da sua conta a seguir'));
}

