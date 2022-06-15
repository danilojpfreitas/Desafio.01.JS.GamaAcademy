const nomes =
    `<ul>
	<li>Víctor Franco</li>
	<li>Bruno Araújo</li>
	<li>Math Allan</li>
	<li>Danilo Freitas</li>
	<li>Jovane</li>
    <li>Tatyanna Mota</li>
	<li>Andrei</li>
	<li>Giordano Cassini</li>
	<li>Daniel Junior</li>
	<li>Fabiana</li>
	<li>Lucas Cosendey</li>
	<li>Giovana</li>
	<li>Eduardo Fonseca</li>
	<li>Victor Nery</li>
	<li>Cristiano Melo</li>
	<li>Fabrício</li>
	<li>Eduardo Almeida de Jesus</li>
	<li>Reygis meira</li>
	<li>Carla Nomura</li>
 	<li>Larissa</li>
	<li>Pedro Arruda</li>
	<li>Marcus Döttlinger</li>
	<li>Celso Firmino</li>
	<li>Rayellison Costa </li>
	<li>João Paulo</li>
	<li>Fernando TF</li>
    <li>João Marcelo Dantas</li>
	<li>Silvan Miller</li>
	<li>France Lima</li>
	<li>Dilermando jefferson</li>
	<li>Amanda Hammes</li>
    </ul>`

const retirarTags = nomes.replace(/(<([^>]+)>)/ig, "'");
const quebraLinhas = retirarTags.replace(/(\r\n|\n|\r)/gm, "").replace("'","").trim();
const espacosPalavras = quebraLinhas.replace(/\s* \s*/gm, "-").replace(/\s/g, '').replace(/[']/gm, ".").replace(" ", "").replace(/[-]/gm, " ").replace(/[..]/gm, "-")
const conversao = espacosPalavras.split(/[--]/gm)
function removendovazio(value) {
    return value != '' 
}
function removendo2vazio(value) {
    return value != ' ' 
}
var array = conversao.filter(removendovazio).filter(removendo2vazio).sort()

array.map(function (item) {
    console.log(item)
})





