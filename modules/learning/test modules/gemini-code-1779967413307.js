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
  }