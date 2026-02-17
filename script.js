let selectedNode = null;

document.getElementById('addNodeBtn').addEventListener('click', addNode);
document.getElementById('addChildBtn').addEventListener('click', addChild);
document.getElementById('deleteNodeBtn').addEventListener('click', deleteNode);

function addNode() {
    const text = document.getElementById('nodeInput').value;
    if (text) {
        const node = createNode(text);
        document.getElementById('mindMap').appendChild(node);
        document.getElementById('nodeInput').value = '';
    }
}

function addChild() {
    if (selectedNode) {
        const text = document.getElementById('nodeInput').value;
        if (text) {
            const child = createNode(text);
            let children = selectedNode.querySelector('.children');
            if (!children) {
                children = document.createElement('div');
                children.className = 'children';
                selectedNode.appendChild(children);
            }
            children.appendChild(child);
            document.getElementById('nodeInput').value = '';
        }
    } else {
        alert('Please select a node first');
    }
}

function deleteNode() {
    if (selectedNode) {
        if (selectedNode.parentNode.id === 'mindMap') {
            selectedNode.remove();
        } else {
            selectedNode.parentNode.remove();
        }
        selectedNode = null;
    } else {
        alert('Please select a node to delete');
    }
}

function createNode(text) {
    const node = document.createElement('div');
    node.className = 'node';
    node.textContent = text;
    node.addEventListener('click', selectNode);
    return node;
}

function selectNode(e) {
    e.stopPropagation();
    if (selectedNode) selectedNode.classList.remove('selected');
    selectedNode = this;
    this.classList.add('selected');
}

const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

function downloadMindMap() {
    
}
