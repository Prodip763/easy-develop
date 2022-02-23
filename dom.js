document.getElementById('add-border').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    container.style.border = '2px solid red';
});
function addBackgroundColor(){
        const friends = document.getElementsByClassName('friend');
        for (const friend of friends){
        friend.style.backgroundColor = 'yellow';
        }
}
document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendList = document.createElement('div');
    friendList.classList.add('friend');
    friendList.innerHTML = `
    <h3 class="friend-name">new friend</h3>
    <p>Iure, animi?</p>
    `;
    container.appendChild(friendList);
    addBackgroundColor();
    colorFriendName();
});
function colorFriendName(){
    const friendColors = document.getElementsByClassName('friend-name');
    for (const friendColor of friendColors){
        friendColor.style.color = 'orange';
    }
}
