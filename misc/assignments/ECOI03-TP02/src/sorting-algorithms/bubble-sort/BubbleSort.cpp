/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include "BubbleSort.h"
#include "../../utils/utils.h"

BubbleSort::BubbleSort(int *arr, int size)
{
    this->originalArray = arr;
    this->orderedArray = arr;
    this->arraySize = size;
}

int *BubbleSort::sort()
{
    int *arr{this->orderedArray};
    int size{this->arraySize};

    this->executionStats.start = std::chrono::steady_clock::now();

    for (int i{0}; i < size - 1; ++i)
    {
        for (int j{0}; j < size - i - 1; ++j)
        {
            ++(this->executionStats.keyComparisons);
            if (*(arr + j) > *(arr + j + 1))
            {
                utils::swap((arr + j), (arr + j + 1));
                (this->executionStats.swaps) += 3;
            }
        }
    }

    this->executionStats.stop = std::chrono::steady_clock::now();

    return this->orderedArray;
}
