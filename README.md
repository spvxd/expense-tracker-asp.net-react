# Expense Tracker


---

## 🚀 Запуск проекта

### 📦 Подготовка базы данных (PostgreSQL с использованием Docker)
Запустите контейнер с PostgreSQL:
```bash
docker run --name container_name -p 5432:5432 -e POSTGRES_PASSWORD=your_password -d postgres
```
## 📚 Миграции Entity Framework Core

```bash
dotnet ef migrations add Init --startup-project .\WebApi\WebApi.csproj --project DataAccess/DataAccess.csproj  

```

```bash
dotnet ef database update --startup-project .\WebApi\WebApi.csproj --project DataAccess/DataAccess.csproj  

```