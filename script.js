fetch("https://restcountries.eu/rest/v2/all")
  .then((data) => data.json())
  .then((countries) => countries.forEach((country) => createFlag(country)))
  .then((errMsg) => console.log(errMsg));

function createFlag({ name, flag, population, region, capital }) {
  const info = document.createElement("div");
  info.setAttribute("class", "container");

  info.innerHtml = `
  <div class = "flag-container">
  <img class ="Flag" src=${flag} width = "250px height="150px" />
  </div>

  <div class = "details">
      <h3>${name}</h3>
      <P><b>Population:</b>${population}</P>
      <P><b>Region:</b>${region}</P>
      <P><b>Capital:</b>${capital}</P>
      </div>
  </div>`;
  document.body.append(info);
}
