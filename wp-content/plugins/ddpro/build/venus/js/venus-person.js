!function(e){var n=0;e("body").hasClass("et-fb")&&(n=7e3),setTimeout(function(){e(".person1-venus .et_pb_team_member").each(function(){e("<div class='person_content'></div>").appendTo(e(this)),e(this).find(".et_pb_team_member_image").appendTo(e(this).find(".person_content")),e(this).find(".et_pb_team_member_description").appendTo(e(this).find(".person_content"))}),e(".person1-venus .et_pb_team_member").hover(function(){e(".person1-venus .et_pb_column .et_pb_team_member").removeClass("main_module").addClass("no_hover_module"),e(this).addClass("main_module")},function(){e(".person1-venus .et_pb_column .et_pb_team_member").removeClass("no_hover_module")}),e("body.et-fb .person1-venus .et_pb_team_member").hover(function(){setTimeout(function(){e("body.et-fb .person1-venus .et_pb_team_member.et_pb_hovered").addClass("main_module").addClass("no_hover_module")},200)})},n)}(jQuery);