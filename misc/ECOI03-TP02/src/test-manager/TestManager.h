/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#ifndef TEST_MANAGER_H
#define TEST_MANAGER_H

#include <iostream>
#include <fstream>
#include <stdlib.h>
#include <time.h>

#include "../sorting-algorithms/ExecutionStats.h"

/**
 * Defines several sorting algorithm types used by `testAlgorithm`
 */
enum Algorithm
{
    BubbleSortAlgorithm = 1,
    InsertionSortAlgorithm = 2,
    SelectionSortAlgorithm = 3,
    ShellSortAlgorithm = 4,
    QuickSortAlgorithm = 5
};

class TestManager
{
private:
    int randomSeed;
    std::string testFolder;

    /**
     * Generates a file with random numbers. The first line says how many `n` numbers are in the file and the following lines are the `n` random numbers
     * 
     * @param fileName name of the file to be created
     * 
     * @param totalNumbers number of random numbers to be generated  
     */
    void generateTestFile(std::string fileName, int totalNumbers);

    /**
     * Reads the numbers on a test file and returns them as an array of integers
     * 
     * @param fileName name of the file to be read from
     * 
     * @returns an array containing the numbers read from the file
     */
    int *readTestFile(std::string fileName);

    /**
     * Clears all test files generated for a given test
     */
    void cleanUpTestFiles();

    /**
     * Prints test results
     */
    void printTestResults(std::string testName, ExecutionStats execStats);

    /**
     * Tests a given algorithm defined by `Algorithm` (represented by `T`)
     */
    template <typename T>
    void testAlgorithm();

public:
    TestManager(int randomSeed, std::string testFolder);

    void test(Algorithm algorithm);
};

#endif
