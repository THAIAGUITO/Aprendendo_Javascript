# Comandos Úteis — Node.js no Windows (PowerShell)

Guia rápido de consulta para lidar com servidores Node/Express no Windows.

---

## 🟢 Rodar o servidor

```powershell
node server.js
```
Roda uma vez só. Se editar o código, precisa parar e rodar de novo manualmente.

```powershell
npx nodemon server.js
```
Roda com reinício automático a cada alteração salva.

---

## 🔴 Parar o servidor

```
Ctrl + C
```
Comando universal para interromper o processo rodando no terminal. Às vezes precisa apertar duas vezes ou confirmar com `Y` + `Enter`.

---

## 🔍 Ver quais processos Node estão rodando

```powershell
tasklist | findstr node
```
Mostra todos os processos `node.exe` ativos no momento — útil para identificar processos "fantasma" ocupando a porta.

---

## 💀 Matar processos Node "presos"

**Matar TODOS os processos Node de uma vez:**
```powershell
taskkill /F /IM node.exe
```

**Matar um processo específico pelo PID (número do processo):**
```powershell
taskkill /F /PID numero_do_pid
```
> O PID aparece na coluna do `tasklist`.

---

## 🔌 Ver o que está usando uma porta específica (ex: 3000)

```powershell
netstat -ano | findstr :3000
```
O último número da linha é o PID. Depois é só usar `taskkill /F /PID` com esse número.

---

## 🧪 Testar o servidor sem abrir o navegador

```powershell
curl.exe -v http://localhost:3000/
```
Mostra a resposta "crua" do servidor — ótimo para descartar problemas de cache do navegador.

---

## 📦 Comandos do npm mais usados

```powershell
npm init -y
```
Cria o `package.json` inicial do projeto.

```powershell
npm install express
```
Instala uma dependência (adiciona em `dependencies`).

```powershell
npm install --save-dev nodemon
```
Instala uma dependência só de desenvolvimento (adiciona em `devDependencies` — não vai para produção).

```powershell
npm list
```
Mostra as dependências instaladas no projeto atual.

```powershell
npm uninstall nome-do-pacote
```
Remove uma dependência.

---

## 🗂️ Comandos de navegação

```powershell
cd nome-da-pasta        # entrar em uma pasta
cd ..                   # voltar uma pasta
cd "nome com espaço"    # entrar em pasta com espaço no nome
ls                      # listar arquivos (PowerShell)
```

---

## 💡 Dica de ouro

Sempre que algo parecer "sem lógica" (mudou o código, mas nada muda no navegador), o primeiro reflexo deve ser:

```powershell
tasklist | findstr node
```

Se aparecer mais de uma linha, é sinal de processo fantasma — e o `taskkill /F /IM node.exe` resolve na hora.
