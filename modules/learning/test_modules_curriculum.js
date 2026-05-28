// Test Modules Curriculum
// Combined content from the 'test modules' folder:
//   - gemini-code-1779967313193.js
//   - gemini-code-1779967413307.js
//   - gemini-code-1779967563631.js

export const curriculum = [
  // ── From gemini-code-1779967313193.js ──
  {
    "id": "a2z-s1-c499-p1",
    "title": "Input Output",
    "category": "Learn the basics",
    "difficulty": "Beginner",
    "icon": "📝",
    "iconColor": "emerald",
    "summary": "Master how to read data from the user and print results to the console.",
    "readTime": "4 mins",
    "details": `
      <h2>Input Output</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>Before solving complex algorithms, you must know how to communicate with the system. Every language has standard I/O (Input/Output) streams. Reading variables correctly (especially strings vs. integers) and printing them with the correct formatting is step zero of competitive programming.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-green">O(1)</span></td>
              <td>Basic I/O operations execute in constant time.</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td><span class="complexity-badge complexity-green">O(1)</span></td>
              <td>Memory used only for the variables being read.</td>
            </tr>
          </tbody>
        </table>
      </section>
    `,
    "code": {
      javascript: `// Node.js (Standard Input/Output)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a number: ', (num) => {
  console.log('You entered: ' + num);
  readline.close();
});`,
      cpp: `#include <iostream>
using namespace std;

int main() {
    int num;
    cin >> num; // Read input
    cout << "You entered: " << num << endl; // Print output
    return 0;
}`,
      java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt(); // Read input
        System.out.println("You entered: " + num); // Print output
    }
}`,
      python: `# Python (Standard Input/Output)
num = input() # Reads as string
num = int(num) # Convert to integer
print(f"You entered: {num}")`
    },
    "youtube": "https://youtu.be/EAR7De6Goz4?t=250"
  },
  {
    "id": "a2z-s1-c499-p3",
    "title": "If ElseIf",
    "category": "Learn the basics",
    "difficulty": "Beginner",
    "icon": "🔀",
    "iconColor": "cyan",
    "summary": "Control the flow of your program using conditional logic.",
    "readTime": "5 mins",
    "details": `
      <h2>If ElseIf</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>Conditional statements allow your program to make decisions. The <code>if</code> statement evaluates a boolean expression. If true, its block executes. If false, the program checks the next <code>else if</code> condition, or defaults to the <code>else</code> block.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Interview Placement Notes</h3>
        <ul>
          <li><strong>Key Insight:</strong> Order matters! The program will execute the <em>first</em> true condition it finds and skip the rest. Always put your most specific conditions at the top.</li>
        </ul>
      </section>
    `,
    "code": {
      javascript: `function checkAge(age) {
    if (age < 18) {
        return "Minor";
    } else if (age >= 18 && age < 65) {
        return "Adult";
    } else {
        return "Senior";
    }
}`,
      cpp: `string checkAge(int age) {
    if (age < 18) {
        return "Minor";
    } else if (age >= 18 && age < 65) {
        return "Adult";
    } else {
        return "Senior";
    }
}`,
      java: `public String checkAge(int age) {
    if (age < 18) {
        return "Minor";
    } else if (age >= 18 && age < 65) {
        return "Adult";
    } else {
        return "Senior";
    }
}`,
      python: `def check_age(age):
    if age < 18:
        return "Minor"
    elif age >= 18 and age < 65:
        return "Adult"
    else:
        return "Senior"`
    },
    "youtube": "https://youtu.be/EAR7De6Goz4?t=1259"
  },
  {
    "id": "a2z-s1-c499-p4",
    "title": "Switch Case",
    "category": "Learn the basics",
    "difficulty": "Beginner",
    "icon": "🎛️",
    "iconColor": "purple",
    "summary": "Evaluate a single variable against multiple constant values efficiently.",
    "readTime": "4 mins",
    "details": `
      <h2>Switch Case</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>A <code>switch</code> statement provides a cleaner way to write multiple <code>if-else</code> conditions when evaluating the exact value of a single variable. It is highly readable and slightly faster in compiled languages via jump tables.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Interview Placement Notes</h3>
        <ul>
          <li><strong>The Break Keyword:</strong> In languages like C++, Java, and JS, if you forget the <code>break</code> statement, the code will "fall through" and execute the next cases even if they don't match!</li>
        </ul>
      </section>
    `,
    "code": {
      javascript: `function getDay(dayNumber) {
    switch(dayNumber) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        default: return "Invalid Day";
    }
}`,
      cpp: `string getDay(int dayNumber) {
    switch(dayNumber) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        default: return "Invalid Day";
    }
}`,
      java: `public String getDay(int dayNumber) {
    switch(dayNumber) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        default: return "Invalid Day";
    }
}`,
      python: `# Python 3.10+ uses match-case
