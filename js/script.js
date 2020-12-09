//texto do footer / adiciona o ano atual e ++ no rodapé da pagina
let textodofooter = '&copy; Datas Brasil 2021 - 2021 Todos os Direitos Reservados.'
let footer = document.getElementById('footer')
footer.innerHTML = `${textodofooter}`

// Fim texto do footer / adiciona o ano atual e ++ no rodapé da pagina

//pegar data do dispositivo e mostrar no ID datainfododia

let pegardatadodispositivo = new Date
let numerodomes = new Array ("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",)
let datainfododia = document.getElementById('datainfododia')
datainfododia.innerHTML = `${pegardatadodispositivo.getDate()}/${numerodomes[pegardatadodispositivo.getMonth() ]}/${pegardatadodispositivo.getFullYear()}`

// Adiciona texto ao <p> da homepage e o link para a pagina completa.
// O dia e mes está sendo pego usando as var de datainfododia

let diaemes = pegardatadodispositivo.getDate() +"/" +numerodomes[pegardatadodispositivo.getMonth()]
let infododiap = document.getElementById('infododiap')
let nomedomes = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",)
let btn_feriado = document.getElementById('btn-feriado')
let btn_comemoracao = document.getElementById('btn-comemoracao')
let btn_estado = document.getElementById('btn-estado')
let btn_resultadoferiado = document.getElementById('btn-resultadoferiado')
let btn_resultadocomemorativa = document.getElementById('btn-resultadocomemorativa')

//Desejar feliz ano novo se for 1 de janeiro
let anonovo  = pegardatadodispositivo.getDate() +"/" +numerodomes[pegardatadodispositivo.getMonth()]
if (anonovo == "2/01" || "1/01" || "31/12" || "30/12") {
  anonovo = `<b>Feliz Ano Novo</b>`
} else {
  anonovo = `<b>Ano Novo</b>`
}
// Fim Desejar feliz ano novo se for 1 de janeiro

// Inicio do infododia
/* btn-feriado e btn-comemorativo se for usar apenas um deles adicionar na css (margin 1px auto, e display block) 
 mas se for usar os dois adicionar na css (margin 1px 36px , display inline-block)*/

/*
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Confraternização Universal (${anonovo})`

      btn_ID.setAttribute("href","https://www.google.com.br/")
        btn_ID.style.display = 'block'
        btn_ID.style.margin = '1px auto'

        btn_ID.style.display = 'inline-block'
        btn_ID.style.margin = '1px 36px'
              break

      case '2/01': //Ano Novo
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é `
      break
*/


