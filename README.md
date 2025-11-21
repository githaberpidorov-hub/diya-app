# Diya App

Приложение Дія для Android

## Как собрать APK через GitHub Actions

### Шаг 1: Создайте репозиторий на GitHub
1. Зайдите на https://github.com
2. Нажмите "New repository"
3. Название: `diya-app`
4. Выберите "Public"
5. Нажмите "Create repository"

### Шаг 2: Загрузите файлы
Загрузите в репозиторий все файлы из этой папки:
- index.html
- папку access/
- manifest.json
- photo.jpg
- photo_rights.jpg
- sign.png
- папку .github/ (ОБЯЗАТЕЛЬНО!)

### Шаг 3: Запустите сборку
1. Перейдите в раздел "Actions" в вашем репозитории
2. Нажмите на workflow "Build APK"
3. Нажмите "Run workflow" → "Run workflow"
4. Дождитесь окончания сборки (5-10 минут)

### Шаг 4: Скачайте APK
1. После завершения сборки нажмите на название workflow
2. Внизу страницы найдите "Artifacts"
3. Скачайте "diya-app.zip"
4. Распакуйте - внутри будет app-debug.apk

## Альтернативный способ - через Git командную строку

```bash
# 1. Инициализируйте Git в папке с файлами
git init

# 2. Добавьте все файлы
git add .

# 3. Сделайте коммит
git commit -m "Initial commit"

# 4. Добавьте удаленный репозиторий (замените YOUR_USERNAME на ваш логин)
git remote add origin https://github.com/YOUR_USERNAME/diya-app.git

# 5. Отправьте файлы
git branch -M main
git push -u origin main
```

После push'а GitHub автоматически начнет сборку APK!

## Готово!
APK будет доступен в разделе Actions → Artifacts
