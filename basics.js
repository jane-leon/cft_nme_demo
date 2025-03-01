//this is how we would print 
//console.log("Hello")

//so the way we create criables
let name = "Jane"
var name2 = "Jane1"
//console.log(name)

const name3 = "Jane3" //var not change, final keyword in java

///we are going to create an array 
let nums = [1,2,3,4,5]

//we set a boolean var
let found = false
//now iterate over the array
for (let i = 0; i<nums.length; i++){
    if(nums[i] == 6){
        found = true;
        console.log("We have found 6 at index " + i)
        break
    }
}

if(!found){
    console.log("We didn't have a 6")
}




