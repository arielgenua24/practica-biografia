var numeros = 100;
for(var i = 1; i <= 100; i++ )
{
  if( i % 3 == 0) 
  {
    document.write(i, "fizz");
  } 
   if (i % 5 == 0) {
    document.write(i, "bozz");
  }
  document.write("<br />")
}