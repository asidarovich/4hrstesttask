const path = require('path');
const fs = require('fs');

class FilesHelper {
  generateSubfolderPath(mainPath, folderOrFile) {
    return path.join(mainPath, folderOrFile);
  }

  getFolderFilesList(folderPath) {
    return fs.readdirSync(folderPath);
  }

  emptyFolder(folderPath) {
    let files = this.getFolderFilesList(folderPath);
    files.forEach((file) => {
      const filePath = this.generateSubfolderPath(folderPath, file);
      fs.unlinkSync(filePath);
    });
  }

  createFolder(folderPath) {
    if (!fs.existsSync(folderPath)){
      fs.mkdirSync(folderPath);
    }
  }
}

export default new FilesHelper();