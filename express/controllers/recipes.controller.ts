
import { Router, Request, Response } from 'express';
import { pagerController } from './pager.controller';

const router: Router = Router();

router.get('/list', (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    console.log('getting list of recipes...', new Date());

    let _recipes = pagerController(recipes, req.query.pageIndex, req.query.pageSize);

    res.send({
        metadata: {
            totalItems: recipes.length,
        },
        data: _recipes
    });
});

export const RecipesController: Router = router;

const recipes = [
    {
        "RecipeId": 246,
        "RecipeName": "\"חרוסט\" לחנוכה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 327,
        "RecipeName": "אוזני המן - בצק פריך ושמנת במילוי ריבת חלב וחלבה - 30 יח'",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 146,
        "RecipeName": "אוזני המן במילוי חלבה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 147,
        "RecipeName": "אוזני המן במילוי פרג",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 493,
        "RecipeName": "אורז אחד אחד - בסיס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 887,
        "RecipeName": "אורז עם אטריות ביצים ועדשים שחורות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1031,
        "RecipeName": "אורז עם זעפרן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 14,
        "RecipeName": "אורז עם עגבניות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2081,
        "RecipeName": "אורז עם פתיתים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 962,
        "RecipeName": "אורז, עדשים אדומים והמון שום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 257,
        "RecipeName": "אננס מטוגן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 316,
        "RecipeName": "אפונה עדינה ובצלצלי פנינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 463,
        "RecipeName": "בואיקוס עגבניות מיובשות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 462,
        "RecipeName": "בואיקוס פסטו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 569,
        "RecipeName": "בטטות אפויות ברוטב עשבי תיבול בתוספת צלפים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1028,
        "RecipeName": "בטטות צלויות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 317,
        "RecipeName": "במיה בנוסח ים תיכוני",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 300,
        "RecipeName": "בצק לפיצה ולפוקצ'ה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1012,
        "RecipeName": "בצק פריך ללא גלוטן (חלבי)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 860,
        "RecipeName": "בצק פריך מלוח",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 859,
        "RecipeName": "בצק פריך מתוק - 800 גרם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 441,
        "RecipeName": "בצק שקם - שלי, קמח, מרגרינה/מחמאה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 533,
        "RecipeName": "בצק שקם - שלי, קמח, מרגרינה/מחמאה במילוי ממרח תמרים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 534,
        "RecipeName": "בצק שקם - שמנת, קמח, מרגרינה/מחמאה במילוי תמרים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 888,
        "RecipeName": "בשר עם גרגרי חומוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 312,
        "RecipeName": "גבאץ' (של כל הירקות  שיש בבית)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 719,
        "RecipeName": "גבינת שמנת תוצרת בית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 753,
        "RecipeName": "גזר מגורר במיץ תפוזים, צימוקים ותמרים.",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 573,
        "RecipeName": "גלידת דבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1017,
        "RecipeName": "גלידת דבש ביתית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1045,
        "RecipeName": "גלידת חלב ביתית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 941,
        "RecipeName": "גלילת שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2090,
        "RecipeName": "גרגרי חומוס ועדשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 865,
        "RecipeName": "גרנולה ביתית - גרסה בריאותית יותר - 600 גרם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 584,
        "RecipeName": "גרנולה ביתית - גרסה קלה - 600 גרם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1058,
        "RecipeName": "גרנולה ללא שמן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 10,
        "RecipeName": "דג בורי בתנור עם זיתים ולימון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 472,
        "RecipeName": "דג סלמון בבצק פילו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 884,
        "RecipeName": "דג סלמון עם בייבי תרד במעטפת בצק פילאס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2087,
        "RecipeName": "דג סלמון עם רוטב בזיליקום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 243,
        "RecipeName": "דונאטס חלבי - 20 יחידות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 239,
        "RecipeName": "דיפ טחינה מתקתק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 238,
        "RecipeName": "דיפ טחינה מתקתק עם ירקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 599,
        "RecipeName": "המבורגר בורגול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 421,
        "RecipeName": "המבורגר עדשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 715,
        "RecipeName": "המבורגר/קציצות עדשים שחורות ופטריות פורטובלו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 716,
        "RecipeName": "המבורגר/קציצות עדשים שחורות ופטריות שמפנייון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 247,
        "RecipeName": "זיגוג לבן לסופגניות ולדונאטס (מתאים ל-20 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 244,
        "RecipeName": "זיגוג סוכר ורוד לדונאטס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 248,
        "RecipeName": "זיגוג שוקולד לסופגניות ולדונאטס (מתאים ל-20 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1006,
        "RecipeName": "חביתת חומוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 762,
        "RecipeName": "חומוס ביתי - 250 גרם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 656,
        "RecipeName": "חזה עוף בג'ינג'ר וטריאקי - גרסה עם פטרוזיליה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1003,
        "RecipeName": "חזה עוף במשרה פיקנטי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 15,
        "RecipeName": "חזה עוף בציפוי פריך בטעם פלאפל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 79,
        "RecipeName": "חזה עוף ונודלס בירקות ורוטב צ'לי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 97,
        "RecipeName": "חזה עוף חמוץ-מתוק עם ליצ'י ואננס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 93,
        "RecipeName": "חזה עוף מוקפץ בפלפלים מתוקים וחריפים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 95,
        "RecipeName": "חזה עוף מוקפץ עם אפונת שלג ובצל ירוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 96,
        "RecipeName": "חזה עוף מוקפץ עם ברוקולי וקשיו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 98,
        "RecipeName": "חזה עוף מוקפץ עם שקדים מטוגנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 94,
        "RecipeName": "חזה עוף עם חצילים ופלפל חריף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 758,
        "RecipeName": "חזה עוף עם פתיתים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2088,
        "RecipeName": "חטיף גרנולה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 628,
        "RecipeName": "חטיף שוקולד עם גליליות אגוזים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 464,
        "RecipeName": "חמאת בזיליקום ושום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 868,
        "RecipeName": "חמין  / טשולנט עם עוף וג'חנון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 748,
        "RecipeName": "חציל, גבינות ועגבניות בקערה/כוס אישית אחת.",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 724,
        "RecipeName": "חצילים וקישואים ממולאים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1014,
        "RecipeName": "טארט תפוחים וקינמון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 757,
        "RecipeName": "טורטייה בסלסה אבוקדו ונקניקיות מרגז פיקנטיות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 756,
        "RecipeName": "טורטייה מוכנה/ קנויה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 749,
        "RecipeName": "טורטייה פיצה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 157,
        "RecipeName": "טחינה אדומה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1002,
        "RecipeName": "יוגורט עם זרעי פשתן, אגוזי מלך ושקדים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 12,
        "RecipeName": "כבדי עוף ביין אדום ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1043,
        "RecipeName": "כדורי אנרגייה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 886,
        "RecipeName": "כדורי בשר בתוך רוטב סלק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 595,
        "RecipeName": "כדורי חלבה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 603,
        "RecipeName": "כדורי חמאת בוטנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1038,
        "RecipeName": "כדורי פירות יבשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 950,
        "RecipeName": "כדורי ריבת חלב",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 601,
        "RecipeName": "כדורי שוקולד ודובדבנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 85,
        "RecipeName": "כדורי שוקולד של דורין - 30 כדורים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 598,
        "RecipeName": "כדורי שקדים עם שוקולד לבן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1035,
        "RecipeName": "כמו כבד...",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 511,
        "RecipeName": "כנפיים ברוטב רימונים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 889,
        "RecipeName": "כרובית בשמן זית ולימון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 869,
        "RecipeName": "כרובית בתנור",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 722,
        "RecipeName": "כרובית מטוגנת במטבל של טחינה ויוגורט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 746,
        "RecipeName": "כרובית שלמה אפויה בתנור",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 733,
        "RecipeName": "כריך (לחם) עם גבינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 734,
        "RecipeName": "כריך (לחמניה) עם גבינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 841,
        "RecipeName": "כריך אבוקדו קל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 174,
        "RecipeName": "כריך אומלט (חביתה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 839,
        "RecipeName": "כריך ארגולה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 175,
        "RecipeName": "כריך גבינה צהובה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 170,
        "RecipeName": "כריך גוואקמולי וביצה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 236,
        "RecipeName": "כריך חביתה עם טחינה לבנה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 172,
        "RecipeName": "כריך חמאת בוטנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 840,
        "RecipeName": "כריך טונה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 237,
        "RecipeName": "כריך טחינה בוטנים עם ריבת פטל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 235,
        "RecipeName": "כריך טחינה עם דבש ופסטרמה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 718,
        "RecipeName": "כריך לחם כוסמין עם טחינה וסילאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 843,
        "RecipeName": "כריך סלמון מעושן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 169,
        "RecipeName": "כריך עם טחינה אדומה, פסטרמה ועלי בייבי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 164,
        "RecipeName": "כריך עם סלט טונה וביצה קשה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 842,
        "RecipeName": "כריך פסטרמה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 173,
        "RecipeName": "כריך שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 508,
        "RecipeName": "כרעיי עוף ברוטב סילאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 702,
        "RecipeName": "לביבות ארטישוק במילוי בשר ברוטב חמצמץ",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 521,
        "RecipeName": "לביבות בטטה וקינואה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 524,
        "RecipeName": "לביבות בטטה וקינואה - כשר לפסח",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 523,
        "RecipeName": "לביבות בטטה וקינואה במטבל טחינה, לימון וסילאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 525,
        "RecipeName": "לביבות בטטה וקינואה במטבל טחינה, לימון וסילאן - כשר לפסח",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 522,
        "RecipeName": "לביבות בטטה וקינואה במטבל פסטו עם שמנת חמוצה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 526,
        "RecipeName": "לביבות בטטה וקינואה במטבל פסטו עם שמנת חמוצה - כשר לפסח",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 466,
        "RecipeName": "לביבות גבינת רוקפור ואגסים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 518,
        "RecipeName": "לביבות קוטג' בריאות וטעימות במיוחד (עם קמח מלא ונבט חיטה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 216,
        "RecipeName": "לביבות קישואים ברוטב יוגורט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2060,
        "RecipeName": "לביבות תירס וזיתים ",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1000,
        "RecipeName": "לבן  עם טחינה וסילאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1001,
        "RecipeName": "לבן עם זרעי פשתן, אגוזי מלך ושקדים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 11,
        "RecipeName": "לזניה אקספרס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 728,
        "RecipeName": "לזניה גבינות, תרד ועגבניות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1008,
        "RecipeName": "לחם חומוס - פרינאטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 423,
        "RecipeName": "לחם כפרי על האש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 992,
        "RecipeName": "לחם מהיר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 993,
        "RecipeName": "לחם מהיר 2 - עם חלב",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 408,
        "RecipeName": "לחם עם חמאה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 995,
        "RecipeName": "לחם שקדים ללא גלוטן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 86,
        "RecipeName": "לחמניות פסח - 30 יחידות קטנות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 591,
        "RecipeName": "לחמניות שוקולד (20 יחידות)  - מתכון פרווה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 593,
        "RecipeName": "לחמניות שוקולד עם קמח מלא (20 יחידות) - מתכון פרווה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 970,
        "RecipeName": "לחמניות של פסח - הבסיס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 971,
        "RecipeName": "לחמניות של פסח והפעם עם זיתים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 245,
        "RecipeName": "לטאקס - מתכון ל -  20 יחידות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 510,
        "RecipeName": "לפתן פרות מעורבב עם שמנת (פרווה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 342,
        "RecipeName": "מאפה מצות עם קישואים ופטרוזיליה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 977,
        "RecipeName": "מאפה סמבוסק במלית תרד וגבינות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1013,
        "RecipeName": "מאפה פריך עם ירקות צלויים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 857,
        "RecipeName": "מאפינס בריאות - מתכון ל -12 יחידות גדולות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 102,
        "RecipeName": "מאפינס פירות יבשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 215,
        "RecipeName": "מאפינס פקאן ושוקולד לבן - עם שמן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1010,
        "RecipeName": "מאפינס תפוחים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 917,
        "RecipeName": "מג'דרה בורגול עם עדשים שחורות אוכמניות מיובשות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 808,
        "RecipeName": "מג'דרה עם רוטב פסטו-יוגורט (גרסה עם עדשים ירוקות ופטרוזיליה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 810,
        "RecipeName": "מג'דרה עם רוטב פסטו-יוגורט (גרסה עם עדשים שחורות וכוסברה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 809,
        "RecipeName": "מג'דרה עם רוטב פסטו-יוגורט (גרסה עם עדשים שחורות ופטרוזיליה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 230,
        "RecipeName": "מדליוני פילה בקר ברוטב סילאן \"שום צ'ילי\"",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 217,
        "RecipeName": "מוס טונה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 528,
        "RecipeName": "מטבל טחינה עם לימון וסילאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 527,
        "RecipeName": "מטבל פסטו עם שמנת חמוצה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 966,
        "RecipeName": "מילקי - מעדן תוצרת בית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 156,
        "RecipeName": "ממרח גוואקמולי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 600,
        "RecipeName": "ממרח מיונז לימוני",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 160,
        "RecipeName": "ממרח עגבניות מיובשות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 597,
        "RecipeName": "ממרח עדשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 155,
        "RecipeName": "ממרח פלפלים צהובים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 159,
        "RecipeName": "ממרח פסטו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1025,
        "RecipeName": "ממרח קישואים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 542,
        "RecipeName": "מנת פרי/ירק - אבטיח",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 483,
        "RecipeName": "מנת פרי/ירק - אגס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 484,
        "RecipeName": "מנת פרי/ירק - אפרסמון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 485,
        "RecipeName": "מנת פרי/ירק - אפרשזיף נקטרין",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 486,
        "RecipeName": "מנת פרי/ירק - אשכולית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 475,
        "RecipeName": "מנת פרי/ירק - בננה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 488,
        "RecipeName": "מנת פרי/ירק - גזר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 541,
        "RecipeName": "מנת פרי/ירק - מלון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 491,
        "RecipeName": "מנת פרי/ירק - מלפפון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 540,
        "RecipeName": "מנת פרי/ירק - עגבניות שרי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 489,
        "RecipeName": "מנת פרי/ירק - עגבנייה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 490,
        "RecipeName": "מנת פרי/ירק - ענבים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 537,
        "RecipeName": "מנת פרי/ירק - פלפל ירוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 539,
        "RecipeName": "מנת פרי/ירק - פלפל כתום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 538,
        "RecipeName": "מנת פרי/ירק - פלפל צהוב",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 492,
        "RecipeName": "מנת פרי/ירק - קולורבי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 476,
        "RecipeName": "מנת פרי/ירק - קיווי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 477,
        "RecipeName": "מנת פרי/ירק - קרמבולה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 478,
        "RecipeName": "מנת פרי/ירק - שזיף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 479,
        "RecipeName": "מנת פרי/ירק - תאנה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 480,
        "RecipeName": "מנת פרי/ירק - תירס (קלח)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 481,
        "RecipeName": "מנת פרי/ירק - תפוז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 482,
        "RecipeName": "מנת פרי/ירק - תפוח עץ",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 469,
        "RecipeName": "מסיכה לעור שמן (מתאימה גם לעור עם פצעונים)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 811,
        "RecipeName": "מעדן יוגורט וניל עם גרנולה ביתית ופירות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 340,
        "RecipeName": "מצה בריי בתוספת דבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 973,
        "RecipeName": "מציות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 974,
        "RecipeName": "מציות עם גבינה צהובה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 815,
        "RecipeName": "מקלות פלורנטין בציפוי דבש ושקדים כ - 30 יחידות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1015,
        "RecipeName": "מקפא טחינה עם פירות יבשים חלב קוקוס וסילאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2073,
        "RecipeName": "מרנג תותים וקצפת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2076,
        "RecipeName": "מרק בטטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2,
        "RecipeName": "מרק בצל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 864,
        "RecipeName": "מרק גולאש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1041,
        "RecipeName": "מרק דלעת ובטטות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 863,
        "RecipeName": "מרק חומוס ועדשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 545,
        "RecipeName": "מרק כרישה ותפוחי עץ",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 67,
        "RecipeName": "מרק עדשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 318,
        "RecipeName": "מרק עדשים אדומות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 862,
        "RecipeName": "מרק עדשים חום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 692,
        "RecipeName": "מרק פול ( קפוא) עם בקר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 517,
        "RecipeName": "מרק שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 502,
        "RecipeName": "משקה הודי - לאסי קוקוס, פרג ואפרסקים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 496,
        "RecipeName": "משקה יוגורט וסודה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 422,
        "RecipeName": "משקה רימונים מתובל בסילאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 497,
        "RecipeName": "משקה שוקו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1057,
        "RecipeName": "נודלס מוקפץ עם עוף וירקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 713,
        "RecipeName": "נודלס עם ברוקולי ופרגיות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 735,
        "RecipeName": "ניוקי פטריות יער ושמנת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1046,
        "RecipeName": "ניסין",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 161,
        "RecipeName": "נקניקיות בבצק עלים בממרח פסטו ועגבניות מיובשות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 228,
        "RecipeName": "נתחוני עוף ברוטב סילאן \"חמוץ מתוק\"",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 99,
        "RecipeName": "נתחי חזה עוף מוקפצים עם אגוזים מטוגנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 743,
        "RecipeName": "נתחי לברק ברוטב צ'לי (עם פטרוזיליה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 564,
        "RecipeName": "סביצ'ה דג ים (בס) מוגש על לחם קלוי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 563,
        "RecipeName": "סביצ'ה דג ים (דניס) מוגש על לחם קלוי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 687,
        "RecipeName": "סברינה לפסח - גרסה פרווה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 241,
        "RecipeName": "סופגניות (מתכון ל - 20 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 267,
        "RecipeName": "סופגניות אפויות במלית ריבת ריקוטה וחמוציות (15 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 264,
        "RecipeName": "סופגניות אפויות במלית ריבת תות (15 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 265,
        "RecipeName": "סופגניות אפויות במלית שוקולד (15 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 266,
        "RecipeName": "סופגניות אפויות במלית תמרים (15 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 242,
        "RecipeName": "סופגניות מהירות הכנה - מתכון חלבי - 20 יחידות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 263,
        "RecipeName": "סופגניות שקולד במילוי אינסטנט קרם פירות יער (כ-40 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 262,
        "RecipeName": "סופגניות שקולד במילוי קרם פירות יער (כ-40 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 608,
        "RecipeName": "סופגנייה הולנדית (אוליבולן) בתוספת קצפת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 607,
        "RecipeName": "סופגנייה הולנדית (אוליבולן) בתוספת ריבת דובדבנים ושמנת חמוצה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 983,
        "RecipeName": "סחלב (טבעוני)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 7,
        "RecipeName": "סטייק אנטריקוט ברוטב יין אדום, חומץ בלסמי ואוכמניות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 754,
        "RecipeName": "סלט אבוקדו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 744,
        "RecipeName": "סלט אורז בר, סלק צלוי , אגוזים ויוגורט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1,
        "RecipeName": "סלט בריאות מהיר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 313,
        "RecipeName": "סלט גזר בסגנון רוסי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1032,
        "RecipeName": "סלט גזר וסלק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 752,
        "RecipeName": "סלט גזר מגורר במיץ תפוזים וצימוקים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1027,
        "RecipeName": "סלט גזר מרוקאי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 329,
        "RecipeName": "סלט חסה + עלי בייבי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2089,
        "RecipeName": "סלט חסה ועלי בייבי עם מנגו וחמוציות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 4,
        "RecipeName": "סלט חצילים יווני",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1021,
        "RecipeName": "סלט חצילים שרופים עם טחינה גולמית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1022,
        "RecipeName": "סלט חצילים שרופים עם טחינה גולמית ויוגורט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 158,
        "RecipeName": "סלט טונה 1",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 672,
        "RecipeName": "סלט ירוק - חסה, פלפל ירוק ,מלפפון וביצה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 671,
        "RecipeName": "סלט ירוק - חסה, פלפל ירוק ,מלפפון וטונה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 673,
        "RecipeName": "סלט ירוק - חסה, פלפל ירוק ,מלפפון, טונה וביצה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 80,
        "RecipeName": "סלט ירקות בסיסי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 227,
        "RecipeName": "סלט כוסמת עם עשבי תיבול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 471,
        "RecipeName": "סלט כרוב אדום עם שומשום ואגוזי קשיו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 881,
        "RecipeName": "סלט כרוב וגזר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2063,
        "RecipeName": "סלט כרוב לבן עם מיונז ובצל ירוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 714,
        "RecipeName": "סלט כרוב סגול ולבן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 303,
        "RecipeName": "סלט כרוב סיני",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1004,
        "RecipeName": "סלט מלפפון ומלון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 867,
        "RecipeName": "סלט סלק בסיסי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 755,
        "RecipeName": "סלט עגבניות מבושל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 766,
        "RecipeName": "סלט עדשים ירוקות ברוטב סויה ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 767,
        "RecipeName": "סלט עדשים ירוקות ופטריות ברוטב סויה ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 717,
        "RecipeName": "סלט עדשים שחורות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1024,
        "RecipeName": "סלט עוף, מלפפונים ואבוקדו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 232,
        "RecipeName": "סלט צבעוני פיקנטי ברוטב סילאן \"חריף מתוק\"",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 328,
        "RecipeName": "סלט קיווי ואפרסמון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 813,
        "RecipeName": "סלט קינואה בווינגרט רימונים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 420,
        "RecipeName": "סלט קינואה עם  דלעת ופקאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 314,
        "RecipeName": "סלט קר של קינואה, פטרוזיליה, נענע, בצל ירוק וחמוציות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 460,
        "RecipeName": "סלט תרד, גבינה, צנוברים וצימוקים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 747,
        "RecipeName": "סלמון אפוי ברוטב יין לבן, שמנת וכרישה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 66,
        "RecipeName": "סלמון ברוטב חרדל ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2065,
        "RecipeName": "סלסלה של פלפלים ועגבניות - ספייסי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2064,
        "RecipeName": "סלסלת בצל מהירה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 8,
        "RecipeName": "ספגטי בולונז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1023,
        "RecipeName": "עגבניות צלויות עם עשבי תיבול וגבינת מוצרלה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 855,
        "RecipeName": "עוגיות ארל גריי - כ- 50 עוגיות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 732,
        "RecipeName": "עוגיות גרנולה עם חמוציות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 731,
        "RecipeName": "עוגיות גרנולה עם צימוקים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 532,
        "RecipeName": "עוגיות חמאה - לימון (כ - 100 עוגיות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 957,
        "RecipeName": "עוגיות חמוציות, פיסטוקים ואגוזי מלך",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 70,
        "RecipeName": "עוגיות טחינה/חלבה (כ - 40 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 984,
        "RecipeName": "עוגיות סנדוויץ עם ריבת חלב",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 503,
        "RecipeName": "עוגיות פצפוצי אורז וחמוציות (כ - 35 עוגיות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 994,
        "RecipeName": "עוגיות שומשום וחלבה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 761,
        "RecipeName": "עוגיות שוקולד צ'יפס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 812,
        "RecipeName": "עוגיות שקדים בריאות כ - 30 עוגיות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 695,
        "RecipeName": "עוגת אגסים בחמש דקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 725,
        "RecipeName": "עוגת אורז עם בצל מזוגג",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 698,
        "RecipeName": "עוגת אפרסקים בחמש דקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2069,
        "RecipeName": "עוגת ביסקוויטים עם קרם שוקולד ווניל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 999,
        "RecipeName": "עוגת ביסקוויטים עם קרם שוקולד וקפה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 467,
        "RecipeName": "עוגת גבינה אפוייה עם קרם שמנת מעל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 514,
        "RecipeName": "עוגת גבינה וג'לי (בלי תותים)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 515,
        "RecipeName": "עוגת גבינה וג'לי (עם תותים)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 473,
        "RecipeName": "עוגת גבינה עם קצף ופירורים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 882,
        "RecipeName": "עוגת גזר ופיסטוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 234,
        "RecipeName": "עוגת גלידה בטעם תמרים, שוקולד, אגוזים  וחלבה - כל הטעמים או רק מה שרוצים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 576,
        "RecipeName": "עוגת דבש וריבת תפוזים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 700,
        "RecipeName": "עוגת דובדבנים בחמש דקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 602,
        "RecipeName": "עוגת חרובים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 69,
        "RecipeName": "עוגת לימון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 726,
        "RecipeName": "עוגת מוס שוקולד (עם בסיס של שוקולד לבן וקורנפלקס)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 71,
        "RecipeName": "עוגת מייפל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 72,
        "RecipeName": "עוגת משמש הונגרית קלה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 699,
        "RecipeName": "עוגת משמשים בחמש דקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 697,
        "RecipeName": "עוגת נקטרינות בחמש דקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 233,
        "RecipeName": "עוגת סילאן בחושה בניחוח קינמון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 701,
        "RecipeName": "עוגת פירות העונה בחמש דקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 315,
        "RecipeName": "עוגת פירות קייצית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 74,
        "RecipeName": "עוגת פרג בסיר פלא - חלבי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 73,
        "RecipeName": "עוגת פרג בסיר פלא - פרווה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 878,
        "RecipeName": "עוגת קוקוס לפסח",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 858,
        "RecipeName": "עוגת קינמון מזוגגת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 998,
        "RecipeName": "עוגת קסטה במלית גלידת יוגורט וממרח נוטלה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 997,
        "RecipeName": "עוגת קסטה במלית גלידת יוגורט ושוקולד שחר העולה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 3,
        "RecipeName": "עוגת שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 877,
        "RecipeName": "עוגת שוקולד וקוקוס לפסח",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 81,
        "RecipeName": "עוגת שוקולד של ליאת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 696,
        "RecipeName": "עוגת שזיפים בחמש דקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 500,
        "RecipeName": "עוגת שזיפים וגבינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 64,
        "RecipeName": "עוגת שמנת,פקאן וריבת חלב",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 76,
        "RecipeName": "עוגת תותים - חלבית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 77,
        "RecipeName": "עוגת תותים - פרווה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 874,
        "RecipeName": "עוגת תותים בשמנת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 501,
        "RecipeName": "עוגת תמרים בקלי קלות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 75,
        "RecipeName": "עוגת תפוחים בחמש דקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 694,
        "RecipeName": "עוגת תפוחים בחמש דקות - גרסה 2",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 940,
        "RecipeName": "עוגת תפוחים ללא פרי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 100,
        "RecipeName": "עוף ברוטב חמוץ מתוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 951,
        "RecipeName": "עוף בשום ופפריקה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1029,
        "RecipeName": "עוף וגזרים צלויים עם סירופ מייפל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 494,
        "RecipeName": "עוף עם אורז ותירס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1011,
        "RecipeName": "עוף עם זיתים ורימונים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 498,
        "RecipeName": "עוף עם תפוחי אדמה ובטטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 547,
        "RecipeName": "עוף צלוי עם תבשיל גזר ופירות יבשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2066,
        "RecipeName": "פודינג אורז לבן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 258,
        "RecipeName": "פונדו חנוכה - מיני סופגניות על קיסם עם רוטב שוקולד ובציפוי אגוזים פקאן סיני, סוכריות, שבבי שוקולד וקוקוס כ-45 יחידות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 468,
        "RecipeName": "פורמולת אנטי אייג'ינג לבנות 50 + (או בעלות עור יבש)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 368,
        "RecipeName": "פטוצ'יני עם תרד וצנוברים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 506,
        "RecipeName": "פטריות בסילאן ונענע",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 307,
        "RecipeName": "פילה בקר ברכז רימונים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 548,
        "RecipeName": "פילה דניס ברוטב חרדל ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1030,
        "RecipeName": "פילה דניס צרוב עם תבלינים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 988,
        "RecipeName": "פילה סלמון בציפוי שום,דבש ונענע",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 229,
        "RecipeName": "פילה סלמון ברוטב סילאן \"גריל\"",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 989,
        "RecipeName": "פילה סלמון בתנור",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 470,
        "RecipeName": "פילינג מסכה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2061,
        "RecipeName": "פיצה (עם קמח לבן) ",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1009,
        "RecipeName": "פיצה ללא שמרים - 2",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2062,
        "RecipeName": "פיצה מקמח מלא - חומרים לשתי פיצות בינוניות או פיצה אחת גדולה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1039,
        "RecipeName": "פיצפוצי אורז עם קפה ובוטנים בציפוי שוקולד לבן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 301,
        "RecipeName": "פיצת בטטה ושמנת (עם קמח מלא)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 211,
        "RecipeName": "פירה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 68,
        "RecipeName": "פירה כרובית ותפוחי אדמה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 428,
        "RecipeName": "פירה תפוחי אדמה ובטטות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 723,
        "RecipeName": "פיתות קלויות בשמן זית וזעתר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2077,
        "RecipeName": "פלפל ממולא",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1040,
        "RecipeName": "פלפלים ממולאים בקינואה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 549,
        "RecipeName": "פנה קוטה קוקס עם מי ורדים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 103,
        "RecipeName": "פנקייק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 231,
        "RecipeName": "פסטה \"סילאן\"",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 751,
        "RecipeName": "פסטה אפויה עם נקניקיות פרגית - מתכון של חברת \"זוגלובק\"",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 104,
        "RecipeName": "פסטה גבינות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 87,
        "RecipeName": "פסטה עם ברוקולי ועוף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 965,
        "RecipeName": "פרחי ברוקולי בשמן שומשום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2093,
        "RecipeName": "פרחי כרובית בתנור",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 818,
        "RecipeName": "פשטידת בטטה ובצל סגול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2082,
        "RecipeName": "פשטידת ברוקולי מהירה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 856,
        "RecipeName": "פשטידת דלעת וגבינות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 282,
        "RecipeName": "פשטידת כרובית - מתכון דיאטטי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 78,
        "RecipeName": "פשטידת פיצה לילדים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1020,
        "RecipeName": "פשטידת קינואה עם רוטב שום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 509,
        "RecipeName": "פתיתים אפויים בטעם בצל - מתכון שילדים אוהבים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 750,
        "RecipeName": "פתיתים ברוטב עגבניות ונקניקיות פרגית - מתכון של חברת \"זוגלובק\"",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 465,
        "RecipeName": "פתיתים, זוקיני וגבינה צפתית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 250,
        "RecipeName": "צ'ורוס - סופגניות \"ספרדיות\"",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 571,
        "RecipeName": "צימעס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 268,
        "RecipeName": "ציפוי שוקולד ושמנת מתוקה לסופגניות/דונאטס ( כ-20 סופגניות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 269,
        "RecipeName": "ציפוי שוקולד לבן  ושמנת מתוקה לסופגניות/דונאטס ( כ-20 סופגניות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 249,
        "RecipeName": "ציפוי שוקולד לסופגניות/דונאטס ( כ-20 סופגניות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 426,
        "RecipeName": "צ'יפס אפוי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1019,
        "RecipeName": "צלי בירקות ורימונים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 311,
        "RecipeName": "קבב עגל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 89,
        "RecipeName": "קדירת צלעות עגל וירקות שורש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 814,
        "RecipeName": "קדרת שוק טלה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 101,
        "RecipeName": "קונכיות פסטה עם טונה וקישואים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 880,
        "RecipeName": "קוסקוס אמיתי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1033,
        "RecipeName": "קינואה אדומה עם אפונה ושמיר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 760,
        "RecipeName": "קינואה עדשים ורוזמרין",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 209,
        "RecipeName": "קינואה עם ירקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1005,
        "RecipeName": "קינואה עם מלפפונים, גבינה ושקדים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1034,
        "RecipeName": "קינואה שחורה מעורבבת עם דלעת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 987,
        "RecipeName": "קינואה תפוחה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 736,
        "RecipeName": "קינוחי גבינה, חלבה ושוקולד לבן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 226,
        "RecipeName": "קיש בצל וקשקבל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 225,
        "RecipeName": "קיש צפתית ובטטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 963,
        "RecipeName": "קציצות אדממה / פולי סויה וחומוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 691,
        "RecipeName": "קציצות בשר בעלי סלק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2071,
        "RecipeName": "קציצות בשר וחומוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1007,
        "RecipeName": "קציצות חומוס וירקות אפויות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 84,
        "RecipeName": "קציצות טונה של סבתא אסתר לוי - 16 קציצות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2083,
        "RecipeName": "קציצות ירק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 65,
        "RecipeName": "קציצות כרובית וגבינה עם מטבל עגבניות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1042,
        "RecipeName": "קציצות עדשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 319,
        "RecipeName": "קציצות עוף ופתיתים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 90,
        "RecipeName": "קציצות עוף עיראקיות ברוטב של עגבניות וירקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2068,
        "RecipeName": "קציצות עוף עם חציל קלוי וטחינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 63,
        "RecipeName": "קציצות פיסטוק ועלים ירוקים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2074,
        "RecipeName": "קציצות קישואים ושמיר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2075,
        "RecipeName": "קציצות קישואים עם טחינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 967,
        "RecipeName": "קרמבו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 567,
        "RecipeName": "קרפלך / קראפלך במלית בשר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 568,
        "RecipeName": "קרפלך / קראפלך במלית ירקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 955,
        "RecipeName": "קרקר בריאות עם קמח כוסמין - 400 גרם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 956,
        "RecipeName": "קרקר בריאות עם קמח כוסמין וקצח- 400 גרם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 885,
        "RecipeName": "רוטב וינגרט צלפים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1051,
        "RecipeName": "רוטב עגבניות - 2 ק\"ג",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 745,
        "RecipeName": "רוטב שמנת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1016,
        "RecipeName": "ריבועי שומשום, דבש וגרעיני חמניה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 499,
        "RecipeName": "ריבועיות שוקולד בעשר דקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 861,
        "RecipeName": "ריבות תותים ללא תוספת סוכר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 201,
        "RecipeName": "שוקי עוף ברוטב חמוץ-מתוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 712,
        "RecipeName": "שוקי עוף בתנור (במרינדה של מיץ תפוזים, רוטב סויה, ודבש)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 507,
        "RecipeName": "שוקיים עוף ברוטב סילאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 88,
        "RecipeName": "שושקות ממלואות בקינואה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 459,
        "RecipeName": "שטרודל-בורקס תרד וגבינות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 412,
        "RecipeName": "שיפודי עוף ופלפלים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 91,
        "RecipeName": "שכבות יוגורט וטחינה עם פירות מיובשים ואגוזים - מנה ראשונה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 495,
        "RecipeName": "שניצל אפוי בתנור",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 964,
        "RecipeName": "שעועית ירוקה בשמן שומשום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2091,
        "RecipeName": "שעועית ירוקה מבושלת ברוטב אדום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 685,
        "RecipeName": "שעועית ירוקה מוקפצת בשומשום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2084,
        "RecipeName": "שעועית לבנה ברוטב עגבניות פיקנטי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 763,
        "RecipeName": "שעשועי ביסקוויטים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 425,
        "RecipeName": "שקשוקה עגבניות, חצילים וגבינת עיזים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 424,
        "RecipeName": "שקשוקה תרד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1026,
        "RecipeName": "תבשיל בטטות ושוקי עוף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2070,
        "RecipeName": "תבשיל גרגרי חומוס ועגבניות ",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 996,
        "RecipeName": "תבשיל כוסמת בשילוב פטריות ופלפלים אדומים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2092,
        "RecipeName": "תבשיל קישואים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 252,
        "RecipeName": "תבשיל שעועית אדומה ותירס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 427,
        "RecipeName": "תפוחי אדמה צלויים בתנור",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1018,
        "RecipeName": "תפוחים צלויים בדבש עם גלידת דבש ביתית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 9,
        "RecipeName": "אוקרושקה (מרק ריוויון רוסי)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 13,
        "RecipeName": "בקר ואטריות במייפל ושום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 6,
        "RecipeName": "עוגיות שיבולת שועל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 16,
        "RecipeName": "פאי ט\"ו בשבט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 105,
        "RecipeName": "תפוח בדבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 326,
        "RecipeName": "אוזני המן - בצק פריך ושמנת במילוי תמרים - 30 יח'",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 199,
        "RecipeName": "אוזני המן מקמח מלא, במלית פרג ושקדים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 513,
        "RecipeName": "אומלט (חביתה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 353,
        "RecipeName": "אורז בצורות שונות - משהו חגיגי (חשוב להכין יום קודם)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 684,
        "RecipeName": "אפונה ירוקה - מתכון בסיסי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 535,
        "RecipeName": "ארוחת הבוקר של תמיר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 512,
        "RecipeName": "ארוחת מלוואח קנוי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 413,
        "RecipeName": "בונבון/ממתק שוקולד בשלושה צבעים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 117,
        "RecipeName": "בטטה אפויה עם עשבי תיבול וסילאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 195,
        "RecipeName": "ביסקוטי מקמח מלא עם פיסטוק ולימון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 806,
        "RecipeName": "בליני בטטה ברוטב יוגורט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 440,
        "RecipeName": "בצק שקם - שמנת, קמח, מרגרינה/מחמאה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 115,
        "RecipeName": "ברבוניות בירקות שורש גרנדין ורימונים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 371,
        "RecipeName": "גבינת שמנת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 388,
        "RecipeName": "גלידת בננות ושוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 384,
        "RecipeName": "גלידת יוגורט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 383,
        "RecipeName": "גלידת שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 395,
        "RecipeName": "גלילוני גבינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 429,
        "RecipeName": "גרנולה תוצרת בית - מכילה פרג, קוקוס ועוד דברים לא שגרתיים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 208,
        "RecipeName": "דג סלמון ברוטב צ'לי מתוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 194,
        "RecipeName": "דניס אפוי על ירקות, ברוטב חרדל ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 380,
        "RecipeName": "חזה הודו בדבש וחומץ בלסמי - פסטרמה תוצרת בית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 655,
        "RecipeName": "חזה עוף בג'ינג'ר וטריאקי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 654,
        "RecipeName": "חזה עוף בחרדל, ג'ינג'ר ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 116,
        "RecipeName": "חזה עוף בתפוזים ברנדי ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 683,
        "RecipeName": "חזרת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 212,
        "RecipeName": "חלה מתוקה לשבת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 321,
        "RecipeName": "חלה מתוקה מקמח מלא - באדיבות  חברת \"שמרית\" (3 יחי')",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 393,
        "RecipeName": "חמיצת סלק (בורשט) + סלט סלק (מהשאריות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 690,
        "RecipeName": "טנזיה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 669,
        "RecipeName": "יוגורט עם טחינה וסילאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 354,
        "RecipeName": "כדורי בשר עם אפונה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 586,
        "RecipeName": "כרוב מבושל בדבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 377,
        "RecipeName": "כרובית מאודה במיץ לימון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 197,
        "RecipeName": "לביבות יוגורט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 397,
        "RecipeName": "לביבות תירס עם תפוחי אדמה בלבן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 119,
        "RecipeName": "לביבות תפוח עץ, גזר וצימוקים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 373,
        "RecipeName": "לחם בריאות - שש כיכרות לחם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 442,
        "RecipeName": "לחמניות 35-40 לחמניות  (לביה\"ס)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 186,
        "RecipeName": "לחמניות עם פירות יבשים ו/או שוקולד צ'יפס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 182,
        "RecipeName": "מאפינס חמוציות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 153,
        "RecipeName": "מאפינס פרג-ריבה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 183,
        "RecipeName": "מאפינס צימוקים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 379,
        "RecipeName": "מאפינס שמנת חמוצה, שוקולד לבן פירות יער",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 807,
        "RecipeName": "מג'דרה עם רוטב פסטו-יוגורט (גרסה עם עדשים ירוקות וכוסברה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 378,
        "RecipeName": "מוס יוגורט פרג עם תותים בבלסמי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 375,
        "RecipeName": "מוס מרשמלו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 720,
        "RecipeName": "מוס שוקולד לבן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 401,
        "RecipeName": "מי פנים להבהרת כתמים (בשימוש עלי תאנה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 184,
        "RecipeName": "מיני מלאווח מתוקים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 536,
        "RecipeName": "מנת פרי/ירק - פלפל אדום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 369,
        "RecipeName": "מסכה טבעית לפנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 370,
        "RecipeName": "מסכת רענון לפנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 339,
        "RecipeName": "מצה בריי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 352,
        "RecipeName": "מקלוני תירס ועוף - 20 יחידות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 389,
        "RecipeName": "מקפא אבוקדו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 372,
        "RecipeName": "מרובעי גרנולה, חמוציות וחמאת בוטנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 693,
        "RecipeName": "מרציפן שקדים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 392,
        "RecipeName": "מרק יוגורט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 125,
        "RecipeName": "מרק ירקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 181,
        "RecipeName": "מרק עגבניות עם אורגנו ואורז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 180,
        "RecipeName": "מרק עגבניות עם פטרוזיליה ואורז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 686,
        "RecipeName": "מרק עוף צח, לאכילה ולתיבול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 688,
        "RecipeName": "מרק פול ( טרי) עם בקר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 391,
        "RecipeName": "מרק פירות - \"קומפוט\"",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 444,
        "RecipeName": "מרק פירות (מכיל יין)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 374,
        "RecipeName": "מרשמלו תוצרת בית - 100 גרם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 738,
        "RecipeName": "נתחי לברק ברוטב צ'לי (עם כוסברה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 558,
        "RecipeName": "סופל'ה שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 557,
        "RecipeName": "סופל'ה שוקולד לבן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 387,
        "RecipeName": "סורבה אבטיח",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 385,
        "RecipeName": "סורבה מלון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 386,
        "RecipeName": "סורבה תות שדה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 739,
        "RecipeName": "סלט אורז בר, סלק צלוי ואגוזים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 332,
        "RecipeName": "סלט חסה ופירות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 330,
        "RecipeName": "סלט חסה עם רוטב תפוזים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 124,
        "RecipeName": "סלט חצילים עם רוטב צ'לי מתוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 670,
        "RecipeName": "סלט ירוק - חסה, פלפל ירוק ומלפפון - הבסיס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 168,
        "RecipeName": "סלט כרוב אדום עם תפוזים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 355,
        "RecipeName": "סלט מקרוני וסלמון מעושן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 123,
        "RecipeName": "סלט סלרי עם תפוחים- חמצמץ מתוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 331,
        "RecipeName": "סלט עגבניות שרי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 400,
        "RecipeName": "סלט פסטה קר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 322,
        "RecipeName": "סלט תרד ותאנים אפויות בדבש מפרחי אקליפטוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 323,
        "RecipeName": "סלמון עטוף בדבש מפרחי אבוקדו ומעדן משמש 100% פרי מוגש על סלסה ירוקה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 196,
        "RecipeName": "עדשים וירקות שורש - תבשיל חורף צמחוני",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 721,
        "RecipeName": "עוגיות חמאה עם טאץ' של שקדים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 447,
        "RecipeName": "עוגיות קנטוצ'יני - 150 עוגיות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 445,
        "RecipeName": "עוגיות שושנים (ללא שמרים)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 338,
        "RecipeName": "עוגיות שקדים - 20 יחידות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 446,
        "RecipeName": "עוגיות שקדים (נטו שקדים)- 40 עוגיות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 443,
        "RecipeName": "עוגיות שקדים ודבש - 40 יחידות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 437,
        "RecipeName": "עוגת \"מעדן\" עם מעדן שוקו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 398,
        "RecipeName": "עוגת גבינה (אומרים דומה לזו של \"קפולסקי\")",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 451,
        "RecipeName": "עוגת גבינה עם סילאן וטחינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 111,
        "RecipeName": "עוגת גזר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 128,
        "RecipeName": "עוגת דבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 129,
        "RecipeName": "עוגת דבש - גרסה עם ריבה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 200,
        "RecipeName": "עוגת זברה של קרין גורן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 110,
        "RecipeName": "עוגת תפוזים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 434,
        "RecipeName": "עוגת תפוחים ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 154,
        "RecipeName": "עוף בלימון ופטרוזיליה על פירה בטטה ושום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 439,
        "RecipeName": "עוף בסויה ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 177,
        "RecipeName": "עוף בתנור עם דבש ורוזמרין",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 436,
        "RecipeName": "עוף ותפוחי אדמה בציפוי ביסלי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 396,
        "RecipeName": "עוף עם דבש, בטטות ושזיפים על מצע קוסקוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 742,
        "RecipeName": "פאי מקמח כוסמין עם משמש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 325,
        "RecipeName": "פוקצ'ה בעגבניות ועשבי גינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 435,
        "RecipeName": "פילה סלמון במרינדה של טריאקי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 394,
        "RecipeName": "פילה עוף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 402,
        "RecipeName": "פילינג תאנים להבהרת עור הפנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 382,
        "RecipeName": "פיצה בלי שמרים - 1",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 351,
        "RecipeName": "פירה בצורות שונות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 166,
        "RecipeName": "פירה תפוחי אדמה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 414,
        "RecipeName": "פנקייקים לפסח (15-20 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 474,
        "RecipeName": "פסטה בזיליקום - מתכון מהיר...פשוט פשוט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 350,
        "RecipeName": "פסטלים של תפוחי אדמה - 15 יחידות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 741,
        "RecipeName": "צלי סינטה בתנור",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 198,
        "RecipeName": "צלי עוף ביין עם פטריות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 405,
        "RecipeName": "קוקי גלידה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 165,
        "RecipeName": "קי'צרי (אורז עם עדשים אדומות / כתומות )",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 689,
        "RecipeName": "קציצות בשר בעלי סלק ופול - לאוכלי קטניות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 324,
        "RecipeName": "קציצות עוף והודו על מצע קוסקוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 179,
        "RecipeName": "קציצות קישואים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 653,
        "RecipeName": "קרוטונים תוצרת בית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 740,
        "RecipeName": "רוטב פסטו עם פיסטוקים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 381,
        "RecipeName": "רול טורטייה במילוי גבינה וסלומון מעושן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 185,
        "RecipeName": "ריבת חבושים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 349,
        "RecipeName": "רצועות דג - לילדים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 348,
        "RecipeName": "רצועות שניצל - לילדים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 376,
        "RecipeName": "שבלולי פילאס וקשקבל 25-30 יחידות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 415,
        "RecipeName": "שומשומית חלבה בצבעי חום ולבן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 167,
        "RecipeName": "שניצל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 737,
        "RecipeName": "תחתיות ארטישוק במילוי גבינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 118,
        "RecipeName": "תפוח אדמה בייבי צלוי עם זיתים וכוסברה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 176,
        "RecipeName": "תפוחי אדמה אפויים עם אורגנו וטימין (קורנית)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 178,
        "RecipeName": "תפוחי אדמה אפויים עם רוזמרין",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 149,
        "RecipeName": "חצילים בטעם כבד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 130,
        "RecipeName": "חריימה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 271,
        "RecipeName": "כבד עוף בסירופ מייפל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 270,
        "RecipeName": "לביבות חנוכה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 272,
        "RecipeName": "לחם בקלי קלות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 132,
        "RecipeName": "מילוי פרג לעוגות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 261,
        "RecipeName": "מרק עוף קל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 281,
        "RecipeName": "מרק שעועית וירקות שורש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 148,
        "RecipeName": "עוגה בחושה עם תפוחים ואגסים מקורמלים בדבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 975,
        "RecipeName": "עוגת ביסקוויטים של פעם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 978,
        "RecipeName": "עוגת גבינה 3 שכבות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 127,
        "RecipeName": "עוגת גבינה אפוייה  - דיאטטית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 976,
        "RecipeName": "עוגת גבינה עם ציפוי קצפת ריבת חלב",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 126,
        "RecipeName": "עוגת דבש בהירה ורכה, כמו פעם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 140,
        "RecipeName": "עוגת דבש קלאסית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 259,
        "RecipeName": "עוגת פקאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 131,
        "RecipeName": "עוגת שמרים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 260,
        "RecipeName": "עוף בדבש תפוח עץ וצימוקים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 256,
        "RecipeName": "פשטידה ירושלמית - קוגל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 150,
        "RecipeName": "פשטידת כרובית בנוסח פרובאנס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 151,
        "RecipeName": "פשטידת קישואים קלה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 295,
        "RecipeName": "קאימק (קצפת טורקית)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 296,
        "RecipeName": "רוטב תות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 304,
        "RecipeName": "חטיף אנרגיה מפירות יבשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 306,
        "RecipeName": "עוגה מקמח חרובים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 305,
        "RecipeName": "עוף בתנור עם פירות יבשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 309,
        "RecipeName": "בואיקוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 109,
        "RecipeName": "בטטות אפויות עם קינמון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 308,
        "RecipeName": "מאפינס תמרים וקינמון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 108,
        "RecipeName": "סלט ארטישוק (שושי ג'רסי)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 107,
        "RecipeName": "עוגת גבינה (גבוהה במיוחד)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 106,
        "RecipeName": "פנקייק (קלי קלות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 114,
        "RecipeName": "עוגה עם פירות יבשים - קלה מאוד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 122,
        "RecipeName": "עוגיות תמרים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 223,
        "RecipeName": "קנטוצ'יני פירות יבשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 193,
        "RecipeName": "הצ'ילי של ליזי -ארוחה שילדים אוהבים בחמש דקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 192,
        "RecipeName": "נתחוני עוף בחלב קוקוס ובוטנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 191,
        "RecipeName": "פרפרה שוקולד וקוקוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 137,
        "RecipeName": "אוזני המן במילוי תמרים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 845,
        "RecipeName": "אורז מלא עם גזר ובצל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 139,
        "RecipeName": "ארוחת עוף ואורז בתבנית אחת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 143,
        "RecipeName": "העוגיות של איריס עם קוקוס ומרגרינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 133,
        "RecipeName": "הפנקייק של דיני",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 135,
        "RecipeName": "הקניידלך הכי טעימים בעולם של סבתא פנינה אלופת הבישול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 290,
        "RecipeName": "חזה עוף וגזר ביין אדום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 706,
        "RecipeName": "חצילים בחומץ ללא טיגון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 142,
        "RecipeName": "ירקות חמוצים חריפים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 293,
        "RecipeName": "כבד עוף ברוטב פירות יער",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 846,
        "RecipeName": "ממרח תרד ואגוזים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 279,
        "RecipeName": "מרק אפונה עם בצקניות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 280,
        "RecipeName": "מרק ירקות עם עוף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 288,
        "RecipeName": "סלט אבוקדו וטונה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 145,
        "RecipeName": "סלט גזר (לא פולני)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 285,
        "RecipeName": "סלט חומוס ופלפלים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 289,
        "RecipeName": "סלט טאבולה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 286,
        "RecipeName": "סלט כרוב אדום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 141,
        "RecipeName": "סלט כרוב עם חמוציות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 851,
        "RecipeName": "סלט כרובית מיוחד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 844,
        "RecipeName": "סלט סלרי סלק וחמוציות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 287,
        "RecipeName": "סלט עגבניות וקטשופ חריף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 703,
        "RecipeName": "סלט עגבניות חריף עם נענע",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 704,
        "RecipeName": "סלט עגבניות, עגבניות צלויות ומוצרלה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 707,
        "RecipeName": "סלט קינואה עם סלק וטחינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 299,
        "RecipeName": "סלט שעועית ירוקה עגבניות שרי ושום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 190,
        "RecipeName": "עוגיות שוקולד צ'יפס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 278,
        "RecipeName": "עוגיות שושנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 189,
        "RecipeName": "עוגיות שקדים ולימון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 848,
        "RecipeName": "עוגת מוס שוקולד מרשימה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 144,
        "RecipeName": "עוגת מיץ מהירה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 205,
        "RecipeName": "עוגת מצות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 134,
        "RecipeName": "עוגת משמש של סבתא נינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 138,
        "RecipeName": "עוגת נוטלה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 849,
        "RecipeName": "עוגת סברינה של אמא של רוויטל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 274,
        "RecipeName": "עוגת קינוח",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 136,
        "RecipeName": "עוגת שוקולד פשוטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 188,
        "RecipeName": "עוגת שוקולד צ'יפס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 292,
        "RecipeName": "עוף בסילאן וצ'ילי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 291,
        "RecipeName": "עוף מתוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 705,
        "RecipeName": "עוף שלם בתנור על מצע מלח גס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 283,
        "RecipeName": "פודינג לחם עם שוקולד לבן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 276,
        "RecipeName": "פשטידת בצל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 203,
        "RecipeName": "פשטידת בשר ותירס - פסטל דה צ'וקלו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 850,
        "RecipeName": "פשטידת התירס של איריס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 275,
        "RecipeName": "צ'ולנט בנוסח שלי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 297,
        "RecipeName": "צ'פאטי מקמח מלא",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 204,
        "RecipeName": "קוגל - כל הלילה בתנור",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 847,
        "RecipeName": "קינואה עם קישואים ואפונה בלימון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 277,
        "RecipeName": "קינוח נשיקות ותותים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 284,
        "RecipeName": "רוטב לסלט חסה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 298,
        "RecipeName": "תפוחי אדמה ובטטות ברוזמרין",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 544,
        "RecipeName": "אנטריקוט על האש ( עלי דפנה, עלי מרווה, עלי רוזמרין ועוד)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 516,
        "RecipeName": "בצק לפיצה ללא שמרים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 202,
        "RecipeName": "בצק עלים במלית בשר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 206,
        "RecipeName": "בצק עלים במלית תרד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 207,
        "RecipeName": "בראוניז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1047,
        "RecipeName": "כדורי אורז עם גבינות מוצרלה ופרמזן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 152,
        "RecipeName": "לביבות תפוחי אדמה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1054,
        "RecipeName": "מתכון בדיקה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 543,
        "RecipeName": "סטיק אנטריקוט במשרה (יין, שמן זית, זרעי כוסברה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 682,
        "RecipeName": "ספגטי מוקרם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2102,
        "RecipeName": "פיצה ביתית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 609,
        "RecipeName": "פשטידת תרד עשוייה מעלי סיגר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 972,
        "RecipeName": "קובבס של בני",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1048,
        "RecipeName": "רולדת קצפת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 430,
        "RecipeName": "אורז אפוי בעשבי תיבול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 431,
        "RecipeName": "דג ברוטב יוגורט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 432,
        "RecipeName": "כרובית ביוגורט ופרמז'ן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 433,
        "RecipeName": "מאפינס בננות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 210,
        "RecipeName": "עוגת שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 222,
        "RecipeName": "בצק עלים במלית בשר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 254,
        "RecipeName": "חזה עוף במשרה שמן זית שום ובזיליקום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 255,
        "RecipeName": "פירה פשוט וטעים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 253,
        "RecipeName": "פלפלים ממולאים בבשר ואורז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 294,
        "RecipeName": "מאפינס בננה קוקוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 302,
        "RecipeName": "עוגיות חמאה - תפוז (כ - 100 עוגיות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 550,
        "RecipeName": "עוגת אגוזים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 310,
        "RecipeName": "עוגת פירות יבשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 551,
        "RecipeName": "עוגת שוקולד ללא שוקולד (:",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 559,
        "RecipeName": "עוף במרינדה של ענת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 347,
        "RecipeName": "בורמוליקוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 461,
        "RecipeName": "בורקס חצילים (25 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 453,
        "RecipeName": "גראטן עם שמנת (תפו\"א עם שמנת)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 360,
        "RecipeName": "חזה עוף (בסוכריית נייר)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 361,
        "RecipeName": "חרוסת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 455,
        "RecipeName": "ירקות אפויים בחמישה צבעים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 452,
        "RecipeName": "כדורי מוצרלה בציפוי קריספי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 345,
        "RecipeName": "לחמניות כשרות לפסח (40 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 341,
        "RecipeName": "מאפה מצות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 357,
        "RecipeName": "מוס סלמון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 530,
        "RecipeName": "ממרח אגוזים ושוקולד ביתי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 531,
        "RecipeName": "ממרח חלבה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 358,
        "RecipeName": "מרק עגבניות עם פסטה ובזיליקום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 561,
        "RecipeName": "סביצ'ה דג ים (אנטיאס) מוגש על לחם קלוי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 337,
        "RecipeName": "סברינה לפסח - גרסה חלבית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 334,
        "RecipeName": "סוכריות חרוסת בשוקולד לבן - 30 סוכריות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 343,
        "RecipeName": "עוגה בחושה עם וניל, חלבה ושוקולד לבן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 335,
        "RecipeName": "עוגת גבינה תפוזינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 344,
        "RecipeName": "עוגת שוקולד וריבת חלב",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 336,
        "RecipeName": "עוגת שוקולד חמה במילוי אגס - 12 יחידות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 560,
        "RecipeName": "פילינג רימונים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 333,
        "RecipeName": "פשטידת פלפלים וגבינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 587,
        "RecipeName": "צלי עוף בעגבניות ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 356,
        "RecipeName": "קדירת שומר בלימון ושום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 346,
        "RecipeName": "קציצות פראסה (כרישה)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 359,
        "RecipeName": "שומר אפוי עם תפוז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 457,
        "RecipeName": "שייק קפה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 458,
        "RecipeName": "שייק שוקו ומרשמלו לילדים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 456,
        "RecipeName": "שיק בננה, תמרים וסילאן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 454,
        "RecipeName": "תפוח אדמה ממולא",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 562,
        "RecipeName": "תפוחי אדמה מתוק בקרמל גי'נג'ר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 552,
        "RecipeName": "אורז עם עשבי תיבול וגרגרי רימון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 565,
        "RecipeName": "גפילטע פיש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 566,
        "RecipeName": "חזה עוף במלית של כבדי עוף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 553,
        "RecipeName": "כנפי עוף בדבש סויה ושום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 362,
        "RecipeName": "מרק עוף מוקרם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 363,
        "RecipeName": "סלט עולש ורימונים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 554,
        "RecipeName": "סלט תרד ועדשים בשמן זית, שום וחומץ בלסמי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 555,
        "RecipeName": "עוגת תפוח בדבש עם חמוציות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 519,
        "RecipeName": "עוף קריספי בחמאת בוטנים עם פתיתים אפויים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 365,
        "RecipeName": "פטוצ'יני מקמח מלא עם תרד וצנוברים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 364,
        "RecipeName": "צלעות טלה בבצל ועשבי תיבול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 520,
        "RecipeName": "קציצות עוף ובקר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 556,
        "RecipeName": "קרפאצ'ו פירות ברוטב רימונים ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 366,
        "RecipeName": "רטטוי עם זיתים ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 367,
        "RecipeName": "תפוח עץ וחמוציות ברוטב וניל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 404,
        "RecipeName": "אשכול לחמניות דבש לשולחן ראש השנה ( 15 לחמניות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 417,
        "RecipeName": "חלה מתוקה במילוי גבינת ריקוטה ודובדבנים (מתכון חברת \"שמרית\")",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 589,
        "RecipeName": "חלת בצל ופיצוחים (3 חלות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 399,
        "RecipeName": "חלת דבש עגולה לראש השנה (מתכון ל- 2 חלות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 403,
        "RecipeName": "כתר לחמניות דבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 505,
        "RecipeName": "לחמניות גרעיני דלעת חמניות וקינואה (כ- 15 יחידות)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 590,
        "RecipeName": "לחמניות שוקולד (20 יחידות)  - מתכון חלבי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 592,
        "RecipeName": "לחמניות שוקולד עם קמח מלא (20 יחידות) - מתכון חלבי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 450,
        "RecipeName": "מאפה זיתים עם גבינת פטה ואגוזי קשיו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 418,
        "RecipeName": "מאפה פוקצ'ינות אנטי פסטי ירקות וגבינות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 604,
        "RecipeName": "סופגניות מיני (כ - 35 סופגניות) במילוי ריבה או שוקולד או ריבת חלב",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 605,
        "RecipeName": "סופגניות מקושטות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 606,
        "RecipeName": "סופגנייה הולנדית (אוליבולן) בתוספת קצפת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 449,
        "RecipeName": "עוגת גבינה חגיגית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 529,
        "RecipeName": "עוגת כדורים מלאה בהפתעות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 616,
        "RecipeName": "פונדו חנוכה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 504,
        "RecipeName": "פוקאצ'ה ישראלית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 406,
        "RecipeName": "פיצה ביתית \"קליעה למטרה\" של רות אוליבר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 407,
        "RecipeName": "לחם עם שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 416,
        "RecipeName": "עוגת שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 583,
        "RecipeName": "אורז לבן+ קדים וצימוקים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 570,
        "RecipeName": "כבד קצוץ",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 438,
        "RecipeName": "כדורי פופקורן מתוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 582,
        "RecipeName": "כרוב לבן ברוטב דבש וסוכר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 577,
        "RecipeName": "מאפה תפוחי אדמה ובטטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 578,
        "RecipeName": "מרק צח של חג",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 575,
        "RecipeName": "סלט חסה ברוטב דבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 580,
        "RecipeName": "עוגת דבש בניחוח צאי מסלאה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 581,
        "RecipeName": "פאי תפוחים עם ריבת תות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 572,
        "RecipeName": "פטריות ברוטב סויה ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 574,
        "RecipeName": "צלי קדרה מפואר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 579,
        "RecipeName": "שעועית ירוקה ברוטב עגבניות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 585,
        "RecipeName": "פשטידת פטריות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 588,
        "RecipeName": "בצק בסיסי לפשטידה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 594,
        "RecipeName": "סלט כרוב אדום עם מיונז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 596,
        "RecipeName": "ירקות שורש אפויים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 614,
        "RecipeName": "כדורי שקדים ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 633,
        "RecipeName": "כושית בפרג",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 615,
        "RecipeName": "כעכים בציפוי שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 866,
        "RecipeName": "לביבות כרובית ובטטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 610,
        "RecipeName": "מאפה פירות יבשים בדבש וגלידת וניל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 612,
        "RecipeName": "מתוקיות עם ריבת תות (חלבי)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 613,
        "RecipeName": "עוגיות דבש מנצנצות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 629,
        "RecipeName": "עוגת גבינה עם שמנת רגילה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 727,
        "RecipeName": "עוגת שכבות שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 680,
        "RecipeName": "צ'וקולטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 729,
        "RecipeName": "קוביות פצפוצי אורז ושוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 681,
        "RecipeName": "שוקו תבלינים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 611,
        "RecipeName": "שייק קוקוס בננה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 632,
        "RecipeName": "אומלט קלאסי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 651,
        "RecipeName": "אורז בטעמים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 636,
        "RecipeName": "אורז לבן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 643,
        "RecipeName": "ארוחת בוקר לפתיחת שבוע",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 644,
        "RecipeName": "ארוחת בוקר שיגרתית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 679,
        "RecipeName": "בצק פריך לפשטידות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 622,
        "RecipeName": "הודו ברוטב חמוץ מתוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 641,
        "RecipeName": "חמין עוף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 852,
        "RecipeName": "כנפי עוף ברוטב צ'ילי מתוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 623,
        "RecipeName": "מרק אפונה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 624,
        "RecipeName": "מרק בטטה מוקרם",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 625,
        "RecipeName": "מרק ירקות וגריסים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 634,
        "RecipeName": "מרק ירקות חורפי וסמיך",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 626,
        "RecipeName": "מרק כתום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 640,
        "RecipeName": "סלט 5 צבעים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 635,
        "RecipeName": "סלט חסה של תום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 617,
        "RecipeName": "ספגטי בולונז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 708,
        "RecipeName": "עוגת כדורי שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 650,
        "RecipeName": "עוף בדבש ותפוח",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 638,
        "RecipeName": "עוף בדבש עם תפו\"א ובטטות בתנור",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 618,
        "RecipeName": "עוף עם אפונה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 645,
        "RecipeName": "עוף עם ירקות בתנור",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 637,
        "RecipeName": "פירה אגדי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 677,
        "RecipeName": "פסטה אדומה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 678,
        "RecipeName": "פשטידת פיטריות וגבינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 642,
        "RecipeName": "צלי עוף מתוק עם פירות יבשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 649,
        "RecipeName": "קוסקוס אותנטי - לעצלנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 648,
        "RecipeName": "קוסקוס וירקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 621,
        "RecipeName": "קנטאקי פרייד צ'יקן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 619,
        "RecipeName": "שוקי עוף בפתיתים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 630,
        "RecipeName": "שקשוקה חריפה אש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 631,
        "RecipeName": "שקשוקה יוונית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 620,
        "RecipeName": "תבשיל אורז עם עוף ותירס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 639,
        "RecipeName": "תפוח אדמה במלוי פיטריות מוקרמות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 627,
        "RecipeName": "פבלובה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 647,
        "RecipeName": "מרק לקוסקוס (טעמים ראשונים)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 652,
        "RecipeName": "קציצות ברוטב עגבניות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 668,
        "RecipeName": "סיר מרק ירקות חמוץ עם לאושטיאן וקציצות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 667,
        "RecipeName": "סיר סלטים מלפפונים חמוצים של שושי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 665,
        "RecipeName": "סיר עיקרית אסיק פלייש עוף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 661,
        "RecipeName": "סיר תוספות שעועית צהובה של שושי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 658,
        "RecipeName": "שיר חלבי ערב ממליגה עם גבינה מלוחה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 664,
        "RecipeName": "שיר מרק אפונה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 663,
        "RecipeName": "שיר מרק תפוחי אדמה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 666,
        "RecipeName": "שיר עיקרית קציצות קישואים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 657,
        "RecipeName": "שיר קינוחים עוגות עוגת שוקולד של מיטל (מכתב)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 662,
        "RecipeName": "שיר תוספות שעועית ירוקה ברוטב עגבניות של רחל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 660,
        "RecipeName": "שיר תוספות תפוחי אדמה בתנור",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 659,
        "RecipeName": "שיר תוספות תפוחי אדמה עם אפונה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 675,
        "RecipeName": "פשטידת בצל מצויינת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 674,
        "RecipeName": "חביתת טופו ועשבי תיבול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 676,
        "RecipeName": "לזניה בשר ועגבניות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 768,
        "RecipeName": "ספגטי מיטבולס מוצרלה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 764,
        "RecipeName": "עוגת בננה ספליט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 765,
        "RecipeName": "פאדג' שוקולד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 801,
        "RecipeName": " קדירת ארטישוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 803,
        "RecipeName": "אורז הודי עם כרובית, אפונה וגזר בניחוח לימון ועשבי תיבול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 804,
        "RecipeName": "אורז ירוק עם אפונה עדינה ופול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 805,
        "RecipeName": "אורז מג'דרה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 792,
        "RecipeName": "אנטיפסטי ירקות וגבינה צפתית בשמן זית ובזילקום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 819,
        "RecipeName": "ברוקולי ושעועית ירוקה בסירופ מייפל, סויה ובוטנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 820,
        "RecipeName": "גזר גמדי עם אורז בניחוח מתוק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 777,
        "RecipeName": "דגני בוקר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 776,
        "RecipeName": "טוסט גבינה צהובה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 775,
        "RecipeName": "יוגורט עם גרנולה ודבש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 793,
        "RecipeName": "כרובית מוקרמת בטחינה וצנוברים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 779,
        "RecipeName": "כריך עם גבינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 821,
        "RecipeName": "לקט להקפצה עם נודלס בטעם בוטנים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 822,
        "RecipeName": "לקט סיני מוקפץ",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 795,
        "RecipeName": "מאפה ברוקולי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 796,
        "RecipeName": "מאפה חגיגת ירקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 797,
        "RecipeName": "מרק ירקות ונענע עם לקט למרק עוף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 781,
        "RecipeName": "מרק ירקות, כוסמת וגריסים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 798,
        "RecipeName": "מרק לקוסקוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 770,
        "RecipeName": "מרק מינסטרונה משקית של סוגת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 771,
        "RecipeName": "מרק עגבניות עם אורז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 799,
        "RecipeName": "מרק שעועית, עגבניות ותרד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 827,
        "RecipeName": "סלט ארטישוק עם כוסברה, שום ולימון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 823,
        "RecipeName": "סלט חם של פול ובטטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 782,
        "RecipeName": "סלט כוסמת קר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 778,
        "RecipeName": "סלט עגבניות עם גבינה מלוחה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 828,
        "RecipeName": "סלט פול קר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 837,
        "RecipeName": "סלט פסטה מוקפץ",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 836,
        "RecipeName": "סלט פסטה עם טונה וגבינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 833,
        "RecipeName": "סלט פסטה קר עם עוף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 829,
        "RecipeName": "סלט קטניות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 784,
        "RecipeName": "סלט קינואה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 830,
        "RecipeName": "סלט שעועית לבנה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 831,
        "RecipeName": "סלט שעועית לבנה עם ביצים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 832,
        "RecipeName": "סלט תחתיות ארטישוק ועגבניות שרי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 824,
        "RecipeName": "פול ירוק עם תחתיות ארטישוק ופלפלים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 780,
        "RecipeName": "פיתה עם קוטג' ומלפפונים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 838,
        "RecipeName": "פסטה בטבעות בצל מטוגן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 835,
        "RecipeName": "פסטה בשמנת מתוקה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 794,
        "RecipeName": "פסטה עם ברוקולי ותירס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 769,
        "RecipeName": "פסטה עם גבינה בולגרית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 791,
        "RecipeName": "פשטידת כרובית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 790,
        "RecipeName": "פשטידת תירס בקלי קלות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 789,
        "RecipeName": "פשטידת תרד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 772,
        "RecipeName": "פתיתים עם ירקות של סנפרוסט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 800,
        "RecipeName": "צ'ילי מלקט מינסטרונה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 773,
        "RecipeName": "קוסקוס עם לקט ירקות לקוסקס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 785,
        "RecipeName": "קינואה ברוטב עגבניות וזיתים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 786,
        "RecipeName": "קינואה ועדשים ברוזמרין",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 787,
        "RecipeName": "קינואה עם בטטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 783,
        "RecipeName": "קינואה עם עגבניות ועשבי תיבול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 788,
        "RecipeName": "קינואה עם עדשים ושמיר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 834,
        "RecipeName": "רוטב מיונז לסלט פסטה קר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 825,
        "RecipeName": "שעועית ירוקה ברוטב עגבניות ובזיליקום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 802,
        "RecipeName": "שעועית עדינה עם נתחי פרגיות בשום וטימין",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 826,
        "RecipeName": "שעועית צהובה ברוטב עגבניות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 774,
        "RecipeName": "תפוחי אדמה עם פפריקה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 870,
        "RecipeName": "ספיחה ירושלית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 871,
        "RecipeName": "סלט ניסואז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 873,
        "RecipeName": "מרק תירס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 876,
        "RecipeName": "אורז עם חומוס מבושל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 879,
        "RecipeName": "קיש בצל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 916,
        "RecipeName": "אומלט בצל מטוגן וגבינה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 914,
        "RecipeName": "אומלט עשבי תיבול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 915,
        "RecipeName": "אומלט פטרוזיליה, גבינה בולגרית וזעתר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 923,
        "RecipeName": "אורז אחד אחד",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 883,
        "RecipeName": "אורז בסמטי מלא עם שיבולת שועל, עדשים ופירות יבשים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 903,
        "RecipeName": "אורז בשום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 897,
        "RecipeName": "אורז לבן זריז במיקרוגל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 912,
        "RecipeName": "אורז עם צימוקים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 899,
        "RecipeName": "אטריות סיניות מוקפצות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 922,
        "RecipeName": "אפונה סינית בשמן שומשום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 936,
        "RecipeName": "אצבעות בטטה מפולפלות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 928,
        "RecipeName": "בורגול",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 959,
        "RecipeName": "בייגלה ויוגורט - נשנוש אחר צהריים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 908,
        "RecipeName": "בראוניז במיקרוגל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 893,
        "RecipeName": "דייסת קוואקר",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 900,
        "RecipeName": "חומוס ביתי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 921,
        "RecipeName": "חזה עוף בלימון",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 929,
        "RecipeName": "חזה עוף בתבלינים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 892,
        "RecipeName": "כדורי בשר בפלפלים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 905,
        "RecipeName": "כדורי בשר ברוטב ים תיכוני",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 926,
        "RecipeName": "לביבות טונה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 891,
        "RecipeName": "מאפה תפוחי אדמה ובטטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 930,
        "RecipeName": "מאפינס תפוחים בלי תפוחים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 909,
        "RecipeName": "מרק ירקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 898,
        "RecipeName": "מרק עגבניות לילדים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 943,
        "RecipeName": "מרק פאפא פומודורו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 907,
        "RecipeName": "סלט חסה עם שומשום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 890,
        "RecipeName": "סלט ירוק עם אגוזי מלך",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 954,
        "RecipeName": "סלט ירקות בסיסי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 911,
        "RecipeName": "סלט עלי בייבי ברוטב חרדל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 937,
        "RecipeName": "עדשים שחורות עם ירקות שורש",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 913,
        "RecipeName": "עוגת שוקולד יומולדת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 920,
        "RecipeName": "פילה סלמון בציפוי שוםשום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 935,
        "RecipeName": "פיצה מהירה ללא שמרים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 938,
        "RecipeName": "פירה בטטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 924,
        "RecipeName": "פנה בולונז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 932,
        "RecipeName": "פנקייק תירס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 952,
        "RecipeName": "פנקייקס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 919,
        "RecipeName": "פסטה אפויה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 933,
        "RecipeName": "פסטה עם ברוקולי ועוף",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 934,
        "RecipeName": "פסטה עם עגניות ונקניקיות חריפות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 902,
        "RecipeName": "פשטידת אטריות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 953,
        "RecipeName": "פשטידת ירקות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 894,
        "RecipeName": "פשטידת פיצה מפסטה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 901,
        "RecipeName": "פשטידת תפוחי אדמה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 939,
        "RecipeName": "פתיתים אדומים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 925,
        "RecipeName": "פתיתים עם  פטנט",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 961,
        "RecipeName": "קורנפלקס ואקטימייל",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 927,
        "RecipeName": "קינואה מוקפצת",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 896,
        "RecipeName": "קציצות מטוגנות קלסיות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 931,
        "RecipeName": "קציצות עוף וכוסברה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 904,
        "RecipeName": "רוטב לקוסקוס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 895,
        "RecipeName": "רוטב עגבניות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 942,
        "RecipeName": "רוטב עגבניות קלאסי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 906,
        "RecipeName": "שעועית ירוקה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 918,
        "RecipeName": "שקשוקה גורמה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 910,
        "RecipeName": "תפוחי אדמה בשומשום",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 944,
        "RecipeName": " \tקדרת עוף, בשרים מעושנים וחומוס בנוסח ספרדי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 945,
        "RecipeName": "קדרת עוף, בשרים מעושנים וחומוס בנוסח ספרדי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 968,
        "RecipeName": "הפנקייק של הדס",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 946,
        "RecipeName": "עוגת גבינה של טלי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 948,
        "RecipeName": "עוגת שוקולד (קובי)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 958,
        "RecipeName": "עוגת כדורי שוקולד - קרין גורן",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 969,
        "RecipeName": "Oliv'e",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2104,
        "RecipeName": "jחביתה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 981,
        "RecipeName": "חטיף פצפוצי אורז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 980,
        "RecipeName": "חלה קומותיים מתוקה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 979,
        "RecipeName": "עוגת תפוזים אוורירית",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 990,
        "RecipeName": "מתכון עוף בשקית \"קוקי\"",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 991,
        "RecipeName": "עוף באננס וקולה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1036,
        "RecipeName": "עוגת נס קפה",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 1037,
        "RecipeName": "קציצות ירק",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2058,
        "RecipeName": "רוטב בר בי קיו",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2059,
        "RecipeName": "פתיתים של שי",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2079,
        "RecipeName": "אורז מלא עם פלפלים",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2080,
        "RecipeName": "גריסי פנינה עם בטטות",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2085,
        "RecipeName": "ריבועי פצפוצי אורז",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2086,
        "RecipeName": "קרקרים פשתן (מס'1)",
        "Ingrediants": null,
        "PreparationMethod": null
    },
    {
        "RecipeId": 2094,
        "RecipeName": "סלט טאבולה עם כרובית, חמוציות ופיצוחים",
        "Ingrediants": null,
        "PreparationMethod": null
    }
]