# Loops

Petite série d'exercices sur les boucles...

## intersect

Ecrire la fonction `intersect`, dont le but est de trouver les valeurs
existantes dans deux tableaux.

Prototype: `intersect(arr1: Array<Number>, arr2: Array<Number>) -> Array<Number>`

Exemple:
```
const a = [5, 2, 8, 4, 3, 7];
const b = [9, 4, 1, 5, 6];

intersect(a, b);
// [5, 4];
```

> Note: l'ordre des éléments dans le tableau résultant n'importe pas.

## flatten

Ecrire la fonction `flatten`, dont le but est de transformer un tableau de
tableaux en un unique tableau "applati".

Prototype: `flatten(arr: Array<Number>) -> Array<Number>`

Exemple:
```
const a = [[5, 2], [8], [], [4, 3, 7]];

flatten(a);
// [ 5, 2, 8, 4, 3, 7 ]
```

Temps : 25 min

> Bonus: Même but, mais avec un nombre indéterminé de tableaux imbriqués.
> Hints: recursivité et `instanceof Array`.

## fibo

Ecrire la fonction `fibo`, dont le but est de calculer le nième élement de la
suite de fibonacci.

Rappel :
- fibo(0) = 1
- fibo(1) = 1
- fibo(n) = fibo(n - 1) + fibo(n - 2)

Prototype: `fibo(n: Number) -> Number`

Exemple:
```
fibo(8);
// 55
```

Bonus: faire l'exercice sans appel récursif.

Temps : 20 min

## isColor

Ecrire la fonction `isColor`, dont le but est de vérifier qu'une string est bien
une couleur au format `#RRGGBB`.

Prototype: `isColor(str: string) -> boolean`

Exemple:
```
isColor('#3CFa0A');
// true

isColor('666666');
// false

isColor('#1234567');
// false
```

Bonus: accepter les couleurs comportant une valeur alpha (`#RRGGBBAA`).

Temps : 45 min

## exp

Ecrire la fonction `exp`, dont le but est de calculer une exponentiation, c'est
à dire un nombre "puissance" un autre nombre.

Prototype: `exp(n: Number, e: Number) -> Number`

Exemple:
```
exp(8, 4);
// 4096
```

> Note: il faut faire l'exercice sans utiliser l'opérateur `**`.

Temps : 20 min

## excldisj

Ecrire la fonction `excldisj`, dont le but est de trouver les valuers
existantes dans l'un des deux tableaux, mais pas dans les deux.

Prototype: `excldisj(arr1: Array<Number>, arr2: Array<Number>) -> Array<Number>`

Exemple:
```
const a = [5, 2, 8, 4, 3, 7];
const b = [9, 4, 1, 5, 6];

excldisj(a, b);
// [2, 8, 3, 7, 9, 1, 6];
```

temps : 1h