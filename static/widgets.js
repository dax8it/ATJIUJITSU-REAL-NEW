;(function() {
  var $

  var base = "https://www.maonrails.com/"
  var dmn = window.location.hostname
  if (dmn == "localhost" || dmn == "www.maondev.com") {
    var base = "https://www.maondev.com/"
  }
  var loadScript = function(script, callback) {
    var script_tag = document.createElement("script")
    script_tag.setAttribute("type", "text/javascript")
    script_tag.setAttribute("src", script)
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function() {
        // For old versions of IE
        if (this.readyState == "complete" || this.readyState == "loaded") {
          callback()
        }
      }
    } else {
      script_tag.onload = callback
    }
    ;(
      document.getElementsByTagName("head")[0] || document.documentElement
    ).appendChild(script_tag)
  }
  if (window.jQuery === undefined) {
    loadScript("//code.jquery.com/jquery-3.3.1.min.js", jqueryHandler)
  } else {
    $ = jQuery = window.jQuery
    main()
  }

  var widgets = {
    loadedForms: false,
    loadingForms: false,
    queue: [],
    started: false,
    init: function($) {
      var self = this
      this.loadCss("min/?b=styles&f=widgets-iframe.css,academy/forms.css")
      this.initSchedule()
      this.initForms()
      this.initBooking()
      window.addEventListener(
        "message",
        function(e) {
          jQuery(".maonrails-frame-container iframe").each(function() {
            if (this.contentWindow === e.source) {
              var eventName = e.data[0]
              var data = e.data[1]
              switch (eventName) {
                case "setHeight":
                  jQuery(this).height(data)
                  break
                case "maonrails-popup":
                  jQuery(this)
                    .parent()
                    .remove()
                  self.initPopup(data)
                  break
              }
            }
          })
        },
        false
      )
    },
    initSchedule: function() {
      $(".maonrails-schedule").each(function() {
        $(this).addClass("maonrails-frame-container")
        var gymId = $(this).attr("attr-gym")
        var template = $(this).attr("attr-theme")
        var params = ""
        if (typeof template == "string") {
          params += "theme=" + template
        }

        var frame = $(
          '<iframe src="' +
            base +
            "widgets/schedule/render/gym/" +
            gymId +
            (params != "" ? "?" + params : "") +
            '" frameborder="0" scrolling="no"></iframe>'
        ).appendTo(this)
      })
    },
    initForms: function() {
      $(".maonrails-form").each(function() {
        var isPopup = typeof $(this).attr("popup") != "undefined"

        $(this).addClass("maonrails-frame-container")
        var ref = $(this).attr("attr-ref")
        var template = $(this).attr("attr-theme")
        var params = ""
        if (typeof template == "string") {
          params += "theme=" + template
        }
        var frame = $(
          '<iframe src="' +
            base +
            "widgets/forms/render/ref/" +
            ref +
            "/gym/" +
            $(this).attr("attr-gym") +
            (params != "" ? "?" + params : "") +
            '" frameborder="0" scrolling="no"></iframe>'
        ).appendTo(this)
      })
    },
    initPopup: function(data) {
      var self = this
      var els = $("<div>" + data.html + "</div>").appendTo("body")
      var button = els.find(".maonrails-lead-form-button")
      var startPopup = function(context) {
        MARforms.formSubmit(context)
        MARforms.initPopup(context)
      }
      if (this.loadedForms) {
        startPopup(els)
      } else if (this.loadingForms) {
        this.queue.push(els)
      } else {
        $.getScript(
          base + "min/?b=js&f=widgets/main.js,academy/forms.js",
          function() {
            self.loadedForms = true
            self.loadingForms = false
            if (self.queue.length > 0) {
              for (var i in self.queue) {
                startPopup(self.queue[i])
              }
            }
          }
        )
        this.loadingForms = true
      }
    },
    initBooking: function() {
      $(".maonrails-booking").each(function() {
        $(this).addClass("maonrails-frame-container")
        var gymId = $(this).attr("attr-gym")
        var template = $(this).attr("attr-theme")
        var params = ""
        if (typeof template == "string") {
          params += "theme=" + template
        }

        var frame = $(
          '<iframe src="' +
            base +
            "widgets/book/render/gym/" +
            gymId +
            (params != "" ? "?" + params : "") +
            '" frameborder="0" scrolling="no"></iframe>'
        ).appendTo(this)
      })
    },
    loadCss: function(css) {
      var link = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: base + css,
      })
      link.appendTo("head")
    },
  }

  function jqueryHandler() {
    jQuery = window.jQuery.noConflict(true)
    main()
  }
  function main() {
    jQuery(document).ready(function(jq) {
      if (typeof widgets != "undefined") {
        $ = jq
        widgets.init()
      }
    })
  }
})()
