const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('project-picture');
const imagePreview = document.getElementById('image-preview');

// Prevent default drag behaviors
dropArea.addEventListener('dragover', function(event) {
  event.preventDefault();
  dropArea.style.backgroundColor = '#e6f0ff'; // Highlight on drag over
});

dropArea.addEventListener('dragleave', function(event) {
  event.preventDefault();
  dropArea.style.backgroundColor = ''; // Reset background when drag leaves
});

// Handle dropped files
dropArea.addEventListener('drop', function(event) {
  event.preventDefault();
  dropArea.style.backgroundColor = ''; // Reset background when file is dropped

  const file = event.dataTransfer.files[0];
  if (file) {
    fileInput.files = event.dataTransfer.files; // Set the file input value to the dropped file
    previewImage(file); // Preview the dropped image
  }
});

// Handle file input changes (when user clicks "Select")
fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    previewImage(file); // Preview the selected image
  }
});

// Function to preview the image
function previewImage(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = document.createElement('img');
    img.src = e.target.result;
    img.alt = 'Project Image';
    imagePreview.innerHTML = ''; // Clear previous image preview
    imagePreview.appendChild(img);
    imagePreview.style.display = 'block'; // Show image preview
  };
  reader.readAsDataURL(file);
}
