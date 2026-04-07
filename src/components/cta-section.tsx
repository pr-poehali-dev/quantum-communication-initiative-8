import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

export function CTASection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-space-mono text-sm tracking-[0.3em] uppercase mb-4">Обратная связь</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-orbitron mb-4">Оставить сообщение</h2>
          <div className="w-16 h-px bg-amber-500 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Хотите выразить благодарность, поделиться историей родственника или задать вопрос организаторам? Напишите нам.
          </p>
        </div>

        {sent ? (
          <div className="text-center border border-amber-500/30 bg-amber-500/5 p-16 slide-up">
            <Icon name="Heart" size={48} className="text-amber-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground font-orbitron mb-4">Спасибо за ваше слово</h3>
            <p className="text-muted-foreground font-space-mono">
              Ваше сообщение передано организаторам. Мы помним каждого.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="border border-amber-500/20 bg-card p-8 md:p-12 space-y-6 slide-up">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-space-mono text-muted-foreground tracking-wider uppercase">Ваше имя</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванович"
                  required
                  className="bg-background border-amber-500/20 focus:border-amber-500 text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-space-mono text-muted-foreground tracking-wider uppercase">Email (необязательно)</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.ru"
                  className="bg-background border-amber-500/20 focus:border-amber-500 text-foreground"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-space-mono text-muted-foreground tracking-wider uppercase">Ваше сообщение</label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Напишите слова благодарности, поделитесь историей своего родственника или задайте вопрос..."
                required
                rows={6}
                className="bg-background border-amber-500/20 focus:border-amber-500 text-foreground resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold font-orbitron tracking-widest uppercase rounded-none"
            >
              Отправить сообщение
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
