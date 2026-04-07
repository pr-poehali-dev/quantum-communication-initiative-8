import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const gallery = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Chernobyl_-_Abandoned_village_near_Duga_radar.jpg/1280px-Chernobyl_-_Abandoned_village_near_Duga_radar.jpg",
    caption: "Зона отчуждения. Покинутые дома",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Chernobyl_Disaster.jpg/1280px-Chernobyl_Disaster.jpg",
    caption: "Четвёртый энергоблок после взрыва",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Chernobyl_2013_G03.jpg/1280px-Chernobyl_2013_G03.jpg",
    caption: "Памятник ликвидаторам в Чернобыле",
  },
]

const memories = [
  {
    name: "Валентина Тихонова",
    role: "Вдова ликвидатора",
    content: "Муж уехал туда добровольцем. Говорил: «Кто, если не я?». Вернулся через три месяца другим человеком. Мы успели прожить ещё десять лет вместе. Помню каждый день.",
  },
  {
    name: "Андрей Кузнецов",
    role: "Сын ликвидатора, Смоленск",
    content: "Отцу тогда было 34 года. Он никогда не рассказывал в подробностях, что там было. Только говорил, что они сделали то, что должны были. Горжусь им каждый день.",
  },
  {
    name: "Пётр Алексеевич Данилов",
    role: "Ликвидатор, ветеран",
    content: "Нас было много. Мы не думали о наградах. Думали о том, что там — тысячи людей, которым нужна помощь. Сделали что могли. Жалею только, что многих наших уже нет рядом.",
  },
]

export function TestimonialsSection() {
  return (
    <>
      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-space-mono text-sm tracking-[0.3em] uppercase mb-4">Документальная память</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-orbitron mb-4">Фотогалерея</h2>
            <div className="w-16 h-px bg-amber-500 mx-auto mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Снимки, которые сохранили для нас правду о тех днях
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {gallery.map((item, i) => (
              <div key={i} className="group relative overflow-hidden border border-amber-500/20 slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.jpg"
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-4 py-3">
                  <p className="text-gray-300 font-space-mono text-xs">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-amber-500/20 bg-zinc-900/30 p-6 text-center">
            <Icon name="Camera" size={24} className="text-amber-400 mx-auto mb-3" />
            <p className="text-gray-400 text-sm font-space-mono">
              Если у вас есть фотографии или материалы о смолянах-ликвидаторах, пожалуйста, поделитесь ими через форму ниже
            </p>
          </div>
        </div>
      </section>

      {/* Memories */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-space-mono text-sm tracking-[0.3em] uppercase mb-4">Живая память</p>
            <h2 className="text-4xl font-bold text-card-foreground font-orbitron mb-4">Воспоминания</h2>
            <div className="w-16 h-px bg-amber-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memories.map((memory, index) => (
              <Card key={index} className="glow-border slide-up border-amber-500/20" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-6">
                  <Icon name="Quote" size={24} className="text-amber-400 mb-4" />
                  <p className="text-card-foreground mb-6 leading-relaxed italic text-sm">"{memory.content}"</p>
                  <div>
                    <p className="font-semibold text-amber-400 font-orbitron text-sm">{memory.name}</p>
                    <p className="text-xs text-muted-foreground font-space-mono mt-1">{memory.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
