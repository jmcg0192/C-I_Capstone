// Does not need to be edited

const getJSONData = async () => {
	const binId = '68124a478561e97a500ae25e';
	const apiKey = '$2a$10$4gNjie2gLr.zVaIgMqTnuO79WGbCT4MSeM7jEejg8GiLpR.RnnQJ6';
	const url = `https://api.jsonbin.io/v3/b/${binId}?meta=false`;
  
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'X-Master-Key': apiKey,
			'Content-Type': 'application/json'
		}
	});
  
	if (response.status !== 200) {
		throw new Error("Cannot fetch data");
	}
  
	const data = await response.json(); // data is already an object
	return data; // ⬅️ FIX: remove stringify
};
