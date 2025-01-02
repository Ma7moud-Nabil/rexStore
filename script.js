// Header Appearance

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// ================================================
// ================================================

// The effect of counting numbers when scrolling

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 800;

  const countUp = (counter) => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText.replace(/[^0-9]/g, "");
    const increment = target / speed;

    if (count < target) {
      counter.innerText = `+ ${Math.ceil(count + increment).toLocaleString()}`;
      setTimeout(() => countUp(counter), 1);
    } else {
      counter.innerText = `+ ${target.toLocaleString()}`;
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 1 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
  // ==================================================
  // ==================================================

  const container = document.querySelector(".subscriptions-container-wrapper");

  let isDown = false;
  let startX;
  let scrollLeft;
  let direction = 1; // 1 للتمرير لليمين، -1 للتمرير لليسار

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("active");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("active");
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("active");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // السرعة
    container.scrollLeft = scrollLeft - walk;
  });

  // للتمرير باللمس على الأجهزة المحمولة
  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // السرعة
    container.scrollLeft = scrollLeft - walk;
  });

  // التمرير التلقائي لليمين ولليسار بالتناوب كل 3 ثواني
  setInterval(() => {
    container.scrollBy({ left: 300 * direction, behavior: "smooth" });
    // تغيير الاتجاه عند الوصول إلى نهاية أو بداية التمرير
    if (
      container.scrollLeft + container.clientWidth >= container.scrollWidth ||
      container.scrollLeft === 0
    ) {
      direction *= -1;
    }
  }, 3000);

  // إضافة تأثير المطاطية عند الوصول إلى نهاية التمرير
  container.addEventListener("scroll", () => {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      setTimeout(() => {
        container.scrollBy({ left: -50, behavior: "smooth" });
        setTimeout(() => {
          container.scrollBy({ left: 50, behavior: "smooth" });
        }, 200);
      }, 500);
    } else if (container.scrollLeft === 0) {
      setTimeout(() => {
        container.scrollBy({ left: 50, behavior: "smooth" });
        setTimeout(() => {
          container.scrollBy({ left: -50, behavior: "smooth" });
        }, 200);
      }, 500);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".codes");

  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("active");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("active");
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("active");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // السرعة
    container.scrollLeft = scrollLeft - walk;
  });

  // للتمرير باللمس على الأجهزة المحمولة
  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // السرعة
    container.scrollLeft = scrollLeft - walk;
  });

  // إضافة تأثير المطاطية عند الوصول إلى نهاية التمرير
  container.addEventListener("scroll", () => {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      setTimeout(() => {
        container.scrollBy({ left: -50, behavior: "smooth" });
        setTimeout(() => {
          container.scrollBy({ left: 50, behavior: "smooth" });
        }, 200);
      }, 500);
    } else if (container.scrollLeft === 0) {
      setTimeout(() => {
        container.scrollBy({ left: 50, behavior: "smooth" });
        setTimeout(() => {
          container.scrollBy({ left: -50, behavior: "smooth" });
        }, 200);
      }, 500);
    }
  });
});
