import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              ЧЕРНОБЫЛЬ<span className="text-amber-400">26</span>
            </h2>
            <p className="font-space-mono text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
              Страница памяти посвящена ликвидаторам Чернобыльской катастрофы — жителям Смоленской области, отдавшим здоровье и жизнь ради спасения страны.
            </p>
            <div className="flex items-center gap-2 text-amber-400 font-space-mono text-sm">
              <Icon name="Flame" size={16} />
              <span>Вечная память героям</span>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4 text-sm tracking-wider uppercase">Разделы</h3>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "О событии" },
                { href: "#heroes", label: "Герои" },
                { href: "#gallery", label: "Фотографии" },
                { href: "#faq", label: "Вопросы" },
                { href: "#contact", label: "Написать" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-space-mono text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-space-mono text-gray-600 text-xs text-center md:text-left">
            © 2024 Страница памяти ликвидаторов Чернобыльской катастрофы, Смоленск
          </p>
          <p className="font-space-mono text-gray-600 text-xs">
            26 апреля — День памяти жертв радиационных аварий и катастроф
          </p>
        </div>
      </div>
    </footer>
  )
}
