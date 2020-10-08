// Test

const get_data = async () => {
    const response = await fetch("http://localhost:8000/api/");
    return response.json();
};

get_data()
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
