const isPrime = (n) => {
  let flag = 1;
  //flag = 0: khong phai so nguyen to;
  //flag = 1: la so nguyen to;

  if (n < 2) return (flag = 0);
  for (let j = 2; j < n; j++) {
    if (n % j === 0) {
      flag = 0;
      break;
    }
  }
  return flag;
};
const result = document.getElementById("result");

document.getElementById("btnClick").onclick = () => {
  let soNguyenToList = [];
  result.innerHTML = "";
  let number = +document.getElementById("number").value;
  for (let i = 1; i <= number; i++) {
    soNguyenToList.push(i);
  }
  if (number < 2) {
    result.innerHTML = `khong co so nguyen to nao `;
  } else {
    for (let j = 0; j < soNguyenToList.length; j++) {
      if (isPrime(soNguyenToList[j]) == 1)
        result.innerHTML = `${result.innerHTML} ${soNguyenToList[j]}`;
    }
  }
};
