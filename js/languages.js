const
	LANGUAGES={
		"it":{
			"name":"Italiano",
			"homepage":{
				"unwrap":"Scarta!",
				"notes":"Meglio con Firefox/Chrome",
				"by":"di",
				"sourcesAt":"Sorgenti su",
				"learnHowToPlay":"Impara a giocare",
				"pleaseWait":"Aspetta un attimo...",
				"unwrapping":[
					"Sto strappando la linguetta...",
					"Sto cercando le forbici...",
					"Sto scartando la bustina...",
				],
				"instructions":[
					"{header}Grazie per aver scaricato il pacchetto di carte {title} di oggi!{endHeader}",
					"Se non hai mai giocato puoi imparare come preparare il tuo primo set e giocare la tua prima avventura leggendo il {accent}manuale di gioco{endAccent} che trovi {manualLink}qui{endManualLink}.",
					"C'&egrave; un nuovo pacchetto di carte {title} ogni giorno per cui, se vuoi espandere il tuo gioco con nuovi eroi e nuove avventure, ci vediamo qui domani!",
				],
				"settings":"Opzioni",
				"confirm":"OK",
				"printMode":"Modalit&agrave; di stampa",
				"printModes":{
					"default":{
						"label":"Default",
						"description":"Il PDF deve essere stampato su 2 diversi fogli A4 che devono poi essere tagliati e costruiti usando 9 bustine per carte da gioco e 9 carte da poker o cartoncini rettangolari seguendo le istruzioni del manuale di gioco. In questo modo le carte sono pi&ugrave; carine, solide e facili da mescolare ma richiedono pi&ugrave; lavoro per essere assemblate.",
					},
					"doublesided":{
						"label":"Fronte-retro",
						"description":"Il PDF deve essere stampato sulle 2 facce dello stesso foglio A4 sul lato lungo e semplicemente ritagliato lungo le righe tratteggiate. In questo modo le carte potrebbero non risultare perfettamente centrate, sono meno solide e pi&ugrave; difficili da mescolare ma sono di gran lunga pi&ugrave; facili da assemblare.",
					},
				},
				"learnHowToPlayTheGame":"Impara a giocare a {title}!",
				"theGameManual":"Il Manuale di Gioco",
				"readTheManual":"Leggi {manualLink}questo manuale{endManualLink} per sapere tutto quello che serve per esplorare e combattere nel mondo di {accent}Stampadia{endAccent}!",
				"faqs":"FAQs",
				"faqsList":[
					{
						"section":"Pacchetti di Carte",
						"questions":[
							{
								"q":"&Egrave; possibile accedere ai pacchetti di carte dei giorni scorsi?",
								"a":"Al momento non c'&egrave; un modo ufficiale per accedere ai vecchi pacchetti di carte ma la questione &egrave; sul tavolo dall'inizio del progetto - e del suo prequel. Il gioco non &egrave; pensato come un gioco che i giocatori devono consumare un dungeon dopo l'altro e vorrei testare l'idea che i giocatori raccolgano e si scambino pacchetti di carte. Ma il gioco &egrave; cambiato molto dal lancio del suo prequel e le cose potrebbero cambiare in futuro.",
							},
							{
								"q":"Ma io voglio collezionare tutti i pacchetti di carte di {title}!",
								"a":"I contenuti di {title} vengono selezionati e rimescolati ogni giorno per cui, se hai perso qualsasi contenuto, probabilmente torner&agrave; in futuro. Scarabocchia le carte, usa la tua creativit&agrave; ed immagina la tua avventura - sono questi i pacchetti di carte che vale la pena collezionare!",
							},
						],
					},
					{
						"section":"Altro",
						"questions":[
							{
								"q":"Come guadagni da questo gioco?",
								"a":"{title} &egrave; uno dei progetti che porto avanti per hobby e, esattemente come per gli {anchor}https://github.com/kesiev{anchorBody}altri{endAnchor}, ci lavoro nel tempo libero e sono rilasciati come opensource. Sono abituato a pagare per l'hosting della mia roba senza ottenere niente in cambio. Quindi, si. Mi va bene cos&igrave;. Se trovi qualcosa di divertente tra le cose che faccio per me &egrave; pi&ugrave; che sufficiente.",
							},
							{
								"q":"Vorrei giocare a questo gioco... ma con i dadi!",
								"a":"Puoi giocare a {accent}Chronicles of Stampadia{endAccent}, il prequel di {title}! Similmente a questo gioco, ogni giorno c'&egrave; una nuova avventura da stampare e da giocare con una matita, una gomma, due dadi e una piccola pedina. Lo trovi {anchor}https://www.kesiev.com/stampadia{anchorBody}qui{endAnchor}. Oh, &egrave; esclusivamente in inglese... spero che per te non sia un problema.",
							},
							{
								"q":"Ho altre domande!",
								"a":"Non preoccuparti! C'&egrave; un server Discord {anchor}https://discord.gg/EDYP2N4RMn{anchorBody}qui{endAnchor} - parliamo di un po' di tutto su Stampadia e puoi chiedere chiarimenti sul regolamento nel canale #tos-it-help-rules.",
							},
						],
					},
				],
			},
			"narrative":{
				"names":{
					"villainKey":[
						"La Chiave",
						"Il Sigillo",
						"La Runa",
					],
					"villainHelper":[
						"Lo Stregone",
						"Il Sacerdote",
						"Il Seguace",
					],
				},
				"villain":{
					"evilLord":{
						"name":[
							"Il Signore del Male",
							"Il Signore Oscuro",
							"L'Imperatore",
						],
						"description":[
							"Nessuno fermerà i suoi piani!",
							"Si dice che abbia centinaia di anni.",
							"&Egrave; inarrestabile!",
						],
						"intro":[
							"\"Non puoi battermi!\"",
							"\"&Egrave; tutto inutile!\"",
							"\"&Egrave; la tua fine!\"",
						],
						"defeat":[
							"\"Maledetto! La mia vendetta sar&agrave; terribile!\"",
							"\"Che tu sia maledetto! Torner&ograve;!\"",
							"\"Io... torner&ograve!\"",
						],
						"initialFormDefeat":[
							"\"Credi di avermi sconfitto, uh?\"",
							"\"Molto bene...\"",
							"\"Facciamo sul serio allora!\"",
						],
						"finalFormIntro":[
							"\"Preparati ad affrontare la mia vera forma!\"",
							"\"&Egrave; arrivata la tua fine!\"",
							"\"Credevi di aver vinto, huh?\"",
						],
						"finalFormDefeat":[
							"\"Maledettooo!\"",
							"\"Nooo!\"",
							"\"Impossibile!\"",
						],
					},
					"nightmare":{
						"name":[
							"L'Incubo",
							"Il Terrore",
							"Il Buio",
						],
						"description":[
							"Lo hai incontrato nei tuoi sogni.",
							"Un brivido ti corre lungo la schiena.",
							"Il suo sguardo sembra trapassarti.",
						],
						"intro":[
							"\"Sogni d'oro!\"",
							"\"Chiudi gli occhi...\"",
							"\"Buona notte...\"",
						],
						"defeat":[
							"\"Torner&ograve; nei tuoi incubi!\"",
							"\"Sar&ograve; sempre con te...\"",
							"\"Ci rivederemo...\"",
						],
						"initialFormDefeat":[
							"\"Ora si fa sul serio!\"",
							"\"Povero illuso!\"",
							"\"Ora svegliati...\"",
						],
						"finalFormIntro":[
							"\"Il tuo sogno ora &egrave; un incubo!\"",
							"\"Facciamola finita!\"",
							"\"Dormirai per sempre!\"",
						],
						"finalFormDefeat":[
							"\"Come &egrave; possibile?!\"",
							"\"Non... &egrave;...\"",
							"\"Gaaah!\"",
						],
					},
					"kingGoblin":{
						"name":[
							"Il Re dei Goblin",
							"Il Grande Goblin",
							"Il Re Goblin",
						],
						"description":[
							"&Egrave; enorme!",
							"Potrebbe schiacciarti con una mano.",
							"La sua pelle &egrave; durissima!",
						],
						"intro":[
							"\"Ke ke kee! Fatti sotto!\"",
							"\"Dai, fatti fare a pezzi!\"",
							"\"Ci metteremo poco, vedrai!\"",
						],
						"defeat":[
							"\"Insetto schifoso...\"",
							"\"Piccolo schifoso...\"",
							"\"Ma... le... di...\"",
						],
						"initialFormDefeat":[
							"\"Mi stai facendo divertire!\"",
							"\"Ora basta!\"",
							"\"Ora sono arrabbiato!\"",
						],
						"finalFormIntro":[
							"\"&Egrave; ora di finirla!\"",
							"\"Muori!\"",
							"\"Ti schiaccer&ograve;!\"",
						],
						"finalFormDefeat":[
							"\"Fatti... sotto...\"",
							"\"Posso... ancora...\"",
							"\"Non... ho perso...\"",
						],
					},
				},
				"enemy":{
					"guard":{
						"name":[
							"Guardia",
							"Sentinella",
							"Guardiano",
						],
						"description":[
							"&Egrave; molto ligio al dovere.",
							"Ha iniziato il suo turno in orario.",
							"Non dorme mai.",
						],
						"intro":[
							"\"Fatti sotto, maledetto!\"",
							"\"Altol&agrave;!\"",
							"\"Non muoverti!\"",
						],
						"defeat":[
							"\"Aaagh!\"",
							"\"Hey! Dove scappi?\"",
							"\"Ugh...\"",
						],
					},
					"goblin":{
						"name":[
							"Goblin",
							"Piccolo Goblin",
							"Piccola Creatura",
						],
						"description":[
							"Non toglie gli occhi dalla tua borsa dell'oro.",
							"Sembra non riuscire a stare fermo.",
							"Si &egrave; lanciato verso di te!",
						],
						"intro":[
							"\"Oh no!\"",
							"\"Sa... salve!\"",
							"\"Fa... fatti so... sotto!\"",
						],
						"defeat":[
							"\"Ugh!\"",
							"\"Mannaggia!\"",
							"\"Ho perso di nuovo!\"",
						],
					},
					"guardsLeader":{
						"name":[
							"Capo delle Guardie",
							"Capoguardia",
							"Sergente",
						],
						"description":[
							"&Egrave; un tipo molto scrupoloso.",
							"Non smette di squadrarti.",
							"Non ti lascer&agrave; passare tanto facilmente.",
						],
						"intro":[
							"\"Nel nome della legge, ti ordino di fermarti!\"",
							"\"Fermo! Identificati!\"",
							"\"Mostrami il tuo permesso!\"",
						],
						"defeat":[
							"\"Fer... mo...\"",
							"\"Ragazzi... fermatelo!\"",
							"\"Restituiscimi il distintivo!\"",
						],
					},
					"recruit":{
						"name":[
							"Recluta",
							"Giovane Soldato",
							"Principiante",
						],
						"description":[
							"&Egrave; sposato con una contadina da appena qualche giorno.",
							"Sognava di fare l'avventuriero.",
							"Vuole diventare il prossimo capo delle guardie.",
						],
						"intro":[
							"\"F... fermo la!\"",
							"\"In guardia!\"",
							"\"Nel... nome della legge!\"",
						],
						"defeat":[
							"\"A... aiuto!\"",
							"\"Aaagh!\"",
							"\"Devo... allenarmi ancora!\"",
						],
					},
					"mercenary":{
						"name":[
							"Mercenario",
							"Assassino",
							"Sicario",
						],
						"description":[
							"Qualcuno lo ha pagato per farti fuori!",
							"C'&egrave; davvero una taglia sulla tua testa?",
							"Ti lascerà scappare?",
						],
						"intro":[
							"\"Ecco la preda che cercavo! Rimani li e fatti legare!\"",
							"\"Sei quel tizio sui manifesti! Fermo!\"",
							"\"Eccolo qua, il mio gruzzoletto!\"",
						],
						"defeat":[
							"\"Addio ai miei soldi...\"",
							"\"I miei soldi!\"",
							"\"Come pagher&ograve; i debiti ora?\"",
						],
					},
					"golem":{
						"name":[
							"Golem",
							"Gigante",
							"Colosso",
						],
						"description":[
							"Per essere di pietra &egrave; piuttosto agile!",
							"Di che materiale &egrave; fatto?",
							"Sembra una montagna in movimento.",
						],
						"intro":[
							"\"Guuh...\"",
							"\"Uuugh...\"",
							"\"Grrr...\"",
						],
						"defeat":[
							"Cade a pezzi con un gran tonfo",
							"Sprofonda nella terra e sparisce",
							"Si dissolve nell'aria",
						],
					},
					"mage":{
						"name":[
							"Mistico",
							"Sacerdote",
							"Religioso",
						],
						"description":[
							"Sembra parlare tra s&egrave; e s&egrave;.",
							"Muove le labbra ma non esce alcun suono.",
							"Sembra disegnare segni a mezz'aria.",
						],
						"intro":[
							"Sta per recitare un potente incantesimo!",
							"Eviti una sua saetta per un pelo!",
							"Ti senti stranamente osservato",
						],
						"defeat":[
							"Sparisce in una nuvola",
							"Corre via in un vicolo",
							"Si immerge nella folla e fugge",
						],
					},
					"zombie":{
						"name":[
							"Zombie",
							"Non Morto",
							"Vagante",
						],
						"description":[
							"Ha decisamente molta fame...",
							"Vuole certamente divorarti.",
							"Si trascina lentamente verso di te.",
						],
						"intro":[
							"\"Faaa... meee...\"",
							"\"Cer... vel... li...\"",
							"\"Mmmhhh...\"",
						],
						"defeat":[
							"\"Guuugh...\"",
							"\"Gaaahhh...\"",
							"\"Unhh...\"",
						],
					},
					"skeleton":{
						"name":[
							"Scheletro",
							"Creatura d'Ossa",
							"Ossa Viventi",
						],
						"description":[
							"Come fa a parlare se &egrave; solo un mucchio di ossa?",
							"Sembra mancargli qualche osso.",
							"Cigola ad ogni movimento.",
						],
						"intro":[
							"\"Vieni qua, molliccio!\"",
							"\"Vieni qua, mortale!\"",
							"\"Unisciti a noi!\"",
						],
						"defeat":[
							"\"Agh... le mie... ossa!\"",
							"\"Non riesco a ricompormi!\"",
							"\"Ridammi il mio braccio!\"",
						],
					},
					"feline":{
						"name":[
							"Felino",
							"Gatto",
							"Micio",
						],
						"description":[
							"Non ama essere abbracciato.",
							"Sta facendo le fusa...?",
							"Si lecca avidamente il pelo delle zampe.",
						],
						"intro":[
							"\"Avevo proprio bisogno di sistemare le unghia...\"",
							"\"Giochiamo un pochino?\"",
							"\"Vuoi coccolarmi un po'?\"",
						],
						"defeat":[
							"\"Miaoledetto!\"",
							"\"Fsshhh!\"",
							"\"Vattene via!\"",
						],
					},
					"ghost":{
						"name":[
							"Spettro",
							"Fantasma",
							"Ectoplasma",
						],
						"description":[
							"Il suo corpo fluttua a mezz'aria.",
							"Non capisci se &egrave; reale.",
							"Parla direttamente alla tua mente.",
						],
						"intro":[
							"\"Ti cercavo, mortale...\"",
							"\"&Egrave; il tuo momento, mortale.\"",
							"\"&Egrave; la tua ora. Vieni con me.\"",
						],
						"defeat":[
							"\"Torner&ograve; per sempre!\"",
							"\"&Egrave; solo una questione di tempo...\"",
							"\"Uuuhh!\"",
						],
					},
					"dwarf":{
						"name":[
							"Nano",
						],
						"description":[
							"La rabbia compensa la bassa statura.",
							"Deve aver bevuto davvero un sacco.",
							"Non si arrender&agrave; tanto facilmente!",
						],
						"intro":[
							"\"Credo sia il momento giusto per una rissa!\"",
							"\"Ho un pugno in sospeso con te!\"",
							"\"Vediamo chi ha la testa pi&ugrave; dura!\"",
						],
						"defeat":[
							"\"Dove... dove vai amico?\"",
							"\"Tirami fuori da questa botte!\"",
							"\"Dove... scappi?\"",
						],
					},
					"magicArmor":{
						"name":[
							"Armatura Magica",
							"Armatura Posseduta",
							"Armatura Fantasma",
						],
						"description":[
							"Non c'&egrave; nessuno all'interno!",
							"Si muove facendo un gran rumore.",
							"Come fa a muoversi?",
						],
						"intro":[
							"\"Muori...\"",
							"\"Sparisci...\"",
							"\"Traditore...\"",
						],
						"defeat":[
							"Il metallo si scioglie e sparisce.",
							"Cade a terra facendo un gran fracasso.",
							"Evapora per un po' e sparisce.",
						],
					},
					"stampadianGuardian":{
						"name":[
							"Guardiano Stampadiano",
							"Vecchio Stampadiano",
							"Stampadiano Trioculato",
						],
						"description":[
							"&Egrave; di questo mondo?",
							"Da dove arriva questa creatura?",
							"Sembra vecchia di migliaia di anni!",
						],
						"intro":[
							"\"Non puoi passare.\"",
							"\"La fortuna ti &egrave; avversa.\"",
							"\"Addio, avventuriero.\"",
						],
						"defeat":[
							"\"I miei fratelli ti fermeranno.\"",
							"\"Salva... i monaci...\"",
							"\"Che sfortuna...\"",
						],
					},
					"executioner":{
						"name":[
							"Boia",
							"Esecutore",
							"Aguzzino",
						],
						"description":[
							"Vuole solo fare il suo lavoro.",
							"C'&egrave; stata una sentenza di morte?",
							"Prima o poi ti avrebbe trovato.",
						],
						"intro":[
							"\"&Egrave; il tuo turno, quindi!\"",
							"\"Ecco il condannato!\"",
							"\"Stavolta non scapperai alla giustizia!\"",
						],
						"defeat":[
							"\"Dove cerchi di scappare...!\"",
							"\"Ormai sei gi&agrave; morto...\"",
							"\"Maledizione!\"",
						],
					},
				},
			},
			"entities":{
				"banners":{
					"banner1":"{symbol heroCardBanner1SmallSymbol}",
					"banner2":"{symbol heroCardBanner2SmallSymbol}",
					"bannerAny":"",
					"bannerChoice":"a tua scelta",
				},
				"resources":{
					"attack":"{symbol heroCardAttackSmallSymbol}",
					"defense":"{symbol heroCardDefenseSmallSymbol}",
					"mana":"{symbol heroCardManaSmallSymbol}",
				},
				"cardTypes":{
					"star1":"{symbol heroCardStar1SmallSymbol}",
					"star2":"{symbol heroCardStar2SmallSymbol}",
					"banner1":"{symbol heroCardBanner1SmallSymbol}",
					"banner2":"{symbol heroCardBanner2SmallSymbol}",
					"earth":"{symbol heroCardEarthSmallSymbol}",
					"fire":"{symbol heroCardFireSmallSymbol}",
					"water":"{symbol heroCardWaterSmallSymbol}",
					"air":"{symbol heroCardAirSmallSymbol}",
				},
				"loot":{
					"attack":"+1{symbol heroCardAttackSmallSymbol}",
					"defense":"+1{symbol heroCardDefenseSmallSymbol}",
					"mana":"+1{symbol heroCardManaSmallSymbol}",
				},
				"cards":[
					"{value} carta",
					"{value} carte",
				],
				"used":[
					"usata",
					"usate",
				],
				"times":[
					"{value} volta",
					"{value} volte",
				],
			},
			"optionality":{
				"must":"devi",
				"may":"puoi",
			},
			"repeating":{
				"exactly":{
					"singular":"per {value} volta",
					"plural":"per {value} volte",
				},
				"upTo":{
					"singular":"sino a {value} volta",
					"plural":"sino a {value} volte",
				},
			},
			"places":{
				"inHand":"in mano",
				"inDiscardPile":"negli scarti",
				"inHandOrDiscard":"",
			},
			"conditions":{
				"if":"se",
				"separator":" e ",
				"effectSeparator":": ",
				"actionSeparator":", ",
			},
			"actions":{
				"heal":{
					"flip":{
						"may":"{optionalityrepeating} girare {cards} {symbol heroCardBanner2SmallSymbol} {place}",
						"must":"{optionalityrepeating} gira {cards} {symbol heroCardBanner2SmallSymbol} {place}",
					},
				},
				"shop":{
					"flip":{
						"may":"{optionalityrepeating} scegliere {cards} {symbol heroCardBanner1SmallSymbol} ed {cards} {symbol heroCardBanner2SmallSymbol} {place} e girarle",
						"must":"{optionalityrepeating} scegli {cards} {symbol heroCardBanner1SmallSymbol} ed {cards} {symbol heroCardBanner2SmallSymbol} {place} e girarle",
					},
				},
				"swap":{
					"upTo":{
						"may":"{optionalityrepeating} scambiare sino a {cards} {bannerType} dalla mano con altrettante {bannerTypeTo} negli scarti",
						"must":"{optionalityrepeating} scambia sino a {cards} {bannerType} dalla mano con altrettante {bannerTypeTo} negli scarti",
					},
				},
				"recover":{
					"upTo":{
						"may":"{optionalityrepeating} scambiare sino a {cards} {bannerType} dagli scarti con altrettante eliminate sul lato {bannerTypeTo}",
						"must":"{optionalityrepeating} scambia sino a {cards} {bannerType} dagli scarti con altrettante eliminate sul lato {bannerTypeTo}",
					},
				},
				"discard":{
					"exactly":{
						"may":"{optionalityrepeating} scartare {cards} {bannerType}",
						"must":"{optionalityrepeating} scarta {cards} {bannerType}",
					},
				},
				"bannerChallenge":{
					"comparison":{
						"may":"{optionalityrepeating} controllare se hai {comparison} {cards} {bannerType} {cardsPlace}: se si, gira {prizeCards} {symbol heroCardBanner2SmallSymbol} {prizePlace}, se no esaurisci {punishmentCards} {punishmentPlace} a tua scelta",
						"must":"{optionalityrepeating} controlla se hai {comparison} {cards} {bannerType} {cardsPlace}: se si, gira {prizeCards} {symbol heroCardBanner2SmallSymbol} {prizePlace}, altrimenti esaurisci {punishmentCards} {punishmentPlace} a tua scelta",
					},
				},
				"swapSequence":{
					"draw":{
						"may":"{optionalityrepeating} scartare {sequence} per pescare {cards}",
						"must":"{optionalityrepeating} scarta {sequence} per pescare {cards}",
					},
				},
				"stopFight":{
					"anytime":{
						"may":"{optionalityrepeating} abbandonare questo battaglia in qualsiasi momento",
						"must":"{optionalityrepeating} abbandona questa battaglia",
					},
				},
				"ritual":{
					"remove":{
						"may":"{optionalityrepeating} rimuovere {cards} per girare fino a {prizeCards}",
						"must":"{optionalityrepeating} rimuovi {cards} per girare fino a {prizeCards}",
					},
				},
				"sacrifice":{
					"exhaust":{
						"may":"{optionalityrepeating} esaurire {cards} {place} per {buff}",
						"must":"{optionalityrepeating} esaurisci {cards} {place} e {buff}",
					},
				},
				"loot":{
					"buff":{
						"may":"{optionalityrepeating} ottenere {buff}",
						"must":"{optionalityrepeating} ottieni {buff}",
					},
				},
				"helper":{
					"buff":{
						"may":"{optionalityrepeating} scartare {sequence} per {buff}",
						"must":"{optionalityrepeating} scarta {sequence} per {buff}",
					},
				},
				"constellation":{
					"order":{
						"may":"{optionalityrepeating} scartare la sequenza {sequence} con valore {order} per {buff}",
						"must":"{optionalityrepeating} scarta la sequenza {sequence} con valore {order} per {buff}",
					},
				},
				"discardHand":{
					"flip":{
						"may":"{optionalityrepeating} scartare la tua mano, girare il mazzo degli scarti e pescare una nuova mano",
						"must":"{optionalityrepeating} scarta la tua mano, gira il mazzo degli scarti e pesca una nuova mano",
					},
					"normal":{
						"may":"{optionalityrepeating} scartare la tua mano e pescare una nuova mano",
						"must":"{optionalityrepeating} scarta la tua mano e pesca una nuova mano",
					},
				},
				"migration":{
					"swap":{
						"may":"{optionalityrepeating} scambiare la posizione di 2 carte in mappa, inclusa questa",
						"must":"{optionalityrepeating} scambia la posizione di 2 carte in mappa, inclusa questa",
					},
				},
				"gambling":{
					"drawCard":{
						"may":"{optionalityrepeating} scegliere una carta dalla mano e pescarne una: se questa ha valore {comparison} prendile, altrimenti scartale",
						"must":"{optionalityrepeating} scegli una carta dalla mano e pescane una: se questa ha valore {comparison} prendile, altrimenti scartale",
					},
				},
			},
			"comparison":{
				"higher":"pi&ugrave; alto",
				"lower":"pi&ugrave; basso",
				"same":"uguale",
				"more":"pi&ugrave; di",
				"less":"meno di",
				"exactly":"esattamente",
			},
			"formatting":{
				"skipEndOn":[
					".",
					"!",
					"?",
					":",
					"\n",
				],
				"effectEnd":".",
			},
			"drawCard":{
				"singular":"pesca 1 carta",
				"plural":"pesca {value} carte",
			},
			"cardSet":{
				"separator":" e ",
				"simpleSeparator":", ",
			},
			"order":{
				"ascending":"crescente",
				"descending":"decrescente",
				"same":"uguale",
			},
			"heroCard":{
				"smallTextSeparator":" - ",
				"optionsSeparator":" ",
				"exhaust":{
					"label":"Esaurire",
					"top":{
						"cost":{
							"mana":"-{value} {symbol heroCardManaTinySymbol} o gira, scarta",
						},
						"nocost":"gira e scarta",
					},
					"bottom":{
						"cost":{
							"mana":"-{value} {symbol heroCardManaTinySymbol} per scartare o rimuovi",
						},
						"nocost":"rimuovi",
					},
				},
				"condition":{
					"pay":0,
					"valueFormatters":{
						"stars":[
							0,
							"{symbol heroCardStar1SmallSymbol}",
							"{symbol heroCardStar2SmallSymbol}",
						],
					},
					"subjects":{
						"inPlay":"hai in gioco",
						"previousCard":"la carta precedente &egrave;",
					},
					"check":{
						"playedCardsCount":{
							"lessEqualThan":"{subject} {value} carte o meno",
							"greaterEqualThan":"{subject} {value} carte o pi&ugrave;",
							"equal":"{subject} {value} carte",
						},
						"defense":{
							"lessEqualThan":"{symbol heroCardDefenseSmallSymbol} è {value} o meno",
							"greaterEqualThan":"{symbol heroCardDefenseSmallSymbol} è {value} o pi&ugrave;",
							"equal":"{symbol heroCardDefenseSmallSymbol} è {value}",
						},
						"attack":{
							"lessEqualThan":"{symbol heroCardAttackSmallSymbol} è {value} o meno",
							"greaterEqualThan":"{symbol heroCardAttackSmallSymbol} è {value} o pi&ugrave;",
							"equal":"{symbol heroCardAttackSmallSymbol} è {value}",
						},
						"banner1":{
							"lessEqualThan":"{subject} {value} {symbol heroCardBanner1SmallSymbol} o meno",
							"greaterEqualThan":"{subject} {value} {symbol heroCardBanner1SmallSymbol} o pi&ugrave;",
							"equal":"{subject} {value} {symbol heroCardBanner1SmallSymbol}",
						},
						"banner2":{
							"lessEqualThan":"{subject} {value} {symbol heroCardBanner2SmallSymbol} o meno",
							"greaterEqualThan":"{subject} {value} {symbol heroCardBanner2SmallSymbol} o pi&ugrave;",
							"equal":"{subject} {value} {symbol heroCardBanner2SmallSymbol}",
						},
						"fire":{
							"lessEqualThan":"{subject} {value} {symbol heroCardFireSmallSymbol} o meno",
							"greaterEqualThan":"{subject} {value} {symbol heroCardFireSmallSymbol} o pi&ugrave;",
							"equal":"{subject} {value} {symbol heroCardFireSmallSymbol}",
						},
						"water":{
							"lessEqualThan":"{subject} {value} {symbol heroCardWaterSmallSymbol} o meno",
							"greaterEqualThan":"{subject} {value} {symbol heroCardWaterSmallSymbol} o pi&ugrave;",
							"equal":"{subject} {value} {symbol heroCardWaterSmallSymbol}",
						},
						"earth":{
							"lessEqualThan":"{subject} {value} {symbol heroCardEarthSmallSymbol} o meno",
							"greaterEqualThan":"{subject} {value} {symbol heroCardEarthSmallSymbol} o pi&ugrave;",
							"equal":"{subject} {value} {symbol heroCardEarthSmallSymbol}",
						},
						"air":{
							"lessEqualThan":"{subject} {value} {symbol heroCardAirSmallSymbol} o meno",
							"greaterEqualThan":"{subject} {value} {symbol heroCardAirSmallSymbol} o pi&ugrave;",
							"equal":"{subject} {value} {symbol heroCardAirSmallSymbol}",
						},
						"stars":{
							"lessEqualThan":"{subject} {formattedValue} o meno",
							"greaterEqualThan":"{subject} {formattedValue} o pi&ugrave;",
							"equal":"{subject} {formattedValue}",
						},
					},
					"checkConstellation":{
						"inPlay":"hai in gioco {constellation}",
						"inHand":"hai in mano {constellation}",
					},
				},
				"effect":{
					"gainTick":{
						"action":"se possibile, annerisci la casella libera pi&ugrave; a sinistra",
						"gain":{
							"attack":"(il bonus pi&ugrave; a sinistra) {symbol heroCardAttackSmallSymbol}",
							"defense":"(il bonus pi&ugrave; a sinistra) {symbol heroCardDefenseSmallSymbol}",
							"mana":"(il bonus pi&ugrave; a sinistra) {symbol heroCardManaSmallSymbol}",
						},
					},
					"gain":{
						"attack":"+{value} {symbol heroCardAttackSmallSymbol}",
						"defense":"+{value} {symbol heroCardDefenseSmallSymbol}",
						"mana":"+{value} {symbol heroCardManaSmallSymbol}",
					},
					"set":{
						"attack":"{symbol heroCardAttackSmallSymbol} = {value}",
						"defense":"{symbol heroCardDefenseSmallSymbol} = {value}",
						"mana":"{symbol heroCardManaSmallSymbol} = {value}",
					},
					"pay":{
						"attack":"paga {value} {symbol heroCardAttackSmallSymbol}",
						"defense":"paga {value} {symbol heroCardDefenseSmallSymbol}",
						"mana":"paga {value} {symbol heroCardManaSmallSymbol}",
					},
					"multiplyBy":{
						"attack":"{symbol heroCardAttackSmallSymbol} {symbol heroCardMultiplyTinySymbol} {value}",
						"defense":"{symbol heroCardDefenseSmallSymbol} {symbol heroCardMultiplyTinySymbol} {value}",
						"mana":"{symbol heroCardManaSmallSymbol} {symbol heroCardMultiplyTinySymbol} {value}",
					},
					"transfer":{
						"attack":{
							"defense":"trasferisci {symbol heroCardAttackSmallSymbol} in {symbol heroCardDefenseSmallSymbol}",
						},
						"defense":{
							"attack":"trasferisci {symbol heroCardDefenseSmallSymbol} in {symbol heroCardAttackSmallSymbol}",
						},
					},
					"pickFrom":{
						"infuse":"riprendi in mano fino a {cards} {used} per Infondere",
					},
				},
				"classes":{
					"swordsman":{
						"name":[
							"Lo Spadaccino",
						],
						"description":[
							"Usa difesa e attacco per eliminare i nemici",
						],
						"skills":{
							"baseAttack1":{
								"label":"attacco base {value}",
								"valueGenre":"male",
							},
							"baseDefense1":{
								"label":"difesa base {value}",
								"valueGenre":"female",
							},
							"strongAttack1":{
								"label":"attacco forte {value}",
								"valueGenre":"male",
							},
							"strongDefense1":{
								"label":"difesa salda {value}",
								"valueGenre":"female",
							},
							"baseAttack2":{
								"label":"attacco base {value}+",
								"valueGenre":"male",
							},
							"baseDefense2":{
								"label":"difesa base {value}+",
								"valueGenre":"female",
							},
							"strongAttack2":{
								"label":"attacco critico {value}",
								"valueGenre":"male",
							},
							"strongDefense2":{
								"label":"difesa critica {value}",
								"valueGenre":"female",
							},
							"basicAttack1":{
								"label":"slancio {value}",
								"valueGenre":"male",
							},
							"basicAttack2":{
								"label":"carica {value}",
								"valueGenre":"female",
							},
							"basicSpecial1":{
								"label":"preparazione {value}",
								"valueGenre":"female",
							},
							"basicSpecial2":{
								"label":"odio {value}",
								"valueGenre":"male",
							},
							"advancedAttack1":{
								"label":"attacco stordente {value}",
								"valueGenre":"male",
							},
							"advancedAttack2":{
								"label":"agilita' {value}",
								"valueGenre":"female",
							},
							"advancedSpecial1":{
								"label":"frenesia {value}",
								"valueGenre":"female",
							},
							"advancedSpecial2":{
								"label":"protezione {value}",
								"valueGenre":"female",
							},
							"legacyAttack":{
								"label":"la via del guerriero",
								"valueGenre":"female",
							},
						},
					},
					"elementalist":{
						"name":[
							"L'Elementalista",
						],
						"description":[
							"Usa gli elementi per attaccare e difendersi",
						],
						"skills":{
							"baseAttack1":{
								"label":"lampo {value}",
								"valueGenre":"male",
							},
							"baseDefense1":{
								"label":"difesa {value}",
								"valueGenre":"female",
							},
							"strongAttack1":{
								"label":"proiettile {value}",
								"valueGenre":"male",
							},
							"strongDefense1":{
								"label":"scudo {value}",
								"valueGenre":"male",
							},
							"baseAttack2":{
								"label":"fascio {value}",
								"valueGenre":"male",
							},
							"baseDefense2":{
								"label":"muro {value}",
								"valueGenre":"male",
							},
							"strongAttack2":{
								"label":"arco {value}",
								"valueGenre":"male",
							},
							"strongDefense2":{
								"label":"muraglia {value}",
								"valueGenre":"female",
							},
							"concentration":{
								"label":"concentrazione {value}",
								"valueGenre":"female",
							},
							"balance":{
								"label":"bilancia {value}",
								"valueGenre":"female",
							},
							"compression":{
								"label":"compressione {value}",
								"valueGenre":"female",
							},
							"decompression":{
								"label":"espansione {value}",
								"valueGenre":"female",
							},
							"excess":{
								"label":"eccesso {value}",
								"valueGenre":"male",
							},
							"emptiness":{
								"label":"vuoto {value}",
								"valueGenre":"male",
							},
							"quiet":{
								"label":"quiete {value}",
								"valueGenre":"female",
							},
							"legacyElemental":{
								"label":"specialista {value}",
								"valueGenre":"female",
							},
						},
					},
					"stargazer":{
						"name":[
							"L'Astronomo",
						],
						"description":[
							"Cerca le risorse tra le stelle",
						],
						"skills":{
							"baseAttack1":{
								"label":"raggio {value}",
								"valueGenre":"male",
							},
							"baseDefense1":{
								"label":"anello {value}",
								"valueGenre":"male",
							},
							"strongAttack1":{
								"label":"meteora {value}",
								"valueGenre":"female",
							},
							"strongDefense1":{
								"label":"atmosfera {value}",
								"valueGenre":"female",
							},
							"baseAttack2":{
								"label":"luce {value}",
								"valueGenre":"female",
							},
							"baseDefense2":{
								"label":"specchio {value}",
								"valueGenre":"male",
							},
							"strongAttack2":{
								"label":"sole {value}",
								"valueGenre":"male",
							},
							"strongDefense2":{
								"label":"luna {value}",
								"valueGenre":"female",
							},
							"glare":{
								"label":"occhiata {value}",
								"valueGenre":"female",
							},
							"gaze":{
								"label":"sguardo {value}",
								"valueGenre":"male",
							},
							"reduction":{
								"label":"riduzione {value}",
								"valueGenre":"female",
							},
							"zoomin":{
								"label":"zoom {value}",
								"valueGenre":"male",
							},
							"zoomout":{
								"label":"scala {value}",
								"valueGenre":"female",
							},
							"erasing":{
								"label":"cancellazione {value}",
								"valueGenre":"female",
							},
							"tracing":{
								"label":"traccia {value}",
								"valueGenre":"female",
							},
							"blackHole":{
								"label":"buco nero {value}",
								"valueGenre":"male",
							},
							"nebula":{
								"label":"nebula {value}",
								"valueGenre":"female",
							},
							"legacyAttack":{
								"label":"la via dell'astronomo",
								"valueGenre":"female",
							},
						},
					},
				},
				"perks":{
					"safe":{
						"male":"sicuro",
						"female":"sicura",
					},
					"flaming":{
						"male":"ardente",
						"female":"ardente",
					},
					"overwhelming":{
						"male":"travolgente",
						"female":"travolgente",
					},
					"cutting":{
						"male":"tagliente",
						"female":"tagliente",
					},
					"erosive":{
						"male":"erosivo",
						"female":"erosiva",
					},
					"combo":{
						"male":"combinato",
						"female":"combinata",
					},
					"banner":{
						"male":"stendardo",
						"female":"stendardo",
					},
					"efficient":{
						"male":"efficiente",
						"female":"efficiente",
					},
					"of1_earth":{
						"male":"terrestre",
						"female":"terrestre",
					},
					"of1_air":{
						"male":"aereo",
						"female":"aerea",
					},
					"of1_fire":{
						"male":"focoso",
						"female":"focosa",
					},
					"of1_water":{
						"male":"acquatico",
						"female":"acquatica",
					},
					"of2_earth":{
						"male":"della terra",
						"female":"della terra",
					},
					"of2_air":{
						"male":"dell'aria",
						"female":"dell'aria",
					},
					"of2_fire":{
						"male":"del fuoco",
						"female":"del fuoco",
					},
					"of2_water":{
						"male":"dell'acqua",
						"female":"dell'acqua",
					},
					"of3_earth":{
						"male":"marrone",
						"female":"marrone",
					},
					"of3_air":{
						"male":"bianco",
						"female":"bianca",
					},
					"of3_fire":{
						"male":"rosso",
						"female":"rossa",
					},
					"of3_water":{
						"male":"blu",
						"female":"blu",
					},
				},
			},
			"overworldCards":{
				"gainTick":"{optionalityrepeating}, se possibile, annerire la casella libera pi&ugrave; a sinistra:",
				"onTick":"Guarda la lettera pi&ugrave; a sinistra:",
				"check":{
					"room":"{room} &egrave; in mappa",
					"notRoom":"{room} non &egrave; in mappa",
				},
				"cardIsEmpty":"questa carta &egrave; vuota",
				"reveal":{
					"ifNotRevealed":{
						"singular":"{value} non &egrave; in mappa",
						"plural":"{value} non sono in mappa",
					},
					"ifRevealed":{
						"singular":"{value} &egrave; in mappa",
						"plural":"{value} sono in mappa",
					},
					"may":"{optionality} rivelare {value}.",
					"must":"rivela {value}.",
				},
				"remove":{
					"thisCard":{
						"may":"{optionalityrepeating} rimuovere questa carta",
						"must":"rimuovi questa carta",
					},
					"cards":{
						"may":"{optionalityrepeating} rimuovere {value}",
						"must":"rimuovi {value}",
					},
				},
				"pick":{
					"may":"{optionalityrepeating} aggiungere il retro di questa carta sul lato {bannerType} alla tua pila degli scarti",
					"must":"aggiungi il retro di questa carta sul lato {bannerType} alla tua pila degli scarti",
				},
				"actions":{
					"forge":{
						"elements":{
							"may":"{optionalityrepeating} scartare {sequence} per aggiungere il retro di questa carta sul lato {bannerType} alla tua pila degli scarti",
							"must":"scarta {sequence} per aggiungere il retro di questa carta sul lato {bannerType} nella tua pila degli scarti",
						},
					},
				},
			},
			"dungeonCards":{
				"gainTick":"{optionalityrepeating}, se possibile, annerire la casella libera pi&ugrave; a sinistra:",
				"onTick":"Guarda la lettera pi&ugrave; a sinistra:",
				"check":{
					"room":"{room} &egrave; in mappa",
					"notRoom":"{room} non &egrave; in mappa",
					"notTickedRoom":"{room} ha {symbol heroCardTickBox-empty} libere",
				},
				"roomIsEmpty":"la stanza &egrave; vuota",
				"pick":{
					"may":"{optionalityrepeating} aggiungere il retro della carta {card} sul lato {bannerType} nella tua pila degli scarti",
					"must":"aggiungi il retro della carta {card} sul lato {bannerType} nella tua pila degli scarti",
				},
				"actions":{
					"forge":{
						"elements":{
							"may":"{optionalityrepeating} scartare {sequence} per aggiungere il retro della carta {card} sul lato {bannerType} alla tua pila degli scarti",
							"must":"scarta {sequence} per aggiungere il retro della carta {card} sul lato {bannerType} nella tua pila degli scarti",
						},
					},
				},
			},
			"enemiesDescriptions":{
				"weakToElement":{
					"title":"Debolezza elementale",
					"label":"Se hai {elementLimit} {element} o pi&ugrave; in gioco: -1{symbol heroCardDefenseSmallSymbol}",
					"placeholders":{
						"element":{
							"earth":"{symbol heroCardEarthSmallSymbol}",
							"fire":"{symbol heroCardFireSmallSymbol}",
							"water":"{symbol heroCardWaterSmallSymbol}",
							"air":"{symbol heroCardAirSmallSymbol}",
						},
					},
				},
				"strongToElement":{
					"title":"Difesa elementale",
					"label":"Se hai {elementLimit} {element} o pi&ugrave; in gioco: +1{symbol heroCardDefenseSmallSymbol}",
					"placeholders":{
						"element":{
							"earth":"{symbol heroCardEarthSmallSymbol}",
							"fire":"{symbol heroCardFireSmallSymbol}",
							"water":"{symbol heroCardWaterSmallSymbol}",
							"air":"{symbol heroCardAirSmallSymbol}",
						},
					},
				},
				"affinityElement":{
					"title":"Affinita' elementale",
					"label":"Se hai {elementLimit} {element} o pi&ugrave; in gioco: +1{symbol heroCardAttackSmallSymbol}",
					"placeholders":{
						"element":{
							"earth":"{symbol heroCardEarthSmallSymbol}",
							"fire":"{symbol heroCardFireSmallSymbol}",
							"water":"{symbol heroCardWaterSmallSymbol}",
							"air":"{symbol heroCardAirSmallSymbol}",
						},
					},
				},
				"fearElement":{
					"title":"Timore elementale",
					"label":"Se hai {elementLimit} {element} o pi&ugrave; in gioco: -1{symbol heroCardAttackSmallSymbol}",
					"placeholders":{
						"element":{
							"earth":"{symbol heroCardEarthSmallSymbol}",
							"fire":"{symbol heroCardFireSmallSymbol}",
							"water":"{symbol heroCardWaterSmallSymbol}",
							"air":"{symbol heroCardAirSmallSymbol}",
						},
					},
				},
				"unsecure":{
					"title":"Insicurezza",
					"label":"Se hai {cardsLimit} {banner} o pi&ugrave; in gioco: -1{symbol heroCardAttackSmallSymbol}",
					"placeholders":{
						"banner":{
							"banner1":"{symbol heroCardBanner1SmallSymbol}",
							"banner2":"{symbol heroCardBanner2SmallSymbol}",
						},
					},
				},
				"envy":{
					"title":"Invidia",
					"label":"Se hai {cardsLimit} {banner} o pi&ugrave; in gioco: +1{symbol heroCardAttackSmallSymbol}",
					"placeholders":{
						"banner":{
							"banner1":"{symbol heroCardBanner1SmallSymbol}",
							"banner2":"{symbol heroCardBanner2SmallSymbol}",
						},
					},
				},
				"ranged":{
					"title":"A distanza",
					"label":"Se hai {actionsLimit} carte eroe o pi&ugrave; in gioco: +1{symbol heroCardAttackSmallSymbol}",
					"placeholders":{
					},
				},
				"close":{
					"title":"Ravvicinato",
					"label":"Se hai {actionsLimit} carte eroe meno in gioco: -1{symbol heroCardAttackSmallSymbol}",
					"placeholders":{
					},
				},
				"rapidity":{
					"title":"Rapidit&agrave;",
					"label":"Se hai {actionsLimit} carte eroe o pi&ugrave; in gioco: +1{symbol heroCardDefenseSmallSymbol}",
					"placeholders":{
					},
				},
				"slowness":{
					"title":"Lentezza",
					"label":"Se hai {actionsLimit} carte eroe o meno in gioco: -1{symbol heroCardDefenseSmallSymbol}",
					"placeholders":{
					},
				},
				"charmed":{
					"title":"Affascinato",
					"label":"Se hai {cardsLimit} {banner} o pi&ugrave; in gioco: -1{symbol heroCardDefenseSmallSymbol}",
					"placeholders":{
						"banner":{
							"banner1":"{symbol heroCardBanner1SmallSymbol}",
							"banner2":"{symbol heroCardBanner2SmallSymbol}",
						},
					},
				},
				"cautious":{
					"title":"Cautela",
					"label":"Se hai {cardsLimit} {banner} o pi&ugrave; in gioco: +1{symbol heroCardDefenseSmallSymbol}",
					"placeholders":{
						"banner":{
							"banner1":"{symbol heroCardBanner1SmallSymbol}",
							"banner2":"{symbol heroCardBanner2SmallSymbol}",
						},
					},
				},
				"trap":{
					"title":"Trappola",
					"label":"Difenditi con successo per vincere lo scontro",
					"placeholders":{
					},
				},
			},
			"quests":{
				"mainTheBoss":{
					"missionStartTitle":[
						"{villain-name}",
					],
					"missionStartText":[
						"{villain-name} ha intenzione di mettere in moto il suo piano proprio oggi! Sconfiggilo e torna qui per vincere!",
						"{villain-name} mander&agrave; i suoi sicari stanotte! Sconfiggilo e torna qui per vincere!",
						"{villain-name} ti ha sfidato in un duello all'ultimo sangue! Sconfiggilo e torna qui per vincere!",
					],
					"missionStartShortText":[
						"Sconfiggi {villain-name} e torna qui per vincere!",
					],
					"bossDefeatShortText":[
						"Ottimo lavoro! Torna a {room-entranceRoom}!",
					],
					"missionEndingTitle":[
						"Vittoria!",
					],
					"missionEndingText":[
						"Hai sconfitto {villain-name} e la tua missione &egrave; compiuta!",
						"{villain-name} sar&agrave; solo un ricordo. Hai compiuto la tua missione!",
						"{villain-name} &egrave; sconfitto! Missione compiuta!",
					],
				},
				"mainTheMissingKey":{
					"missionStartTitle":[
						"{villainKey-name}",
					],
					"missionStartText":[
						"Trova {villainKey-name}, sconfiggi {villain-name} e torna qui per vincere!",
						"Trova {villainKey-name}, sconfiggi {villain-name} e torna qui prima che scocchi la mezzanotte per vincere!",
						"{villain-name} sta per trovare {villainKey-name}! Fermalo e torna qui per vincere!",
					],
					"missionStartShortText":[
						"Trova {villainKey-name}, sconfiggi {villain-name} e torna qui per vincere!",
					],
					"missionEndingTitle":[
						"Vittoria!",
					],
					"missionEndingText":[
						"Hai sconfitto {villain-name} e la tua missione &egrave; compiuta!",
						"{villainKey-name} non &egrave; riuscito a rubare {villainKey-name}! Missione compiuta!",
						"{villainKey-name} &egrave; al sicuro! Missione compiuta!",
					],
					"keyFoundTitle":[
						"{villainKey-name}",
					],
					"keyFoundDescription":[
						"Hai dovuto girare in lungo e in largo ma, alla fine, hai trovato {villainKey-name}!",
						"In un forziere nascosto su una collina hai trovato {villainKey-name}!",
						"In una cassetta dietro un dipinto hai trovato {villainKey-name}!",
					],
					"keyFoundShortDescription":[
						"Hai trovato {villainKey-name}! Cerca di non perderla...",
					],
					"bossDefeatShortText":[
						"Hai eliminato {villain-name}! Torna a {room-entranceRoom}!",
					],
				},
				"mainTheGeneral":{
					"missionStartTitle":[
						"Il Seguace",
						"Il Discepolo",
						"L'Aiutante",
					],
					"missionStartText":[
						"Elimina {villain-name} e torna qui per vincere... ma fai attenzione. Potrebbe avere compagnia...",
						"{villain-name} &egrave; al villaggio con un suo sgherro... Eliminali e torna qui per vincere!",
						"Il piano sembrava perfetto ma {villain-name} si &egrave; portato un amico. Eliminali e torna qui per vincere!",
					],
					"missionStartShortText":[
						"Elimina {villain-name} e torna qui per vincere... ma fai attenzione. Potrebbe avere compagnia...",
					],
					"generalFoundTitle":[
						"{villainHelper-name}",
					],
					"generalIntroText":[
						"\"Non puoi fermare sua grandiosit&agrave; {villain-name}!\"",
						"\"{villain-name} ci salver&agrave; tutti!\"",
						"\"Lode a {villain-name}!\"",
					],
					"generalDefeatText":[
						"\"{villain-name} ti punir&agrave; per questo!\"",
						"\"{villain-name} mi vendicher&agrave;!\"",
						"\"L'importante &egrave; che {villain-name} sia salvo!\"",
					],
					"generalDescription":[
						"Ha cominciato ad adorare {villain-name} a 5 anni.",
						"{villain-name} lo ha scelto tra centinaia di pretendenti.",
						"{villain-name} &egrave; la sua unica ragione di vita.",
					],
					"generalDefeatShortText":[
						"Accidenti! {villainHelper-name} &egrave; fuggito! Trova {villain-name} prima che possa avvisarlo!",
					],
					"bossDescription":[
						"\"Vendicher&ograve; {villainHelper-name}!\"",
						"\"Come hai osato opporti ai miei sudditi?\"",
						"\"Raggiungerai {villainHelper-name} molto presto\"",
					],
					"bossDefeatShortText":[
						"Hai eliminato {villain-name}! Torna a {room-entranceRoom}!",
					],
					"missionEndingTitle":[
						"Vittoria!",
					],
					"missionEndingText":[
						"Hai sconfitto {villain-name} e {villainHelper-name}!",
						"{villain-name} e {villainHelper-name} sono solo un ricordo. Ce l'hai fatta!",
						"{villainHelper-name} &egrave; stato arrestato... ma {villain-name} &egrave; riuscito a fuggire. Torner&agrave;?",
					],
				},
				"mainTheFinalForm":{
					"missionStartTitle":[
						"All'Ultimo Sangue",
						"La Battaglia Finale",
						"Fino Alla Fine",
					],
					"missionStartText":[
						"Elimina {villain-name} e torna qui per vincere... ma fai attenzione. Questa volta sar&agrave; dura!",
						"Dopo cento anni {villain-name} &egrave; tornato. Eliminalo ancora una volta e torna qui. Ce la farai?",
						"Nessuno ha interrotto il rituale e {villain-name} &egrave; tornato, pi&ugrave; forte che mai. Rispediscilo da dove &egrave; venuto e torna qui... ma non sar&agrave; facile.",
					],
					"missionStartShortText":[
						"Sconfiggi {villain-name} e torna qui per vincere!",
					],
					"initialFormTitle":[
						"{villain-name}?",
					],
					"missionEndingTitle":[
						"Vittoria!",
					],
					"initalFormDefeatShortText":[
						"\"Credi di avermi battuto?\" Spostati in una casella qualsiasi in {roomId-finalBossRoom}.",
						"\"Ahahah!\" Spostati in una casella qualsiasi in {roomId-finalBossRoom}.",
						"\"Molto bene!\" Spostati in una casella qualsiasi in {roomId-finalBossRoom}.",
					],
					"finalFormDefeatShortText":[
						"Hai sconfitto {villain-name}! Spostati in una casella qualsiasi in {roomId-entranceRoom}.",
					],
					"missionEndingText":[
						"Hai sconfitto {villain-name} ancora una volta! Missione compiuta!",
						"{villain-name} &egrave; stato sconfitto! Le tue gesta verranno raccontate per secoli.",
						"La trappola di {villain-name} ha fallito e anche questa volta hai vinto! Ottimo lavoro!",
					],
				},
				"mainTheCurse":{
					"missionStartTitle":[
						"La Maledizione",
						"Il Castigo",
						"Il Sortilegio",
					],
					"missionStartText":[
						"Elimina {villain-name} e torna qui per vincere... ma fai attenzione. Qualcuno ti osserva...",
						"Da quando hai accettato di eliminare {villain-name} senti che qualcuno o qualcosa ti segue da molto vicino. Concludi la tua missione e torna qui per vincere.",
						"{villain-name} ha mandato qualcuno a tenerti d'occhio... ma questo non ti fermer&agrave;. Eliminalo e torna qui per vincere.",
					],
					"missionStartShortText":[
						"Sconfiggi {villain-name} e torna qui per vincere!",
					],
					"curseTitle":[
						"La Trappola",
						"Allo Scoperto",
						"Preso!",
					],
					"curseDescription":[
						"La vecchia signora che hai aiutato al mercato ti sussura \"{villain-name} ti maledice!\" prima di sparire nel nulla.",
						"Un bambino ti taglia la strada. {villain-name} ha i suoi stessi occhi. Qualcosa non va.",
						"Una figura incappucciata ti consegna una busta. All'interno c'&egrave; solo un foglio con scritto \"{villain-name}\". Senti mancare le forze.",
					],
					"curseShortDescription":[
						"\"Che tu sia maledetto!\"",
						"Tutto diventa buio.",
						"Non senti pi&ugrave; nulla.",
					],
					"bossDefeatShortText":[
						"Hai eliminato {villain-name}! Torna a {room-entranceRoom}!",
					],
					"missionEndingTitle":[
						"Vittoria!",
					],
					"missionEndingText":[
						"Nonostante i suoi trucchetti hai sconfitto {villain-name}! Ottimo lavoro!",
						"&Egrave; stata dura ma anche stavolta {villain-name} ha fallito. Ce l'hai fatta!",
						"Nemmeno l'inganno di {villain-name} &egrave; riuscito a eliminarti. Ce l'hai fatta ancora una volta!",
					],
				},
				"sideTheReward":{
					"missionStartTitle":[
						"Il Ricercato",
						"Il Fuggitivo",
						"L'Evaso",
					],
					"missionStartDescription":[
						"\"Sei qui per la taglia sulla mia testa, huh? Dovrai guadagnartela, pivello!\"",
						"\"Dimenticati la taglia sulla mia testa!\"",
						"\"A quanto ammonta la taglia sulla mia testa, pivello?\"",
					],
					"missionStartShortDescription":[
						"\"Sei qui per la mia taglia, huh?\"",
					],
					"enemyDescription":[
						"Si dice in giro che sia un assassino.",
						"Ha truffato diversi mercanti in giro per il mondo.",
						"&Egrave; il capo di una banda di ladri.",
					],
					"enemyDefeat":[
						"\"Schifoso mercenario...\"",
						"\"Posso darti pi&ugrave; soldi, amico!\"",
						"\"Hey! Parliamone, okay?\"",
					],
					"missionEndTitle":[
						"La Ricompensa",
						"La Taglia",
						"Il Compenso",
					],
					"missionEndDescription":[
						"\"Grazie per aver vendicato mio marito!\" Dice sorridendoti una giovane donna. Prima di andarsene ti porge un sacchetto.",
						"Un uomo si avvicina sorridendo. \"Mia moglie ti sar&agrave; grata, ovunque sia ora... Prendi questo.\"",
						"\"Qualcuno doveva farlo.\" Una figura incappucciata ti lancia un sacchetto pesante, ti volge le spalle e sparisce nella foresta.",
					],
				},
				"sideTheTheft":{
					"missionStartTitle":[
						"Il Furto",
						"Il Tesoro",
						"Il Piano",
					],
					"missionStartDescription":[
						"Si dice che da queste parti sia custodito un tesoro inestimabile. Dovresti chiedere in giro...",
						"Da qualche parte si nasconde un tesoro senza pari. Magari qualcuno pu&ograve; aiutarti...",
						"La mappa dice che da queste parti si nasconda un tesoro incredibile. Chi pu&ograve; aiutarti?",
					],
					"missionStartShortDescription":[
						"Dovrebbe esserci una mappa in questa stanza...",
					],
					"halfMissionTitle":[
						"Guardie Sospettose",
						"Falso Informatore",
						"Traditore",
					],
					"halfMissionStartDescription":[
						"\"Hey... fai troppe domande! Ecco cosa succede ai ficcanaso come te!\"",
						"\"Perch&egrave; vuoi saperlo, huh?\"",
						"\"Sai cosa succede a chi &egrave; troppo curioso?\"",
					],
					"halfMissionEnemyDescription":[
						"Non ama i tipi chiacchieroni.",
						"Dovresti fare pi&ugrave; attenzione la prossima volta.",
						"Sembrava un tipo affidabile...",
					],
					"halfMissionDefeat":[
						"Andr&agrave; meglio la prossima volta...",
						"Niente da fare...",
						"Nessuno sembra sapere nulla...",
					],
					"bossTitle":[
						"Il Ricco Mercante",
						"Il Riccone",
						"Il Collezionista",
					],
					"enemyDescription":[
						"Una volta era un marinaio.",
						"Dove si &egrave; procurato tutta questa roba?",
						"Ha imparato a combattere in giro per il mondo.",
					],
					"bossStartDescription":[
						"\"Guardie! Aiuto! Vuole derubarmi!\"",
						"\"Al ladro! Al ladro!\"",
						"\"Questa roba &egrave; mia!\"",
					],
				},
				"sideTheLostTechnique":{
					"missionStartTitle":[
						"La Tecnica Perduta",
						"L'Antica Tecnica",
						"La Tecnica Proibita",
					],
					"missionStartDescription":[
						"\"La via per l'illuminazione &egrave; lunga. Fammi vedere cosa sai fare!\"",
						"\"Dimostrami di essere colui che merita. Fatti sotto!\"",
						"\"Sembri forte, viaggiatore. L'apparenza mi inganna?\"",
					],
					"missionStartEnemyDescription":[
						"Ama il profumo dell'incenso.",
						"Ogni mattina si occupa della manutenzione del tempio.",
						"Prega ogni mattina ed ogni sera.",
					],
					"missionStartEnemyDefeat":[
						"\"Il Maestro ti aspetta.\"",
						"\"Sei pronto.\"",
						"\"Sei tu, quindi.\"",
					],
					"missionEndTitle":[
						"Il Maestro",
						"Il Saggio",
						"L'Antico",
					],
					"missionEndDescription":[
						"Ti fa cenno di avvicinarti e si mette in posa da battaglia.",
						"Si alza dal cuscino sul quale siedeva e si prepara.",
						"Smette di innaffiare una pianta e ti sorride.",
					],
					"missionEndEnemyDescription":[
						"Sembra sussurrare qualcosa...",
						"Il suo combattimento sembra una danza.",
						"Combatte usando una sola mano.",
					],
					"missionEndEnemyDefeat":[
						"\"Sei il prescelto.\"",
						"\"Tieni.\"",
						"\"&Egrave; tuo.\"",
					],
					"missionEndEnemyShortDefeat":[
						"\"Sei il prescelto.\"",
					],
				},
				"sideTheChest":{
					"missionStartTitle":[
						"Il Forziere",
						"La Cassa",
						"Il Bagaglio",
					],
					"missionStartText":[
						"A chi servono le chiavi?",
						"Non sembra cos&igrave; difficile da aprire.",
						"Forse, con un bel colpo...",
					],
					"missionEndShortText":[
						"Forziere aperto!",
					],
					"missionChestDescription":[
						"Hai il presentimento di sapere gi&agrave; cosa contiene...",
						"Il legno di questa cassa &egrave; davvero resistente!",
						"La serratura di questa cassa sembra proprio non volersi aprire...",
					],
				},
				"sideTheTrap":{
					"missionStartTitle":[
						"La Trappola",
						"Il Macchinario",
						"La Protezione",
					],
					"missionStartText":[
						"Puoi farcela!",
						"Basta un saltino...",
						"Avanti, coraggio!",
					],
					"missionEndShortText":[
						"Superata!",
					],
					"missionChestDescription":[
						"&Egrave; una trappola!",
						"Chi ha costruito questo macchinario infernale?",
						"Cosa star&agrave; difendendo?",
					],
				},
				"sideTheForge":{
					"missionStartTitle":[
						"La Forgia",
						"La Fucina",
					],
					"missionStartDescription":[
						"Poco fuori dal villaggio senti crepitare forgia elementale.",
						"Un fabbro compiaciuto sbuca da un vicolo. Che ci sia una forgia nei paraggi?",
						"Segui il martellare metallico sino ad una collina. Sopra crepita una forgia elementale.",
					],
					"missionStartShortDescription":[
						"Una forgia!",
					],
				},
				"sideTheHostage":{
					"missionStartTitle":[
						"L'Ostaggio",
						"Il Rapitore",
						"La Prigionia",
					],
					"missionStartDescription":[
						"\"Sei venuto senza soldi, uh? Te ne pentirai!\"",
						"\"Niente soldi, niente salvataggio!\"",
						"\"Dacci la roba e il tuo amico &egrave; libero!\"",
					],
					"enemyDescription":[
						"&Egrave; un rapitore professionista!",
						"Devi fermarlo a tutti i costi!",
						"Chi avr&agrave; rapito?",
					],
					"enemyDefeat":[
						"\"Li... liberate quel tizio! Scappiamo!\"",
						"\"Via! Via! Via!\"",
						"\"Lasciatelo... libero!\"",
					],
					"missionEndTitle":[
						"Libert&agrave;!",
						"Finalmente Libero",
						"Catene Spezzate",
					],
					"missionEndShortFireDescription":[
						"Mago del fuoco liberato!",
					],
					"missionEndFireDescription":[
						"Un ragazzo dai capelli rossi esce da un capanno. \"La confraternita del Fuoco ti &egrave; debitore, viaggiatore! Ti aiuter&ograve; nella tua prossima battaglia!\"",
						"Le fiamme avvolgono la capanna e dalle macerie spunta una donna dalla tunica rossa. \"Andiamo a bruciare qualche cattivo!\"",
						"Un cucciolo dalla coda fiammeggiante trotterella verso di te. Sembra molto riconoscente!",
					],
					"missionEndShortEarthDescription":[
						"Mago della terra liberato!",
					],
					"missionEndEarthDescription":[
						"Una donna dalla pelle di pietra si libera dai lacci. \"Sembri in gamba... andiamo a spaccare qualche testa insieme!\"",
						"Un ragazzo fatto di sabbia emerge da un sacchetto. \"&Egrave; il momento di far vedere chi sono.\"",
						"Un serpente scatta da un vaso intarsiato, si avvolge al tuo braccio e sembra attendere l'inizio di una nuova battaglia.",
					],
					"missionEndShortWaterDescription":[
						"Mago dell'acqua liberato!",
					],
					"missionEndWaterDescription":[
						"Da una giara si materializza una creatura d'acqua. \"Mi hai dato aiuto. Ti render&ograve; il favore.\"",
						"Una donna dal corpo trasparente e fredda come il ghiaccio ti sorride. \"Ti aiuter&ograve;, viaggiatore.\"",
						"Una creatura muscolosa fatta di alghe e conchiglie si libera dalle catene. \"Avanti, andiamo!\"",
					],
					"missionEndShortAirDescription":[
						"Mago dell'aria liberato!",
					],
					"missionEndWindDescription":[
						"Una creatura pennuta dal becco giallo e la faretra in spalla cinguetta verso di te. Con le ali ti fa cenno di seguirla.",
						"Una fresca brezza sembra uscire da una piccola scatola, ti accarezza il viso e ti sussurra: \"Andiamo a fare un giro, si?\"",
						"Una corpulenta creatura fatta d'aria si libera dalla giara troppo stetta che lo teneva imprigionato. \"Andiamo! Ho fame!\"",
					],
				},
				"eventHealer":{
					"missionStartTitle":[
						"Il Monaco Perduto",
						"Il Primo Monaco",
						"Il Vecchio Monaco",
					],
					"missionStartShortDescription":[
						"Un monaco interrompe la sua preghiera e ti tende la mano.",
					],
					"missionStartDescription":[
						"Sembra assorto in preghiera. Ad un tratto interrompe la sua sommessa cantilena e si rivolge a te. \"Ti stai battendo duramente. Lascia che allevi il tuo dolore.\"",
						"Sbuffando, si stringe la cintura di corda attorno alla vita. \"Vieni! Mangiamo un boccone insieme!\"",
						"Chiude con un forte tonfo l'enorme libro sul quale stava scrivendo. Ti rivolge un sorriso mite. \"Avvicinati. Non aver paura.\"",
					],
				},
				"eventBannerChallenge":{
					"missionStartTitle":[
						"Il Fanatico Di Stendardi",
						"La Parata Degli Stendardi",
						"La Mania Degli Stendardi",
					],
					"missionStartDescription":[
						"Da un paio di occhiali spessi, un ragazzino smilzo ti fulmina col suo sguardo vispo. \"Un altro appassionato di stendardi! Giochiamo!\"",
						"\"Avvicinati, avvicinati!\" Una ragazzina fin troppo esuberante ti trascina in un piccolo piazzale pieno di stendardi. \"Avanti, giochiamo!\"",
						"\"Stendardi! Stendardi!\" Un omone grida dal fondo del vicolo. \"Hey, tu! Vieni qua! Anche tu hai degli stendardi! Giochiamo!\"",
					],
				},
				"eventShop":{
					"missionStartTitle":[
						"Il Commerciante Temerario",
						"Il Coraggioso Mercante",
						"Il Mercante Vagabondo",
					],
					"missionStartShortDescription":[
						"Cosa ci fa un mercante in questo posto?",
					],
					"missionStartDescription":[
						"Si accarezza la barba ispida e nera, per poi allargare un gran sorriso. \"Hey, ti va di fare affari?\"",
						"\"Sembri un tipo a posto! Facciamo affari?\" Una giovane ragazza ti chiama da una bancarella piuttosto sospetta.",
						"\"Viaggiatori! Eroi! Avvicinatevi! Grandi affari per tutti!\" Come pu&ograve; un ragazzino cos&igrave; smilzo avere quella voce?",
					],
				},
				"eventSwap":{
					"missionStartTitle":[
						"Il Sergente",
						"Il Salutista",
						"L'Allenatore",
					],
					"missionStartShortDescription":[
						"Un soldato insiste nel farti fare esecizio.",
					],
					"missionStartDescription":[
						"\"Recluta!\" Tuona il sergente. \"&Egrave; il momento di fare un po' di esercizio!\"",
						"\"Dove hai messo i muscoli, huh?\" Ti intima un soldato. \"Ti serve fare ginnastica!\"",
						"\"Uno! Due! Uno! Due!\" Un anziano militare corre sul posto senza sosta. \"Giovane! Con me!\"",
					],
				},
				"eventRecover":{
					"missionStartTitle":[
						"Il Necromante",
						"Il Traghettatore",
					],
					"missionStartShortDescription":[
						"\"La morte non &egrave; la fine.\"",
					],
					"missionStartDescription":[
						"Volgendoti le spalle, mormora dal suo mantello nero come la notte: \"Che i morti possano tornare!\"",
						"\"La morte non &egrave; che un passaggio.\" La figura in nero smette di fumare. \"C'&egrave; chi va e chi viene.\"",
						"\"Non temere la morte.\" Le sue dita lasciano il pianoforte. \"Non temere il suo ciclo senza fine.\"",
					],
				},
				"eventQuiet":{
					"missionStartTitle":[
						"Il Corridoio",
						"Il Passaggio",
						"La Strettoia",
					],
					"missionStartShortDescription":[
						"I tuoi passi rimbombano per tutta la stanza. Almeno sei al sicuro.",
						"Un po' di quiete, finalmente. Passi del tempo a controllare l'equipaggiamento.",
						"Non accade nulla. Finalmente un po' di sano riposo!",
					],
					"missionStartDescription":[
						"I tuoi passi rimbombano per un lungo corridoio illuminato. Almeno sei al sicuro.",
						"Un po' di quiete, finalmente. Passi del tempo a controllare l'equipaggiamento.",
						"Non accade nulla. Finalmente un po' di sano riposo!",
					],
				},
				"eventWeakness":{
					"missionStartTitle":[
						"Il Percorso Tortuoso",
						"Il Rallentamento",
						"L'Imprevisto",
					],
					"missionStartDescription":[
						"Decidi di attraversare una pozza di fanghiglia ed impieghi qualche ora per uscirne.",
						"Una cintura cede e il tuo equipaggiamento cade a terra. Ci vorr&agrave; un p&ograve; per raccoglierlo.",
						"D'un tratto senti le gambe pesanti. Riposi per qualche minuto, cercando qualche puntura sulla pelle.",
					],
					"missionStartShortDescription":[
						"Decidi di attraversare una pozza di fanghiglia ed impieghi qualche ora per uscirne.",
						"Una cintura cede e l'equipaggiamento cade a terra. Ci vorr&agrave; un p&ograve; per raccoglierlo.",
						"D'un tratto senti le gambe pesanti. Riposi, cercando qualche puntura sulla pelle.",
					],
				},
				"eventCamp":{
					"missionStartTitle":[
						"L'Accampamento",
					],
					"missionStartBurnDescription":[
						"Degli alberi disposti in cerchio attorno a una pianura brulla. &Egrave; il posto perfetto per accendere un fuoco e riposare!",
						"Trasporti molta carne cruda. Che sia il momento di sbarazzarsene con una buona cena, accendendo un fuoco?",
						"La pioggia ha reso i tuoi vestiti fradici. Un fuoco aiuterebbe di certo ad asciugarli...",
					],
					"missionStartBurnShortDescription":[
						"&Egrave; il posto perfetto per accendere un fuoco e riposare.",
						"Con un fuoco potresti cucinare.",
						"Dovresti asciugare i vestito con un fuoco.",
					],
					"missionStartWaterDescription":[
						"Nella vallata un albero rinsecchito sembra emanare una luce fioca. Magari, innaffiandola...",
						"Il sole bollente ha reso la tua gola arida. Ti servirebbe un goccio d'acqua ma il corso d'acqua pi&ugrave; vicino &egrave; distante chilometri.",
						"Non incroci una locanda da molto tempo... e hai il sospetto che ti serva un buon bagno.",
					],
					"missionStartWaterShortDescription":[
						"Un albero magico ha bisogno di acqua.",
						"Ti serve un sorso d'acqua.",
						"Sospetti ti serva un buon bagno.",
					],
					"missionStartDigDescription":[
						"Una gemma incastonata nella roccia sembra chiedere il tuo aiuto. Con una magia potresti riuscire ad estrarla...",
						"Una roccia enorme blocca il passaggio verso una grotta decisamente interessante. La magia potrebbe aiutarti a romperla!",
						"Uno enorme specchio d'acqua interrompe il tuo viaggio. Potrsti costruire un ponte di roccia con la magia...",
					],
					"missionStartDigShortDescription":[
						"Frantumando una roccia potresti raccogliere una gemma.",
						"Una roccia blocca un cunicolo.",
					],
					"missionStartBlowDescription":[
						"Un mulino &egrave; stato abbandonato in fretta e furia. Con un po' di vento potresti produrre un po' di farina.",
						"Secondo le indicazioni si nasconde un tesoro alla fine di un sentiero ma una fitta nebbia non ti permette di proseguire.",
						"Un ragazzino chiede aiuto, appeso a una radice in un profondo precipizio! Potresti sollevarlo con una folata di vento...",
					],
					"missionStartBlowShortDescription":[
						"Vedi un complesso meccanismo con delle grosse pale eoliche.",
						"Nella nebbia si nasconde un oggetto scintillante.",
					],
				},
				"eventBidirectionalTeleport":{
					"missionStartShortText":[
						"Non appena tocchi il sigillo sparisci nel nulla. Spostati in una casella qualsiasi in {roomId-room2}.",
					],
					"missionEndShortText":[
						"Non appena tocchi il sigillo sparisci nel nulla. Spostati in una casella qualsiasi in {roomId-room1}.",
					],
				},
				"eventTeleportTrap":{
					"missionStartShortText":[
						"Non appena tocchi il sigillo sparisci nel nulla. Spostati in una casella qualsiasi in {roomId-trapRoom}.",
					],
				},
				"eventDarkRitual":{
					"missionStartTitle":[
						"Il Rituale",
						"Il Rito",
						"Il Sacrificio",
					],
					"missionStartDescription":[
						"Alcuni monaci incappucciati si dispongono in cerchio attorno a te. \"Un sacrificio di sangue...\" sibila uno di loro.",
						"\"Il tuo sangue...\" Sussurra una donna incappucciata. \"Donacelo. Ti ricompenseremo!\" continua poi ridacchiando.",
						"Una cantilena senza senso ti entra nella testa, sussurrandoti: \"Dammi sangue, ti dar&ograve; il mio potere!\"",
					],
					"missionStartShortDescription":[
						"Dei monaci ti propongono un sacrificio di sangue.",
					],
				},
				"eventMigration":{
					"missionStartTitle":[
						"La Migrazione",
						"Il Viaggio",
						"La Carovana",
					],
					"missionStartDescription":[
						"Vedi passare una lunga carovana. Chiss&agrave; dove &egrave; diretta...",
						"All'orizzonte vedi passare una lunga fila di carri ordinati. Ti unirai a loro?",
						"Il trottare dei cavalli rimbomba per la vallata, accompagnando una fila di pellegrini...",
					],
				},
				"eventObservatory":{
					"missionStartTitle":[
						"L'Osservatorio",
						"Gli Astri",
						"L'Astrolabio",
					],
					"missionStartDescription":[
						"Un anziano signore distoglie lo sguardo dal suo enorme cannocchiale. \"Potresti chiedere aiuto alle stelle...\"",
						"\"Le stelle\" stride un'anziana signora. \"Loro sanno tutto. Cercale.\"",
						"Lanci uno sguardo verso il cielo e decine di stelle cadenti solcano il cielo. Le stelle vogliono aiutarti?",
					],
					"missionStartShortDescription":[
						"Cerchi aiuto tra le stelle...",
						"Senti il richiamo delle stelle...",
					],
				},
				"eventGambler":{
					"missionStartTitle":[
						"La Scommessa",
						"Il Rischio",
						"Il Gioco",
					],
					"missionStartDescription":[
						"Una figura misteriosa mescola lentamente un mazzo di carte tra le ombre di un vicolo. \"Hey, viaggiatore! Una scommessina?\"",
						"\"Quanto oro hai li, eh? Che fortuna...\" Una figura misteriosa gira una coppia di dadi tra le dita. \"Ne vuoi dell'altro?\"",
						"Una piccola folla avvolge &egrave; una figura minuta alle prese con dei bicchieri capovolti. \"Dai, scommettiamo!\"",
					],
					"missionStartShortDescription":[
						"\"Scommettiamo!\"",
					],
				},
				"eventSacrifice":{
					"missionStartTitle":[
						"Il Sacrificio",
						"L'Esecuzione",
						"La Punizione",
					],
					"missionStartDescription":[
						"La folla si &egrave; accalcata attorno a un rogo. \"Bruciatela! &Egrave; una strega!\" Farai qualcosa per salvare la ragazza?",
						"Un gruppo di loschi figuri sta prendendo a calci una figura minuta in un vicolo. Farai qualcosa?",
						"Un assassino appostato su un tetto ha preso di mira una ragazza. Se non farai qualcosa per lei sar&agrave; la fine. Farai qualcosa?",
					],
					"missionStartShortDescription":[
						"\"Devo salvare quella donna dal rogo!\"",
						"\"Devo salvare quel bambino!\"",
						"\"Se non faccio qualcosa finir&agrave; male!\"",
					],
				},
			},
		},
		"en":{
			"name":"English",
			"homepage":{
				"unwrap":"Unwrap!",
				"notes":"Best on Firefox/Chrome",
				"by":"by",
				"sourcesAt":"Sources at",
				"learnHowToPlay":"Learn how to play",
				"pleaseWait":"Please wait...",
				"unwrapping":[
					"Tearing off the strip...",
					"Looking for scissors...",
					"Unwrapping...",
				],
				"instructions":[
					"{header}Thank you for downloading today's new pack of {title} cards!{endHeader}",
					"If you're new to the game, you can learn how to prepare your first set and play your first adventure on the {accent}game manual{endAccent} {manualLink}here{endManualLink}.",
					"There is a new pack of {title} cards every day, so if you want to expand your game with new heroes and adventures, see you here tomorrow!",
				],
				"settings":"Settings",
				"confirm":"OK",
				"printMode":"Print mode",
				"printModes":{
					"default":{
						"label":"Default",
						"description":"The PDF must be printed on 2 different A4 sheets, cut, and constructed using 9 card sleeves and 9 poker cards or cardboard rectangles following the game manual instructions. This way the cards are nicer, solid, and easier to shuffle but they need more work to be assembled.",
					},
					"doublesided":{
						"label":"Double-sided",
						"description":"The PDF must be printed on 2 sides of the same A4 sheet on the long edge and just cut following the dashed lines. This way the cards may not be exactly centered, less solid, and a little harder to shuffle but they are way faster to assemble.",
					},
				},
				"learnHowToPlayTheGame":"Learn how to play {title}!",
				"theGameManual":"The Game Manual",
				"faqs":"FAQs",
				"faqsList":[
					{
						"section":"Card Packs",
						"questions":[
							{
								"q":"Is it possible to access card packs from previous days?",
								"a":"At the moment there is no official way to access older card packs but the question is on the table from the very beginning of the project - and its prequel. This game wasn't thought of as a game the player rushes dungeon after dungeon, and I wanted to test the idea of players collecting and sharing card packs. But the game has changed a lot since its prequel launch so things may change in the future.",
							},
							{
								"q":"But I want to collect all of the {title} card packs!",
								"a":"{title}'s contents are selected and remixed daily, so any content you missed will probably return in the future. Feel free to scribble on cards anything that comes to your mind while you play, get creative, and imagine your own adventure - that's a card pack that's worthy to be collected!",
							},
						],
					},
					{
						"section":"More",
						"questions":[
							{
								"q":"How you're monetizing this game?",
								"a":"{title} is one of my hobby projects and, as for the {anchor}https://github.com/kesiev{anchorBody}others{endAnchor}, I'm working on it in my spare time and it is released as opensource. I'm used to paying for hosting my stuff without getting anything back. So, yeah. I'm OK. If you find something I do that you like it's more than enough for me.",
							},
							{
								"q":"I'd like to play this game... with dice!",
								"a":"You can play {accent}Chronicles of Stampadia{endAccent}, {title}'s prequel! Just like this game, every day there is a new adventure to print and play with a pencil, an eraser, two dice, and a small token. You can find that {anchor}https://www.kesiev.com/stampadia{anchorBody}here{endAnchor}. Oh, It's English only... I hope that's not a problem for you.",
							},
							{
								"q":"I have more questions!",
								"a":"Don't worry! There's a Discord server {anchor}https://discord.gg/EDYP2N4RMn{anchorBody}here{endAnchor} - we talk about everything Stampadia there and you may ask questions about the rules in the #tos-en-help-rules channel.",
							},
						],
					},
				],
				"readTheManual":"Read {manualLink}this manual{endManualLink} to learn everything you need to explore and fight in the world of {accent}Stampadia{endAccent}! ",
			},
			"entities":{
				"banners":{
					"bannerAny":"",
					"banner1":"{symbol heroCardBanner1SmallSymbol}",
					"banner2":"{symbol heroCardBanner2SmallSymbol}",
					"bannerChoice":"you choose",
				},
				"resources":{
					"attack":"{symbol heroCardAttackSmallSymbol}",
					"defense":"{symbol heroCardDefenseSmallSymbol}",
					"mana":"{symbol heroCardManaSmallSymbol}",
				},
				"cardTypes":{
					"star1":"{symbol heroCardStar1SmallSymbol}",
					"star2":"{symbol heroCardStar2SmallSymbol}",
					"banner1":"{symbol heroCardBanner1SmallSymbol}",
					"banner2":"{symbol heroCardBanner2SmallSymbol}",
					"earth":"{symbol heroCardEarthSmallSymbol}",
					"fire":"{symbol heroCardFireSmallSymbol}",
					"water":"{symbol heroCardWaterSmallSymbol}",
					"air":"{symbol heroCardAirSmallSymbol}",
				},
				"loot":{
					"attack":"+1{symbol heroCardAttackSmallSymbol}",
					"defense":"+1{symbol heroCardDefenseSmallSymbol}",
					"mana":"+1{symbol heroCardManaSmallSymbol}",
				},
				"cards":[
					"{value} card",
					"{value} cards",
				],
				"used":[
					"used",
					"used",
				],
				"times":[
					"{value} time",
					"{value} times",
				],
			},
			"places":{
				"inHandOrDiscard":"",
				"inHand":"in hand",
				"inDiscardPile":"in discard",
			},
			"formatting":{
				"skipEndOn":[
					".",
					"!",
					"?",
					":",
					"\n",
				],
				"effectEnd":".",
			},
			"heroCard":{
				"condition":{
					"pay":0,
					"valueFormatters":{
						"stars":[
							0,
							"{symbol heroCardStar1SmallSymbol}",
							"{symbol heroCardStar2SmallSymbol}",
						],
					},
					"subjects":{
						"inPlay":"in play",
						"previousCard":"the previous card is",
					},
					"checkConstellation":{
						"inPlay":"{constellation} in play",
						"inHand":"{constellation} in hand",
					},
					"check":{
						"playedCardsCount":{
							"lessEqualThan":"{value} cards or less {subject}",
							"greaterEqualThan":"{value} cards or more {subject}",
							"equal":"{value} cards {subject}",
						},
						"defense":{
							"lessEqualThan":"{symbol heroCardDefenseSmallSymbol} is {value} or less",
							"greaterEqualThan":"{symbol heroCardDefenseSmallSymbol} is {value} or more",
							"equal":"{symbol heroCardDefenseSmallSymbol} is {value}",
						},
						"attack":{
							"lessEqualThan":"{symbol heroCardAttackSmallSymbol} is {value} or less",
							"greaterEqualThan":"{symbol heroCardAttackSmallSymbol} is {value} or more",
							"equal":"{symbol heroCardAttackSmallSymbol} is {value}",
						},
						"banner1":{
							"lessEqualThan":"{value} {symbol heroCardBanner1SmallSymbol} or less {subject}",
							"greaterEqualThan":"{value} {symbol heroCardBanner1SmallSymbol} or more {subject}",
							"equal":"{value} {symbol heroCardBanner1SmallSymbol} {subject}",
						},
						"banner2":{
							"lessEqualThan":"{value} {symbol heroCardBanner2SmallSymbol} or less {subject}",
							"greaterEqualThan":"{value} {symbol heroCardBanner2SmallSymbol} or more {subject}",
							"equal":"{value} {symbol heroCardBanner2SmallSymbol} {subject}",
						},
						"fire":{
							"lessEqualThan":"{value} {symbol heroCardFireSmallSymbol} or less {subject}",
							"greaterEqualThan":"{value} {symbol heroCardFireSmallSymbol} or more {subject}",
							"equal":"{value} {symbol heroCardFireSmallSymbol} {subject}",
						},
						"water":{
							"lessEqualThan":"{value} {symbol heroCardWaterSmallSymbol} or less {subject}",
							"greaterEqualThan":"{value} {symbol heroCardWaterSmallSymbol} or more {subject}",
							"equal":"{value} {symbol heroCardWaterSmallSymbol} {subject}",
						},
						"earth":{
							"lessEqualThan":"{value} {symbol heroCardEarthSmallSymbol} or less {subject}",
							"greaterEqualThan":"{value} {symbol heroCardEarthSmallSymbol} or more {subject}",
							"equal":"{value} {symbol heroCardEarthSmallSymbol} {subject}",
						},
						"air":{
							"lessEqualThan":"{value} {symbol heroCardAirSmallSymbol} or less {subject}",
							"greaterEqualThan":"{value} {symbol heroCardAirSmallSymbol} or more {subject}",
							"equal":"{value} {symbol heroCardAirSmallSymbol} {subject}",
						},
						"stars":{
							"lessEqualThan":"{formattedValue} or less {subject}",
							"greaterEqualThan":"{formattedValue} or more {subject}",
							"equal":"{formattedValue} {subject}",
						},
					},
				},
				"smallTextSeparator":" - ",
				"optionsSeparator":" ",
				"exhaust":{
					"label":"Exhaust",
					"top":{
						"cost":{
							"mana":"-{value} {symbol heroCardManaTinySymbol} or turn, discard",
						},
						"nocost":"turn and discard",
					},
					"bottom":{
						"cost":{
							"mana":"-{value} {symbol heroCardManaTinySymbol} to discard or remove",
						},
						"nocost":"remove",
					},
				},
				"effect":{
					"gainTick":{
						"action":"if possible, fill the leftmost box",
						"gain":{
							"attack":"(the leftmost bonus) {symbol heroCardAttackSmallSymbol}",
							"defense":"(the leftmost bonus) {symbol heroCardDefenseSmallSymbol}",
							"mana":"(the leftmost bonus) {symbol heroCardManaSmallSymbol}",
						},
					},
					"gain":{
						"attack":"+{value} {symbol heroCardAttackSmallSymbol}",
						"defense":"+{value} {symbol heroCardDefenseSmallSymbol}",
						"mana":"+{value} {symbol heroCardManaSmallSymbol}",
					},
					"set":{
						"attack":"{symbol heroCardAttackSmallSymbol} = {value}",
						"defense":"{symbol heroCardDefenseSmallSymbol} = {value}",
						"mana":"{symbol heroCardManaSmallSymbol} = {value}",
					},
					"pay":{
						"attack":"pay {value} {symbol heroCardAttackSmallSymbol}",
						"defense":"pay {value} {symbol heroCardDefenseSmallSymbol}",
						"mana":"pay {value} {symbol heroCardManaSmallSymbol}",
					},
					"multiplyBy":{
						"attack":"{symbol heroCardAttackSmallSymbol} {symbol heroCardMultiplyTinySymbol} {value}",
						"defense":"{symbol heroCardDefenseSmallSymbol} {symbol heroCardMultiplyTinySymbol} {value}",
						"mana":"{symbol heroCardManaSmallSymbol} {symbol heroCardMultiplyTinySymbol} {value}",
					},
					"pickFrom":{
						"infuse":"take back up to {cards} {used} to Infuse",
					},
					"transfer":{
						"attack":{
							"defense":"transfer {symbol heroCardAttackSmallSymbol} to {symbol heroCardDefenseSmallSymbol}",
						},
						"defense":{
							"attack":"transfer {symbol heroCardDefenseSmallSymbol} to {symbol heroCardAttackSmallSymbol}",
						},
					},
				},
				"classes":{
					"swordsman":{
						"name":[
							"The Swordsman",
						],
						"description":[
							"Uses defense and attack to eliminate enemies",
						],
						"skills":{
							"baseAttack1":{
								"label":"{value} base attack",
								"valueGenre":"male",
							},
							"baseDefense1":{
								"label":"{value} base defense",
								"valueGenre":"male",
							},
							"strongAttack1":{
								"label":"{value} strong attack",
								"valueGenre":"male",
							},
							"strongDefense1":{
								"label":"{value} firm defense",
								"valueGenre":"male",
							},
							"baseAttack2":{
								"label":"{value} base attack+",
								"valueGenre":"male",
							},
							"baseDefense2":{
								"label":"{value} base defense+",
								"valueGenre":"male",
							},
							"strongAttack2":{
								"label":"{value} critical attack",
								"valueGenre":"male",
							},
							"strongDefense2":{
								"label":"{value} critical defense",
								"valueGenre":"male",
							},
							"basicAttack1":{
								"label":"{value} momentum",
								"valueGenre":"male",
							},
							"basicAttack2":{
								"label":"{value} charge",
								"valueGenre":"male",
							},
							"basicSpecial1":{
								"label":"{value} preparation",
								"valueGenre":"male",
							},
							"basicSpecial2":{
								"label":"{value} hate",
								"valueGenre":"male",
							},
							"advancedAttack1":{
								"label":"{value} stunning attack",
								"valueGenre":"male",
							},
							"advancedAttack2":{
								"label":"{value} agility",
								"valueGenre":"male",
							},
							"advancedSpecial1":{
								"label":"{value} frenzy",
								"valueGenre":"male",
							},
							"advancedSpecial2":{
								"label":"{value} protection",
								"valueGenre":"male",
							},
							"legacyAttack":{
								"label":"the way of the warrior",
								"valueGenre":"male",
							},
						},
					},
					"elementalist":{
						"name":[
							"The Elementalist",
						],
						"description":[
							"Uses elements to attack and defense",
						],
						"skills":{
							"baseAttack1":{
								"label":"{value} flash",
								"valueGenre":"male",
							},
							"baseDefense1":{
								"label":"{value} defense",
								"valueGenre":"male",
							},
							"strongAttack1":{
								"label":"{value} projectile",
								"valueGenre":"male",
							},
							"strongDefense1":{
								"label":"{value} shield",
								"valueGenre":"male",
							},
							"baseAttack2":{
								"label":"{value} stream",
								"valueGenre":"male",
							},
							"baseDefense2":{
								"label":"{value} wall",
								"valueGenre":"male",
							},
							"strongAttack2":{
								"label":"{value} arc",
								"valueGenre":"male",
							},
							"strongDefense2":{
								"label":"{value} wall",
								"valueGenre":"male",
							},
							"concentration":{
								"label":"{value} concentration",
								"valueGenre":"male",
							},
							"balance":{
								"label":"{value} scale",
								"valueGenre":"male",
							},
							"compression":{
								"label":"{value} compression",
								"valueGenre":"male",
							},
							"decompression":{
								"label":"{value} expansion",
								"valueGenre":"male",
							},
							"excess":{
								"label":"{value} excess",
								"valueGenre":"male",
							},
							"emptiness":{
								"label":"{value} void",
								"valueGenre":"male",
							},
							"quiet":{
								"label":"{value} quiet",
								"valueGenre":"male",
							},
							"legacyElemental":{
								"label":"specialist {value}",
								"valueGenre":"male",
							},
						},
					},
					"stargazer":{
						"name":[
							"The Stargazer",
						],
						"description":[
							"Search the stars for resources",
						],
						"skills":{
							"baseAttack1":{
								"label":"{value} ray",
								"valueGenre":"male",
							},
							"baseDefense1":{
								"label":"{value} ring",
								"valueGenre":"male",
							},
							"strongAttack1":{
								"label":"{value} meteor",
								"valueGenre":"male",
							},
							"strongDefense1":{
								"label":"{value} atmosphere",
								"valueGenre":"male",
							},
							"baseAttack2":{
								"label":"{value} light",
								"valueGenre":"male",
							},
							"baseDefense2":{
								"label":"{value} mirror",
								"valueGenre":"male",
							},
							"strongAttack2":{
								"label":"{value} sun",
								"valueGenre":"male",
							},
							"strongDefense2":{
								"label":"{value} moon",
								"valueGenre":"male",
							},
							"glare":{
								"label":"{value} glare",
								"valueGenre":"male",
							},
							"gaze":{
								"label":"{value} gaze",
								"valueGenre":"male",
							},
							"reduction":{
								"label":"{value} reduction",
								"valueGenre":"male",
							},
							"zoomin":{
								"label":"{value} zoom in",
								"valueGenre":"male",
							},
							"zoomout":{
								"label":"{value} zoom out",
								"valueGenre":"male",
							},
							"erasing":{
								"label":"{value} erasing",
								"valueGenre":"male",
							},
							"tracing":{
								"label":"{value} tracing",
								"valueGenre":"male",
							},
							"blackHole":{
								"label":"{value} black hole",
								"valueGenre":"male",
							},
							"nebula":{
								"label":"{value} nebula",
								"valueGenre":"male",
							},
							"legacyAttack":{
								"label":"the way of the stargazer",
								"valueGenre":"male",
							},
						},
					},
				},
				"perks":{
					"safe":{
						"male":"sure",
						"female":"sure",
					},
					"flaming":{
						"male":"burning",
						"female":"burning",
					},
					"overwhelming":{
						"male":"overwhelming",
						"female":"overwhelming",
					},
					"cutting":{
						"male":"cutting",
						"female":"cutting",
					},
					"erosive":{
						"male":"erosive",
						"female":"erosive",
					},
					"combo":{
						"male":"combined",
						"female":"combined",
					},
					"banner":{
						"male":"banner",
						"female":"banner",
					},
					"efficient":{
						"male":"efficient",
						"female":"efficient",
					},
					"of1_earth":{
						"male":"earth",
						"female":"earth",
					},
					"of1_air":{
						"male":"aerial",
						"female":"aerial",
					},
					"of1_fire":{
						"male":"fiery",
						"female":"fiery",
					},
					"of1_water":{
						"male":"water",
						"female":"water",
					},
					"of2_earth":{
						"male":"of earth",
						"female":"of earth",
					},
					"of2_air":{
						"male":"of air",
						"female":"of air",
					},
					"of2_fire":{
						"male":"of fire",
						"female":"of fire",
					},
					"of2_water":{
						"male":"of water",
						"female":"of water",
					},
					"of3_earth":{
						"male":"brown",
						"female":"brown",
					},
					"of3_air":{
						"male":"white",
						"female":"white",
					},
					"of3_fire":{
						"male":"red",
						"female":"red",
					},
					"of3_water":{
						"male":"blue",
						"female":"blue",
					},
				},
			},
			"narrative":{
				"names":{
					"villainKey":[
						"The Key",
						"The Seal",
						"The Rune",
					],
					"villainHelper":[
						"The Sorcerer",
						"The Priest",
						"The Follower",
					],
				},
				"villain":{
					"evilLord":{
						"name":[
							"The Lord of Evil",
							"The Dark Lord",
							"The Emperor",
						],
						"description":[
							"Nobody will stop their plans!",
							"It is said to be hundreds of years old.",
							"It is unstoppable!",
						],
						"intro":[
							"\"You can't beat me!\"",
							"\"It's useless!\"",
							"\"Your end is near!\"",
						],
						"defeat":[
							"\"Damn! My revenge will be terrible!\"",
							"\"Damn you! I'll be back!\"",
							"\"I... will come back!\"",
						],
						"initialFormDefeat":[
							"\"You think you defeated me, huh?\"",
							"\"Very good...\"",
							"\"Let's get serious then!\"",
						],
						"finalFormIntro":[
							"\"Get ready to face my true form!\"",
							"\"Your end has come!\"",
							"\"You thought you won, huh?\"",
						],
						"finalFormDefeat":[
							"\"Damn!\"",
							"\"Nooo!\"",
							"\"Impossible!\"",
						],
					},
					"nightmare":{
						"name":[
							"The Nightmare",
							"The Terror",
							"The Darkness",
						],
						"description":[
							"You met him in your dreams.",
							"A shiver runs down your spine.",
							"Their gaze seems to go through you.",
						],
						"intro":[
							"\"Sweet dreams!\"",
							"\"Close your eyes...\"",
							"\"Good night...\"",
						],
						"defeat":[
							"\"See you in your nightmares!\"",
							"\"I'll always be with you...\"",
							"\"We will meet again...\"",
						],
						"initialFormDefeat":[
							"\"Time to get serious!\"",
							"\"Poor dreamer!\"",
							"\"Now wake up...\"",
						],
						"finalFormIntro":[
							"\"Your dream is now a nightmare!\"",
							"\"Let's end this!\"",
							"\"You'll sleep forever!\"",
						],
						"finalFormDefeat":[
							"\"How is it possible?!\"",
							"\"It's... not...\"",
							"\"Gaaah!\"",
						],
					},
					"kingGoblin":{
						"name":[
							"The Goblin King",
							"The Great Goblin",
							"The Goblin King",
						],
						"description":[
							"It's huge!",
							"They could crush you with one hand.",
							"Their skin is very hard!",
						],
						"intro":[
							"\"Ke ke kee! Get in on it!\"",
							"\"Come on, get torn apart!\"",
							"\"It won't take long, you'll see!\"",
						],
						"defeat":[
							"\"Dirty insect...\"",
							"\"Little lousy...\"",
							"\"Da... mn...\"",
						],
						"initialFormDefeat":[
							"\"You're entertaining me!\"",
							"\"That's enough!\"",
							"\"Now I'm angry!\"",
						],
						"finalFormIntro":[
							"\"It's time to end!\"",
							"\"Die!\"",
							"\"I'll crush you!\"",
						],
						"finalFormDefeat":[
							"\"Bring... it... on...\"",
							"\"I can... still...\"",
							"\"I... I didn't lose...\"",
						],
					},
				},
				"enemy":{
					"guard":{
						"name":[
							"Guard",
							"Sentinel",
							"Guardian",
						],
						"description":[
							"They are very loyal to duty.",
							"They started their shift on time.",
							"They never sleep.",
						],
						"intro":[
							"\"Go ahead, damned!\"",
							"\"Stop there!\"",
							"\"Don't move!\"",
						],
						"defeat":[
							"\"Aaagh!\"",
							"\"Hey! Where are you going?\"",
							"\"Ugh...\"",
						],
					},
					"goblin":{
						"name":[
							"Goblin",
							"Little Goblin",
							"Little Creature",
						],
						"description":[
							"It doesn't take its eyes off your gold purse.",
							"It seems unable to sit still.",
							"They launched towards you!",
						],
						"intro":[
							"\"Oh no!\"",
							"\"He... hello!\"",
							"\"Bring... it... on!\"",
						],
						"defeat":[
							"\"Ugh!\"",
							"\"Darnit!\"",
							"\"I lost again!\"",
						],
					},
					"guardsLeader":{
						"name":[
							"Chief of the Guards",
							"Chief Guard",
							"Sergeant",
						],
						"description":[
							"They're a very careful guy.",
							"They don't stop looking at you.",
							"They won't let you pass that easily.",
						],
						"intro":[
							"\"In the name of the law, I order you to stop!\"",
							"\"Stop! Identify yourself!\"",
							"\"Show me your permit!\"",
						],
						"defeat":[
							"\"S... stop...\"",
							"\"Guys... stop him!\"",
							"\"Give me back the badge!\"",
						],
					},
					"recruit":{
						"name":[
							"Recruit",
							"Young Soldier",
							"Beginner",
						],
						"description":[
							"They have been married to a peasant woman for just a few days.",
							"They dreamed of being an adventurer.",
							"They want to be the next head of the guard.",
						],
						"intro":[
							"\"S... stop there!\"",
							"\"On guard!\"",
							"\"In the... name of the law!\"",
						],
						"defeat":[
							"\"H... help!\"",
							"\"Aaagh!\"",
							"\"I have to... train more!\"",
						],
					},
					"mercenary":{
						"name":[
							"Mercenary",
							"Murderer",
							"Hitman",
						],
						"description":[
							"Someone paid him to take you out!",
							"Is there a bounty on your head?",
							"Will they let you escape?",
						],
						"intro":[
							"\"That's the prey I was looking for! Stay there and get tied up!\"",
							"\"You're that guy on the posters! Stop!\"",
							"\"Here it is, my nest egg!\"",
						],
						"defeat":[
							"\"Goodbye to my money...\"",
							"\"My money!\"",
							"\"How will I pay my debts now?\"",
						],
					},
					"golem":{
						"name":[
							"Golem",
							"Giant",
							"Colossus",
						],
						"description":[
							"It is rather agile for being of stone!",
							"What material is it made of?",
							"It looks like a moving mountain.",
						],
						"intro":[
							"\"Guuh...\"",
							"\"Uuugh...\"",
							"\"Grrr...\"",
						],
						"defeat":[
							"It falls apart with a big thud",
							"It sinks into the earth and disappears",
							"It dissolves into air",
						],
					},
					"mage":{
						"name":[
							"Mystical",
							"Priest",
							"Religious",
						],
						"description":[
							"It seems to speak to itself.",
							"They move their lips but no sound comes out.",
							"It seems to draw marks in midair.",
						],
						"intro":[
							"They're about to cast a powerful spell!",
							"You narrowly avoided a bolt!",
							"You feel strangely observed",
						],
						"defeat":[
							"It disappears in a cloud",
							"They run off into an alley",
							"They plunge into the crowd and escape",
						],
					},
					"zombie":{
						"name":[
							"Zombie",
							"Undead",
							"Wanderer",
						],
						"description":[
							"They're very hungry...",
							"They certainly want to devour you.",
							"It slowly drags itself towards you.",
						],
						"intro":[
							"\"Hun... gry...\"",
							"\"Braaains...\"",
							"\"Mmmhhh...\"",
						],
						"defeat":[
							"\"Guuugh...\"",
							"\"Gaaahhh...\"",
							"\"Unhh...\"",
						],
					},
					"skeleton":{
						"name":[
							"Skeleton",
							"Bone Creature",
							"Living Bones",
						],
						"description":[
							"How do they talk if it's just a bunch of bones?",
							"It seems to be missing some bones.",
							"It squeaks with every movement.",
						],
						"intro":[
							"\"Come here, boggart!\"",
							"\"Come here, mortal!\"",
							"\"Join us!\"",
						],
						"defeat":[
							"\"Agh... my... bones!\"",
							"\"I can't get back together!\"",
							"\"Give me my arm back!\"",
						],
					},
					"feline":{
						"name":[
							"Feline",
							"Cat",
							"Pussycat",
						],
						"description":[
							"They don't like being hugged.",
							"Are they purring...?",
							"They greedily lick the fur on their paws.",
						],
						"intro":[
							"\"I needed to fix my nails...\"",
							"\"Shall we play a little?\"",
							"\"Do you want to pamper me a little?\"",
						],
						"defeat":[
							"\"Meowned!\"",
							"\"Hisss!\"",
							"\"Go away!\"",
						],
					},
					"ghost":{
						"name":[
							"Entity",
							"Ghost",
							"Ectoplasm",
						],
						"description":[
							"Their body floats in midair.",
							"You don't know if it's real.",
							"It speaks directly to your mind.",
						],
						"intro":[
							"\"I was looking for you, mortal...\"",
							"\"It's your time, mortal.\"",
							"\"It's your time. Come with me.\"",
						],
						"defeat":[
							"\"I'll be back forever!\"",
							"\"It is only a matter of time...\"",
							"\"Booo!\"",
						],
					},
					"dwarf":{
						"name":[
							"Dwarf",
						],
						"description":[
							"Anger compensates for their short stature.",
							"They must have drunk a lot.",
							"They won't give up that easily!",
						],
						"intro":[
							"\"I think it's the right time for a fight!\"",
							"\"I have a punch hanging with you!\"",
							"\"Let's see who has the toughest head!\"",
						],
						"defeat":[
							"\"Where... are you going, my friend?\"",
							"\"Get me out of this barrel!\"",
							"\"Where... are you rushing?\"",
						],
					},
					"magicArmor":{
						"name":[
							"Magic Armor",
							"Possessed Armor",
							"Phantom Armor",
						],
						"description":[
							"There is no one inside!",
							"It makes a great noise when moving.",
							"How does it move?",
						],
						"intro":[
							"\"Die...\"",
							"\"Disappear...\"",
							"\"Traitor...\"",
						],
						"defeat":[
							"The metal melts and disappears.",
							"They fall to the ground making a loud crash.",
							"It evaporates for a while and disappears.",
						],
					},
					"stampadianGuardian":{
						"name":[
							"Stampadian Guadian",
							"Old Stampadian",
							"Three Eyed Stampadian",
						],
						"description":[
							"Is it of this world?",
							"Where did this creature come from?",
							"It looks thousands of years old!",
						],
						"intro":[
							"\"You cannot pass.\"",
							"\"Luck is against you.\"",
							"\"Goodbye, adventurer.\"",
						],
						"defeat":[
							"\"My brothers will stop you.\"",
							"\"Save... the monks...\"",
							"\"What bad luck...\"",
						],
					},
					"executioner":{
						"name":[
							"Executioner",
							"Tormentor",
							"Torturer",
						],
						"description":[
							"They just want to do their job.",
							"Was there a death sentence?",
							"Sooner or later they would find you.",
						],
						"intro":[
							"\"It's your turn, then!\"",
							"\"Here is the condemned man!\"",
							"\"This time you will not escape justice!\"",
						],
						"defeat":[
							"\"Where are you trying to escape...!\"",
							"\"By now you are already dead...\"",
							"\"Damn!\"",
						],
					},
				},
			},
			"optionality":{
				"must":"you must",
				"may":"you may",
			},
			"repeating":{
				"exactly":{
					"singular":"for {value} time",
					"plural":"for {value} times",
				},
				"upTo":{
					"singular":"up to {value} time",
					"plural":"up to {value} times",
				},
			},
			"conditions":{
				"if":"if",
				"separator":" and ",
				"effectSeparator":": ",
				"actionSeparator":", ",
			},
			"actions":{
				"heal":{
					"flip":{
						"may":"{optionalityrepeating} turn {cards} {symbol heroCardBanner2SmallSymbol} {place}",
						"must":"{optionalityrepeating} turn {cards} {symbol heroCardBanner2SmallSymbol} {place}",
					},
				},
				"shop":{
					"flip":{
						"may":"{optionalityrepeating} choose {cards} {symbol heroCardBanner1SmallSymbol} and {cards} {symbol heroCardBanner2SmallSymbol} {place} and turn them",
						"must":"{optionalityrepeating} choose {cards} {symbol heroCardBanner1SmallSymbol} and {cards} {symbol heroCardBanner2SmallSymbol} {place} and turn them",
					},
				},
				"swap":{
					"upTo":{
						"may":"{optionalityrepeating} swap up to {cards} {bannerType} from hand with as many {bannerTypeTo} in discard pile",
						"must":"{optionalityrepeating} swap up to {cards} {bannerType} from hand with as many {bannerTypeTo} in discard pile",
					},
				},
				"recover":{
					"upTo":{
						"may":"{optionalityrepeating} swap up to {cards} {bannerType} from hand with as many eliminated with {bannerTypeTo} side",
						"must":"{optionalityrepeating} swap up to {cards} {bannerType} from hand with as many eliminated with {bannerTypeTo} side",
					},
				},
				"discard":{
					"exactly":{
						"may":"{optionalityrepeating} discard {cards} {bannerType}",
						"must":"{optionalityrepeating} discard {cards} {bannerType}",
					},
				},
				"bannerChallenge":{
					"comparison":{
						"may":"{optionalityrepeating} check if you've {comparison} {cards} {bannerType} {cardsPlace}: if yes, turn {prizeCards} {symbol heroCardBanner2SmallSymbol} {prizePlace}, else exhaust {punishmentCards} of your choice {punishmentPlace}",
						"must":"{optionalityrepeating} check if you've {comparison} {cards} {bannerType} {cardsPlace}: if yes, turn {prizeCards} {symbol heroCardBanner2SmallSymbol} {prizePlace}, else exhaust {punishmentCards} of your choice {punishmentPlace}",
					},
				},
				"swapSequence":{
					"draw":{
						"may":"{optionalityrepeating} discard {sequence} to draw {cards}",
						"must":"{optionalityrepeating} discard {sequence} to draw {cards}",
					},
				},
				"stopFight":{
					"anytime":{
						"may":"{optionalityrepeating} leave this battle at any moment",
						"must":"{optionalityrepeating} leave this battle at any moment",
					},
				},
				"ritual":{
					"remove":{
						"may":"{optionalityrepeating} remove {cards} to turn up to {prizeCards}",
						"must":"{optionalityrepeating} remove {cards} to turn up to {prizeCards}",
					},
				},
				"sacrifice":{
					"exhaust":{
						"may":"{optionalityrepeating} exhaust {cards} {place} to {buff}",
						"must":"{optionalityrepeating} exhaust {cards} {place} to {buff}",
					},
				},
				"loot":{
					"buff":{
						"may":"{optionalityrepeating} get {buff}",
						"must":"{optionalityrepeating} get {buff}",
					},
				},
				"helper":{
					"buff":{
						"may":"{optionalityrepeating} discard {sequence} for {buff}",
						"must":"{optionalityrepeating} discard {sequence} for {buff}",
					},
				},
				"constellation":{
					"order":{
						"may":"{optionalityrepeating} discard the {sequence} sequence with {order} value for {buff}",
						"must":"{optionalityrepeating} discard the {sequence} sequence with {order} value for {buff}",
					},
				},
				"discardHand":{
					"flip":{
						"may":"{optionalityrepeating} discard hand, turn the discard pile and draw a new hand",
						"must":"{optionalityrepeating} discard hand, turn the discard pile and draw a new hand",
					},
					"normal":{
						"may":"{optionalityrepeating} discard hand and draw a new hand",
						"must":"{optionalityrepeating} discard hand and draw a new hand",
					},
				},
				"migration":{
					"swap":{
						"may":"{optionalityrepeating} swap 2 cards on the map, including this one",
						"must":"{optionalityrepeating} swap 2 cards on the map, including this one",
					},
				},
				"gambling":{
					"drawCard":{
						"may":"{optionalityrepeating} choose a card in hand and draw one: if it has {comparison} value keep both, else discard both",
						"must":"{optionalityrepeating} choose a card in hand and draw one: if it has {comparison} value keep both, else discard both",
					},
				},
			},
			"comparison":{
				"higher":"higher",
				"lower":"lower",
				"same":"same",
				"more":"more than",
				"less":"less than",
				"exactly":"exactly",
			},
			"drawCard":{
				"singular":"draw 1 card",
				"plural":"draw {value} cards",
			},
			"cardSet":{
				"separator":" and ",
				"simpleSeparator":", ",
			},
			"order":{
				"ascending":"ascending",
				"descending":"descending",
				"same":"same",
			},
			"overworldCards":{
				"gainTick":"{optionalityrepeating}, if possible, fill the leftmost box:",
				"onTick":"Look at the leftmost letter:",
				"check":{
					"room":"{room} is mapped",
					"notRoom":"{room} isn't mapped",
				},
				"cardIsEmpty":"this card is blank",
				"reveal":{
					"ifNotRevealed":{
						"singular":"{value} isn't mapped",
						"plural":"{value} aren't mapped",
					},
					"ifRevealed":{
						"singular":"{value} is mapped",
						"plural":"{value} are mapped",
					},
					"may":"{optionality} reveal {value}.",
					"must":"reveal {value}.",
				},
				"remove":{
					"thisCard":{
						"may":"{optionalityrepeating} remove this card",
						"must":"remove this card",
					},
					"cards":{
						"may":"{optionalityrepeating} remove {value}",
						"must":"remove {value}",
					},
				},
				"pick":{
					"may":"{optionalityrepeating} add the back of this card on the {bannerType} side to discard pile",
					"must":"add the back of this card on the {bannerType} side to discard pile",
				},
				"actions":{
					"forge":{
						"elements":{
							"may":"{optionalityrepeating} discard {sequence} to add the back of this card on the {bannerType} side to discard pile",
							"must":"discard {sequence} to add the back of this card on the {bannerType} side to discard pile",
						},
					},
				},
			},
			"dungeonCards":{
				"gainTick":"{optionalityrepeating}, if possible, fill the leftmost box:",
				"onTick":"Look at the leftmost letter:",
				"check":{
					"room":"{room} is mapped",
					"notRoom":"{room} isn't mapped",
					"notTickedRoom":"{room} has empty {symbol heroCardTickBox-empty}",
				},
				"roomIsEmpty":"the room is empty",
				"pick":{
					"may":"{optionalityrepeating} add the back of the {card} card on the {bannerType} side to discard pile",
					"must":"add the back of the {card} card on the {bannerType} side to discard pile",
				},
				"actions":{
					"forge":{
						"elements":{
							"may":"{optionalityrepeating} discard {sequence} to add the back of the {card} card on the {bannerType} side to discard pile",
							"must":"discard {sequence} to add the back of the {card} card on the {bannerType} side to discard pile",
						},
					},
				},
			},
			"enemiesDescriptions":{
				"weakToElement":{
					"title":"Elemental weakness",
					"label":"If you've {elementLimit} {element} or more in play: -1{symbol heroCardDefenseSmallSymbol}",
					"placeholders":{
						"element":{
							"earth":"{symbol heroCardEarthSmallSymbol}",
							"fire":"{symbol heroCardFireSmallSymbol}",
							"water":"{symbol heroCardWaterSmallSymbol}",
							"air":"{symbol heroCardAirSmallSymbol}",
						},
					},
				},
				"strongToElement":{
					"title":"Elemental defense",
					"label":"If you've {elementLimit} {element} or more in play: +1{symbol heroCardDefenseSmallSymbol}",
					"placeholders":{
						"element":{
							"earth":"{symbol heroCardEarthSmallSymbol}",
							"fire":"{symbol heroCardFireSmallSymbol}",
							"water":"{symbol heroCardWaterSmallSymbol}",
							"air":"{symbol heroCardAirSmallSymbol}",
						},
					},
				},
				"affinityElement":{
					"title":"Elemental affinity",
					"label":"If you've {elementLimit} {element} or more in play: +1{symbol heroCardAttackSmallSymbol}",
					"placeholders":{
						"element":{
							"earth":"{symbol heroCardEarthSmallSymbol}",
							"fire":"{symbol heroCardFireSmallSymbol}",
							"water":"{symbol heroCardWaterSmallSymbol}",
							"air":"{symbol heroCardAirSmallSymbol}",
						},
					},
				},
				"fearElement":{
					"title":"Elemental fear",
					"label":"If you've {elementLimit} {element} or more in play: -1{symbol heroCardAttackSmallSymbol}",
					"placeholders":{
						"element":{
							"earth":"{symbol heroCardEarthSmallSymbol}",
							"fire":"{symbol heroCardFireSmallSymbol}",
							"water":"{symbol heroCardWaterSmallSymbol}",
							"air":"{symbol heroCardAirSmallSymbol}",
						},
					},
				},
				"unsecure":{
					"title":"Insecurity",
					"label":"If you've {cardsLimit} {banner} or more in play: -1{symbol heroCardAttackSmallSymbol}",
					"placeholders":{
						"banner":{
							"banner1":"{symbol heroCardBanner1SmallSymbol}",
							"banner2":"{symbol heroCardBanner2SmallSymbol}",
						},
					},
				},
				"envy":{
					"title":"Envy",
					"label":"If you've {cardsLimit} {banner}or more in play: +1{symbol heroCardAttackSmallSymbol}",
					"placeholders":{
						"banner":{
							"banner1":"{symbol heroCardBanner1SmallSymbol}",
							"banner2":"{symbol heroCardBanner2SmallSymbol}",
						},
					},
				},
				"ranged":{
					"title":"Ranged",
					"label":"If you've {actionsLimit} hero cards or more in play: +1{symbol heroCardAttackSmallSymbol}",
					"placeholders":{
					},
				},
				"close":{
					"title":"Close",
					"label":"If you've {actionsLimit} hero cards or less in play: -1{symbol heroCardAttackSmallSymbol}",
					"placeholders":{
					},
				},
				"rapidity":{
					"title":"Rapidity",
					"label":"If you've {actionsLimit} hero cards or more in play: +1{symbol heroCardDefenseSmallSymbol}",
					"placeholders":{
					},
				},
				"slowness":{
					"title":"Slowness",
					"label":"If you've {actionsLimit} hero cards or less in play: -1{symbol heroCardDefenseSmallSymbol}",
					"placeholders":{
					},
				},
				"charmed":{
					"title":"Charmed",
					"label":"If you've {cardsLimit} {banner} or more in play: -1{symbol heroCardDefenseSmallSymbol}",
					"placeholders":{
						"banner":{
							"banner1":"{symbol heroCardBanner1SmallSymbol}",
							"banner2":"{symbol heroCardBanner2SmallSymbol}",
						},
					},
				},
				"cautious":{
					"title":"Safety",
					"label":"If you've {cardsLimit} {banner} or more in play: +1{symbol heroCardDefenseSmallSymbol}",
					"placeholders":{
						"banner":{
							"banner1":"{symbol heroCardBanner1SmallSymbol}",
							"banner2":"{symbol heroCardBanner2SmallSymbol}",
						},
					},
				},
				"trap":{
					"title":"Trap",
					"label":"Successfully defend to win the battle",
					"placeholders":{
					},
				},
			},
			"quests":{
				"mainTheBoss":{
					"missionStartTitle":[
						"{villain-name}",
					],
					"missionStartText":[
						"{villain-name} plans to put their plan into motion today! Defeat it and come back here to win!",
						"{villain-name} will send their hitmen tonight! Defeat it and come back here to win!",
						"{villain-name} challenged you to a duel to the death! Defeat it and come back here to win!",
					],
					"missionStartShortText":[
						"Defeat {villain-name} and come back here to win!",
					],
					"bossDefeatShortText":[
						"Good job! Go back to {room-entranceRoom}!",
					],
					"missionEndingTitle":[
						"Victory!",
					],
					"missionEndingText":[
						"You have defeated {villain-name} and your mission is accomplished!",
						"{villain-name} will be just a memory. You have accomplished your mission!",
						"{villain-name} is defeated! Mission accomplished!",
					],
				},
				"mainTheMissingKey":{
					"missionStartTitle":[
						"{villainKey-name}",
					],
					"missionStartText":[
						"Find {villainKey-name}, defeat {villain-name}, and come back here to win!",
						"Find {villainKey-name}, defeat {villain-name}, and get back here before midnight to win!",
						"{villain-name} is about to find {villainKey-name}! Stop it and come back here to win!",
					],
					"missionStartShortText":[
						"Find {villainKey-name}, defeat {villain-name} and come back here to win!",
					],
					"missionEndingTitle":[
						"Victory!",
					],
					"missionEndingText":[
						"You have defeated {villain-name} and your mission is accomplished!",
						"{villainKey-name} failed to steal {villainKey-name}! Mission accomplished!",
						"{villainKey-name} is safe! Mission accomplished!",
					],
					"keyFoundTitle":[
						"{villainKey-name}",
					],
					"keyFoundDescription":[
						"You had to go round and round but, in the end, you found {villainKey-name}!",
						"You've found {villainKey-name} in a hidden chest on a hill!",
						"You've found {villainKey-name} in a box behind a painting!",
					],
					"keyFoundShortDescription":[
						"You've found {villainKey-name}! Try not to lose that...",
					],
					"bossDefeatShortText":[
						"{villain-name} eliminated! Go back to {room-entranceRoom}!",
					],
				},
				"mainTheGeneral":{
					"missionStartTitle":[
						"The Follower",
						"The Disciple",
						"The Adjutant",
					],
					"missionStartText":[
						"Eliminate {villain-name} and come back here to win... but be careful. Could have company...",
						"{villain-name} is in the village with one of their henchmen... Eliminate them and come back here to win!",
						"The plan seemed perfect but {villain-name} brought a friend. Eliminate them and come back here to win!",
					],
					"missionStartShortText":[
						"Eliminate {villain-name} and come back here to win... but be careful. Could have company...",
					],
					"generalFoundTitle":[
						"{villainHelper-name}",
					],
					"generalIntroText":[
						"\"You can't stop its grandeur {villain-name}!\"",
						"\"{villain-name} will save us all!\"",
						"\"Praise to {villain-name}!\"",
					],
					"generalDefeatText":[
						"\"{villain-name} will punish you for it!\"",
						"\"{villain-name} will avenge me!\"",
						"\"The {villain-name} is still safe!\"",
					],
					"generalDescription":[
						"They began to adore {villain-name} at the age of 5.",
						"{villain-name} chose it from hundreds of suitors.",
						"{villain-name} is their only reason for living.",
					],
					"generalDefeatShortText":[
						"Damn! {villainHelper-name} has escaped! Find {villain-name} before it can warn him!",
					],
					"bossDescription":[
						"\"I will avenge {villainHelper-name}!\"",
						"\"How dare you oppose my subjects?\"",
						"\"You would reach {villainHelper-name} very soon\"",
					],
					"bossDefeatShortText":[
						"{villain-name} eliminated! Go back to {room-entranceRoom}!",
					],
					"missionEndingTitle":[
						"Victory!",
					],
					"missionEndingText":[
						"You defeated {villain-name} and {villainHelper-name}!",
						"{villain-name} and {villainHelper-name} are just a memory. You did it!",
						"{villainHelper-name} has been arrested... but {villain-name} managed to escape. Will come back?",
					],
				},
				"mainTheFinalForm":{
					"missionStartTitle":[
						"To The Death",
						"The Final Battle",
						"Until The End",
					],
					"missionStartText":[
						"Eliminate {villain-name} and come back here to win... but be careful. This time it will be tough!",
						"After a hundred years {villain-name} is back. Eliminate it one more time and come back here. Will you make it?",
						"No one interrupted the ritual and {villain-name} is back, stronger than ever. Send it back where it came from and come back here... but it won't be easy.",
					],
					"missionStartShortText":[
						"Defeat {villain-name} and come back here to win!",
					],
					"initialFormTitle":[
						"{villain-name}?",
					],
					"missionEndingTitle":[
						"Victory!",
					],
					"initalFormDefeatShortText":[
						"\"Do you think you beat me?\" Move to any cell in {roomId-finalBossRoom}.",
						"\"Ahahah!\" Move to any cell in {roomId-finalBossRoom}.",
						"\"Very well!\" Move to any box in {roomId-finalBossRoom}.",
					],
					"finalFormDefeatShortText":[
						"You have defeated {villain-name}! Move to any cell in {roomId-entranceRoom}.",
					],
					"missionEndingText":[
						"You have defeated {villain-name} once again! Mission accomplished!",
						"{villain-name} has been defeated! Your deeds will be told for centuries.",
						"The trap of {villain-name} has failed and this time you have won again! Good job!",
					],
				},
				"mainTheCurse":{
					"missionStartTitle":[
						"The Curse",
						"The Punishment",
						"The Spell",
					],
					"missionStartText":[
						"Eliminate {villain-name} and come back here to win... but be careful. Someone is watching you...",
						"Since you agreed to take out {villain-name} you feel that someone or something is following you very closely. Finish your mission and come back here to win.",
						"{villain-name} has sent someone to keep an eye on you... but that won't stop you. Eliminate it and come back here to win.",
					],
					"missionStartShortText":[
						"Defeat {villain-name} and come back here to win!",
					],
					"curseTitle":[
						"The Trap",
						"Uncovered",
						"Taken!",
					],
					"curseDescription":[
						"The old lady you helped at the market whispers to you \"{villain-name} curses you!\" before disappearing into thin air.",
						"A child cuts your way. {villain-name} has the same eyes. Something is wrong.",
						"A hooded figure hands you an envelope. Inside there is only a sheet that says \"{villain-name}\". You feel your strength failing.",
					],
					"curseShortDescription":[
						"\"Damn you!\"",
						"Everything becomes dark.",
						"You feel nothing more.",
					],
					"bossDefeatShortText":[
						"{villain-name} eliminated! Go back to {room-entranceRoom}!",
					],
					"missionEndingTitle":[
						"Victory!",
					],
					"missionEndingText":[
						"Despite their tricks, you defeated {villain-name}! Good job!",
						"It was tough but {villain-name} failed once more. You did!",
						"Not even the deception of {villain-name} was able to eliminate you. You did it once again!",
					],
				},
				"sideTheReward":{
					"missionStartTitle":[
						"The Wanted",
						"The Fugitive",
						"The Escaped",
					],
					"missionStartDescription":[
						"\"You're here for the bounty on my head, huh? You'll have to earn it, rookie!\"",
						"\"Forget the bounty on my head!\"",
						"\"What's the bounty on my head, rookie?\"",
					],
					"missionStartShortDescription":[
						"\"You're here for my bounty, huh?\"",
					],
					"enemyDescription":[
						"Rumor has it they're a killer.",
						"They have scammed several merchants around the world.",
						"They are the leader of a gang of thieves.",
					],
					"enemyDefeat":[
						" \"You dirty mercenary...\"",
						"\"I can give you more money, my friend!\"",
						"\"Hey! Let's talk, okay?\"",
					],
					"missionEndTitle":[
						"The Reward",
						"The Bounty",
						"The Compensation",
					],
					"missionEndDescription":[
						"\"Thank you for avenging my husband!\" A young woman says smiling at you. They hand you a bag before leaving.",
						"A man approaches smiling. \"My wife will be grateful to you, wherever she is now... Take this.\"",
						"\"Someone had to do it.\" A hooded figure throws a heavy bag at you, turns its back on you, and disappears into the forest.",
					],
				},
				"sideTheTheft":{
					"missionStartTitle":[
						"The Theft",
						"The Treasure",
						"The Plan",
					],
					"missionStartDescription":[
						"It is said that a priceless treasure is kept somewhere here. You should ask around...",
						"Somewhere there is an incredible treasure. Maybe someone can help you...",
						"The map says that an incredible treasure is hiding here. Who can help you?",
					],
					"missionStartShortDescription":[
						"There should be a map in this room...",
					],
					"halfMissionTitle":[
						"Suspicious Guards",
						"False Informer",
						"Traitor",
					],
					"halfMissionStartDescription":[
						"\"Hey... you're asking too many questions! Here's what happens to nosy people like you!\"",
						"\"Why you want to know that, huh?\"",
						"\"Do you know what happens to those who are too curious?\"",
					],
					"halfMissionEnemyDescription":[
						"They don't like talkative types.",
						"You should be more careful next time.",
						"They seemed like a reliable guy...",
					],
					"halfMissionDefeat":[
						"It will get better next time...",
						"No way...",
						"Nobody seems to know anything...",
					],
					"bossTitle":[
						"The Rich Merchant",
						"The Rich One",
						"The Collector",
					],
					"enemyDescription":[
						"They were once a sailor.",
						"Where did they get all this stuff?",
						"They learned to fight around the world.",
					],
					"bossStartDescription":[
						"\"Guards! Help! They want to rob me!\"",
						"\"Thief! Thief!\"",
						"\"This stuff is mine!\"",
					],
				},
				"sideTheLostTechnique":{
					"missionStartTitle":[
						"The Lost Technique",
						"The Ancient Technique",
						"The Forbidden Technique",
					],
					"missionStartDescription":[
						"\"The way to enlightenment is long. Show me what you can do!\"",
						"\"Prove me that you are the one who deserves it. Go ahead!\"",
						"\"You look strong, traveler. Does appearance deceive me?\"",
					],
					"missionStartEnemyDescription":[
						"They love the scent of incense.",
						"Every morning they take care of the maintenance of the temple.",
						"Pray every morning and every evening.",
					],
					"missionStartEnemyDefeat":[
						"\"The Master is waiting for you.\"",
						"\"You are ready.\"",
						"\"So, it's you.\"",
					],
					"missionEndTitle":[
						"The Master",
						"The Wise One",
						"The Ancient",
					],
					"missionEndDescription":[
						"They beckon you to come closer and take a battle pose.",
						"They get up from the pillow they were sitting on and get ready.",
						"They stop watering a plant and smile at you.",
					],
					"missionEndEnemyDescription":[
						"They seem to be whispering something...",
						"Their fight looks like a dance.",
						"They fight using only one hand.",
					],
					"missionEndEnemyDefeat":[
						"\"You are the chosen one.\"",
						"\"Here.\"",
						"\"It's yours.\"",
					],
					"missionEndEnemyShortDefeat":[
						"\"You are the chosen one.\"",
					],
				},
				"sideTheChest":{
					"missionStartTitle":[
						"The Chest",
						"The Box",
						"The Luggage",
					],
					"missionStartText":[
						"Who needs the keys?",
						"It doesn't seem that difficult to open.",
						"Maybe, with a good shot...",
					],
					"missionEndShortText":[
						"Chest opened!",
					],
					"missionChestDescription":[
						"You have the feeling that you already know what it contains...",
						"The wood of this box is sturdy!",
						"The lock on this chest seems to not want to open...",
					],
				},
				"sideTheTrap":{
					"missionStartTitle":[
						"The Trap",
						"The Machinery",
						"The Protection",
					],
					"missionStartText":[
						"You can do it!",
						"Just a little jump...",
						"Come on, be brave!",
					],
					"missionEndShortText":[
						"Passed!",
					],
					"missionChestDescription":[
						"It's a trap!",
						"Who built this infernal machine?",
						"What are they defending?",
					],
				},
				"sideTheForge":{
					"missionStartTitle":[
						"The Forge",
						"The Forge",
					],
					"missionStartDescription":[
						"Just outside the village, you hear the elemental forge crackle.",
						"A smug blacksmith comes out of an alley. Is there a forge nearby?",
						"You follow the sound of hammering metal up a hill. An elemental forge crackles above.",
					],
					"missionStartShortDescription":[
						"A forge!",
					],
				},
				"sideTheHostage":{
					"missionStartTitle":[
						"The Hostage",
						"The Kidnapper",
						"The imprisonment",
					],
					"missionStartDescription":[
						"\"You came with no money, huh? You'll regret it!\"",
						"\"No money, no bailout!\"",
						"\"Give us the stuff and your friend is free!\"",
					],
					"enemyDescription":[
						"They're a professional kidnapper!",
						"You have to stop him at all costs!",
						"Who will they have kidnapped?",
					],
					"enemyDefeat":[
						"\"Fr... free that guy! Let's run away!\"",
						"\"Go! Go! Go!\"",
						"\"Leave him... free!\"",
					],
					"missionEndTitle":[
						"Freedom!",
						"Free At The End",
						"Broken Chains",
					],
					"missionEndShortFireDescription":[
						"Fire mage freed!",
					],
					"missionEndFireDescription":[
						"A red-haired boy comes out of a shed. \"The Brotherhood of Fire owes you, traveler! I will help you in your next battle!\"",
						"The flames envelop the hut and a woman in a red tunic emerges from the rubble. \"Let's go burn some bad guys!\"",
						"A flaming-tailed puppy trots towards you. They look very grateful!",
					],
					"missionEndShortEarthDescription":[
						"Earth mage freed!",
					],
					"missionEndEarthDescription":[
						"A stone-skinned woman frees herself from her laces. \"You look good... let's go smash some heads together!\"",
						"A boy made of sand emerges from a bag. \"It's time to show who I am.\"",
						"A snake snaps out of an inlaid vase, wraps around your arm, and appears to be waiting for a new battle to begin.",
					],
					"missionEndShortWaterDescription":[
						"Water mage freed!",
					],
					"missionEndWaterDescription":[
						"A water creature materializes from a jar. \"You helped me. I'll do you the favor.\"",
						"A woman with a transparent body and cold as ice smiles at you. \"I'll help you, traveler.\"",
						"A muscular creature made of seaweed and shells frees itself from its chains. \"Come on, let's go!\"",
					],
					"missionEndShortAirDescription":[
						"Air mage freed!",
					],
					"missionEndWindDescription":[
						"A feathered creature with a yellow beak and a quiver on its shoulder chirps at you. It beckons you to follow him with its wings.",
						"A cool breeze seems to come out of a small box, caresses your face, and whispers: \"Let's go for a ride, yeah?\"",
						"A corpulent creature made of air frees itself from the overstretched jar that kept him imprisoned. \"Come on! I'm hungry!\"",
					],
				},
				"eventHealer":{
					"missionStartTitle":[
						"The Lost Monk",
						"The First Monk",
						"The Old Monk",
					],
					"missionStartShortDescription":[
						"They interrupt their prayer and hold out their hand to you.",
					],
					"missionStartDescription":[
						"They seem absorbed in prayer. Suddenly they stop their soft chant and turn to you. \"You're fighting hard. Let me ease your pain.\"",
						"Puffing, they tighten the rope belt around their waist. \"Come on! Let's have a bite together!\"",
						"They close the huge book they were writing about with a loud thud. They give you a mild smile. \"Come closer. Don't be afraid.\"",
					],
				},
				"eventBannerChallenge":{
					"missionStartTitle":[
						"The Banner Fanatic",
						"The Parade of Banners",
						"The Banners Mania",
					],
					"missionStartDescription":[
						"From a pair of thick glasses, a thin boy glares at you with his lively gaze. \"Another banner fan! Let's play!\"",
						"\"Come closer, come closer!\" An overly exuberant girl drags you into a small square full of banners. \"Come on, let's play!\"",
						"\"Banners! Banners!\" A big man yells from the end of the alley. \"Hey, you! Come here! You have banners too! Let's play!\"",
					],
				},
				"eventShop":{
					"missionStartTitle":[
						"The Bold Merchant",
						"The Brave Merchant",
						"The Wandering Merchant",
					],
					"missionStartShortDescription":[
						"What's a merchant doing in this place?",
					],
					"missionStartDescription":[
						"They stroke their bristly black beard then broadens a big smile. \"Hey, do you want to do business?\"",
						"\"You look like a cool guy! Shall we do business?\" A young girl calls you from a rather suspicious stall.",
						"\"Travelers! Heroes! Come closer! Great deals for everyone!\" How can such a thin kid have that voice?",
					],
				},
				"eventSwap":{
					"missionStartTitle":[
						"The Sergeant",
						"The Healthy",
						"The Coach",
					],
					"missionStartShortDescription":[
						"A soldier insists on giving you gymnastics.",
					],
					"missionStartDescription":[
						"\"Recruit!\" Thunders the sergeant. \"Time to get some exercise!\"",
						"\"Where did you put your muscles, huh?\" A soldier intimates you. \"You need to exercise!\"",
						"\"One! Two! One! Two!\" An elderly military man runs on the spot without stopping. \"Young man! With me!\"",
					],
				},
				"eventRecover":{
					"missionStartTitle":[
						"The Necromancer",
						"The Ferryman",
					],
					"missionStartShortDescription":[
						"\"Death is not the end.\"",
					],
					"missionStartDescription":[
						"Turning away from you, they murmur from their night-black cloak: \"May the dead return!\"",
						"\"Death is but a passage.\" The figure in black stops smoking. \"There are those who go and those who come.\"",
						"\"Don't fear death.\" Their fingers leave the piano. \"Don't fear its endless cycle.\"",
					],
				},
				"eventQuiet":{
					"missionStartTitle":[
						"The Corridor",
						"The Passage",
						"The Bottleneck",
					],
					"missionStartShortDescription":[
						"Your footsteps echo throughout the room. You are safe at least.",
						"Some peace, at last. You spend time checking the equipment.",
						"Nothing happens. Finally some healthy rest!",
					],
					"missionStartDescription":[
						"Your footsteps echo throughout the room. You are safe at least.",
						"Some peace, finally. You spend time checking the equipment.",
						"Nothing happens. Finally some healthy rest!",
					],
				},
				"eventWeakness":{
					"missionStartTitle":[
						"The Twisted Path",
						"The Slowdown",
						"The Unexpected",
					],
					"missionStartDescription":[
						"You decide to cross a muddy puddle and take a few hours to get out.",
						"A belt gives out and your equipment falls to the ground. It will take a while to collect it.",
						"Suddenly your legs feel heavy. You rest for a few minutes, looking for any stings on your skin.",
					],
					"missionStartShortDescription":[
						"You decide to cross a muddy puddle and take a few hours to get out.",
						"A belt gives out and your equipment falls to the ground. It will take a while to collect it.",
						"Suddenly your legs feel heavy. You rest, looking for stings on your skin.",
					],
				},
				"eventCamp":{
					"missionStartTitle":[
						"The Camp",
					],
					"missionStartBurnDescription":[
						"Trees are arranged in a circle around a barren plain. It's the perfect place to light a fire and rest!",
						"You're carrying a lot of raw meat. Is it time to get rid of it with a good dinner, starting a fire?",
						"The rain made your clothes soaked. A fire would certainly help to dry them...",
					],
					"missionStartBurnShortDescription":[
						"It is the perfect place to light a fire and rest.",
						"With a fire, you could cook.",
						"You should dry your clothes with fire.",
					],
					"missionStartWaterDescription":[
						"In the valley, a withered tree seems to emanate a dim light. Maybe, watering it...",
						"The hot sun has made your throat dry. You would need a drop of water but the nearest river is miles away.",
						"You haven't come across an inn in a long time... and you suspect you need a good bathroom.",
					],
					"missionStartWaterShortDescription":[
						"A magical tree needs water.",
						"You need a sip of water.",
						"You suspect you need a good bathroom.",
					],
					"missionStartDigDescription":[
						"A gem stuck in rock seems to be asking for your help. With a spell, you might be able to extract it...",
						"A huge rock blocks the passage to a very interesting cave. Magic could help you break it!",
						"A huge body of water interrupts your journey. You could build a rock bridge with magic...",
					],
					"missionStartDigShortDescription":[
						"By shattering a rock you could collect a gem.",
						"A rock blocks a tunnel.",
					],
					"missionStartBlowDescription":[
						"A mill was hastily abandoned. With a little wind, you could produce some flour.",
						"According to the indications, a treasure is hidden at the end of a path but a thick fog does not allow you to continue.",
						"A little boy asks for help, hanging from a root in a deep pit! You could lift it with a gust of wind...",
					],
					"missionStartBlowShortDescription":[
						"You see a complex contraption with large wind turbines.",
						"A shimmering object hides in the fog.",
					],
				},
				"eventBidirectionalTeleport":{
					"missionStartShortText":[
						"As soon as you touch the seal you disappear into thin air. Move to any cell in {roomId-room2}.",
					],
					"missionEndShortText":[
						"As soon as you touch the seal you disappear into thin air. Move to any cell in {roomId-room1}.",
					],
				},
				"eventTeleportTrap":{
					"missionStartShortText":[
						"As soon as you touch the seal you disappear into thin air. Move to any cell in {roomId-trapRoom}.",
					],
				},
				"eventDarkRitual":{
					"missionStartTitle":[
						"The Ritual",
						"The Rite",
						"The Sacrifice",
					],
					"missionStartDescription":[
						"Some hooded monks form a circle around you. \"A blood sacrifice...\" one of them hisses.",
						"\"Your blood...\" A hooded woman whispers. \"Give it to us. We will reward you!\" then continues giggling.",
						"A meaningless chant enters your head, whispering: \"Give me blood, I'll give you my power!\"",
					],
					"missionStartShortDescription":[
						"Monks offer you a blood sacrifice.",
					],
				},
				"eventMigration":{
					"missionStartTitle":[
						"The Migration",
						"The Travel",
						"The Caravan",
					],
					"missionStartDescription":[
						"You see a long caravan go by. Who knows where it's headed...",
						"On the horizon you see a long line of lined-up wagons pass by. Will you join them?",
						"The trotting of the horses resounds through the valley, accompanying a line of pilgrims...",
					],
				},
				"eventObservatory":{
					"missionStartTitle":[
						"The Observatory",
						"The Stars",
						"The Astrolabe",
					],
					"missionStartDescription":[
						"An elderly gentleman looks away from his huge telescope. \"You could ask the stars for help...\"",
						"\"The stars\" screams an old lady. \"They know everything. Look for them.\"",
						"You glance at the sky and dozens of shooting stars streak the sky. Do the stars want to help you?",
					],
					"missionStartShortDescription":[
						"You look for help among the stars...",
						"You feel the call of the stars...",
					],
				},
				"eventGambler":{
					"missionStartTitle":[
						"The Bet",
						"The Risk",
						"The Game",
					],
					"missionStartDescription":[
						"A mysterious figure slowly shuffles a deck of cards in the shadows of an alley. \"Hey, traveler! A bet?\"",
						"\"How much gold do you have there, huh? How lucky...\" They spin a pair of dice in their fingers. \"Do you want more?\"",
						"A small crowd wraps around a petite figure, rapidly swapping upside-down glasses. \"Come on, let's bet!\"",
					],
					"missionStartShortDescription":[
						"\"Let's bet!\"",
					],
				},
				"eventSacrifice":{
					"missionStartTitle":[
						"The Sacrifice",
						"The Execution",
						"The Punishment",
					],
					"missionStartDescription":[
						"The crowd gathered around a stake. \"Burn her! She's a witch!\" Will you do anything to save the girl?",
						"A group of shady characters is kicking a tiny figure in an alley. Will you do something?",
						"A killer on a roof targeted a girl. If you don't do something for her it will be the end. Will you do something?",
					],
					"missionStartShortDescription":[
						"\"I have to save that woman from the stake!\"",
						"\"I have to save that baby!\"",
						"\"If I don't do something it will end badly!\"",
					],
				},
			},
		},
	};