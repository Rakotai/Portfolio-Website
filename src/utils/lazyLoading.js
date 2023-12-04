

// function LazyLoading() {
// document.querySelector('lazy-loading').addEventListener('focus', function() {
//     this.value = "lazy";
//  });
// };
// window.onload = LazyLoading;


// export default LazyLoading;

const LazyLoading = () => {
    const images = document.querySelectorAll('.lazy-loading');

    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    })

}

export default LazyLoading;