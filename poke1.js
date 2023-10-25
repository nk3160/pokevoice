var button = document.getElementById('button'),
    audioArr = [
        'voice/001.wav',
        'voice/002.wav',
        'voice/003.wav',
        'voice/004.wav',
        'voice/005.wav',
        'voice/006.wav',
        'voice/007.wav',
        'voice/008.wav',
        'voice/009.wav',
        'voice/010.wav',
        'voice/011.wav',
        'voice/012.wav',
        'voice/013.wav',
        'voice/014.wav',
        'voice/015.wav',
        'voice/016.wav',
        'voice/017.wav',
        'voice/018.wav',
        'voice/019.wav',
        'voice/020.wav',
        'voice/021.wav',
        'voice/022.wav',
        'voice/023.wav',
        'voice/024.wav',
        'voice/025.wav',
        'voice/026.wav',
        'voice/027.wav',
        'voice/028.wav',
        'voice/029.wav',
        'voice/030.wav',
        'voice/031.wav',
        'voice/032.wav',
        'voice/033.wav',
        'voice/034.wav',
        'voice/035.wav',
        'voice/036.wav',
        'voice/037.wav',
        'voice/038.wav',
        'voice/039.wav',
        'voice/040.wav',
        'voice/041.wav',
        'voice/042.wav',
        'voice/043.wav',
        'voice/044.wav',
        'voice/045.wav',
        'voice/046.wav',
        'voice/047.wav',
        'voice/048.wav',
        'voice/049.wav',
        'voice/050.wav',
        'voice/051.wav',
        'voice/052.wav',
        'voice/053.wav',
        'voice/054.wav',
        'voice/055.wav',
        'voice/056.wav',
        'voice/057.wav',
        'voice/058.wav',
        'voice/059.wav',
        'voice/060.wav',
        'voice/061.wav',
        'voice/062.wav',
        'voice/063.wav',
        'voice/064.wav',
        'voice/065.wav',
        'voice/066.wav',
        'voice/067.wav',
        'voice/068.wav',
        'voice/069.wav',
        'voice/070.wav',
        'voice/071.wav',
        'voice/072.wav',
        'voice/073.wav',
        'voice/074.wav',
        'voice/075.wav',
        'voice/076.wav',
        'voice/077.wav',
        'voice/078.wav',
        'voice/079.wav',
        'voice/080.wav',
        'voice/081.wav',
        'voice/082.wav',
        'voice/083.wav',
        'voice/084.wav',
        'voice/085.wav',
        'voice/086.wav',
        'voice/087.wav',
        'voice/088.wav',
        'voice/089.wav',
        'voice/090.wav',
        'voice/091.wav',
        'voice/092.wav',
        'voice/093.wav',
        'voice/094.wav',
        'voice/095.wav',
        'voice/096.wav',
        'voice/097.wav',
        'voice/098.wav',
        'voice/099.wav',
        'voice/100.wav',
        'voice/101.wav',
        'voice/102.wav',
        'voice/103.wav',
        'voice/104.wav',
        'voice/105.wav',
        'voice/106.wav',
        'voice/107.wav',
        'voice/108.wav',
        'voice/109.wav',
        'voice/110.wav',
        'voice/111.wav',
        'voice/112.wav',
        'voice/113.wav',
        'voice/114.wav',
        'voice/115.wav',
        'voice/116.wav',
        'voice/117.wav',
        'voice/118.wav',
        'voice/119.wav',
        'voice/120.wav',
        'voice/121.wav',
        'voice/122.wav',
        'voice/123.wav',
        'voice/124.wav',
        'voice/125.wav',
        'voice/126.wav',
        'voice/127.wav',
        'voice/128.wav',
        'voice/129.wav',
        'voice/130.wav',
        'voice/131.wav',
        'voice/132.wav',
        'voice/133.wav',
        'voice/134.wav',
        'voice/135.wav',
        'voice/136.wav',
        'voice/137.wav',
        'voice/138.wav',
        'voice/139.wav',
        'voice/140.wav',
        'voice/141.wav',
        'voice/142.wav',
        'voice/143.wav',
        'voice/144.wav',
        'voice/145.wav',
        'voice/146.wav',
        'voice/147.wav',
        'voice/148.wav',
        'voice/149.wav',
        'voice/150.wav',
        'voice/151.wav'
    ];

    imageArr = [
        'image/001.png',
        'image/002.png',
        'image/003.png',
        'image/004.png',
        'image/005.png',
        'image/006.png',
        'image/007.png',
        'image/008.png',
        'image/009.png',
        'image/010.png',
        'image/011.png',
        'image/012.png',
        'image/013.png',
        'image/014.png',
        'image/015.png',
        'image/016.png',
        'image/017.png',
        'image/018.png',
        'image/019.png',
        'image/020.png',
        'image/021.png',
        'image/022.png',
        'image/023.png',
        'image/024.png',
        'image/025.png',
        'image/026.png',
        'image/027.png',
        'image/028.png',
        'image/029.png',
        'image/030.png',
        'image/031.png',
        'image/032.png',
        'image/033.png',
        'image/034.png',
        'image/035.png',
        'image/036.png',
        'image/037.png',
        'image/038.png',
        'image/039.png',
        'image/040.png',
        'image/041.png',
        'image/042.png',
        'image/043.png',
        'image/044.png',
        'image/045.png',
        'image/046.png',
        'image/047.png',
        'image/048.png',
        'image/049.png',
        'image/050.png',
        'image/051.png',
        'image/052.png',
        'image/053.png',
        'image/054.png',
        'image/055.png',
        'image/056.png',
        'image/057.png',
        'image/058.png',
        'image/059.png',
        'image/060.png',
        'image/061.png',
        'image/062.png',
        'image/063.png',
        'image/064.png',
        'image/065.png',
        'image/066.png',
        'image/067.png',
        'image/068.png',
        'image/069.png',
        'image/070.png',
        'image/071.png',
        'image/072.png',
        'image/073.png',
        'image/074.png',
        'image/075.png',
        'image/076.png',
        'image/077.png',
        'image/078.png',
        'image/079.png',
        'image/080.png',
        'image/081.png',
        'image/082.png',
        'image/083.png',
        'image/084.png',
        'image/085.png',
        'image/086.png',
        'image/087.png',
        'image/088.png',
        'image/089.png',
        'image/090.png',
        'image/091.png',
        'image/092.png',
        'image/093.png',
        'image/094.png',
        'image/095.png',
        'image/096.png',
        'image/097.png',
        'image/098.png',
        'image/099.png',
        'image/100.png',
        'image/101.png',
        'image/102.png',
        'image/103.png',
        'image/104.png',
        'image/105.png',
        'image/106.png',
        'image/107.png',
        'image/108.png',
        'image/109.png',
        'image/110.png',
        'image/111.png',
        'image/112.png',
        'image/113.png',
        'image/114.png',
        'image/115.png',
        'image/116.png',
        'image/117.png',
        'image/118.png',
        'image/119.png',
        'image/120.png',
        'image/121.png',
        'image/122.png',
        'image/123.png',
        'image/124.png',
        'image/125.png',
        'image/126.png',
        'image/127.png',
        'image/128.png',
        'image/129.png',
        'image/130.png',
        'image/131.png',
        'image/132.png',
        'image/133.png',
        'image/134.png',
        'image/135.png',
        'image/136.png',
        'image/137.png',
        'image/138.png',
        'image/139.png',
        'image/140.png',
        'image/141.png',
        'image/142.png',
        'image/143.png',
        'image/144.png',
        'image/145.png',
        'image/146.png',
        'image/147.png',
        'image/148.png',
        'image/149.png',
        'image/150.png',
        'image/151.png'
    ];

    nameArr = [
        '001 フシギダネ',
        '002 フシギソウ',
        '003 フシギバナ',
        '004 ヒトカゲ',
        '005 リザード',
        '006 リザードン',
        '007 ゼニガメ',
        '008 カメール',
        '009 カメックス',
        '010 キャタピー',
        '011 トランセル',
        '012 バタフリー',
        '013 ビードル',
        '014 コクーン',
        '015 スピアー',
        '016 ポッポ',
        '017 ピジョン',
        '018 ピジョット',
        '019 コラッタ',
        '020 ラッタ',
        '021 オニスズメ',
        '022 オニドリル',
        '023 アーボ',
        '024 アーボック',
        '025 ピカチュウ',
        '026 ライチュウ',
        '027 サンド',
        '028 サンドパン',
        '029 ニドラン♀',
        '030 ニドリーナ',
        '031 ニドクイン',
        '032 ニドラン♂',
        '033 ニドリーノ',
        '034 ニドキング',
        '035 ピッピ',
        '036 ピクシー',
        '037 ロコン',
        '038 キュウコン',
        '039 プリン',
        '040 プクリン',
        '041 ズバット',
        '042 ゴルバット',
        '043 ナゾノクサ',
        '044 クサイハナ',
        '045 ラフレシア',
        '046 パラス',
        '047 パラセクト',
        '048 コンパン',
        '049 モルフォン',
        '050 ディグダ',
        '051 ダグトリオ',
        '052 ニャース',
        '053 ペルシアン',
        '054 コダック',
        '055 ゴルダック',
        '056 マンキー',
        '057 オコリザル',
        '058 ガーディ',
        '059 ウインディ',
        '060 ニョロモ',
        '061 ニョロゾ',
        '062 ニョロボン',
        '063 ケーシィ',
        '064 ユンゲラー',
        '065 フーディン',
        '066 ワンリキー',
        '067 ゴーリキー',
        '068 カイリキー',
        '069 マダツボミ',
        '070 ウツドン',
        '071 ウツボット',
        '072 メノクラゲ',
        '073 ドククラゲ',
        '074 イシツブテ',
        '075 ゴローン',
        '076 ゴローニャ',
        '077 ポニータ',
        '078 ギャロップ',
        '079 ヤドン',
        '080 ヤドラン',
        '081 コイル',
        '082 レアコイル',
        '083 カモネギ',
        '084 ドードー',
        '085 ドードリオ',
        '086 パウワウ',
        '087 ジュゴン',
        '088 ベトベター',
        '089 ベトベトン',
        '090 シェルダー',
        '091 パルシェン',
        '092 ゴース',
        '093 ゴースト',
        '094 ゲンガー',
        '095 イワーク',
        '096 スリープ',
        '097 スリーパー',
        '098 クラブ',
        '099 キングラー',
        '100 ビリリダマ',
        '101 マルマイン',
        '102 タマタマ',
        '103 ナッシー',
        '104 カラカラ',
        '105 ガラガラ',
        '106 サワムラー',
        '107 エビワラー',
        '108 ベロリンガ',
        '109 ドガース',
        '110 マタドガス',
        '111 サイホーン',
        '112 サイドン',
        '113 ラッキー',
        '114 モンジャラ',
        '115 ガルーラ',
        '116 タッツー',
        '117 シードラ',
        '118 トサキント',
        '119 アズマオウ',
        '120 ヒトデマン',
        '121 スターミー',
        '122 バリヤード',
        '123 ストライク',
        '124 ルージュラ',
        '125 エレブー',
        '126 ブーバー',
        '127 カイロス',
        '128 ケンタロス',
        '129 コイキング',
        '130 ギャラドス',
        '131 ラプラス',
        '132 メタモン',
        '133 イーブイ',
        '134 シャワーズ',
        '135 サンダース',
        '136 ブースター',
        '137 ポリゴン',
        '138 オムナイト',
        '139 オムスター',
        '140 カブト',
        '141 カブトプス',
        '142 プテラ',
        '143 カビゴン',
        '144 フリーザー',
        '145 サンダー',
        '146 ファイヤー',
        '147 ミニリュウ',
        '148 ハクリュー',
        '149 カイリュー',
        '150 ミュウツー',
        '151 ミュウ'
    ];

    var r = Math.random();
    var audio = new Audio();
    
    var playPoke = function() {
    
        document.getElementById("area").innerText = "このポケモン、だ～れだ？";
        document.getElementById("imageArea").src = "ball.png";
    
        num = Math.floor(r * audioArr.length);
    
        if (num == audioArr.length) {
            num = audioArr.length - 1;
        }
    
        //鳴き声選出
        audio.src = audioArr[num];
        audio.play();
    }
    
    var AnswerPoke = function() {
    
        if (!alert('OK で答えを表示します。')) {
            imageArea.src = imageArr[Math.floor(r * audioArr.length)];
            document.getElementById("area").innerText = "答えは... " + "\u00a0" + " No." + nameArr[Math.floor(r * nameArr.length)] + "\u00a0" + "\u00a0" + " でした～";

            audio.src = audioArr[num];
            audio.play();
        }
        r = Math.random();
    }