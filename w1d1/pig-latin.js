var list = process.argv.slice(2);
function pigdify(list)
{
  for (var i = 0; i < list.length; i++)
  {
    var output = "";
    for (var n = 1; n < list[i].length; n++)
    {
      if (n === list[i].length - 1 )
      {
        output += (list[i][n] + list[i][0] + "ay");
      }
      else
      {
        output += (list[i])[n];
      }
    }
    list[i] = output;
  }
  return list.join(' ');
}
console.log(pigdify(list))
