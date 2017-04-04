import java.util.Arrays;
import java.util.Scanner;

/**
 *
 * @author asgam
 */
public class StringToInt {

    public static void main(String[] args) {
        String numbers[] = {"0","1","2","3","4","5","6","7","8","9"}; //Storing integers in String array        
        Scanner sc = new Scanner(System.in);
        String alpha = sc.next();
        double num = 0;
        int length = alpha.length();
		//in for loop, access the elements of the String number, get their indexes in numbers[] and do the following
		//sum = sum + index of array * 10^length-1
		//eg. 123 would be 100+20+3
        for(int i=0;i<alpha.length();i++){
            num = num +(Arrays.asList(numbers).indexOf(Character.toString(alpha.charAt(i))))*Math.pow(10,length-1);
            length--;
     }
        System.out.println("num\t"+(int)(num));
        
}
}
