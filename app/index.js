// Test

const get_data = async () => {
    const response = await fetch("localhost/hh2020/serwer/skrt.php");
    return response.json();
};

get_data()
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
