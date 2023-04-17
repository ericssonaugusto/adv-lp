export function Area(){
    return(
        <section className="flex items-center flex-col border-t-2 pt-16">
            <h2 className="font-bold text-4xl text-center my-16 border-b-4 pb-2 border-red-900">Área de Atuação</h2>
            <ul className="grid grid-cols-1 gap-6 m-10 p-10 lg:grid-cols-3">                
                <li>
                    <span>Área de atuação</span>
                    <h3 className="font-bold text-2xl mb-4">Previdenciário</h3>
                    <p>Uma área do direito que estuda a 
                        regulamentação da Seguridade Social. Seu 
                        objetivo é disciplinar a Previdência Social, 
                        definindo regras sobre o recolhimento de 
                        contribuições sociais e normas para 
                        concessão de benefícios previdenciários, 
                        como aposentadoria, auxílio-doença e pensão.</p>                        
                </li>
                <li>
                    <span>Área de atuação</span>
                    <h3 className="font-bold text-2xl mb-4">Direito Penal</h3>
                    <p>A função do direito penal é de proteger os bens 
                        jurídicos estabelecidos como importantes dentro
                         de uma sociedade em seu contexto histórico.</p>                        
                </li>
                <li>
                    <span>Área de atuação</span>
                    <h3 className="font-bold text-2xl mb-4">Direito Cível</h3>
                    <p>Área do Direito Cível, que regula as relações 
                        jurídicas entre as pessoas, sejam elas naturais 
                        ou jurídicas, que comumente encontram-se em uma 
                        situação de equilíbrio de condições, nossos focos 
                        se distribuem pelo Direito Imobiliário, Responsabilidade Civil, 
                        Família e Sucessões, Contratual e Direito do Consumidor.</p>                        
                </li>
            </ul>
        </section>

  )

}