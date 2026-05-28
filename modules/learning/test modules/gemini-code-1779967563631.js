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