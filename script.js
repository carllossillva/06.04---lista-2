let tabela = document.querySelector("#tabela tbody");
let total = document.querySelector("#total");

function adicionarProduto() {
  let produto = document.querySelector("#produto").value; 
  let quantidade = Number(document.querySelector("#quantidade").value);
  let valor = Number(document.querySelector("#valor").value);
  
  
  if (produto === "" || quantidade === 0 || valor === 0) {
    alert("Preencha todos os campos.");
    return;
  }

  let linha = document.createElement("tr");
  let colunaProduto = document.createElement("td");
  let colunaQuantidade = document.createElement("td");
  let colunaValor = document.createElement("td");
  

  colunaProduto.textContent = produto;
  colunaQuantidade.textContent = quantidade;
  colunaValor.textContent = valor;
 

  linha.appendChild(colunaProduto);
  linha.appendChild(colunaQuantidade);
  linha.appendChild(colunaValor);
  tabela.appendChild(linha);
 

}

const hndBtnCleartable = () =>{
  itemImput.value = "";
  amountInput.value = "";
  priceInput.value = "";
  products = [];
  const tabela = tbody.getElementsByTagName("tr");
  for (let i = 0; i < tabela.length; i++) {
      tbody.removeChild(tabela[i]);
  }
  itemImput.focus();
};

hndBtnCleartable.onclick = hndBtnCleartable;
hndBtnAdicionarProduto.onclick = hndBtnAdicionarProduto;
