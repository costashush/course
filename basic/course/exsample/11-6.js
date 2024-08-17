
function BF() {

    var program = []; // array of functions according to the input code

    var memory = []; // array which will contain the numbers table according to the program

    var index = 0; // my 'arrow' which will point on the current value

    var stack = []; // a 'stack' data storage to keep track of loops

    function memoryInit(arrLength) { // initialize my memory array to [0, 0, 0, 0, 0, 0, 0, 0, 0]
        for (var i = 0; i < arrLength; ++i) {
            memory[i] = 0;
        }
    }
    actions = {
        '+': function increase() {
            ++memory[index];
        },

        '-': function decrease() {
            if (memory[index] > 0)
                --memory[index];
        },

        '>': function shiftRight() {
            ++index;
        },

        '<': function shiftLeft() {
            if (index > 0)
                --index;
        },

        '[': function leftBracket(i) {
            /* if index is on empty cell - 
            skip to the function after closing bracket (dont enter the loop)
            else - continue and enter the loop*/
            if (memory[index] == 0 || memory[index] == undefined) {
                i=stack[1]
            }
            i++;
            return i;
        },

        ']': function rightBracket(i) {
           
          
            stack[0]

            return i + 1;
        },

        '.': function print() {
            process.stdout.write(String.fromCharCode(memory[index]));
        }
    }

    function compile(inputCode) {

        for (var i = 0; i < inputCode.length; ++i) {
            program[i] = actions[inputCode[i]];
            if (actions[inputCode[i]] == "[") {
                stack.push(i);
            }
            if (actions[inputCode[i]] == "]") {

            }
        }
        return program;
    };

    function run(compiledProgram) {
        memoryInit(10);
        var i = 0;

        while (i < program.length) {
            program[i]();
            i++;
        }
    }



    var finalFunctions = {};
    finalFunctions.compileFunc = compile;
    finalFunctions.runFunc = run;

    return finalFunctions;
}
    
function testBf() {

    var inputCode = "+++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.";
    var brainFuck = BF();
    var compiledProgram = brainFuck.compileFunc(inputCode);
    var run = brainFuck.runFunc(compiledProgram);
}

testBf();
    
    console.log("hello world");

