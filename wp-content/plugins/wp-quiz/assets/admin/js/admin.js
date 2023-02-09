"use strict";!function(s,u){s.helpers=s.helpers||{},s.helpers.getRandomString=function(e){e||(e=5);for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},s.helpers.getRequest=function(e){return e.beforeSend||(e.beforeSend=function(e){e.setRequestHeader("X-WP-Nonce",s.restNonce)}),u.ajax(e)},s.helpers.reinitCodemirror=function(e){var t=u(e);t.next(".CodeMirror").remove();var n=wp.codeEditor.initialize(t.attr("id"),CMB2.codeEditorArgs(t.data("codeeditor")));n.codemirror.on("change",function(e){return n.codemirror.save()})};var e={tabs:function(){var o=u(".wp-quiz-tab-wrapper");o.length&&(o.each(function(){var e=u(this),n=e.parent(),r=e.find("> a"),i=n.find("> .wp-quiz-tab-content-wrapper > .wp-quiz-setting-panel"),a=e.data("active-class")||"active",t=u("#message.updated").length?localStorage.getItem(n.attr("id")):null;u("#auto_draft").length&&(t=""),r.on("click",function(){var e=u(this),t=e.attr("href");return r.removeClass(a),i.hide(),e.addClass(a),u(t).show(),localStorage.setItem(n.attr("id"),t),u(document).trigger("wp-quiz-activated-tab",e),!1}),null===t?r.eq(0).trigger("click"):(t=u('a[href="'+t+'"]',e)).length?t.trigger("click"):r.eq(0).trigger("click"),o.next().css("min-height",e.outerHeight())}),o.on("click","> .button-primary",function(){return u(".cmb-form > .button-primary").trigger("click"),!1}))},dependencyManager:function(){var t=this,e=u(".cmb-form, .wp-quiz-meta-box-wrap");u(".cmb-repeat-group-wrap",e).each(function(){var e=u(this),t=e.next(".wp-quiz-cmb-dependency.hidden");t.length&&e.find("> .cmb-td").append(t)}),u(".wp-quiz-cmb-dependency",e).each(function(){t.loopDependencies(u(this))}),u("input, select",e).on("change",function(){var e=u(this).attr("name");u('span[data-field="'+e+'"]').each(function(){t.loopDependencies(u(this).closest(".wp-quiz-cmb-dependency"))})})},checkDependency:function(e,t,n){return"string"==typeof t&&t.includes(",")&&"="===n?t.includes(e):"string"==typeof t&&t.includes(",")&&"!="===n?!t.includes(e):"="===n&&e===t||("=="===n&&e===t||(">="===n&&t<=e||("<="===n&&e<=t||(">"===n&&t<e||("<"===n&&e<t||"!="===n&&e!==t)))))},loopDependencies:function(e){var o,c=this,d=e.attr("data-relation");e.find("span").each(function(){var e=u(this),t=e.attr("data-value"),n=e.attr("data-comparison"),r=u("[name='"+e.attr("data-field")+"']"),i=r.val();r.is(":radio")&&(i=r.filter(":checked").val()),r.is(":checkbox")&&(i=r.is(":checked"));var a=c.checkDependency(i,t,n);if("or"===d&&a)return!(o=!0);"and"===d&&(o=void 0===o?a:o&&a)});var t=e.closest(".wp-quiz-cmb-group");t.length||(t=e.closest(".cmb-row:not(.cmb-repeat-row):not(.empty-row)")),o?t.slideDown(300):t.hide()},dismissNotices:function(){u(document).on("click",".wp-quiz-notice .notice-dismiss",function(e){var t=u(this).closest(".wp-quiz-notice").attr("data-option-name");u.ajax({url:ajaxurl,type:"post",data:{action:"wp_quiz_dismiss_notice",option:t}})})},fixTextareaCode:function(){u(".cmb-repeat-table").each(function(e,t){u(t).on("cmb2_add_row",function(e,t){var n=t.prev(".cmb-repeat-row").find(".cmb2-textarea-code");n.length&&s.helpers.reinitCodemirror(n)})})},showPlayerTrackingDetail:function(){u(document).on("click",".wp-quiz-toggle-player-tracking-data",function(e){e.preventDefault();var t=e.currentTarget.dataset.id,n=u(e.currentTarget).next(".wp-quiz-tracking"),r=u(e.currentTarget).closest("tr");r.next(".tr-player-tracking-"+t).length?r.next(".tr-player-tracking-"+t).toggle():r.after(u('<tr class="tr-player-tracking-'+t+'">').append(u('<td colspan="'+(r.children("td").length+1)+'">').append(n)))})},selectAll:function(){u("#selectall").on("change",function(e){u(e.currentTarget).closest("table").find(":checkbox").prop("checked",e.currentTarget.checked)})},importQuizzes:function(){var a=parseInt(u("#import-total").text()),t=function(e){e.preventDefault();var t=u(e.currentTarget);t.find(".spinner").css("visibility","visible"),t.find(":submit").prop("disabled",!0);var n={quizzes:window.wqImportQuizzes.quizzes,download_images:u("#wq-download-images").prop("checked"),force_new:u("#wq-force-new-quizzes").prop("checked")},r=s.restUrl+"wp-quiz/v2/admin/import-quizzes",i=s.helpers.getRequest({url:r,method:"POST",data:n});i.done(function(e){!function t(){var e=s.restUrl+"wp-quiz/v2/admin/import-quizzes-progress",n=s.helpers.getRequest({url:e,method:"GET"});n.done(function(e){u("#import-done").text(a-e.remain),0<e.remain?t():u("#wq-import-progress").fadeOut("fast",function(){u("#wq-import-done").fadeIn("fast")})}),n.fail(function(e){console.error(e)})}(),t.fadeOut("fast",function(){u("#wq-import-progress").fadeIn("fast")})}),i.fail(function(e){console.error(e)})};u(document).on("submit","#wq-import-options",function(e){return t(e)})},aweberOptions:function(){var e=u(".cmb-type-aweber");if(e.length){e.each(function(e,t){var i=u(t),a=i.find(".aweber-wrapper").attr("data-option-id"),n=i.find(".aweber-app-id"),r=i.find(".aweber-get-auth-code-button"),o=i.find(".aweber-auth-button"),c=i.find(".aweber-auth-code"),d=i.find(".aweber-disconnect-button");n.on("change",function(e){return t=e.currentTarget.value.trim(),void r.attr("href","https://auth.aweber.com/1.0/oauth/authorize_app/"+t);var t}),r.on("click",function(e){return t=e,n.val()||(alert(s.i18n.appIdMustNotEmpty),n.focus(),t.preventDefault()),void i.find(".aweber-auth-code-step").fadeIn("fast");var t}),o.on("click",function(e){return function(e){var t=c.val();if(e.currentTarget.disabled=!0,!t)return alert(s.i18n.authCodeMustNotEmpty),void c.focus();var n=s.restUrl+"wp-quiz/v2/admin/connect-aweber",r=s.helpers.getRequest({url:n,method:"POST",data:{auth_code:t,option_id:a}});r.done(function(t){t.success?(Object.keys(t.data).forEach(function(e){i.find(".aweber-"+e).val(t.data[e])}),i.find(".aweber-app-id-step, .aweber-auth-code-step").hide(),i.find(".aweber-list-id-step").fadeIn("fast")):console.log(t.data)}),r.fail(function(e){console.error(e)})}(e)}),d.on("click",function(e){return function(e){e.preventDefault();var t=s.restUrl+"wp-quiz/v2/admin/disconnect-aweber",n=s.helpers.getRequest({url:t,method:"POST",data:{option_id:a}});n.done(function(e){e.success&&(i.find('input[type="hidden"][name]').val(""),i.find(".aweber-list-id-step, .aweber-auth-code-step").hide(),i.find(".aweber-app-id-step").fadeIn("fast"))}),n.fail(function(e){console.error(e)})}(e)})})}},exportSelectedPlayersAndLeads:function(){var e=u("#wq-export-button"),t=u("#wq-export-form"),r=u("#wq-export-ids"),i=u("#the-list .check-column :checkbox");if(t.length&&r.length&&i.length){var n=function(e){var n,t=(n=[],i.each(function(e,t){t.checked&&n.push(t.value)}),n);r.val(t.join(","))};e.on("click",function(e){return t.submit()}),i.on("change",function(e){return n()}),u("#cb-select-all-1").on("change",function(e){return n()}),u("#cb-select-all-2").on("change",function(e){return n()})}},ready:function(){this.tabs(),this.dependencyManager(),this.dismissNotices(),this.fixTextareaCode(),this.showPlayerTrackingDetail(),this.selectAll(),this.importQuizzes(),this.aweberOptions(),this.exportSelectedPlayersAndLeads()}};u(document).ready(function(){e.ready()})}(wpQuizAdmin,jQuery);