async function getLoans() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
        console.error("ID parameter is missing in the URL.");
        return;
    }

    console.log(id);

    try {
        const response = await fetch(`http://localhost:3000/books/Loans/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.success) {
            const data = result.data;

            if (Array.isArray(data) && data.length > 0) {
                data.forEach(loan => {
                    console.log(loan.Book_id);
                });
            } 
        }
    } catch (error) {
        console.error("Error fetching loan data:", error);
    }
}

getLoans();