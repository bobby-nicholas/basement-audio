import loadImages from '../lib/image-loader';

const images = loadImages();

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
  });
  const contents = JSON.stringify(images);
	res.end(contents);
}