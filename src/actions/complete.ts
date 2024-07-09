let clicked = false;
export default function complete(
  _id: number,
  _checkButton: HTMLButtonElement,
) {
  // const index = _tasks.findIndex((task) => task.id == _id);
  if (!clicked) {
    _checkButton.innerText = "Completed";
    // _checkButton.className = _checkButton.className + " line-through";
    clicked = true;
    _checkButton.parentElement!.firstElementChild!.className = "mr-auto line-through";
  } else {
    _checkButton.innerText = "Check";
    // _checkButton.className = "border bg-blue-500 px-3 py-1 text-white";
    clicked = false;
    _checkButton.parentElement!.firstElementChild!.className = "mr-auto";
  }
}
