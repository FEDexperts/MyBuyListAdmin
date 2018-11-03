
import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/list', (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.send(foods);
});

router.get('/search', (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const _foods = foods.filter(item => item.FoodName.includes(req.query.searchValue))

    res.send(_foods);
});

export const FoodController: Router = router;

const foods = [
    {
        "FoodId": 1424,
        "FoodName": " גבינה לבנה 9%"
    },
    {
        "FoodId": 468,
        "FoodName": " עליי בייבי - עלים צעירים ירוקים"
    },
    {
        "FoodId": 1286,
        "FoodName": "1 ק\"ג בשר צוואר/שריר/כתף"
    },
    {
        "FoodId": 1480,
        "FoodName": "7 up"
    },
    {
        "FoodId": 342,
        "FoodName": "אבוקדו"
    },
    {
        "FoodId": 656,
        "FoodName": "אבטיח"
    },
    {
        "FoodId": 102,
        "FoodName": "אבקת אפייה"
    },
    {
        "FoodId": 737,
        "FoodName": "אבקת אפייה כשרה לפסח"
    },
    {
        "FoodId": 2518,
        "FoodName": "אבקת בצל"
    },
    {
        "FoodId": 847,
        "FoodName": "אבקת חלב יבשה"
    },
    {
        "FoodId": 84,
        "FoodName": "אבקת חרדל"
    },
    {
        "FoodId": 932,
        "FoodName": "אבקת חרובים"
    },
    {
        "FoodId": 1506,
        "FoodName": "אבקת כוסברה"
    },
    {
        "FoodId": 2535,
        "FoodName": "אבקת מרק"
    },
    {
        "FoodId": 319,
        "FoodName": "אבקת מרק בטעם עוף"
    },
    {
        "FoodId": 148,
        "FoodName": "אבקת מרק בצל"
    },
    {
        "FoodId": 1000,
        "FoodName": "אבקת מרק דגש"
    },
    {
        "FoodId": 92,
        "FoodName": "אבקת מרק עוף"
    },
    {
        "FoodId": 147,
        "FoodName": "אבקת מרק עוף פרווה"
    },
    {
        "FoodId": 761,
        "FoodName": "אבקת מרק פטריות"
    },
    {
        "FoodId": 800,
        "FoodName": "אבקת נס קפה"
    },
    {
        "FoodId": 97,
        "FoodName": "אבקת סודה לשתייה"
    },
    {
        "FoodId": 115,
        "FoodName": "אבקת סוכר"
    },
    {
        "FoodId": 18,
        "FoodName": "אבקת קקאו"
    },
    {
        "FoodId": 940,
        "FoodName": "אבקת שום"
    },
    {
        "FoodId": 820,
        "FoodName": "אבקת שוקו"
    },
    {
        "FoodId": 1047,
        "FoodName": "אבקת שקדים"
    },
    {
        "FoodId": 1140,
        "FoodName": "אבקת תיבול צ'ילי"
    },
    {
        "FoodId": 96,
        "FoodName": "אגוז מוסקט"
    },
    {
        "FoodId": 881,
        "FoodName": "אגוז מוסקט טחון"
    },
    {
        "FoodId": 585,
        "FoodName": "אגוזי לוז"
    },
    {
        "FoodId": 1067,
        "FoodName": "אגוזי לוז (לא קלויים)"
    },
    {
        "FoodId": 1170,
        "FoodName": "אגוזי לוז (קצוצים)"
    },
    {
        "FoodId": 821,
        "FoodName": "אגוזי לוז, קלופים"
    },
    {
        "FoodId": 176,
        "FoodName": "אגוזי מלך"
    },
    {
        "FoodId": 254,
        "FoodName": "אגוזי מלך או פקאן"
    },
    {
        "FoodId": 878,
        "FoodName": "אגוזי מלך טחונים"
    },
    {
        "FoodId": 657,
        "FoodName": "אגוזי מקדמיה"
    },
    {
        "FoodId": 495,
        "FoodName": "אגוזי פקאן"
    },
    {
        "FoodId": 73,
        "FoodName": "אגוזי פקאן מסוכרים (סיני)"
    },
    {
        "FoodId": 68,
        "FoodName": "אגוזי פקאן,קצוצים דק"
    },
    {
        "FoodId": 658,
        "FoodName": "אגוזי קשיו"
    },
    {
        "FoodId": 222,
        "FoodName": "אגוזים"
    },
    {
        "FoodId": 1502,
        "FoodName": "אגוזים קלויים (מלך, פקאן או אחרים)"
    },
    {
        "FoodId": 108,
        "FoodName": "אגוזים קצוצים"
    },
    {
        "FoodId": 324,
        "FoodName": "אגס/ים"
    },
    {
        "FoodId": 375,
        "FoodName": "אוכמניות"
    },
    {
        "FoodId": 786,
        "FoodName": "אוכמניות (מחית)"
    },
    {
        "FoodId": 1340,
        "FoodName": "אוכמניות מיובשות"
    },
    {
        "FoodId": 238,
        "FoodName": "אורגנו"
    },
    {
        "FoodId": 122,
        "FoodName": "אורגנו יבש"
    },
    {
        "FoodId": 815,
        "FoodName": "אורוגולה"
    },
    {
        "FoodId": 11,
        "FoodName": "אורז"
    },
    {
        "FoodId": 1055,
        "FoodName": "אורז בסמטי"
    },
    {
        "FoodId": 1280,
        "FoodName": "אורז בסמטי מלא עם שיבולת שועל ועדשים"
    },
    {
        "FoodId": 1066,
        "FoodName": "אורז בר"
    },
    {
        "FoodId": 1151,
        "FoodName": "אורז הודי"
    },
    {
        "FoodId": 1314,
        "FoodName": "אורז הודי או פרסי"
    },
    {
        "FoodId": 1489,
        "FoodName": "אורז לסושי (דביק)"
    },
    {
        "FoodId": 1514,
        "FoodName": "אורז מבושל"
    },
    {
        "FoodId": 1236,
        "FoodName": "אורז מלא"
    },
    {
        "FoodId": 742,
        "FoodName": "אורז עגול"
    },
    {
        "FoodId": 19,
        "FoodName": "אורז פרסי"
    },
    {
        "FoodId": 2522,
        "FoodName": "אורז ריזוטו"
    },
    {
        "FoodId": 1007,
        "FoodName": "אטריות דקות למרק"
    },
    {
        "FoodId": 1318,
        "FoodName": "אטריות סיניות"
    },
    {
        "FoodId": 421,
        "FoodName": "איטריות ביצים"
    },
    {
        "FoodId": 633,
        "FoodName": "איטריות מחיטה מלאה"
    },
    {
        "FoodId": 489,
        "FoodName": "איטרית דקות"
    },
    {
        "FoodId": 385,
        "FoodName": "אינסטנט פודינג וניל"
    },
    {
        "FoodId": 507,
        "FoodName": "אינסטנט פודינג וניל בטעם פירות יער"
    },
    {
        "FoodId": 1039,
        "FoodName": "אינסטנט פודינג שוקולד"
    },
    {
        "FoodId": 634,
        "FoodName": "אנונה/ות"
    },
    {
        "FoodId": 374,
        "FoodName": "אנטריקוט"
    },
    {
        "FoodId": 869,
        "FoodName": "אנטריקוט (200 גרם ליח')"
    },
    {
        "FoodId": 491,
        "FoodName": "אננס טרי"
    },
    {
        "FoodId": 192,
        "FoodName": "אננס משומר"
    },
    {
        "FoodId": 957,
        "FoodName": "אננס משומר (מיץ)"
    },
    {
        "FoodId": 660,
        "FoodName": "אספרגוס"
    },
    {
        "FoodId": 528,
        "FoodName": "אפונה"
    },
    {
        "FoodId": 1149,
        "FoodName": "אפונה וגזר מוקפאים"
    },
    {
        "FoodId": 661,
        "FoodName": "אפונה ירוקה (קפוא)"
    },
    {
        "FoodId": 953,
        "FoodName": "אפונה מוקפאת"
    },
    {
        "FoodId": 1478,
        "FoodName": "אפונה מקופסת שימורים"
    },
    {
        "FoodId": 1183,
        "FoodName": "אפונה סינית מוקפאת"
    },
    {
        "FoodId": 1154,
        "FoodName": "אפונה עדינה מוקפאת"
    },
    {
        "FoodId": 709,
        "FoodName": "אפונה עדינה מוקפאת - סנפרוסט"
    },
    {
        "FoodId": 1157,
        "FoodName": "אפונת גינה מוקפאת"
    },
    {
        "FoodId": 186,
        "FoodName": "אפונת שלג (אפונה סינית)"
    },
    {
        "FoodId": 635,
        "FoodName": "אפרסמון/ים"
    },
    {
        "FoodId": 775,
        "FoodName": "אפרסק/ים"
    },
    {
        "FoodId": 386,
        "FoodName": "אפרסק/ים משומר/ים"
    },
    {
        "FoodId": 1403,
        "FoodName": "אקונומיקה"
    },
    {
        "FoodId": 1381,
        "FoodName": "אקטימייל"
    },
    {
        "FoodId": 66,
        "FoodName": "ארגולה"
    },
    {
        "FoodId": 164,
        "FoodName": "ארטישוק ירושלמי"
    },
    {
        "FoodId": 1474,
        "FoodName": "אריסה"
    },
    {
        "FoodId": 208,
        "FoodName": "אשל"
    },
    {
        "FoodId": 542,
        "FoodName": "באגט"
    },
    {
        "FoodId": 991,
        "FoodName": "בהרט"
    },
    {
        "FoodId": 479,
        "FoodName": "בוטנים קלויים"
    },
    {
        "FoodId": 1177,
        "FoodName": "בוטנים קלויים מומלחים"
    },
    {
        "FoodId": 443,
        "FoodName": "בולגרית \"גד\" קוביות 5%"
    },
    {
        "FoodId": 548,
        "FoodName": "בורגול"
    },
    {
        "FoodId": 931,
        "FoodName": "בורגול (גס)"
    },
    {
        "FoodId": 78,
        "FoodName": "בזיליקום (ריחן) טרי"
    },
    {
        "FoodId": 488,
        "FoodName": "בזיליקום (ריחן) יבש"
    },
    {
        "FoodId": 1218,
        "FoodName": "בזיליקום (ריחן) מוקפא"
    },
    {
        "FoodId": 217,
        "FoodName": "בטטה/ות"
    },
    {
        "FoodId": 2530,
        "FoodName": "בטטות"
    },
    {
        "FoodId": 365,
        "FoodName": "בייבי"
    },
    {
        "FoodId": 1380,
        "FoodName": "בייגלה קטנה"
    },
    {
        "FoodId": 822,
        "FoodName": "ביסלי (חטיף)"
    },
    {
        "FoodId": 520,
        "FoodName": "ביסקוויט פתי בר קטן"
    },
    {
        "FoodId": 1079,
        "FoodName": "ביסקוויטים עגולים"
    },
    {
        "FoodId": 150,
        "FoodName": "ביסקוויטים פתי-בר"
    },
    {
        "FoodId": 416,
        "FoodName": "ביסקוויטים פתי-בר בטעם שוקו"
    },
    {
        "FoodId": 17,
        "FoodName": "ביצה/ים"
    },
    {
        "FoodId": 934,
        "FoodName": "ביצה/ים (XL)"
    },
    {
        "FoodId": 925,
        "FoodName": "ביצה/ים מספר 1 (L)"
    },
    {
        "FoodId": 787,
        "FoodName": "ביצה/ים מספר 2 (M)"
    },
    {
        "FoodId": 504,
        "FoodName": "ביצה/ים מספר 3 (S)"
    },
    {
        "FoodId": 459,
        "FoodName": "בירה לבנה"
    },
    {
        "FoodId": 630,
        "FoodName": "בירה שחורה, לתת"
    },
    {
        "FoodId": 631,
        "FoodName": "במיה (טריה)"
    },
    {
        "FoodId": 632,
        "FoodName": "במיה (מוקפאת)"
    },
    {
        "FoodId": 712,
        "FoodName": "במיה מוקפאת \"סנפרוסט\""
    },
    {
        "FoodId": 566,
        "FoodName": "בננה/ות"
    },
    {
        "FoodId": 666,
        "FoodName": "בצל (פתיתים מיובשים)"
    },
    {
        "FoodId": 2528,
        "FoodName": "בצל גדול"
    },
    {
        "FoodId": 937,
        "FoodName": "בצל יבש"
    },
    {
        "FoodId": 2520,
        "FoodName": "בצל ירוק"
    },
    {
        "FoodId": 713,
        "FoodName": "בצל מוקפא \"סנפרוסט\""
    },
    {
        "FoodId": 1005,
        "FoodName": "בצל מטוגן"
    },
    {
        "FoodId": 1122,
        "FoodName": "בצל קצוץ מוקפא"
    },
    {
        "FoodId": 21,
        "FoodName": "בצל/ים"
    },
    {
        "FoodId": 1384,
        "FoodName": "בצל/ים בינוני/ם"
    },
    {
        "FoodId": 1385,
        "FoodName": "בצל/ים גדול/ים"
    },
    {
        "FoodId": 449,
        "FoodName": "בצל/ים ירוק/ים"
    },
    {
        "FoodId": 434,
        "FoodName": "בצל/ים סגול/ים"
    },
    {
        "FoodId": 1194,
        "FoodName": "בצל/ים סגול/ים קטן"
    },
    {
        "FoodId": 1386,
        "FoodName": "בצל/ים קטן/ים"
    },
    {
        "FoodId": 711,
        "FoodName": "בצלצלי פנינה"
    },
    {
        "FoodId": 412,
        "FoodName": "בצלצלי שאלוט"
    },
    {
        "FoodId": 350,
        "FoodName": "בצק עלים"
    },
    {
        "FoodId": 764,
        "FoodName": "בצק פילאס"
    },
    {
        "FoodId": 437,
        "FoodName": "בצק פריך"
    },
    {
        "FoodId": 1174,
        "FoodName": "בצק פריך מרודד למאפים מלוחים - מעדנות"
    },
    {
        "FoodId": 1173,
        "FoodName": "בצק פריך מרודד למאפים מתוקים - מעדנות"
    },
    {
        "FoodId": 230,
        "FoodName": "ברבוניות"
    },
    {
        "FoodId": 155,
        "FoodName": "ברוקולי"
    },
    {
        "FoodId": 1158,
        "FoodName": "ברוקולי מוקפא"
    },
    {
        "FoodId": 1117,
        "FoodName": "ברוקולי קפוא"
    },
    {
        "FoodId": 237,
        "FoodName": "ברנדי"
    },
    {
        "FoodId": 756,
        "FoodName": "ברנדי תפוחים (קלבוס)"
    },
    {
        "FoodId": 557,
        "FoodName": "בשר בקר"
    },
    {
        "FoodId": 34,
        "FoodName": "בשר בקר טחון (בלי שומן)"
    },
    {
        "FoodId": 667,
        "FoodName": "בשר בקר טחון (עם שומן)"
    },
    {
        "FoodId": 1139,
        "FoodName": "בשר בקר טרי"
    },
    {
        "FoodId": 898,
        "FoodName": "בשר בקר כתף"
    },
    {
        "FoodId": 1253,
        "FoodName": "בשר בקר שמן לגולאש"
    },
    {
        "FoodId": 418,
        "FoodName": "בשר טחון"
    },
    {
        "FoodId": 989,
        "FoodName": "בשר טחון (עוף ובקר או רק בקר)"
    },
    {
        "FoodId": 1030,
        "FoodName": "בשר כבש"
    },
    {
        "FoodId": 1261,
        "FoodName": "בשר כבש טחון"
    },
    {
        "FoodId": 703,
        "FoodName": "בשר עגל טחון (עם שומן)"
    },
    {
        "FoodId": 892,
        "FoodName": "בשר צוואר, מס' 2"
    },
    {
        "FoodId": 81,
        "FoodName": "גבינה בולגרית"
    },
    {
        "FoodId": 1058,
        "FoodName": "גבינה בולגרית 24%"
    },
    {
        "FoodId": 425,
        "FoodName": "גבינה לבנה"
    },
    {
        "FoodId": 596,
        "FoodName": "גבינה לבנה 0%"
    },
    {
        "FoodId": 540,
        "FoodName": "גבינה לבנה 0.5%"
    },
    {
        "FoodId": 598,
        "FoodName": "גבינה לבנה 30%"
    },
    {
        "FoodId": 40,
        "FoodName": "גבינה לבנה 5%"
    },
    {
        "FoodId": 597,
        "FoodName": "גבינה לבנה 9%"
    },
    {
        "FoodId": 312,
        "FoodName": "גבינה לבנה שמנה"
    },
    {
        "FoodId": 613,
        "FoodName": "גבינה לבנה שמנה 30%"
    },
    {
        "FoodId": 1485,
        "FoodName": "גבינה מגורדת"
    },
    {
        "FoodId": 611,
        "FoodName": "גבינה מותכת"
    },
    {
        "FoodId": 601,
        "FoodName": "גבינה מלוחה 0.5%"
    },
    {
        "FoodId": 603,
        "FoodName": "גבינה מלוחה 16%"
    },
    {
        "FoodId": 604,
        "FoodName": "גבינה מלוחה 24%"
    },
    {
        "FoodId": 843,
        "FoodName": "גבינה מלוחה 5%"
    },
    {
        "FoodId": 602,
        "FoodName": "גבינה מלוחה 9%"
    },
    {
        "FoodId": 371,
        "FoodName": "גבינה צהובה"
    },
    {
        "FoodId": 599,
        "FoodName": "גבינה צהובה 17%"
    },
    {
        "FoodId": 600,
        "FoodName": "גבינה צהובה 25%"
    },
    {
        "FoodId": 526,
        "FoodName": "גבינה צהובה מגורדת"
    },
    {
        "FoodId": 1123,
        "FoodName": "גבינה צהובה מגוררת"
    },
    {
        "FoodId": 29,
        "FoodName": "גבינה צהובה עמק"
    },
    {
        "FoodId": 1115,
        "FoodName": "גבינה צפתית"
    },
    {
        "FoodId": 435,
        "FoodName": "גבינה צפתית \"גד\""
    },
    {
        "FoodId": 541,
        "FoodName": "גבינה צפתית 0.5%"
    },
    {
        "FoodId": 609,
        "FoodName": "גבינה קשה שמנה 21%"
    },
    {
        "FoodId": 1063,
        "FoodName": "גבינת כנען"
    },
    {
        "FoodId": 1072,
        "FoodName": "גבינת לבאנה"
    },
    {
        "FoodId": 610,
        "FoodName": "גבינת מוצרלה"
    },
    {
        "FoodId": 814,
        "FoodName": "גבינת עיזים"
    },
    {
        "FoodId": 1423,
        "FoodName": "גבינת עמק (פתיתים)"
    },
    {
        "FoodId": 782,
        "FoodName": "גבינת פטה"
    },
    {
        "FoodId": 812,
        "FoodName": "גבינת פרומעז"
    },
    {
        "FoodId": 823,
        "FoodName": "גבינת פרמזן"
    },
    {
        "FoodId": 1073,
        "FoodName": "גבינת צאן"
    },
    {
        "FoodId": 612,
        "FoodName": "גבינת צ'דר"
    },
    {
        "FoodId": 605,
        "FoodName": "גבינת קוטג' 0.5%"
    },
    {
        "FoodId": 123,
        "FoodName": "גבינת קוטג' 5%"
    },
    {
        "FoodId": 606,
        "FoodName": "גבינת קוטג' 9%"
    },
    {
        "FoodId": 43,
        "FoodName": "גבינת קוטג’ 5%"
    },
    {
        "FoodId": 607,
        "FoodName": "גבינת קמבבר"
    },
    {
        "FoodId": 614,
        "FoodName": "גבינת קצ'קבל"
    },
    {
        "FoodId": 95,
        "FoodName": "גבינת קשקבל \"גד\""
    },
    {
        "FoodId": 608,
        "FoodName": "גבינת רוקפור"
    },
    {
        "FoodId": 508,
        "FoodName": "גבינת ריקוטה"
    },
    {
        "FoodId": 811,
        "FoodName": "גבינת שמנת"
    },
    {
        "FoodId": 1425,
        "FoodName": "גבינת שמנת 25% טבעי"
    },
    {
        "FoodId": 837,
        "FoodName": "גבינת שמנת 30% בטעם טבעי"
    },
    {
        "FoodId": 1235,
        "FoodName": "גבינת שמנת 5%"
    },
    {
        "FoodId": 897,
        "FoodName": "גזר גמדי"
    },
    {
        "FoodId": 1178,
        "FoodName": "גזר גמדי מוקפא"
    },
    {
        "FoodId": 31,
        "FoodName": "גזר/ים"
    },
    {
        "FoodId": 1387,
        "FoodName": "גזר/ים גדול/ים"
    },
    {
        "FoodId": 2544,
        "FoodName": "גזרים"
    },
    {
        "FoodId": 1260,
        "FoodName": "ג'חנון קפוא"
    },
    {
        "FoodId": 139,
        "FoodName": "ג'ינג'ר (זנגויל)"
    },
    {
        "FoodId": 889,
        "FoodName": "ג'ינג'ר (זנגויל) אבקה"
    },
    {
        "FoodId": 872,
        "FoodName": "ג'ינג'ר (זנגויל) מסוכר"
    },
    {
        "FoodId": 337,
        "FoodName": "ג'לטין (אבקה)"
    },
    {
        "FoodId": 338,
        "FoodName": "ג'לטין (עלה)"
    },
    {
        "FoodId": 865,
        "FoodName": "ג'לי בטעם תות"
    },
    {
        "FoodId": 1083,
        "FoodName": "גלידת וניל"
    },
    {
        "FoodId": 793,
        "FoodName": "גלידת וניל מוכנה"
    },
    {
        "FoodId": 1082,
        "FoodName": "גלידת תות"
    },
    {
        "FoodId": 959,
        "FoodName": "גלילי וופל בטעם אגוזים"
    },
    {
        "FoodId": 2534,
        "FoodName": "גמבה אדומה"
    },
    {
        "FoodId": 344,
        "FoodName": "גמבה/ות"
    },
    {
        "FoodId": 1276,
        "FoodName": "גרגירי חומוס"
    },
    {
        "FoodId": 1125,
        "FoodName": "גרגירי חומוס מבושלים מוקפאים"
    },
    {
        "FoodId": 523,
        "FoodName": "גרגרי חומוס"
    },
    {
        "FoodId": 2543,
        "FoodName": "גרגרי חומוס מבושלים"
    },
    {
        "FoodId": 1289,
        "FoodName": "גרגרי קימל"
    },
    {
        "FoodId": 824,
        "FoodName": "גרגרי תירס"
    },
    {
        "FoodId": 1162,
        "FoodName": "גרגרי תירס מוקפאים"
    },
    {
        "FoodId": 567,
        "FoodName": "גרונות הודו"
    },
    {
        "FoodId": 393,
        "FoodName": "גרידת לימון"
    },
    {
        "FoodId": 670,
        "FoodName": "גריסי פנינה"
    },
    {
        "FoodId": 233,
        "FoodName": "גרנדין/סירופ רימונים"
    },
    {
        "FoodId": 1101,
        "FoodName": "גרנולה"
    },
    {
        "FoodId": 702,
        "FoodName": "גרעיני דלעת קלופים"
    },
    {
        "FoodId": 516,
        "FoodName": "גרעיני חמניה קלופים"
    },
    {
        "FoodId": 825,
        "FoodName": "גרעיני פשתן"
    },
    {
        "FoodId": 1389,
        "FoodName": "גרעיני תירס מוקפאים"
    },
    {
        "FoodId": 854,
        "FoodName": "גרעיני תירס משומרים ( פחית גדול)"
    },
    {
        "FoodId": 485,
        "FoodName": "גרעיני תירס משומרים (פחית קטנה)"
    },
    {
        "FoodId": 27,
        "FoodName": "דבש"
    },
    {
        "FoodId": 2539,
        "FoodName": "דבש או סילאן"
    },
    {
        "FoodId": 722,
        "FoodName": "דבש מפרחי אבוקדו של 'יד מרדכי'"
    },
    {
        "FoodId": 720,
        "FoodName": "דבש מפרחי אקליפטוס של 'יד מרדכי'"
    },
    {
        "FoodId": 826,
        "FoodName": "דג (ים)"
    },
    {
        "FoodId": 637,
        "FoodName": "דג אמנון"
    },
    {
        "FoodId": 888,
        "FoodName": "דג אנטיאס (פילטים)"
    },
    {
        "FoodId": 648,
        "FoodName": "דג באס"
    },
    {
        "FoodId": 890,
        "FoodName": "דג באס (פילטים)"
    },
    {
        "FoodId": 646,
        "FoodName": "דג בורי"
    },
    {
        "FoodId": 645,
        "FoodName": "דג בקלה"
    },
    {
        "FoodId": 406,
        "FoodName": "דג דניס"
    },
    {
        "FoodId": 873,
        "FoodName": "דג דניס (פילטים)"
    },
    {
        "FoodId": 649,
        "FoodName": "דג לברק"
    },
    {
        "FoodId": 1068,
        "FoodName": "דג לברק (פילטים)"
    },
    {
        "FoodId": 647,
        "FoodName": "דג מוסר"
    },
    {
        "FoodId": 643,
        "FoodName": "דג מקרל (טרי)"
    },
    {
        "FoodId": 644,
        "FoodName": "דג מקרל (משומר)"
    },
    {
        "FoodId": 268,
        "FoodName": "דג נסיכת הנילוס"
    },
    {
        "FoodId": 741,
        "FoodName": "דג סול"
    },
    {
        "FoodId": 460,
        "FoodName": "דג סולומון טרי"
    },
    {
        "FoodId": 1284,
        "FoodName": "דג סולומון טרי (פילה)"
    },
    {
        "FoodId": 38,
        "FoodName": "דג סולומון קפוא"
    },
    {
        "FoodId": 641,
        "FoodName": "דג סלמון (מעושן)"
    },
    {
        "FoodId": 642,
        "FoodName": "דג סלמון (משומר במים)"
    },
    {
        "FoodId": 639,
        "FoodName": "דג סרדין (משומר ברוטב)"
    },
    {
        "FoodId": 638,
        "FoodName": "דג סרדין (משומר בשמן)"
    },
    {
        "FoodId": 640,
        "FoodName": "דג פורל"
    },
    {
        "FoodId": 636,
        "FoodName": "דג קרפיון"
    },
    {
        "FoodId": 891,
        "FoodName": "דג קרפיון (טחון)"
    },
    {
        "FoodId": 671,
        "FoodName": "דובדבנים (טריים)"
    },
    {
        "FoodId": 672,
        "FoodName": "דובדבנים (משומרים בסירופ קל)"
    },
    {
        "FoodId": 809,
        "FoodName": "דובדבנים (קפואים)"
    },
    {
        "FoodId": 1401,
        "FoodName": "דיאט ספרייט"
    },
    {
        "FoodId": 253,
        "FoodName": "דלעת"
    },
    {
        "FoodId": 1020,
        "FoodName": "דפי לזניה"
    },
    {
        "FoodId": 415,
        "FoodName": "דפנה"
    },
    {
        "FoodId": 846,
        "FoodName": "וודקה"
    },
    {
        "FoodId": 845,
        "FoodName": "זוקיני"
    },
    {
        "FoodId": 1200,
        "FoodName": "זיתי קלמטה"
    },
    {
        "FoodId": 1191,
        "FoodName": "זיתי תסוס"
    },
    {
        "FoodId": 240,
        "FoodName": "זיתים"
    },
    {
        "FoodId": 673,
        "FoodName": "זיתים ירוקים"
    },
    {
        "FoodId": 1160,
        "FoodName": "זיתים ירוקים מגולענים"
    },
    {
        "FoodId": 126,
        "FoodName": "זיתים פרוסים לטבעות"
    },
    {
        "FoodId": 795,
        "FoodName": "זיתים שחורים"
    },
    {
        "FoodId": 539,
        "FoodName": "זיתים שחורים ללא גלעין"
    },
    {
        "FoodId": 732,
        "FoodName": "זיתים שחורים- פרוסים לטבעות"
    },
    {
        "FoodId": 1475,
        "FoodName": "זעפרן"
    },
    {
        "FoodId": 1161,
        "FoodName": "זעתר (אבקה)"
    },
    {
        "FoodId": 1048,
        "FoodName": "זעתר טרי"
    },
    {
        "FoodId": 1377,
        "FoodName": "זרעי פשתן"
    },
    {
        "FoodId": 388,
        "FoodName": "חבושים"
    },
    {
        "FoodId": 174,
        "FoodName": "חוויג'"
    },
    {
        "FoodId": 674,
        "FoodName": "חומוס (גרגרים)"
    },
    {
        "FoodId": 1288,
        "FoodName": "חומוס (גרגרים) מוקפא/מבושל"
    },
    {
        "FoodId": 86,
        "FoodName": "חומץ"
    },
    {
        "FoodId": 198,
        "FoodName": "חומץ בלסמי"
    },
    {
        "FoodId": 724,
        "FoodName": "חומץ בן יין"
    },
    {
        "FoodId": 1285,
        "FoodName": "חומץ בן יין (לבן או אדום)"
    },
    {
        "FoodId": 2521,
        "FoodName": "חומץ בן יין אדום"
    },
    {
        "FoodId": 725,
        "FoodName": "חומץ בן יין לבן"
    },
    {
        "FoodId": 850,
        "FoodName": "חומץ טבעי"
    },
    {
        "FoodId": 405,
        "FoodName": "חומץ תפוחים"
    },
    {
        "FoodId": 710,
        "FoodName": "חזה אווז מעושן"
    },
    {
        "FoodId": 766,
        "FoodName": "חזה הודו (נקבה)"
    },
    {
        "FoodId": 727,
        "FoodName": "חזה הודו טחון"
    },
    {
        "FoodId": 339,
        "FoodName": "חזה עוף (רצועות)"
    },
    {
        "FoodId": 726,
        "FoodName": "חזה עוף טחון"
    },
    {
        "FoodId": 796,
        "FoodName": "חזה עוף שלם"
    },
    {
        "FoodId": 193,
        "FoodName": "חזה עוף, חתוך לקוביות גדולות"
    },
    {
        "FoodId": 127,
        "FoodName": "חזה עוף, חתוך לרצועות"
    },
    {
        "FoodId": 20,
        "FoodName": "חזה/ות עוף"
    },
    {
        "FoodId": 358,
        "FoodName": "חזות עוף"
    },
    {
        "FoodId": 12,
        "FoodName": "חלב"
    },
    {
        "FoodId": 615,
        "FoodName": "חלב 1%"
    },
    {
        "FoodId": 841,
        "FoodName": "חלב 3%"
    },
    {
        "FoodId": 857,
        "FoodName": "חלב מרוכז"
    },
    {
        "FoodId": 628,
        "FoodName": "חלב סויה"
    },
    {
        "FoodId": 397,
        "FoodName": "חלב קוקוס"
    },
    {
        "FoodId": 729,
        "FoodName": "חלבה"
    },
    {
        "FoodId": 771,
        "FoodName": "חלבה (שערות)"
    },
    {
        "FoodId": 196,
        "FoodName": "חלבון/ים"
    },
    {
        "FoodId": 447,
        "FoodName": "חלמון/ים"
    },
    {
        "FoodId": 8,
        "FoodName": "חמאה"
    },
    {
        "FoodId": 987,
        "FoodName": "חמאה או מרגרינה"
    },
    {
        "FoodId": 227,
        "FoodName": "חמאה למריחה"
    },
    {
        "FoodId": 818,
        "FoodName": "חמאה מלוחה"
    },
    {
        "FoodId": 398,
        "FoodName": "חמאת בוטנים"
    },
    {
        "FoodId": 773,
        "FoodName": "חמאת שקדים"
    },
    {
        "FoodId": 99,
        "FoodName": "חמוציות מיובשות (קרנברי)"
    },
    {
        "FoodId": 1504,
        "FoodName": "חמוציות מיובשות (קרנברי)-ללא סוכר"
    },
    {
        "FoodId": 1233,
        "FoodName": "חסה/ות (מה שיש)"
    },
    {
        "FoodId": 467,
        "FoodName": "חסה/ות (ערבית)"
    },
    {
        "FoodId": 1225,
        "FoodName": "חסה/ות אדומה/ות מסולסלת/ות"
    },
    {
        "FoodId": 915,
        "FoodName": "חסה/ות אמריקאית/יות"
    },
    {
        "FoodId": 1227,
        "FoodName": "חסה/ות ירוקה/ות מסולסלת/ות"
    },
    {
        "FoodId": 457,
        "FoodName": "חציל/ים"
    },
    {
        "FoodId": 1052,
        "FoodName": "חציליון/ים"
    },
    {
        "FoodId": 288,
        "FoodName": "חרדל"
    },
    {
        "FoodId": 403,
        "FoodName": "חרדל גרגרים"
    },
    {
        "FoodId": 94,
        "FoodName": "חרדל דיז'ון"
    },
    {
        "FoodId": 774,
        "FoodName": "טבסקו"
    },
    {
        "FoodId": 581,
        "FoodName": "טבעות פילה בקר"
    },
    {
        "FoodId": 1210,
        "FoodName": "טונה"
    },
    {
        "FoodId": 203,
        "FoodName": "טונה במים"
    },
    {
        "FoodId": 547,
        "FoodName": "טונה בשמן"
    },
    {
        "FoodId": 616,
        "FoodName": "טופו"
    },
    {
        "FoodId": 768,
        "FoodName": "טורטייה/יות"
    },
    {
        "FoodId": 366,
        "FoodName": "טחינה אדומה (מתכון במאגר)"
    },
    {
        "FoodId": 104,
        "FoodName": "טחינה גולמית"
    },
    {
        "FoodId": 475,
        "FoodName": "טחינה גולמית \"הנסיך\""
    },
    {
        "FoodId": 1497,
        "FoodName": "טחינה גולמית ה״מותג״ מלא"
    },
    {
        "FoodId": 1077,
        "FoodName": "טחינה גולמית משומשום מלא"
    },
    {
        "FoodId": 509,
        "FoodName": "טימין  (קורנית) טרי"
    },
    {
        "FoodId": 1040,
        "FoodName": "טימין  (קורנית) מיובש"
    },
    {
        "FoodId": 234,
        "FoodName": "טימין (קורנית)"
    },
    {
        "FoodId": 414,
        "FoodName": "טרגון"
    },
    {
        "FoodId": 71,
        "FoodName": "יוגורט"
    },
    {
        "FoodId": 175,
        "FoodName": "יוגורט (של 150 מ\"ל)"
    },
    {
        "FoodId": 411,
        "FoodName": "יוגורט (של 200 מ\"ל)"
    },
    {
        "FoodId": 619,
        "FoodName": "יוגורט 0% עם פירות"
    },
    {
        "FoodId": 617,
        "FoodName": "יוגורט 1.5%"
    },
    {
        "FoodId": 618,
        "FoodName": "יוגורט 4%"
    },
    {
        "FoodId": 827,
        "FoodName": "יוגורט טבעי"
    },
    {
        "FoodId": 1049,
        "FoodName": "יוגורט כבשים"
    },
    {
        "FoodId": 1102,
        "FoodName": "יוגורט לבן במתיקות מעודנת"
    },
    {
        "FoodId": 382,
        "FoodName": "יוגורט פירות 1.5%"
    },
    {
        "FoodId": 620,
        "FoodName": "יוגורט פירות 3%"
    },
    {
        "FoodId": 1472,
        "FoodName": "יוגורט צאן"
    },
    {
        "FoodId": 28,
        "FoodName": "יין אדום יבש"
    },
    {
        "FoodId": 549,
        "FoodName": "יין אדום מתוק"
    },
    {
        "FoodId": 46,
        "FoodName": "יין לבן"
    },
    {
        "FoodId": 87,
        "FoodName": "יין לבן יבש"
    },
    {
        "FoodId": 143,
        "FoodName": "יין מתוק"
    },
    {
        "FoodId": 621,
        "FoodName": "יין מתוק (10% כוהל)"
    },
    {
        "FoodId": 1059,
        "FoodName": "יין קידוש"
    },
    {
        "FoodId": 965,
        "FoodName": "ירקות טריים חתוכים"
    },
    {
        "FoodId": 559,
        "FoodName": "כבדי עוף"
    },
    {
        "FoodId": 440,
        "FoodName": "כוסברה"
    },
    {
        "FoodId": 784,
        "FoodName": "כוסברה (זרעים/גרגרים)"
    },
    {
        "FoodId": 1277,
        "FoodName": "כוסברה או פטרוזיליה"
    },
    {
        "FoodId": 705,
        "FoodName": "כוסברה יבשה"
    },
    {
        "FoodId": 442,
        "FoodName": "כוסמת"
    },
    {
        "FoodId": 327,
        "FoodName": "כורכום"
    },
    {
        "FoodId": 269,
        "FoodName": "כמון"
    },
    {
        "FoodId": 1053,
        "FoodName": "כמון (גרגרים)"
    },
    {
        "FoodId": 1141,
        "FoodName": "כמון או כורכום"
    },
    {
        "FoodId": 377,
        "FoodName": "כנפיי עוף/ כנפיים"
    },
    {
        "FoodId": 89,
        "FoodName": "כרוב"
    },
    {
        "FoodId": 362,
        "FoodName": "כרוב אדום/סגול"
    },
    {
        "FoodId": 42,
        "FoodName": "כרוב לבן"
    },
    {
        "FoodId": 679,
        "FoodName": "כרוב ניצנים (מוקפא)"
    },
    {
        "FoodId": 80,
        "FoodName": "כרובית"
    },
    {
        "FoodId": 1148,
        "FoodName": "כרובית מוקפאת"
    },
    {
        "FoodId": 2527,
        "FoodName": "כרישה"
    },
    {
        "FoodId": 622,
        "FoodName": "כרישה/פראסה"
    },
    {
        "FoodId": 676,
        "FoodName": "כרעי עוף/ כרעיים (ללא עור)"
    },
    {
        "FoodId": 677,
        "FoodName": "כרעי עוף/ כרעיים (עם עור)"
    },
    {
        "FoodId": 551,
        "FoodName": "כרעיים וירכיים"
    },
    {
        "FoodId": 1471,
        "FoodName": "כתושות"
    },
    {
        "FoodId": 1011,
        "FoodName": "לאושטיאן (חמציצים)"
    },
    {
        "FoodId": 1033,
        "FoodName": "לבבות ארטישוק - קפוא"
    },
    {
        "FoodId": 212,
        "FoodName": "לבבות ארטישוק - שימורים"
    },
    {
        "FoodId": 166,
        "FoodName": "לבבות ארטישוק טרי"
    },
    {
        "FoodId": 678,
        "FoodName": "לבבות עוף"
    },
    {
        "FoodId": 779,
        "FoodName": "לבן"
    },
    {
        "FoodId": 1046,
        "FoodName": "לבן 3% שומן"
    },
    {
        "FoodId": 278,
        "FoodName": "לבן או אשל"
    },
    {
        "FoodId": 623,
        "FoodName": "לוביה"
    },
    {
        "FoodId": 1313,
        "FoodName": "לחם"
    },
    {
        "FoodId": 680,
        "FoodName": "לחם אחיד"
    },
    {
        "FoodId": 1222,
        "FoodName": "לחם אחיד קל"
    },
    {
        "FoodId": 477,
        "FoodName": "לחם דגנים"
    },
    {
        "FoodId": 1044,
        "FoodName": "לחם כוסמין"
    },
    {
        "FoodId": 476,
        "FoodName": "לחם לבן"
    },
    {
        "FoodId": 368,
        "FoodName": "לחם מלא"
    },
    {
        "FoodId": 1486,
        "FoodName": "לחם פרוס"
    },
    {
        "FoodId": 1223,
        "FoodName": "לחם קל משיפון"
    },
    {
        "FoodId": 1062,
        "FoodName": "לחמניה/ות"
    },
    {
        "FoodId": 224,
        "FoodName": "לחמניה/ות מקמח מלא"
    },
    {
        "FoodId": 1245,
        "FoodName": "לימון או תפוז"
    },
    {
        "FoodId": 98,
        "FoodName": "לימון/ים"
    },
    {
        "FoodId": 568,
        "FoodName": "לימון/ים (מיץ)"
    },
    {
        "FoodId": 859,
        "FoodName": "לימון/ים (קליפה מגורדת)"
    },
    {
        "FoodId": 828,
        "FoodName": "ליצ'י טרי"
    },
    {
        "FoodId": 191,
        "FoodName": "ליצ'י משומר"
    },
    {
        "FoodId": 884,
        "FoodName": "ליקר (שאוהבים/שיש בבית)"
    },
    {
        "FoodId": 829,
        "FoodName": "ליקר אמרטו (ליקר שקדים)"
    },
    {
        "FoodId": 117,
        "FoodName": "ליקר דובדבנים"
    },
    {
        "FoodId": 426,
        "FoodName": "ליקר פרנג'ליקו"
    },
    {
        "FoodId": 839,
        "FoodName": "ליקר קלואה"
    },
    {
        "FoodId": 1392,
        "FoodName": "ליקר שוקולד"
    },
    {
        "FoodId": 554,
        "FoodName": "ליקר שרי"
    },
    {
        "FoodId": 739,
        "FoodName": "ליקר תפוזים"
    },
    {
        "FoodId": 624,
        "FoodName": "לפת"
    },
    {
        "FoodId": 1113,
        "FoodName": "לקט ירקות לאנטיפסטי מוקפא"
    },
    {
        "FoodId": 1098,
        "FoodName": "לקט ירקות לקוסקוס מוקפא"
    },
    {
        "FoodId": 1121,
        "FoodName": "לקט ירקות מעורבים מוקפא"
    },
    {
        "FoodId": 1095,
        "FoodName": "לקט ירקות מעורבים מוקפא - סנפרוסט"
    },
    {
        "FoodId": 1219,
        "FoodName": "לקט להקפצה עם נודלס מוקפא"
    },
    {
        "FoodId": 982,
        "FoodName": "לקט לחמין"
    },
    {
        "FoodId": 988,
        "FoodName": "לקט לחמין (אריזה מוכנה)"
    },
    {
        "FoodId": 1124,
        "FoodName": "לקט למרק עוף מוקפא"
    },
    {
        "FoodId": 1131,
        "FoodName": "לקט לקוסקוס מוקפא"
    },
    {
        "FoodId": 1091,
        "FoodName": "לקט מינסטרונה מהיר - סוגת"
    },
    {
        "FoodId": 1136,
        "FoodName": "לקט מינסטרונה מוקפא"
    },
    {
        "FoodId": 1376,
        "FoodName": "לקט נורמנדי"
    },
    {
        "FoodId": 1181,
        "FoodName": "לקט סיני מוקפא"
    },
    {
        "FoodId": 1164,
        "FoodName": "מזולה (ממרח)"
    },
    {
        "FoodId": 505,
        "FoodName": "מחית פרי"
    },
    {
        "FoodId": 152,
        "FoodName": "מחמאה"
    },
    {
        "FoodId": 1273,
        "FoodName": "מי ברז"
    },
    {
        "FoodId": 1320,
        "FoodName": "מי הבישול של הפולים"
    },
    {
        "FoodId": 875,
        "FoodName": "מי ורדים"
    },
    {
        "FoodId": 856,
        "FoodName": "מי סודה"
    },
    {
        "FoodId": 874,
        "FoodName": "מי קוקוס"
    },
    {
        "FoodId": 346,
        "FoodName": "מיונז"
    },
    {
        "FoodId": 1220,
        "FoodName": "מיונז דל קלוריות"
    },
    {
        "FoodId": 816,
        "FoodName": "מיורן"
    },
    {
        "FoodId": 45,
        "FoodName": "מילון"
    },
    {
        "FoodId": 100,
        "FoodName": "מים"
    },
    {
        "FoodId": 1303,
        "FoodName": "מים או חלב"
    },
    {
        "FoodId": 1473,
        "FoodName": "מים או מרק עוף צח"
    },
    {
        "FoodId": 2529,
        "FoodName": "מים או ציר ירקות"
    },
    {
        "FoodId": 201,
        "FoodName": "מים חמים"
    },
    {
        "FoodId": 481,
        "FoodName": "מים פושרים"
    },
    {
        "FoodId": 587,
        "FoodName": "מים קרים"
    },
    {
        "FoodId": 85,
        "FoodName": "מים רותחים"
    },
    {
        "FoodId": 384,
        "FoodName": "מיני מלאווח"
    },
    {
        "FoodId": 1516,
        "FoodName": "מיץ ליים"
    },
    {
        "FoodId": 210,
        "FoodName": "מיץ לימון"
    },
    {
        "FoodId": 251,
        "FoodName": "מיץ עגבניות"
    },
    {
        "FoodId": 483,
        "FoodName": "מיץ פטל"
    },
    {
        "FoodId": 220,
        "FoodName": "מיץ תפוזים"
    },
    {
        "FoodId": 1444,
        "FoodName": "מיץ תפוזים סחוט טרי"
    },
    {
        "FoodId": 870,
        "FoodName": "מיץ תפוחי עץ"
    },
    {
        "FoodId": 864,
        "FoodName": "מלוואח מוכן"
    },
    {
        "FoodId": 1483,
        "FoodName": "מלווח"
    },
    {
        "FoodId": 772,
        "FoodName": "מלונ/ים"
    },
    {
        "FoodId": 209,
        "FoodName": "מלח"
    },
    {
        "FoodId": 13,
        "FoodName": "מלח בישול"
    },
    {
        "FoodId": 514,
        "FoodName": "מלח גס"
    },
    {
        "FoodId": 93,
        "FoodName": "מלח ופלפל"
    },
    {
        "FoodId": 188,
        "FoodName": "מלח ופלפל שחור גרוס"
    },
    {
        "FoodId": 313,
        "FoodName": "מלח ופלפל שחור לפי הטעם"
    },
    {
        "FoodId": 1010,
        "FoodName": "מלח לימון"
    },
    {
        "FoodId": 941,
        "FoodName": "מלח לפי הטעם"
    },
    {
        "FoodId": 380,
        "FoodName": "מלח עשבים"
    },
    {
        "FoodId": 1184,
        "FoodName": "מלח, פלפל לבן לפי הטעם"
    },
    {
        "FoodId": 79,
        "FoodName": "מלח, פלפל שחור"
    },
    {
        "FoodId": 2545,
        "FoodName": "מללפון"
    },
    {
        "FoodId": 478,
        "FoodName": "מלפפונ/ים חמוץ/ים"
    },
    {
        "FoodId": 441,
        "FoodName": "מלפפונ/ים ירוק/ים"
    },
    {
        "FoodId": 213,
        "FoodName": "מלפפונים חמוצים"
    },
    {
        "FoodId": 1165,
        "FoodName": "מלפפונים חמוצים במלח"
    },
    {
        "FoodId": 252,
        "FoodName": "מלפפונים כבושים"
    },
    {
        "FoodId": 1462,
        "FoodName": "ממרח בטעם שוקולד-אגוזים"
    },
    {
        "FoodId": 372,
        "FoodName": "ממרח גוואקמולי"
    },
    {
        "FoodId": 284,
        "FoodName": "ממרח חלבה"
    },
    {
        "FoodId": 369,
        "FoodName": "ממרח חמאת בוטנים"
    },
    {
        "FoodId": 302,
        "FoodName": "ממרח נוטלה"
    },
    {
        "FoodId": 353,
        "FoodName": "ממרח עגבניות מיובשות"
    },
    {
        "FoodId": 1415,
        "FoodName": "ממרח עוגיות לוטוס"
    },
    {
        "FoodId": 352,
        "FoodName": "ממרח פסטו"
    },
    {
        "FoodId": 370,
        "FoodName": "ממרח שוקולד"
    },
    {
        "FoodId": 1461,
        "FoodName": "ממרח שוקולד ה\"שחר העולה\""
    },
    {
        "FoodId": 395,
        "FoodName": "ממרח שוקולד של חברת נוטלה"
    },
    {
        "FoodId": 1499,
        "FoodName": "ממרח שקדייה"
    },
    {
        "FoodId": 283,
        "FoodName": "ממרח תמרים"
    },
    {
        "FoodId": 473,
        "FoodName": "ממרח תמרים ואגוזים של \"חצר כנרת\""
    },
    {
        "FoodId": 472,
        "FoodName": "ממרח תמרים וחלבה של \"חצר כנרת\""
    },
    {
        "FoodId": 474,
        "FoodName": "ממרח תמרים ושוקולד של \"חצר כנרת\""
    },
    {
        "FoodId": 1503,
        "FoodName": "ממתיק טבעי (סילאן, מייפל או דבש)"
    },
    {
        "FoodId": 681,
        "FoodName": "מנגו"
    },
    {
        "FoodId": 688,
        "FoodName": "מנת פרי/ ירק - קיווי"
    },
    {
        "FoodId": 690,
        "FoodName": "מנת פרי/ ירק - קרמבולה"
    },
    {
        "FoodId": 691,
        "FoodName": "מנת פרי/ ירק - שזיף"
    },
    {
        "FoodId": 693,
        "FoodName": "מנת פרי/ ירק - תאנה"
    },
    {
        "FoodId": 696,
        "FoodName": "מנת פרי/ ירק - תירס (קלח)"
    },
    {
        "FoodId": 698,
        "FoodName": "מנת פרי/ ירק - תפוז"
    },
    {
        "FoodId": 699,
        "FoodName": "מנת פרי/ ירק - תפוח עץ"
    },
    {
        "FoodId": 659,
        "FoodName": "מנת פרי/ירק - אגס"
    },
    {
        "FoodId": 662,
        "FoodName": "מנת פרי/ירק - אפרסמון"
    },
    {
        "FoodId": 663,
        "FoodName": "מנת פרי/ירק - אפרשזיף נקטרין"
    },
    {
        "FoodId": 664,
        "FoodName": "מנת פרי/ירק - אשכולית"
    },
    {
        "FoodId": 665,
        "FoodName": "מנת פרי/ירק - בננה"
    },
    {
        "FoodId": 668,
        "FoodName": "מנת פרי/ירק - גויאבה"
    },
    {
        "FoodId": 669,
        "FoodName": "מנת פרי/ירק - גזר"
    },
    {
        "FoodId": 851,
        "FoodName": "מנת פרי/ירק - מלפפון"
    },
    {
        "FoodId": 686,
        "FoodName": "מנת פרי/ירק - עגבנייה"
    },
    {
        "FoodId": 687,
        "FoodName": "מנת פרי/ירק - ענבים"
    },
    {
        "FoodId": 852,
        "FoodName": "מנת פרי/ירק - קולורבי"
    },
    {
        "FoodId": 840,
        "FoodName": "מעדן חלב בטעם שוקו"
    },
    {
        "FoodId": 682,
        "FoodName": "מעדן חלב בטעם שוקו או וניל"
    },
    {
        "FoodId": 723,
        "FoodName": "מעדן מישמש 100% פרי של 'יד מרדכי'"
    },
    {
        "FoodId": 558,
        "FoodName": "מעיים ( קישקע )"
    },
    {
        "FoodId": 683,
        "FoodName": "מצה קלה"
    },
    {
        "FoodId": 738,
        "FoodName": "מצה/ות"
    },
    {
        "FoodId": 422,
        "FoodName": "מצות"
    },
    {
        "FoodId": 778,
        "FoodName": "מקל וניל (שנף)"
    },
    {
        "FoodId": 1329,
        "FoodName": "מרגרינה"
    },
    {
        "FoodId": 684,
        "FoodName": "מרגרינה (עם חלב)"
    },
    {
        "FoodId": 16,
        "FoodName": "מרגרינה לאפייה ובישול"
    },
    {
        "FoodId": 625,
        "FoodName": "מרגרינה למריחה ובישול (בתוספת מלח)"
    },
    {
        "FoodId": 627,
        "FoodName": "מרגרינה מופחת שומן"
    },
    {
        "FoodId": 571,
        "FoodName": "מרווה"
    },
    {
        "FoodId": 921,
        "FoodName": "מרק בשר (אבקה)"
    },
    {
        "FoodId": 185,
        "FoodName": "מרק עוף מוכן"
    },
    {
        "FoodId": 1054,
        "FoodName": "מרק עוף צח"
    },
    {
        "FoodId": 763,
        "FoodName": "מרשמלו"
    },
    {
        "FoodId": 1515,
        "FoodName": "משחת שיניים"
    },
    {
        "FoodId": 109,
        "FoodName": "משמש/ים"
    },
    {
        "FoodId": 205,
        "FoodName": "משמש/ים מיובש/ים"
    },
    {
        "FoodId": 455,
        "FoodName": "משמשים משומרים"
    },
    {
        "FoodId": 792,
        "FoodName": "משפר אפיה ביתית \"שמרית\""
    },
    {
        "FoodId": 328,
        "FoodName": "נבט חיטה"
    },
    {
        "FoodId": 1221,
        "FoodName": "נבטי אלפלפה"
    },
    {
        "FoodId": 1226,
        "FoodName": "נבטי אלפלפה (אספסת)"
    },
    {
        "FoodId": 1228,
        "FoodName": "נבטי ברוקולי"
    },
    {
        "FoodId": 1231,
        "FoodName": "נבטי חילבה"
    },
    {
        "FoodId": 1229,
        "FoodName": "נבטי חמניות"
    },
    {
        "FoodId": 1230,
        "FoodName": "נבטי כוסמת"
    },
    {
        "FoodId": 1232,
        "FoodName": "נבטי צנונית"
    },
    {
        "FoodId": 1224,
        "FoodName": "נבטי שעועית"
    },
    {
        "FoodId": 133,
        "FoodName": "נודלס"
    },
    {
        "FoodId": 1484,
        "FoodName": "נייר אפייה"
    },
    {
        "FoodId": 1431,
        "FoodName": "נייר טואלט"
    },
    {
        "FoodId": 466,
        "FoodName": "נענע טריה"
    },
    {
        "FoodId": 161,
        "FoodName": "נענע קצוצה (קוביות קפואות)"
    },
    {
        "FoodId": 860,
        "FoodName": "נקטר אפרסקים"
    },
    {
        "FoodId": 1032,
        "FoodName": "נקטרינה/ות"
    },
    {
        "FoodId": 1360,
        "FoodName": "נקניק קבנוס חריף"
    },
    {
        "FoodId": 1075,
        "FoodName": "נקניקיות מרגז"
    },
    {
        "FoodId": 351,
        "FoodName": "נקניקיות עוף"
    },
    {
        "FoodId": 1074,
        "FoodName": "נקניקיות פרגית 100%רכיבים טבעיים של זוגולובק"
    },
    {
        "FoodId": 527,
        "FoodName": "נשיקות"
    },
    {
        "FoodId": 83,
        "FoodName": "נתחי סלומון"
    },
    {
        "FoodId": 1491,
        "FoodName": "סבון כלים"
    },
    {
        "FoodId": 1501,
        "FoodName": "סבון רחצה נוזלי"
    },
    {
        "FoodId": 675,
        "FoodName": "סובין חיטה"
    },
    {
        "FoodId": 291,
        "FoodName": "סודה לשתיה"
    },
    {
        "FoodId": 2538,
        "FoodName": "סוכר"
    },
    {
        "FoodId": 788,
        "FoodName": "סוכר גבישי"
    },
    {
        "FoodId": 1249,
        "FoodName": "סוכר דמררה"
    },
    {
        "FoodId": 1342,
        "FoodName": "סוכר דמררה בהיר"
    },
    {
        "FoodId": 103,
        "FoodName": "סוכר וניל"
    },
    {
        "FoodId": 116,
        "FoodName": "סוכר חום"
    },
    {
        "FoodId": 329,
        "FoodName": "סוכר חום דמררה"
    },
    {
        "FoodId": 1453,
        "FoodName": "סוכר קנים"
    },
    {
        "FoodId": 10,
        "FoodName": "סוכר רגיל/לבן"
    },
    {
        "FoodId": 149,
        "FoodName": "סוכרזית"
    },
    {
        "FoodId": 492,
        "FoodName": "סוכריות צבעוניות"
    },
    {
        "FoodId": 926,
        "FoodName": "סוכריות שוקולד לקישוט"
    },
    {
        "FoodId": 322,
        "FoodName": "סולת"
    },
    {
        "FoodId": 1050,
        "FoodName": "סומק"
    },
    {
        "FoodId": 295,
        "FoodName": "סחוג"
    },
    {
        "FoodId": 1146,
        "FoodName": "סטייק פרגיות"
    },
    {
        "FoodId": 244,
        "FoodName": "סילאן"
    },
    {
        "FoodId": 465,
        "FoodName": "סילאן \"חצר כנרת\""
    },
    {
        "FoodId": 1517,
        "FoodName": "סילאן (ללא תוספת סוכר)"
    },
    {
        "FoodId": 1065,
        "FoodName": "סינטה בקר (קשור לצלייה)"
    },
    {
        "FoodId": 226,
        "FoodName": "סירופ בטעם תפוחים"
    },
    {
        "FoodId": 107,
        "FoodName": "סירופ מייפל"
    },
    {
        "FoodId": 1379,
        "FoodName": "סירופ מייפל או דבש"
    },
    {
        "FoodId": 871,
        "FoodName": "סירופ רימונים"
    },
    {
        "FoodId": 1086,
        "FoodName": "סירופ תירס"
    },
    {
        "FoodId": 762,
        "FoodName": "סירופ תירס בהיר"
    },
    {
        "FoodId": 830,
        "FoodName": "סירלוין (סינטה)"
    },
    {
        "FoodId": 743,
        "FoodName": "סלמון מעושן"
    },
    {
        "FoodId": 685,
        "FoodName": "סלק"
    },
    {
        "FoodId": 780,
        "FoodName": "סלק/ים"
    },
    {
        "FoodId": 1028,
        "FoodName": "סלק/ים (עלים)"
    },
    {
        "FoodId": 1479,
        "FoodName": "סלרי"
    },
    {
        "FoodId": 231,
        "FoodName": "סלרי (עלים)"
    },
    {
        "FoodId": 573,
        "FoodName": "סלרי (ראש/שורש)"
    },
    {
        "FoodId": 1498,
        "FoodName": "סנובון לשירותים "
    },
    {
        "FoodId": 1206,
        "FoodName": "ספגטי או פנה"
    },
    {
        "FoodId": 35,
        "FoodName": "ספגטיני"
    },
    {
        "FoodId": 348,
        "FoodName": "עגבניות מיובשות"
    },
    {
        "FoodId": 121,
        "FoodName": "עגבניות מרוסקות"
    },
    {
        "FoodId": 754,
        "FoodName": "עגבניות מרוסקות (ללא קליפה)"
    },
    {
        "FoodId": 1311,
        "FoodName": "עגבניות מרוסקות משומרות"
    },
    {
        "FoodId": 1092,
        "FoodName": "עגבניות מרוסקות עם בזיליקום ועשבי תיבול"
    },
    {
        "FoodId": 1505,
        "FoodName": "עגבניות מרוסקות-ללא סוכר"
    },
    {
        "FoodId": 381,
        "FoodName": "עגבניות קלופות חתוכות"
    },
    {
        "FoodId": 141,
        "FoodName": "עגבנייה/יות"
    },
    {
        "FoodId": 1129,
        "FoodName": "עגבנייה/יות בינוניות"
    },
    {
        "FoodId": 469,
        "FoodName": "עגבנייה/יות שרי"
    },
    {
        "FoodId": 355,
        "FoodName": "עדשים אדומות / כתומות"
    },
    {
        "FoodId": 90,
        "FoodName": "עדשים ירוקות"
    },
    {
        "FoodId": 1169,
        "FoodName": "עדשים ירוקות מבושלות מוקפאות"
    },
    {
        "FoodId": 868,
        "FoodName": "עדשים צבעוניים (מתוקים)"
    },
    {
        "FoodId": 1042,
        "FoodName": "עדשים שחורות"
    },
    {
        "FoodId": 1080,
        "FoodName": "עוגיות אוראו"
    },
    {
        "FoodId": 734,
        "FoodName": "עוגיות יין כשרות לפסח"
    },
    {
        "FoodId": 751,
        "FoodName": "עולש"
    },
    {
        "FoodId": 172,
        "FoodName": "עוף טחון"
    },
    {
        "FoodId": 453,
        "FoodName": "עוף שלם"
    },
    {
        "FoodId": 1025,
        "FoodName": "עוף שלם (מחולק, ללא עור)"
    },
    {
        "FoodId": 298,
        "FoodName": "עירית"
    },
    {
        "FoodId": 2541,
        "FoodName": "עלי בייבי"
    },
    {
        "FoodId": 1355,
        "FoodName": "עלי כוסברה"
    },
    {
        "FoodId": 326,
        "FoodName": "עלי לזניה"
    },
    {
        "FoodId": 629,
        "FoodName": "עלי סיגר"
    },
    {
        "FoodId": 438,
        "FoodName": "עלי פילו"
    },
    {
        "FoodId": 790,
        "FoodName": "עלי תאנה"
    },
    {
        "FoodId": 948,
        "FoodName": "עמילן תירס"
    },
    {
        "FoodId": 777,
        "FoodName": "ענבים"
    },
    {
        "FoodId": 169,
        "FoodName": "ענף רוזמרין"
    },
    {
        "FoodId": 1026,
        "FoodName": "עצם כבש"
    },
    {
        "FoodId": 410,
        "FoodName": "עשבי תיבול טריים לבחירה"
    },
    {
        "FoodId": 359,
        "FoodName": "עשבי תיבול יבשים"
    },
    {
        "FoodId": 1464,
        "FoodName": "עשבי תיבול יבשים/טריים לבחירה"
    },
    {
        "FoodId": 1085,
        "FoodName": "פאדג' שוקולד"
    },
    {
        "FoodId": 836,
        "FoodName": "פודינג וניל (לא אינסטנט)"
    },
    {
        "FoodId": 2525,
        "FoodName": "פודינג שוקולד"
    },
    {
        "FoodId": 171,
        "FoodName": "פול ירוק"
    },
    {
        "FoodId": 1027,
        "FoodName": "פול ירוק (טרי)"
    },
    {
        "FoodId": 1031,
        "FoodName": "פול ירוק (קפוא)"
    },
    {
        "FoodId": 1186,
        "FoodName": "פול ירוק מוקפא"
    },
    {
        "FoodId": 1192,
        "FoodName": "פול מוקפא"
    },
    {
        "FoodId": 1167,
        "FoodName": "פול קלוף מוקפא"
    },
    {
        "FoodId": 1382,
        "FoodName": "פולי סויה / אדממה מוקפאים"
    },
    {
        "FoodId": 515,
        "FoodName": "פחית בירה לבנה"
    },
    {
        "FoodId": 759,
        "FoodName": "פטוצ'יני"
    },
    {
        "FoodId": 753,
        "FoodName": "פטוצ'יני מקמח מלא"
    },
    {
        "FoodId": 765,
        "FoodName": "פטל מוקפא"
    },
    {
        "FoodId": 55,
        "FoodName": "פטרוזיליה"
    },
    {
        "FoodId": 928,
        "FoodName": "פטרוזיליה (שורש)"
    },
    {
        "FoodId": 1282,
        "FoodName": "פטרוזיליה או כוסברה"
    },
    {
        "FoodId": 1259,
        "FoodName": "פטרוזיליה או כוסברה או נענע"
    },
    {
        "FoodId": 215,
        "FoodName": "פטרוזיליה יבשה"
    },
    {
        "FoodId": 159,
        "FoodName": "פטרוזיליה קצוצה (קוביות קפואות)"
    },
    {
        "FoodId": 1460,
        "FoodName": "פטריות (מכל סוג)"
    },
    {
        "FoodId": 413,
        "FoodName": "פטריות יער"
    },
    {
        "FoodId": 1043,
        "FoodName": "פטריות פורטבלו"
    },
    {
        "FoodId": 128,
        "FoodName": "פטריות שמפיניון"
    },
    {
        "FoodId": 978,
        "FoodName": "פיטריות שמפיניון"
    },
    {
        "FoodId": 195,
        "FoodName": "פיטריות שמפיניון פרוסות"
    },
    {
        "FoodId": 462,
        "FoodName": "פילה בקר"
    },
    {
        "FoodId": 781,
        "FoodName": "פילה עוף"
    },
    {
        "FoodId": 179,
        "FoodName": "פיסטוקים קלויים קצוצים"
    },
    {
        "FoodId": 64,
        "FoodName": "פיסטוקים קלופים"
    },
    {
        "FoodId": 801,
        "FoodName": "פיצפוצי אורז"
    },
    {
        "FoodId": 67,
        "FoodName": "פירורי לחם"
    },
    {
        "FoodId": 1308,
        "FoodName": "פירורי לחם מתובלים"
    },
    {
        "FoodId": 432,
        "FoodName": "פירורי עוגיות/עוגות"
    },
    {
        "FoodId": 862,
        "FoodName": "פירות העונה"
    },
    {
        "FoodId": 582,
        "FoodName": "פירות יבשים"
    },
    {
        "FoodId": 506,
        "FoodName": "פירות יער"
    },
    {
        "FoodId": 553,
        "FoodName": "פירות יער קפואים"
    },
    {
        "FoodId": 1078,
        "FoodName": "פירות מסוכרים צבעוניים"
    },
    {
        "FoodId": 1051,
        "FoodName": "פיתה/ות"
    },
    {
        "FoodId": 2531,
        "FoodName": "פלפל"
    },
    {
        "FoodId": 1481,
        "FoodName": "פלפל אדו"
    },
    {
        "FoodId": 914,
        "FoodName": "פלפל אנגלי"
    },
    {
        "FoodId": 255,
        "FoodName": "פלפל לבן"
    },
    {
        "FoodId": 785,
        "FoodName": "פלפל לבן, גרוס"
    },
    {
        "FoodId": 349,
        "FoodName": "פלפל צ'לי"
    },
    {
        "FoodId": 767,
        "FoodName": "פלפל שאטה"
    },
    {
        "FoodId": 704,
        "FoodName": "פלפל שאטה טחון"
    },
    {
        "FoodId": 26,
        "FoodName": "פלפל שחור"
    },
    {
        "FoodId": 946,
        "FoodName": "פלפל שחור גרגרים"
    },
    {
        "FoodId": 183,
        "FoodName": "פלפל שחור, גרוס"
    },
    {
        "FoodId": 235,
        "FoodName": "פלפל/ים"
    },
    {
        "FoodId": 454,
        "FoodName": "פלפל/ים אדום/ים"
    },
    {
        "FoodId": 181,
        "FoodName": "פלפל/ים חריף/ים"
    },
    {
        "FoodId": 853,
        "FoodName": "פלפל/ים חריף/ים אדום"
    },
    {
        "FoodId": 966,
        "FoodName": "פלפל/ים חריף/ים ירוק"
    },
    {
        "FoodId": 783,
        "FoodName": "פלפל/ים חריף/ים מיובשים"
    },
    {
        "FoodId": 456,
        "FoodName": "פלפל/ים ירוק/ים"
    },
    {
        "FoodId": 556,
        "FoodName": "פלפל/ים כתום/ים"
    },
    {
        "FoodId": 486,
        "FoodName": "פלפל/ים צהוב/ים"
    },
    {
        "FoodId": 154,
        "FoodName": "פסטה"
    },
    {
        "FoodId": 120,
        "FoodName": "פסטה חלולה"
    },
    {
        "FoodId": 1213,
        "FoodName": "פסטה מסולסלת צבעונית"
    },
    {
        "FoodId": 789,
        "FoodName": "פסטה פוזילי (בצורת בורג)"
    },
    {
        "FoodId": 1088,
        "FoodName": "פסטה פוזילי או קונכיות"
    },
    {
        "FoodId": 760,
        "FoodName": "פסטה פטוצ'יני מקמח מלא"
    },
    {
        "FoodId": 202,
        "FoodName": "פסטה קונכיות"
    },
    {
        "FoodId": 1208,
        "FoodName": "פסטה קצרה"
    },
    {
        "FoodId": 1128,
        "FoodName": "פסטרמה הודו מעושנת"
    },
    {
        "FoodId": 1234,
        "FoodName": "פסטרמה הודו מעושנת- דלת שומן"
    },
    {
        "FoodId": 364,
        "FoodName": "פסטרמה חזה הודו"
    },
    {
        "FoodId": 1507,
        "FoodName": "פפריקב מתוקה"
    },
    {
        "FoodId": 1150,
        "FoodName": "פפריקה"
    },
    {
        "FoodId": 173,
        "FoodName": "פפריקה חריפה"
    },
    {
        "FoodId": 2537,
        "FoodName": "פפריקה מרוקאית מעושנת"
    },
    {
        "FoodId": 163,
        "FoodName": "פפריקה מתוקה"
    },
    {
        "FoodId": 299,
        "FoodName": "פקאן סיני"
    },
    {
        "FoodId": 2542,
        "FoodName": "פקאן קלוי"
    },
    {
        "FoodId": 111,
        "FoodName": "פרג"
    },
    {
        "FoodId": 427,
        "FoodName": "פרג גרגרים (לא טחון)"
    },
    {
        "FoodId": 277,
        "FoodName": "פרג טחון דק"
    },
    {
        "FoodId": 1041,
        "FoodName": "פרגיות"
    },
    {
        "FoodId": 2526,
        "FoodName": "פרורי לחם"
    },
    {
        "FoodId": 1490,
        "FoodName": "פריכיות"
    },
    {
        "FoodId": 1038,
        "FoodName": "פתי בר"
    },
    {
        "FoodId": 207,
        "FoodName": "פתיתי גבינה צהובה"
    },
    {
        "FoodId": 124,
        "FoodName": "פתיתי גבינה צהובה לפיצה"
    },
    {
        "FoodId": 436,
        "FoodName": "פתיתי קשקבל \"גד\""
    },
    {
        "FoodId": 714,
        "FoodName": "פתיתים"
    },
    {
        "FoodId": 2519,
        "FoodName": "צ,ילי"
    },
    {
        "FoodId": 114,
        "FoodName": "צימוקים"
    },
    {
        "FoodId": 494,
        "FoodName": "צימוקים (בהירים)"
    },
    {
        "FoodId": 493,
        "FoodName": "צימוקים (כהים)"
    },
    {
        "FoodId": 2540,
        "FoodName": "צימוקים או פיצפוצי שוקולד"
    },
    {
        "FoodId": 1179,
        "FoodName": "צימוקים בהירים"
    },
    {
        "FoodId": 1061,
        "FoodName": "צימוקים שחורים"
    },
    {
        "FoodId": 264,
        "FoodName": "ציפורן"
    },
    {
        "FoodId": 464,
        "FoodName": "ציר בקר"
    },
    {
        "FoodId": 2536,
        "FoodName": "ציר ירקות או מים"
    },
    {
        "FoodId": 1166,
        "FoodName": "ציר מרק עוף מאבקת מרק עוף"
    },
    {
        "FoodId": 943,
        "FoodName": "ציר עוף או מים"
    },
    {
        "FoodId": 863,
        "FoodName": "צ'לי  (שבבים)"
    },
    {
        "FoodId": 1468,
        "FoodName": "צלי בקר מספר 5 (נתח שלם לא פרוס)"
    },
    {
        "FoodId": 752,
        "FoodName": "צלעות טלה"
    },
    {
        "FoodId": 165,
        "FoodName": "צלעות עגל (שפונדרה)"
    },
    {
        "FoodId": 404,
        "FoodName": "צלפים"
    },
    {
        "FoodId": 347,
        "FoodName": "צנוברים"
    },
    {
        "FoodId": 470,
        "FoodName": "צנונית/יות"
    },
    {
        "FoodId": 420,
        "FoodName": "קארי"
    },
    {
        "FoodId": 1487,
        "FoodName": "קבב"
    },
    {
        "FoodId": 791,
        "FoodName": "קוביה שמרית או שקית שמרית"
    },
    {
        "FoodId": 256,
        "FoodName": "קוביות לחם קלוי"
    },
    {
        "FoodId": 728,
        "FoodName": "קוביות עגבניות מתובלן (בזיליקום, שום ואורגנו) – פריניר"
    },
    {
        "FoodId": 838,
        "FoodName": "קוביות קרח"
    },
    {
        "FoodId": 1458,
        "FoodName": "קולה"
    },
    {
        "FoodId": 1400,
        "FoodName": "קולה זירו"
    },
    {
        "FoodId": 294,
        "FoodName": "קולרבי (כרוב הקלח)"
    },
    {
        "FoodId": 482,
        "FoodName": "קוניאק"
    },
    {
        "FoodId": 2532,
        "FoodName": "קונפי שום"
    },
    {
        "FoodId": 651,
        "FoodName": "קוסקוס"
    },
    {
        "FoodId": 1097,
        "FoodName": "קוסקוס אינסטנט"
    },
    {
        "FoodId": 652,
        "FoodName": "קוסקוס מלא"
    },
    {
        "FoodId": 876,
        "FoodName": "קוקוס (שבבים עבים)"
    },
    {
        "FoodId": 396,
        "FoodName": "קוקוס טחון"
    },
    {
        "FoodId": 1022,
        "FoodName": "קורנפלור"
    },
    {
        "FoodId": 136,
        "FoodName": "קורנפלור (עמילן תירס)"
    },
    {
        "FoodId": 1056,
        "FoodName": "קורנפלקס"
    },
    {
        "FoodId": 200,
        "FoodName": "קטשופ"
    },
    {
        "FoodId": 689,
        "FoodName": "קיווי"
    },
    {
        "FoodId": 1459,
        "FoodName": "קימל"
    },
    {
        "FoodId": 157,
        "FoodName": "קינואה"
    },
    {
        "FoodId": 1171,
        "FoodName": "קינואה אדומה"
    },
    {
        "FoodId": 706,
        "FoodName": "קינואה טריו"
    },
    {
        "FoodId": 1476,
        "FoodName": "קינואה שחורה"
    },
    {
        "FoodId": 243,
        "FoodName": "קינמון"
    },
    {
        "FoodId": 110,
        "FoodName": "קינמון - מקל"
    },
    {
        "FoodId": 1250,
        "FoodName": "קינמון (אבקה)"
    },
    {
        "FoodId": 218,
        "FoodName": "קינמון (או לפי הטעם האישי)"
    },
    {
        "FoodId": 178,
        "FoodName": "קינמון טחון"
    },
    {
        "FoodId": 379,
        "FoodName": "קישוא/ים"
    },
    {
        "FoodId": 1500,
        "FoodName": "קישואים"
    },
    {
        "FoodId": 1246,
        "FoodName": "קליפות תפוז מסוכרות"
    },
    {
        "FoodId": 653,
        "FoodName": "קלמנטינה/ות"
    },
    {
        "FoodId": 923,
        "FoodName": "קמח"
    },
    {
        "FoodId": 1454,
        "FoodName": "קמח אורז"
    },
    {
        "FoodId": 1452,
        "FoodName": "קמח אורז מלא"
    },
    {
        "FoodId": 654,
        "FoodName": "קמח אחיד (חיטה טחונה 87%)"
    },
    {
        "FoodId": 1463,
        "FoodName": "קמח חומוס"
    },
    {
        "FoodId": 39,
        "FoodName": "קמח חיטה"
    },
    {
        "FoodId": 580,
        "FoodName": "קמח חרובים"
    },
    {
        "FoodId": 1069,
        "FoodName": "קמח כוסמין"
    },
    {
        "FoodId": 1466,
        "FoodName": "קמח כוסמין מלא"
    },
    {
        "FoodId": 206,
        "FoodName": "קמח מלא (חיטה טחונה 100%)"
    },
    {
        "FoodId": 153,
        "FoodName": "קמח מצה"
    },
    {
        "FoodId": 1467,
        "FoodName": "קמח קונדיטור (קמח ללא גלוטן)"
    },
    {
        "FoodId": 14,
        "FoodName": "קמח רגיל"
    },
    {
        "FoodId": 569,
        "FoodName": "קמח רגיל לבן (חיטה טחונה 70%)"
    },
    {
        "FoodId": 1465,
        "FoodName": "קמח שיפון מלא"
    },
    {
        "FoodId": 105,
        "FoodName": "קמח תופח"
    },
    {
        "FoodId": 1383,
        "FoodName": "קמח תופח או קמח רגיל"
    },
    {
        "FoodId": 219,
        "FoodName": "קמח תופח קטן (חב'=350 גרם)"
    },
    {
        "FoodId": 655,
        "FoodName": "קמח תירס"
    },
    {
        "FoodId": 736,
        "FoodName": "קמח תפוחי אדמה"
    },
    {
        "FoodId": 246,
        "FoodName": "קפה"
    },
    {
        "FoodId": 1391,
        "FoodName": "קפה מוכן"
    },
    {
        "FoodId": 1279,
        "FoodName": "קפה שחור"
    },
    {
        "FoodId": 360,
        "FoodName": "קצח"
    },
    {
        "FoodId": 1492,
        "FoodName": "קרטון חלב"
    },
    {
        "FoodId": 1508,
        "FoodName": "קרם קוקוס"
    },
    {
        "FoodId": 650,
        "FoodName": "קרמבולה"
    },
    {
        "FoodId": 1470,
        "FoodName": "ראש שום"
    },
    {
        "FoodId": 378,
        "FoodName": "רוזמרין"
    },
    {
        "FoodId": 510,
        "FoodName": "רוזמרין טרי"
    },
    {
        "FoodId": 41,
        "FoodName": "רוטב אלף איים"
    },
    {
        "FoodId": 134,
        "FoodName": "רוטב ברביקיו"
    },
    {
        "FoodId": 2517,
        "FoodName": "רוטב וורצ'סטרשייר"
    },
    {
        "FoodId": 138,
        "FoodName": "רוטב טריאקי"
    },
    {
        "FoodId": 986,
        "FoodName": "רוטב לסלט (רוטב מוכן עפ\"י בחירה)"
    },
    {
        "FoodId": 137,
        "FoodName": "רוטב סויה"
    },
    {
        "FoodId": 461,
        "FoodName": "רוטב סילאן \"גריל\" של חצר כנרת"
    },
    {
        "FoodId": 458,
        "FoodName": "רוטב סילאן \"חמוץ מתוק\" של \"חצר כנרת\""
    },
    {
        "FoodId": 471,
        "FoodName": "רוטב סילאן \"חריף מתוק\" של \"חצר כנרת\""
    },
    {
        "FoodId": 463,
        "FoodName": "רוטב סילאן \"שום צ'ילי\" של \"חצר כנרת\""
    },
    {
        "FoodId": 1306,
        "FoodName": "רוטב עגבניות"
    },
    {
        "FoodId": 769,
        "FoodName": "רוטב פיצה"
    },
    {
        "FoodId": 552,
        "FoodName": "רוטב צ'ילי"
    },
    {
        "FoodId": 135,
        "FoodName": "רוטב צ'ילי מתוק"
    },
    {
        "FoodId": 974,
        "FoodName": "רוטב שום"
    },
    {
        "FoodId": 996,
        "FoodName": "רוטב שום דבש"
    },
    {
        "FoodId": 933,
        "FoodName": "רום"
    },
    {
        "FoodId": 969,
        "FoodName": "רום\\קוניאק\\ליקר"
    },
    {
        "FoodId": 65,
        "FoodName": "רוקט"
    },
    {
        "FoodId": 266,
        "FoodName": "ריבה"
    },
    {
        "FoodId": 290,
        "FoodName": "ריבה אדומה"
    },
    {
        "FoodId": 708,
        "FoodName": "ריבה ללא סוכר"
    },
    {
        "FoodId": 935,
        "FoodName": "ריבת דובדבנים"
    },
    {
        "FoodId": 70,
        "FoodName": "ריבת חלב"
    },
    {
        "FoodId": 1070,
        "FoodName": "ריבת משמש (לייט)"
    },
    {
        "FoodId": 480,
        "FoodName": "ריבת פטל"
    },
    {
        "FoodId": 331,
        "FoodName": "ריבת תות שדה"
    },
    {
        "FoodId": 908,
        "FoodName": "ריבת תפוזים"
    },
    {
        "FoodId": 330,
        "FoodName": "ריוויון"
    },
    {
        "FoodId": 572,
        "FoodName": "רימון/ים"
    },
    {
        "FoodId": 1469,
        "FoodName": "רימון/ים (גרגרים)"
    },
    {
        "FoodId": 345,
        "FoodName": "רכז רימונים"
    },
    {
        "FoodId": 23,
        "FoodName": "רסק עגבניות"
    },
    {
        "FoodId": 146,
        "FoodName": "רסק עגבניות קטן"
    },
    {
        "FoodId": 701,
        "FoodName": "רסק תפוחי עץ"
    },
    {
        "FoodId": 1370,
        "FoodName": "רסק תפוחי עץ לא ממותק (560 גרם)"
    },
    {
        "FoodId": 387,
        "FoodName": "שבבי בוטנים"
    },
    {
        "FoodId": 970,
        "FoodName": "שבבי שוקולד\\סוכריות צבעוניות\\קוקוס"
    },
    {
        "FoodId": 1518,
        "FoodName": "שברי אגוזים/ שקדים פרוסים, זרעים שונים, טבעיים, ללא קלייה  (כמו: אגוזי מלך, פקאן, שקדים, זרעי פשתן, שומשום, זרעי דלעת, זרעי חמנייה)"
    },
    {
        "FoodId": 1325,
        "FoodName": "שווארמה הודו"
    },
    {
        "FoodId": 236,
        "FoodName": "שום"
    },
    {
        "FoodId": 817,
        "FoodName": "שום (אבקה)"
    },
    {
        "FoodId": 407,
        "FoodName": "שום גבישי"
    },
    {
        "FoodId": 216,
        "FoodName": "שום טרי"
    },
    {
        "FoodId": 2533,
        "FoodName": "שום כתוש (אפשרי מוקפא)"
    },
    {
        "FoodId": 399,
        "FoodName": "שום כתוש (מוקפא)"
    },
    {
        "FoodId": 1029,
        "FoodName": "שומן כבש"
    },
    {
        "FoodId": 409,
        "FoodName": "שומר"
    },
    {
        "FoodId": 745,
        "FoodName": "שומר (זרעים)"
    },
    {
        "FoodId": 746,
        "FoodName": "שומר (עלים)"
    },
    {
        "FoodId": 744,
        "FoodName": "שומר (ראש/פקעת)"
    },
    {
        "FoodId": 293,
        "FoodName": "שומשום"
    },
    {
        "FoodId": 1060,
        "FoodName": "שומשום מלא"
    },
    {
        "FoodId": 361,
        "FoodName": "שומשום שחור"
    },
    {
        "FoodId": 867,
        "FoodName": "שוקולד חלב"
    },
    {
        "FoodId": 1,
        "FoodName": "שוקולד לבן"
    },
    {
        "FoodId": 770,
        "FoodName": "שוקולד למריחה"
    },
    {
        "FoodId": 2524,
        "FoodName": "שוקולד מקופלת"
    },
    {
        "FoodId": 113,
        "FoodName": "שוקולד מריר"
    },
    {
        "FoodId": 417,
        "FoodName": "שוקולד מריר - פרווה"
    },
    {
        "FoodId": 390,
        "FoodName": "שוקולד צ'יפס"
    },
    {
        "FoodId": 429,
        "FoodName": "שוקולד צ'יפס לבנים"
    },
    {
        "FoodId": 280,
        "FoodName": "שוקולית"
    },
    {
        "FoodId": 452,
        "FoodName": "שוקי עוף"
    },
    {
        "FoodId": 199,
        "FoodName": "שוקי עוף ללא עור"
    },
    {
        "FoodId": 1172,
        "FoodName": "שוקיים של טלה"
    },
    {
        "FoodId": 1024,
        "FoodName": "שורש חזרת"
    },
    {
        "FoodId": 501,
        "FoodName": "שורש פטרוזיליה"
    },
    {
        "FoodId": 156,
        "FoodName": "שושקות"
    },
    {
        "FoodId": 858,
        "FoodName": "שזיף/ים אדום/ים"
    },
    {
        "FoodId": 861,
        "FoodName": "שזיף/ים ירוק/ים"
    },
    {
        "FoodId": 578,
        "FoodName": "שזיף/ים מיובש/ים"
    },
    {
        "FoodId": 692,
        "FoodName": "שזיפים משומרים בסירופ קל"
    },
    {
        "FoodId": 265,
        "FoodName": "שחור"
    },
    {
        "FoodId": 91,
        "FoodName": "שיבולת שועל (קוואקר)"
    },
    {
        "FoodId": 1511,
        "FoodName": "שיבולת שועל (קוואקר) או גרעיני דלעת (לא קלויים) או גרעיני חמנייה (לא קלויים)"
    },
    {
        "FoodId": 1388,
        "FoodName": "שיבולת שועל (קוואקר) אינסטנט"
    },
    {
        "FoodId": 132,
        "FoodName": "שיני שום"
    },
    {
        "FoodId": 832,
        "FoodName": "שלי (לבן קטיפתי)"
    },
    {
        "FoodId": 82,
        "FoodName": "שמיר טרי"
    },
    {
        "FoodId": 162,
        "FoodName": "שמיר קצוץ (קוביות קפואות)"
    },
    {
        "FoodId": 142,
        "FoodName": "שמן"
    },
    {
        "FoodId": 855,
        "FoodName": "שמן (ספריי)"
    },
    {
        "FoodId": 1258,
        "FoodName": "שמן בתרסיס"
    },
    {
        "FoodId": 32,
        "FoodName": "שמן זית"
    },
    {
        "FoodId": 721,
        "FoodName": "שמן זית כתית מעולה לתיבול מעודן של 'יד מרדכי'"
    },
    {
        "FoodId": 33,
        "FoodName": "שמן חמניות"
    },
    {
        "FoodId": 187,
        "FoodName": "שמן לטיגון"
    },
    {
        "FoodId": 37,
        "FoodName": "שמן סויה"
    },
    {
        "FoodId": 106,
        "FoodName": "שמן קנולה"
    },
    {
        "FoodId": 182,
        "FoodName": "שמן שומשום"
    },
    {
        "FoodId": 119,
        "FoodName": "שמן תירס"
    },
    {
        "FoodId": 1390,
        "FoodName": "שמנת חמוצה"
    },
    {
        "FoodId": 72,
        "FoodName": "שמנת חמוצה (200 מ\"ל)"
    },
    {
        "FoodId": 1045,
        "FoodName": "שמנת חמוצה (200 מ\"ל)- 15% שומן"
    },
    {
        "FoodId": 954,
        "FoodName": "שמנת לבישול"
    },
    {
        "FoodId": 69,
        "FoodName": "שמנת מתוקה"
    },
    {
        "FoodId": 1120,
        "FoodName": "שמנת מתוקה 250 מ\"ל"
    },
    {
        "FoodId": 1513,
        "FoodName": "שמנת מתוקה או מכל יוגורט"
    },
    {
        "FoodId": 394,
        "FoodName": "שמנת מתוקה עמידה"
    },
    {
        "FoodId": 747,
        "FoodName": "שמנת צמחית"
    },
    {
        "FoodId": 1445,
        "FoodName": "שמרים"
    },
    {
        "FoodId": 336,
        "FoodName": "שמרים טריים"
    },
    {
        "FoodId": 335,
        "FoodName": "שמרים יבשים"
    },
    {
        "FoodId": 715,
        "FoodName": "שמרית"
    },
    {
        "FoodId": 810,
        "FoodName": "שמרית - משפר אפיה - חברת \"שמרית\""
    },
    {
        "FoodId": 807,
        "FoodName": "שמרית - שקית או קוביה - חברת \"שמרית\""
    },
    {
        "FoodId": 717,
        "FoodName": "שמרית בשקית עם משפר אפייה ביתית - חברת \"שמרית\""
    },
    {
        "FoodId": 484,
        "FoodName": "שעועית אדומה \"סוגת\""
    },
    {
        "FoodId": 522,
        "FoodName": "שעועית חומה"
    },
    {
        "FoodId": 563,
        "FoodName": "שעועית ירוקה"
    },
    {
        "FoodId": 1176,
        "FoodName": "שעועית ירוקה שלמה מוקפאת"
    },
    {
        "FoodId": 521,
        "FoodName": "שעועית לבנה"
    },
    {
        "FoodId": 400,
        "FoodName": "שעועית לבנה ברוטב עגבניות"
    },
    {
        "FoodId": 1134,
        "FoodName": "שעועית לבנה מבושלת מוקפאת"
    },
    {
        "FoodId": 930,
        "FoodName": "שעועית לבנה משומרת"
    },
    {
        "FoodId": 1145,
        "FoodName": "שעועית עדינה שלמה מוקפאת"
    },
    {
        "FoodId": 998,
        "FoodName": "שעועית צהובה (קפוא)"
    },
    {
        "FoodId": 1488,
        "FoodName": "שק תפוחי אדמה"
    },
    {
        "FoodId": 1482,
        "FoodName": "שקדי מרק"
    },
    {
        "FoodId": 576,
        "FoodName": "שקדים"
    },
    {
        "FoodId": 2523,
        "FoodName": "שקדים חצויים, קלויים "
    },
    {
        "FoodId": 334,
        "FoodName": "שקדים טחונים לאבקה"
    },
    {
        "FoodId": 733,
        "FoodName": "שקדים מולבנים ארוכים"
    },
    {
        "FoodId": 833,
        "FoodName": "שקדים מולבנים טחונים"
    },
    {
        "FoodId": 907,
        "FoodName": "שקדים מולבנים פרוסים"
    },
    {
        "FoodId": 757,
        "FoodName": "שקדים מולבנים קצוצים"
    },
    {
        "FoodId": 584,
        "FoodName": "שקדים מולבנים שלמים"
    },
    {
        "FoodId": 177,
        "FoodName": "שקדים קלופים"
    },
    {
        "FoodId": 194,
        "FoodName": "שקדים קלופים חצויים"
    },
    {
        "FoodId": 332,
        "FoodName": "שקדים קצוצים"
    },
    {
        "FoodId": 794,
        "FoodName": "שקית או קובית \"שמרית\""
    },
    {
        "FoodId": 1427,
        "FoodName": "שרוול  עוגיות פתי בר שלמים"
    },
    {
        "FoodId": 1428,
        "FoodName": "שרוול עוגיות פתי בר טחונים"
    },
    {
        "FoodId": 719,
        "FoodName": "תאנים טריות"
    },
    {
        "FoodId": 694,
        "FoodName": "תאנים מיובשות"
    },
    {
        "FoodId": 550,
        "FoodName": "תבלין גריל"
    },
    {
        "FoodId": 976,
        "FoodName": "תבלין גריל עוף או פפריקה"
    },
    {
        "FoodId": 534,
        "FoodName": "תבלין חוויג'"
    },
    {
        "FoodId": 1244,
        "FoodName": "תה ארל גריי"
    },
    {
        "FoodId": 917,
        "FoodName": "תה צאי מסאלה"
    },
    {
        "FoodId": 695,
        "FoodName": "תורמוס"
    },
    {
        "FoodId": 118,
        "FoodName": "תותים"
    },
    {
        "FoodId": 1084,
        "FoodName": "תותים מסוכרים"
    },
    {
        "FoodId": 1142,
        "FoodName": "תחתיות ארטישוק מוקפאות"
    },
    {
        "FoodId": 1064,
        "FoodName": "תחתיות ארטישוק קפואות"
    },
    {
        "FoodId": 994,
        "FoodName": "תיבולית"
    },
    {
        "FoodId": 992,
        "FoodName": "תיבולית 'קארי הודי'"
    },
    {
        "FoodId": 939,
        "FoodName": "תיבולית 'שום ופטרוזיליה'"
    },
    {
        "FoodId": 168,
        "FoodName": "תימין"
    },
    {
        "FoodId": 750,
        "FoodName": "תירס גמדי"
    },
    {
        "FoodId": 419,
        "FoodName": "תירס קפוא"
    },
    {
        "FoodId": 101,
        "FoodName": "תמצית וניל"
    },
    {
        "FoodId": 144,
        "FoodName": "תמצית רום"
    },
    {
        "FoodId": 981,
        "FoodName": "תמר מג'הול"
    },
    {
        "FoodId": 575,
        "FoodName": "תמרים"
    },
    {
        "FoodId": 697,
        "FoodName": "תמרים (לחים)"
    },
    {
        "FoodId": 1512,
        "FoodName": "תמרים בוואקום (ללא חומרים משמרים וללא סוכר)"
    },
    {
        "FoodId": 586,
        "FoodName": "תמרים מגולענים"
    },
    {
        "FoodId": 707,
        "FoodName": "תמרים מיובשים"
    },
    {
        "FoodId": 1283,
        "FoodName": "תערובת פירות יבשים"
    },
    {
        "FoodId": 363,
        "FoodName": "תפוז/ים"
    },
    {
        "FoodId": 1305,
        "FoodName": "תפוח או אגס"
    },
    {
        "FoodId": 241,
        "FoodName": "תפוח עץ גראנד סמיט"
    },
    {
        "FoodId": 444,
        "FoodName": "תפוח/י אדמה"
    },
    {
        "FoodId": 239,
        "FoodName": "תפוח/י אדמה בייבי"
    },
    {
        "FoodId": 446,
        "FoodName": "תפוח/י עץ"
    },
    {
        "FoodId": 451,
        "FoodName": "תפוח/י עץ גראנד סמיט"
    },
    {
        "FoodId": 700,
        "FoodName": "תפוח/ים מיובשים"
    },
    {
        "FoodId": 1168,
        "FoodName": "תפוחי אדמה מוקפאים"
    },
    {
        "FoodId": 1175,
        "FoodName": "תפרחות ברוקולי מוקפאות"
    },
    {
        "FoodId": 74,
        "FoodName": "תרד טרי"
    },
    {
        "FoodId": 842,
        "FoodName": "תרד טרי (בייבי)"
    },
    {
        "FoodId": 448,
        "FoodName": "תרד מוקפא"
    },
    {
        "FoodId": 731,
        "FoodName": "תרכיז תפוזים"
    },
    {
        "FoodId": 1252,
        "FoodName": "תרכיז תפוחים טבעי"
    },
    {
        "FoodId": 170,
        "FoodName": "תרמיל הל"
    },
    {
        "FoodId": 758,
        "FoodName": "תרמיל וניל"
    }
];