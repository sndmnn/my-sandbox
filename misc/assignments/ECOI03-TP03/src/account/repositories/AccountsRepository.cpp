/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include "AccountsRepository.h"

int AccountsRepository::totalAccounts = 0;
int AccountsRepository::accNumber = 1;

AccountsRepository::AccountsRepository() {}

AccountsRepository::AccountsRepository(int maximumAccountsNumber)
{
    this->accounts = new Account[maximumAccountsNumber];
}

Account *AccountsRepository::indexAccounts()
{
    return this->accounts;
}

void AccountsRepository::createAccount(std::string accOwner, std::string accPassword)
{
    if (AccountsRepository::accNumber >= 30)
    {
        std::cout << "Numero máximo de contas registradas atingido!" << std::endl;
        return;
    }

    Account acc{
        AccountsRepository::accNumber,
        0,
        accOwner,
        accPassword};

    this->accounts[AccountsRepository::accNumber - 1] = acc;

    AccountsRepository::totalAccounts += 1;
    AccountsRepository::accNumber += 1;
}

Account *AccountsRepository::findAccountByNumber(int accNumber)
{
    for (int i{0}; i < 30; ++i)
    {
        if (this->accounts[i].getNumber() == accNumber)
            return &this->accounts[i];
    }

    return new Account{0, 0, "", ""};
}

void AccountsRepository::updateAccountBalance(int accNumber, double newBalance)
{
    for (int i{0}; i < 30; ++i)
    {
        if (this->accounts[i].getNumber() == accNumber)
            this->accounts[i].setBalance(newBalance);
    }
}

int AccountsRepository::getTotalAccounts()
{
    return AccountsRepository::totalAccounts;
}
