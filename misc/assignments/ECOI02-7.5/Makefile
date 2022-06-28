CC = g++
SOURCE_FOLDER = ./src
BUILD_FOLDER = ./build

app: Main.o Date.o Cpf.o Person.o PersonRepository.o MenuController.o Menu.o App.o CsvParser.o
	$(CC) -o app \
		$(BUILD_FOLDER)/Main.o \
		$(BUILD_FOLDER)/Date.o \
		$(BUILD_FOLDER)/Cpf.o \
		$(BUILD_FOLDER)/Person.o \
		$(BUILD_FOLDER)/PersonRepository.o \
		$(BUILD_FOLDER)/MenuController.o \
		$(BUILD_FOLDER)/Menu.o \
		$(BUILD_FOLDER)/App.o \
		$(BUILD_FOLDER)/CsvParser.o

Main.o: $(SOURCE_FOLDER)/Main.cpp $(SOURCE_FOLDER)/app/App.h
	$(CC) -c $(SOURCE_FOLDER)/Main.cpp -o $(BUILD_FOLDER)/Main.o

Date.o: $(SOURCE_FOLDER)/date/Date.cpp $(SOURCE_FOLDER)/date/Date.h
	$(CC) -c $(SOURCE_FOLDER)/date/Date.cpp -o $(BUILD_FOLDER)/Date.o

Cpf.o: $(SOURCE_FOLDER)/cpf/Cpf.cpp $(SOURCE_FOLDER)/cpf/Cpf.h
	$(CC) -c $(SOURCE_FOLDER)/cpf/Cpf.cpp -o $(BUILD_FOLDER)/Cpf.o

Person.o: $(SOURCE_FOLDER)/person/Person.cpp $(SOURCE_FOLDER)/person/Person.h
	$(CC) -c $(SOURCE_FOLDER)/person/Person.cpp -o $(BUILD_FOLDER)/Person.o

PersonRepository.o: $(SOURCE_FOLDER)/person/PersonRepository.cpp $(SOURCE_FOLDER)/person/PersonRepository.h
	$(CC) -c $(SOURCE_FOLDER)/person/PersonRepository.cpp -o $(BUILD_FOLDER)/PersonRepository.o

Menu.o: $(SOURCE_FOLDER)/menu/Menu.cpp $(SOURCE_FOLDER)/menu/Menu.h $(SOURCE_FOLDER)/menu/Option.h
	$(CC) -c $(SOURCE_FOLDER)/menu/Menu.cpp -o $(BUILD_FOLDER)/Menu.o

MenuController.o: $(SOURCE_FOLDER)/menu/MenuController.cpp $(SOURCE_FOLDER)/menu/MenuController.h
	$(CC) -c $(SOURCE_FOLDER)/menu/MenuController.cpp -o $(BUILD_FOLDER)/MenuController.o

App.o: $(SOURCE_FOLDER)/app/App.cpp $(SOURCE_FOLDER)/app/App.h $(SOURCE_FOLDER)/menu/MenuController.cpp $(SOURCE_FOLDER)/menu/MenuController.h $(SOURCE_FOLDER)/menu/Menu.h $(SOURCE_FOLDER)/menu/Menu.cpp
	$(CC) -c $(SOURCE_FOLDER)/app/App.cpp -o $(BUILD_FOLDER)/App.o

CsvParser.o: $(SOURCE_FOLDER)/csv/CsvParser.cpp $(SOURCE_FOLDER)/csv/CsvParser.h
	$(CC) -c $(SOURCE_FOLDER)/csv/CsvParser.cpp -o $(BUILD_FOLDER)/CsvParser.o