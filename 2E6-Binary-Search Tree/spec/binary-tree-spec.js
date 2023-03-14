describe('Test for BinarySearchTree (BST):', () => {
    const bst = new BinarySearchTree();
    
    it('when 5 is inserted should return: 5', () => {
        bst.insert(5);
        expect(bst.root.value).toBe(5);
    });

    it('when 5 and 3 are inserted should return: 3', () => {
        bst.insert(5);
        bst.insert(3);
        expect(bst.root.left.value).toBe(3);
    });

    it('when 5 and 7 are inserted should return: 7', () => {
        bst.insert(5);
        bst.insert(7);
        expect(bst.root.right.value).toBe(7);
    });
    
});