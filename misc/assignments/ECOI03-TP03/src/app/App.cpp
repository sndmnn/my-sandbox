/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include <iostream>
#include <map>
#include <limits>

#include "App.h"
#include "../utils/utils.h"
#include "../account/controllers/AccountsController.h"

App::App() {}

void App::setup()
{
    AccountsController *accController = new AccountsController();

    std::map<int, Option> accountMenuOptionMap{};

    accountMenuOptionMap.emplace(1, Option{"1- Informações da conta", [accController]()
                                           {
                                               accController->printAccountInfo();
                                           }});

    accountMenuOptionMap.emplace(2, Option{"2- Saldo", [accController]()
                                           {
                                               accController->printAccountBalance();
                                           }});

    accountMenuOptionMap.emplace(3, Option{"3- Depósito", [accController]()
                                           {
                                               std::cout << "Informe o valor a ser depositado: ";
                                               double ammount{utils::handleNumericInput<double>()};

                                               accController->depositToAccount(ammount);
                                           }});

    accountMenuOptionMap.emplace(4, Option{"4- Saque", [accController]()
                                           {
                                               std::cout << "Informe o valor a ser retirado: ";
                                               double ammount{utils::handleNumericInput<double>()};

                                               accController->withdrawFromAccount(ammount);
                                           }});

    accountMenuOptionMap.emplace(5, Option{"5- Saque (taxa)", [accController]()
                                           {
                                               std::cout << "Informe o valor a ser retirado: ";
                                               double ammount{utils::handleNumericInput<double>()};

                                               std::cout << "Informe o valor da taxa: ";
                                               double tax{utils::handleNumericInput<double>()};

                                               accController->withdrawFromAccount(ammount, tax);
                                           }});

    accountMenuOptionMap.emplace(6, Option{"6- Sair", []() {}});

    Menu *accMenu = new Menu(accountMenuOptionMap);

    std::map<int, Option> mainMenuOptionMap{};

    mainMenuOptionMap.emplace(1, Option{"1- Criar conta", [accController]()
                                        {
                                            std::cout << "Insira o nome do titular: ";
                                            std::string name;
                                            std::getline(std::cin >> std::ws, name);

                                            std::cout << "Insira a senha da conta (sem espaços): ";
                                            std::string password;
                                            std::cin >> password;

                                            accController->createAccount(name, password);
                                        }});

    mainMenuOptionMap.emplace(2, Option{"2- Acessar conta",
                                        [accController, accMenu]()
                                        {
                                            std::cout << "Insira o número da conta: ";
                                            int accountNumber{utils::handleNumericInput<int>()};

                                            if (!accController->doesAccountExist(accountNumber))
                                            {
                                                std::cout << "Conta não encontrada!" << std::endl;
                                                return;
                                            }

                                            accController->setSelectedAccount(accountNumber);

                                            std::cout << "Insira a senha da conta: ";
                                            std::string password;
                                            std::cin >> password;

                                            if (!accController->doesSelectedAccountPasswordMath(password))
                                            {
                                                std::cout << "Senha incorreta!" << std::endl;
                                                return;
                                            }

                                            int opt = -1;

                                            do
                                            {
                                                std::cout << "-------------- Menu ---------------" << std::endl;
                                                accMenu->print();
                                                std::cout << "-----------------------------------" << std::endl;
                                                std::cin >> opt;

                                                if (accMenu->isValidOption(opt))
                                                    accMenu->selectOption(opt).handle();

                                            } while (opt != 6);
                                        }});

    mainMenuOptionMap.emplace(3, Option{"3- Imprimir contas", [accController]()
                                        {
                                            accController->indexAccounts();
                                        }});

    mainMenuOptionMap.emplace(4, Option{"4- Sair", []() {}});

    this->menu = Menu(mainMenuOptionMap);
}

void App::execute()
{
    int opt = -1;

    do
    {
        std::cout << "-------------- Menu ---------------" << std::endl;
        this->menu.print();
        std::cout << "-----------------------------------" << std::endl;
        std::cin >> opt;

        if (this->menu.isValidOption(opt))
            this->menu.selectOption(opt).handle();

    } while (opt != 4);
}
