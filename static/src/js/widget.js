odoo.define('web_widget_attachment_toggle.widget', function(require){
    'use strict';

    var AbstractField = require('web.AbstractField');
    var core = require('web.core');
    var registry = require('web.field_registry');

    var _t = core._t;

    var RwdProjectWidget = AbstractField.extend({
        events: _.extend({}, AbstractField.prototype.events, {
            'click': '_onClick',
        }),

        description: "",

        isSet: function() {
            return true;
        },

        _render: function() {
            var icon = 'fa-file';
            var disabled = true;
            var title;
            if (this.recordData.has_attachments) {
                icon = 'fa-files-o';
                title = 'Contain Attachments';
            }
            var $i = $('<i/>', {
                class: 'fa',
            }).addClass(icon);
            var $button = $('<button/>', {
                type: 'button',
                icon: icon,
                class: 'o_icon_button'
            }).append($i);
            this.$el.html($button);
        },

        _onClick: function(event) {
            event.stopPropagation();
            this.trigger_up('button_clicked', {
                attrs: {
                    name: 'attachment_tree_view',
                    type: 'object'
                },
                record: this.record,
            });
        },
    });

    registry.add("attachment_toggle", RwdProjectWidget);
});
