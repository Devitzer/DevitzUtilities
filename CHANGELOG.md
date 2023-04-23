# 1.0.0 <br>

Initial release!

# 1.1.0 <br>

I made a new way to handle the files to make it easier for me!

# 1.1.1 <br>

Support for the config inside the node-modules folder where the source is located! Also added a README.md.

# 1.2.0 <br>

New commands that let you calculate stuff! (add, sub, multi)

# 1.2.1 <br>

Fix issues with add, sub and multi not logging. devitz.log.dir has also been removed due to an unknown error being fixed soon.

# 1.2.2 <br>

Typo, lol.

# 1.2.3 <br>

Simple renaming.

# 1.2.4 <br>

An error that made the devitz.console.log command show "This command is disabled!" error even though it's not in the config.

# 1.2.5 <br>

I forgot this, but I fixed devitz.log.multi and devitz.log.sub and they can only use 2 arguements for numbers.

# 1.2.6 <br>

I forgot 1.2.5 logs, I am so embarrased lol.

# 1.3.0 <br>

In this version, we have 3 new commands in the devitz.calc category (addres, subres, multires)! Basically what this does is instead of logging in the console the result of the operation, it will just give you a plain number, which allows you to use it like this! console.log('The result of 1000-500 is', devitz.calc.subres(1000,500), ', Pretty cool huh!'), and it would return "The result of 1000-500 is 500, Pretty cool huh!". Try it out!

# 2.0.0 <br>

6 new commands in the calc category! (addString, subString, multiString, operation, operationResult, operationString!) 3 commands renamed! (addres to addResult, subres to subResult, multires to multiResult) <br>

addString, subString, multiString will return the result of the operation as strings rather then numbers!
operation (Aliases: op) will return as a number the sum of any operation! Example: devitz.calc.operation((2+2) * 10) would return **40!** and log it to the console., same for devitz.calc.op. <br>

operationResult (Aliases: opResult) will return as a number the sum of any operation! Example: devitz.calc.operationResult((2+2) * 10) would reutrn **40!**, but the difference is it would not log it to the console, allowing you to make a custom message like: console.log('(2+2) * 10 is = to', devitz.calc.operationResult((2+2) * 10), ', right?') and the console would say "(2+2) * 10 is = to 40, right?" <br>

operationString (Aliases: opString) will return as a string the sum of any operation! The reason is because some consoles highlight logged numbers and I know some people don't like that. Example: devitz.calc.operationString((2+2) * 10) would return **40!** as a string, also it is not logged to the console so use the example of the previous command but replace it with this one.

Plans: In config.json, place the commands in categories rather than in all one "EnableDisable".

# 2.0.1

As I renamed addres, subres, and multires to their new names, I forgot to change in their sources the new names, and so for example if you were using one of them, lets say addResult, it would check if addres is enabled, but the command is called addResult, not addres! So I fixed that.

Plans: In config.json, place the commands in categories rather than in all one "EnableDisable".
More Plans: Make addResult, subResult, multiResult, operationResult and its aliases, operationString and its aliases, not return a console.log since its meant to be used in the middle of one, which makes a big mess. Example, you disable subResult in the config and then use it like this: <br> <br>


```
const devitz = require('devitzutilities');

console.log('7-7 is = to', devitz.calc.subResult(7,7), ', right?')
```

Since the command is disabled, it tries to return an error but makes a mess like this in your console:

Error, command disabled!

7-7 is = to **__undefined__** , right?

# 2.1.0

I made an easier way for me to handle new commands, again!
Also, I removed console logging commands, because they are useless. It was just a longer way to log stuff. I also made config.json command EnableDisable checkers in categories.
Updated README.md.

Plans: Make addResult, subResult, multiResult, operationResult and its aliases, operationString and its aliases, not return a console.log since its meant to be used in the middle of one, which makes a big mess. Example, you disable subResult in the config and then use it like this: <br> <br>


```
const devitz = require('devitzutilities');

console.log('7-7 is = to', devitz.calc.subResult(7,7), ', right?')
```

Since the command is disabled, it tries to return an error but makes a mess like this in your console:

Error, command disabled!

7-7 is = to **__undefined__** , right?

# 2.2.0

2 new categories (support, JSONUtil) and 4 new commands! (help, version, versionString, listArray) I also fixed the error thing that was inside plans for a bit.

# 2.2.1

1 new command (listArrayString), which lists arrays normally but instead returns it as a string instead of logging it immediately.

# 2.3.0

4 new commands (pickRandomArray, modulo, moduloResult, moduloString).

# 2.4.0

2 new commands (randomNumber, randomNumberResult), which allows you to get a random number between a default of 0 and a default of 100, or you can put what you want in the parameters!

# 2.4.1

Bug fix which allows randomNumber and randomNumberResult to be able to return the max number also, instead of 1 under it.

# 2.6.0

Why did I jump to 2.6.0? Well 2.2.1 was a new command update and under semantic versioning rules I should have made that 2.3.0, so thats why I'm jumping, also because I would like to introduce 6 new commands! (round, floor, roundResult, floorResult, roundString, floorString). round rounds any number you put in the brackets and floor makes any number go down to its origin sort of thing, Example: If you put 2.9, 2.8, 2.7, really 2 point anything, floor brings it down to 2, which basically means floor will remove the decimal and not round the number.

# 2.6.1

Updated README.md.
Added devitzLogo.png.

Plans: Make custom errors for commands.
More Plans: Create a class to handle items and prices? Mostly for fun.
More Plans Pt 2: Figure out how subcategories work and how to integrate them into devitzutilities.
More Plans Pt 3: Make devitz.support.help() work.

# 2.6.2

Fixed logo not showing in README.md when checking package on NPM.

Plans: Make custom errors for commands.
More Plans: Create a class to handle items and prices? Mostly for fun.
More Plans Pt 2: Figure out how subcategories work and how to integrate them into devitzutilities.
More Plans Pt 3: Make devitz.support.help() work.