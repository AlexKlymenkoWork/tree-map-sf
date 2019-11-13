const csvToJson = require("convert-csv-to-json")
const input = "./dataSet/csv/street-tree-list.csv"
const output = "./dataSet/json/street-tree-list.json"

csvToJson
  .fieldDelimiter(",")
  .formatValueByType()
  .generateJsonFileFromCsv(input, output)
