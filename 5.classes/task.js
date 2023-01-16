class PrintEditionItem {

 constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
 }

 fix() {
    this.state = this.state * 1.5;
 }

 set state (newState) {
    if (newState < 0) {
        this._state = 0;
    }
    else if (newState > 100) {
        this._state = 100;
    }
    else {
        this._state = newState;
    }
 }

 get state () {
    return this._state;
 }

}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'novel';
        //this.author = author;
    }
}

class FantasticBook extends Book {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'fantastic';
        //this.author = author;
    }
}

class DetectiveBook extends Book {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'detective';
        //this.author = author;
    }
}

class Library {

    constructor (name) {
        this.name = name;
        this.books = []; 
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
        
    }

    findBookBy(type, value) {
        const findResult = this.books.find((item) => item[type] === value);
        return findResult || null;
    }
        
    giveBookByName(bookName) {
        const findResult = this.books.find((item) => item.name === bookName);
        this.books = this.books.filter((item) => item.name !== bookName);
        return findResult || null;
    }

}


// student

class Student {
    constructor (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subjects = {};
    }

    addMark (mark, subjectName) {
        if (mark > 5 || mark < 1) {
            return 'Ошибка, оценка должна быть числом от 1 до 5';
        }


        if (this.subjects[subjectName] === undefined) {
            this.subjects[subjectName] = [mark];
        } else {
            this.subjects[subjectName].push(mark);
        }
    }
      
    addMarks (...marks) {
        if (this.marks === undefined) {
          this.marks = [...marks];
        } else {
          this.marks.push(...marks);
        }
    }  

    getAverageBySubject (subjectName) {

        if(!this.subjects[subjectName]) {
          return 'Несуществующий предмет';
        }

        let sum = 0;
        let avg = 0;

        sum =  this.subjects[subjectName].reduce((acc, mark) => acc + mark, 0);
        avg = sum / this.subjects[subjectName].length;

        return avg;
    }
      
    getAverage () {

        let sum = 0;
        let avg = 0;

        for (let subjectName in this.subjects) {
            let sumSubject = this.getAverageBySubject(subjectName);
            sum += sumSubject;
        }

        avg = sum/Object.keys(this.subjects).length;
        return avg;
    }
      
    exclude (reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }
}

