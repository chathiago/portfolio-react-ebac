module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended', // Adicionado para regras gerais do React
    'plugin:jsx-a11y/recommended', // Adicionado para acessibilidade JSX
    'prettier', // Coloque 'prettier' por último para garantir que ele sobrescreva outras regras
    'plugin:prettier/recommended', // Adiciona as regras do plugin prettier
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'], // Ajuste se seu tsconfig.json estiver em outro lugar
  },
  settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React
    },
  },
  plugins: ['react-refresh', '@typescript-eslint', 'react', 'prettier'], // 'react' adicionado aqui e o 'prettier' também
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off', // Para React 17+ que não precisa mais importar React em todo arquivo
    '@typescript-eslint/no-explicit-any': 'off', // Exemplo: desabilitar 'any' se for permitido no seu projeto
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Avisar sobre variáveis não usadas, ignorando as que começam com '_'
    'prettier/prettier': 'error' // Garante que erros do Prettier sejam reportados como erros do ESLint
  },
};
