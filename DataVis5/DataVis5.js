var distance = [2.5,13.5,3.3,13.8,18.1,11.1,6.3,5.9,11,49.3,9.7,9.2,26.2,26.8,20,16.1,15.6,13.1,13.8,25,10.8,10.7,15.4,5.2,4.5,5.9,11.8,11.7,16.5,17,1.8,11.4,22.1,37.1,29.6,31,18.1,19.6,7.8,9.2,1.6,42.2,45.7,40.2,43.2,41.1,26.7,20,22.1,1.9,31.1,1.5,8.5,7.7,12.4,1.6,3.5,4.4,6.4,17.3,39.2,37.8,40.4,49.3,16.8,34,9.4,24.4,13,27.4,7.9,17.1,12.8,4.2,7.5,30,45.3,18.9,12.4,16.9,42.3,19.3,29.9,8.7,18.7,19.4,37,36.9,38.8,20.6,19.6,32.7,30,36.1,12.1,35.5,8.4,25,18,2.6,9.9,8.5,43.7,46.8,24.3,23.4,20,23.5,6.4,9.7,33.7,12.6,13.3,22.1,21.3,13.8,19.5,16.1,19.8,19.3,44.5,23,14.9,35.7,31.2,7];
var pdensity = [4339.1,2115.4,3516.6,749,1847,898.4,4475.2,3995.1,2925.9,101.5,3016.4,2408.6,1517.1,1212.9,2322.9,2518.5,3115,2832,2914.1,2.2,2456.2,3008.5,1505.7,5102.6,4981.9,4589.1,1754,2407.3,2515.7,2330.1,9783.1,4856.7,2704.5,1034.8,1703,440.2,2223.1,1622,3990.4,1542.6,6657.3,1664.9,441.2,1862.4,109.5,967.1,2470.9,2508.1,1438,2955.1,2185.8,1865.7,4127.9,6456.4,2807.3,8265.8,5189.9,6322.1,3299.1,2666,1975.1,1477.9,1275.6,59.6,2094.9,1366.5,2256.4,283.8,3908.6,239.5,2388.8,1805.4,2485.6,5124.4,1642.3,1093.6,12.3,3235.1,1271.6,1921.7,628.3,350,372.6,2283.9,3403.2,5.2,152.8,202.6,704,2971.5,2505.8,667.7,1774.2,567.9,3809.9,223.7,2062.8,2091.4,2348.3,1820.8,3352.1,3419.6,99.5,48,2212.4,2071.7,3236.6,2809.5,7209,2371,102,2103,1464.4,3145.9,3057.9,2402.4,741.8,1752.3,2313.3,1970.6,29.9,1696.9,2480.7,28.2,181.6,2726.5];
var bdensity = [900,224.8648649,979.787234,61.3559322,82.19047619,70.98765432,786.8181818,303.9473684,248.6206897,7.096281202,450.5357143,311.3636364,235.5,132.6262626,262.3333333,288.9534884,219.7222222,355.8571429,215.483871,148.9010989,159.3333333,330.7142857,88.63636364,524.9019608,399.5454545,237.1875,185.6716418,212.8,199.3023256,125.9090909,1312.777778,365.7894737,101.1304348,87.78325123,104.0625,35.9009009,257.8723404,161.7721519,306.2318841,204.6938776,1480,89.23076923,17.50582751,75.49019608,10.84455324,39.45736434,115.4736842,98.85714286,104.0277778,613,84.03846154,496.2068966,517.2413793,598.0769231,179.0196078,1462.857143,520.4,426.875,342.4,198.5365854,162.3275862,50.53030303,100.9589041,5.696682464,152.1782178,198.2716049,192.8358209,18.28571429,281.5,23.64864865,259.4117647,104.025974,155.8715596,463.3333333,245.25,89.87804878,1.136150235,95.90909091,71.88888889,100.7438017,43.5106383,55.04504505,34.10810811,173.6363636,159.3478261,0.789473684,8.867635807,7.018018018,27.10743802,275.9090909,217.1212121,51.9047619,108.72,44.70588235,302.8,32.35465116,140.4545455,124.2105263,237.8431373,144.75,207.4285714,221,6.258692629,4.081632653,137.4468085,172.3404255,163.125,119.1304348,581.25,205.6097561,5.969111969,189.787234,109.625,172.3076923,169.5,207.2881356,46.62962963,185.1282051,188.4782609,152.7419355,1.914516447,116.0240964,142.8947368,2.486577181,5.936037441,212.5];
var population = [7553,7869,16442,13246,19468,14540,9769,15325,8353,19934,16848,21314,12203,12019,13863,21677,11204,19859,18092,20,18380,16871,13290,26240,10801,14590,11701,12131,10723,10264,17788,18478,31083,21014,5442,9773,20922,12876,27668,7525,8435,21688,18923,19070,8945,12474,23561,8792,10416,8871,11381,5410,11813,16487,14275,11386,13000,9994,16387,10852,22960,19565,18574,12576,21152,11008,15098,18887,7855,3554,12064,13829,27073,11002,6595,9014,3924,14338,11456,23184,23635,7785,6891,12550,15741,158,19977,22484,17039,13222,16606,7040,22255,9649,9581,7691,18235,7859,11925,7372,23410,10224,7149,3997,20782,9801,5243,12811,17397,9827,13210,9951,11749,12421,18276,14266,20035,6763,10663,12186,15176,14095,9391,8414,23293,15324];
var businesses = [1530,832,4605,1086,863,1150,1731,1155,721,1393,2523,2740,1884,1313,1574,2485,791,2491,1336,1355,1195,1852,780,2677,879,759,1244,1064,857,554,2363,1390,1163,1782,333,797,2424,1278,2113,1003,1924,1160,751,770,886,509,1097,346,749,1839,437,1439,1500,1555,913,2048,1301,683,1712,814,1883,667,1474,1202,1537,1606,1292,1216,563,350,1323,801,1699,973,981,737,363,422,647,1219,1636,1222,631,955,733,24,1159,779,656,1214,1433,545,1359,760,757,1113,1236,472,1213,579,1452,663,450,340,1292,810,261,548,1395,843,773,892,877,672,1017,1223,1259,722,867,947,972,963,543,741,761,1190];
var landarea = [1.7,3.7,4.7,17.7,10.5,16.2,2.2,3.8,2.9,196.3,5.6,8.8,8,9.9,6,8.6,3.6,7,6.2,9.1,7.5,5.6,8.8,5.1,2.2,3.2,6.7,5,4.3,4.4,1.8,3.8,11.5,20.3,3.2,22.2,9.4,7.9,6.9,4.9,1.3,13,42.9,10.2,81.7,12.9,9.5,3.5,7.2,3,5.2,2.9,2.9,2.6,5.1,1.4,2.5,1.6,5,4.1,11.6,13.2,14.6,211,10.1,8.1,6.7,66.5,2,14.8,5.1,7.7,10.9,2.1,4,8.2,319.5,4.4,9,12.1,37.6,22.2,18.5,5.5,4.6,30.4,130.7,111,24.2,4.4,6.6,10.5,12.5,17,2.5,34.4,8.8,3.8,5.1,4,7,3,71.9,83.3,9.4,4.7,1.6,4.6,2.4,4.1,129.5,4.7,8,3.9,6,5.9,27,3.9,4.6,6.2,507.7,8.3,3.8,298,128.2,5.6];
var suburb = ["Abbotsford","Airport West","Albert Park","Altona","Altona Meadows","Altona North","Armadale","Ascot Vale","Ashburton","Bacchus Marsh","Balwyn","Balwyn North","Bayswater","Bayswater North","Beaumaris","Blackburn","Blackburn South","Box Hill","Box Hill North","Braeside","Braybrook","Brighton East","Broadmeadows","Brunswick","Brunswick East","Brunswick West","Bulleen","Burwood","Burwood East","Cairnlea","Carlton","Carnegie","Caroline Springs","Carrum Downs","Chelsea Heights","Chirnside Park","Clayton","Clayton South","Coburg","Coburg North","Collingwood","Cranbourne","Cranbourne East","Cranbourne North","Cranbourne South","Cranbourne West","Dandenong North","Delahey","Dingley Village","Docklands","Doveton","East Melbourne","Elsternwick","Elwood","Fawkner","Fitzroy","Fitzroy North","Flemington","Footscray","Forest Hill","Frankston","Frankston North","Frankston South","Gisborne","Greensborough","Hallam","Heidelberg West","Hillside","Hughesdale","Hurstbridge","Ivanhoe","Keilor Downs","Keilor East","Kensington","Kew East","Kilsyth","Kinglake","Kings Park","Kingsbury","Lalor","Langwarrin","Laverton","Lysterfield","Maribyrnong","Meadow Heights","Melbourne Airport","Melton","Melton South","Melton West","Mentone","Mitcham","Montrose","Mooroolbark","Mount Evelyn","Murrumbeena","Narre Warren North","Newport","Noble Park North","Nunawading","Parkville","Pascoe Vale","Pascoe Vale South","Portarlington","Riddells Creek","Ringwood East","Ringwood North","Seabrook","Springvale South","St Kilda East","Strathmore","Sunbury","Sunshine","Sunshine North","Sydenham","Taylors Hill","Templestowe Lower","Truganina","Tullamarine","Vermont","Vermont South","Wallan","Wantirna","Watsonia","Whittlesea","Wyndham Vale","Yarraville"];
var x;
var y;
var y_;
var frame = 40;
var forward = true;
var a = 255;
var axisText = "Business Density per km²";
var selectedPoint = -1;
var selectedDist = 999;
var infoText0;
var infoText1;
var infoText2;
var infoText3;
var infoText4;
var infoText5;
var infoText6;

