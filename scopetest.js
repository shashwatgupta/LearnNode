(function foo()
{
  var bar;
  quux = 'insidefoo';
  function zip()
  {
      bar = true;
      var quux = 'insidezip';
  }

  return zip;
})();