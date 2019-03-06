password = process.argv[2];

function obsfucate(password)
{
  var output = "";
  for (var i = 0; i < password.length; i++)
  {
    if (password[i] === "a")
    {
      output += "4";
    }
    else if (password[i] === "e")
    {
      output += "3";
    }
    else if (password[i] === "o")
    {
      output += "0";
    }
    else if (password[i] === "l")
    {
      output += "1";
    }
    else
    {
      output += password[i];
    }
  }
  return output;
}

console.log(obsfucate(password))


