export const groupBy = (collection: any, property: any) => {
  let val, index;
  const values = [],
    result = [];
  for (let i = 0; i < collection.length; i++) {
    val = collection[i][property];
    index = values.indexOf(val);
    if (index > -1) result[index].push(collection[i]);
    else {
      values.push(val);
      result.push([collection[i]]);
    }
  }
  return result;
};

export const groupBy1 = (array: any[], key: any) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

export const groupByName = (collection: any, property: any): any => {};

export const getExtensionFile = (file: any): string => {
  var basename = file.name.split(/[\\/]/).pop()!;
  let pos = basename.lastIndexOf('.');
  return basename.slice(pos + 1);
};
