// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton3")
                .setLeft("5em")
                .setTop("3.3333333333333335em")
                .setCaption("Hello World")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            undefined,
                            "Hello, World!"
                        ],
                        "method":"pop",
                        "event":1
                    },
                    "_xui_ui_htmlbutton3_onclick"
                ])
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton4")
                .setLeft("12.5em")
                .setTop("3.3333333333333335em")
                .setCaption("Pop Menu")
                .onClick([
                    {
                        "desc":"pop menu",
                        "type":"control",
                        "target":"xui_ui_popmenu4",
                        "args":[
                            "{page.xui_ui_popmenu4.popUp()}",
                            undefined,
                            undefined,
                            "{args[0]}"
                        ],
                        "method":"popUp",
                        "redirection":"other:callback:call",
                        "event":1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton5")
                .setLeft("19.166666666666668em")
                .setTop("3.3333333333333335em")
                .setCaption("Pop Anything")
                .onClick([
                    {
                        "desc":"pop any",
                        "type":"control",
                        "target":"xui_ui_panel10",
                        "args":[
                            "{page.xui_ui_panel10.popUp()}",
                            undefined,
                            undefined,
                            "{args[0]}"
                        ],
                        "method":"popUp",
                        "redirection":"other:callback:call",
                        "event":1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input17")
                .setDirtyMark(false)
                .setHoverPop("xui_ui_list4")
                .setLeft("30em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Hover Pop")
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel10")
                .setDock("none")
                .setLeft("19.166666666666668em")
                .setTop("7.5em")
                .setWidth("15.833333333333334em")
                .setHeight("16.666666666666668em")
                .setCaption("Pop Window")
            );
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"list_pop")
                .setDirtyMark(false)
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
                .setLeft("38.333333333333336em")
                .setTop("7.5em")
                .setWidth("13.333333333333334em")
                .setHeight("16.666666666666668em")
                .setVisibility("hidden")
                .setValue("a")
                .onItemSelected([
                    {
                        "desc":"set value",
                        "type":"control",
                        "target":"xui_ui_input17",
                        "args":[
                            "{page.xui_ui_input17.setUIValue()}",
                            undefined,
                            undefined,
                            "{args[1].caption}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call",
                        "event":2
                    },
                    {
                        "desc":"hide self",
                        "type":"control",
                        "target":"list_pop",
                        "args":[ ],
                        "method":"hide"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.PopMenu")
                .setHost(host,"xui_ui_popmenu4")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.HTMLButton event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
        */
        _xui_ui_htmlbutton3_onclick:function(profile, e, src){
            var ns = this, uictrl = profile.boxing();
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});