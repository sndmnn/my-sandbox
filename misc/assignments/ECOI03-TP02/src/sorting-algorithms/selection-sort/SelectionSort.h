/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef SELECTION_SORT_H
#define SELECTION_SORT_H

#include "../SortingAlgorithm.h"

class SelectionSort : public SortingAlgorithm
{
public:
    SelectionSort(int *arr, int size);

    int *sort();
};

#endif
