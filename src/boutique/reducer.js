const defaultState = {
  panier: [],
  lang: navigator.language === "fr" ? "fr" : "en"
}

// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, "findIndex", {
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
        // d. If testResult is true, return k.
        var kValue = o[k]
        if (predicate.call(thisArg, kValue, k, o)) {
          return k
        }
        // e. Increase k by 1.
        k++
      }

      // 7. Return -1.
      return -1
    }
  })
}
export default function rootReducer(state = defaultState, action) {
  var { panier, lang } = state

  switch (action.type) {
    case "ADD":
      if (panier.findIndex(item => item.lien === action.item.lien) === -1) {
        action.item.quantite = 0
        panier.push(action.item)
      }

      panier = panier.reduce(function(acc, item) {
        if (item.lien === action.item.lien) {
          item.quantite = item.quantite + 1
        }
        acc.push(item)

        return acc
      }, [])

      break

    case "REMOVE":
      panier = panier.reduce(function(acc, item) {
        if (item.lien === action.item.lien) {
          item.quantite = item.quantite - 1
        }

        if (item.quantite > 0) {
          acc.push(item)
        }

        return acc
      }, [])

      break

    case "DELETE":
      panier = panier.filter(item => item.lien !== action.item.lien)
      break

    case "LANG":
      lang = action.lang
      break
  }

  return {
    panier,
    lang
  }
}
