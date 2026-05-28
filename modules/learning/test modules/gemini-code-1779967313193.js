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
  }