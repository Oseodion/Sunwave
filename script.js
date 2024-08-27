// hamburger MenuBar start
function toggleOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay.style.display === "block") {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "block";
  }
}
// hamburger MenuBar end 

// FAQ section start
document.getElementById('sub_section1').addEventListener('click', function () {
  toggleDropdown('dropdown1', this.querySelector('.icon'));
});

document.getElementById('sub_section2').addEventListener('click', function () {
  toggleDropdown('dropdown2', this.querySelector('.icon'));
});

document.getElementById('sub_section3').addEventListener('click', function () {
  toggleDropdown('dropdown3', this.querySelector('.icon'));
});

document.getElementById('sub_section4').addEventListener('click', function () {
  toggleDropdown('dropdown4', this.querySelector('.icon'));
});

document.getElementById('sub_section5').addEventListener('click', function () {
  toggleDropdown('dropdown5', this.querySelector('.icon'));
});

document.getElementById('sub_section6').addEventListener('click', function () {
  toggleDropdown('dropdown6', this.querySelector('.icon'));
});

function toggleDropdown(dropdownId, icon) {
  const dropdown = document.getElementById(dropdownId);
  const isOpen = dropdown.classList.contains('open');

  if (isOpen) {
    dropdown.classList.remove('open');
    icon.classList.remove('open');
  } else {
    dropdown.classList.add('open');
    icon.classList.add('open');
  }
}
// FAQ section end 

// scrollToTop Animation start
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  let inactivityTimeout;

  // Show button when scrolling down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Change 300 to your desired scroll position
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Scroll to top on button click
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Reset inactivity timer on user activity
  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimeout);
    scrollToTopBtn.classList.remove('invisible');
    inactivityTimeout = setTimeout(() => {
      scrollToTopBtn.classList.add('invisible');
    }, 2000); // 2 seconds
  };

  // Detect user activity
  ['scroll', 'mousemove', 'keypress', 'touchstart'].forEach(event => {
    window.addEventListener(event, resetInactivityTimer);
  });
});
// scrollToTop Animation End 



// sub_section2 section number counting animation start 
document.addEventListener('DOMContentLoaded', () => {

  // Define the elements and their count details
  const counts = [
    { element: document.getElementById('count1'), start: 500000, end: 3000000, duration: 1000 },
    { element: document.getElementById('count2'), start: 10, end: 30, duration: 1000 }
  ];

  let hasCounted = false;  //Flag to ensure counting happens only once

  // Function to handle the counting animation
  const countUp = (count) => {
    const startTime = performance.now();// Get the start time of the animation

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / count.duration, 1);
      const currentNumber = Math.floor(progress * (count.end - count.start) + count.start);

      count.element.textContent = currentNumber.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCounted) {
        counts.forEach(count => countUp(count));
        hasCounted = true;
      }
    });
  });

  observer.observe(document.getElementById('sub-section2'));
});
// sub_section2 section number counting animation end

// section3 animation
document.addEventListener('DOMContentLoaded', () => {

  let hasAnimatedSection3 = false; // Flag to ensure animation2 animation happens only once

  // IntersectionObserver to detect when animation2 comes into view
  const section3Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimatedSection3) { // Check if animation2 is in view and animation hasn't started
        document.querySelectorAll('.animated-text2').forEach(el => {
          el.style.transform = 'translateY(0)';
          el.style.opacity = '1';
        });
        hasAnimatedSection3 = true; // Set the flag to prevent re-animation
      }
    });
  });

  section3Observer.observe(document.getElementById('animation2')); // Observe animation2

  let hasAnimatedSection4 = false;
  // IntersectionObserver to detect when animation3 comes into view
  const section4Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimatedSection4) { // Check if animation3 is in view and animation hasn't started
        document.querySelectorAll('.animated-text3').forEach(el => {
          el.style.transform = 'translateY(0)';
          el.style.opacity = '1';
        });
        hasAnimatedSection4 = true; // Set the flag to prevent re-animation
      }
    });
  });

  section4Observer.observe(document.getElementById('animation3')); // Observe animation4


  let hasAnimatedSection6 = false;
  // IntersectionObserver to detect when animation4 comes into view
  const section6Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimatedSection6) { // Check if animation4 is in view and animation hasn't started
        document.querySelectorAll('.animated-text4').forEach(el => {
          el.style.transform = 'translateY(0)';
          el.style.opacity = '1';
        });
        hasAnimatedSection6 = true; // Set the flag to prevent re-animation
      }
    });
  });

  section6Observer.observe(document.getElementById('animation4'));

  // section7
  let hasAnimatedSection7 = false;
  const section7Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimatedSection7) {
        document.querySelectorAll('.animated-text5').forEach(el => {
          el.style.transform = 'translateY(0)';
          el.style.opacity = '1';
        });
        hasAnimatedSection7 = true;
      }
    });
  });

  section7Observer.observe(document.getElementById('animation5'));

  // section9
  let hasAnimatedSection9 = false;
  const section9Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimatedSection9) {
        document.querySelectorAll('.animated-text6').forEach(el => {
          el.style.transform = 'translateY(0)';
          el.style.opacity = '1';
        });
        hasAnimatedSection9 = true;
      }
    });
  });

  section9Observer.observe(document.getElementById('animation6'));
});
