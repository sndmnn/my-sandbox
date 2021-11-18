/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include <chrono>
#include "SortingAlgorithm.h"

namespace
{
    using duration = std::chrono::duration<double, std::milli>;
}

double SortingAlgorithm::getExecutionTime()
{
    duration diff = this->executionStats.stop - this->executionStats.start;

    return diff.count();
}

ExecutionStats *SortingAlgorithm::getExecutionStats()
{
    return new ExecutionStats{
        this->getExecutionTime(),
        this->executionStats.keyComparisons,
        this->executionStats.swaps};
}
