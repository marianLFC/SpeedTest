document.getElementById('start-button').addEventListener('click', function() {
    const downloadElement = document.getElementById('download-speed');
    const uploadElement = document.getElementById('upload-speed');

    // Simulating the speed test
    downloadElement.textContent = 'Checking download speed...';
    setTimeout(function() {
        // Fake download speed test result
        let downloadSpeed = (Math.random() * 100 + 10).toFixed(2);
        downloadElement.textContent = `Avg Download Speed: ${downloadSpeed} Mbps`;

        // Start upload speed test after download test
        uploadElement.textContent = 'Checking upload speed...';
        setTimeout(function() {
            // Fake upload speed test result
            let uploadSpeed = (Math.random() * 50 + 5).toFixed(2);
            uploadElement.textContent = `Avg Upload Speed: ${uploadSpeed} Mbps`;
        }, 5000); // Simulating a 5 second delay for upload test
    }, 15000); // Simulating a 15 second delay for download test
});
