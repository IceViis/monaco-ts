export const file1 = `
import java.util.Scanner;

public class HelloWorld {

    public static void main(String[] args) {

        // Creates a reader instance which takes
        // input from standard input - keyboard
        Scanner reader = new Scanner(System.in);
        System.out.print("Enter a number: ");

        // nextInt() reads the next integer from the keyboard
        int number = reader.nextInt();

        // println() prints the following line to the output screen
        System.out.println("You entered: " + number);
    }
}
`;


export const file2 = `
class Main {

  // calculate the sum
  public int add(int a, int b) {

    // calculate sum
    int sum = a + b;
    return sum;
  }

  // calculate the square
  public void square(int num) {
    int result = num * num;
    System.out.println(result);    // prints 576
  }
  public static void main(String[] args) {

    Main obj = new Main();

    // call the square() method
    // passing add() as an argument
    obj.square(obj.add(15, 9));

  }
}
`;
