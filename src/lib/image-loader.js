import { readdirSync } from 'fs';
import path from 'path';

const imageRoot = path.join(process.cwd(), 'static/images/');

const load = (folderPath) => {
  const imgPath = path.join(imageRoot, folderPath);
  const res = readdirSync(imgPath).map(img => path.join('images', folderPath, img));
  return res;
};
export default () => {
  const artists = load('artists');
  const studioThumbnails = load('studio/thumbnails');
  const studioFulls = load('studio/full');
  const studio = studioFulls.map(full => {
    const thumbnail = studioThumbnails.find(t => path.basename(t) === path.basename(full));
    return { full, thumbnail };
  });
  return { artists, studio };
};