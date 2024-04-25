export let answerService = {
    first_step:(results)=>{
        const enteredCommand = results.trim();
        const expected = 'console.log("Hello World");';
        const result = enteredCommand === expected;
        return result;
    },
    second_step: (results) => {
        const enteredCommand = results.trim();
        const expected = "const treasure = 7;";
        const result = enteredCommand === expected;
        return result;
    },
    third_step: (results) => {
        const enteredCommand = results.trim();
        const expected = "arr.filter((plank)=>plank===true);";
        const result = enteredCommand === expected;
        return result;
    },

    fourth_step: (results) => {
        const enteredCommand = results.trim();
        const expected = "str.concat('planks');";
        const result = enteredCommand === expected;
        return result;
    },

    five_step: (results) => {
        const enteredCommand = results.trim();
        const expected = "arr.unshift(rum);";
        const result = enteredCommand === expected;
        return result;
    },

    sixth_step: (results) => {
        const enteredCommand = results.trim();
        const expected = "arr.replace('rum', 'water');";
        const result = enteredCommand === expected;
        return result;
    },

    seventh_step: (results) => {
        const enteredCommand = results.trim();
        const expected = "str.split(' ');";
        const result = enteredCommand === expected;
        return result;
    },

    eighth_step: (results) => {
        const enteredCommand = results.trim();
        const expected = "arr.search('zen');";
        const result = enteredCommand === expected;
        return result;
    },

    nineth_step: (results) => {
        const enteredCommand = results.trim();
        const expected = "scream.toUpperCase();";
        const result = enteredCommand === expected;
        return result;
    },

    tenth_step: (results) => {
        const enteredCommand = results.trim();
        const expected = "treasure.valueOf();";
        const result = enteredCommand === expected;
        return result;
    },
}


