/**
 * @author Henrique Cotta
 * @author Dárcio Melo
 * 
 * @date 20 Out. 2021
 */

#include <iostream>
#include <fstream>
#include <cstring>
#include <stdlib.h>

#include "TestManager.h"
#include "../sorting-algorithms/bubble-sort/BubbleSort.h"
#include "../sorting-algorithms/insertion-sort/InsertionSort.h"
#include "../sorting-algorithms/selection-sort/SelectionSort.h"
#include "../sorting-algorithms/shell-sort/ShellSort.h"
#include "../sorting-algorithms/quick-sort/QuickSort.h"

TestManager::TestManager(int randomSeed, std::string testFolder)
{
    this->randomSeed = randomSeed;
    this->testFolder = testFolder;
}

void TestManager::generateTestFile(std::string fileName, int totalNumbers)
{
    std::ofstream fout;
    std::string filePath{this->testFolder + "/" + fileName};

    fout.open(filePath);

    if (!fout.is_open())
        std::cerr << "Unable to open file '" << filePath << "'"
                  << std::endl;

    fout << totalNumbers
         << std::endl;

    int size{totalNumbers * 2};
    int arr[size];

    for (int i{0}; i < size; ++i)
        *(arr + i) = 0;

    for (int i = 0; i < totalNumbers; i++)
    {
        int p{(rand() * 7) % size};

        while (*(arr + p) == 1)
            p = (p + 1) % size;

        *(arr + p) = 1;

        fout << p + 1 << std::endl;
    }

    fout.close();
}

int *TestManager::readTestFile(std::string fileName)
{
    std::ifstream fin{};
    std::string filePath{this->testFolder + "/" + fileName};

    fin.open(filePath);

    int *v{nullptr};

    if (!fin.is_open())
        std::cerr << "Unable to read from file '" << filePath << "'";

    int n{0};
    fin >> n;

    v = new int[n];

    for (int i = 0; i < n; i++)
        fin >> *(v + i);

    fin.close();

    return v;
}

void TestManager::cleanUpTestFiles()
{
    std::remove((this->testFolder + "/" + "test-100.txt").c_str());
    std::remove((this->testFolder + "/" + "test-200.txt").c_str());
    std::remove((this->testFolder + "/" + "test-500.txt").c_str());
    std::remove((this->testFolder + "/" + "test-1000.txt").c_str());
    std::remove((this->testFolder + "/" + "test-2000.txt").c_str());
    std::remove((this->testFolder + "/" + "test-5000.txt").c_str());
    std::remove((this->testFolder + "/" + "test-10000.txt").c_str());
}

void TestManager::printTestResults(std::string testName, ExecutionStats execStats)
{
    std::cout << testName
              << std::endl
              << "Número de comparações entre chaves: " << execStats.keyComparisons
              << std::endl
              << "Número de movimentos de registros: " << execStats.swaps
              << std::endl
              << "Tempo de execução: " << execStats.duration << " milisegundos"
              << std::endl
              << std::endl;
}

void writeTestResults(int *arr, int arrSize, std::string filePath)
{
    std::ofstream fout;

    fout.open(filePath);

    if (!fout.is_open())
        std::cerr << "Unable to open file '" << filePath << "'"
                  << std::endl;

    for (int i{0}; i < arrSize; ++i)
    {
        fout << *(arr + i) << " ";
    }

    fout.close();
}

template <typename T>
void TestManager::testAlgorithm()
{
    int testsEntries[7]{100, 200, 500, 1000, 2000, 5000, 10000};

    for (int i{0}; i < 7; ++i)
    {
        int testEntries{*(testsEntries + i)};
        std::string testFile{"test-" + std::to_string(testEntries) + ".txt"};

        this->generateTestFile(testFile, testEntries);
        int *arrTest{this->readTestFile(testFile)};

        T sortingAlgorithm{arrTest, testEntries};
        sortingAlgorithm.sort();

        this->printTestResults("Teste " + std::to_string(testEntries), *sortingAlgorithm.getExecutionStats());
    }

    this->cleanUpTestFiles();
}

void TestManager::test(Algorithm algorithm)
{
    switch (algorithm)
    {
    case BubbleSortAlgorithm:
        std::cout << "Testando 'bubble sort'"
                  << std::endl
                  << std::endl;

        testAlgorithm<BubbleSort>();
        break;

    case InsertionSortAlgorithm:
        std::cout << "Testando 'insertion sort'"
                  << std::endl
                  << std::endl;

        testAlgorithm<InsertionSort>();
        break;

    case SelectionSortAlgorithm:
        std::cout << "Testando 'selection sort'"
                  << std::endl
                  << std::endl;

        testAlgorithm<SelectionSort>();
        break;

    case ShellSortAlgorithm:
        std::cout << "Testando 'shell sort'"
                  << std::endl
                  << std::endl;

        testAlgorithm<ShellSort>();
        break;

    case QuickSortAlgorithm:
        std::cout << "Testando 'quick sort'"
                  << std::endl
                  << std::endl;

        testAlgorithm<QuickSort>();
        break;

    default:
        break;
    }
}