function setup() {
  createCanvas(1000,400);
  ellipseMode(RADIUS);
}

function draw() {
  background(255);
  fill(0);
  textSize(14);
  for (var i = 1; i <= 5; i++) {
    text(i*10, 100*i+100, 365);
  }
  textAlign(RIGHT);
  for (var i = 0; i <= 5; i++) {
    text(pow(10,i), 95, height-75*i-50);
  }
  textAlign(LEFT);
  text("Distance from the CBD (km)", 275, 395);
  push();
  translate(width/2, height/2);
  rotate(-HALF_PI);
  textAlign(CENTER);
  text(axisText, 0, -455);
  textAlign(LEFT);
  pop();
  stroke(1);
  if (mouseIsPressed && mouseX >= 500 && mouseX <= 625 && mouseY >= 25 && mouseY <= 75) {
    a = 230;
  } else {
    a = 255;
  }
  fill(a);
  rect(500, 25, 125, 50);
  line(100, 0, 100, 400);
  line(100, 350, 700, 350);
  noStroke();
  fill(0);
  textSize(18);
  if (forward) {
    axisText = "Business Density per km²";
  } else {
    axisText = "Population Density per km²";
  }
  text("Switch Graph", 510, 55);
  fill(255, 77, 0);
  for (var i = 0; i < 126; i++) {
    x = 10*distance[i]+100;
    y = height-75*log(pdensity[i])/log(10)-50;
    y_ = height-75*log(bdensity[i])/log(10)-50;
    var dy = (y_-y)/40;
    if (i == selectedPoint) {
      fill(127, 33, 0);
      ellipse(x, y+dy*frame, 5, 5);
      fill(255, 77, 0);
    }
    ellipse(x, y+dy*frame, 4, 4);
  }
  if (forward && frame < 40) {
    frame++;
  }
  if (!forward && frame > 0) {
    frame--;
  }
  if (selectedPoint == -1) {
    if (forward) {
      infoText1 = "For a sample of 129 Melbourne suburbs, there was a strong, negative, exponential association between distance from the Melbourne CBD and number of businesses per km². This data shows us that there are the most businesses as you get nearer to the Melbourne CBD, which directly supported the hypothesis. Click a data point for more information.";
      infoText0 = "Business Density";
      infoText2 = "";
      infoText3 = "";
      infoText4 = "";
      infoText5 = "";
      infoText6 = "";
    } else {
      infoText1 = "For a sample of 129 Melbourne suburbs, there was a moderate, negative, exponential association between distance from the Melbourne CBD and number of people per km². This data shows us that a major reason for the higher business density is because of the high population in the area. Click a data point for more information.";
      infoText0 = "Population Density";
      infoText2 = "";
      infoText3 = "";
      infoText4 = "";
      infoText5 = "";
      infoText6 = "";
    }
  } else {
    infoText0 = suburb[selectedPoint];
    infoText1 = "Distance from CBD: " + distance[selectedPoint] + "km";
    infoText2 = "Land Area: " + landarea[selectedPoint] + "km²";
    infoText3 = "Population: " + population[selectedPoint];
    infoText4 = "Population Density: " + nfc(pdensity[selectedPoint],2) + " per km²";
    infoText5 = "Businesses: " + businesses[selectedPoint];
    infoText6 = "Business Density: " + nfc(bdensity[selectedPoint],2) + " per km²";
  }
  fill(0);
  textAlign(LEFT);
  textSize(24);
  text(infoText0, 700, 25, 300, 400);
  textSize(18);
  text(infoText1, 700, 75, 300, 400);
  text(infoText2, 700, 125, 300, 400);
  text(infoText3, 700, 175, 300, 400);
  text(infoText4, 700, 225, 300, 400);
  text(infoText5, 700, 275, 300, 400);
  text(infoText6, 700, 325, 300, 400);
  
}

function mouseClicked() {
  if (mouseX >= 500 && mouseX <= 625 && mouseY >= 25 && mouseY <= 75) {
    forward = !forward;  
  } else if (mouseX <= 700) {
    selectedDist = 999;
    selectedPoint = -1;
  }
  for (var i = 0; i < 126;  i++) {
    var X = 10*distance[i]+100;
    var Y = height-75*log(pdensity[i])/log(10)-50;
    var Y_ = height-75*log(bdensity[i])/log(10)-50;
    var DY = (Y_-Y)/40;
    if (dist(mouseX, mouseY, X, Y+DY*frame) < 7 && dist(mouseX, mouseY, X, Y+DY*frame) < selectedDist) {
      selectedDist = dist(mouseX, mouseY, X, Y+DY*frame);
      selectedPoint = i;
    }
  }
  
}