def get_day(day_number):
    match day_number:
        case 1: return "Monday"
        case 2: return "Tuesday"
        case _: return "Invalid Day"`
    },
    "youtube": "https://youtu.be/EAR7De6Goz4"
  },
  {
    "id": "a2z-s1-c499-p6",
    "title": "For loops",
    "category": "Learn the basics",
    "difficulty": "Beginner",
    "icon": "🔄",
    "iconColor": "amber",
    "summary": "Execute a block of code a specific number of times.",
    "readTime": "5 mins",
    "details": `
      <h2>For Loops</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>The <code>for</code> loop is used when you know exactly how many times you want to iterate. It consolidates initialization, condition checking, and incrementing into a single, clean line.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-yellow">O(N)</span></td>
              <td>Executes the block N times based on the condition.</td>
            </tr>
          </tbody>
        </table>
      </section>
    `,
    "code": {
      javascript: `for (let i = 0; i < 5; i++) {
    console.log(i); // Prints 0, 1, 2, 3, 4
}`,
      cpp: `for (int i = 0; i < 5; i++) {
    cout << i << " ";
}`,
      java: `for (int i = 0; i < 5; i++) {
    System.out.println(i);
}`,
      python: `for i in range(5):
    print(i) # Prints 0, 1, 2, 3, 4`
    },
    "youtube": "https://youtu.be/EAR7De6Goz4?t=3096"
  },
  {
    "id": "a2z-s1-c499-p7",
    "title": "While loops",
    "category": "Learn the basics",
    "difficulty": "Beginner",
    "icon": "🔁",
    "iconColor": "amber",
    "summary": "Execute a block of code as long as a condition remains true.",
    "readTime": "4 mins",
    "details": `
      <h2>While Loops</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>A <code>while</code> loop runs continuously until its condition becomes false. This is the optimal loop to use when you do not know the exact number of iterations in advance (e.g., dividing a number by 10 until it reaches 0).</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Interview Placement Notes</h3>
        <ul>
          <li><strong>Infinite Loops:</strong> Always ensure the variable controlling the condition is updated inside the loop, otherwise it will run forever and cause a Time Limit Exceeded (TLE) error.</li>
        </ul>
      </section>
    `,
    "code": {
      javascript: `let i = 5;
while (i > 0) {
    console.log(i);
    i--;
}`,
      cpp: `int i = 5;
while (i > 0) {
    cout << i << " ";
    i--;
}`,
      java: `int i = 5;
while (i > 0) {
    System.out.println(i);
    i--;
}`,
      python: `i = 5
while i > 0:
    print(i)
    i -= 1`
    },
    "youtube": "https://youtu.be/EAR7De6Goz4?t=3459"
  },
  {
    "id": "a2z-s1-c499-p8",
    "title": "Functions (Pass by Reference and Value)",
    "category": "Learn the basics",
    "difficulty": "Beginner",
    "icon": "📦",
    "iconColor": "rose",
    "summary": "Modularize code and understand how memory is manipulated.",
    "readTime": "8 mins",
    "details": `
      <h2>Functions: Pass by Value vs Reference</h2>
      <section>
        <h3>Concept Overview</h3>
        <p><strong>Pass by Value:</strong> A copy of the variable is sent to the function. Modifying it inside the function does NOT alter the original variable. (Default for primitives like int, float).</p>
        <p><strong>Pass by Reference:</strong> The actual memory address is sent to the function. Modifying it inside the function WILL alter the original variable. (Default for objects and arrays).</p>
      </section>
    `,
    "code": {
      javascript: `// Arrays are passed by reference in JS
function modifyArray(arr) {
    arr[0] = 99; // This alters the original array
}

let nums = [1, 2, 3];
modifyArray(nums);
// nums is now [99, 2, 3]`,
      cpp: `// Use '&' to explicitly pass by reference in C++
void modifyValue(int &val) {
    val = 99; // Alters the original variable
}

int main() {
    int num = 10;
    modifyValue(num);
    // num is now 99
}`,
      java: `// Primitives are value, Objects/Arrays are reference
public void modifyArray(int[] arr) {
    arr[0] = 99; // Alters original
}

// arr becomes [99, 2, 3] in main`,
      python: `# Python uses "Pass by Object Reference"
def modify_list(lst):
    lst[0] = 99 # Alters the original list

nums = [1, 2, 3]
modify_list(nums)
# nums is now [99, 2, 3]`
    },
    "youtube": "https://youtu.be/EAR7De6Goz4?t=3677"
  },
  {
    "id": "a2z-s1-c495-p1",
    "title": "Count all Digits of a Number",
    "category": "Basic Math",
    "difficulty": "Beginner",
    "icon": "🔢",
    "iconColor": "emerald",
    "summary": "Extract and count the individual digits of an integer using modulo arithmetic.",
    "readTime": "6 mins",
    "details": `
      <h2>Count all Digits of a Number</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>To extract digits from a number, we use base-10 mathematics. <code>N % 10</code> yields the last digit of the number, while <code>N / 10</code> removes the last digit. We repeat this process in a <code>while</code> loop until the number becomes 0.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-green">O(log₁₀ N)</span></td>
              <td>The loop runs equal to the number of digits in N.</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td><span class="complexity-badge complexity-green">O(1)</span></td>
              <td>No extra memory used.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section style="margin-top: 16px;">
        <h3>Interview Placement Notes</h3>
        <ul>
          <li><strong>Math Shortcut:</strong> You can find the number of digits instantly without a loop using logarithms: <code>floor(log10(N) + 1)</code>.</li>
        </ul>
      </section>
    `,
    "code": {
      javascript: `function countDigits(n) {
    let count = 0;
    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }
    return count;
}`,
      cpp: `int countDigits(int n) {
    int count = 0;
    while (n > 0) {
        count++;
        n /= 10;
    }
    return count;
}`,
      java: `public int countDigits(int n) {
    int count = 0;
    while (n > 0) {
        count++;
        n /= 10;
    }
    return count;
}`,
      python: `def count_digits(n):
    count = 0
    while n > 0:
        count += 1
        n //= 10
    return count
    
# Or simply: len(str(n))`
    },
    "youtube": "https://youtu.be/1xNbjMdbjug"
  },
  {
    "id": "a2z-s1-c495-p2",
    "title": "Reverse a Number",
    "category": "Basic Math",
    "difficulty": "Beginner",
    "icon": "🔄",
    "iconColor": "emerald",
    "summary": "Reverse the digits of an integer while handling boundary conditions.",
    "readTime": "8 mins",
    "details": `
      <h2>Reverse a Number</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>Similar to counting digits, we extract the last digit using <code>N % 10</code>. To build the reversed number, we take our running total, multiply it by 10 (shifting it left), and add the extracted digit: <code>rev = (rev * 10) + digit</code>.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-green">O(log₁₀ N)</span></td>
              <td>Iterates through each digit once.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section style="margin-top: 16px;">
        <h3>Interview Placement Notes</h3>
        <ul>
          <li><strong>The Overflow Trap:</strong> If you are reversing a large 32-bit integer, multiplying by 10 might cause an overflow crash. Always check if <code>rev > INT_MAX / 10</code> before multiplying!</li>
        </ul>
      </section>
    `,
    "code": {
      javascript: `function reverseNumber(n) {
    let rev = 0;
    let isNegative = n < 0;
    n = Math.abs(n);
    
    while (n > 0) {
        let digit = n % 10;
        rev = (rev * 10) + digit;
        n = Math.floor(n / 10);
    }
    return isNegative ? -rev : rev;
}`,
      cpp: `int reverseNumber(int n) {
    long rev = 0; // Use long to prevent overflow
    while (n != 0) {
        int digit = n % 10;
        rev = (rev * 10) + digit;
        n /= 10;
    }
    if (rev > INT_MAX || rev < INT_MIN) return 0;
    return (int)rev;
}`,
      java: `public int reverse(int n) {
    long rev = 0;
    while (n != 0) {
        rev = (rev * 10) + (n % 10);
        n /= 10;
    }
    if (rev > Integer.MAX_VALUE || rev < Integer.MIN_VALUE) return 0;
    return (int)rev;
}`,
      python: `def reverse_number(n):
    sign = -1 if n < 0 else 1
    rev = int(str(abs(n))[::-1])
    if rev > 2**31 - 1:
        return 0
    return sign * rev`
    },
    "youtube": "https://youtu.be/1xNbjMdbjug?t=930"
  },
  {
    "id": "a2z-s1-c495-p3",
    "title": "Palindrome Number",
    "category": "Basic Math",
    "difficulty": "Beginner",
    "icon": "🪞",
    "iconColor": "emerald",
    "summary": "Check if an integer reads the same forwards and backwards.",
    "readTime": "5 mins",
    "details": `
      <h2>Palindrome Number</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>A palindrome is a sequence that reads the same backward as forward. For numbers, you simply calculate the reversed version of the number (using the logic from the previous problem) and check if <code>original == reversed</code>.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-green">O(log₁₀ N)</span></td>
              <td>Reversing the integer takes logarithmic time relative to N.</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td><span class="complexity-badge complexity-green">O(1)</span></td>
              <td>Done mathematically without string conversion overhead.</td>
            </tr>
          </tbody>
        </table>
      </section>
    `,
    "code": {
      javascript: `function isPalindrome(n) {
    if (n < 0) return false;
    let original = n, rev = 0;
    while (n > 0) {
        rev = (rev * 10) + (n % 10);
        n = Math.floor(n / 10);
    }
    return original === rev;
}`,
      cpp: `bool isPalindrome(int n) {
    if (n < 0) return false;
    long original = n, rev = 0;
    while (n > 0) {
        rev = (rev * 10) + (n % 10);
        n /= 10;
    }
    return original == rev;
}`,
      java: `public boolean isPalindrome(int n) {
    if (n < 0) return false;
    long original = n, rev = 0;
    while (n > 0) {
        rev = (rev * 10) + (n % 10);
        n /= 10;
    }
    return original == rev;
}`,
      python: `def is_palindrome(n):
    if n < 0: return False
    return str(n) == str(n)[::-1]`
    },
    "youtube": "https://youtu.be/1xNbjMdbjug?t=1230"
  },
  {
    "id": "a2z-s1-c495-p4",
    "title": "GCD of Two Numbers",
    "category": "Basic Math",
    "difficulty": "Beginner",
    "icon": "➗",
    "iconColor": "amber",
    "summary": "Find the Greatest Common Divisor efficiently using the Euclidean Algorithm.",
    "readTime": "8 mins",
    "details": `
      <h2>Greatest Common Divisor (GCD)</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>Finding the GCD using a brute-force loop takes O(min(A, B)). Instead, the <strong>Euclidean Algorithm</strong> states that <code>gcd(A, B) = gcd(B, A % B)</code>. This continuously reduces the numbers until the remainder is 0, making it incredibly fast.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-green">O(log(min(A, B)))</span></td>
              <td>The modulo operation cuts the numbers down exponentially.</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td><span class="complexity-badge complexity-green">O(1)</span></td>
              <td>When solved iteratively. (O(log N) if recursive call stack is used).</td>
            </tr>
          </tbody>
        </table>
      </section>
    `,
    "code": {
      javascript: `function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}`,
      cpp: `int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}`,
      java: `public int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b); // Recursive Euclidean
}`,
      python: `def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
    
# Alternatively use built-in: import math; math.gcd(a, b)`
    },
    "youtube": "https://youtu.be/1xNbjMdbjug?t=2684"
  },

  // ── From gemini-code-1779967413307.js ──
  {
    "id": "a2z-s1-c495-p5",
    "title": "Check if a number is Armstrong Number",
    "category": "Basic Math",
    "difficulty": "Beginner",
    "icon": "💪",
    "iconColor": "emerald",
    "summary": "Check if the sum of its own digits each raised to the power of the number of digits equals the number itself.",
    "readTime": "5 mins",
    "details": `
      <h2>Armstrong Number</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>An Armstrong number (or narcissistic number) for a given number of digits is an integer such that the sum of its digits raised to the third power is equal to the number itself. (e.g., 371 = 3³ + 7³ + 1³). For N digits, raise each digit to the power of N.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-green">O(log₁₀ N)</span></td>
              <td>Extracting digits takes logarithmic time.</td>
            </tr>
          </tbody>
        </table>
      </section>
    `,
    "code": {
      javascript: `function isArmstrong(n) {
    let original = n;
    let sum = 0;
    let digits = String(n).length;
    
    while (n > 0) {
        let digit = n % 10;
        sum += Math.pow(digit, digits);
        n = Math.floor(n / 10);
    }
    return sum === original;
}`,
      cpp: `bool isArmstrong(int n) {
    int original = n;
    int sum = 0;
    int digits = to_string(n).length();
    
    while (n > 0) {
        int digit = n % 10;
        sum += pow(digit, digits);
        n /= 10;
    }
    return sum == original;
}`,
      java: `public boolean isArmstrong(int n) {
    int original = n;
    int sum = 0;
    int digits = String.valueOf(n).length();
    
    while (n > 0) {
        int digit = n % 10;
        sum += Math.pow(digit, digits);
        n /= 10;
    }
    return sum == original;
}`,
      python: `def is_armstrong(n):
    digits = str(n)
    power = len(digits)
    return n == sum(int(digit)**power for digit in digits)`
    },
    "youtube": "https://youtu.be/1xNbjMdbjug?t=3415"
  },
  {
    "id": "a2z-s1-c495-p6",
    "title": "Print all Divisors",
    "category": "Basic Math",
    "difficulty": "Beginner",
    "icon": "➗",
    "iconColor": "emerald",
    "summary": "Find all numbers that divide N evenly in optimal O(sqrt(N)) time.",
    "readTime": "6 mins",
    "details": `
      <h2>Print all Divisors</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>A naive approach loops from 1 to N, checking if <code>N % i == 0</code>. However, divisors exist in pairs! If <code>i</code> divides N, then <code>N / i</code> also divides N. Therefore, you only need to loop up to the square root of N.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-green">O(√N)</span></td>
              <td>We loop strictly up to the square root of N.</td>
            </tr>
          </tbody>
        </table>
      </section>
    `,
    "code": {
      javascript: `function printDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }
    }
    return divisors.sort((a, b) => a - b);
}`,
      cpp: `vector<int> printDivisors(int n) {
    vector<int> divisors;
    for (int i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            divisors.push_back(i);
            if (i != n / i) {
                divisors.push_back(n / i);
            }
        }
    }
    sort(divisors.begin(), divisors.end());
    return divisors;
}`,
      java: `public List<Integer> printDivisors(int n) {
    List<Integer> divisors = new ArrayList<>();
    for (int i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            divisors.add(i);
            if (i != n / i) {
                divisors.add(n / i);
            }
        }
    }
    Collections.sort(divisors);
    return divisors;
}`,
      python: `import math

def print_divisors(n):
    divisors = []
    for i in range(1, int(math.sqrt(n)) + 1):
        if n % i == 0:
            divisors.append(i)
            if i != n // i:
                divisors.append(n // i)
    return sorted(divisors)`
    },
    "youtube": "https://youtu.be/1xNbjMdbjug?t=4000"
  },
  {
    "id": "a2z-s1-c495-p7",
    "title": "Check for Prime",
    "category": "Basic Math",
    "difficulty": "Beginner",
    "icon": "🛡️",
    "iconColor": "emerald",
    "summary": "Determine if a number is prime using square root optimization.",
    "readTime": "5 mins",
    "details": `
      <h2>Check for Prime</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>A prime number is only divisible by 1 and itself. Using the same logic as "Print all Divisors", we only need to check for factors up to the square root of N. If we find any factor in that range (other than 1), it is not prime.</p>
      </section>
    `,
    "code": {
      javascript: `function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}`,
      cpp: `bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}`,
      java: `public boolean isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}`,
      python: `import math

def is_prime(n):
    if n <= 1: return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True`
    },
    "youtube": "https://youtu.be/1xNbjMdbjug?t=4800"
  },
  {
    "id": "a2z-s3-c505-p1",
    "title": "Largest Element in an Array",
    "category": "Arrays - Easy",
    "difficulty": "Beginner",
    "icon": "🏔️",
    "iconColor": "emerald",
    "summary": "Find the maximum element in an array using a single linear pass.",
    "readTime": "3 mins",
    "details": `
      <h2>Largest Element in an Array</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>This is the fundamental building block for array traversal. Initialize a <code>max</code> variable with the first element, iterate through the array, and update the max if the current element is larger.</p>
      </section>
    `,
    "code": {
      javascript: `function largestElement(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}`,
      cpp: `int largestElement(vector<int>& arr) {
    int max_val = arr[0];
    for(int i = 1; i < arr.size(); i++) {
        if(arr[i] > max_val) max_val = arr[i];
    }
    return max_val;
}`,
      java: `public int largestElement(int[] arr) {
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}`,
      python: `def largest_element(arr):
    max_val = arr[0]
    for num in arr[1:]:
        if num > max_val:
            max_val = num
    return max_val`
    },
    "youtube": "https://youtu.be/37E9ckMDdTk"
  },
  {
    "id": "a2z-s3-c505-p2",
    "title": "Second Largest Element",
    "category": "Arrays - Easy",
    "difficulty": "Beginner",
    "icon": "🥈",
    "iconColor": "emerald",
    "summary": "Find the second largest unique element in a single pass O(N) time.",
    "readTime": "6 mins",
    "details": `
      <h2>Second Largest Element</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>While you could sort the array in O(N log N), the optimal approach uses a single pass. Maintain a <code>largest</code> and <code>secondLargest</code> variable. When you find a new largest, the old largest becomes the second largest.</p>
      </section>
    `,
    "code": {
      javascript: `function secondLargest(arr) {
    let largest = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }
    return second === -Infinity ? -1 : second;
}`,
      cpp: `int secondLargest(vector<int>& arr) {
    int largest = INT_MIN, second = INT_MIN;
    for (int num : arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num != largest) {
            second = num;
        }
    }
    return second == INT_MIN ? -1 : second;
}`,
      java: `public int secondLargest(int[] arr) {
    int largest = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
    for (int num : arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num != largest) {
            second = num;
        }
    }
    return second == Integer.MIN_VALUE ? -1 : second;
}`,
      python: `def second_largest(arr):
    largest = second = float('-inf')
    for num in arr:
        if num > largest:
            second = largest
            largest = num
        elif num > second and num != largest:
            second = num
    return -1 if second == float('-inf') else second`
    },
    "youtube": "https://youtu.be/37E9ckMDdTk?t=350"
  },
  {
    "id": "a2z-s3-c505-p3",
    "title": "Check if Array is Sorted",
    "category": "Arrays - Easy",
    "difficulty": "Beginner",
    "icon": "✅",
    "iconColor": "emerald",
    "summary": "Determine if an array is sorted in non-decreasing order.",
    "readTime": "3 mins",
    "details": `
      <h2>Check if Array is Sorted</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>A simple linear scan. Check if any current element is strictly smaller than the previous element (<code>arr[i] < arr[i-1]</code>). If you find such an occurrence, the array is not sorted.</p>
      </section>
    `,
    "code": {
      javascript: `function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}`,
      cpp: `bool isSorted(vector<int>& arr) {
    for(int i = 1; i < arr.size(); i++) {
        if(arr[i] < arr[i-1]) return false;
    }
    return true;
}`,
      java: `public boolean isSorted(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}`,
      python: `def is_sorted(arr):
    for i in range(1, len(arr)):
        if arr[i] < arr[i - 1]:
            return False
    return True`
    },
    "youtube": "https://youtu.be/37E9ckMDdTk?t=1500"
  },
  {
    "id": "a2z-s3-c505-p4",
    "title": "Remove Duplicates in-place",
    "category": "Arrays - Easy",
    "difficulty": "Beginner",
    "icon": "✂️",
    "iconColor": "emerald",
    "summary": "Use the two-pointer technique to remove duplicates from a sorted array in O(1) space.",
    "readTime": "6 mins",
    "details": `
      <h2>Remove Duplicates in-place</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>Since the array is sorted, duplicates are adjacent. Use a "slow" pointer <code>i</code> to track the position of the last unique element, and a "fast" pointer <code>j</code> to scan the array. When <code>arr[j] != arr[i]</code>, increment <code>i</code> and copy the element.</p>
      </section>
    `,
    "code": {
      javascript: `function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1; // Return the length of unique elements
}`,
      cpp: `int removeDuplicates(vector<int>& arr) {
    if (arr.empty()) return 0;
    int i = 0;
    for (int j = 1; j < arr.size(); j++) {
        if (arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}`,
      java: `public int removeDuplicates(int[] arr) {
    if (arr.length == 0) return 0;
    int i = 0;
    for (int j = 1; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}`,
      python: `def remove_duplicates(arr):
    if not arr: return 0
    i = 0
    for j in range(1, len(arr)):
        if arr[i] != arr[j]:
            i += 1
            arr[i] = arr[j]
    return i + 1`
    },
    "youtube": "https://youtu.be/37E9ckMDdTk?t=1950"
  },
  {
    "id": "a2z-s3-c505-p5",
    "title": "Left Rotate Array by One",
    "category": "Arrays - Easy",
    "difficulty": "Beginner",
    "icon": "🔄",
    "iconColor": "emerald",
    "summary": "Shift all array elements to the left by one position.",
    "readTime": "3 mins",
    "details": `
      <h2>Left Rotate Array by One</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>Store the very first element in a temporary variable. Shift everything else one position to the left (<code>arr[i-1] = arr[i]</code>), and then place the temporary variable at the very end of the array.</p>
      </section>
    `,
    "code": {
      javascript: `function rotateLeftByOne(arr) {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
}`,
      cpp: `void rotateLeftByOne(vector<int>& arr) {
    int temp = arr[0];
    for (int i = 1; i < arr.size(); i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.size() - 1] = temp;
}`,
      java: `public void rotateLeftByOne(int[] arr) {
    int temp = arr[0];
    for (int i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
}`,
      python: `def rotate_left_by_one(arr):
    temp = arr[0]
    for i in range(1, len(arr)):
        arr[i - 1] = arr[i]
    arr[-1] = temp`
    },
    "youtube": "https://youtu.be/37E9ckMDdTk?t=2500"
  },
  {
    "id": "a2z-s3-c505-p6",
    "title": "Left Rotate Array by D Places",
    "category": "Arrays - Easy",
    "difficulty": "Intermediate",
    "icon": "🌀",
    "iconColor": "amber",
    "summary": "Rotate an array efficiently using the Array Reversal Algorithm.",
    "readTime": "8 mins",
    "details": `
      <h2>Left Rotate Array by D Places</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>Using a temporary array takes O(D) extra space. The optimal O(1) space approach uses math and reversals:</p>
        <ol>
          <li>Reverse the first <code>D</code> elements.</li>
          <li>Reverse the remaining <code>N-D</code> elements.</li>
          <li>Reverse the entire array!</li>
        </ol>
      </section>
    `,
    "code": {
      javascript: `function rotateLeft(arr, d) {
    d = d % arr.length;
    reverse(arr, 0, d - 1);
    reverse(arr, d, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
}

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}`,
      cpp: `void reverse(vector<int>& arr, int start, int end) {
    while (start < end) {
        swap(arr[start++], arr[end--]);
    }
}

void rotateLeft(vector<int>& arr, int d) {
    int n = arr.size();
    d = d % n;
    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    reverse(arr, 0, n - 1);
}`,
      java: `public void rotateLeft(int[] arr, int d) {
    int n = arr.length;
    d = d % n;
    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    reverse(arr, 0, n - 1);
}

private void reverse(int[] arr, int start, int end) {
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}`,
      python: `def rotate_left(arr, d):
    n = len(arr)
    d = d % n
    
    def reverse(start, end):
        while start < end:
            arr[start], arr[end] = arr[end], arr[start]
            start += 1
            end -= 1
            
    reverse(0, d - 1)
    reverse(d, n - 1)
    reverse(0, n - 1)`
    },
    "youtube": "https://youtu.be/37E9ckMDdTk?t=2900"
  },
  {
    "id": "a2z-s3-c505-p7",
    "title": "Move Zeros to End",
    "category": "Arrays - Easy",
    "difficulty": "Beginner",
    "icon": "🧹",
    "iconColor": "emerald",
    "summary": "Push all zeros to the back of the array while maintaining order.",
    "readTime": "5 mins",
    "details": `
      <h2>Move Zeros to End</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>A classic Two-Pointer problem (often called the 'Snowball' technique). Use one pointer (<code>j</code>) to keep track of where the next non-zero element should go. As you iterate with <code>i</code>, whenever you find a non-zero, swap it with <code>arr[j]</code> and increment <code>j</code>.</p>
      </section>
    `,
    "code": {
      javascript: `function moveZeros(arr) {
    let j = 0; // Tracks the position for the next non-zero
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
            j++;
        }
    }
}`,
      cpp: `void moveZeros(vector<int>& arr) {
    int j = 0;
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] != 0) {
            swap(arr[i], arr[j]);
            j++;
        }
    }
}`,
      java: `public void moveZeros(int[] arr) {
    int j = 0;
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
}`,
      python: `def move_zeros(arr):
    j = 0
    for i in range(len(arr)):
        if arr[i] != 0:
            arr[i], arr[j] = arr[j], arr[i]
            j += 1`
    },
    "youtube": "https://youtu.be/37E9ckMDdTk?t=3500"
  },

  // ── From gemini-code-1779967563631.js ──
  {
    "id": "a2z-s3-c505-p8",
    "title": "Linear Search",
    "category": "Arrays - Easy",
    "difficulty": "Beginner",
    "icon": "🔍",
    "iconColor": "emerald",
    "summary": "Find the first occurrence of a target element in an unsorted array.",
    "readTime": "3 mins",
    "details": `
      <h2>Linear Search</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>The simplest searching algorithm. Iterate through the array from the 0th index to the last index. If the current element matches the target, return its index. If the loop finishes without finding the target, return -1.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-green">O(N)</span></td>
              <td>In the worst case, we check every single element once.</td>
            </tr>
          </tbody>
        </table>
      </section>
    `,
    "code": {
      javascript: `function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}`,
      cpp: `int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}`,
      java: `public int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}`,
      python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`
    },
    "youtube": "https://youtu.be/K-80XzSssB0"
  },
  {
    "id": "a2z-s3-c505-p9",
    "title": "Union of Two Sorted Arrays",
    "category": "Arrays - Easy",
    "difficulty": "Beginner",
    "icon": "🔗",
    "iconColor": "emerald",
    "summary": "Merge two sorted arrays into a single sorted array containing unique elements.",
    "readTime": "8 mins",
    "details": `
      <h2>Union of Two Sorted Arrays</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>While you could throw everything into a Set (taking O(N log N) time), we can exploit the fact that the arrays are already sorted. Using the <strong>Two-Pointer technique</strong>, we compare elements from both arrays. We add the smaller element to our union array and move its pointer forward, skipping any duplicates along the way.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-green">O(N + M)</span></td>
              <td>We traverse both arrays exactly once.</td>
            </tr>
          </tbody>
        </table>
      </section>
    `,
    "code": {
      javascript: `function findUnion(arr1, arr2) {
    let i = 0, j = 0;
    let union = [];
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
                union.push(arr1[i]);
            }
            i++;
        } else {
            if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
                union.push(arr2[j]);
            }
            j++;
        }
    }
    
    while (i < arr1.length) {
        if (union[union.length - 1] !== arr1[i]) union.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        if (union[union.length - 1] !== arr2[j]) union.push(arr2[j]);
        j++;
    }
    return union;
}`,
      cpp: `vector<int> findUnion(vector<int> &a, vector<int> &b) {
    int i = 0, j = 0;
    vector<int> Union;
    while (i < a.size() && j < b.size()) {
        if (a[i] <= b[j]) {
            if (Union.empty() || Union.back() != a[i])
                Union.push_back(a[i]);
            i++;
        } else {
            if (Union.empty() || Union.back() != b[j])
                Union.push_back(b[j]);
            j++;
        }
    }
    while (i < a.size()) {
        if (Union.back() != a[i]) Union.push_back(a[i]);
        i++;
    }
    while (j < b.size()) {
        if (Union.back() != b[j]) Union.push_back(b[j]);
        j++;
    }
    return Union;
}`,
      java: `public ArrayList<Integer> findUnion(int arr1[], int arr2[], int n, int m) {
    int i = 0, j = 0;
    ArrayList<Integer> union = new ArrayList<>();
    
    while (i < n && j < m) {
        if (arr1[i] <= arr2[j]) {
            if (union.size() == 0 || union.get(union.size()-1) != arr1[i])
                union.add(arr1[i]);
            i++;
        } else {
            if (union.size() == 0 || union.get(union.size()-1) != arr2[j])
                union.add(arr2[j]);
            j++;
        }
    }
    while (i < n) {
        if (union.get(union.size()-1) != arr1[i]) union.add(arr1[i]);
        i++;
    }
    while (j < m) {
        if (union.get(union.size()-1) != arr2[j]) union.add(arr2[j]);
        j++;
    }
    return union;
}`,
      python: `def find_union(arr1, arr2):
    i, j = 0, 0
    union = []
    
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            if len(union) == 0 or union[-1] != arr1[i]:
                union.append(arr1[i])
            i += 1
        else:
            if len(union) == 0 or union[-1] != arr2[j]:
                union.append(arr2[j])
            j += 1
            
    while i < len(arr1):
        if union[-1] != arr1[i]:
            union.append(arr1[i])
        i += 1
    while j < len(arr2):
        if union[-1] != arr2[j]:
            union.append(arr2[j])
        j += 1
        
    return union`
    },
    "youtube": "https://youtu.be/wvcMqKcmvyk"
  },
  {
    "id": "a2z-s3-c505-p10",
    "title": "Missing Number in an Array",
    "category": "Arrays - Easy",
    "difficulty": "Beginner",
    "icon": "❓",
    "iconColor": "emerald",
    "summary": "Find the missing number in an array containing values from 1 to N.",
    "readTime": "5 mins",
    "details": `
      <h2>Missing Number</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>The optimal approach uses pure mathematics. The sum of the first N natural numbers is <code>N * (N + 1) / 2</code>. If we calculate this expected sum and subtract the actual sum of all elements in the given array, the difference is exactly our missing number!</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-green">O(N)</span></td>
              <td>A single pass to calculate the sum of the array.</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td><span class="complexity-badge complexity-green">O(1)</span></td>
              <td>We only use integer variables for the sums.</td>
            </tr>
          </tbody>
        </table>
      </section>
    `,
    "code": {
      javascript: `function missingNumber(arr, N) {
    let expectedSum = (N * (N + 1)) / 2;
    let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    return expectedSum - actualSum;
}`,
      cpp: `int missingNumber(vector<int>& arr, int N) {
    int expectedSum = (N * (N + 1)) / 2;
    int actualSum = 0;
    for (int num : arr) {
        actualSum += num;
    }
    return expectedSum - actualSum;
}`,
      java: `public int missingNumber(int[] arr, int N) {
    int expectedSum = (N * (N + 1)) / 2;
    int actualSum = 0;
    for (int num : arr) {
        actualSum += num;
    }
    return expectedSum - actualSum;
}`,
      python: `def missing_number(arr, N):
    expected_sum = (N * (N + 1)) // 2
    actual_sum = sum(arr)
    return expected_sum - actual_sum`
    },
    "youtube": "https://youtu.be/bOoOwmXm0s8"
  },
  {
    "id": "a2z-s3-c505-p11",
    "title": "Maximum Consecutive Ones",
    "category": "Arrays - Easy",
    "difficulty": "Beginner",
    "icon": "1️⃣",
    "iconColor": "emerald",
    "summary": "Find the maximum number of consecutive 1s in a binary array.",
    "readTime": "4 mins",
    "details": `
      <h2>Maximum Consecutive Ones</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>Iterate through the array. Maintain a <code>count</code> variable that increments when you see a 1, and resets to 0 when you see a 0. Continuously update a <code>max_count</code> variable with the highest streak observed.</p>
      </section>
    `,
    "code": {
      javascript: `function findMaxConsecutiveOnes(nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            if (count > max) max = count;
        } else {
            count = 0;
        }
    }
    return max;
}`,
      cpp: `int findMaxConsecutiveOnes(vector<int>& nums) {
    int max_ones = 0;
    int count = 0;
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] == 1) {
            count++;
            max_ones = max(max_ones, count);
        } else {
            count = 0;
        }
    }
    return max_ones;
}`,
      java: `public int findMaxConsecutiveOnes(int[] nums) {
    int max = 0;
    int count = 0;
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 0;
        }
    }
    return max;
}`,
      python: `def find_max_consecutive_ones(nums):
    max_ones = count = 0
    for num in nums:
        if num == 1:
            count += 1
            max_ones = max(max_ones, count)
        else:
            count = 0
    return max_ones`
    },
    "youtube": "https://youtu.be/Mo33MjjMlyA"
  },
  {
    "id": "a2z-s3-c505-p12",
    "title": "Find the Number that Appears Once",
    "category": "Arrays - Easy",
    "difficulty": "Intermediate",
    "icon": "🕴️",
    "iconColor": "amber",
    "summary": "Find the single element in an array where every other element appears twice.",
    "readTime": "6 mins",
    "details": `
      <h2>Find the Number that Appears Once</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>While you could use a Hash Map to count frequencies, the most elegant O(1) space solution uses the <strong>XOR bitwise operator (^)</strong>. </p>
        <p>XOR rules: <code>A ^ A = 0</code> and <code>A ^ 0 = A</code>. Therefore, if you XOR every number in the array together, all pairs will cancel each other out to 0, leaving only the single unique number!</p>
      </section>
    `,
    "code": {
      javascript: `function singleNumber(nums) {
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }
    return xor;
}`,
      cpp: `int singleNumber(vector<int>& nums) {
    int xor_sum = 0;
    for (int num : nums) {
        xor_sum ^= num;
    }
    return xor_sum;
}`,
      java: `public int singleNumber(int[] nums) {
    int xor = 0;
    for (int num : nums) {
        xor ^= num;
    }
    return xor;
}`,
      python: `def single_number(nums):
    xor = 0
    for num in nums:
        xor ^= num
    return xor`
    },
    "youtube": "https://youtu.be/bOoOwmXm0s8?t=1520"
  },
  {
    "id": "a2z-s3-c507-p2",
    "title": "Sort an Array of 0s, 1s, and 2s",
    "category": "Arrays - Medium",
    "difficulty": "Intermediate",
    "icon": "🇳🇱",
    "iconColor": "amber",
    "summary": "Sort an array of 0s, 1s, and 2s in a single pass (Dutch National Flag algorithm).",
    "readTime": "10 mins",
    "details": `
      <h2>Dutch National Flag Algorithm</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>This algorithm uses three pointers: <code>low</code>, <code>mid</code>, and <code>high</code> to sort the array in a single O(N) pass. The array is divided into 4 imaginary sections:</p>
        <ul>
          <li><strong>0 to low-1:</strong> Contains all 0s.</li>
          <li><strong>low to mid-1:</strong> Contains all 1s.</li>
          <li><strong>mid to high:</strong> Unsorted elements.</li>
          <li><strong>high+1 to N:</strong> Contains all 2s.</li>
        </ul>
        <p>We evaluate <code>arr[mid]</code>. If it is 0, we swap it with <code>arr[low]</code> and increment both. If 1, just increment <code>mid</code>. If 2, swap with <code>arr[high]</code> and decrement <code>high</code>.</p>
      </section>
    `,
    "code": {
      javascript: `function sortColors(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}`,
      cpp: `void sortColors(vector<int>& nums) {
    int low = 0, mid = 0, high = nums.size() - 1;
    while (mid <= high) {
        if (nums[mid] == 0) {
            swap(nums[low], nums[mid]);
            low++; mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            swap(nums[mid], nums[high]);
            high--;
        }
    }
}`,
      java: `public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] == 0) {
            int temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++; mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            int temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        }
    }
}`,
      python: `def sort_colors(nums):
    low, mid, high = 0, 0, len(nums) - 1
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1`
    },
    "youtube": "https://youtu.be/tp8JIuCXBaU"
  },
  {
    "id": "a2z-s3-c507-p3",
    "title": "Majority Element (>N/2 times)",
    "category": "Arrays - Medium",
    "difficulty": "Intermediate",
    "icon": "🗳️",
    "iconColor": "amber",
    "summary": "Find the element that appears more than N/2 times using Moore's Voting Algorithm.",
    "readTime": "8 mins",
    "details": `
      <h2>Moore's Voting Algorithm</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>If an element appears more than N/2 times, its count will mathematically outweigh all other elements combined. We maintain a <code>candidate</code> and a <code>count</code>. If count is 0, we select the current element as the new candidate. If the current element matches the candidate, increment count; otherwise, decrement count. The element remaining in the candidate variable at the end is the majority element.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-green">O(N)</span></td>
              <td>A single pass through the array.</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td><span class="complexity-badge complexity-green">O(1)</span></td>
              <td>Uses only two tracking variables, eliminating the need for a Hash Map.</td>
            </tr>
          </tbody>
        </table>
      </section>
    `,
    "code": {
      javascript: `function majorityElement(nums) {
    let count = 0;
    let candidate = null;
    
    for (let num of nums) {
        if (count === 0) candidate = num;
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}`,
      cpp: `int majorityElement(vector<int>& nums) {
    int count = 0;
    int candidate = 0;
    for (int num : nums) {
        if (count == 0) candidate = num;
        if(num == candidate) count++;
        else count--;
    }
    return candidate;
}`,
      java: `public int majorityElement(int[] nums) {
    int count = 0;
    Integer candidate = null;
    for (int num : nums) {
        if (count == 0) candidate = num;
        count += (num == candidate) ? 1 : -1;
    }
    return candidate;
}`,
      python: `def majority_element(nums):
    count = 0
    candidate = None
    for num in nums:
        if count == 0:
            candidate = num
        count += (1 if num == candidate else -1)
    return candidate`
    },
    "youtube": "https://youtu.be/nP_ns3uSh80"
  },
  {
    "id": "a2z-s3-c507-p5",
    "title": "Best Time to Buy and Sell Stock",
    "category": "Arrays - Medium",
    "difficulty": "Intermediate",
    "icon": "📈",
    "iconColor": "amber",
    "summary": "Maximize profit by choosing a single day to buy and a different day in the future to sell.",
    "readTime": "8 mins",
    "details": `
      <h2>Best Time to Buy and Sell Stock</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>To maximize profit, you want to buy at the absolute lowest price possible and sell at the highest price <em>after</em> that day. As you iterate through the prices array, keep track of the <code>minPrice</code> seen so far. For every day, calculate the potential profit if you sold today (<code>currentPrice - minPrice</code>), and update your <code>maxProfit</code> if it's higher.</p>
      </section>
      <section style="margin-top: 16px;">
        <h3>Complexity Analysis</h3>
        <table class="complexity-table">
          <thead>
            <tr><th>Metric</th><th>Complexity</th><th>Scenario</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Complexity</td>
              <td><span class="complexity-badge complexity-green">O(N)</span></td>
              <td>A single linear traversal of the prices array.</td>
            </tr>
          </tbody>
        </table>
      </section>
    `,
    "code": {
      javascript: `function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) minPrice = price;
        else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}`,
      cpp: `int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX;
    int maxProfit = 0;
    for(int price : prices) {
        minPrice = min(minPrice, price);
        maxProfit = max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`,
      java: `public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;
    for (int price : prices) {
        if (price < minPrice) minPrice = price;
        else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}`,
      python: `def max_profit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price
    return max_profit`
    },
    "youtube": "https://youtu.be/excAOvwF_Wk"
  },
  {
    "id": "a2z-s3-c507-p6",
    "title": "Rearrange Array Elements by Sign",
    "category": "Arrays - Medium",
    "difficulty": "Intermediate",
    "icon": "➕",
    "iconColor": "amber",
    "summary": "Rearrange elements so positives and negatives alternate, preserving their relative order.",
    "readTime": "6 mins",
    "details": `
      <h2>Rearrange Array Elements by Sign</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>Because we must preserve the relative order of the original elements, we can create an empty array of the same size. We initialize a <code>posIndex</code> at 0 and a <code>negIndex</code> at 1. We iterate through the original array: if a number is positive, we place it at <code>posIndex</code> and increment by 2. If negative, we place it at <code>negIndex</code> and increment by 2.</p>
      </section>
    `,
    "code": {
      javascript: `function rearrangeArray(nums) {
    let ans = new Array(nums.length);
    let posIndex = 0, negIndex = 1;
    for (let num of nums) {
        if (num > 0) {
            ans[posIndex] = num;
            posIndex += 2;
        } else {
            ans[negIndex] = num;
            negIndex += 2;
        }
    }
    return ans;
}`,
      cpp: `vector<int> rearrangeArray(vector<int>& nums) {
    vector<int> ans(nums.size(), 0);
    int posIndex = 0, negIndex = 1;
    for(int num : nums) {
        if(num > 0) {
            ans[posIndex] = num;
            posIndex += 2;
        } else {
            ans[negIndex] = num;
            negIndex += 2;
        }
    }
    return ans;
}`,
      java: `public int[] rearrangeArray(int[] nums) {
    int[] ans = new int[nums.length];
    int posIndex = 0, negIndex = 1;
    for (int num : nums) {
        if (num > 0) {
            ans[posIndex] = num;
            posIndex += 2;
        } else {
            ans[negIndex] = num;
            negIndex += 2;
        }
    }
    return ans;
}`,
      python: `def rearrange_array(nums):
    ans = [0] * len(nums)
    pos_index, neg_index = 0, 1
    for num in nums:
        if num > 0:
            ans[pos_index] = num
            pos_index += 2
        else:
            ans[neg_index] = num
            neg_index += 2
    return ans`
    },
    "youtube": "https://youtu.be/h4aNc-yZfO4"
  },
  {
    "id": "a2z-s3-c507-p9",
    "title": "Leaders in an Array",
    "category": "Arrays - Medium",
    "difficulty": "Intermediate",
    "icon": "👑",
    "iconColor": "amber",
    "summary": "Find all elements that are greater than all elements to their right.",
    "readTime": "5 mins",
    "details": `
      <h2>Leaders in an Array</h2>
      <section>
        <h3>Concept Overview</h3>
        <p>An element is a leader if there is no element strictly greater than it on its right side. To solve this efficiently in O(N) time, we iterate from <strong>right to left</strong>. We keep track of the maximum element seen so far. If the current element is strictly greater than the maximum, it is a leader! (Remember to reverse your final array of leaders if the question asks for original order).</p>
      </section>
    `,
    "code": {
      javascript: `function findLeaders(arr) {
    let leaders = [];
    let maxFromRight = -Infinity;
    
    // Traverse from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            leaders.push(arr[i]);
            maxFromRight = arr[i];
        }
    }
    return leaders.reverse(); // Return in original left-to-right order
}`,
      cpp: `vector<int> findLeaders(vector<int>& arr) {
    vector<int> leaders;
    int maxFromRight = INT_MIN;
    
    for (int i = arr.size() - 1; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            leaders.push_back(arr[i]);
            maxFromRight = arr[i];
        }
    }
    reverse(leaders.begin(), leaders.end());
    return leaders;
}`,
      java: `public ArrayList<Integer> findLeaders(int[] arr) {
    ArrayList<Integer> leaders = new ArrayList<>();
    int maxFromRight = Integer.MIN_VALUE;
    
    for (int i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            leaders.add(arr[i]);
            maxFromRight = arr[i];
        }
    }
    Collections.reverse(leaders);
    return leaders;
}`,
      python: `def find_leaders(arr):
    leaders = []
    max_from_right = float('-inf')
    
    for i in range(len(arr) - 1, -1, -1):
        if arr[i] > max_from_right:
            leaders.append(arr[i])
            max_from_right = arr[i]
            
    return leaders[::-1]`
    },
    "youtube": "https://youtu.be/cHrH9CQ8pmY"
  }
];

// Re-export githubAlgorithmMappings from content_a2z for LessonViewer compatibility
export { githubAlgorithmMappings } from './content_a2z.js';
