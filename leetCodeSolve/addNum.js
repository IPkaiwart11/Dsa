// function twoSum(nums: number[], target: number): number[] {
// };
var nums = [2, 3, 8, 4];
var target = 10;
for (var i = 0; i <= nums.length; i++) {
    for (var j = i + 1; j <= nums.length; j++) {
        var sums = nums[i] + nums[j];
        if (sums == target) {
            console.log([i, j]);
        }
    }
}
