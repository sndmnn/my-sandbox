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

void insert_line_break_in_buffer(int buff[], int buff_len, int buff_with_nl[]) {
    int last_space_index = -1;
    
    // find the index where a line break should be put
    for (int i = buff_len; i > 0; --i) {
        if (buff[i] == ' ' || buff[i] == '\t')
            last_space_index = i; 
        else if (last_space_index > -1)
            break;
    }
    
    // insert a line break in the return buffer
    int index_offset = 0;
    for (int i = 0; i < buff_len; ++i) { 
        if (i == last_space_index) {
            buff_with_nl[i] = '\n';
            index_offset = 1;
        }

        buff_with_nl[i + index_offset] = buff[i];
    } 
}

void clear_buff(int buff[], int buff_len) {
    for (int i = 0; i < buff_len; ++i)
        buff[i] = '\0';
}

void print_buff(int buff[], int buff_len) {
    for (int i = 0; i < buff_len; ++i)
        putchar(buff[i]);
}

// Breaks on first blank before the character limit
void break_before_max(int max_chars) {
    int buff[max_chars];
    clear_buff(buff, max_chars);
    
    int c;
    int i = 0;
    int buff_with_nl[max_chars + 1];
    clear_buff(buff, max_chars + 1);

    while ((c = getchar()) != EOF) {
        buff[i++] = c;

        if (c == '\n') {
            print_buff(buff, max_chars);
            clear_buff(buff, max_chars);
            i = 0;
        }
        else if (i == max_chars) {
            insert_line_break_in_buffer(buff, max_chars, buff_with_nl);
            print_buff(buff_with_nl, max_chars + 1);
            clear_buff(buff_with_nl, max_chars + 1);
            clear_buff(buff, max_chars);
            i = 0;
        } 
    }
}

int main (int argc, char** argv) {
    int max_chars = atoi(argv[1]); 

    break_before_max(max_chars);

    return 0;
}
