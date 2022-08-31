Ориентированная на вид / представления библиотека
Подходит как для инеграций в существующие проекты, так и для полноценных SPA

плюсы: 
простота подключения
маленький вес

# ПРИМЕРЫ БЕЗ NUXT

## Подключение компонента:

// index.html 

```

<div id="simplevue">
    <h1>{{string}}</h1>
</div>
<script src="app.js"></script>

```

// app.js

new Vue ({
    el: "#simplevue", // определяется контейнер
    data: {
        string: "Hello World!" // данные для компонента
    }
})

## Данные и методы

```
<div id="simple">
    <input v-model="name"/> // v-model - позволяет изменять свойства модели (динамически меняет состояние в компоненте)
    <h1>{{greet()}}</h1> // использование метода
    <h2>{{job}}</h2>
</div>
```

new Vue ({
    el: "#simple",
    data: {
        name: "Mark",
        job: "Painter"
    },
    methods: {
        greet: function(){ // создание метода, можно использовать в рамках html элемента
            return "Hello my name is" + this.name // обращение к data через this //
        }
    }
})

## привязка данных