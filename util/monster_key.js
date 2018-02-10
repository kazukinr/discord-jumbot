exports.getKeys = function (name) {
    const results = [];

    // アンジャナフ
    if (/アン|ジャナフ/.test(name)) {
        results.push('anjanaf');
    }
    // イビルジョー
    if (/イビル|ジョー/.test(name)) {
        results.push('jaw');
    }
    // ヴァルハザク
    if (/ヴァル|ハザク/.test(name)) {
        results.push('valhazak');
    }
    // ヴォルガノス
    if (/ヴォル|ガノス/.test(name)) {
        results.push('ganos');
    }
    // ウラガンキン
    if (/ウラガン|ガンキン|顎|アゴ|あご/.test(name)) {
        results.push('gankin');
    }
    // オドガロン
    if (/オド|ガロン/.test(name)) {
        results.push('garon');
    }
    // キリン
    if (/キリン/.test(name)) {
        results.push('kirin');
    }
    // クシャルダオラ
    if (/クシャ|ダオラ/.test(name)) {
        results.push('kusha');
    }
    // クルルヤック
    if (/クルル|ヤック/.test(name)) {
        results.push('kururuyack');
    }
    // ジュラトドス
    if (/ジュラ|トドス/.test(name)) {
        results.push('jura');
    }
    // ゼノ・ジーヴァ
    if (/ゼノ|ジーヴァ/.test(name)) {
        results.push('zeno');
    }
    // ゾラ・マグダラオス
    if (/ゾラ|マグ|ダラオス/.test(name)) {
        results.push('zora');
    }
    // ツィツィヤック
    if (/ツィ|ヤック/.test(name)) {
        results.push('twitwiyack');
    }
    // ディアブロス
    if (/ディア/.test(name)) {
        if (/亜|黒/.test(name)) {
            results.push('dia_a');
        } else {
            results.push('dia');
        }
    }
    // テオ・テスカトル
    if (/テオ|テスカトル/.test(name)) {
        results.push('teo');
    }
    // ドスギルオス
    if (/ドス|ギルオス/.test(name)) {
        results.push('giruos');
    }
    // ドスジャグラス
    if (/ドス|ジャグラス/.test(name)) {
        results.push('jagras');
    }
    // ドドガマル
    if (/ドド|ガマル/.test(name)) {
        results.push('gamaru');
    }
    // トビカガチ
    if (/トビ|カガチ/.test(name)) {
        results.push('kagachi');
    }
    // ネルギガンテ
    if (/ネル|ギガンテ/.test(name)) {
        results.push('gigante');
    }
    // パオウルムー
    if (/パオ|ウルムー|ふわ|フワ/.test(name)) {
        results.push('paourumu');
    }
    // バゼルギウス
    if (/バゼル|ギウス|爆撃|うんこ|ウンコ|💩/.test(name)) {
        results.push('bazeru');
    }
    // プケプケ
    if (/プケ/.test(name)) {
        results.push('pukepuke');
    }
    // ボルボロス
    if (/ボル|ボロス/.test(name)) {
        results.push('boros');
    }
    // ラドバルキン
    if (/ラド|バルキン/.test(name)) {
        results.push('barukin');
    }
    // リオレイア
    if (/レイア/.test(name)) {
        if (/桜|亜/.test(name)) {
            results.push('reia_a');
        } else {
            results.push('reia');
        }
    }
    //　リオレウス
    if (/レウス/.test(name)) {
        if (/青|蒼|亜/.test(name)) {
            results.push('reus_a');
        } else {
            results.push('reus');
        }
    }
    // レイギエナ
    if (/レイギ|ギエナ/.test(name)) {
        results.push('reigiena');
    }

    return results;
}
