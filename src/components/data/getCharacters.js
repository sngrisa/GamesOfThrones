//Obtener personajes de Games of Throne Fichero

let params = {
  url: "https://thronesapi.com/api/v2",
};

//Obtener personajes de Games of Throne
let GetCharacters = async () => {
  let resp = await fetch(`${params.url}/characters`);
  let dataAPI = await resp.json();
  let arrayDataApi = [...dataAPI];
  return arrayDataApi.map((character) => {
    return {
      ...character,
    };
  });
};

//Obtener personajes de Games of Throne por el Id
let GetCharactersById = async (idCharacter) => {
  let resp = await fetch(`${params.url}/characters/${idCharacter}`);
  let character = await resp.json();
  return character;
};

export { GetCharacters, GetCharactersById };
