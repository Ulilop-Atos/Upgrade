var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

var popoverList = popoverTriggerList.map(popoverTriggerEl =>  {
  return new bootstrap.Popover(popoverTriggerEl)
});

