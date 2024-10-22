module.exports = class SimpleSheet {
  constructor(headerMap, content) {
    /**
     * Map that links a header name to a numeric column index
     */
    this.headerMap = headerMap;

    /**
     * Bi-dimensional array that represents the content of the sheet
     */
    this.content = content;
  }

  getCellValue(row, column) {
    let columnIndex;

    if (typeof column === 'number') {
      columnIndex = column;
    } else if (typeof column === 'string') {
      columnIndex = this.headerMap[column];
    } else {
      throw new Error('Invalid header type');
    }
    return this.content[row][columnIndex];
  }
};
