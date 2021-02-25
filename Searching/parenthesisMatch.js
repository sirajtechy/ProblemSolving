
let parenthensis = "{]{}"
isValidParenthesis = (parenthensis) => {

    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    const openParens = [];
    for (let i = 0; i < parenthensis.length; i++) {
        const endParen = pairs[parenthensis[i]];

        if (endParen) openParens.push(endParen);
        else if (openParens[openParens.length - 1] === parenthensis[i]) openParens.pop();
        else return false;
    }

    return openParens.length ? false : true;


}
console.log(isValidParenthesis(parenthensis))
