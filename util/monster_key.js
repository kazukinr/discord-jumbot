exports.getKey = function (name) {
    // アンジャナフ
    if (/ジャナフ/.test(name)) {
        return 'anjanaf';
    }
    // イビルジョー
    if (/イビル|ジョー/.test(name)) {
        return 'jaw';
    }
    // ヴァルハザク
    if (/ヴァル|ハザク/.test(name)) {
        return 'valhazak';
    }
    // ヴォルガノス
    if (/ヴォル|ガノス/.test(name)) {
        return 'ganos';
    }
    // ウラガンキン
    if (/ウラガン|ガンキン|顎|アゴ|あご/.test(name)) {
        return 'gankin';
    }
    // オドガロン
    if (/ガロン/.test(name)) {
        return 'garon';
    }
    // キリン
    if (/キリン/.test(name)) {
        return 'kirin';
    }
    // クシャルダオラ
    if (/クシャ|ダオラ/.test(name)) {
        return 'kusha';
    }
    // クルルヤック
    if (/クルル/.test(name)) {
        return 'kururuyack';
    }
    // ジュラトドス
    if (/ジュラ|トドス/.test(name)) {
        return 'jura';
    }
    // ゼノ・ジーヴァ
    if (/ゼノ|ジーヴァ/.test(name)) {
        return 'zeno';
    }
    // ゾラ・マグダラオス
    if (/ゾラ|マグダラオス/.test(name)) {
        return 'zora';
    }
    // ツィツィヤック
    if (/ツィ/.test(name)) {
        return 'twitwiyack';
    }
    // ディアブロス
    if (/ディア/.test(name)) {
        if (/亜|黒/.test(name)) {
            return 'dia_a';
        } else {
            return 'dia';
        }
    }
    // テオ・テスカトル
    if (/テオ|テスカトル/.test(name)) {
        return 'teo';
    }
    // ドスギルオス
    if (/ドスギル|ギルオス/.test(name)) {
        return 'giruos';
    }
    // ドスジャグラス
    if (/ドスジャ|ジャグラス/.test(name)) {
        return 'jagras';
    }
    // ドドガマル
    if (/ドド|ガマル/.test(name)) {
        return 'gamaru';
    }
    // トビカガチ
    if (/トビ|カガチ/.test(name)) {
        return 'kagachi';
    }
    // ネルギガンテ
    if (/ネル|ギガンテ/.test(name)) {
        return 'gigante';
    }
    // パオウルムー
    if (/パオ|ウルムー|ふわふわ/.test(name)) {
        return 'paourumu';
    }
    // バゼルギウス
    if (/バゼル|ギウス/.test(name)) {
        return 'bazeru';
    }
    // プケプケ
    if (/プケ/.test(name)) {
        return 'pukepuke';
    }
    // ボルボロス
    if (/ボロス/.test(name)) {
        return 'boros';
    }
    // ラドバルキン
    if (/ラド|バルキン/.test(name)) {
        return 'barukin';
    }
    // リオレイア
    if (/レイア/.test(name)) {
        if (/桜|亜/.test(name)) {
            return 'reia_a';
        } else {
            return 'reia';
        }
    }
    //　リオレウス
    if (/レウス/.test(name)) {
        if (/青|蒼|亜/.test(name)) {
            return 'reus_a';
        } else {
            return 'reus';
        }
    }
    // レイギエナ
    if (/レイ|ギエナ/.test(name)) {
        return 'reigiena';
    }
}
