function addMedication() {
    const name = document.getElementById('medicationName').value;
    const time = document.getElementById('reminderTime').value;

    if (!name || !time) {
        alert('Please fill in all fields.');
        return;
    }

    const list = document.getElementById('medicationList');
    const item = document.createElement('li');
    item.textContent = `Take ${name} at ${new Date(time).toLocaleString()}`;
    list.appendChild(item);

    // Clear the input fields after adding
    document.getElementById('medicationName').value = '';
    document.getElementById('reminderTime').value = '';

}
