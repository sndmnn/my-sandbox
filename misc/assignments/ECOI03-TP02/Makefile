CC = g++
SOURCE_FOLDER = ./src
BUILD_FOLDER = ./build

tp02: main.o utils.o SortingAlgorithm.o TestManager.o BubbleSort.o InsertionSort.o SelectionSort.o ShellSort.o QuickSort.o
	$(CC) -o tp02 \
		$(BUILD_FOLDER)/utils.o \
		$(BUILD_FOLDER)/SortingAlgorithm.o \
		$(BUILD_FOLDER)/BubbleSort.o \
		$(BUILD_FOLDER)/InsertionSort.o \
		$(BUILD_FOLDER)/SelectionSort.o \
		$(BUILD_FOLDER)/ShellSort.o \
		$(BUILD_FOLDER)/QuickSort.o \
		$(BUILD_FOLDER)/TestManager.o \
		$(BUILD_FOLDER)/main.o

main.o: $(SOURCE_FOLDER)/main.cpp $(SOURCE_FOLDER)/test-manager/TestManager.h $(SOURCE_FOLDER)/utils/utils.h
	$(CC) -c $(SOURCE_FOLDER)/main.cpp -o $(BUILD_FOLDER)/main.o

TestManager.o: $(SOURCE_FOLDER)/test-manager/TestManager.cpp $(SOURCE_FOLDER)/test-manager/TestManager.h $(SOURCE_FOLDER)/utils/utils.h $(SOURCE_FOLDER)/sorting-algorithms/quick-sort/QuickSort.h $(SOURCE_FOLDER)/sorting-algorithms/bubble-sort/BubbleSort.h
	$(CC) -c $(SOURCE_FOLDER)/test-manager/TestManager.cpp -o $(BUILD_FOLDER)/TestManager.o

QuickSort.o: $(SOURCE_FOLDER)/sorting-algorithms/quick-sort/QuickSort.cpp $(SOURCE_FOLDER)/sorting-algorithms/quick-sort/QuickSort.h $(SOURCE_FOLDER)/utils/utils.h $(SOURCE_FOLDER)/sorting-algorithms/SortingAlgorithm.h
	$(CC) -c $(SOURCE_FOLDER)/sorting-algorithms/quick-sort/QuickSort.cpp -o $(BUILD_FOLDER)/QuickSort.o

ShellSort.o: $(SOURCE_FOLDER)/sorting-algorithms/shell-sort/ShellSort.cpp $(SOURCE_FOLDER)/sorting-algorithms/shell-sort/ShellSort.h $(SOURCE_FOLDER)/utils/utils.h $(SOURCE_FOLDER)/sorting-algorithms/SortingAlgorithm.h
	$(CC) -c $(SOURCE_FOLDER)/sorting-algorithms/shell-sort/ShellSort.cpp -o $(BUILD_FOLDER)/ShellSort.o

SelectionSort.o: $(SOURCE_FOLDER)/sorting-algorithms/selection-sort/SelectionSort.cpp $(SOURCE_FOLDER)/sorting-algorithms/selection-sort/SelectionSort.h $(SOURCE_FOLDER)/utils/utils.h $(SOURCE_FOLDER)/sorting-algorithms/SortingAlgorithm.h
	$(CC) -c $(SOURCE_FOLDER)/sorting-algorithms/selection-sort/SelectionSort.cpp -o $(BUILD_FOLDER)/SelectionSort.o

InsertionSort.o: $(SOURCE_FOLDER)/sorting-algorithms/insertion-sort/InsertionSort.cpp $(SOURCE_FOLDER)/sorting-algorithms/insertion-sort/InsertionSort.h $(SOURCE_FOLDER)/utils/utils.h $(SOURCE_FOLDER)/sorting-algorithms/SortingAlgorithm.h
	$(CC) -c $(SOURCE_FOLDER)/sorting-algorithms/insertion-sort/InsertionSort.cpp -o $(BUILD_FOLDER)/InsertionSort.o

BubbleSort.o: $(SOURCE_FOLDER)/sorting-algorithms/bubble-sort/BubbleSort.cpp $(SOURCE_FOLDER)/sorting-algorithms/bubble-sort/BubbleSort.h $(SOURCE_FOLDER)/utils/utils.h $(SOURCE_FOLDER)/sorting-algorithms/SortingAlgorithm.h
	$(CC) -c $(SOURCE_FOLDER)/sorting-algorithms/bubble-sort/BubbleSort.cpp -o $(BUILD_FOLDER)/BubbleSort.o

SortingAlgorithm.o: $(SOURCE_FOLDER)/sorting-algorithms/SortingAlgorithm.cpp $(SOURCE_FOLDER)/sorting-algorithms/SortingAlgorithm.h
	$(CC) -c $(SOURCE_FOLDER)/sorting-algorithms/SortingAlgorithm.cpp -o $(BUILD_FOLDER)/SortingAlgorithm.o

utils.o: $(SOURCE_FOLDER)/utils/utils.cpp $(SOURCE_FOLDER)/utils/utils.h
	$(CC) -c $(SOURCE_FOLDER)/utils/utils.cpp -o $(BUILD_FOLDER)/utils.o
