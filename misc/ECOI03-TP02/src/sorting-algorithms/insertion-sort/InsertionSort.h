/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef INSERTION_SORT_H
#define INSERTION_SORT_H

#include "../SortingAlgorithm.h"

class InsertionSort : public SortingAlgorithm
{
public:
    InsertionSort(int *arr, int size);

    int *sort();
};

#endif
