/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include <iostream>
#include <limits>

#include "utils.h"

void utils::swap(int *a, int *b)
{
    int aux{*a};
    *a = *b;
    *b = aux;
}

int utils::handleIntegerInput()
{
    int value;

    while (!(std::cin >> value))
    {
        std::cout << "Por favor insira um valor numérico" << std::endl;
        std::cin.clear();
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
    }

    return value;
};
