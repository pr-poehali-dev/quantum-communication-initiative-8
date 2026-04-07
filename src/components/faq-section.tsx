import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько смолян участвовало в ликвидации последствий аварии?",
      answer: "По различным данным, в ликвидации последствий Чернобыльской катастрофы приняли участие более 10 000 жителей Смоленской области. Они работали в зоне отчуждения в разные периоды с 1986 по 1990 год.",
    },
    {
      question: "Какие льготы и выплаты полагаются ветеранам-ликвидаторам?",
      answer: "Ветераны-ликвидаторы имеют право на государственные льготы: ежемесячные выплаты, льготное медицинское обслуживание, санаторно-курортное лечение, налоговые льготы. За актуальной информацией обращайтесь в местное отделение Союза ветеранов Чернобыля.",
    },
    {
      question: "Где в Смоленске можно почтить память ликвидаторов?",
      answer: "В Смоленске есть несколько мест памяти ликвидаторов Чернобыля. Ежегодно 26 апреля проходят памятные мероприятия у городских мемориалов. Следите за анонсами на этой странице.",
    },
    {
      question: "Как можно помочь семьям ликвидаторов?",
      answer: "Вы можете связаться с организаторами страницы через форму обратной связи. Также существуют региональные и федеральные фонды поддержки ветеранов и семей пострадавших от Чернобыльской катастрофы.",
    },
    {
      question: "Как рассказать об истории своего родственника-ликвидатора?",
      answer: "Мы собираем истории смолян-ликвидаторов. Если ваш родственник участвовал в ликвидации последствий аварии, напишите нам через форму обратной связи — мы поможем сохранить его историю для потомков.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-space-mono text-sm tracking-[0.3em] uppercase mb-4">Вопросы и ответы</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Часто спрашивают</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на вопросы о ликвидаторах Чернобыля, памятных мероприятиях и поддержке ветеранов.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-amber-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-amber-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
