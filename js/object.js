function Dom(element) {
    this.element = document.querySelectorAll(element);
    this.returnElement = () =>{
        return this.element;
    }
    this.addClass = (classToAdd) =>{
        this.returnElement.forEach((item) => {
            item.classList.add(classToAdd);
        })
    }
    this.removeClass = (classToRemove) =>{
        this.returnElement.forEach((item) => {
            item.classList.remove(classToRemove);
        })
    }
}