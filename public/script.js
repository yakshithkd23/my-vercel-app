document.addEventListener('DOMContentLoaded', function() {
    const countElement = document.getElementById('count');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const messageElement = document.getElementById('message');
    
    let count = 0;
    
    function updateCount() {
        countElement.textContent = count;
        messageElement.textContent = count === 0 
            ? "Start counting!" 
            : `Current count: ${count}`;
    }
    
    incrementBtn.addEventListener('click', function() {
        count++;
        updateCount();
    });
    
    decrementBtn.addEventListener('click', function() {
        count--;
        updateCount();
    });
    
    // Initialize
    updateCount();
});
