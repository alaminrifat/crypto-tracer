// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
const table = document.getElementById("coin-list-table");
const card = document.getElementById("coin-card");


const loadData = (limit) => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayData(data,limit));
};
const displayData = (datas,limit) => {
    let count = 1;
    datas = datas.slice(0, limit);
    datas.forEach((coin) => {
        const newRow = document.createElement("tr");
        const newCard = document.createElement("div");
        newRow.classList.add('font-semibold');
        newCard.classList.add('p-4','font-semibold','rounded-lg','shadow');

       if(coin.market_cap_change_percentage_24h > 0){
        newRow.innerHTML = `
        <th>${count++}</th> 
        <td>
        <div class="flex items-center space-x-3">
        <div class="avatar">
            <div class="mask mask-squircle w-6 h-6">
                <img src="${coin.image}" alt="Avatar Tailwind CSS Component" />
            </div>
        </div>
        <div>
        ${coin.name}</td> 
        <td>$${coin.current_price}</td> 
        <td class="text-green-400">${(coin.market_cap_change_percentage_24h)}</td> 
        <td>$${coin.market_cap}</td> 
        `
        ;
        newCard.innerHTML = `
        <div>
            <div class="flex items-center space-x-3">
            <div class="avatar">
                <div class="mask mask-squircle w-6 h-6">
                    <img src="${coin.image}" alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
        </div>
        <p>Coin: ${coin.name}<p>
        <p>Price: $${coin.current_price}</p> 
        <p>Changes in 24h: <span class="text-green-400">${(coin.market_cap_change_percentage_24h)}%</span></p> 
        <p>Market Cap: $${coin.market_cap}</p>
        
        `
        
    }
    else{
        newRow.innerHTML = `
        <th>${count++}</th> 
        <td>
        <div class="flex items-center space-x-1">
        <div class="avatar">
            <div class="mask mask-squircle w-6 h-6">
                <img src="${coin.image}" alt="Avatar Tailwind CSS Component" />
            </div>
        </div>
        <div>

        ${coin.name}</td> 
        <td>$${coin.current_price}</td> 
        <td class="text-red-400">${(coin.market_cap_change_percentage_24h)}</td> 
        <td>$${coin.market_cap}</td> 
    `;
        newCard.innerHTML = `
            <div>
            <div class="flex items-center space-x-3">
            <div class="avatar">
                <div class="mask mask-squircle w-6 h-6">
                    <img src="${coin.image}" alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            </div>
            <p>Coin: ${coin.name}<p>
            <p>Price: $${coin.current_price}</p> 
            <p>Changes in 24h: <span class="text-red-400">${(coin.market_cap_change_percentage_24h)}%</span></p> 
            <p>Market Cap: $${coin.market_cap}</p>
    `

       }
        table.appendChild(newRow);
        card.appendChild(newCard);
        console.log(coin.id);
    });
};

loadData(100);
