const gif_dir = "gifs/";

const gifs = [
"024563e92479e0f47b23259acd4c1b78.gif",
"07bfd21d88d2a9c562d94a2fdd575f1c.gif",
"088d506aa85feb66490d53a4fb0bb5af.gif",
"0bebd7c75f988ac3aa9ad5c1497c16e9.gif",
"0e712cf7bcbacc3c1d163c69f7053a54.gif",
"108a658bee5cb2d67f81e532d444f863.gif",
"10bab5ce4c266b078a7eee50c3449b11.gif",
"11addde012521cd1693b566fc65e381a.gif",
"160e464cff7b77c18f1f71cc20e8f436.gif",
"17cb369db782cb4a0e97f195b067cd81.gif",
"1bb29ee141d6926c80fb92cb4b766c8f.gif",
"1c7f6710ef6187d00c8a41abc6b77dbd.gif",
"1ec175a90fc6ed0e192aeac3498fa56c.gif",
"1f2c6332149b779b1ea7a9f8186b0dba.gif",
"218e6fff3ff54b2551a39f518bb7a7ea.gif",
"2455ca1f605a980955f4104e84cc2686.gif",
"24a103ef90fd7e08cb9ef8eb46df0146.gif",
"2529e8839413c5a07778c67a3ac33bf3.gif",
"28ace0ea9e1584fa13dbe59b5602c2d3.gif",
"2c326d891440483b641a97b38fe00d40.gif",
"2c5dffcf7826bda96c514df28087a722.gif",
"2d0f04efd4deabe2ec682bd1eb4be0b9.gif",
"3029fa8b860d056813d4b01920d6b45b.gif",
"32a97b8fa2cafc86f02e02063691fd47.gif",
"34fd023a68865e601915e6d4f36ec010.gif",
"35053332a2e7e3acc9dfdad3149c54ce.gif",
"354b6f66d953a2fd16708e8d15a259a4.gif",
"3c4e8c30b31b6e76f5ef50f7e6c82a59.gif",
"3cbd295762724610b952381ce1d4e312.gif",
"3e664414393b0f9368ca7501f48b02d6.gif",
"3e6e987d54e44370d1da8ec88aa245b0.gif",
"3fafd0ed530c9d44e0b4473637156757.gif",
"40e0a3a9fad5b1b10065b8a8feccca1d.gif",
"42e874c01ac4dffe86807cf517c1e6da.gif",
"43d7ca80f4d6282f840c155a6eae44aa.gif",
"43f42dd8929829dc8d2de063965f339f.gif",
"45de73171e5973f68d8a7f7df82cad4e.gif",
"492a8175df8494ebcdf7437b2134aae4.gif",
"49a7ae9a6c624e75b33cd4a3b7bbf661.gif",
"4d12dc6490bdef64b1a6f43457093c10.gif",
"50c1e19b6abd59ca77d42a66c88c5ba6.gif",
"54bdc13ebbb50aca80ebe80b7ccda019.gif",
"589a8b3af42cbe176522569ef6e40aae.gif",
"58e1bf088756a09986513b4ad063b40a.gif",
"5f2531cc6ad249c851a029489dd9a572.gif",
"69956d332ed22111c172f8fb19a996c6.gif",
"6ab0f5ea1623478c429b36729cfa8214.gif",
"6b21b95d3ad9fa67944aeadeb193262c.gif",
"6b34282647e8ef5bf770c9f9677a1a9c.gif",
"736301586c0582afed3dc5b674905608.gif",
"75174866fb9a1dac76b16af5f75d2e5d.gif",
"76833ff419e44697dfefd18d9e254649.gif",
"77d7c7865dabc6b573665e77ca78b4a3.gif",
"79c1b6f3ea81ef862f1d05e1bf5157ee.gif",
"803c44b356153b5f1ae2ad22065e1edf.gif",
"81bc7b449d1e4e923093412333ba8a8c.gif",
"840d8a614b231b73fe73ec6d8d05367b.gif",
"85024dd37b4fca67d6ca620eb61dfa39.gif",
"881b063d8b8240e8be824697e2273eb5.gif",
"885d1a590129397c3535cb7d86d58124.gif",
"89b4c0dd5dd84e00b3a885cbf1cdf86f.gif",
"8de4446947ed35c489c9674adb1c965c.gif",
"8ed24a2a4a4b3c6600d0d894bc24332e.gif",
"93b31c88a4e3e4e11efbe37fbe3b447f.gif",
"965d236bbde4b2d328179ebb3a96e0de.gif",
"981ad8ee8eae1d499d331688c8e1df6a.gif",
"9a8822842e36ff125b8ffef6a3ca4f61.gif",
"9bff1f6720a90db3f727c00bf6b60614.gif",
"9ccfedc5672a10d8b60f17d93b7688c5.gif",
"a019bcb99775e5fb8ff92e53f4b2418d.gif",
"a7d7a6ecfea79b2f2a940261f23c1667.gif",
"a806d82c0e5c866a1e29c2f90dda1a2e.gif",
"a8627b600724b0c7dbfed04c9cf13394.gif",
"abe323f7b1655cbe52768e40a2ff2ed0.gif",
"b155c3ed8b6d3b943eb804dfe974af2a.gif",
"b2b5fd7a895d5df8a08ce4ff05ed68be.gif",
"b42a8944067ab3ebcd55437c087b5326.gif",
"b535e9b9e18098a7f0c23f04ec3dbe74.gif",
"b5a3bbe4d09e16921a8a103231d0b95c.gif",
"b5f052d00e989368b34b7bf62fc66f49.gif",
"b7b9fa144c48c33c4f5c0d3b09f83b50.gif",
"bb128b02cbb2e0d5707945aa6b161b9e.gif",
"c0706f8a777b03200166f469ccfcab2d.gif",
"c154f1b878a896eb48618fe7691d4916.gif",
"c45c72981a86e51cecbeb0741c9135cb.gif",
"c67f2a329855cab19e22147d68ce0cf6.gif",
"c72ecb7ae4fcd706173ab7f63e08e41d.gif",
"ca6ddc348509ea3efd69adfa8d3de5f2.gif",
"d0b07ccecd10ef584c407f38ead3dd5e.gif",
"d2e98534487dd9e61c125eda99b94fd9.gif",
"d3eb0f92db5d0fd61276c79865189876.gif",
"d40205798294c03605e97bb631577983.gif",
"d6401432570da9212c694e96cd9e21a7.gif",
"d7616be7ea35f1aa4e52ca4fba268a0d.gif",
"dc2cdc75af043fad53cafb58533cfad4.gif",
"dc7633c5927a845766cff9261359f4b0.gif",
"e0f13d60bf2b78fc38810c06400ef4e7.gif",
"e18c2706190d24ebc2ce8266d1cf8999.gif",
"e4c6347a7a2b27e62b05239c48c09591.gif",
"e6ac784be967ea011e61af5c247562db.gif",
"e7647fc08e0a18a1c4ff7ae113048719.gif",
"e909374cbca5c5ae67a8e758ad727102.gif",
"ed926966e997ee11fecb58b261c303ed.gif",
"f0a724dc8f99226461716e0d40d42f4e.gif",
"f21c0a8784ad8c1f722a72ee6c90afdb.gif",
"f3d7d5a69ebdfc1a9aa1f6d62dd3cc62.gif",
"f43d3cb1cc5b58a7ae8cc4b993059eda.gif",
"f736a03dbd20735112ef3d899cfa39f3.gif",
"f85d29eb90acc99be7ef56e70a867094.gif",
"fb0d2efb5ab583015a6bbdcf99670888.gif",
"fd7a02580b5a9b01ec872d6f4200e587.gif"
];

let table = document.getElementById("gif-table");

let i = 0;
let row = null;
gifs.forEach(gif => {
    if(i == 0) {
        row = document.createElement("tr");
    }

    let cell = document.createElement("td");
    let img = document.createElement("img");
    img.src = gif_dir + gif;
    cell.appendChild(img);
    row.appendChild(cell);

    i++
    if(i == 3) {
        table.appendChild(row);
        row = null;
        i = 0;
    }
});