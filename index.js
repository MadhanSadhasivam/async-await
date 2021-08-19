//async & await for combining
(async function combine(){
    let data=await Promise.all([fetch('https://restcountries.eu/rest/v2/region/asia'),fetch("https://restcountries.eu/rest/v2/region/europe")])
     let asia=await data[0].json();
     let europe=await data[1].json();
      createFlag([...asia,...europe])
})();
div=document.createElement("div");
div.className='coun';
document.body.append(div)

function createFlag(abc)
{
abc.forEach(detail =>
  {
div.innerHTML +=`
<div class=container>
<img src=${detail.flag}>
  <h3>${detail.name}</h3>
  <p><b>Region</b>:${detail.region}</p>
  <p><b>Capital</b>:${detail.capital}</p>
  <p><b>Population</b>:${detail.population}</p>
  </div>`
   })
}


//async & await for spanish

(async function spanish()
{
    let data= await fetch("https://restcountries.eu/rest/v2/lang/es");
    let spanish=await data.json();
    spanishSpeaking=spanish.filter(country=>country.region=="Europe")
    createFlag(spanishSpeaking)
})();
div=document.createElement("div");
div.className='coun';
document.body.append(div)
  function createFlag(abc)
{
abc.forEach(detail =>
  {
div.innerHTML +=`
<div class=container>
<img src=${detail.flag}>
  <h3>${detail.name}</h3>
  <p><b>Region</b>:${detail.region}</p>
  <p><b>Capital</b>:${detail.capital}</p>
  <p><b>Population</b>:${detail.population}</p>
  </div>`
   })
} 