function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`;
}
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = `"*"`) {
    const innerFunction = function (someValue = "special") {
        return `You are ${flair + someValue + flair}!`
    }
    return innerFunction
}
