if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined')
      }

      var o = Object(this)

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function")
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1]

      // 5. Let k be 0.
      var k = 0

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k]
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue
        }
        // e. Increase k by 1.
        k++
      }

      // 7. Return undefined.
      return undefined
    }
  })
}
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
    value: function(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" est nul ou non défini')
      }

      // 1. Soit o égal à ? Object(cette valeur).
      var o = Object(this)

      // 2. Soit len égal à ? Length(? Get(o, "length")).
      var len = o.length >>> 0

      // 3. Si len = 0, renvoyer "false".
      if (len === 0) {
        return false
      }

      // 4. Soit n = ? ToInteger(fromIndex).
      // Pour la cohérence du code, on gardera le nom anglais "fromIndex" pour la variable auparavant appelée "indiceDépart"
      //    (Si fromIndex n'est pas défini, cette étape produit la valeur 0.)
      var n = fromIndex | 0

      // 5. Si n ≥ 0,
      //  a. Alors k = n.
      // 6. Sinon, si n < 0,
      //  a. Alors k = len + n.
      //  b. Si k < 0, alors k = 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0)

      function sameValueZero(x, y) {
        return (
          x === y ||
          (typeof x === "number" &&
            typeof y === "number" &&
            isNaN(x) &&
            isNaN(y))
        )
      }

      // 7. Répéter tant que k < len
      while (k < len) {
        // a. Soit elementK le résultat de ? Get(O, ! ToString(k)).
        // b. Si SameValueZero(searchElement, elementK) est vrai, renvoyer "true".
        if (sameValueZero(o[k], searchElement)) {
          return true
        }
        // c. Augmenter la valeur de k de 1.
        k++
      }

      // 8. Renvoyer "false"
      return false
    }
  })
}
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    "use strict"
    if (typeof start !== "number") {
      start = 0
    }

    if (start + search.length > this.length) {
      return false
    } else {
      return this.indexOf(search, start) !== -1
    }
  }
}
