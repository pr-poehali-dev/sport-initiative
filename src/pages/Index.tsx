import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        
        <div className="text-center mb-16 animate-fade-in">
          <div className="w-32 h-32 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center">
            <span className="text-5xl font-bold text-white">МА</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Монгуш Айрат
          </h1>
          <p className="text-2xl text-muted-foreground mb-2">11а класс</p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="lg" className="rounded-xl gap-2">
              <Icon name="Mail" size={20} />
              Написать
            </Button>
            <Button size="lg" className="rounded-xl gap-2 bg-gradient-primary hover:opacity-90">
              <Icon name="Phone" size={20} />
              Позвонить
            </Button>
          </div>
        </div>

        <Card className="p-8 md:p-12 border-border animate-scale-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center">
              <Icon name="User" size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold">О себе</h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Привет! Я Монгуш Айрат, ученик 11а класса. Увлекаюсь современными технологиями, 
              люблю изучать новое и развиваться в разных направлениях.
            </p>
            <p>
              В свободное время занимаюсь спортом, читаю книги и провожу время с друзьями. 
              Стремлюсь к постоянному саморазвитию и достижению поставленных целей.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-card border border-primary/20">
              <Icon name="GraduationCap" size={32} className="mx-auto mb-3 text-primary" />
              <p className="font-semibold text-lg">Образование</p>
              <p className="text-muted-foreground text-sm mt-2">11а класс</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-card border border-primary/20">
              <Icon name="Target" size={32} className="mx-auto mb-3 text-secondary" />
              <p className="font-semibold text-lg">Цели</p>
              <p className="text-muted-foreground text-sm mt-2">Развитие и рост</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-card border border-primary/20">
              <Icon name="Heart" size={32} className="mx-auto mb-3 text-accent" />
              <p className="font-semibold text-lg">Интересы</p>
              <p className="text-muted-foreground text-sm mt-2">Спорт, технологии</p>
            </div>
          </div>
        </Card>

        <footer className="text-center mt-16 text-muted-foreground">
          <p>© 2024 Монгуш Айрат</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
