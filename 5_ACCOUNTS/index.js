//Modulos externos
const inquirer = require('inquirer');
const chalk = require('chalk');
//Modulos internos
const fs = require('fs');

console.log("Iniciamos o Accoubnt")

//Chamamando a unção
operation()
//Criando a função para a lista do Menu

function operation() {
    inquirer.prompt([{
        type:'list',
        name:'action',
        message:'O que deseja fazer?',
        choices:['Criar conta', 'Consultar conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair']
    }]).then((answer) => {
        const action = answer ['action']

        if(action === 'Criar conta') {
            createAccount()
        }
    }) .catch((err) => console.log(err));

}

//Criar a conta
function createAccount() {
    console.log(chalk.bgGreen('Parabéns, você criou a sua conta'))
    console.log(chalk.green('Defina as opções'))
}

