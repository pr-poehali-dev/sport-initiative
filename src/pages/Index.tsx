import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type Goal = 'weight-loss' | 'muscle-gain' | 'endurance' | null;
type Level = 'beginner' | 'intermediate' | 'advanced' | null;

interface Workout {
  id: string;
  name: string;
  duration: string;
  difficulty: string;
  exercises: number;
  category: string;
  icon: string;
}

const Index = () => {
  const [selectedGoal, setSelectedGoal] = useState<Goal>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level>(null);
  const [activeTab, setActiveTab] = useState('workouts');

  const goals = [
    { id: 'weight-loss', name: 'Похудение', icon: 'Flame', color: 'from-orange-500 to-pink-500' },
    { id: 'muscle-gain', name: 'Набор массы', icon: 'Dumbbell', color: 'from-blue-500 to-purple-500' },
    { id: 'endurance', name: 'Выносливость', icon: 'Zap', color: 'from-green-500 to-teal-500' }
  ];

  const levels = [
    { id: 'beginner', name: 'Новичок', desc: '0-6 месяцев опыта' },
    { id: 'intermediate', name: 'Средний', desc: '6-18 месяцев опыта' },
    { id: 'advanced', name: 'Продвинутый', desc: '18+ месяцев опыта' }
  ];

  const workouts: Workout[] = [
    { id: '1', name: 'Кардио для начинающих', duration: '30 мин', difficulty: 'Легко', exercises: 8, category: 'Кардио', icon: 'Activity' },
    { id: '2', name: 'Силовая тренировка', duration: '45 мин', difficulty: 'Средне', exercises: 12, category: 'Сила', icon: 'Dumbbell' },
    { id: '3', name: 'HIIT тренировка', duration: '25 мин', difficulty: 'Сложно', exercises: 10, category: 'Интенсив', icon: 'Zap' },
    { id: '4', name: 'Йога и растяжка', duration: '40 мин', difficulty: 'Легко', exercises: 15, category: 'Гибкость', icon: 'Heart' },
    { id: '5', name: 'Функциональный тренинг', duration: '35 мин', difficulty: 'Средне', exercises: 14, category: 'Функц.', icon: 'Activity' },
    { id: '6', name: 'Бег на выносливость', duration: '50 мин', difficulty: 'Средне', exercises: 6, category: 'Кардио', icon: 'Flame' }
  ];

  const stats = {
    totalWorkouts: 24,
    weekStreak: 5,
    caloriesBurned: 3420,
    minutesTrained: 680
  };

  const weeklyProgress = [
    { day: 'Пн', value: 80 },
    { day: 'Вт', value: 95 },
    { day: 'Ср', value: 60 },
    { day: 'Чт', value: 100 },
    { day: 'Пт', value: 70 },
    { day: 'Сб', value: 90 },
    { day: 'Вс', value: 85 }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <header className="mb-12 text-center">
          <p className="text-sm text-primary font-semibold mb-6 tracking-wider uppercase">Начни свой путь к здоровью</p>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
              <Icon name="Dumbbell" size={24} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FitProgress
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">Твой персональный фитнес-трекер</p>
        </header>

        {!selectedGoal || !selectedLevel ? (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Выбери свою цель</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {goals.map((goal) => (
                  <Card
                    key={goal.id}
                    className={`p-8 cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                      selectedGoal === goal.id ? 'border-primary shadow-2xl' : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedGoal(goal.id as Goal)}
                  >
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${goal.color} flex items-center justify-center mb-4 mx-auto`}>
                      <Icon name={goal.icon as any} size={36} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-center">{goal.name}</h3>
                  </Card>
                ))}
              </div>
            </div>

            {selectedGoal && (
              <div className="animate-scale-in">
                <h2 className="text-3xl font-bold mb-6 text-center">Твой уровень подготовки</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {levels.map((level) => (
                    <Card
                      key={level.id}
                      className={`p-8 cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                        selectedLevel === level.id ? 'border-primary shadow-2xl' : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedLevel(level.id as Level)}
                    >
                      <h3 className="text-2xl font-bold text-center mb-2">{level.name}</h3>
                      <p className="text-muted-foreground text-center">{level.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-14 rounded-2xl bg-card">
              <TabsTrigger value="workouts" className="rounded-xl text-base">
                <Icon name="Dumbbell" size={18} className="mr-2" />
                Тренировки
              </TabsTrigger>
              <TabsTrigger value="stats" className="rounded-xl text-base">
                <Icon name="TrendingUp" size={18} className="mr-2" />
                Статистика
              </TabsTrigger>
            </TabsList>

            <TabsContent value="workouts" className="space-y-6 animate-fade-in">
              <div className="bg-gradient-card rounded-3xl p-8 border border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Target" size={28} className="text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Твоя цель: {goals.find(g => g.id === selectedGoal)?.name}</h3>
                    <p className="text-muted-foreground">Уровень: {levels.find(l => l.id === selectedLevel)?.name}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Рекомендованные программы</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {workouts.map((workout) => (
                    <Card key={workout.id} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-border">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center">
                          <Icon name={workout.icon as any} size={24} className="text-white" />
                        </div>
                        <Badge variant="secondary" className="rounded-full">{workout.category}</Badge>
                      </div>
                      
                      <h4 className="text-xl font-bold mb-3">{workout.name}</h4>
                      
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={16} />
                          <span>{workout.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="BarChart" size={16} />
                          <span>{workout.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="List" size={16} />
                          <span>{workout.exercises} упражнений</span>
                        </div>
                      </div>

                      <Button className="w-full rounded-xl bg-gradient-primary hover:opacity-90">
                        Начать тренировку
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="stats" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: 'Flame', label: 'Калорий сожжено', value: stats.caloriesBurned, color: 'from-orange-500 to-red-500' },
                  { icon: 'Calendar', label: 'Серия дней', value: stats.weekStreak, color: 'from-green-500 to-emerald-500' },
                  { icon: 'Activity', label: 'Тренировок', value: stats.totalWorkouts, color: 'from-blue-500 to-cyan-500' },
                  { icon: 'Clock', label: 'Минут тренировок', value: stats.minutesTrained, color: 'from-purple-500 to-pink-500' }
                ].map((stat, idx) => (
                  <Card key={idx} className="p-6 border-border">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                      <Icon name={stat.icon as any} size={20} className="text-white" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-8 border-border">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                  Активность за неделю
                </h3>
                <div className="space-y-4">
                  {weeklyProgress.map((day) => (
                    <div key={day.day} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{day.day}</span>
                        <span className="text-muted-foreground">{day.value}%</span>
                      </div>
                      <Progress value={day.value} className="h-3 rounded-full" />
                    </div>
                  ))}
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-8 bg-gradient-card border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Trophy" size={32} className="text-yellow-500" />
                    <h3 className="text-2xl font-bold">Достижения</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50">
                      <Icon name="Flame" size={20} className="text-orange-500" />
                      <span>Серия 5 дней</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50">
                      <Icon name="Target" size={20} className="text-green-500" />
                      <span>25 тренировок выполнено</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50">
                      <Icon name="Award" size={20} className="text-purple-500" />
                      <span>Первая неделя завершена</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-card border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Target" size={32} className="text-primary" />
                    <h3 className="text-2xl font-bold">Цели месяца</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>20 тренировок</span>
                        <span className="text-primary font-semibold">12/20</span>
                      </div>
                      <Progress value={60} className="h-3 rounded-full" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>5000 калорий</span>
                        <span className="text-primary font-semibold">3420/5000</span>
                      </div>
                      <Progress value={68} className="h-3 rounded-full" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>10 часов активности</span>
                        <span className="text-primary font-semibold">11.3/10</span>
                      </div>
                      <Progress value={100} className="h-3 rounded-full" />
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        )}

        {(selectedGoal && selectedLevel) && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => {
                setSelectedGoal(null);
                setSelectedLevel(null);
              }}
            >
              <Icon name="RefreshCw" size={18} className="mr-2" />
              Изменить цель
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;