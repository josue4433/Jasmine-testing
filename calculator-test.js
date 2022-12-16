
it('should calculate the monthly rate correctly', function () {
  expect(() => calculator.add('1' , 2)).toThrow();
});


it("should return a result with 2 decimal places", function() {
  expect(() => calculator.add(1 , '2')).toThrow();
});

/// etc
