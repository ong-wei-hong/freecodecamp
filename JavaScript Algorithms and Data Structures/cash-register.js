let money = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let ans= {status: null, change: []};
  let sum = 0;
  let registry = cid.map(e => {
    sum += e[1];
    return e[1];
  });

  if(sum == change){
    ans.status="CLOSED";
    ans.change=cid;
    return ans;
  }
  if(sum < change){
    ans.status="INSUFFICIENT_FUNDS";
    return ans;
  }

  for(let i=8; i>=0; --i){
    let count = 0;
    while(change >= money[i] && registry[i]){ //money[i] can reduce change
      change -= money[i];
      registry[i] -= money[i];
      count += money[i];
      change = change.toFixed(2);
    }
    if(count){
      ans.change.push([cid[i][0], count]);
    }
  }
  if(change > 0){
    ans.status = "INSUFFICIENT_FUNDS";
    ans.change = [];
    return ans;
  }
  ans.status="OPEN";
  return ans;
}