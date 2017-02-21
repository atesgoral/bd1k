// Poor man's minifier
function minify(src, vars) {
  return src
    .replace(/\s+\/\/.+$/gm, '') // Trim line comments
    .replace(/[\s\n]+(?!\w)/gm, '') // Trim all whitespace that are not followed by word character
    .replace(/(\W)[\s\n]+/gm, '$1') // Trim all whitespace that follow a non-word character
    .replace(/(\w+)/gm, (s, name) => vars[name] || name); // Shorten variables
}

onload = () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  canvas.focus();
  canvas.onkeydown = (e) => e.preventDefault();

  const src = rawSrc.innerHTML;
  const vars = eval(`(${rawVars.innerHTML})`);

  const min = minify(src, vars);

  bytes.innerHTML = min.length;

  minified.innerHTML = new Option(min).innerHTML;
  source.innerHTML = new Option(src).innerHTML;

  hljs.highlightBlock(minified);
  hljs.highlightBlock(source);

  const a = canvas;
  const b = body;
  const c = canvas.getContext('2d');
  const d = document;

  try {
    eval(min);
  } catch (e) {
    error.innerHTML = e.message;
  }
};
