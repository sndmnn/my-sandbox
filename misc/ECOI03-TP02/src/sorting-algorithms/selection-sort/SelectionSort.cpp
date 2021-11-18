/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include "SelectionSort.h"
#include "../../utils/utils.h"

SelectionSort::SelectionSort(int *arr, int size)
{
    this->originalArray = arr;
    this->orderedArray = arr;
    this->arraySize = size;
}

int *SelectionSort::sort()
{
    int *arr{this->orderedArray};
    int size(this->arraySize);

    this->executionStats.start = std::chrono::steady_clock::now();

    for (int i{0}; i < size; ++i)
    {
        int min{i};
        for (int j{i + 1}; j < size; ++j)
        {
            ++(this->executionStats.keyComparisons);
            if (*(arr + j) < *(arr + min))
                min = j;
        }

        utils::swap((arr + min), (arr + i));
        (this->executionStats.swaps) += 3;
    }

    this->executionStats.stop = std::chrono::steady_clock::now();

    return this->orderedArray;
}
