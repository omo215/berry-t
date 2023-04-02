const API_KEY = "ec69e56b-58f0-d83e-397a-7c54fa95c196:fx";
const API_URL = "https://api-free.deepl.com/v2/translate";

async function langChange(from_id, to_id, from, to) {
  const entext = document.getElementById(from_id).value;

  let content = encodeURI(
    "auth_key=" +
    API_KEY +
    "&text=" +
    entext +
    "&source_lang=" +
    from +
    "&target_lang=" +
    to
  );
  let url = API_URL + "?" + content;
  const res = await fetch(url);
  const val = await res.json();
  document.getElementById(to_id).value = val["translations"][0]["text"];

  return 0
}
//   fetch(url)
//     .then(function (response) {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("Could not reach the API: " + response.statusText);
//       }
//     })
//     .then(function (data) {
//       document.getElementById("JO_EN_text").value =
//         data["translations"][0]["text"];
//     })
//     .catch(function (error) {
//       document.getElementById("JO_EN_text").value = error.message;
//     });
async function fromJA() {
  const je = langChange('JO_JP_text', 'JO_EN_text', 'JA', 'EN')
  
  const jp = langChange('JO_JP_text', 'JO_PT_text', 'JA', 'PT')
  const ji = langChange('JO_JP_text', 'JO_ID_text', 'JA', 'ID')

}

// BG - Bulgarian
// CS - Czech
// DA - Danish
// DE - German
// EL - Greek
// EN - English
// ES - Spanish
// ET - Estonian
// FI - Finnish
// FR - French
// HU - Hungarian
// ID - Indonesian
// IT - Italian
// JA - Japanese
// KO - Korean
// LT - Lithuanian
// LV - Latvian
// NB - Norwegian (Bokmål)
// NL - Dutch
// PL - Polish
// PT - Portuguese (all Portuguese varieties mixed)
// RO - Romanian
// RU - Russian
// SK - Slovak
// SL - Slovenian
// SV - Swedish
// TR - Turkish
// UK - Ukrainian
// ZH - Chinese