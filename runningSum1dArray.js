/*

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // to store the added values 
    let result=[]
    for(let i=0;i<nums.length;i++){
        if(i==0){
            result.push(nums[i]) // pushing the first element in to the rsult array as we no need to compute it
        }
        else{
            
            result.push(result[i-1]+nums[i]) // adding the value stored  in the result array and the current value of nums aray
        }
    }
    return result


    //using reduce function 
    // nums.reduce((a,c,i,arr)=>arr[i]= arr[i]+a)
    // return nums
    
};