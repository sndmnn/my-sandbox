/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include "ShellSort.h"
#include "../../utils/utils.h"

ShellSort::ShellSort(int *arr, int size)
{
    this->originalArray = arr;
    this->orderedArray = arr;
    this->arraySize = size;
}

int *ShellSort::sort()
{
    int *arr{this->orderedArray};
    int size{this->arraySize};

    this->executionStats.start = std::chrono::steady_clock::now();

    int h{1};

    while (h < size / 3)
        h = 3 * h + 1;

    for (; h > 0; h /= 3)
    {
        for (int i{h}; i < size; ++i)
        {
            ++(this->executionStats.keyComparisons);
            for (int j{i}; j >= h && *(arr + j) < *(arr + j - h); j -= h)
            {
                if (j > i)
                    ++(this->executionStats.keyComparisons);

                utils::swap((arr + j), (arr + j - h));
                (this->executionStats.swaps) += 3;
            }
        }
    }

    this->executionStats.stop = std::chrono::steady_clock::now();

    return this->orderedArray;
}
