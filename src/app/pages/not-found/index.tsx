export default function NotFound() {
  return (
    <>
      <title>404 - Página não encontrada</title>

      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-7xl font-bold text-foreground">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Página não encontrada</p>
          <a href="/" className="text-primary hover:underline" aria-label="Voltar para a página inicial">
            Voltar para a página inicial
          </a>
        </div>
      </div>
    </>
  );
}
