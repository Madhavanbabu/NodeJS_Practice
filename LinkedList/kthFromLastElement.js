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

    // call to get the kth element from linkedlist
    kthFromLast(linkedList, 7);

}

function kthFromLast(linkedList, pos) {
    let current = linkedList.head;
    if (current == null) {
        return;
    }
    let index = 0;
    let kthElem = current;
    while (current != null) {
        if(index>pos){
            kthElem = kthElem.next;
        }
        current = current.next;
        index++;
    }
    if(index >= pos)
        console.log(kthElem.element);
}


// call to execute main method
main();


