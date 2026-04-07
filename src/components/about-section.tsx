export function AboutSection() {
  const stats = [
    { value: "600 000+", label: "Ликвидаторов по всей стране" },
    { value: "10 000+", label: "Жителей Смоленской области" },
    { value: "26 апреля", label: "День памяти жертв" },
    { value: "1986", label: "Год катастрофы" },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-space-mono text-sm tracking-[0.3em] uppercase mb-4">Историческая справка</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-orbitron mb-6">О событии</h2>
          <div className="w-16 h-px bg-amber-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              26 апреля 1986 года на Чернобыльской атомной электростанции произошла крупнейшая в истории человечества ядерная катастрофа. Взрыв четвёртого энергоблока выбросил в атмосферу колоссальное количество радиоактивных веществ.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Для ликвидации последствий аварии со всего Советского Союза были мобилизованы сотни тысяч людей — военных, пожарных, шахтёров, врачей, строителей. Среди них — тысячи жителей Смоленской области.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Смоляне работали в опасной зоне отчуждения, ценой собственного здоровья и жизни предотвращая ещё большую экологическую катастрофу. Их подвиг невозможно переоценить.
            </p>
          </div>

          <div className="bg-card border border-amber-500/20 p-8 space-y-6">
            <blockquote className="text-xl text-foreground font-light italic leading-relaxed border-l-4 border-amber-500 pl-6">
              «Они не думали о себе. Они думали о том, чтобы спасти нас всех. Это и есть настоящий подвиг.»
            </blockquote>
            <p className="text-muted-foreground font-space-mono text-sm">— Из воспоминаний очевидцев</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center border border-amber-500/20 p-6 slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-3xl font-bold text-amber-400 font-orbitron mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-space-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
