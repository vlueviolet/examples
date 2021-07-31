function emit(target, eventName, detail) {
  // const event = new CustomEvent(eventName, { detail });
  // target.dispatchEvent(event);

  var event = jQuery.Event(eventName);
  $(target).trigger(event, detail);

  console.log(event);
}
