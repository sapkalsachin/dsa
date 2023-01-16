/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * 
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * Example 2:
 * 
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 */

const productExceptSelf = function(nums) {

    const products = new Array(nums.length).fill(1);

    carryForward(nums, products)
    carryBackword(nums, products)
    return products;
};


const carryForward = (nums, products, currentProduct = 1)=>{

    for(let i=0; i<nums.length; i++){
        products[i] = currentProduct;
        currentProduct *= nums[i]
    }

}

const carryBackword = (nums, products, currentProduct = 1) => {
    for(let i= nums.length-1; i >= 0; i--){
        products[i] *= currentProduct;
        currentProduct *= nums[i]
    }
}