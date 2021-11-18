/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef SALGORITHM_H
#define SALGORITHM_H

#include "ExecutionStats.h"

class SortingAlgorithm
{
protected:
    OngoingExecutionStats executionStats;
    int *originalArray;
    int *orderedArray;
    int arraySize;

    double getExecutionTime();

public:
    ExecutionStats *getExecutionStats();
};

#endif
