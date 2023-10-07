

// Submits chatgpt prompt.
// Expected result is current page is updated.
// Next up: ideally will reload the page in 20 seconds or so.
//
const submitPrompt = async function() {
  let jwt = $("#token").attr("data-token");
  let user_prompt = $("textInput").val();
  let server_url = "http://localhost:5000";
  return new Promise((resolve, reject) => {
    $.ajax({
        url: server_url + "/create-get-user",
        headers: { Authorization: "Bearer " + jwt },
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({ user_prompt, page_name: "admin.pug" }),
        type: 'POST',
        success: ((res) => {
            let result = res.obj;
            console.log("Prompt submission result:", result);
            resolve(result);
        }),
        error: ((err) => {
            console.log("Error submitting prompt: ", err.responseJSON.error);
            reject({ error: err.responseJSON.error });
        })
    });
  });
}

const createGetUser = async function() {
  let jwt = $("#token").attr("data-token");
  let server_url = "https://expressjs-api-backend.onrender.com";
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