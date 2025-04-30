// Does not need to be edited

const getJSONData = async () => {
	// Replace YOUR_BIN_ID with the actual ID of your bin
	const binId = '68124a478561e97a500ae25e';
	// Replace YOUR_API_KEY with your JSONBin.io API key
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
  
	let data = await response.json();
	return JSON.stringify(data);
  };
  