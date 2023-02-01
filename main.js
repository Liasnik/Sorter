const button = document.querySelector('.butt-1')
.addEventListener('click', myClick);

const button2 = document.querySelector('.butt-2')
.addEventListener('click', myClick2);

const button3 = document.querySelector('.butt-4')
.addEventListener('click', myClick3);

function myClick() {
    const keyWord = document.querySelector('.text-3').value; 
    const arrayKeywords = keyWord.split(' ')

    const inText = document.querySelector('.text-1').value;  
    
    const arrayFromString = inText.split('\n');

    let result1 = arrayFromString.filter( item => { 
        return arrayKeywords.some(forbidden => {
         return item.includes(forbidden);
        });
    });

    let mySet = new Set(result1)
    let newArrey = [...mySet]

    const listWith = newArrey.join('\n') 
    
    document.querySelector('.text-2').value = `${listWith}\n` 
    
    let result2 = arrayFromString.filter( item => { 
        return !arrayKeywords.some(forbidden => {
         return item.includes(forbidden);
        });
    });

    let mySet2 = new Set(result2)
    let newArrey2 = [...mySet2]

    const listWithout = newArrey2.join('\n')

     document.querySelector('.text-4').value = listWithout
};

function myClick2() {
    const keyWord = document.querySelector('.text-3').value;
    const arrayKeywords = keyWord.split(' ')

    const inText = document.querySelector('.text-1').value;  
    const arrayFromString = inText.split('\n');

    let result = [] 

    arrayFromString.filter( item => { 
           
      for (let i = 0; i < arrayKeywords.length; i++ ) {
         
        if (item.includes(arrayKeywords[i])) {
            result.push(item)
        }
      }
        return result
      });

      let mySet = new Set(result)
      let newArrey = [...mySet]

     const listWithout = newArrey.join('\n'); 
    document.querySelector('.text-2').value = listWithout;
};

function myClick3() {
    const keyWord = document.querySelector('.text-3').value;
    const arrayKeywords = keyWord.split(' ')

    const inText = document.querySelector('.text-1').value;  
    const arrayFromString = inText.split('\n');

     let result = arrayFromString.filter( item => { 
           return !arrayKeywords.some(forbidden => {
            return item.includes(forbidden);
           });
     });

      let mySet = new Set(result)
      let newArrey = [...mySet]
      
     const listWithout = newArrey.join('\n'); 
    document.querySelector('.text-4').value = listWithout;
};

