let idCount = 0;

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
    this.site = (prev === null ? 0 : prev.site + 1);
    this.hidden = false;
    this.id = [this.site, idCount];
    idCount++;
  }

  delete(node) {
    const next = node.next;
    const prev = node.prev;
    prev.next = next;
    next.prev = prev;
    node.hidden = true;
  }

  static ins(data, prev) {
    const next = prev.next;
    const node = new Node(data, prev, next);
    next.prev = node;
    prev.next = node;
  }
}
