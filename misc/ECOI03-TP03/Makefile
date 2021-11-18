CC = g++
SOURCE_FOLDER = ./src
BUILD_FOLDER = ./build

tp03: main.o App.o Menu.o AccountsController.o AccountsRepository.o Account.o
	$(CC) -o tp03 \
		$(BUILD_FOLDER)/Account.o \
		$(BUILD_FOLDER)/AccountsRepository.o \
		$(BUILD_FOLDER)/AccountsController.o \
		$(BUILD_FOLDER)/Menu.o \
		$(BUILD_FOLDER)/App.o \
		$(BUILD_FOLDER)/main.o

main.o: $(SOURCE_FOLDER)/main.cpp
	$(CC) -c $(SOURCE_FOLDER)/main.cpp -o $(BUILD_FOLDER)/main.o

App.o: $(SOURCE_FOLDER)/app/App.cpp $(SOURCE_FOLDER)/app/App.h $(SOURCE_FOLDER)/utils/utils.h
	$(CC) -c $(SOURCE_FOLDER)/app/App.cpp -o $(BUILD_FOLDER)/App.o

Menu.o: $(SOURCE_FOLDER)/menu/Menu.cpp $(SOURCE_FOLDER)/menu/Menu.h
	$(CC) -c $(SOURCE_FOLDER)/menu/Menu.cpp -o $(BUILD_FOLDER)/Menu.o

AccountsController.o: $(SOURCE_FOLDER)/account/controllers/AccountsController.cpp $(SOURCE_FOLDER)/account/controllers/AccountsController.h
	$(CC) -c $(SOURCE_FOLDER)/account/controllers/AccountsController.cpp -o $(BUILD_FOLDER)/AccountsController.o

AccountsRepository.o: $(SOURCE_FOLDER)/account/repositories/AccountsRepository.cpp $(SOURCE_FOLDER)/account/repositories/AccountsRepository.h
	$(CC) -c $(SOURCE_FOLDER)/account/repositories/AccountsRepository.cpp -o $(BUILD_FOLDER)/AccountsRepository.o

Account.o: $(SOURCE_FOLDER)/account/models/Account.cpp $(SOURCE_FOLDER)/account/models/Account.h
	$(CC) -c $(SOURCE_FOLDER)/account/models/Account.cpp -o $(BUILD_FOLDER)/Account.o
