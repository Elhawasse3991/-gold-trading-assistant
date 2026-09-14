const demo={
 price:3300,
 signal:"BUY",
 confidence:78,
 entry:3300,
 stop:3285,
 tp1:3330,
 tp2:3360,
 rsi:61.4,ema20:3292.2,ema50:3278.4,ema200:3210.7,macd:4.82,atr:10.0,
 reasons:["Price is above EMA20, EMA50 and EMA200.","RSI shows positive momentum without being overbought.","MACD is positive.","Higher-timeframe trend is aligned."]
};
const tfs=[["5m","BUY"],["15m","BUY"],["1h","BUY"],["4h","BUY"],["1D","BUY"]];

function money(n){return n==null?"—":"$"+Number(n).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});}
function render(d=demo){
 signal.textContent=d.signal;signal.className="signal "+d.signal.toLowerCase();
 price.textContent=money(d.price);status.textContent="Demo market data";
 entry.textContent=money(d.entry);stop.textContent=money(d.stop);tp1.textContent=money(d.tp1);tp2.textContent=money(d.tp2);
 rsi.textContent=d.rsi;ema20.textContent=d.ema20;ema50.textContent=d.ema50;ema200.textContent=d.ema200;macd.textContent=d.macd;atr.textContent=d.atr;
 reasons.innerHTML=d.reasons.map(x=>`<li>${x}</li>`).join("");
 timeframes.innerHTML=tfs.map(x=>`<div class="tf"><b>${x[0]}</b><span class="${x[1].toLowerCase()}">${x[1]}</span></div>`).join("");
 calcRisk();
}
function calcRisk(){
 const a=Number(account.value)||0,r=Number(risk.value)||0;
 riskMoney.textContent=money(a*r/100);
}
function analyze(){render(demo);}
account.oninput=calcRisk;risk.oninput=calcRisk;
render();
if("serviceWorker" in navigator){navigator.serviceWorker.register("sw.js").catch(()=>{});}