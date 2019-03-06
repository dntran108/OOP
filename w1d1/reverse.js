var myArgs = process.argv.slice(2);
function reverse(list)
{
  for (var i = 0; i < list.length; i++)
  {
    var output = "";
    for (var n = list[i].length - 1; n >= 0; n--)
    {
      output += (list[i])[n];
    }
    list[i] = output;
  }
  return list;
}
console.log(reverse(myArgs))