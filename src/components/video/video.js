exports.createVideo = function (lesson) {
    
    const element = document.createElement('iframe');
    element.setAttribute('frameborder', '0');
    element.setAttribute('src', `http://www.youtube.com/embed/${lesson.video}`);

    return element;
}

