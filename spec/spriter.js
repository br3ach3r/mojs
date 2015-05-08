(function() {
  var Spriter;

  Spriter = mojs.Spriter;

  describe('Spriter module ->', function() {
    return it('should have defaults', function() {
      var sp;
      sp = new Spriter({
        el: document.createElement('div')
      });
      expect(sp.defaults.duration).toBe(500);
      expect(sp.defaults.delay).toBe(0);
      expect(sp.defaults.easing).toBe('linear.none');
      expect(sp.defaults.repeat).toBe(0);
      expect(sp.defaults.yoyo).toBe(false);
      expect(sp.defaults.onStart).toBe(null);
      expect(sp.defaults.onUpdate).toBe(null);
      return expect(sp.defaults.onComplete).toBe(null);
    });
  });

}).call(this);
