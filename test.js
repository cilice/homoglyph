import test from 'ava'
import { encode, decode, dict, reverse } from './'

test('encode', t => {
  const output = encode('text ;', { probability: 100, chars: ' ;' })
  t.pass(output)
  t.end()
})

test('decode', t => {
  const input = encode('text ;', { probability: 100 })
  const output = decode(input)
  t.pass()
  t.end()
})
