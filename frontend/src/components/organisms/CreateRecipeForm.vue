<template>
  <form class="w-md max-w-full grid grid-cols-1 gap-5" @submit.prevent.stop="">
    <Input label="Título" placeholder="Ex: canja especial" required />

    <Textarea
      label="Descrição"
      placeholder="Qual a origem desta receita? Qual foi sua inspiração?..."
      required
    />

    <UploadImage />

    <div class="grid grid-cols-1 gap-5 w-full max-w-full sm:grid-cols-2">
      <Input label="Tempo de preparo" placeholder="1h 30min" required />
      <Input label="Porções" placeholder="2" type="number" required />
    </div>

    <Button text="Enviar receita" class="mt-10 w-full max-w-full" />
  </form>
</template>
