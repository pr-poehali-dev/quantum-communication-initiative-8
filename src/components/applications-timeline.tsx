import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "26 апреля 1986",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            В 1:23 ночи произошёл взрыв на 4-м энергоблоке Чернобыльской АЭС. В первые часы на место прибыли пожарные расчёты, не имея представления о масштабах радиационной угрозы. Многие из них погибли в течение нескольких недель от лучевой болезни.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-amber-400 text-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Взрыв реактора в 1:23 ночи
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Первые пожарные прибыли в течение 7 минут
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              134 человека получили острую лучевую болезнь
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Лето–осень 1986",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Началась масштабная мобилизация со всей страны. Смоляне — пожарные, военные, шахтёры, строители, медики — были направлены в зону отчуждения. Шахтёры рыли тоннели, строители возводили «Саркофаг», вертолётчики сбрасывали поглощающие материалы на реактор.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-amber-400 text-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Строительство защитного «Саркофага»
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Дезактивация загрязнённых территорий
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Эвакуация более 350 000 жителей
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "1987–1990",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Работы по ликвидации последствий продолжались годами. Ликвидаторы посменно несли службу в опасной зоне, проводя дезактивацию, строя новые объекты, обеспечивая безопасность. Многие из них вернулись домой с подорванным здоровьем.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-amber-400 text-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Вахтовая работа в зоне отчуждения
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Постоянный мониторинг радиационного фона
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Медицинское наблюдение за участниками
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-space-mono text-sm tracking-[0.3em] uppercase mb-4">Хронология</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 font-orbitron">Дни подвига</h2>
          <div className="w-16 h-px bg-amber-500 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            С первых часов катастрофы и на протяжении многих лет тысячи людей отдавали себя ради спасения других
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
