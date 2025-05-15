#include <stdio.h>
#include <stdlib.h>

// Breaks on first blank character after the character limit
void break_on_first_blank(int max_chars) {
    int c, char_counter = 0;

    while ((c = getchar()) != EOF) {
        putchar(c);
        ++char_counter;

        if (char_counter >= max_chars && (c == ' ' || c == '\t')) {
            putchar('\n');
            char_counter = 0;
        }
    }
}

// ---------------------------------------------------------------------------------

void clear_buff(int buff[], int buff_len) {
    for (int i = 0; i < buff_len; ++i)
        buff[i] = '\0';
}

void print_buff(int buff[], int buff_len) {
    for (int i = 0; i < buff_len; ++i)
        putchar(buff[i]);
}

int print_and_skew(int buff[], int buff_len) {
    int space_index = -1;

    // finds the index of the last blank char
    for (int i = buff_len - 1; i >= 0; --i) {
        if (buff[i] == ' ' || buff[i] == '\t') {
            space_index = i; 
            break;
        }
    }

    // prints up to the last blank char and puts a line break
    // or prints the whole buffer if there's no blank character
    for (int i = 0; i < buff_len; ++i) { 
        putchar(buff[i]);
        
        if (i == space_index) {
            putchar('\n');
            break;
        }
    }

    int i = 0;
    int j = space_index + 1;

    while (j < buff_len) {
        buff[i] = buff[j];
        ++i;
        ++j;
    } 

    return i;
}

// Breaks on first blank before the character limit
void break_before_max(int max_chars) {
    int buff[max_chars];
    clear_buff(buff, max_chars);
    
    int c;
    int i = 0;
    while ((c = getchar()) != EOF) {
        buff[i++] = c;
        
        if (i >= max_chars) {
            i = print_and_skew(buff, max_chars); 
        }
    }
}

int main (int argc, char** argv) {
    int max_chars = atoi(argv[1]); 

    break_before_max(max_chars);

    return 0;
}
