// Function to load users from localStorage or initialize with default data
function loadUsers() {
  const defaultUsers = {
      "users": [
          {
              "servicecode": "GSL9902608683",
              "idNumber": "1018777605",
              "name": "جواهر مسعود الغامدي",
              "issueDate": "2025-03-02",
              "startDate": "2025-03-02",
              "endDate": "2025-03-02",
              "duration": "1",
              "doctor": "إلهام حلاني",
              "jobTitle": "طبيبة نساء وتوليد"
          },
          {
              "servicecode": "456",
              "idNumber": "123",
              "name": "صابر جمال احمد",
              "issueDate": "2025-03-02",
              "startDate": "2025-03-02",
              "endDate": "2025-03-02",
              "duration": "2",
              "doctor": "صابر ابو",
              "jobTitle": "طبيب اسنان"
          }
      ]
  };
  const usersJson = localStorage.getItem('users');
  return usersJson ? JSON.parse(usersJson) : defaultUsers;
}

// Function to save users to localStorage
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// Function to validate inputs and redirect if successful
function validateInputs() {
  const enteredServiceCode = document.getElementById('servicecode').value;
  const enteredIdNumber = document.getElementById('idNumber').value;
  const errorElement = document.getElementById('errorMessage');
  
  const usersData = loadUsers();
  const user = usersData.users.find(u => u.servicecode === enteredServiceCode && u.idNumber === enteredIdNumber);
  
  if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.href = "query.html";
  } else {
      errorElement.textContent = "البيانات المدخلة غير صحيحة";
      errorElement.style.display = "block";
      errorElement.style.backgroundColor = "rgba(231, 106, 106, 0.63)";
      setTimeout(() => {
          errorElement.style.display = "none";
      }, 3000);
  }
}