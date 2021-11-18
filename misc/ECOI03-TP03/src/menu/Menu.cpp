/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include <iostream>
#include "Menu.h"

Menu::Menu() {}

Menu::Menu(std::map<int, Option> options)
{
    this->options = options;
}

Option Menu::selectOption(int index)
{
    return this->options[index];
}

void Menu::print()
{
    for (
        std::map<int, Option>::iterator it = this->options.begin();
        it != this->options.end();
        ++it)
    {
        std::cout << it->second.description << std::endl;
    }
}

bool Menu::isValidOption(int opt)
{
    return opt > 0 && opt < this->options.size();
}

void Menu::removeOption(int opt)
{
    this->options.erase(opt);
}
