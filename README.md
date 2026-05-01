# SoftUni-Courses
Courses from my education @ Softuni.

## Как да стартираш портфолиото (macOS)

Проблемът при теб е, че папката `/workspace/SoftUni-Courses` е валидна **само в тази среда**, но не и на твоя Mac.

### 1) Намери къде е проектът на твоя компютър
Ако вече си го клонирал, влез в реалната папка, например:

```bash
cd ~/SoftUni-Courses
```

Ако не си го клонирал още:

```bash
cd ~
git clone <URL-на-репото> SoftUni-Courses
cd SoftUni-Courses
```
> ⚠️ Важно: НЕ копирай буквално `<URL-на-репото>` или `<user>/<repo>`.
> Това са placeholders. Трябва да ги замениш с реалния GitHub адрес на твоето repo.

Пример с реална форма на команда:

```bash
git clone https://github.com/your-username/SoftUni-Courses.git SoftUni-Courses
```


### 2) Провери дали файловете са там

```bash
ls
```

Трябва да виждаш `index.html`, `styles.css`, `script.js`.

### 3) Стартирай локален сървър

Вариант A (ако имаш Python 3):

```bash
python3 -m http.server 8080
```

Вариант B (ако нямаш Python/Xcode tools):

```bash
npx serve -l 8080
```

### 4) Отвори в браузър

- http://localhost:8080/index.html

## Защо получаваш 404
Получаваш 404, когато сървърът е стартиран в грешна папка (без `index.html`).
Преди стартиране на сървъра винаги влизай в директорията на проекта.
