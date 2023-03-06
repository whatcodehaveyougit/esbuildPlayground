// ESBUILD does not really support older JS than ES6 (2015 plus)

const echo = (text: string) => {
  // result
  let result = `hello ${text}`

  console.log(result)
}

echo('sigurd');



