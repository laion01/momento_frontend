const files = require.context(".", false, /\.json$/);
const data = [];

files.keys().forEach((key) => {
  const fileName = key.replace(/\.\/(.+)\.json$/, "$1");
  let name = String(fileName).split('/');
  name = name[name.length -1];
  name = String(name).substring(0, name.length-5);

  const keyname = files(key).ISO.alpha2;
  const states = files(key).states;
  data[keyname] = states;
});

export default data;
