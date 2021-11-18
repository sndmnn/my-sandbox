/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef QUICK_SORT_H
#define QUICK_SORT_H

#include "../SortingAlgorithm.h"

class QuickSort : public SortingAlgorithm
{
private:
    int partition(int lo, int hi);
    void sort(int lo, int hi);

public:
    QuickSort(int *arr, int size);
    int *sort();
};

#endif
