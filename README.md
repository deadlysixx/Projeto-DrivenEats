# 📝DrivenEats (Projeto de conclusão de etapa de módulo)

Seu primeiro projeto usando JavaScript, CSS e HTML será a implementação do site (apenas a versão mobile) do DrivenEats, um restaurante especial que entrega seu pedido em 6 minutos!

Para isso, o restaurante só trabalha com um tipo específico de pedido: o combo de Prato + Bebida + Sobremesa.

O site permite de forma fácil a escolha do seu combo, enviando em seguida o pedido por WhatsApp diretamente para o restaurante.

# 🎨Layout:
O projeto foi proposto pela Driven utilizando Figma para consulta de Layout, cores, posicionamento e etc...

# ✅Requisitos:
O topo e o botão de fechar pedido devem ter posicionamento fixo e não rolar com a barra de rolagem.

Você pode usar imagens e textos aleatórios para ilustrar a página, porém varie o preço em cada item da mesma categoria.

As fontes utilizadas são: Righteous (nome do restaurante e títulos das categorias) e Roboto (demais textos).

Para fazer as sombras presentes em alguns elementos, pesquise sobre como aplicar sombras em CSS e brinque com os valores até ficar parecido com as imagens do layout.

Para fazer os produtos rolarem horizontalmente, utilize overflow-x: scroll. Não precisa se preocupar em fazer a barra de rolagem horizontal desaparecer.

Ao clicar sobre um item, ele deve ser marcado como selecionado.

Ao clicar em um item, caso já exista um item selecionado na mesma categoria, este deve ser desmarcado e o novo item clicado deve ser o novo selecionado.

Ao clicar em um item já marcado, não é necessário desmarcá-lo.

Por padrão, o botão de finalizar pedido deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer.

Quando o usuário tiver selecionado os itens das três categorias, o botão deve mudar para o estado de habilitado.

Confirme os dados antes de finalizar o pedido.

Ao clicar em "Fechar pedido", deverá aparecer uma tela com os dados da compra e a soma do valor total do pedido.

Se for clicado em cancelar, essa tela some e volta para a anterior, onde o usuário poderá trocar os itens do pedido.

Se for clicado no botão de Tudo Certo, o pedido será enviado.

Ao finalizar o pedido, o usuário deverá ser encaminhado para o WhatsApp Web, em conversa com o contato do restaurante, já com uma mensagem padrão preenchida.
Essa mensagem deverá seguir este formato, o padrão abaixo: 

Olá, gostaria de fazer o pedido:
- Prato: Nome do prato
- Bebida: Nome da bebida
- Sobremesa: Nome da Sobremesa
Total: R$ Valor
