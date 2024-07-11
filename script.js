

document.addEventListener('mouseleave', function(){
    const cursor = document.querySelector('.cursor');
    cursor.style.opacity = 0;
})
document.addEventListener('mouseenter', function(){
    const cursor = document.querySelector('.cursor');
    cursor.style.opacity = 1;
})
document.addEventListener('mousemove', e=>{
    const cursor = document.querySelector('.cursor');
    cursor.style.top = `${e.pageY-8}px`
    cursor.style.left = `${e.pageX-8}px`
})

document.addEventListener('click', function(){
    const cursor = document.querySelector('.cursor');
    cursor.classList.add('expand')

    setTimeout(() =>{
        cursor.classList.remove('expand')
    }, 500)
})