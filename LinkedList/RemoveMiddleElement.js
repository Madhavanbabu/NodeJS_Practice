var LinkedList = require('./Linkedlist');


function main() {

    var linkedList = new LinkedList();

    linkedList.add(30);
    linkedList.add(23);
    linkedList.add(47);
    linkedList.add(5);
    linkedList.add(23);
    linkedList.add(47);
    linkedList.add(31);
    linkedList.add(32);
    linkedList.add(5);

    // call to remove the duplicates
    removeMiddleElement(linkedList);

    // linkedList.printList();

}

function removeMiddleElement(linkedList) {
    let current = linkedList.head;
    if (current == null || current.next == null) {
        return;
    }
    let firstPointer = current, secondPointer = current;
    let prevObj = null;
    while (secondPointer != null && secondPointer.next != null) {
        secondPointer = secondPointer.next.next;
        prevObj = firstPointer;
        firstPointer = firstPointer.next;
    }
    prevObj.next = firstPointer.next;
    linkedList.printList();
}


// call to execute main method
main();


