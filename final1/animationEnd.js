let elems = document.querySelectorAll(".bento > div");
var index = 0,
  length = elems.length;
for (; index < length; index++) {
  let element = elems[index];
  let anims = element.getAnimations();
  anims.forEach(async (anim) => {
    function onFinish() {
      anim.cancel();
      element.classList.add("scaled100");
    }
    if (!anim.startTime || !anim.finished) anim.addEventListener("finish", onFinish);
    else onFinish();
  });
}
