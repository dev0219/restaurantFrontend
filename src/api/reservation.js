const apiUrl = "http://localhost:3000/api";

// Function to get restaurant data
export async function createReservation(newObj) {
  const response = await fetch(`${apiUrl}/reservation/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Specify the content type
      // You can add other headers here if needed, like authentication headers
    },
    body: JSON.stringify(newObj), // Convert the data to JSON
  });
  if (!response.ok) {
    throw new Error("Failed to create the retaurant");
  }
  return response.json();
}

export async function getUserReservations(userID) {
  const response = await fetch(`${apiUrl}/reservation/all`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Specify the content type
      // You can add other headers here if needed, like authentication headers
    },
    body: JSON.stringify(userID), // Convert the data to JSON
  });
  if (!response.ok) {
    throw new Error("Failed to get restaurants for the user");
  }
  return response.json();
}

export async function deleteReservation(delObj) {
  const response = await fetch(`${apiUrl}/reservation/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json", // Specify the content type
      // You can add other headers here if needed, like authentication headers
    },
    body: JSON.stringify(delObj), // Convert the data to JSON
  });
  if (!response.ok) {
    throw new Error("Failed to delete retaurant");
  }
  return response.json();
}
