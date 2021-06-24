<template>
  <FormCard class="w-full max-w-md mx-auto my-16 py-10 px-12">
    <h1 class="text-typo--darken font-semibold text-[42px] tracking-wide mb-8">
      Entrar
    </h1>

    <LoginForm />

    <p class="text-lg mt-6">
      Não tem uma conta?
      <Link text="Registre-se" to="/signup" />
    </p>
  </FormCard>
</template>
