# Branch useCityPreview

### Arquivos a serem analisados 

- screens/FormFreight/index.tsx
- components/SelectCity/index.tsx
- hooks/useCity.tsx


Essa Branch foi criada com o intuito de compreender erros causados pelo hook **useCity**, o hook não propaga a alteração de estado para o componente **SelectCity** e consequentemente o onChange da screen **FormFreight** não é disparado.

Versão inicial do hook foi feita com useEffect, no entanto a tentativa é de justamente não utilizar efeitos desnecessários, assim como descrito na documentação do react [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

Tentei criar um __state__ para setar o valor inicial e outro __state__ para ser alterado após o da função handleNewCity, mas não obtive sucesso.

O hook sempre retorna o valor da renderização anterior, mesmo após a alteração do estado, aparentemente é um erro básico, mas necessário uma melhor análise
