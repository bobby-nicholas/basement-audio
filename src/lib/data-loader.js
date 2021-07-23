import {readFileSync} from 'fs';
import neat from 'neat-csv';
import path from 'path';
let records;
const dataPath = path.join(process.cwd(), 'src/data/reviews-data.csv');
export default async () => {
  const csvStr = readFileSync(dataPath);
  records = await neat(csvStr);
  return records;
};