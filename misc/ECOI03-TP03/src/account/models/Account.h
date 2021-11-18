/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef ACCOUNT_H
#define ACCOUNT_H

#include <iostream>
#include <string>

class Account
{
private:
    int number;
    double balance;
    std::string ownerName;
    std::string password;

public:
    Account();

    /**
     * Constructs an Account with all its members
     */
    Account(int accountNumber, int balance, std::string ownerName, std::string password);

    /**
     * Receives a password and verifies if it matches the password on the instance
     * 
     * @param password password to be verified against
     * 
     * @returns `true` if both passwords match, `false` otherwise
     */
    bool verifyPassword(std::string password);

    /**
     * Access method for the `number` property
     * 
     * @returns the account number
     */
    int getNumber();

    /**
     * Access method for the `balance` property
     */
    double getBalance();

    /**
     * Setter method for the `balance` property
     */
    void setBalance(double newBalance);

    /**
     * Increments the account balance by the ammount specified
     * 
     * @param ammount ammount to be incremented
     */
    void deposit(double ammount);

    /**
     * Decreases the account balance by the ammount specified
     * 
     * @param ammount ammount to be decreased
     */
    void withdraw(double ammount);

    /**
     * Decreases the account balance by the ammount specified + a tax
     * 
     * @param ammount ammount to be decreased
     * 
     * @param tax tax to be added on the withdraw ammount
     */
    void withdraw(double ammount, double tax);

    /**
     * Prints information about the account, including the balance
     */
    void printBalance();

    /**
     * Overloads the << operator, allowing this class to be printed on terminal easily
     */
    friend std::ostream &operator<<(std::ostream &os, Account &ac);
};

#endif
