# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
### What the function does?
The function returns a `key` based on the input parameter it recieves. 
- If no parameter is supplied, it returns trivial key which is `"0"`
- If an empty object is passed it generates and returns a hash of length 128
- If a value is passed for partitionKey it returns that key
- If length of partionKey is greater than maximum allowed length, it generates and returns a key of length 128.

### My improvements
It was difficult to comprehend the function because all the logic of candidate creation and processing was in one place so I extracted some code and added it to a new function called `createCandidate`. This new method gets called when the original function receives a parameter. 

Doing so, I have moved the logic for the 2nd and 3rd points mentioned above in this function making the code more readable. Now the logic for candidate creation is in this new function and the processing is still in the original function.

I have written more tests to cover all the scenarios and I have also modified `package.json` and added the `test:coverage` command to generate code coverage. You can use it to generate coverage reports.

`npm run test:coverage`