/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package copart.round;

import java.util.Scanner;

/**
 *
 * @author Yash
 */
public class license {
public static void main (String args[]) 
{
    
    
    Scanner sc= new Scanner(System.in);
        System.out.println("Enter the string");
        String input =sc. nextLine();
         System.out.println("Enter the value of k ");
        int k = sc.nextInt();
        char temp;
        int dash =0;
        int group=0;
        int flag1, flag2;
        int length= input.length();
        String output="" ;
        System.out.println(length);
        input=input.toUpperCase(); // convert the string to upper case
        for (int i=0; i< length-1; i++)
        {  
            temp = input.charAt(i); // calculate the number of dashes and groups
               if(temp== '-'){
               dash ++;}
               group = dash + 1;

        }
        
        for (int j=0; j<=length-1; j++)
        {  
            if(((input.charAt(j))!= '-')&& (output.length() <= k)) // checks if the first character is not a dash and the group size is not exceeded
                    {
                        output = output + input.charAt(j);
                                if(output.length()==k)
                                    {output += '-';}
                    
                    }
                    
            else if((input.charAt(j))!= '-')
            {
            output = output + input.charAt(j);
            
                                if(output.length()==k)
                                    {output += '-';}    
            }
        

        }
System.out.println("the output array is"+output );
        
   
}    
}
