const NavFunc = () => {
    document.getElementById("nav-bar").style.display = "initial";
};
const RmvNav = (ele) => {
    if (window.innerWidth <= 799) {
        ele.style.display = "none";
    }
};
