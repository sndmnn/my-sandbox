#include <stdio.h>

#define LOWER_LIMIT_INT 0   // Lower limit of the table
#define UPPER_LIMIT_INT 300 // Upper limit of the table
#define STEP_INT        20  // Step size                        

#define LOWER_LIMIT_FLOAT   0.0 // Lower limit of the table
#define UPPER_LIMIT_FLOAT 300.0 // Upper limit of the table
#define STEP_FLOAT         20.0 // Step size

void f2c_int() {
    for (int fahr = LOWER_LIMIT_INT; fahr <= UPPER_LIMIT_INT; fahr += STEP_INT) {
        int celsius = 5 * (fahr - 32) / 9;
        printf("%d\t%d\n", fahr, celsius);
    }
}

void f2c_float() {
    for (float fahr = LOWER_LIMIT_FLOAT; fahr <= UPPER_LIMIT_FLOAT; fahr += STEP_FLOAT) {
        // If an arithmetic operator has at least one floating-point operand, it will
        // convert an integer operand to float before performing the operation. It is,
        // however, recommended to always specify the decimal point on a constant (literal)
        // to emphasize its decimal nature.
        // 
        // float celsius = 5 * (fahr - 32) / 9;
        
        float celsius = 5.0 / 9.0 * (fahr - 32.0);  
        printf("%3.0f\t%6.1f\n", fahr, celsius);
    }
}

void f2c_inverse() {
    for (float fahr = UPPER_LIMIT_FLOAT; fahr >= LOWER_LIMIT_FLOAT; fahr -= STEP_FLOAT) {
        float celsius = 5.0 / 9.0 * (fahr - 32.0);  
        printf("%3.0f\t%6.1f\n", fahr, celsius);
    }
}

int main() {
    printf("Fahrenheit to Celsius INT\n");
    f2c_int();

    printf("\n");

    printf("Fahrenheit to Celsius FLOAT\n");
    f2c_float();

    printf("\n");

    printf("Fahrenheit to Celsius Reverse\n");
    f2c_inverse();
}
