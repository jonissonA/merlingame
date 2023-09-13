var colorTokens = ["000","b80","eb0","000","224","1fd","aad","922","e25","f89","b24","bcd","eff","8ab","234","0d6","fff","085","096","abe","734","eee","ffc","60f","e79","02d","88d","67b","39b","46c","54c","53b","54c","306","none","ccf","99d","1fd","1be","3bd","57e","adf","860","750","fc3","78c","449","feb","ffd","846","d78","a68","fff","db2","fe7","fc2","a81","9dc","fed","eba","cb9","885","a96","220","457","235","345","344","8ae","bdf"];
var sourceGradients = [[26,27],[28,29],[31,32],[35,36],[38,39],[40,3],[30,3],[45,3],[46,3],[47,48],[50,51],[53,63],[64,3],[65,3],[3,66],[67,3],[68,3],[69,3]];
var sourceLevels = {bridge:[["l2"],["m"],["b3d",0,0],["l1"],["wiu",0,0],["wid",0,0],["w"],["hj"],["ar"]],courtyard:[["g2"],["pl"],["g1"],["wiu",0,0],["wid",0,0]],cellar:[["ce1"],["ce2"],["wlk3d",0,0],["wid",0,0],["wiu",0,0]],hall:[["roo"],["hpl"],["roc"],["wiu",0,0],["wid",0,0]],garrison:[["gg"],["gboard"],["wiu",0,0],["wid",0,0]],throne:[["trbg"],["trpl2"],["trfl2"],["trpl1"],["trf1"],["wiu",0,0],["wid",0,0]],chapel:[["cabg"],["cs1"],["wiu",0,0],["wid",0,0]]};
var sourceEntities = {b3d:[{s:0,f:1,d:[[0,0,0],[3,0,0],[3,0,4],[0,0,4]]},{s:0,f:1,d:[[0,-0.13,0],[3,-0.13,0],[3,-0.13,4],[0,-0.13,4]]},{s:0,f:2,d:[[3,-0.13,0],[3,-0.13,4],[3,0,4],[3,0,0]]},{s:0,f:2,d:[[3,0,4],[3,-0.13,4],[0,-0.13,4],[0,0,4]]}],wlk3d:[{s:0,f:2,d:[[0.5,3.5,2],[0.5,1.5,2],[-1.5,1.5,2],[-1.5,0.5,2],[-3.5,0.5,2],[-3.5,1.5,2],[-2.5,1.5,2],[-2.5,2.5,2],[-0.5,2.5,2],[-0.5,3.5,2]]},{s:0,f:2,d:[[-3.5,-0.5,2],[-3.5,-1.5,2],[-0.5,-1.5,2],[-0.5,-0.5,2],[1.5,-0.5,2],[1.5,-3.5,2],[2.5,-3.5,2],[2.5,0.5,2],[-1.5,0.5,2],[-1.5,-0.5,2],[-3.5,-0.5,2]]}],ch13d:[],ch23d:[],b:[{d:[[0,0.5],[0,0],[0.5,0.5],[0.5,1]]}],bc:[{d:[[0.5,0],[-0.5,1],[0.5,2],[1.5,1]],f:4}],bu:[{d:[[-1,0.2],[-1.3,0,-1.1,-1.1,-0.7,-1],[-0.8,-1.2,-0.5,-1.5,-0.5,-1.2],[-0.5,-2.4,0.2,-2.5,0.3,-2],[0.7,-2.4,1,-1.8,1,-1.2],[1.1,-2.1,1.6,-1.4,1.4,-0.5],[1.6,-0.8,1.8,-0.3,1.6,0],[1.9,0.1,1.7,0.8,1.4,0.7],[1.8,1.5,1.1,2.1,0.8,1.7],[0.6,2.3,0,2.4,-0.3,1.8],[-0.4,2,-1.1,2,-1,1.2],[-1.3,1.1,-1.4,0.6,-1,0.2]],f:5}],c1:[{d:[[0,0],[0,0.3]],z:0}],c2:[{d:[[0,0],[0,0.6]],z:0},{d:[[0,0.8],[0,0.9]],z:0}],c3:[{d:[[0,0],[0,1]],f:6,z:0},{d:[[0,1.2],[0,1.4]],f:6,z:0}],elp:[{d:[[0.77,1.76],[1,1.4],[1,0.86,1.06,0.1,0.6,0],[0.2,0,0.25,0.5,0.2,1]],f:7},{d:[[0.2,0.5],[0.1,1],[0.1,1.4,0.5,1.7,0.76,1.6],[0.7,1],[0.47,1,0.26,1,0.2,0.5]],f:8},{d:[[0.34,0.3],[0,0.64],[0.4,0.54]],f:7,z:0},{d:[[0.2,0.53],[0.2,0.85,0.4,1,0.7,1],[0.7,0.8,0.65,0.5,0.55,0.3],[0.4,0,0.25,0.14,0.2,0.53]],f:9},{d:[[0.1,1],[0,1.2,0.23,1.7,0.77,1.76],[0.8,1.7,0.77,1.6,0.73,1.6],[0.54,1.6,0.2,1.5,0.1,1]],f:10},{d:[[0.7,0.7],[0.36,1],[0.7,0.9]],f:7,z:0}],en:[{d:[[3.55,5.6],[4.55,4.6],[5.55,5.6],[4.55,6.6]],f:15},{d:[[3.83,5.6],[4.55,4.86],[5.27,5.6],[4.55,6.3]],f:16},{d:[[4.13,5.6],[4.55,5.16],[5,5.6],[4.55,6]],f:15},{d:[[3.55,5.8],[4.55,6.8],[4.55,6.6],[3.55,5.6]],f:17},{d:[[5.55,5.8],[4.55,6.8],[4.55,6.6],[5.55,5.6]],f:18}],rk:[{d:[[1.1,0.36],[0.85,0.06],[0.7,-0.06,0.56,0.16,0.5,0.53],[0.77,0.85],[0.85,0.47,1,0.3,1.1,0.36]],f:9},{d:[[0.4,2.35],[0.16,2],[0.2,1.17],[1,0.7]],f:7},{d:[[1,1],[1,0.65,1.1,0.57,1.2,0.5],[1.1,0.2,0.84,0.3,0.8,0.85],[1,1.1,0.56,1.45,0.74,0.9],[0.7,0.47,0.4,0.86,0.3,1.4],[0.4,1.2,0.5,1.1,0.53,1.5],[0.6,1.6,1,1.47,1,1]],f:8},{d:[[1,1.1],[1.1,1.6],[1.1,2,0.7,2.3,0.44,2.2],[0.5,1.6],[0.74,1.6,0.94,1.53,1,1.1]],f:8},{d:[[0.7,0.73],[0.4,0.4],[0.2,0.4,0.1,0.77,0,1.1],[0.3,1.4],[0.4,1,0.5,0.7,0.7,0.73]],f:9},{d:[[1,1],[1,1,1,1.1,1,1.1],[1,1.45,0.75,1.6,0.5,1.6],[0.5,1.64,0.5,1.5,0.5,1.5],[0.74,1.5,1,1.4,1,1]],f:10},{d:[[1.1,1.56],[1.1,1.56,1.1,1.6,1.1,1.67],[1.1,2,0.8,2.3,0.44,2.35],[0.4,2.35,0.4,2.24,0.44,2.2],[0.73,2.17,1,2.05,1.1,1.56]],f:10}],ro:[{d:[[0.24,0.2],[0.16,0.2,0.1,0.24,0,0.16],[0,0.16,0.05,0,0.13,0],[0.2,0,0.24,0.2,0.24,0.2]],f:19}],rwi:[{d:[[4.5,7.5],[4.4,7.4],[4.9,0.3],[4.9,0.3,5.4,-0.5,5.5,0.5],[5.5,6.5]],f:20},{d:[[4.4,7.4],[4.4,1.4],[4.4,0.4,5.4,-0.6,5.4,0.4],[5.4,6.4]],f:21},{d:[[4.9,0.2],[4.9,6.9]],f:22,z:0},{d:[[4.4,3.4],[5.4,2.4]],f:22,z:0},{d:[[4.4,1.4],[4.9,0.9],[5.4,0.4]],f:22,z:0},{d:[[4.4,5.4],[5.4,4.4]],f:22,z:0}],pw:[{d:[[0,1.36],[0,1.3,0,1.2,0,1.2],[0,1.2,0.44,1.24,0.57,1.25],[0.6,1.3,0.6,1.34,0.57,1.4],[0.4,1.6,0.14,1.6,0,1.36]],f:10},{d:[[0,1.2],[0.2,0.8,0.2,0.6,0.3,0.2],[0.44,0.8,0.5,1,0.57,1.26],[0.4,1.5,0.13,1.5,0,1.2]],f:8},{d:[[0.3,0.6],[0.1,0.56,0.1,0.05,0.3,0],[0.5,0,0.5,0.6,0.3,0.6]],f:9}],tu:[{d:[[0,0.34],[0,0.34,0,0.3,0,0.25],[0.05,0.2,0.1,0.3,0.1,0.3],[0.1,0.3,0.06,0,0.16,0],[0.2,0,0.2,0.25,0.2,0.25],[0.2,0.25,0.2,0.13,0.25,0.14],[0.3,0.14,0.3,0.3,0.3,0.3],[0.3,0.3,0.3,0.2,0.34,0.24],[0.36,0.3,0.36,0.3,0.36,0.3]],z:0}],wiu:[{d:[[1.3,1.8],[1.3,1.8,1.6,2.1,1.65,2.76],[1.66,2.9,1.6,2.9,1.6,3],[1.7,3.1,1.7,3.46,1.6,3.56],[1.2,4.1,0.66,3.9,0.5,3.54],[0.4,3.4,0.4,3,0.5,2.9],[0.4,2.8,0.5,2.7,0.5,2.5],[0.75,1.5,1.3,1.8,1.3,1.8]],f:23},{d:[[1.6,3],[1.36,3.3,0.8,3.5,0.5,2.9]],z:0},{d:[[0.6,3.06],[0.55,3.3,0.6,3.3,0.65,3.24],[0.6,3.34,0.7,3.4,0.74,3.26],[0.75,3.4,0.86,3.3,0.8,3.1]],f:24},{d:[[0.7,2.6],[0.6,2.76,0.6,2.9,0.6,3.06],[0.65,3.1,0.74,3.2,0.8,3.1],[0.86,3,0.9,2.8,0.9,2.7]],f:23,z:0},{d:[[0.8,1.2],[1.1,1.7],[0.8,1.74]],f:24},{d:[[1,1.6],[0.9,1.7,0.9,1.7,0.8,1.6],[0.7,1.7,0.7,1.94,0.7,2],[1.2,1.7,0.9,2.6,1.2,2.45],[1.2,2.6,1.3,2.7,1.35,2.6],[1.34,2.8,1.5,2.8,1.5,2.6],[1.6,2.7,1.7,2.5,1.6,2.44],[1.6,2.44,1.75,2.4,1.6,2.1],[1.45,1.9,1.46,1.6,1.46,1.6]],f:16},{d:[[1.3,0.8],[1.7,1.2,1.8,2,1.5,2],[1.15,2,0.86,1.4,0.6,1.35],[0.35,1.3,0.85,0.3,1.3,0.8]],f:23},{d:[[1.2,1.24],[1.2,1.26,1.4,1.3,1.4,1.2],[1.4,1.2,1.3,0.74,1.46,0.3],[1.5,0.26,1.6,0.44,1.6,0.4],[1.7,0.3,1.5,0.06,1.4,0],[1.3,0,1.24,0.3,1,0.44],[1,0.5,0.9,1,0.9,1],[0.9,1,0.9,1,0.9,1.05]],f:23,z:0},{d:[[1.1,1.16],[1.1,1.16,1.1,1.2,1.1,1.2]],f:25,z:0},{d:[[0.2,2.9],[0.6,3.2]],z:0}],wid:[{d:[[1.3,1.65],[1.3,1.65,0.65,2.2,0.5,2.7],[0.4,2.8,0.4,3,0.5,3],[0.4,3.1,0.4,3.46,0.5,3.6],[0.86,4.1,1.4,3.9,1.6,3.54],[1.7,3.4,1.7,3,1.6,2.9],[1.64,2.7,1.6,2.6,1.5,2.3],[1.4,2.06,1.3,1.65,1.3,1.65]],f:23},{d:[[0.5,3],[0.7,3.3,1.26,3.5,1.6,2.9]],z:0},{d:[[1.4,3],[1.54,3.2,1.46,3.3,1.4,3.2],[1.5,3.35,1.4,3.4,1.35,3.3],[1.35,3.4,1.24,3.4,1.3,3.2]],f:24},{d:[[1.4,2.6],[1.45,2.8,1.5,2.94,1.5,3.06],[1.4,3.1,1.3,3.2,1.25,3.1],[1.2,3,1.2,2.8,1.2,2.7]],f:23,z:0},{d:[[0.64,1.45],[0.7,2.1],[1.1,1.9],[1.26,1.4]],f:24},{d:[[0.8,1.7],[0.76,1.8]],f:16,z:0},{d:[[1,1.44],[1.3,1.4],[1.4,1.6,1.5,1.8,1.4,2],[1.4,2,1.4,2,1.3,2],[1,1.9,1.2,2.4,0.9,2.45],[0.65,2.5,0.76,3,0.76,3],[0.76,3,0.3,2.65,0.56,2.2],[0.6,2.05,0.5,2,0.65,1.8],[0.7,2,0.75,1.9,0.75,1.9],[0.75,1.9,1,2.15,1,1.44]],f:16},{d:[[1,0.8],[0.7,0.64,0.2,1.4,0.4,1.7],[0.6,2.05,0.8,1.6,1.3,1.76],[1.54,1.85,1.7,1.9,1.6,1.55],[1.5,1,1.34,0.9,1,0.8]],f:23},{d:[[1.2,1.25],[1.2,1.3,1.2,1.25,1.24,1.2],[1.24,1.2,1.16,0.74,1.3,0.3],[1.35,0.26,1.45,0.44,1.5,0.4],[1.5,0.3,1.35,0.06,1.3,0],[1.2,0,1.1,0.3,0.9,0.44],[0.8,0.5,0.75,1,0.75,1]],f:23,z:0},{d:[[1.26,3.3],[0.9,3.6]],z:0}],l2:[{d:[[7,12],[10,9],[10,3],[7,0]],g:[0,8,6,10,6]},{d:[[-1,6],[-1,2],[8,11],[10,9],[10,3],[11,4],[11,14],[18,21],[14,21]],g:[1,9,14,11,10]},{d:[[13,18],[16,21],[14,21],[-1,6],[-1,4],[4,9]],f:30,z:0},{d:[[-4,-1],[7,10],[8,-1]],g:[2,4,1,6,9]},{d:[[8,11],[7.8,11.3],[7.8,-4.8],[8,-5],[8,3]],f:26,z:0},{d:[[6.8,10.3],[6.8,-5.8],[7.8,-4.8],[7.8,11.3]],f:30},["b",-3,-3.5],["b",-3.25,-3.25],{d:[[4.5,9.5],[12.8,17.8]],z:0},["c2",-13,-18],["c1",-2.5,-7.5],["c1",-11.8,-16.8],["en",-5.45,-6.17]],m:[{d:[[-1,5],[15,21],[6,21],[-1,14]],f:33}],l1:[{d:[[-1,10],[-1,21],[10,21]],g:[1,4,17,0,20]},["tu",-1,-18],["tu",-1.4,-14.16],["tu",-12.87,-16.66]],w:[{d:[[21,10],[10,-1],[21,-1]],g:[1,19,0,17,6],s:34},{d:[[13,2],[14,1],[20,7],[20,9]],g:[3,16,3,15,5]},{d:[[8,3],[11,6],[11,14],[21,24],[21,10],[19,8],[19,7],[18,6],[18,7],[17,6],[17,5],[16,4],[16,5],[15,4],[15,3],[14,2],[14,3],[13,2],[13,1],[8,-5]],g:[2,19,6,13,16]},{d:[[20,6],[20,7],[19,8],[19,7]],f:26},{d:[[18,6],[19,5],[20,6],[19,7]],f:35},{d:[[18,4],[18,5],[17,6],[17,5]],f:26},{d:[[16,4],[17,3],[18,4],[17,5]],f:35},{d:[[16,2],[16,3],[15,4],[15,3]],f:26},{d:[[14,2],[15,1],[16,2],[15,3]],f:35},{d:[[14,0],[14,1],[13,2],[13,1]],f:26},{d:[[12,0],[13,-1],[14,0],[13,1]],f:35},["b",-13.5,-10],["b",-18,-16.5],["b",-19,-10],["b",-14,-14.5],["b",-14.25,-14.25]],hj:[{d:[[11.7,15.3],[11.7,-0.7],[12,-1],[12,15]],f:26},{d:[[10.7,14.3],[10.7,-1.8],[11.7,-0.7],[11.7,15.3]],f:30}],ar:[{d:[[7.4,3.9],[7.4,3.9,7.1,3.9,6.6,4.5],[6,5.2,6,6.1,6,6.1],[5.8,5.5]],s:37,w:"10",z:0},{d:[[6,6.1],[6.5,5.7]],s:37,w:"10",z:0}],g2:[{d:[[-1,-2],[-1,18],[19,-2]],g:[4,17,2,0,19]},["bu",-3.3,-10.6],{d:[[12,7],[12,22],[10,22],[10,9]],g:[5,10,9,13,18]},{d:[[8,7],[8,21],[10,21],[10,9]],g:[6,10,9,6,19]},{d:[[21,4],[21,22],[15,22],[15,10]],g:[5,17,8,20,17]},{d:[[12,7],[12,22],[15,22],[15,10]],g:[6,15,10,12,19]},{d:[[9,10],[9,22],[7,22],[7,12]],g:[5,17,8,20,17]},{d:[[8,7],[10,9],[12,7],[15,10],[21,4],[21,-2],[17,-2]],f:41}],pl:[{d:[[15,10],[15,16],[12,19],[12,13]],f:42},{d:[[9,10],[9,16],[12,19],[12,13]],f:43},{d:[[12,13],[9,10],[12,7],[15,10]],f:44},{d:[[9.7,10.1],[9.6,10.1],[12,7.7],[14.4,10.1],[14.3,10.1]],f:42},{d:[[12,12.5],[9.7,10.1],[12,7.8],[14.3,10.1]],f:44}],g1:[{d:[[-1,16],[-1,22],[3,22],[10,15],[7,12],[9,10],[7,8]],f:41},["tu",-8.84,-1.76],["tu",-3,-1.8],["tu",-0.8,-5.66],{d:[[10,15],[10,22],[3,22]],g:[5,9,16,11,26]},["bu",-6,-2.5],["c1",-8,-17],["c1",-18,-7],["c2",-17,-8],["c3",-17,-12],["c3",-9,-16],["en",-10.45,0.8]],ce1:[{d:[[-1,-2],[-1,22],[21,22],[21,-2]],f:3},{d:[[12,9],[12,5],[13,6],[13,10]],g:[7,13,6,12,9]},{d:[[15,8],[15,4],[13,6],[13,10]],g:[8,14,5,15,8]},{d:[[12,5],[14,3],[15,4],[13,6]],f:19},{d:[[14,7],[15,6],[18,9],[17,10]],f:19},{d:[[5,8],[5,4],[6,5],[6,9]],g:[7,6,5,5,8]},{d:[[6,7],[5,6],[6,5],[5,4],[6,3],[8,5]],f:19},{d:[[5,10],[5,6],[6,7],[6,11]],g:[7,6,7,5,10]},{d:[[8,9],[8,5],[6,7],[6,11]],g:[8,6,7,7,10]},{d:[[14,11],[14,7],[17,10],[17,14]],g:[7,16,9,15,12]},["c2",-16,-9],["c1",-5.8,-6.8],["c1",-14.3,-4.7]],ce2:[{d:[[15,14],[12,17],[11,16],[14,13]],f:19},{d:[[11,20],[11,16],[12,17],[12,21]],g:[7,14,7,13,10]},{d:[[15,18],[15,14],[12,17],[12,21]],g:[8,16,13,17,16]},{d:[[11,20],[11,16],[12,17],[12,21]],g:[7,12,17,11,20]},{d:[[18,13],[18,9],[17,10],[17,14]],g:[8,17,10,18,13]},{d:[[6,17],[6,13],[5,14],[5,18]],g:[8,7,16,8,19]},{d:[[2,17],[2,13],[3,14],[3,18]],g:[7,6,17,5,20]},{d:[[5,20],[5,16],[6,17],[6,21]],g:[7,6,17,5,20]},{d:[[4,17],[4,13],[5,14],[5,18]],g:[7,5,14,4,17]},{d:[[8,19],[8,15],[6,17],[6,21]],g:[8,7,16,8,19]},{d:[[4,17],[4,13],[3,14],[3,18]],g:[8,3,14,4,17]},{d:[[6,17],[5,16],[7,14],[8,15]],f:19},{d:[[3,14],[2,13],[4,11],[6,13],[5,14],[4,13]],f:19},["c2",-14.6,-14.4],["c3",-7,-16],["c3",-5.2,-6.2],["c1",-6.7,-16.3],["ro",-5.3,-3.95],["ro",-2.43,-12.7],["ro",-13.9,-13.4],["en",-9.45,1.8]],roo:[{d:[[-1,-2],[-1,22],[21,22],[21,-2]],g:[9,11,22,2,-5]},{d:[[4,11],[4,15],[5,16],[5,12]],f:49},{d:[[14,7],[14,25],[17,22],[17,4]],g:[10,15,6,17,13]},{d:[[4,11],[5,12],[12,5],[11,4]],f:52},{d:[[5,12],[5,24],[12,17],[12,5]],g:[10,10,10,12,18]},["bc",-5.5,-9],["bc",-7.5,-7],["bc",-9.5,-5],["rk",-6.35,-7.1],["rk",-9.4,-4.14]],hpl:[{d:[[7,9.7],[7,17.7],[8,18.7],[8,10.7]],f:53},{d:[[7,9.7],[8,10.7],[15,3.7],[14,2.7]],f:54},{d:[[9,7.7],[8,8.7],[9,9.7],[10,8.7]],f:55},{d:[[11,5.7],[10,6.7],[11,7.7],[12,6.7]],f:55},{d:[[13,3.7],[12,4.7],[13,5.7],[14,4.7]],f:55},{d:[[15,3.7],[15,4],[8,11],[8,10.7]],f:56},["pw",-8.74,-7.4],["pw",-12.7,-3.44]],roc:[{d:[[16,9],[9,16],[7,14],[4,17],[3,16],[16,3],[17,4],[14,7]],f:52},{d:[[9,16],[9,28],[16,21],[16,9]],g:[10,12,13,14,20]},{d:[[7,14],[7,26],[9,28],[9,16]],f:49},["rwi",-5.6,-15.6],["rwi",-7.6,-13.6],["rwi",-9.6,-11.6],["bc",-3.5,-15],["bc",-5.5,-13],["bc",-7.5,-13],["bc",-9.5,-13],["bc",-9.5,-11],["bc",-7.5,-11],["bc",-9.5,-9],["bc",-11.5,-9],["bc",-11.5,-11],["bc",-11.5,-7],["bc",-13.5,-7],["bc",-13.5,-9],["bc",-13.5,-5],["en",-11.45,1.8],{d:[[7,24],[7,14],[4,17],[3,20]],g:[10,5,16,7,23]},{d:[[4,17],[4,21],[3,20],[3,16]],f:49}],gg:[{d:[[-1,-2],[-1,22],[21,22],[21,-2]],f:57},{d:[[-1,12],[13,-2],[-1,-2]],f:58},{d:[[-1,12],[-0.5,12.5],[-0.5,-1.5],[-1,-2]],f:59},{d:[[0.5,11.5],[-0.5,12.5],[-0.5,-1.5],[0.5,-2.5]],f:58},{d:[[2,9],[2.5,9.5],[2.5,-4.5],[2,-5]],f:59},{d:[[3.5,8.5],[2.5,9.5],[2.5,-4.5],[3.5,-5.5]],f:58},{d:[[5,6],[5.5,6.5],[5.5,-7.5],[5,-8]],f:59},{d:[[6.5,5.5],[5.5,6.5],[5.5,-7.5],[6.5,-8.5]],f:58},{d:[[8,3],[8.5,3.5],[8.5,-10.5],[8,-11]],f:59},{d:[[9.5,2.5],[8.5,3.5],[8.5,-10.5],[9.5,-11.5]],f:58},["tu",-13,-2.66],["tu",-3.66,-12.9],["tu",-17.8,-17.66],["bu",-17.3,-11.8],["bu",-14.2,-18.6]],gboard:[{d:[[14,7],[14,7.5],[17,4.5],[17,4]],f:60},{d:[[6,17],[6,17.5],[11,12.5],[11,12]],f:60},{d:[[12,11],[12,11.5],[17,6.5],[17,6]],f:60},{d:[[5,12],[5,12.5],[6,13.5],[6,13]],f:61},{d:[[5,16],[5,16.5],[6,17.5],[6,17]],f:61},{d:[[11,6],[11,6.5],[12,7.5],[12,7]],f:61},{d:[[3,16],[3,16.5],[4,17.5],[4,17]],f:62},{d:[[4,17.5],[5,16.5],[5,16],[4,17]],f:60},{d:[[11,10],[11,10.5],[12,11.5],[12,11]],f:62},{d:[[10,11.5],[11,10.5],[11,10],[10,11]],f:60},{d:[[12,5],[11,6],[12,7],[7,12],[6,11],[5,12],[6,13],[3,16],[4,17],[5,16],[6,17],[11,12],[10,11],[11,10],[12,11],[17,6],[16,5],[17,4],[16,3],[13,6]],f:52},["bc",-3.5,-15],["bc",-5.5,-13],["bc",-11.5,-5],["bc",-15.5,-5],["bc",-11.5,-7],["bc",-11.5,-9],["bc",-5.5,-11],["bc",-9.5,-9],["bc",-9.5,-11],["bc",-5.5,-15],["bc",-7.5,-11],["bc",-7.5,-13],["bc",-13.5,-5],["bc",-13.5,-7],["en",-11.45,1.8],["pw",-11.7,-4.64],["pw",-5.67,-10.64]],trbg:[{d:[[-1,0],[-1,22],[21,22],[21,0]],f:3}],trpl2:[{d:[[5,9.8],[5,13.8],[6,14.8],[6,10.8]],g:[11,6,11,5,14]},{d:[[13,1.8],[5,9.8],[6,10.8],[14,2.8]],f:54},{d:[[7,7.8],[6,8.8],[7,9.8],[8,8.8]],f:55},{d:[[9,5.8],[8,6.8],[9,7.8],[10,6.8]],f:55},{d:[[11,3.8],[10,4.8],[11,5.8],[12,4.8]],f:55},{d:[[13,1.8],[12,2.8],[13,3.8],[14,2.8]],f:55},{d:[[6,10.8],[6,14.8],[14,6.8],[14,2.8]],f:53},["rk",-11.4,-1.94],["rk",-8.4,-4.94],["rk",-6.4,-7]],trfl2:[{d:[[4,13],[5,14],[13,6],[12,5]],f:16},{d:[[4,13],[5,14],[5,18],[4,17]],g:[12,3,12,2,15]},["bc",-5.5,-11],["bc",-7.5,-9],["bc",-9.5,-7],["bc",-11.5,-5],{d:[[5,14],[5,18],[13,10],[13,6]],g:[13,10,17,11,20]}],trpl1:[{d:[[8,12.8],[16,4.8],[15,3.8],[7,11.8]],f:54},{d:[[7,11.8],[7,15.8],[8,16.8],[8,12.8]],g:[11,10,10,9,13]},{d:[[15,3.8],[14,4.8],[15,5.8],[16,4.8]],f:55},{d:[[13,5.8],[12,6.8],[13,7.8],[14,6.8]],f:55},{d:[[11,7.8],[10,8.8],[11,9.8],[12,8.8]],f:55},{d:[[9,9.8],[8,10.8],[9,11.8],[10,10.8]],f:55},{d:[[8,12.8],[8,16.8],[16,8.8],[16,4.8]],f:53},["pw",-10.7,-7.44]],trf1:[{d:[[9,18],[9,22],[17,14],[17,10]],g:[13,10,17,11,20]},{d:[[7,16],[9,18],[9,22],[7,20]],g:[12,7,16,6,19]},{d:[[4,17],[4,21],[5,22],[5,18]],g:[12,3,16,2,19]},{d:[[5,22],[7,20],[7,16],[5,18]],g:[13,6,17,7,20]},{d:[[15,12],[17,10],[17,6],[15,8]],g:[13,16,7,17,10]},{d:[[6,15],[4,17],[5,18],[7,16],[9,18],[17,10],[15,8],[17,6],[16,5]],f:16},{d:[[13,14],[13,18],[14,19],[14,15]],g:[12,14,15,13,18]},{d:[[14,19],[15,18],[15,14],[14,15]],g:[13,14,15,15,18]},["bc",-7.5,-15],["bc",-5.5,-15],["bc",-13.5,-7],["bc",-7.5,-13],["bc",-9.5,-15],["bc",-9.5,-13],["bc",-9.5,-11],["bc",-11.5,-13],["bc",-11.5,-9],["bc",-13.5,-11],["bc",-13.5,-13],{d:[[15,12],[15,16],[16,17],[16,13]],g:[12,16,13,15,16]},{d:[[16,17],[17,16],[17,12],[16,13]],g:[13,14,15,15,18]},["bc",-15.5,-11],["bc",-11.5,-11],["bc",-13.5,-9],["bc",-15.5,-9],["en",-11.45,-0.17],["elp",-15.4,-10.74],["pw",-13.7,-12.77]],cwi:[{d:[[3,9.9],[3,5.6],[3.5,3.9],[4.1,4.5],[4.1,8.8]],f:11},{d:[[3,9.6],[3,5.6],[3.5,4.1],[4,4.6],[4,8.6]],f:12},{d:[[3,9.6],[3.1,9.8],[4.1,8.8],[4,8.6]],f:13},{d:[[3.1,9.8],[3,9.9],[3,9.6]],f:14},{d:[[3.5,4.1],[3.5,9.1]],f:14,z:0},{d:[[3,5.6],[4,4.6]],f:14,z:0},{d:[[3,7.6],[4,6.6]],f:14,z:0},{d:[[3,8.6],[4,7.6]],f:14,z:0},{d:[[3,6.6],[4,5.6]],f:14,z:0}],cabg:[{d:[[-1,0],[-1,22],[21,22],[21,8],[21,0]],g:[14,5,12,1,0]},{d:[[3.5,4],[8,9],[8,15],[3,10],[3,6]],g:[15,3,6,7,10],w:"0"},{d:[[6.5,1],[11,6],[11,12],[6,7],[6,3]],g:[15,6,3,10,7],w:"0"},{d:[[9.5,-2],[14,3],[14,9],[9,4],[9,0]],g:[15,9,0,13,4],w:"0"},["cwi"],["cwi",-3,3],["cwi",-6,6]],cs1:[{d:[[19,4],[19,10],[18,11],[18,5]],g:[16,18,5,19,10]},{d:[[9,10],[9,16],[10,17],[10,11]],g:[17,5,20,4,25]},{d:[[11,6],[11,12],[12,13],[12,7]],g:[17,12,7,11,12]},{d:[[19,6],[19,12],[6,25],[6,19]],g:[16,6,19,8,24]},{d:[[18,11],[18,17],[17,18],[17,12]],g:[16,17,12,18,17]},{d:[[17,12],[16,11],[17,10],[18,11]],f:12},{d:[[16,11],[16,17],[17,18],[17,12]],g:[17,17,12,16,17]},{d:[[14,13],[14,19],[13,20],[13,14]],g:[16,13,14,14,19]},{d:[[5,12],[5,18],[6,19],[6,13]],g:[17,6,13,5,18]},{d:[[3,16],[3,22],[6,25],[6,19]],g:[17,6,19,5,24]},{d:[[3,18],[3,24],[4,25],[4,19]],g:[17,4,19,3,24]},{d:[[5,18],[5,24],[4,25],[4,19]],g:[16,4,19,5,24]},{d:[[4,19],[3,18],[4,17],[3,16],[6,13],[5,12],[6,11],[8,13],[10,11],[9,10],[12,7],[11,6],[12,5],[13,6],[16,3],[19,6],[13,12],[14,13],[13,14],[12,13],[6,19],[5,18]],f:12},["bc",-10.5,-12],["bc",-12.5,-12],["bc",-10.5,-10],["bc",-6.5,-14],["bc",-6.5,-12],["bc",-8.5,-14],["bc",-8.5,-12],["bc",-14.5,-8],["bc",-12.5,-10],["bc",-12.5,-8],["bc",-10.5,-8],["bc",-12.5,-6],["bc",-16.5,-10],["bc",-14.5,-6],["bc",-4.5,-14],["bc",-6.5,-16],["bc",-16.5,-6],["bc",-14.5,-4],{d:[[12,13],[12,19],[13,20],[13,14]],g:[17,13,14,11,19]},["en",-13.45,1.8],["elp",-16.43,-9.74],["elp",-11.4,-4.74],["elp",-12.4,-11.74],["elp",-5.4,-10.74]]};