//Modulos externos
const inquirer = require('inquirer');
const chalk = require('chalk');

//Modulos internos

const fs = require('fs');


//Mensagem inicial do Account
console.log(chalk.bgGreen.black('*__Iniciando o Account__*'))

//Chamando a função da lista
operation()

//Criando a função da lista
function operation() {
    inquirer.prompt([
        {
        type: 'list',
        name:'action',
        message: 'What you want to do?',
        choices: ['Create account', 'Check balance', 'Deposit', 'To withdraw', 'To go out']
    }
]).then((answer) => { //Criando a conta de acordo com a opção escolhida da lista
    const action = answer ['action'];//Pegando a opção da lista de acordo com a Action escolhida
    if(action === 'Create account') { 
        createAccount() // Criando a conta 
    }
}) .catch((err) => { // Tratando o erro
    console.log(err)
})
}

//Criando a conta
function createAccount() {
    console.log(chalk.bgGreen.black('Congratulations. Your account has been created'))
    console.log(chalk.green('Set the options'))

    buildAccount()
}


function buildAccount() {

    inquirer.prompt([
        {
            name: 'Account Name',
            message: 'Choice a name for your account'
        }
    ]).then((answer) => {
        const accouneName = answer['AccountName']

        console.info(accouneName)

        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts') 
        }

        if(fs.existsSync(`accounts/${accouneName}.json`)) {
            console.log(chalk.bgRed.black('Account already exists')
            )
            buildAccount()
        }

        
    }).catch((err) => console.log(err))
}