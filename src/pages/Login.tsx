
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Разрешаем вход с любыми данными
    console.log('Login attempt:', { email, password });
    
    // Перенаправляем в личный кабинет
    navigate('/account');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-2xl p-8 shadow-xl">
            {/* Логотип */}
            <div className="text-center mb-8">
              <img 
                src="/lovable-uploads/696510d7-9903-4f21-967c-1a7892efc8ac.png" 
                alt="SKYNET" 
                className="h-12 mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Вход в личный кабинет
              </h1>
              <p className="text-gray-600">
                Управляйте своими услугами онлайн
              </p>
            </div>

            {/* Форма */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-skynet-orange focus:ring-skynet-orange" />
                  <span className="ml-2 text-sm text-gray-600">Запомнить меня</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-skynet-orange hover:text-skynet-orange-bright">
                  Забыли пароль?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                Войти
              </Button>
            </form>

            {/* Дополнительные опции */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Нет аккаунта?{' '}
                <Link to="/register" className="text-skynet-orange hover:text-skynet-orange-bright font-medium">
                  Зарегистрироваться
                </Link>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-xs text-gray-500">
                Нужна помощь?{' '}
                <Link to="/contacts" className="text-skynet-orange hover:text-skynet-orange-bright">
                  Свяжитесь с нами
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
