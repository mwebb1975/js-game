var Map = function(name) {
  this.mapName = name;
  console.log("Read Map Data");
  this.mapData = this.readMapData("http://localvm.game.outreach.psu.edu/resources/" + this.mapName + ".map");
  //var line = mapData.split("\n");
  console.log(this.mapData);
  this.map = '';
};

Map.prototype.readMapData = function (file)
{
  console.log("Filename to read: " + file);
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if(rawFile.status === 200 || rawFile.status == 0) {
        allText = rawFile.responseText;
        return allText;
        //alert(allText);
      }
    }
  }
  rawFile.send(null);
}

Map.prototype.printMap = function() {
  console.log(this.mapData);
};
