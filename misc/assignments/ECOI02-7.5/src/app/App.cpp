/**
 * @author Henrique Cotta
 * @date 22 Jul. 2021
 */

#include <iostream>
#include <map>
#include "App.h"

App::App() {}

void App::setup()
{
    MenuController *menuController = new MenuController();

    std::map<int, Option> menuMap;

    menuMap.emplace(0, Option{"0 - Sair", []() {}});

    menuMap.emplace(1, Option{"1 - Inserir pessoa",
                              [menuController]()
                              { menuController->insertPerson(); }});

    menuMap.emplace(2, Option{"2 - Listar todas as pessoas",
                              [menuController]()
                              { menuController->index(); }});

    menuMap.emplace(3, Option{"3 - Encontrar pessoa por CPF",
                              [menuController]()
                              { menuController->findPersonByCpf(); }});

    menuMap.emplace(4, Option{"4 - Encontrar pessoas com sobrepeso",
                              [menuController]()
                              { menuController->findPeopleOverweight(); }});

    menuMap.emplace(5, Option{"5 - Encontrar pessoa mais alta",
                              [menuController]()
                              { menuController->findHighestPerson(); }});

    menuMap.emplace(6, Option{"6 - Comparar idades por CPF",
                              [menuController]()
                              { menuController->findOlderPersonByCpf(); }});

    menuMap.emplace(7, Option{"7 - Ler dados de arquivo",
                              [menuController]()
                              { menuController->readDataFromCsv("./data.csv"); }});

    this->menu = Menu(menuMap);
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

    } while (opt != 0);
}
