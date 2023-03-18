const url = `https://api.coingecko.com/api/v3/search/trending`;
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    if (data.coins) {
      loadData(data.coins);
    }
  });

const table = document.getElementById('list-table');

function loadData(coins) {
  toggleLoading(true);
  coins.forEach((coin) => {
    const newRow = document.createElement('tr')
    const data = coin.item;
    const price = data.price_btc.toFixed(9);
    newRow.innerHTML += `
        <td>
            <div class="flex items-center space-x-3">
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src="${data.small}" alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            <div>
            <div class="font-bold">${data.name}</div>
            <div class="text-sm opacity-50">United States</div>
        </td>
        <td>
            ${price}
        </td>
        <td>${(data.market_cap_rank) ? data.market_cap_rank : 'Not Found'}</td>
        <th>
            <button class="btn btn-ghost btn-xs" onclick="window.open('https://www.coingecko.com/en/coins/${data.id}', '_blank');";>details</button>
        </th>
    `
    table.appendChild(newRow);
    console.log(data);
    toggleLoading(false);
  });
  
}
