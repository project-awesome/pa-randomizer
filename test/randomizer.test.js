var expect = require('chai').expect;
var Randomizer = require('../');

describe('Randomizer', function () {
    describe('constructor', function () {
        it('creates a Randomizer from a seed', function () {
            var r = new Randomizer('example seed');
            expect(r).to.be.an.instanceof(Randomizer);
        });
        it('errors if no seed is given', function () {
            expect(function() { new Randomizer(); }).to.throw(TypeError);
        });
        it('errors if a non-string seed is given', function () {
            expect(function() { new Randomizer(123); }).to.throw(TypeError);
        });
    });
    describe('integer', function () {
        it('gives specific values for seed "abcd1234"', function () {
            var r = new Randomizer('abcd1234');
            expect(r.integer('test1', 10)).to.equal(9);
            expect(r.integer('test2', 10)).to.equal(2);
            expect(r.integer('test3', 10)).to.equal(7);
        });
    });
});










