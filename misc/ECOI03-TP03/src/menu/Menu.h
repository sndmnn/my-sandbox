/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef MENU_H
#define MENU_H

#include <map>
#include "Option.h"

class Menu
{
private:
    std::map<int, Option> options;

public:
    Menu();

    Menu(std::map<int, Option> options);

    Option selectOption(int index);

    void print();

    bool isValidOption(int opt);

    void removeOption(int opt);
};

#endif
