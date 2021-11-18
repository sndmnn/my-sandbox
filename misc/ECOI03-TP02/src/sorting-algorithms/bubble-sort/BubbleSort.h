/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef BUBBLE_SORT_H
#define BUBBLE_SORT_H

#include "../SortingAlgorithm.h"

class BubbleSort : public SortingAlgorithm
{
public:
    BubbleSort(int *arr, int size);

    int *sort();
};

#endif
