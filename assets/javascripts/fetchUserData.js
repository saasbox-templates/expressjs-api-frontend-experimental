
const createGetUser = async function() {
  let jwt = $("#token").attr("data-token");
  let server_url = "https://expressjs-api-server.onrender.com";

  return new Promise((resolve, reject) => {
    $.ajax({
        url: server_url + "/create-get-user",
        headers: { Authorization: "Bearer " + jwt },
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({}),
        type: 'POST',
        success: ((res) => {
            let user_data = res.user_data;
            console.log("User data received:", user_data);
            resolve(user_data);
        }),
        error: ((err) => {
            console.log(err.responseJSON.error);
            reject({ error: err.responseJSON.error });
        })
    });
  });
}