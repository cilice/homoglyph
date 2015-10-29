'use strict'

const dict = require('./dict').dict
const reverse = require('./dict').reverse

module.exports.dict = dict
module.exports.reverse = reverse
module.exports.decode = (text) => replace(text, reverse, true)
module.exports.encode = (text, opts) => {
  opts = Object.assign({
    probability: 33,
    chars: ''
  }, opts)

  return replace(text, dict, () => Math.random() < (opts.probability / 100), opts)
}

function splice (str, index, count, add) {
  return str.slice(0, index) + add + str.slice(index + count)
}

function replace (text, dict, condition, options) {
  const original = text
  let pos = 0

  for (let char of original) {
    const isInArray = (options.chars.length && options.chars.includes(char))
    if (isInArray || !options.chars.length) {
      const replacement = dict.get(char)

      if (replacement !== undefined) {
        const fakeLetter = Array.isArray(replacement) ? replacement[Math.floor(Math.random() * replacement.length)] : replacement

        if (typeof condition === 'function') {
          if (condition()) text = splice(text, pos, 1, fakeLetter)
        } else {
          text = splice(text, pos, 1, fakeLetter)
        }
      }
    }

    pos = pos + 1
  }
  return text
}
