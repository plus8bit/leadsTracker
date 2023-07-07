const myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById('ul-el')

document.getElementById('input-btn').addEventListener('click', () => {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})

