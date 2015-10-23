import test from 'ava'
import { encode } from './'
import fs from 'fs';

test('encode', t => {
	const output = encode('text', { probability: 100 })
	console.log(output)
	t.pass()
	t.end()
})
