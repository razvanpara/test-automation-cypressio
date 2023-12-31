function dragAndDrop(source: string, target: string): string {
    const script = `function simulateDragDrop(source, destination) {
    const sourceNode = document.querySelector(source);
    const destinationNode = document.querySelector(destination);
    var EVENT_TYPES = {
        DRAG_END: 'dragend',
        DRAG_START: 'dragstart',
        DROP: 'drop'
    }

    function createCustomEvent(type) {
        var event = new CustomEvent("CustomEvent")
        event.initCustomEvent(type, true, true, null)
        event.dataTransfer = {
            data: {
            },
            setData: function (type, val) {
                this.data[type] = val
            },
            getData: function (type) {
                return this.data[type]
            }
        }
        return event
    }

    function dispatchEvent(node, type, event) {
        if (node.dispatchEvent) {
            return node.dispatchEvent(event)
        }
        if (node.fireEvent) {
            return node.fireEvent("on" + type, event)
        }
    }

    var event = createCustomEvent(EVENT_TYPES.DRAG_START)
    dispatchEvent(sourceNode, EVENT_TYPES.DRAG_START, event)

    var dropEvent = createCustomEvent(EVENT_TYPES.DROP)
    dropEvent.dataTransfer = event.dataTransfer
    dispatchEvent(destinationNode, EVENT_TYPES.DROP, dropEvent)

    var dragEndEvent = createCustomEvent(EVENT_TYPES.DRAG_END)
    dragEndEvent.dataTransfer = event.dataTransfer
    dispatchEvent(sourceNode, EVENT_TYPES.DRAG_END, dragEndEvent)
}; 
    simulateDragDrop("${source}", "${target}");`;
    return script;
};

Cypress.Commands.addAll({
    dragAndDrop(target: string, destination: string): Cypress.Chainable<JQuery<Element>> {
        return cy.window().then(win => win.eval(dragAndDrop(target, destination))).get(target);
    }
})