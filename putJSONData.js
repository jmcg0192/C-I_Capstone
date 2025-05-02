const putJSONData = async (updatedData) => {
	const binId = '68124a478561e97a500ae25e';
	const apiKey = '$2a$10$4gNjie2gLr.zVaIgMqTnuO79WGbCT4MSeM7jEejg8GiLpR.RnnQJ6';
	const url = "https://api.jsonbin.io/v3/b/" + binId;
  
	try {
	  const response = await fetch(url, {
		method: 'PUT',
		headers: {
		  'X-Master-Key': apiKey,
		  'Content-Type': 'application/json',
		  'X-Bin-Versioning': 'false', // Prevent versioning if necessary
		},
		body: JSON.stringify(updatedData), // Convert back to a JSON string
	  });
  
	  if (response.status !== 200) {
		throw new Error('Failed to update data');
	  }
  
	  alert('Data successfully updated'); //Removed this, as every time I deleted an album it threw a popup you had to click off of
	  return await response.json();
	} catch (error) {
	  console.error('Error:', error.message);
	  throw error;
	}
  };
  