switch (diaemes) {
  // Adicionar datas de Janeiro
    case '1/01': //Ano Novo / Confraternização Universal / Dia Mundial da Paz
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="../feriados/01-01-anonovo.html"><b>${anonovo}</b></a>, <a href="../comemorativas/m01/01-01-confraternizacaouniversal.html"><b>Confraternização Universal</b></a> e <a href="../comemorativas/m01/01-01-diamundialdapaz.html"><b>Dia Mundial da Paz</b></a>`
      break
    case '2/01': //Dia do Sanitarista
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="../comemorativas/m01/02-01-diadosanitarista.html"><b>Dia do Sanitarista</b></a>`
      break
    case '4/01': //Dia da Abreugrafia / Dia do Hemofílico 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="../comemorativas/m01/04-01-diadaabreugrafia.html"><b>Dia da Abreugrafia</b></a> e <a href="../comemorativas/m01/04-01-diadohemofilico.html"><b>Dia do Hemofílico</b></a>`
      break
    case '5/01': //Dia Nacional da Tipografia 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="../comemorativas/m01/05-01-dianacionaldatipografia.html"><b>Dia Nacional da Tipografia</b></a>`
      break
    case '6/01': //Dia de Reis / Dia da Gratidão / Dia do Mensageiro 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="../comemorativas/m01/06-01-diadereis.html"><b>Dia de Reis</b></a>, <a href="../comemorativas/m01/06-01-diadagratidao.html"><b>Dia da Gratidão</b></a> e <a href="../comemorativas/m01/06-01-diadomensageiro.html"><b>Dia do Mensageiro</b></a>`
      break
    case '7/01': //Dia do Leitor / Dia da Liberdade de Culto 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="../comemorativas/m01/07-01-diadoleitor.html"><b>Dia do Leitor</b></a> e <a href="../comemorativas/m01/07-01-diadaliberdadedeculto.html"><b>Dia da Liberdade de Culto</b></a>`
      break
    case '8/01': //Dia da Fotografia / Dia do Fotógrafo 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="../comemorativas/m01/08-01-diadafotografia.html"><b>Dia da Fotografia</b></a> e <a href="../comemorativas/m01/08-01-diadofotografo.html"><b>Dia do Fotógrafo</b></a>`
      break
    case '9/01': //Dia do Fico (em 1822) / Dia do Astronauta 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="../comemorativas/m01/09-01-diadofico.html"><b>Dia do Fico (em 1822)</b></a> e <a href="../comemorativas/m01/09-01-diadoastronauta.html"><b>Dia do Astronauta</b></a>`
      break
    case '10/01': //Dia de São Gonçalo / Dia de Peculiar People Day 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="../comemorativas/m01/10-01-diadesaogoncalo.html"><b>Dia de São Gonçalo</b></a> e <a href="../comemorativas/m01/10-01-peculiarpeopleday.html"><b>Dia de Peculiar People Day</b></a>`
      break
    case '11/01': //Dia de São Teodósio 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="../comemorativas/m01/11-01-saoteodosio.html"><b>Dia de São Teodósio</b></a>`
      break
    case '19/01': //Dia Oficial do Cabeleireiro 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="../comemorativas/m01/19-01-diaoficialdocabeleireiro.html"><b>Dia Oficial do Cabeleireiro</b></a>`
      break
    case '20/01': //Dia do Farmacêutico 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="../comemorativas/m01/20-01-diadofarmaceutico.html"><b>Dia do Farmacêutico</b></a>`
      break
  // Fim datas de Janeiro

  // Adicionar datas de Fevereiro
    case '16/02': //Carnaval
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Carnaval (não é um feriado nacional)`
        btn_comemoracao.setAttribute("href","../comemorativas/m02/16-02-carnaval.html")
        btn_comemoracao.style.display = 'block'
        btn_comemoracao.style.margin = '1px auto'
        break
  // Fim datas de Fevereiro

  // Adicionar datas de Março
  // Fim datas de Março

  // Adicionar datas de Abril
    case '2/04': //Sexta-feira Santa
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Sexta-feira Santa (Paixão de Cristo)`
        btn_feriado.setAttribute("href","../feriados/02-04-PaixaodeCristo.html")
        btn_feriado.style.display = 'block'
        btn_feriado.style.margin = '1px auto'
        break
    case '4/04': //Páscoa
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Domingo de Páscoa`
        btn_feriado.setAttribute("href","../feriados/04-04-pascoa.html")
        btn_feriado.style.display = 'block'
        btn_feriado.style.margin = '1px auto'
        break
    case '21/04': //Tiradentes
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Dia de Tiradentes`
        btn_feriado.setAttribute("href","../feriados/21-04-tiradentes.html")
        btn_feriado.style.display = 'block'
        btn_feriado.style.margin = '1px auto'
        break
  // Fim datas de Abril

  // Adicionar datas de Maio
    case '1/05': //Dia do Trabalho
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Dia do Trabalho`
        btn_feriado.setAttribute("href","../01-05-diadotrabalho.html")
        btn_feriado.style.display = 'block'
        btn_feriado.style.margin = '1px auto'
        break
  // Fim datas de Maio

  // Adicionar datas de Junho
    case '3/06': //Corpus Christi
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Corpus Christi`
        btn_feriado.setAttribute("href","../feriados/03-06-corpuschristi.html")
        btn_feriado.style.display = 'block'
        btn_feriado.style.margin = '1px auto'
        break
  // Fim datas de Junho

  // Adicionar datas de Julho
  // Fim datas de Julho

  // Adicionar datas de Agosto
  // Fim datas de Agosto

  // Adicionar datas de Setembro
    case '7/09': //Independência do Brasil
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Independência do Brasil`
        btn_feriado.setAttribute("href","../07-09-independenciadobrasil.html")
        btn_feriado.style.display = 'block'
        btn_feriado.style.margin = '1px auto'
        break
  // Fim datas de Setembro

  // Adicionar datas de Outubro
    case '12/10': //Dia de Nossa Senhora Aparecida
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Dia de Nossa Senhora Aparecida (Padroeira do Brasil)`
        btn_feriado.setAttribute("href","../feriados/12-10-diadenossasenhora.html")
        btn_feriado.style.display = 'block'
        btn_feriado.style.margin = '1px auto'
        break
  // Fim datas de Outubro

  // Adicionar datas de Novembro
    case '2/11': //Finados
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Finados`
        btn_feriado.setAttribute("href","../feriados/02-11-finados.html")
        btn_feriado.style.display = 'block'
        btn_feriado.style.margin = '1px auto'
        break
    case '15/11': //Proclamação da República
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Proclamação da República`
        btn_feriado.setAttribute("href","../feriados/15-11-proclamacaodarepublica.html")
        btn_feriado.style.display = 'block'
        btn_feriado.style.margin = '1px auto'
        break
  // Fim datas de Novembro

  // Adicionar datas de Dezembro
    case '25/12': //Natal
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Natal`
        btn_feriado.setAttribute("href","../feriados/25-12-natal.html")
        btn_feriado.style.display = 'block'
        btn_feriado.style.margin = '1px auto'
        break
    case '31/12': //Révellion
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Révellion`
        btn_comemoracao.setAttribute("href","../comemorativas/m12/31-12-Reveillon.html")
        btn_comemoracao.style.display = 'block'
        btn_comemoracao.style.margin = '1px auto'
        break
  // Fim datas de Dezembro
    default:
        infododiap.innerHTML = `Olá de acordo com seu dispositivo hoje é <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> e não é um feriado nem data comemorativa nacional ou ainda não foi adicionado ao site.`
}


