export default function NotFound() {
  return (
    <>
      <title>404 - Página não encontrada</title>

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-6">Página não encontrada</p>
          <a href="/" className="text-primary hover:underline" aria-label="Voltar para a página inicial">
            Voltar para a página inicial
          </a>
        </div>
      </div>
    </>
  );
}
