
const heightInput = document.getElementById('heightInput');
  const dynamicImage = document.getElementById('dynamicImage');
  const dialogBox = document.getElementById('dialog-box');

  heightInput.addEventListener('input', function() {
    const enteredHeight = parseInt(this.value);
    if (enteredHeight >= 0 && enteredHeight <= 600) {
      dynamicImage.style.display = 'block';
      dynamicImage.style.height = enteredHeight * 2.06 + 'px'; 
      this.classList.remove('invalid'); 
    } else {
      dynamicImage.style.display = 'none'; 
      this.classList.add('invalid'); 
    }

    

    if (enteredHeight >= 50 && enteredHeight <= 100) {
      dialogBox.textContent = 'Eww..I stepped on an insect it seems 🥱';
      dialogBox.style.display = 'block';
    } else if (enteredHeight >= 100 && enteredHeight <= 140) {
      dialogBox.textContent = 'Even my shoe is taller than you 😭';
      dialogBox.style.display = 'block';
    } else if (enteredHeight > 140 && enteredHeight <= 180) {
      dialogBox.textContent = 'Ah..I got neck pain 😷';
      dialogBox.style.display = 'block';
    } else if (enteredHeight > 180 && enteredHeight <= 210) {
      dialogBox.textContent = 'Now i got my Armrest!😸';
      dialogBox.style.display = 'block';  
    }
    else if (enteredHeight > 210 && enteredHeight <= 250) {
      dialogBox.textContent = 'Hello kid 🤝';
      dialogBox.style.display = 'block';
    }
    else if (enteredHeight > 250) {
      dialogBox.textContent = 'Cheater..😡';
      dialogBox.style.display = 'block';
    }
    else {
      dialogBox.style.display = 'none'; 
    }

  });