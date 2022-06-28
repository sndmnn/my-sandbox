/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include "QuickSort.h"
#include "../../utils/utils.h"

QuickSort::QuickSort(int *arr, int size)
{
    this->originalArray = arr;
    this->orderedArray = arr;
    this->arraySize = size;
}

int QuickSort::partition(int lo, int hi)
{
    int *arr{this->orderedArray};

    int i{lo};
    int j{hi + 1};
    int v = *(arr + lo);

    while (true)
    {
        while (arr[++i] < v)
        {
            ++(this->executionStats.keyComparisons);
            if (i == hi)
                break;
        }

        while (v < arr[--j])
        {
            ++(this->executionStats.keyComparisons);
            if (j == lo)
                break;
        }

        if (i >= j)
            break;

        utils::swap((arr + i), (arr + j));
        ++(this->executionStats.swaps);
    }

    utils::swap((arr + lo), (arr + j));
    ++(this->executionStats.swaps);

    return j;
}

void QuickSort::sort(int lo, int hi)
{
    if (hi <= lo)
        return;

    int j{this->partition(lo, hi)};
    sort(lo, j - 1);
    sort(j + 1, hi);
}

int *QuickSort::sort()
{
    this->executionStats.start = std::chrono::steady_clock::now();
    this->sort(0, this->arraySize);
    this->executionStats.stop = std::chrono::steady_clock::now();

    return this->orderedArray;
}
