// sort.js
function sortFiles(files) {
  const order = ["Zilan", "Dev", "Extern"]; // your desired order

  return files.sort((a, b) => {
    const aIndex = order.indexOf(a.tag);
    const bIndex = order.indexOf(b.tag);

    // Unknown tags get pushed to the end
    return (aIndex === -1 ? order.length : aIndex) -
           (bIndex === -1 ? order.length : bIndex);
  });
}
