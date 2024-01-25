const imoveis = []
let opcao = ""

do {
  opcao = prompt(
    "Bem-vindo(a) ao Cadrasto de imóveis! \n"+
    "Total de Imóveis: " + imoveis.length+
    "\n\nEscolha uma opção:\n 1. Novo imóvel\n2. Listar imoveis\n 3. Sair "
  )
  switch(opcao){
    case "1":
      const imovel = {}
      imovel.proprietario = prompt("Informe o nome do proprietario do imovel: ")
      imovel.quartos = parseFloat(prompt("Quantos quartos possui o imovel:"))
      imovel.banheiros = prompt("Quantos banheiro possuim o imovel:?")
      imovel.garagem = prompt("O imovel possuim banheiro?(Sim/Não?)")

      const confrimacao = confirm(
        "Salvar este imovel?\n"+
        "\n Proprietario:" + imovel.proprietario+
        "\n Quartos:" + imovel.quartos+ 
        "\n Banheiros:" + imovel.banheiros +
        "\n Garagem:" + imovel.garagem
      )
      if(confrimacao){
        imoveis.push(imovel)
        alert("Imovel salvo com sucesso ")
        break
      }else{
        alert("Voltando ao menu...")
      }
    case "2":
      for( let i =0; i <imoveis.length; i++ )
      alert(
          "imovel " + ( i + 1) + imoveis[i].proprietario +
          "\n Quartos: " + imoveis[i].quartos +
          "\n Banheiro: "+ imoveis[i].banheiros+
          "\n possui garagem?" + imoveis[i].garagem
        )
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção não encontrada!")
  }
} while (opcao !==" 3")
