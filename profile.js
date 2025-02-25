function showUserProfile() {
  document.body.innerHTML = `
    <div class="container mt-5">
      <h1 class="text-center">Welcome, ${loggedInUser.Username}</h1>

      <!-- Profile Image Upload -->
      <div class="text-center">
        <img id="profileImage" class="profile-image" src="default-avatar.png" alt="Profile Image">
        <input type="file" id="imageUpload" class="form-control upload-btn" accept="image/*">
        <button class="btn btn-primary upload-btn" onclick="uploadImage()">Upload Image</button>
      </div>

      <!-- User Song List -->
      <div class="song-list">
        <h3>Selected Songs</h3>
        <ul id="songHistory"></ul>
      </div>

        <!-- Buttons -->
      <button class="btn btn-danger mt-3" onclick="logout()">Logout</button>
      <button class="btn btn-secondary mt-3" onclick="returnToSearch()">Back to Search</button>
    </div>
  `;

  loadProfileImage();
  loadSongHistory();
}

function returnToSearch() {
  location.reload(); // Reloads the page to restore the search UI
}


// Upload and save profile image
function uploadImage() {
  const fileInput = document.getElementById("imageUpload");
  const file = fileInput.files[0];
  if (!file) {
    alert("Please select an image.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("profileImage").src = e.target.result;
    localStorage.setItem(`profileImage-${loggedInUser.Username}`, e.target.result);
  };
  reader.readAsDataURL(file);
}

// Load the saved profile image
function loadProfileImage() {
  const savedImage = localStorage.getItem(`profileImage-${loggedInUser.Username}`);
  if (savedImage) {
    document.getElementById("profileImage").src = savedImage;
  }
}

// Load selected songs from JSONBin
async function loadSongHistory() {
  try {
    const data = await getJSONData();
    let users = JSON.parse(data);
    let user = users.find(u => u.Username === loggedInUser.Username);

    const songList = document.getElementById("songHistory");
    songList.innerHTML = "";

    if (user && user.selectedSongs && user.selectedSongs.length > 0) {
      user.selectedSongs.forEach(song => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${song.track}</strong> - ${song.artist}`;
        songList.appendChild(listItem);
      });
    } else {
      songList.innerHTML = "<p>No songs selected yet.</p>";
    }
  } catch (error) {
    console.error("Error loading song history:", error);
  }
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  location.reload();
}
