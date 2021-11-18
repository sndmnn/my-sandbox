/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef ACCOUNTS_CONTROLLER_H
#define ACCOUNTS_CONTROLLER_H

#include "../repositories/AccountsRepository.h"

class AccountsController
{
private:
    AccountsRepository dataStore;

    int selectedAccountNumber;

public:
    AccountsController();

    /**
     * Lists all registered accounts
     */
    void indexAccounts();

    /**
     * Verifies if an account is registered
     * 
     * @param accNumber number of the account to be searched for
     * 
     * @returns `true` if the account is found, `false` otherwise
     */
    bool doesAccountExist(int accNumber);

    /**
     * Verifies if the selected account password matches a given string
     * 
     * @param password string to verify the account password against
     * 
     * @returns `true` if the password matches, `false` otherwise
     */
    bool doesSelectedAccountPasswordMath(std::string password);

    /**
     * Registers a new account in the datastore
     * 
     * @param owner name of the future account owner
     * 
     * @param password password to be set for the future account
     */
    void createAccount(std::string owner, std::string password);

    /**
     * Sets the selected account number, which is used as a context for account specific methods
     * 
     * @param accountNumber account number to be set as selected
     */
    void setSelectedAccount(int accountNumber);

    /**
     * Prints the selected account information
     */
    void printAccountInfo();

    /**
     * Prints the selected account information and balance
     */
    void printAccountBalance();

    /**
     * Adds a given ammount to the selected account balance
     * 
     * @param ammount ammount to be added to the selected account
     */
    void depositToAccount(double ammount);

    /**
     * Removes a given ammount to the selected account balance
     * 
     * @param ammount ammount to be removed from the selected account
     */
    void withdrawFromAccount(double ammount);

    /**
     * Removes a given ammount + a tax to the selected account balance
     * 
     * @param ammount ammount to be removed from the selected account
     * 
     * @param tax ammount to be added on the removed ammount
     */
    void withdrawFromAccount(double ammount, double tax);
};

#endif
