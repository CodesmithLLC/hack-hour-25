function Node(value) {
    this.value = value;
    this.next = null;
}

//this needs refactoring lul
function reverseLinkedList(head) {
    let store = head.next;
    head.next = null;
    let prev = head;
    head = store;

    
    while(store){
        store = head.next;
        head.next = prev;
        prev = head;
        head = store;
    }
    return prev;
}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
