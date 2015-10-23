# homoglyph

A port of [mimic](https://github.com/reinderien/mimic) to node.js.

It's inspired by this terrible idea floating around:

> MT: Replace a semicolon (;) with a greek question mark (;) in your friend&#39;s C# code and watch them pull their hair out over the syntax error

>  [Peter Ritchie (@peterritchie) November 16, 2014](https://twitter.com/peterritchie/status/534011965132120064)


## Install

```sh
$ npm install --save homoglyph
```

##Usage

```javascript
var homoglyph = require('homoglyph');

homoglyph.encode('text', opts);
homoglyph.decode('text');

homoglyph.dict
// A ES6 Map Object with normal characters as keys and an array of similar looking utf8 characters as value.
homoglyph.reverse
// A ES6 Map Object with similar looking characters as keys and their usual letters as values
```
