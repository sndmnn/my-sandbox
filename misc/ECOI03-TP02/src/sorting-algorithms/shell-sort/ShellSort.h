/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef SHELL_SORT_H
#define SHELL_SORT_H

#include "../SortingAlgorithm.h"

class ShellSort : public SortingAlgorithm
{
public:
    ShellSort(int *arr, int size);

    int *sort();
};

#endif
