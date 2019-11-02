$(document).ready(function(){
  $('#but_add').click(function(){
      if ($('.input-form').is(':visible')){
          // Seleccionar último ID 
          var lastname_id = $('.input-form input[type=text]:nth-child(1)').last().attr('id');
          var split_id = lastname_id.split('_');

          // Generar siguiente número de ID
          var index = Number(split_id[1]) + 1;

          // Clonar nodo y eventos
          var newel = $('.input-form:last').clone(true);

          // Generar nuevos ID de cada nodo (campo) del nuevo elemento
          $(newel).find('input[type=text]:nth-child(1)').attr("id","name_"+index);
          $(newel).find('input[type=text]:nth-child(2)').attr("id","email_"+index);
          $(newel).find('input[type=button]:nth-child(3)').attr("id","butremove_"+index);

          // Generar nuevos VALORES de cada nodo (campo) del nuevo elemento
          $(newel).find('input[type=text]:nth-child(1)').val("");
          $(newel).find('input[type=text]:nth-child(2)').val("");

          // Insertar nodo en el contenedor
          $(newel).insertAfter(".input-form:last");
      } else {
        $('.input-form').show();
      }
  });
  
  // Delete element
  $('.remove').click(function(){
      var numItems = $('.input-form').length;
      if (numItems > 1) {
          $(this).parent('div').remove();
      } else {
        $(this).closest('.input-form').find("input[type=text], textarea").val("");
        $('.input-form').hide();  
      }
  });
  
  $('.txt').focus(function(){
      $(this).css('border-color','red');
  });
 
  $('.txt').focusout(function(){
      $(this).css('border-color','initial');
  });

});