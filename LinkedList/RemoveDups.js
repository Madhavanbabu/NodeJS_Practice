var LinkedList = require('./Linkedlist');


function main() {

    var linkedList = new LinkedList();

    linkedList.add(30);
    linkedList.add(23);
    linkedList.add(30);
    linkedList.add(47);
    linkedList.add(30);
    linkedList.add(30);
    linkedList.add(5);
    linkedList.add(30);
    linkedList.add(23);
    linkedList.add(30);
    linkedList.add(47);
    linkedList.add(31);
    linkedList.add(32);
    linkedList.add(5);

    // call to remove the duplicates
    removeDuplicates(linkedList);

    // linkedList.printList();

}

function removeDuplicates(linkedList) {
    let current = linkedList.head;
    if (current == null || current.next == null) {
        return;
    }
    let index = 0; obj = {};
    while (current != null) {
        if (obj[current.element] == 1) {
            linkedList.removeFrom(index);
        } else {
            obj[current.element] = 1;
            index++;
        }
        current = current.next;
    }
}


// call to execute main method
main();


