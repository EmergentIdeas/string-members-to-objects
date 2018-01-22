require('mocha')
var expect = require('chai').expect
var assert = require('chai').assert

const transform = require('../index.js')

describe("standard parsing and execution", function() {
	it("simple replacement", function() {
		
		let input = {
			s1: 'hello',
			s2: '"hello"',
			ar: '[1, 2]',
			n: "12",
			b: "true",
			o: '{ "n": 12}'
		}
		let output = transform(input)
		
		assert.equal('hello', output.s1)
		assert.equal('"hello"', output.s2)
		assert.equal(2, output.ar[1])
		assert.equal(12, output.n)
		assert.equal(true, output.b)
		assert.equal(12, output.o.n)
	})
	
})




