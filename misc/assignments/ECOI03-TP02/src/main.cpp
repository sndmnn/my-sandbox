/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include <iostream>
using namespace std;

#include "./utils/utils.h"
#include "./test-manager/TestManager.h"

/**
 * Application entry point
 */
int main()
{
    std::cout << "Insira seu R.A.: ";
    int ra{utils::handleIntegerInput()};
    std::cout << std::endl;

    TestManager testManager{ra, "./tests"};

    int opt{1};
    while (opt != 0)
    {
        std::cout << "    Teste de Algorítmos    "
                  << std::endl
                  << "---------------------------"
                  << std::endl
                  << "1- Bubble Sort"
                  << std::endl
                  << "2- Insertion Sort"
                  << std::endl
                  << "3- Selection Sort"
                  << std::endl
                  << "4- Shellsort"
                  << std::endl
                  << "5- Quick Sort"
                  << std::endl
                  << "0- Sair"
                  << std::endl
                  << "---------------------------"
                  << std::endl
                  << "Sua opção: ";
        opt = utils::handleIntegerInput();
        std::cout << std::endl;

        if (opt > 5 || opt < 0)
            continue;
        else if (opt == 1)
            testManager.test(BubbleSortAlgorithm);
        else if (opt == 2)
            testManager.test(InsertionSortAlgorithm);
        else if (opt == 3)
            testManager.test(SelectionSortAlgorithm);
        else if (opt == 4)
            testManager.test(ShellSortAlgorithm);
        else if (opt == 5)
            testManager.test(QuickSortAlgorithm);
    }

    return EXIT_SUCCESS;
}
