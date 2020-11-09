// window.alert('It worked');

const I_DO_NOT_CHANGE = 'if I have changes, something went wrong';

var IamBoring = 42;

function doSomethingUseful() {
    alert('somethng useful: ' + IamBoring);
}

var value = 'something';
var anotherValue = 'something else';

var objectLiteral = {
    'key': value
}

// You can address values of an object in two ways:
var firstWay = objectLiteral.key;
var secondWay = objectLiteral['key'];

var nestedObject = {
    firstKey: {
        secondKey: {
            thirdKey: {
                hello: 'hi'
            }
        }
    }
}

firstWay === secondWay;

var normalArray = [
    1, 2, 3
];

var objectArray = [
    {
        'key': value,
        'anotherKey': '123'
    },
    {
        'key': anotherValue,
        'anotherKey': '321'
    }
]

function addOnetoNumber(input) {
    input = Number(input);

    if (isNaN(input)) {
        return 'There was an error'
    } else {
        return input + 1;
    }
}

var tableIsToggled = false;
var tableToggleClass = 'table-special';

function toggleClassToTable() {
    var table = document.querySelector('table');

    if(!table) {
        alert('there was no table');
    } else {
        tableIsToggled = !tableIsToggled;

        if (tableIsToggled) {
            table.classList.add(tableToggleClass);
        } else {
            table.classList.remove(tableToggleClass);
        }
    }
}