#include <stdio.h>
#include <math.h>

// Just use the string.h function strlen. This was done as an exercise, though
// it works fairly well.
int string_length(char s[]) {
    int len = 0;

   while (s[len] != '\0')
       ++len;

   return len;
}

// Just use the stdio function atoi. This was done as an exercise and does not
// behave well if the string contains any non-numeric characters
int string_to_int(char s[]) {
    int len = string_length(s);
    int num = 0;

    int i = 0;

    if (s[0] == '-') 
        ++i; 

    while (i < len) {
        num += (s[i] - 48) * pow(10, len - 1 - i);

        ++i;
    }

    if (s[0] == '-')
        num *= -1;

    return num;
}

int main (int argc, char** argv) {
    int spaces = string_to_int(argv[1]);
    int c;

    while ((c = getchar()) != EOF) {
        if (c == '\t')
            for (int i = 0; i < spaces; ++i)
                putchar(' ');
        else
            putchar(c);
    }

    return 0;
}
