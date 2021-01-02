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
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="feriados/01-01-anonovo.html"><b>${anonovo}</b></a>, <a href="comemorativas/m01/01-01-confraternizacaouniversal.html"><b>Confraternização Universal</b></a> e <a href="comemorativas/m01/01-01-diamundialdapaz.html"><b>Dia Mundial da Paz</b></a>`
      break
    case '2/01': //Dia do Sanitarista
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m01/02-01-diadosanitarista.html"><b>Dia do Sanitarista</b></a>`
      break
    case '4/01': //Dia da Abreugrafia / Dia do Hemofílico 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m01/04-01-diadaabreugrafia.html"><b>Dia da Abreugrafia</b></a> e <a href="comemorativas/m01/04-01-diadohemofilico.html"><b>Dia do Hemofílico</b></a>`
      break
    case '5/01': //Dia Nacional da Tipografia 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m01/05-01-dianacionaldatipografia.html"><b>Dia Nacional da Tipografia</b></a>`
      break
    case '6/01': //Dia de Reis / Dia da Gratidão / Dia do Mensageiro 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m01/06-01-diadereis.html"><b>Dia de Reis</b></a>, <a href="comemorativas/m01/06-01-diadagratidao.html"><b>Dia da Gratidão</b></a> e <a href="comemorativas/m01/06-01-diadomensageiro.html"><b>Dia do Mensageiro</b></a>`
      break
    case '7/01': //Dia do Leitor / Dia da Liberdade de Culto 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m01/07-01-diadoleitor.html"><b>Dia do Leitor</b></a> e <a href="comemorativas/m01/07-01-diadaliberdadedeculto.html"><b>Dia da Liberdade de Culto</b></a>`
      break
    case '8/01': //Dia da Fotografia / Dia do Fotógrafo 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m01/08-01-diadafotografia.html"><b>Dia da Fotografia</b></a> e <a href="comemorativas/m01/08-01-diadofotografo.html"><b>Dia do Fotógrafo</b></a>`
      break
    case '9/01': //Dia do Fico (em 1822) / Dia do Astronauta 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m01/09-01-diadofico.html"><b>Dia do Fico (em 1822)</b></a> e <a href="comemorativas/m01/09-01-diadoastronauta.html"><b>Dia do Astronauta</b></a>`
      break
    case '10/01': //Dia de São Gonçalo / Dia de Peculiar People Day 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m01/10-01-diadesaogoncalo.html"><b>Dia de São Gonçalo</b></a> e <a href="comemorativas/m01/10-01-peculiarpeopleday.html"><b>Dia de Peculiar People Day</b></a>`
      break
    case '11/01': //Dia de São Teodósio 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m01/11-01-saoteodosio.html"><b>Dia de São Teodósio</b></a>`
      break
    case '19/01': //Dia Oficial do Cabeleireiro 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m01/19-01-diaoficialdocabeleireiro.html"><b>Dia Oficial do Cabeleireiro</b></a>`
      break
    case '20/01': //Dia do Farmacêutico 
      infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m01/20-01-diadofarmaceutico.html"><b>Dia do Farmacêutico</b></a>`
      break
  // Fim datas de Janeiro

  // Adicionar datas de Fevereiro
    case '1/02': //(Comemoração) Dia do Publicitário
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m02/01-02-diadopublicitario.html"><b>Dia do Publicitário</b></a>`
        break
    case '2/02': //(Comemoração) Apresentação de Cristo / Nossa Senhora dos Navegantes
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m02/02-02-apresentacaodejesus.html"><b>Apresentação de Cristo</b></a> e <a href="comemorativas/m02/02-02-nossasenhoradosnavegantes.html"><b>Dia de Nossa Sr. dos Navegantes</b></a>`
        break
    case '16/02': //Carnaval
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m02/16-02-carnaval.html"><b>Carnaval</b></a>`
        break
    case '24/02': //(Comemoração) Promulgação da primeira Constituição da República do Brasil (1891)
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m02/24-02-constituicaobrasileira1891.html"><b>Promulgação da Constituição</b></a>`
        break
  // Fim datas de Fevereiro

  // Adicionar datas de Março
    case '8/03': // (Comemoração) Dia Internacional da Mulher
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m03/08-03-diainternacionaldamulher.html"><b>Dia Internacional da Mulher</b></a>`
        break
    case '12/03': // (Comemoração) Dia do Bibliotecário
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m03/12-03-diadobibliotecario.html"><b>Dia do Bibliotecário</b></a>`
        break
    case '14/03': // (Comemoração) Dia dos Carecas
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m03/14-03-diadoscarecas.html"><b>Dia dos Carecas</b></a>`
        break
    case '15/03': // (Comemoração) Dia do Consumidor
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m03/15-03-diadoconsumidor.html"><b>Dia do Consumidor</b></a>`
        break
    case '17/03': // (Comemoração) Dia de São Patrício
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m03/17-03-diadesaopatricio.html"><b>Dia de São Patrício</b></a>`
        break
    case '27/03': // (Comemoração) Dia Mundial do Teatro
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m03/27-03-diamundialdoteatro.html"><b>Dia Mundial do Teatro</b></a>`
        break
  // Fim datas de Março

  // Adicionar datas de Abril
    case '1/04': // (Comemoração) Dia da Mentira / Dia da Abolição da Escravidão dos Índios - 1680
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m04/01-04-diadamentira.html"><b>Dia da Mentira</b></a> e <a href="comemorativas/m04/01-04-abolicaoescravidaodosindios.html"><b>Abolição da Escravidão dos Índios</b></a>`
        break
    case '2/04': // (feriado) Sexta-feira Santa / (Comemoração) Dia Mundial de Conscientização do Autismo / Dia do Propagandista / Dia Internacional do Livro Infantil 
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="feriados/02-04-PaixaodeCristo.html"><b>Sexta-feira Santa (Paixão de Cristo)</b></a>, <a href="comemorativas/m04/02-04-conscientizacaodoautismo.html"><b>Dia Mundial de Conscientização do Autismo</b></a>, <a href="comemorativas/m04/02-04-diadopropagandista.html"><b>Dia do Propagandista</b></a> e <a href="comemorativas/m04/02-04-diainternacionallivroinfantil.html"><b>Dia Internacional do Livro Infantil</b></a>`
        break
    case '4/04': // (feriado) Páscoa (Comemoração) Dia Nacional do Parkinsoniano
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="feriados/04-04-pascoa.html"><b>Domingo de Páscoa</b></a> e <a href="comemorativas/m04/04-04-parkisoniano.html"><b>Dia Nacional do Parkinsoniano</b></a>`
        break
    case '7/04': // (Comemoração) Dia do Corretor / Dia do Jornalista / Dia Mundial da Saúde / Dia do Médico Legista 
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m04/07-04-diadocorretor.html"><b>Dia do Corretor</b></a>, <a href="comemorativas/m04/07-04-diadojornalista.html"><b>Dia do Jornalista</b></a>, <a href="comemorativas/m04/07-04-diamundialdasaude.html"><b>Dia Mundial da Saúde</b></a> e <a href="comemorativas/m04/07-04-diadomedicolegista.html"><b>Dia do Médico Legista</b></a>`
        break
    case '8/04': // (Comemoração) Dia Mundial de Combate ao Câncer / Dia Mundial da Astronomia / Dia Nacional do Sistema Braile
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m04/08-04-diamundialdecombateaocancer.html"><b>Dia Mundial de Combate ao Câncer</b></a>, <a href="comemorativas/m04/08-04-diamundialdaastronomia.html"><b>Dia Mundial da Astronomia</b></a> e <a href="comemorativas/m04/08-04-dianacionaldosistemabraile.html"><b>Dia Nacional do Sistema Braile</b></a>`
        break
    case '15/04': // (Comemoração) Dia do Desarmamento Infantil / Dia Internacional do Ciclista
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m04/15-04-desarmamentoinfantil.html"><b>Dia do Desarmamento Infantil</b></a> e <a href="comemorativas/m04/15-04-diainternacionaldociclista.html"><b>Dia Internacional do Ciclista</b></a>`
        break
    case '18/04': // (Comemoração) Dia Nacional do Livro Infantil
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m04/18-04-nacionaldolivroinfantil.html"><b>Dia Nacional do Livro Infantil</b></a>`
        break
    case '19/04': // (Comemoração) Dia do Índio
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m04/19-04-diadoindio.html"><b>Dia do Índio</b></a>`
        break
    case '21/04': // (feriado) Tiradentes (Comemoração) Inauguração de Brasília (1960) 
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="feriados/21-04-tiradentes.html"><b>Dia de Tiradentes</b></a> e <a href="comemorativas/m04/21-04-inauguracaodebrasilia.html"><b>Inauguração de Brasília (1960)</b></a>`
        break
    case '22/04': // (Comemoração) Dia do Descobrimento do Brasil (1500)
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m04/22-04-descobrimentodobrasil.html"><b>Dia do Descobrimento do Brasil</b></a>`
        break
    case '23/04': // (Comemoração) Dia de São Jorge / Dia Mundial do Livro
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m04/23-04-diadesaojorge.html"><b>Dia de São Jorge</b></a> e <a href="comemorativas/m04/23-04-diamundialdolivro.html"><b>Dia Mundial do Livro</b></a>`
        break
    case '24/04': // (Comemoração) Dia de Libras (Língua Brasileira de Sinais)
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m04/24-04-dianacionaldelibras.html"><b>Dia de Libras (Língua Brasileira de Sinais)</b></a>`
        break
    case '28/04': // (Comemoração) Dia da Educação / Dia da Sogra 
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m04/28-04-diadaeducacao.html"><b>Dia da Educação</b></a> e <a href="comemorativas/m04/28-04-diadasogra.html"><b>Dia da Sogra</b></a>`
        break
    case '29/04': // (Comemoração) Dia Internacional da Dança 
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m04/29-04-diainternacionaldadanca.html"><b>Dia Internacional da Dança</b></a>`
        break
    case '30/04': // (Comemoração) Dia Nacional da Mulher 
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href="comemorativas/m04/30-04-dianacionaldamulher.html"><b>Dia Nacional da Mulher</b></a>`
        break
  // Fim datas de Abril

  // Adicionar datas de Maio
    case '1/05': //Dia do Trabalho
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é Dia do Trabalho`
        btn_feriado.setAttribute("href","../01-05-diadotrabalho.html")
        btn_feriado.style.display = 'block'
        btn_feriado.style.margin = '1px auto'
        break
        /*
    case '/05': // 
        infododiap.innerHTML = `Olá <b>${pegardatadodispositivo.getDate()} de ${nomedomes[pegardatadodispositivo.getMonth()]}</b> é <a href=""><b>TTT</b></a>`
        break
        */
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


