* questão 5 a) */

function countDays() {
  const inputDate = document.getElementById("dateInput").value;
  const regex = /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/]\d{4}$/;

  if (!inputDate.match(regex)) {
    alert("Porfavor inseri o formato correto, dd/mm/aaaa.");
    return;
  }

  const [day, month, year] = inputDate.split("/").map(Number);
  const today = new Date();
  const targetDate = new Date(year, month - 1, day);

  if (year < today.getFullYear() || (year === today.getFullYear() && month < today.getMonth() + 1) || (year === today.getFullYear() && month === today.getMonth() + 1 && day < today.getDate())) {
    targetDate.setFullYear(targetDate.getFullYear() + 1);
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.ceil((targetDate - today) / oneDay);
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  const days = diffDays % 30;

  document.getElementById("result").innerHTML = `
    <p>Anos: ${years}</p>
    <p>Meses: ${months}</p>
    <p>Dias: ${days}</p>
    `;
}


const timeDisplay = document.getElementById("time");
const bgColorDisplay = document.getElementById("bgColor");