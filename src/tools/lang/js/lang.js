

const API_KEY = 'ec69e56b-58f0-d83e-397a-7c54fa95c196:fx';
const API_URL = 'https://api-free.deepl.com/v2/translate';

function langChange(id) {
  const entext = document.getElementById(id).value;

  let content = encodeURI('auth_key=' + API_KEY + '&text=' + entext + '&source_lang=EN&target_lang=JA');
  let url = API_URL + '?' + content;

  fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Could not reach the API: " + response.statusText);
        }
    }).then(function(data) {
        document.getElementById("JO_EN_text").value = data["translations"][0]["text"];
    }).catch(function(error) {
        document.getElementById("JO_EN_text").value = error.message;
    });
};