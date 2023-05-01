//Modulos externos
const inquirer = require('inquirer');
const chalk = require('chalk');

//Modumos internos

const fs = require('fs');

console.log('Iciamos o account')

operation()

function operation () {

    inquirer.prompt([
        //Criando o menu do programa
        {
        type:'list',
        name:'action',
        message: 'O que você deseja fazer?',
        choices:["Criar conta", "Consultar saldo", "Depositar", "Sacar", "Sair"],
        },
    ]).then((answer) => {
        const action = answer['action'];

        if(action === 'Criar conta') {
            createAccount()
        }
    })
    .catch((err) => { console.log(err)})
}

//Create an account

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
}

