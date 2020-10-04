// Test

const get_data = async () => {
    const data_pre = await fetch("localhost/hh2020/serwer/skrt.php");
    // const data = ;
    return data_pre;
};

get_data()
    .then((e) => console.log(e))
    .catch((e) => console.log(e));