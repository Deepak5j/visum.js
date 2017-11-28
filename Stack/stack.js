//============= STACK  Data Structure START ============= 
//create stack
function createStack() {
    var stack = [];
    return stack;
}
//display stack 
function displayStack(stack) {
    if(stack.length === 0)
        alert("Empty Stack");
    else 
        alert("Stack: "+stack);
}

//inserting elements to stack
function pushStack(stack, element) {
    stack.push(element);
}

//deleting an element from stack
function popStack(stack) {
    var element = stack.pop();
    return element;
}
//============= STACK  Data Structure END =============


//============= Uing Stack ============================

var s1 = createStack(); //defining stack variable as s1

displayStack(s1); //displaying newly created stack, output-EMPTY as no element

pushStack(s1,4); //inserting 4 in stack
displayStack(s1); //displaying result

var el = popStack(s1); //deleting top element from stack and saving it into a variable el;
alert("Poped element: "+el);

displayStack(s1);
 
//============= Uing Stack Ends============================
