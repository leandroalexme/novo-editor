
export const loadFile = (file, store) => {
  return new Promise((resolve, reject) => {
    if (file.type.indexOf('image') >= 0) {
      loadImageFile(file, store).then(resolve).catch(reject);
    } else if (file.name.endsWith('.json')) {
      loadJSONFile(file, store).then(resolve).catch(reject);
    } else {
      reject(new Error('Unsupported file type'));
    }
  });
};

const loadImageFile = (file, store) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result;
      store.activePage.addElement({
        type: 'image',
        src: url,
        x: 50,
        y: 50,
        width: 200,
        height: 200,
      });
      resolve();
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const loadJSONFile = (file, store) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result);
        store.loadJSON(json);
        resolve();
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
};

export const downloadFile = (url, name) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadJSON = (data, filename = 'design.json') => {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  downloadFile(url, filename);
  URL.revokeObjectURL(url);
};

export const downloadImage = (dataURL, filename = 'design.png') => {
  downloadFile(dataURL, filename);
};
