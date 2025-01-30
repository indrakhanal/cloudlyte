$("#navmenu a").click(function (event) {
    event.preventDefault();
    let value = $(this).attr("value");

    $("#navmenu a").removeClass("active");
    $(this).addClass("active");

    // Select elements by class
    let homeElems = document.getElementsByClassName('home-temp');
    let aboutElems = document.getElementsByClassName('about-temp');
    let portfolioElems = document.getElementsByClassName('portfolio-temp');
    let serviceElems = document.getElementsByClassName('services-temp');
    let contactElems = document.getElementsByClassName('contact-temp');
    let teamElems = document.getElementsByClassName('team-temp');

    // Hide all sections first
    const allSections = [homeElems, aboutElems, portfolioElems, serviceElems, contactElems, teamElems];
    allSections.forEach(section => {
        Array.from(section).forEach(elem => elem.style.display = 'none');
    });

    // Show the relevant section
    if (value === 'home') {
        Array.from(homeElems).forEach(elem => elem.style.display = 'block');
    } else if (value === 'about') {
        Array.from(aboutElems).forEach(elem => elem.style.display = 'block');
    } else if (value === 'portfolio') {
        Array.from(portfolioElems).forEach(elem => elem.style.display = 'block');
    } else if (value === 'services') {
        Array.from(serviceElems).forEach(elem => elem.style.display = 'block');
    } else if (value === 'contact') {
        Array.from(contactElems).forEach(elem => elem.style.display = 'block');
    } else if (value === 'team') {
        Array.from(teamElems).forEach(elem => elem.style.display = 'block');
    }
    window.scrollTo(0, 0);
});



$("#navmenu-footer a").click(function (event) {
    event.preventDefault();
    let value = $(this).attr("value");
    $("#navmenu a").removeClass("active");
    $(this).addClass("active");

    // Select elements by class
    let homeElems = document.getElementsByClassName('home-temp');
    let aboutElems = document.getElementsByClassName('about-temp');
    let portfolioElems = document.getElementsByClassName('portfolio-temp');
    let serviceElems = document.getElementsByClassName('services-temp');
    let contactElems = document.getElementsByClassName('contact-temp');
    let teamElems = document.getElementsByClassName('team-temp');

    // Hide all sections first
    const allSections = [homeElems, aboutElems, portfolioElems, serviceElems, contactElems, teamElems];
    allSections.forEach(section => {
        Array.from(section).forEach(elem => elem.style.display = 'none');
    });

    // Show the relevant section
    if (value === 'homef') {
        Array.from(homeElems).forEach(elem => elem.style.display = 'block');
    } else if (value === 'aboutf') {
        Array.from(aboutElems).forEach(elem => elem.style.display = 'block');
    } else if (value === 'servicef') {
        Array.from(serviceElems).forEach(elem => elem.style.display = 'block');
    }
    window.scrollTo(0, 0);
});