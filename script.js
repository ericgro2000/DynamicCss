document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", inputChanged);
});

function inputChanged(e) {
  const boxElement = document.getElementById("box");
  const computedStyle = getComputedStyle(boxElement);

  boxElement.style.setProperty(
    "--x-position",
    document.getElementById("x-position").value + "px",
  );
  boxElement.style.setProperty(
    "--y-position",
    document.getElementById("y-position").value + "px",
  );
  boxElement.style.setProperty(
    "--blur",
    document.getElementById("blur").value + "px",
  );
  boxElement.style.setProperty(
    "--spread",
    document.getElementById("spread").value + "px",
  );
  boxElement.style.setProperty(
    "--shadow-color",
    document.getElementById("shadow-color").value,
  );
  boxElement.style.setProperty(
    "--box-color",
    document.getElementById("box-color").value,
  );
  document.documentElement.style.setProperty(
    "--background-color",
    document.getElementById("background-color").value,
  );
}
