//Modulos externos
const inquirer = require('inquirer');
const chalk = require('chalk');
//Modulos internos
const fs = require('fs');

console.log("Iniciamos o Account")

//Chamamando a unção
operation()
//Criando a função para a lista do Menu

function operation() {
    inquirer.prompt([{
        type:'list',
        name:'action',
        message:'O que deseja fazer?',
        choices:['Criar conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair']
    }]).then((answer) => {
        const action = answer ['action']

        if(action === 'Criar conta') {
            createAccount()
        }
        else if(action === 'Depositar') {
            deposit()
        }

        else if(action === 'Consultar saldo') {

        }
        
        else if(action === 'Sacar') {

        }
        else if(action === 'Sair') {
            console.log(chalk.bgBlue('Obrigado por usar o Accounts!')) 
                process.exit()
            

        }
    }) .catch((err) => console.log(err));

}

//Criar a conta
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco'))
    console.log(chalk.green('Defina as opções'))

    buildAccount()
}

function buildAccount() { 
    inquirer.prompt([{
        name:'accountName',
        message:'Digite um nome para sua conta'
    }
    ]).then(answer => {
        const accountName = answer['accountName'];

        console.info(accountName)

        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!')
            )

            buildAccount()
            return
        }
        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance":0"}', function(err) {
            console.error(err)
        })
        console.log(chalk.green('Parabéns, a sua conta foi criada'))
        operation()
    })
    .catch((err) => console.log(err))
}

// add amount to user account
function deposit () {

    inquirer.prompt ([
        {
        name:'accountName',
        message:'Qual o nome da sua conta?'
        }
    ]).then((answer) => {
        const accountName = answer['accountName']
        //verify if account exists
        if(!checkAccount(accountName)) {
            return deposit()
        }

        inquirer.prompt([
            {
            name:'amount',
            message:'Quando você deseja depositar?'
            }
        ]).then((answer) => {
            
            const amount = answer['amount']

            //add amount to user account

            addAmount(accountName, amount)
            operation()

        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
}

function checkAccount(accountName) {
    if(!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Essa conta não existe, tente novamente'))
        return false
    }
    
    return true
}
function addAmount(accountName, amount) {

    const account = getAccount(accountName)

    console.log(account) 

}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf-8',
        flag:'r',
    })


    //return JSON.parse(accountJSON)
}