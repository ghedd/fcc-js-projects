const REGISTER_STATUS = {
  closed: "CLOSED",
  open: "OPEN",
  insufficientFunds: "INSUFFICIENT_FUNDS",
};

const checkCashRegister = (price, cash, cid) => {
  // cashRegister is what needs returning
  let cashRegister = {
    status: "",
    change: cid,
  };
  const changeForReturn = (cash - price).toFixed(2);
  console.log(changeForReturn);
  // get to know total fund beforehand
  const totalFund = getTotalFund(cid);
  // observe cash register status
  cashRegister.status = getRegisterStatus(changeForReturn, totalFund);
  console.log(cashRegister.status);
  //result: end if fund isn't sufficient
  if (cashRegister.status === REGISTER_STATUS.insufficientFunds) {
    cashRegister.change = [];
    return cashRegister;
  } else if (Number(changeForReturn) === 0) {
    cashRegister.status = REGISTER_STATUS.closed;
  }
  // get register change
  cashRegister.change = getChangeInCurrency(changeForReturn, cid);

  console.log(cashRegister);

  if (changeForReturn > getTotalFund(cashRegister.change)) {
    console.log(cashRegister.change);
    cashRegister.status = REGISTER_STATUS.insufficientFunds;
    cashRegister.change = [];
  } else if (cashRegister.status === REGISTER_STATUS.closed) {
    cashRegister.change = [...cid];
  }

  return cashRegister;
};

const getChangeInCurrency = (changeInNeed, changeInDrawer) => {
  let change = [];
  const currencyIndex = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  for (let i = changeInDrawer.length - 1; i >= 0; i--) {
    const billName = changeInDrawer[i][0];
    const totalValueEachBill = changeInDrawer[i][1];
    const billCurrencyValue = currencyIndex[billName];
    let billCount = (totalValueEachBill / billCurrencyValue).toFixed(2);
    let billsForReturn = 0;

    while (changeInNeed >= billCurrencyValue && billCount > 0) {
      changeInNeed -= billCurrencyValue;
      changeInNeed = changeInNeed.toFixed(2);
      billCount--;
      billsForReturn++;
    }
    if (billsForReturn > 0) {
      change.push([billName, billCurrencyValue * billsForReturn]);
    }
  }

  return change;
};

const getRegisterStatus = (changeForReturn, currentChanges) => {
  if (Number(changeForReturn) > Number(currentChanges)) {
    return REGISTER_STATUS.insufficientFunds;
  } else if (Number(changeForReturn) < Number(currentChanges)) {
    return REGISTER_STATUS.open;
  }
  return REGISTER_STATUS.closed;
};
const getTotalFund = (cashInDrawer) => {
  let total = 0;
  cashInDrawer.forEach((cash) => {
    total += cash[1];
  });
  return total.toFixed(2);
};

let check = checkCashRegister(20, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);


