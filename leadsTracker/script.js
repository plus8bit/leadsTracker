const myLeads = []
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

document.getElementById('input-btn').addEventListener('click', () => {
  myLeads.push(inputEl.value)
  renderLeads()
})

function renderLeads() {
  let listItems = ''
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>${myLeads[i]}</li>`
  }

  ulEl.innerHTML = listItems
}
