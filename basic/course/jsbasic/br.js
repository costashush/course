function BF() {

    var program = [];

    var memory = [];

    var index = 0;

    var stack = [];
     

    function memoryInit() { 
        for(var i = 0; i < 10; ++i){
            memory[i] = 0;
        }
    }
    function increase() {
        ++memory[index];
    };
    function decrease() {
        if (memory[index] > 0)
            --memory[index];
    };
    function shiftRight() {
        ++index;
    };
    function shiftLeft() {
        if (index > 0)
            --index;
    };
    function leftBracket(i) {
        if (memory[index] == 0 || memory[index] == undefined) {
            while (program[i + 1].name !== 'rightBracket') {
                i++;
            }
        }
        i++;
        return i;
    };
    function rightBracket(i) {
        if (stack.length) {
            i = stack[stack.length - 1].index;
            if (stack && memory[index] == 0) {
                stack.pop();
            }

        }


        return i + 1;
    };
    function print() {
        console.log(String.fromCharCode(memory[index]));
    };
    function createOperator(name, run, index, bracketSide) {
        var operator = {};
        operator.name = name;
        operator.run = run;
        operator.bracketSide = bracketSide;
        operator.index = index;
        return operator;

    };

    function compile(inputCode) {

        for (var i = 0; i < inputCode.length; ++i) {
            switch (inputCode[i]) {
                case '+':
                    program.push(createOperator('+', increase).run);
                    break;
                case '-':
                    program.push(createOperator('-', decrease).run);
                    break;
                case '>':
                    program.push(createOperator('>', shiftRight).run);
                    break;
                case '<':
                    program.push(createOperator('<', shiftLeft).run);
                    break;
                case '[':
                    program.push(createOperator('[', leftBracket, i, 'left').run);
                    
                    break;
                case ']':
                    program.push(createOperator(']', rightBracket, i, 'right').run);
                    break;
                case '.':
                    program.push(createOperator('.', print).run);
                    break;
            }
        }
        return program;
    };

    function run(compiledProgram) {
        memoryInit();
        var i = 0;
        var newBracket;
        while (i < program.length) {
            if (program[i].name == 'leftBracket' || program[i].name == 'rightBracket') {
                if (program[i].name == 'rightBracket') {
                    i = program[i](i);
                    if (i == program.length) break;
                }
                if (program[i].name == 'leftBracket') {
                    if (stack.length == 0) {
                        newBracket = {}
                        newBracket.side = 'left';
                        newBracket.index = i;
                        stack.push(newBracket);

                    } else {
                        if (i !== stack[stack.length - 1].index) {
                            newBracket = {}
                            newBracket.side = 'left';
                            newBracket.index = i;
                            stack.push(newBracket);
                        }
                    }
                    //i = program[i].call(this, i);
                    i = program[i](i);
                }
            } else {
                program[i]();
                i++;
            }
        }
       
    }
    var finalFunctions = {};
    finalFunctions.compileFunc = compile;
    finalFunctions.runFunc = run;
    
    //********/

   

    return finalFunctions;
}

var inputCode = "+++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.";
var bf = BF();
var compiledProgram = bf.compileFunc(inputCode);
var run = bf.runFunc(compiledProgram);





