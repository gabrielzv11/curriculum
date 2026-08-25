import me from '@/assets/images/me.jpg';
import { Page } from '@/components/page';
import { Section } from '@/components/section';
import { At, GithubSolid, LinkedinSolid, LinkSolid, MapPinSolid, TelephoneSolid } from '@mynaui/icons-react';
import { Contact } from './components/contact';
import { Subsection } from './components/section/subsection';
import { Skill } from './components/skill';
import { Text } from './components/text';

function App() {
	return (
		<>
			<Page>
				<header className='flex justify-between gap-4'>
					<div>
						<Text typography='h1'>Gabriel Azevedo</Text>
						<Text typography='subtitle-1' className='text-primary font-semibold'>
							Desenvolvedor Front-end
						</Text>

						<div className='flex flex-wrap gap-2'>
							<Contact icon={<TelephoneSolid />}>
								<span>(82) 99143-7150</span>
							</Contact>
							<Contact icon={<At />} url='mailto:gabriel.azevedo_dev@hotmail.com'>
								<span>gabriel.azevedo_dev@hotmail.com</span>
							</Contact>
							<Contact icon={<LinkSolid />} url='https://gabrielzv.com'>
								<span>gabrielzv.com</span>
							</Contact>
							<Contact icon={<LinkedinSolid />} url='https://linkedin.com/in/gabriel-azevedo-'>
								<span>linkedin.com/in/gabriel-azevedo-</span>
							</Contact>
							<Contact icon={<MapPinSolid />}>
								<span>Maceió - AL</span>
							</Contact>
							<Contact icon={<GithubSolid />} url='https://github.com/gabrielzv11'>
								<span>github.com/gabrielzv11</span>
							</Contact>
						</div>
					</div>

					<img src={me} alt='Avatar' className='aspect-square h-32 w-32 rounded-full object-cover' />
				</header>

				<div className='grid grid-cols-2 gap-6'>
					<div className='space-y-2'>
						<Section title='RESUMO'>
							<p>
								Desenvolvedor Front-end com 5+ anos construindo aplicações web de alta performance — do setor público (Prefeitura de Maceió)
								a produtos SaaS com milhões de usuários. Especializado em React, Next.js, TypeScript e Node.js/FastAPI, atuo do protótipo ao
								deploy com foco em performance, acessibilidade e experiência do usuário.
							</p>
						</Section>

						<Section title='EXPERIÊNCIA'>
							<Subsection title='Desenvolvedor Front-end' subtitle='Qbem' rangeDate='2025 - Presente' url='somosqbem.com'>
								<ol className='list-disc'>
									<li>
										Arquitetei e lancei produtos utilizando estratégias com micro-frontends (React), servindo 90 corretoras e impactando
										indiretamente mais de 4,5 milhões de beneficiários;
									</li>
									<li>
										Desenvolvi Backoffice completo (gerenciamento de usuários, contratos e relatórios), BI Comercial e painel de gestão de
										RPAs;
									</li>
									<li>
										Desenvolvi e publiquei biblioteca de componentes UI interna (React), eliminando inconsistências visuais entre módulos e
										acelerando entregas da equipe;
									</li>
									<li>
										Reduzi o consumo de API e banco de dados implementando cache inteligente com TanStack Query (com TTL) e virtualização de
										tabelas, melhorando os Core Web Vitals e reduzindo o tamanho do bundle por meio de gerenciamento manual de chunks.
									</li>
								</ol>
							</Subsection>

							<Subsection title='Desenvolvedor Full-stack' subtitle='SASGP' rangeDate='2023 - 2024' url='sasgp.com.br'>
								<ol className='list-disc'>
									<li>
										Realizei manutenção e evolução de sistema legado crítico (Genexus + WorkWith), garantindo estabilidade e zero regressões
										durante transição tecnológica da empresa;
									</li>
									<li>
										Desenvolvi painéis de Business Intelligence integrados a diversas fontes de dados PostgreSQL, consolidando relatórios
										anteriormente extraídos manualmente.
									</li>
								</ol>
							</Subsection>

							<Subsection title='Desenvolvedor Full-stack' subtitle='DMTT, Prefeitura de Maceió' rangeDate='2022 - 2023'>
								<ol className='list-disc'>
									<li>
										Projetei e desenvolvi sistema web de controle de acidentes de trânsito (React + TypeScript) do zero à produção em 18
										semanas, no prazo, digitalizando fluxo anteriormente manual e alcançando ~1.500 acessos/mês;
									</li>
									<li>
										Atuei no ciclo completo de desenvolvimento (requisitos → arquitetura → entrega) de 2 sistemas internos para a secretaria
										municipal, substituindo processos manuais por fluxos digitais.
									</li>
								</ol>
							</Subsection>
						</Section>
					</div>

					<div className='space-y-2'>
						<Section title='EDUCAÇÃO'>
							<Subsection
								title='Desenvolvimento de sistemas'
								subtitle='O Instituto Federal de Educação, Ciência e Tecnologia de Alagoas'
								rangeDate='2018 - 2022'
							></Subsection>
							<Subsection title='Ensino médio' subtitle='O Instituto Federal de Educação, Ciência e Tecnologia de Alagoas'></Subsection>
						</Section>

						<Section title='HABILIDADES' className='flex flex-col gap-2'>
							<Subsection subtitle='Desenvolvimento front-end' className='flex flex-wrap gap-2'>
								<Skill>React.js</Skill>
								<Skill>Next.js</Skill>
								<Skill>Tailwind CSS</Skill>
								<Skill>UI/UX Figma</Skill>
								<Skill>Motion</Skill>
								<Skill>Module Federation</Skill>
								<Skill>TanStack Query</Skill>
								<Skill>Radix UI</Skill>
								<Skill>Material UI (MUI)</Skill>
								<Skill>Design System</Skill>
								<Skill>SEO</Skill>
								<Skill>HTML5</Skill>
								<Skill>TypeScript</Skill>
								<Skill>Testes automatizados (Jest)</Skill>
							</Subsection>

							<div className='my-2' />

							<Subsection subtitle={`Desenvolvimento de API's`} className='flex flex-wrap gap-2'>
								<Skill>Node.js</Skill>
								<Skill>Bun</Skill>
								<Skill>Python</Skill>
								<Skill>FastAPI</Skill>
								<Skill>Express</Skill>
								<Skill>PostgreSQL</Skill>
								<Skill>DrizzleORM</Skill>
								<Skill>PrismaORM</Skill>
								<Skill>Inngest</Skill>
								<Skill>Gemini API</Skill>
								<Skill>RAG com ChromaDB</Skill>
							</Subsection>

							<div className='my-2' />

							<Subsection subtitle='Deploy e monitoramento' className='flex flex-wrap gap-2'>
								<Skill>Cloudflare</Skill>
								<Skill>Railway</Skill>
								<Skill>Vercel</Skill>
								<Skill>Supabase</Skill>
								<Skill>Posthog</Skill>
								<Skill>Sentry</Skill>
								<Skill>Github Actions</Skill>
								<Skill>Stripe</Skill>
							</Subsection>
						</Section>

						<Section title='PROJETOS'>
							<Subsection title='ArtIux' subtitle='Criador' rangeDate='2025 - Presente' url='artiux.dev'>
								<ol className='list-disc'>
									<li>
										Desenvolvi biblioteca open source de componentes UI animados para React/Next.js, com mais de 24 componentes
										documentados;
									</li>
									<li>
										Implementei sistema de animações com GSAP, Motion e Three.js (React Three Fiber), incluindo efeitos de ripple,
										partículas (tsparticles) e transições de página;
									</li>
									<li>
										Construí formulários com validação usando React Hook Form + Zod, e páginas de documentação com preview ao vivo e bloco
										de código pronto para copiar (Open Source e Open Code);
									</li>
									<li>
										Utilizei Next.js 15 (Turbopack), React 19, TypeScript, Tailwind CSS 4, Radix UI e Zustand para gerenciamento de estado.
									</li>
								</ol>
							</Subsection>
						</Section>
					</div>
				</div>
			</Page>

			<Page>
				<div className='grid grid-cols-2 gap-6'>
					<div className='space-y-2'>
						<Section title='EXPERIÊNCIA'>
							<Subsection
								title='Desenvolvedor Front-end'
								subtitle='DS Consultoria Avançada em IA'
								rangeDate='2021 - 2022'
								url='dheiverphd.com'
							>
								<ol className='list-disc'>
									<li>
										Participei ativamente na implementação de dashboards interativos, permitindo visualização de dados de IA em tempo real e
										facilitando a tomada de decisões com base em insights preditivos.
									</li>
								</ol>
							</Subsection>

							<Subsection title='Desenvolvedor Front-end' subtitle='Zenix Tech' rangeDate='2020 - 2021'>
								<ol className='list-disc'>
									<li>Contribuí no desenvolvimento de websites utilizando React, focando em interfaces modernas e responsivas;</li>
									<li>Prototipei interfaces complexas com Figma, garantindo usabilidade e design centrado no usuário.</li>
								</ol>
							</Subsection>
						</Section>
					</div>

					<div className='space-y-2'>
						<Section title='PROJETOS'>
							<Subsection
								title='Mangaba AI'
								subtitle='Co-desenvolvedor'
								rangeDate='2023 - 2023  •  205 estrelas no GitHub'
								url='github.com/Mangaba-ai/mangaba_ai'
							>
								<Text typography='description-2' className='mb-1'></Text>

								<ol className='list-disc'>
									<li>
										Co-criador de framework open source de agentes autônomos em Python com suporte a 4 provedores LLM (Gemini, OpenAI,
										Claude, HuggingFace) e 4 modos de orquestração (Sequential, Hierarchical, Parallel, Consensual).
									</li>
									<li>
										Implementei RAG Pipeline completo, sistema de memória de curto e longo prazo (SQLite), guardrails de validação e
										Workflow Engine com stages condicionais e paralelos.
									</li>
								</ol>
							</Subsection>
						</Section>
					</div>
				</div>
			</Page>
		</>
	);
}

export default App;
