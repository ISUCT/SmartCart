/* global Java */

define(['boxing', 'common-utils/color', 'common-utils/cursor', 'common-utils/font', './action-event', './cell-render-event', './component-event', './focus-event', './item-event', './key-event', './value-change-event', './container-event', './popup-menu'], function(B, Color, Cursor, Font, ActionEvent, RenderEvent, ComponentEvent, FocusEvent, ItemEvent, KeyEvent, ValueChangeEvent, ContainerEvent, PopupMenu) {
    var className = "com.eas.client.forms.containers.GridPane";
    var javaClass = Java.type(className);
    /**
     * A container with Grid Layout.
     * @param rows the number of grid rows.
     * @param cols the number of grid columns.
     * @param hgap the horizontal gap (optional).
     * @param vgap the vertical gap (optional).
     * @constructor GridPane GridPane
     */
    function GridPane(rows, cols, hgap, vgap) {
        var maxArgs = 4;
        var delegate = arguments.length > maxArgs ?
              arguments[maxArgs] 
            : arguments.length === 4 ? new javaClass(B.boxAsJava(rows), B.boxAsJava(cols), B.boxAsJava(hgap), B.boxAsJava(vgap))
            : arguments.length === 3 ? new javaClass(B.boxAsJava(rows), B.boxAsJava(cols), B.boxAsJava(hgap))
            : arguments.length === 2 ? new javaClass(B.boxAsJava(rows), B.boxAsJava(cols))
            : arguments.length === 1 ? new javaClass(B.boxAsJava(rows))
            : new javaClass();

        Object.defineProperty(this, "unwrap", {
            configurable: true,
            value: function() {
                return delegate;
            }
        });
        if(GridPane.superclass)
            GridPane.superclass.constructor.apply(this, arguments);
        delegate.setPublished(this);
        Object.defineProperty(this, "cursor", {
            get: function() {
                var value = delegate.cursor;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.cursor = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "onMouseDragged", {
            get: function() {
                var value = delegate.onMouseDragged;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseDragged = aValue;
            }
        });

        Object.defineProperty(this, "onMouseReleased", {
            get: function() {
                var value = delegate.onMouseReleased;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseReleased = aValue;
            }
        });

        Object.defineProperty(this, "onFocusLost", {
            get: function() {
                var value = delegate.onFocusLost;
                return value;
            },
            set: function(aValue) {
                delegate.onFocusLost = aValue;
            }
        });

        Object.defineProperty(this, "columns", {
            get: function() {
                var value = delegate.columns;
                return B.boxAsJs(value);
            }
        });

        Object.defineProperty(this, "onMousePressed", {
            get: function() {
                var value = delegate.onMousePressed;
                return value;
            },
            set: function(aValue) {
                delegate.onMousePressed = aValue;
            }
        });

        Object.defineProperty(this, "foreground", {
            get: function() {
                var value = delegate.foreground;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.foreground = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "error", {
            get: function() {
                var value = delegate.error;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.error = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "enabled", {
            get: function() {
                var value = delegate.enabled;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.enabled = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "onComponentMoved", {
            get: function() {
                var value = delegate.onComponentMoved;
                return value;
            },
            set: function(aValue) {
                delegate.onComponentMoved = aValue;
            }
        });

        Object.defineProperty(this, "onComponentAdded", {
            get: function() {
                var value = delegate.onComponentAdded;
                return value;
            },
            set: function(aValue) {
                delegate.onComponentAdded = aValue;
            }
        });

        Object.defineProperty(this, "componentPopupMenu", {
            get: function() {
                var value = delegate.componentPopupMenu;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.componentPopupMenu = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "top", {
            get: function() {
                var value = delegate.top;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.top = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "onComponentResized", {
            get: function() {
                var value = delegate.onComponentResized;
                return value;
            },
            set: function(aValue) {
                delegate.onComponentResized = aValue;
            }
        });

        Object.defineProperty(this, "vgap", {
            get: function() {
                var value = delegate.vgap;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.vgap = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "parent", {
            get: function() {
                var value = delegate.parentWidget;
                return B.boxAsJs(value);
            }
        });

        Object.defineProperty(this, "onMouseEntered", {
            get: function() {
                var value = delegate.onMouseEntered;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseEntered = aValue;
            }
        });

        Object.defineProperty(this, "toolTipText", {
            get: function() {
                var value = delegate.toolTipText;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.toolTipText = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "hgap", {
            get: function() {
                var value = delegate.hgap;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.hgap = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "height", {
            get: function() {
                var value = delegate.height;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.height = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "element", {
            get: function() {
                var value = delegate.element;
                return B.boxAsJs(value);
            }
        });

        Object.defineProperty(this, "onComponentShown", {
            get: function() {
                var value = delegate.onComponentShown;
                return value;
            },
            set: function(aValue) {
                delegate.onComponentShown = aValue;
            }
        });

        Object.defineProperty(this, "onMouseMoved", {
            get: function() {
                var value = delegate.onMouseMoved;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseMoved = aValue;
            }
        });

        Object.defineProperty(this, "opaque", {
            get: function() {
                var value = delegate.opaque;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.opaque = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "visible", {
            get: function() {
                var value = delegate.visible;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.visible = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "onComponentHidden", {
            get: function() {
                var value = delegate.onComponentHidden;
                return value;
            },
            set: function(aValue) {
                delegate.onComponentHidden = aValue;
            }
        });

        Object.defineProperty(this, "nextFocusableComponent", {
            get: function() {
                var value = delegate.nextFocusableComponent;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.nextFocusableComponent = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "count", {
            get: function() {
                var value = delegate.count;
                return B.boxAsJs(value);
            }
        });

        Object.defineProperty(this, "onActionPerformed", {
            get: function() {
                var value = delegate.onActionPerformed;
                return value;
            },
            set: function(aValue) {
                delegate.onActionPerformed = aValue;
            }
        });

        Object.defineProperty(this, "onKeyReleased", {
            get: function() {
                var value = delegate.onKeyReleased;
                return value;
            },
            set: function(aValue) {
                delegate.onKeyReleased = aValue;
            }
        });

        Object.defineProperty(this, "focusable", {
            get: function() {
                var value = delegate.focusable;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.focusable = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "onKeyTyped", {
            get: function() {
                var value = delegate.onKeyTyped;
                return value;
            },
            set: function(aValue) {
                delegate.onKeyTyped = aValue;
            }
        });

        Object.defineProperty(this, "rows", {
            get: function() {
                var value = delegate.rows;
                return B.boxAsJs(value);
            }
        });

        Object.defineProperty(this, "onMouseWheelMoved", {
            get: function() {
                var value = delegate.onMouseWheelMoved;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseWheelMoved = aValue;
            }
        });

        Object.defineProperty(this, "onComponentRemoved", {
            get: function() {
                var value = delegate.onComponentRemoved;
                return value;
            },
            set: function(aValue) {
                delegate.onComponentRemoved = aValue;
            }
        });

        Object.defineProperty(this, "component", {
            get: function() {
                var value = delegate.component;
                return B.boxAsJs(value);
            }
        });

        Object.defineProperty(this, "onFocusGained", {
            get: function() {
                var value = delegate.onFocusGained;
                return value;
            },
            set: function(aValue) {
                delegate.onFocusGained = aValue;
            }
        });

        Object.defineProperty(this, "left", {
            get: function() {
                var value = delegate.left;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.left = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "background", {
            get: function() {
                var value = delegate.background;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.background = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "onMouseClicked", {
            get: function() {
                var value = delegate.onMouseClicked;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseClicked = aValue;
            }
        });

        Object.defineProperty(this, "onMouseExited", {
            get: function() {
                var value = delegate.onMouseExited;
                return value;
            },
            set: function(aValue) {
                delegate.onMouseExited = aValue;
            }
        });

        Object.defineProperty(this, "name", {
            get: function() {
                var value = delegate.name;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.name = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "width", {
            get: function() {
                var value = delegate.width;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.width = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "font", {
            get: function() {
                var value = delegate.font;
                return B.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.font = B.boxAsJava(aValue);
            }
        });

        Object.defineProperty(this, "onKeyPressed", {
            get: function() {
                var value = delegate.onKeyPressed;
                return value;
            },
            set: function(aValue) {
                delegate.onKeyPressed = aValue;
            }
        });

    };
    /**
     * Appends the specified component to the end of this container.
     * @param component the component to add
     * @param row the row of the component
     * @param column the column of the component
     * @method add
     * @memberOf GridPane
     */
    GridPane.prototype.add = function(component, row, column) {
        var delegate = this.unwrap();
        var value = delegate.add(B.boxAsJava(component), B.boxAsJava(row), B.boxAsJava(column));
        return B.boxAsJs(value);
    };

    /**
     * Removes the specified component from this container.
     * @param component the component to remove
     * @method remove
     * @memberOf GridPane
     */
    GridPane.prototype.remove = function(component) {
        var delegate = this.unwrap();
        var value = delegate.remove(B.boxAsJava(component));
        return B.boxAsJs(value);
    };

    /**
     * Removes all the components from this container.
     * @method clear
     * @memberOf GridPane
     */
    GridPane.prototype.clear = function() {
        var delegate = this.unwrap();
        var value = delegate.clear();
        return B.boxAsJs(value);
    };

    /**
     * Tries to acquire focus for this component.
     * @method focus
     * @memberOf GridPane
     */
    GridPane.prototype.focus = function() {
        var delegate = this.unwrap();
        var value = delegate.focus();
        return B.boxAsJs(value);
    };

    /**
     *
     * @method children
     * @memberOf GridPane
     */
    GridPane.prototype.children = function() {
        var delegate = this.unwrap();
        var value = delegate.children();
        return B.boxAsJs(value);
    };

    /**
     * Gets the component with the specified row and column.
     * @param row the row of the component
     * @param column the column of the component
     * @method child
     * @memberOf GridPane
     */
    GridPane.prototype.child = function(row, column) {
        var delegate = this.unwrap();
        var value = delegate.child(B.boxAsJava(row), B.boxAsJava(column));
        return B.boxAsJs(value);
    };


    var ScriptsClass = Java.type("com.eas.script.Scripts");
    var space = ScriptsClass.getSpace();
    space.putPublisher(className, function(aDelegate) {
        return new GridPane(null, null, null, null, aDelegate);
    });
    return GridPane;
});