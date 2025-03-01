// this is how we would print stuff
// console.log("Hello")

// so the way we create variables
let name = "Greg"

var name2= "Gregory"

// console.log(name)

const name3="Michael"

// console.log(name3)

// name3="Steve";

//we are going to create an array
let nums = [1,2,3,4,5]

//we set a boolean variable 
let found = false

//now iterate over the array
for(let i = 0; i<nums.length;i++)
{
    if(nums[i]==3)
    {
        found = true;
        // console.log("We have found 3 at index " + i);
        break;
    }
}

if(!found)
{
    // console.log("We didn't have a 3");
}

function score(points,name)
{
    return name + " scored " + points + " points today."
}

console.log(score("56","curry"));