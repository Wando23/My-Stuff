<script>
    let image1 = "/petting-cat.gif";  // Default image
    let image2 = "/cat-meow.gif";  // Hover image
    let image3 = "/plink-cat-blink.gif";  // Clicked image
    let image4 = "/oia-uia.gif";  // Image after 20 clicks
    let image5 = "/happy-cat.gif";  // New image for after "Yes" clicked
    
    let currentImage = image1;  // Track current image
    let clickCount = 0;  // Click counter
    let showCheckpoint0 = true;
    let showCheckpoint1 = false;  // Controls message visibility
    let showCheckpoint2 = false;  // Controls message visibility
    let yay = false;
    let confirmed = false;  // To track if the "Yes" button was clicked
    let hearts = [];  // Store heart elements for animation
    let oscillateBg = false;  // Flag to trigger background oscillation
  
    function handleClick() {
      clickCount++;
  
      if (clickCount === 5) {
        currentImage = image2;
        showCheckpoint0 = false;
        showCheckpoint1 = true;  // Show message at 5 clicks
      } else if (clickCount === 20) {
        currentImage = image3;  // Switch to image3 at 20 clicks
        showCheckpoint1 = false;
        showCheckpoint2 = true;
      } else if (clickCount > 50) {
        showCheckpoint2 = false;
        yay = true;
        currentImage = image4;
      }
    }
  
    function handleYesClick() {
      confirmed = true;  // Set confirmed to true when the button is clicked
      currentImage = image5;
      generateHearts();  // Generate hearts when "Yes" is clicked
      oscillateBg = true;  // Start the background oscillation
    }
  
    // Function to generate heart animations
    function generateHearts() {
      let numberOfHearts = 10;  // Number of hearts to generate
      for (let i = 0; i < numberOfHearts; i++) {
        hearts.push({
          id: i,
          left: `${Math.random() * 100}%`,  // Random position
          animationDuration: `${Math.random() * 3 + 2}s`,  // Random duration for the animation
          size: `${Math.random() * 20 + 10}px`,  // Random size for hearts
          delay: `${Math.random() * 2}s`,  // Random delay for each heart
        });
      }
    }
  </script>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      position: relative;  /* Needed for absolute positioning of hearts */
      background-color: white;  /* Initial background color */
      transition: background-color 2s ease-in-out; /* Smooth transition for background */
      animation: none;  /* No animation by default */
    }
  
    /* Keyframes for oscillating background */
    @keyframes oscillateBackground {
      0% {
        background-color: pink;  /* Light pink */
      }
      50% {
        background-color: #ff66b2;  /* Medium pink */
      }
      100% {
        background-color: pink;  /* Light pink */
      }
    }
  
    /* Apply background oscillation if the user clicked 'Yes' */
    .oscillating-bg {
      animation: oscillateBackground 5s infinite alternate;
    }
  
    .clickable-image {
      cursor: pointer;
      width: 200px;
      height: auto;
      transition: opacity 0.3s ease-in-out;
    }
  
    .message {
      margin-top: 20px;
      font-size: 20px;
      color: red;
      font-weight: bold;
    }
  
    .final_message {
      margin-top: 30px;
      font-size: 40px;
      color: red;
      font-weight: bold;
    }
  
    .yes-button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 18px;
      color: red;
      background-color: pink;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .yes-button:hover {
      background-color: lightcoral;
    }
  
    /* Heart Animation */
    .heart {
      position: absolute;
      bottom: 20px;
      font-size: 2rem;
      color: red;
      animation: floatUp 5s ease-in forwards;
      opacity: 0;
    }
  
    /* Keyframes for floating hearts */
    @keyframes floatUp {
      0% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(-200px) scale(1.5);
        opacity: 0;
      }
    }
  </style>
  
  <div class="container {oscillateBg ? 'oscillating-bg' : ''}">
    <img
      src={currentImage}
      alt="Clickable Image"
      class="clickable-image"
      on:click={handleClick}
    />
  
    {#if showCheckpoint0}
      <div class="message">Hi, click mo to ^</div>
    {/if} 
    {#if showCheckpoint1}
      <div class="message">Okay ba't ko nga ba uli ginawa to? Sorry di aq marunong magcss/html</div>
    {/if}
    {#if showCheckpoint2}
      <div class="message">Apakaobvius nmn neto..pero continue pls</div>
    {/if}
    {#if yay}
      <div class="message">Be my Valentines for tomorrow evening? :33</div>
    {/if}
  
    {#if yay && !confirmed}
      <button class="yes-button" on:click={handleYesClick}>Yes (Oo walang No)</button>
    {/if}
  
    {#if confirmed}
      <div class="final_message">YAY! C U then :33 💖💖</div>
  
      <!-- Generate hearts animation -->
      {#each hearts as heart}
        <div
          class="heart"
          style="left: {heart.left}; animation-duration: {heart.animationDuration}; font-size: {heart.size}; animation-delay: {heart.delay};"
          key={heart.id}
        >
          ❤️
        </div>
      {/each}
    {/if}
  </div>
  