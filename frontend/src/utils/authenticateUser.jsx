async function getUser(email, password) {
  const apiURL = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${apiURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function authenticateUser(email, password) {
  const [user] = await getUser(email, password);
  console.log(user);

  if (user) {
    if (user.email === email && user.firstName === password) {
      return true;
    } else {
      return false;
    }
  }
}
