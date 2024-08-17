

var bf = {
    increase: function () {
        this.memory[this.index]++;
    },
    deacrese: function () {
        if (this.memory[this.index > 0]) {
            this.memory[this.index]--;
        }
    },
    shiftLeft: function () {
        if (this.index > 0) {
            this.index--;
        }
    },
    shiftRigth: function () {
        this.index++;
    },
    leftBracket: function () {
        //    this.stack.push(this.memory[this.index]);
    },
    rigthBracket: function () {
        //    this.stack.push(this.memory[this.index]);

    },
    print: function () {
        console.log(String.fromCharCode(this.memory[this.index]));
    },


    memory: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    stack: [],

    program: [],

    index: 0,

    codeStr: "+++[]++++>+++++++++++++++++++++++++>>++++++.",
   
    compile: function (code) {
        for (var i = 0; i < code.length; i++) {
            var oper;
            switch (code[i]) {
                case '+':
                    oper = this.createOperator(code[i], this.increase);

                    break

                case '-':
                    oper = this.createOperator(code[i], this.deacrese);

                    break


                case '<':
                    oper = this.createOperator(code[i], this.shiftLeft);

                    break

                case '>':
                    oper = this.createOperator(code[i], this.shiftRigth);

                    break

                case '[':
                    oper = this.createOperator(code[i], this.leftBracket, i, "left");
                    this.stack.push(oper);
                    break

                case ']':
                    oper = this.createOperator(code[i], this.rigthBracket, i, "rigth");
                    this.stack.push(oper);

                    break

                case '.':
                    oper = this.createOperator(code[i], this.print);

                    break

            }
            this.program.push(oper.run);
        }


        return this.program;

    },

    createOperator: function (name, run, index, bracketSide) {
        var oper = {};
        oper.name = name;
        oper.run = run;
        oper.index = index;
        oper.bracketSide = bracketSide;
        return oper;
    },

    

    run: function () {
        for (var i = 0; i < this.program.length; i++) {
            this.program[i].call(this);

        }
    }

    


}


function init() {
    console.log(bf.compile(bf.codeStr));
   // bf.compile();
    bf.run();
    
  console.log(bf.memory);
    console.log(bf.stack);
}
init();