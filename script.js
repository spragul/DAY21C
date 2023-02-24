let parend = document.querySelector('.containor');
async function bitcoinapi() {
    try {
        let data = fetch("https://api.coinlore.net/api/tickers/?start=100&limit=100");
        let response = await data;
        let prom = response.json();
        let output = await prom;
        for (let i of output.data) {
            let card = document.createElement('div');
            card.classList.add('data');
            card.innerHTML = `
           <div class="main-data">
            <p>Name: <span>${i.name}</span></p>
            <p>ID: <span>${i.id}</span></p>
            <p>Symbol: <span>${i.symbol}</span></p>
            <p>Rank: <span>${i.rank}</span></p>
            <p>Price Bitcoin: <span>${i.price_btc}</span></p>
            <button class="btn" onclick="clicking(this)" value='${i.symbol}'>click Bitcoin value</button>
           </div>
           <div class="popup" id='${i.symbol}' style="display:none">
           <p>Name Id: <span>${i.nameid}</span></p>
           <p>current supply: <span>${i.csupply}</span></p>
           <p>Market Cap in Dollars: <span>${i.market_cap_usd}</span></p>
           <p>Percent Change 1hr:<span>${i.percent_change_1h}</span></p>
           <p>Percent Change 7hr: <span>${i.percent_change_7d}</span></p>
           <p>Percent Change 24hr: <span>${i.percent_change_24h}</span></p>           
           <p>Price in Dollars <span>${i.price_usd}</span></p>
           <p>Bitcoin 24 Hour Volume<span>${i.volume24}</span></p>
           <button type="button" class="popbutton" onclick="closepopup(this)">ok</button>
           </div>
           `
            parend.append(card);
        }
    }
    catch (error) {
        alert(error)
    }
}
bitcoinapi()
let count = 0;
let remove_popup;
function clicking(e) {
    if (count > 0) {
        let remove_element = document.getElementById(remove_popup);
        remove_element.style.display = "none";
    }
    let popup = document.getElementById(e.value);
    popup.style.display = "block";
    remove_popup = e.value;
    count++;

}
function closepopup(e) {
    let remove_element = document.getElementById(remove_popup);
    remove_element.style.display = "none";
}