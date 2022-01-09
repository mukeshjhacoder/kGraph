function Node(data){
    this.data = data;
    this.next = null;
}

function Queue(){
    this.tail = null;
    this.head = null;
}

Queue.prototype.enqueue = function( item ){
    let node = new Node( item );
    if( !this.head  ) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
}

Queue.prototype.dequeue = function(){
    if( !this.head ) {
     return 'No item';
    } else {
     let itemToPop = this.head;
     this.head = this.head.next;
     return itemToPop;
    }
}

Queue.prototype.length = function(){
    let current, counter;
    [ current, counter ] = [ this.head, 0 ];
    while( current ) {
     counter++;
     current = current.next;
    }
    return counter;
}
Queue.prototype.peek = function(){
    if( this.head ) {
        return this.head.data;
    } else {
        return 'Empty';
    }
}
Queue.prototype.isEmpty = function(){
    return this.length() < 1;
}

Queue.prototype.traverse = function( fn ){
    let current = this.head
    while( current ) {
     fn( current )
     current = current.next
    }
}

export default Queue;