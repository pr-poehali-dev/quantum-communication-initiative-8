import Icon from "@/components/ui/icon"

const heroes = [
  {
    name: "Николай Васильевич Тихонов",
    role: "Пожарный, г. Смоленск",
    years: "1986–1987",
    icon: "Flame",
    story: "Один из первых смолян, прибывших на место аварии в составе пожарного расчёта. Работал в непосредственной близости от разрушенного реактора, тушил пожар и эвакуировал людей. Получил высокую дозу радиации.",
  },
  {
    name: "Александр Петрович Кузнецов",
    role: "Военнослужащий, Смоленская область",
    years: "1987",
    icon: "Shield",
    story: "Участвовал в дезактивации территории и строительстве «Саркофага» над разрушенным реактором. Провёл в зоне отчуждения несколько месяцев, выполняя работы в условиях повышенной радиационной опасности.",
  },
  {
    name: "Иван Сергеевич Морозов",
    role: "Шахтёр, Смоленск",
    years: "1986",
    icon: "HardHat",
    story: "Добровольцем вошёл в бригаду шахтёров, которые рыли тоннель под реактором для предотвращения загрязнения грунтовых вод. Тяжелейшая работа в условиях жары и радиации без должной защиты.",
  },
  {
    name: "Михаил Иванович Фролов",
    role: "Инженер-строитель, г. Рославль",
    years: "1986–1988",
    icon: "Wrench",
    story: "Руководил строительными работами в зоне отчуждения. Организовывал возведение защитных сооружений и жилья для вахтового персонала. Три года посвятил ликвидации последствий катастрофы.",
  },
  {
    name: "Сергей Николаевич Белов",
    role: "Медик, Смоленск",
    years: "1986",
    icon: "HeartPulse",
    story: "Военный врач, оказывавший первую медицинскую помощь пострадавшим от радиации. Работал в полевых условиях, нередко без достаточного медицинского оборудования и средств защиты.",
  },
  {
    name: "Владимир Алексеевич Громов",
    role: "Вертолётчик, авиаполк Смоленщины",
    years: "1986",
    icon: "Wind",
    story: "Совершил десятки вылетов для сброса поглощающих материалов на разрушенный реактор. Каждый вылет означал получение дозы радиации. Был удостоен государственной награды за мужество.",
  },
]

export function FeaturesSection() {
  return (
    <section id="heroes" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-space-mono text-sm tracking-[0.3em] uppercase mb-4">Лица подвига</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-orbitron mb-4">Герои Смоленщины</h2>
          <div className="w-16 h-px bg-amber-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Среди тысяч ликвидаторов были наши земляки. Вот лишь некоторые из них — те, кто не остался в стороне
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heroes.map((hero, index) => (
            <div
              key={index}
              className="border border-amber-500/20 bg-zinc-900/50 p-6 hover:border-amber-500/50 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Icon name={hero.icon} size={22} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-orbitron text-white font-semibold text-base leading-tight">{hero.name}</h3>
                  <p className="text-amber-400 font-space-mono text-xs mt-1">{hero.role}</p>
                  <p className="text-gray-500 font-space-mono text-xs">{hero.years}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{hero.story}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 font-space-mono text-sm italic">
            Это лишь небольшая часть из тех, кто отдал здоровье и жизнь ради нас. Помним каждого.
          </p>
        </div>
      </div>
    </section>
  )
}
