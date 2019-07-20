$(document).ready(function() {
  // Draggable
  $(function() {
    $('.terminal').draggable({
      scroll: false,
      cancel: '.box'
    });
  });
  $(function() {
    $('.box').resizable({
      containment: '.terminal',
      // maxHeight: 950,
      // maxWidth: 950,
      minHeight: 250,
      minWidth: 300,
      alsoResize: '.nav'
    });
  });

  $('.btn').mouseover(function() {
    $('.hide').show();
  });

  $('.btn').mouseleave(function() {
    $('.hide').hide();
  });

  $('.btn-red').click(function() {
    $('.terminal').hide();
  });

  $('.btn-yellow').click(function() {
    $('.terminal').animate(
      {
        top: $(window).height(),
        left: 10,
        width: 30,
        height: 'toggle'
      },
      300,
      function() {
        $('.terminal').hide();
      }
    );
    $('.minimize').show(100);
  });

  $('.minimize').click(function() {
    $('.terminal').animate(
      {
        top: 10,
        left: 10,
        width: 950,
        height: 950
      },
      300,
      function() {
        $('.terminal').show();
      }
    );
    $('.minimize').hide();
  });

  $('.inp').change(function() {
    $('.query').val($(this).val());
    $('.hide-desc').show();
  });
});
