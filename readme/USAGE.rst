Create computed boolean field (True if there is attachment, False if not)
Edit the tree view and add the widget:
.. code-block:: xml

    <<field name="has_attachments" widget="attachment_toggle"/>

Now, system will show "fa-files-o" if there is attachemts, "fa-files" if not, we can open attachment tree view when clicking on icon.
