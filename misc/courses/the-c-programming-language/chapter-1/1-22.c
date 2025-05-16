#include <stdio.h>
#include <stdlib.h>

// Easiest solution. Doesn't respect the exact character limit, but gets close

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

        if (c == '\n')
            char_counter = 0;
    }
}

// ----------------------------------------------------------------------------

// Harder solution. Respects the exact character limit when possible, and 
// prints long words on their own line. It's really dirty though.

void clear_buff(int buff[], int buff_len) {
    for (int i = 0; i < buff_len; ++i)
        buff[i] = '\0';
}

void print_buff(int buff[], int buff_len) {
    for (int i = 0; i < buff_len; ++i)
        putchar(buff[i]);
}

int print_and_skew(int buff[], int buff_len, int last_index) {
    // if a buffer holds less than the capacity, print it and move on
    if (last_index < buff_len - 1) {
        print_buff(buff, buff_len);
        clear_buff(buff, buff_len);
        return 0;
    }


    int space_index = -1;

    // finds the index of the last blank char
    for (int i = buff_len - 1; i >= 0; --i) {
        if (buff[i] == ' ' || buff[i] == '\t') {
            space_index = i; 
            break;
        }
    }

    // if no space is found, print the entire buffer and move on
    if (space_index == -1) {
        print_buff(buff, buff_len);
        clear_buff(buff, buff_len);
        return 0;
    }    

    // prints up to the last blank char and puts a line break
    for (int i = 0; i < buff_len; ++i) { 
        putchar(buff[i]);
        
        if (i == space_index) {
            putchar('\n');
            break;
        }
    }

    // skews buffer
    int i = 0;
    int j = space_index + 1;

    while (j < buff_len) {
        buff[i] = buff[j];
        ++i;
        ++j;
    }

    for (int k = i; k < buff_len; ++k)
        buff[k] = '\0';

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
        
        if (i == max_chars || c == '\n') {
            i = print_and_skew(buff, max_chars, i - 1);
        }
    }
}

int main (int argc, char** argv) {
    int max_chars = atoi(argv[1]); 

    break_before_max(max_chars);

    return 0;
}

