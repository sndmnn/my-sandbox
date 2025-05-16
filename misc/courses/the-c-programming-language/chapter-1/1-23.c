#include <stdio.h>

#define IN  1
#define OUT 0

int main() {
    int buff[2] = { '\0', '\0' };
    int i = 0; 
    int comment_flag = OUT;

    while ((buff[i] = getchar()) != EOF) {
        if (i == 1)
            i = 0;
        else { 
            ++i;
            continue;
        }
        
        if ((buff[0] == '/' && buff[1] == '/') || (buff[0] == '/' && buff[1] == '*'))
            comment_flag = IN;
        
        if ((buff[0] == '\n' || buff[1] == '\n' || (buff[0] == '*' && buff[1] == '/')) && comment_flag == IN) {
            comment_flag = OUT;
            continue;
        }
        
        if (comment_flag == OUT)
            for (int i = 0; i < 2; ++i)
                putchar(buff[i]);
    }


    return 0;
}
