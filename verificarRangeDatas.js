// Verifica se há uma diferença maior do que 30 dias entre duas datas
function verificarRangeDatas(data1, data2){
	return (
		Math.ceil(Math.abs((new Date(data1)) - (new Date(data2))) / (1000 * 60 * 60 * 24)) > 30
	)
}
