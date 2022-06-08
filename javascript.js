    var ScrollrevealFade = {
        origin: 'left',
        distance: '0px',//移動範囲
        scale: 1,//拡大表示（１で横スクロールが始まる）
        rotate: { x: 0, y: 0, z: 0 }, //xは縦回転、yは横回転、zは傾き（風車みたいな感じ）
        duration: 1200, //アニメーションの速度
        delay :200 //要素が表示するまでの待機時間（ディレイ）
    };
    
    sr.reveal('.scrollreveal-fade', ScrollrevealFade, 100);
        