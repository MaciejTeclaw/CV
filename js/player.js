const playerObj = {
    player : $('.player'),
    playerPosition : player.position(),
    playerPosLeft : function () {
        return (playerObj.playerPosition.left)
    },
    playerPosTop : function () {
        return (playerObj.playerPosition.top)
    }
};