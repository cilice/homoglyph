import test from 'ava'
import { encode } from './'

test('encode', t => {
  const output = encode('text ;', { probability: 100, chars: ' ;' })
  console.log(output)
  t.pass()
  t.end()
})
