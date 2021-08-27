class NegociacoesView {
  constructor(seletor) {
    this._elemento = document.querySelector(seletor);
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);
  }

  template(model) {
    return `
			<table class="table table-hover table-bordered">
				<thead>
						<tr>
								<th>DATA</th>
								<th>QUANTIDADE</th>
								<th>VALOR</th>
								<th>VOLUME</th>
						</tr>
				</thead>
				
				<tbody>
				</tbody>
				 ${model
           .paraArray()
           .map(
             (negocicao) =>
               `<tr>
					 		<td>${DateConverter.paraTexto(negocicao.data)}</td>
					 		<td>${negocicao.quantidade}</td>
					 		<td>${negocicao.valor}</td>
					 		<td>${negocicao.volume}</td>
					 	</tr>
					 `
           )
           .join("")}
				<tfoot>
          <tr>
           <td colspan="3"></td> 
           <td>${model.volumeTotal}</td> 
          </tr>
				</tfoot>
			</table>
		`;
  }
}
