    // Function to toggle the visibility of the text
    function toggleText(textId) {
        var text = document.getElementById(textId);
        text.style.display = (text.style.display === 'none' || text.style.display === '') ? 'block' : 'none';
    }