<template>
  <FormCard class="w-full max-w-md mx-auto mt-10 mb-16 py-10 px-12">
    <FormCardTitle title="Entrar" />

    <LoginForm />

    <p class="text-lg mt-6">
      Não tem uma conta?
      <Link text="Registre-se" to="/signup" />
    </p>
  </FormCard>
</template>
