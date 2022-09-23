const form = document.querySelector('#driverDataForm')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let query_year = document.querySelector('#year').value;
    let query_round = document.querySelector('#round').value;
    console.log(event)
    console.log(`This came from the query selector: ${query_year}, ${query_round} `)
    load_data(query_year, query_round)
})

const getData = async (query_year, query_round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${query_year}/${query_round}/driverStandings.json`)
    console.log(response.data)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

const DOM_Elements = {
    driver_list: '.driver-list'
}

    
    const create_list = (position, givenName, familyName, points, nationality, name) => {
     const html = `
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" id="${position}">
      <table class="table">
        <thead>
            <tr>
                <th class="header" scope="col">Position</th>
                <th class="header"scope="col">Name</th>
                <th class="header" scope="col">Nationality</th>
                <th class="header" scope="col">Sponsor</th>
                <th class="header" scope="col">Points</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">${position}</th>
                <td>${givenName} ${familyName}</td>
                <td>${nationality}</td>
                <td>${name}</td>
                <td>${points}</td>
             </tr>
        </tbody>
    </table>
    </a>`;
    document
      .querySelector(DOM_Elements.driver_list)
      .insertAdjacentHTML("beforeend", html);
  };
  
  const load_data = async (query_year, query_round) => {
    const driver = await getData(query_year, query_round);    
    driver.forEach((element) =>
      create_list(
        element.position,
        element.Driver.givenName,
        element.Driver.familyName,
        element.points,
        element.Driver.nationality,
        element.Constructors[0].name
      )
    );
  };


const clear_data = () => {
    document.querySelector(DOM_Elements.driver_list).innerHTML = '';
}


