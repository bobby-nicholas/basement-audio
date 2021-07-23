import loadTestimonials from '../lib/data-loader';
import {basename} from 'path';
let contents;
loadTestimonials().then(data => {
	contents = data.map(t => {
		t.image = t.image ? `images/artists/${t.image}` : '#';
		return t;
	});
})

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
  });
	res.end(JSON.stringify(contents));
}