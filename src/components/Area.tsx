export function Area(){
    return(
        <section id="area" className="flex items-center flex-col py-8">
            <ul className="grid w-4/6 py-12 grid-cols-1 gap-6 lg:grid-cols-3">
                <li>
                    <span>Área de atuação</span>
                    <h3 className="font-bold text-2xl mb-4">Direito Cível</h3>
                    <p>Trata as relações entre pessoas e empresas em questões 
                        como contratos, propriedade, herança e responsabilidade civil.</p>                        
                </li>                
                <li>
                    <span>Área de atuação</span>
                    <h3 className="font-bold text-2xl mb-4">Previdenciário</h3>
                    <p>Trata diretamente sobre a previdência, o que 
                        significa a aposentadoria e todas as suas particularidades.</p>                        
                </li>
                <li>
                    <span>Área de atuação</span>
                    <h3 className="font-bold text-2xl mb-4">Trabalhista</h3>
                    <p>Trata as relações entre empregadores e empregados, incluindo 
                        questões de contratação, remuneração, jornada de trabalho e direitos trabalhistas.</p>                        
                </li>
            </ul>
        </section>

  )

}