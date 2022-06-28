/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef EXECUTION_STATS_H
#define EXECUTION_STATS_H

#include <chrono>

namespace
{
    using time_point = std::chrono::time_point<std::chrono::steady_clock>;
}

struct OngoingExecutionStats
{
    time_point start;
    time_point stop;
    int keyComparisons{0};
    int swaps{0};
};

struct ExecutionStats
{
    double duration;
    int keyComparisons;
    int swaps;
};

#endif