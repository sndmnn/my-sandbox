/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef ACCOUNT_REPOSITORY_H
#define ACCOUNT_REPOSITORY_H

#include <vector>
#include "../models/Account.h"

class AccountsRepository
{
private:
    Account *accounts;

    static int totalAccounts;
    static int accNumber;

public:
    AccountsRepository();

    AccountsRepository(int maximumAccountsNumber);

    /**
     * Returns all registered accounts
     */
    Account *indexAccounts();

    /**
     * Finds an account by its number
     * 
     * @param accNumber number of the account to be searched for
     */
    Account *findAccountByNumber(int accNumber);

    /**
     * Instatiates an `Account` and adds it to the list
     * 
     * @param accOwner name of the future account owner
     * @param accPassword account future password
     */
    void createAccount(std::string accOwner, std::string accPassword);

    /**
     * Updates an account `balance` property
     * 
     * @param accNumber number of the account to be updated
     * @param newBalance new balanceValue to be set
     */
    void updateAccountBalance(int accNumber, double newBalance);

    /**
     * Gets the total accounts registered on the system
     * 
     * @returns the account count
     */
    static int getTotalAccounts();
};

#endif
