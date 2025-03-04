// Does not need to be edited

const getJSONData = async () => {
	// Replace YOUR_BIN_ID with the actual ID of your bin
	const binId = '67a2e9b0ad19ca34f8fa08de';
	// Replace YOUR_API_KEY with your JSONBin.io API key
	const apiKey = '$2a$10$ann475gv9wsfbmNHPxuOqefmVOcYihvVP2LJ36GP0KgsIdxo2uJJm';
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
  