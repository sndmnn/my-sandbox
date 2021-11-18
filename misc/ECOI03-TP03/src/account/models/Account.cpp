/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */
#include "Account.h"

Account::Account() {}

Account::Account(int accountNumber, int balance, std::string ownerName, std::string password)
{
    this->number = accountNumber;
    this->balance = balance;
    this->ownerName = ownerName;
    this->password = password;
}

bool Account::verifyPassword(std::string password)
{
    return this->password == password;
}

int Account::getNumber()
{
    return this->number;
}

double Account::getBalance()
{
    return this->balance;
}

void Account::setBalance(double newBalance)
{
    this->balance = newBalance;
}

void Account::deposit(double ammount)
{
    this->balance += ammount;
}

void Account::withdraw(double ammount)
{
    this->balance -= ammount;
}

void Account::withdraw(double ammount, double tax)
{
    this->balance -= ammount + tax;
}

void Account::printBalance()
{
    std::cout << *this
              << "Saldo: " << this->balance
              << std::endl;
}

std::ostream &operator<<(std::ostream &os, Account &ac)
{
    os << "-- Conta --"
       << std::endl
       << "Número: " << ac.number
       << std::endl
       << "Titular: " << ac.ownerName
       << std::endl;

    return os;
}
