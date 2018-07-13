# Exos JavaScript

Cette section regroupe des exercices destinés à tout développeur débutant,
cherchant à étendre ses conaissances en JavaScript. Ces exercices sont
demandent néenmoins un maitrise de la syntaxe du JS. Il est nécéssaire d'avoir
les notions de variables, de conditions, de boucles et de fonctions.

Les exos sont regroupés par catégories :

- [Boucles](./loops)

Avant de commencer, il est nécéssaire d'installer
[`NodeJS`](https://nodejs.org/). Ceci peut être fait depuis un shell (sous
linux, ouvrir l'applicaton "terminal"). Dans les commandes suivantes, il ne
faut pas écrire le `42sh$ `, qui représente seulement le prompt du shell.

```sh
42sh$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

> Note : pour l'installation de node sur un autre OS, se référer à la
> [documentation de NodeJS](https://nodejs.org/en/download/).

Voilà, `NodeJS` est maintenant installé. Toujours dans le shell, il faut
maintenant récupérer le dépôt github et installer les modules node :

```sh
42sh$ git clone https://github.com/nilscox/exos.git
42sh$ cd exos
42sh$ npm install
```

Tout est prêt pour commencer.

Pour chaque exercice, il est demmandé d'écrire une fonction. Chaque fonction
doit être dans un fichier séparé, dont le nom doit être le même que le nom de la
fonction, suffixé par `.js`. De plus, la fonction doit être l'unique symbole
exporté.

Exemple :
```js
module.exports = function <name>() {
  // ...
}
```

Pour chaque exercice, une série de tests permet de vérifier si le comportement
de la fonction est correct. Les test sont lancés avec la commande `npm test`.
Pour lancer les tests sur un exercice spécifique, il est possible de le
préciser avec `npm test <exo>`. Cette commande doit être lancée depuis le
dossier `exos/javascript`, ou dans l'un de ses sous dossiers.

Plutôt que de passer par `NodeJS`, il est possible de réaliser les exercices
dans le contexte d'un navigateur web (fichier `.js` inclu dans une page web, ou
sur [codepen](http://codepen.io/), [jsfiddle](http://jsfiddle.net/), ...).
Cependant, il ne sera pas possible d'éxécuter les tests.
