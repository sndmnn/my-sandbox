/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include "AccountsController.h"

AccountsController::AccountsController()
{
    this->dataStore = AccountsRepository{30};
}

void AccountsController::indexAccounts()
{
    Account *accounts = this->dataStore.indexAccounts();

    for (int i{0}; i < AccountsRepository::getTotalAccounts(); ++i)
    {
        std::cout << accounts[i];
    }
}

bool AccountsController::doesAccountExist(int accNumber)
{
    Account *acc = this->dataStore.findAccountByNumber(accNumber);

    return acc->getNumber() != 0;
}

bool AccountsController::doesSelectedAccountPasswordMath(std::string password)
{
    Account *acc = this->dataStore.findAccountByNumber(this->selectedAccountNumber);

    return acc->verifyPassword(password);
}

void AccountsController::createAccount(std::string owner, std::string password)
{
    this->dataStore.createAccount(owner, password);
}

void AccountsController::setSelectedAccount(int accountNumber)
{
    this->selectedAccountNumber = accountNumber;
}

void AccountsController::printAccountInfo()
{
    Account *acc = this->dataStore.findAccountByNumber(this->selectedAccountNumber);

    std::cout << *acc << std::endl;
}

void AccountsController::printAccountBalance()
{
    Account *acc = this->dataStore.findAccountByNumber(this->selectedAccountNumber);

    acc->printBalance();
}

void AccountsController::depositToAccount(double ammount)
{
    Account *acc = this->dataStore.findAccountByNumber(this->selectedAccountNumber);

    acc->deposit(ammount);
}

void AccountsController::withdrawFromAccount(double ammount)
{
    Account *acc = this->dataStore.findAccountByNumber(this->selectedAccountNumber);

    double accountBalance = acc->getBalance();

    if (accountBalance > ammount)
        acc->withdraw(ammount);
    else
        std::cout << "Saldo insuficiente!" << std::endl;
}

void AccountsController::withdrawFromAccount(double ammount, double tax)
{
    Account *acc = this->dataStore.findAccountByNumber(this->selectedAccountNumber);
    double accountBalance = acc->getBalance();

    if (accountBalance > ammount + tax)
        acc->withdraw(ammount + tax);
    else
        std::cout << "Saldo insuficiente!" << std::endl;
}