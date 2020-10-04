// Test

const get_data = async () => {
    const data_pre = await fetch("adreserwera");
    const data = await data_pre.json();
    return data;
};

get_data()
    .then((e) => console.log(e))
    .catch((e) => console.log(e));