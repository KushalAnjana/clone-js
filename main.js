const addNewButton = document.getElementById('add');

const  updateLSData = () => {
   const textareaData = document.querySelectorAll('textarea');
   const notes= [];
   textareaData.forEach((note) =>{
       return notes.push(note.value);
   })
   console.log(notes);

   localStorage.setItem('notes' ,JSON.stringify(notes));
}

const addNewNote = (text = '') =>{
    const note = document.createElement('div');
    note.classList.add('container');

    const htmlData = ` 
        

        <div class="message">

        <div class="message-content">
            <div class="main ${text ? "" : "hidden"}"></div>
        
            <textarea class = "${text ? "hidden" : ""} " ></textarea>
        </div>
        
        <div class="cf">
        <button type="button" class = "delete">Delete</button>
        <button type="button" class = "edit">Add</button>
      </div>
    </div>
    

 `;

note.insertAdjacentHTML('afterbegin',htmlData);
const delbtn =  note.querySelector('.delete');
const editbtn = note.querySelector('.edit');
const maindiv = note.querySelector('.main');
const textarea = note.querySelector('textarea');
 
 


delbtn.addEventListener('click' ,() => {
    note.remove();
    updateLSData();
})

textarea.value = text;
maindiv.innerHTML = text ;
editbtn.addEventListener('click' ,() =>{
    maindiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
} )


textarea.addEventListener('change' ,(event) =>{
    const value = event.target.value;
    maindiv.innerHTML = value;


    updateLSData();

})

document.body.appendChild(note);
}


const notes  = JSON.parse(localStorage.getItem('notes'));
if(notes){ notes.forEach((note) => addNewNote(note)) };

addNewButton.addEventListener('click' , () => {
    addNewNote()
})