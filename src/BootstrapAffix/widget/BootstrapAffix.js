/*global logger*/
/*
    BootstrapAffix
    ========================

    @file      : BootstrapAffix.js
    @version   : 1.0.0
    @author    : Jelle Dekker
    @date      : 5/8/2017
    @copyright : Bizzomate 2017
    @license   : Apache 2

    Documentation
    ========================
    Describe your widget here.
*/

// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",

    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",

    "BootstrapAffix/lib/jquery-1.11.2",
    "BootstrapAffix/lib/bootstrap-affix-3.3.7",
], function(declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, dojoLang, dojoText, dojoHtml, dojoEvent, _jQuery, BootstrapAffix) {
    "use strict";

    var $ = _jQuery.noConflict(true);

    // Declare widget's prototype.
    return declare("BootstrapAffix.widget.BootstrapAffix", [_WidgetBase], {

        // Parameters configured in the Modeler.
        itemSelector: "",
        offsetTop: "",

        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function() {
            logger.level(logger.DEBUG);
            logger.debug(this.id + ".constructor");
        },

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function(obj, callback) {
            logger.debug(this.id + ".update");

            this._executeCallback(callback, "update");
        },

        // mxui.widget._WidgetBase.resize is called when the page's layout is recalculated. Implement to do sizing calculations. Prefer using CSS instead.
        resize: function(box) {
            logger.debug(this.id + ".resize");

            if ($(this.itemSelector).outerHeight() + this.offsetTop >= $(window).height()) {
                $(this.itemSelector).removeClass('affix');
            } else {
                $(this.itemSelector).affix({
                    offset: this.offsetTop
                });
                $(this.itemSelector).affix('checkPosition');
            }
        },

        _executeCallback: function(cb, from) {
            logger.debug(this.id + "._executeCallback" + (from ? " from " + from : ""));
            if (cb && typeof cb === "function") {
                cb();
            }
        }
    });
});

require(["BootstrapAffix/widget/BootstrapAffix"]);
