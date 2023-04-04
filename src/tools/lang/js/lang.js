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
console.log(val)
  return 0
}

async function fromJA() {
  const je = await langChange('JO_JP_text', 'JO_EN_text', 'JA', 'EN')
  if(je){langChange('JO_EN_text', 'JO_EN_JP_text', 'EN', 'JA')}
  const jp = await langChange('JO_JP_text', 'JO_PT_text', 'JA', 'PT')
  if(jp){langChange('JO_PT_text', 'JO_PT_JP_text', 'PT', 'JA')}
  const ji = await langChange('JO_JP_text', 'JO_ID_text', 'JA', 'ID')
  if(ji){langChange('JO_ID_text', 'JO_ID_JP_text', 'ID', 'JA')}
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