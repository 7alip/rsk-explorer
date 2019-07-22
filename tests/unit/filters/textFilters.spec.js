import { expect } from 'chai'
import * as textFilters from '../../../src/filters/TextFilters'

test('yesNo', [
  [1, 'yes'],
  [true, 'yes'],
  [0, 'no'],
  [null, 'no'],
  [undefined, 'no']
])

test('msSuffix', [
  ['AB', 'AB'],
  [2, '2ms'],
  ['10', '10ms']
])

test('camelCaseTo', [
  ['myName', 'my name'],
  ['my name', 'my name'],
  ['', ''],
  ['this isAnExample', 'this is an example']
])

test('txStatus', [
  [1, 'SUCCESSFUL'],
  ['1', 'SUCCESSFUL'],
  ['0x01', 'SUCCESSFUL'],
  [0, 'FAILED'],
  [2, 'FAILED']
])

function test (name, values) {
  describe(`# ${name}`, () => {
    for (let c of values) {
      const method = textFilters[name]
      const [value, expected] = c
      it(`${addQuotes(value)} should be ${addQuotes(expected)}`, () => {
        expect(method(value)).to.be.equal(expected)
      })
    }
  })
}

function addQuotes (value) {
  if (typeof value === 'string') {
    value = `"${value}"`
  }
  return value
}