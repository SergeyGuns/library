/*
 * Copyright 2011 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// package com.google.zxing.aztec;

// import com.google.zxing.BarcodeFormat;
import { BarcodeFormat, DecodeHintType } from '@zxing/library';
// import com.google.zxing.common.AbstractBlackBoxTestCase;
import AbstractBlackBoxSpec from '../common/AbstractBlackBox';

import { AztecCodeReader } from '@zxing/library';

/**
 * A test of Aztec barcodes under real world lighting conditions, taken with a mobile phone.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 */
export /*public final*/ class AztecBlackBox3TestCase extends AbstractBlackBoxSpec {

  public constructor() {
    
    super('src/test/resources/blackbox/aztec-3', new AztecCodeReader(), BarcodeFormat.AZTEC);
    const hints = [
    "Cp437",
    "ISO8859_1",
    "ISO8859_2",
    "ISO8859_3",
    "ISO8859_4",
    "ISO8859_5",
    "ISO8859_6",
    "ISO8859_7",
    "ISO8859_8",
    "ISO8859_9",
    "ISO8859_10",
    "ISO8859_11",
    "ISO8859_4",
    "ISO8859_5",
    "ISO8859_6",
    "ISO8859_7",
    "ISO8859_8",
    "ISO8859_9",
    "ISO8859_10",
    "ISO8859_11",
    "ISO8859_13",
    "ISO8859_14",
    "ISO8859_15",
    "ISO8859_16",
    "SJIS",
    "Cp1250",
    "Cp1251",
    "Cp1252",
    "Cp1256",
    "UnicodeBigUnmarked",
    "UTF8",
    "ASCII",
    "Big5",
    "GB18030",
    "EUC_KR",
    "KOI8_R", 
    null
  ].map( charset => new Map<DecodeHintType, any>([[DecodeHintType.CHARACTER_SET, charset]]) )
    this.addTest(5, 5, 0.0, hints);
  }

}

describe('AztecBlackBox.3', () => {
    it('testBlackBox', async () => {
        const test = new AztecBlackBox3TestCase();
        await test.testBlackBox();
    });
});
