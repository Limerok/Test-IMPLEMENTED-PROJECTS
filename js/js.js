'use strict';
document.addEventListener('DOMContentLoaded', (event) => {
    const projectImages = document.querySelector('.project-images'),
        overlay = document.querySelector('.overlay'),
        fancybox = document.querySelector('.fancyboxs'),
        fancyboxBlockAdd = document.querySelector('.fancybox-block-add');


    function addContent (target) {
        const parent = target.parentElement,
        children = parent.children,
        img = children[0].cloneNode(true),
        h3 = children[1].cloneNode(true),
        text = children[2].cloneNode(true);

        img.style.width = '50%';
        h3.style.position ='static';
        h3.style.color = '#000';
        text.style.display = 'block';

        console.log(children);

        fancyboxBlockAdd.innerHTML = '';
        fancyboxBlockAdd.appendChild(img);
        fancyboxBlockAdd.appendChild(h3);
        fancyboxBlockAdd.appendChild(text);


        
    }

    projectImages.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;

        if (target.classList.contains('button-project-item')) {
            overlay.style.display = 'block';

            addContent (target.parentElement);
        }
    });

    fancybox.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;

        if (!target.classList.contains('fancybox-block') || target.classList.contains('fancybox-close')) {
            overlay.style.display = 'none';
        }
    });


    










});