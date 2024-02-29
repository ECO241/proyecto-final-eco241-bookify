async function getMessages() {
    const query = await fetch(`http://localhost:3001/messages/v1`);
    const data = await query.json();
    return data;
  }