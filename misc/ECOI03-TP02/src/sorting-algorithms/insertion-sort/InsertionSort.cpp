/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include "InsertionSort.h"
#include "../../utils/utils.h"

InsertionSort::InsertionSort(int *arr, int size)
{
    this->originalArray = arr;
    this->orderedArray = arr;
    this->arraySize = size;
}

int *InsertionSort::sort()
{
    int *arr{this->orderedArray};
    int size{this->arraySize};

    this->executionStats.start = std::chrono::steady_clock::now();

    for (int i{1}; i < size; ++i)
    {
        int el{*(arr + i)};

        ++(this->executionStats.keyComparisons);
        for (int j{i}; j > 0 && *(arr + j - 1) > el; --j)
        {
            if (j < i)
                ++(this->executionStats.keyComparisons);

            utils::swap((arr + j), (arr + j - 1));
            (this->executionStats.swaps) += 3;
        }
    }

    this->executionStats.stop = std::chrono::steady_clock::now();

    return this->orderedArray;
}
