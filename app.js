/* ==========================================================================
   MENU DATASET (SAMPLE ITEMS & CATEGORIES)
   ========================================================================== */
const CATEGORIES = [
    { id: 'hot-drinks', title: { tr: 'Sıcak İçecekler', en: 'Hot Drinks', ar: 'مشروبات ساخنة' }, image: 'assets/images/cat_hot_drinks.png' },
    { id: 'cold-drinks', title: { tr: 'Soğuk İçecekler', en: 'Cold Drinks', ar: 'مشروبات باردة' }, image: 'assets/images/cat_cold_drinks.png' },
    { id: 'coffees', title: { tr: 'Kahveler', en: 'Coffees', ar: 'قهوة' }, image: 'assets/images/cat_coffees.png' },
    { id: 'dondurma', title: { tr: 'Dondurma', en: 'Ice Cream', ar: 'آيس كريم' }, image: 'assets/images/cat_ice_creams.png' },
    { id: 'snacks', title: { tr: 'Atıştırmalıklar', en: 'Snacks', ar: 'وجبات خفيفة' }, image: 'assets/images/cat_snacks.png' },
    { id: 'main-dishes', title: { tr: 'Ana Yemekler', en: 'Main Dishes', ar: 'أطباق رئيسية' }, image: 'assets/images/cat_main_dishes.png' }
];

const MENU_ITEMS = [
    // Sıcak İçecekler (hot-drinks)
    {
        id: 'turkish-tea',
        category: 'hot-drinks',
        title: { tr: 'Çay', en: 'Tea', ar: 'شاي' },
        price: 50,
        description: {
            tr: 'Taze demlenmiş geleneksel ince belli bardakta çay.',
            en: 'Freshly brewed traditional tea served in a tulip glass.',
            ar: 'شاي مخمر طازجاً، يقدم في كأس الشاي التقليدي.'
        },
        image: 'assets/images/hero_bg.png',
        popular: true,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 2,
        weight: '100ml'
    },

    {
        id: 'rosehip-tea',
        category: 'hot-drinks',
        title: { tr: 'Kuşburnu Çayı', en: 'Rosehip Tea', ar: 'شاي ثمر الورد' },
        price: 50,
        description: {
            tr: 'Doğal kuşburnu meyvelerinden demlenmiş vitamin deposu sıcak çay.',
            en: 'Steeped rosehip tea, rich in vitamins.',
            ar: 'شاي ثمر الورد الطبيعي الساخن والغني بالفيتامينات.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 25,
        weight: '200ml'
    },
    {
        id: 'black-mulberry-tea',
        category: 'hot-drinks',
        title: { tr: 'Karadut Çayı', en: 'Black Mulberry Tea', ar: 'شاي التوت الأسود' },
        price: 50,
        description: {
            tr: 'Sıcak servis edilen nefis karadut çayı.',
            en: 'Delicious hot black mulberry infusion.',
            ar: 'شاي التوت الأسود اللذيذ الذي يقدم ساخناً.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خalٍ من الغلوتين'] },
        calories: 35,
        weight: '200ml'
    },
    {
        id: 'oralet',
        category: 'hot-drinks',
        title: { tr: 'Oralet', en: 'Oralet (Fruit Drink)', ar: 'أوراليت' },
        price: 50,
        description: {
            tr: 'Portakal, kivi veya limon aromalı geleneksel sıcak meyve granülü içeceği.',
            en: 'Traditional Turkish hot granulated fruit drink (orange, kiwi or lemon flavor).',
            ar: 'شراب حبيبات الفاكهة الساخن التقليدي بنكهة البرتقال، الكيوي أو الليمون.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 45,
        weight: '150ml'
    },
    {
        id: 'apple-tea',
        category: 'hot-drinks',
        title: { tr: 'Elmalı Çay', en: 'Apple Tea', ar: 'شاي التفاح' },
        price: 50,
        description: {
            tr: 'Kurutulmuş elma parçaları ve tarçın aromalı sıcak çay.',
            en: 'Aromatic hot tea with dried apple pieces and cinnamon.',
            ar: 'شاي ساخن عطري مع قطع التفاح المجفف ونكهة القرفة.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 30,
        weight: '200ml'
    },
    {
        id: 'mint-lemon-tea',
        category: 'hot-drinks',
        title: { tr: 'Nane Limon Aromalı Çay', en: 'Mint Lemon Flavoured Tea', ar: 'شاي بنكهة النعناع والليمون' },
        price: 50,
        description: {
            tr: 'Tazeleyici nane yaprakları ve limon aromalı sıcak bitki çayı.',
            en: 'Soothing herbal tea with refreshing mint and lemon flavor.',
            ar: 'شاي أعشاب ساخن مهدئ بنكهة النعناع والليمون المنعشة.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 15,
        weight: '200ml'
    },
    {
        id: 'kiwi-tea',
        category: 'hot-drinks',
        title: { tr: 'Kivi Çayı', en: 'Kiwi Tea', ar: 'شاي الكيوي' },
        price: 50,
        description: {
            tr: 'Egzotik kivi aromalı sıcak meyve çayı.',
            en: 'Hot fruit tea infused with exotic kiwi flavor.',
            ar: 'شاي فواكه ساخن بنكهة الكيوي الاستوائية.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 30,
        weight: '200ml'
    },
    {
        id: 'orange-tea',
        category: 'hot-drinks',
        title: { tr: 'Portakal Çayı', en: 'Orange Tea', ar: 'شاي البرتقال' },
        price: 50,
        description: {
            tr: 'Taze portakal kabukları ve aromasıyla hazırlanan sıcak meyve çayı.',
            en: 'Hot fruit tea brewed with orange peel and citrus flavor.',
            ar: 'شاي فواكه ساخن محضر من قشور البرتقال ونكهة الحمضيات.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 30,
        weight: '200ml'
    },
    {
        id: 'lemon-tea-hot',
        category: 'hot-drinks',
        title: { tr: 'Limon Çayı', en: 'Lemon Tea', ar: 'شاي الليمون' },
        price: 50,
        description: {
            tr: 'Limon dilimleri ve taze aromalı sıcak çay.',
            en: 'Steaming hot black tea served with lemon slices.',
            ar: 'شاي أسود ساخن يقدم مع شرائح الليمون الطازجة.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 10,
        weight: '200ml'
    },
    {
        id: 'blueberry-tea',
        category: 'hot-drinks',
        title: { tr: 'Yaban Mersini Çayı', en: 'Blueberry Tea', ar: 'شاي التوت الأزرق' },
        price: 50,
        description: {
            tr: 'Yaban mersini aromalı ve meyveli sıcak çay.',
            en: 'Rich hot tea infused with delicious wild blueberry flavor.',
            ar: 'شاي ساخن غني بنكهة التوت الأزرق البري اللذيذة.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 35,
        weight: '200ml'
    },
    {
        id: 'milk-cocoa',
        category: 'hot-drinks',
        title: { tr: 'Sütlü Kakao', en: 'Milk Cocoa', ar: 'كاكاو بالحليب' },
        price: 50,
        description: {
            tr: 'Taze sıcak süt ve kaliteli kakao tozunun tatlı buluşması.',
            en: 'Warm fresh milk blended with quality cocoa powder.',
            ar: 'حليب دافئ طازج ممزوج بمسحوق الكاكاو عالي الجودة.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: ['Süt Ürünü'], en: ['Dairy'], ar: ['منتجات الألبان'] },
        dietary: { tr: ['Glütensiz'], en: ['Gluten-Free'], ar: ['خالٍ من الغلوتين'] },
        calories: 180,
        weight: '250ml'
    },
    {
        id: 'banana-milk',
        category: 'hot-drinks',
        title: { tr: 'Sütlü Muz', en: 'Banana Milk', ar: 'حليب بالموز' },
        price: 50,
        description: {
            tr: 'Taze muz ve sıcak sütün lezzetli birleşimi.',
            en: 'A delicious blend of fresh banana and warm milk.',
            ar: 'مزيج لذيذ من الموز الطازج والحليب الدافئ.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: ['Süt Ürünü'], en: ['Dairy'], ar: ['منتجات الألبان'] },
        dietary: { tr: ['Glütensiz'], en: ['Gluten-Free'], ar: ['خالٍ من الغلوتين'] },
        calories: 150,
        weight: '250ml'
    },
    {
        id: 'cocktail-drink',
        category: 'hot-drinks',
        title: { tr: 'Kokteyl Aromalı İçecek', en: 'Cocktail Flavored Drink', ar: 'مشروب بنكهة الكوكتيل' },
        price: 50,
        description: {
            tr: 'Çeşitli meyvelerle hazırlanmış alkolsüz sıcak kokteyl aromalı içecek.',
            en: 'Alcohol-free hot cocktail flavored drink with mixed fruit flavors.',
            ar: 'مشروب ساخن بنكهة الكوكتيل خالٍ من الكحول محضر من فواكه متنوعة.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 110,
        weight: '330ml'
    },

    // Soğuk İçecekler (cold-drinks)

    {
        id: 'cola',
        category: 'cold-drinks',
        title: { tr: 'Kola', en: 'Coca-Cola', ar: 'كوكا كولا' },
        price: 100,
        description: {
            tr: 'Buz gibi serinletici kutu kola.',
            en: 'Ice-cold refreshing classic Coca-Cola can.',
            ar: 'علبة كوكا كولا كلاسيكية باردة ومنعشة.'
        },
        image: 'assets/images/hero_bg.png',
        popular: true,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 140,
        weight: '330ml'
    },
    {
        id: 'fanta',
        category: 'cold-drinks',
        title: { tr: 'Fanta', en: 'Fanta', ar: 'فانتا' },
        price: 100,
        description: {
            tr: 'Buz gibi serinletici portakal aromalı Fanta.',
            en: 'Ice-cold orange flavored sparkling Fanta.',
            ar: 'فانتا فوارة باردة ومنعشة بنكهة البرتقال.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خalٍ من الغلوتين'] },
        calories: 145,
        weight: '330ml'
    },
    {
        id: 'soda',
        category: 'cold-drinks',
        title: { tr: 'Soda', en: 'Mineral Water', ar: 'مياه معدنية فوارة' },
        price: 50,
        description: {
            tr: 'Doğal mineralli maden suyu.',
            en: 'Natural mineral sparkling water.',
            ar: 'مياه معدنية طبيعية فوارة.'
        },
        image: 'assets/images/hero_bg.png',
        popular: true,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 0,
        weight: '200ml'
    },
    {
        id: 'water',
        category: 'cold-drinks',
        title: { tr: 'Su', en: 'Water', ar: 'ماء' },
        price: 20,
        description: {
            tr: 'Şişe doğal kaynak suyu.',
            en: 'Chilled natural spring water bottle.',
            ar: 'زجاجة مياه معدنية طبيعية باردة.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 0,
        weight: '500ml'
    },
    {
        id: 'limonc',
        category: 'cold-drinks',
        title: { tr: 'Limonata', en: 'Lemonade', ar: 'ليموناضة' },
        price: 120,
        description: {
            tr: 'Ev yapımı taze limonata.',
            en: 'Refreshing homemade fresh lemonade.',
            ar: 'ليموناضة طازجة منزلية الصنع ومنعشة.'
        },
        image: 'assets/images/hero_bg.png',
        popular: true,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 120,
        weight: '300ml'
    },


    // Kahveler (coffees)
    {
        id: 'turkish-coffee',
        category: 'coffees',
        title: { tr: 'Türk Kahvesi', en: 'Turkish Coffee', ar: 'قهوة تركية' },
        price: 150,
        description: {
            tr: 'Geleneksel Türk kahvesi, lokum eşliğinde.',
            en: 'Traditional Turkish coffee served with Turkish delight.',
            ar: 'قهوة تركية تقليدية تقدم مع الحلقوم التركي اللذيذ.'
        },
        image: 'assets/images/turkish_coffee.png',
        popular: true,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 15,
        weight: '70ml'
    },
    {
        id: 'nescafe',
        category: 'coffees',
        title: { tr: 'Special Nesscafee', en: 'Nescafe', ar: 'نسكافيه' },
        price: 100,
        description: {
            tr: 'Sıcak su veya süt ile hazırlanan hazır kahve.',
            en: 'Instant coffee prepared with hot water or milk.',
            ar: 'قهوة سريعة الذوبان تحضر بالماء الساخن أو الحليب.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 2,
        weight: '200ml'
    },
    {
        id: 'cappuccino',
        category: 'coffees',
        title: { tr: 'Cappuccino', en: 'Cappuccino', ar: 'كابوتشينو' },
        price: 100,
        description: {
            tr: 'Espresso, sıcak süt ve bol süt köpüğü.',
            en: 'Espresso with steamed milk and rich milk foam.',
            ar: 'إسبريسو مع الحليب المبخر ورغوة الحليب الغنية.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: ['Süt Ürünü'], en: ['Dairy'], ar: ['منتجات الألبان'] },
        dietary: { tr: ['Glütensiz'], en: ['Gluten-Free'], ar: ['خالٍ من الغلوتين'] },
        calories: 120,
        weight: '250ml'
    },
    {
        id: 'two-in-one',
        category: 'coffees',
        title: { tr: 'İkisi Bir Arada Nescafe', en: '2-in-1 Coffee', ar: 'قهوة ٢ في ١' },
        price: 75,
        description: {
            tr: 'Kahve ve krema karışımı şekersiz hazır kahve.',
            en: 'Sugar-free instant coffee blend with creamer.',
            ar: 'مزيج قهوة سريعة الذوبان خالية من السكر مع مبيض القهوة.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: ['Süt Ürünü'], en: ['Dairy'], ar: ['منتجات الألبan'] },
        dietary: { tr: ['Glütensiz'], en: ['Gluten-Free'], ar: ['خالٍ من الغلوتين'] },
        calories: 50,
        weight: '150ml'
    },
    {
        id: 'three-in-one',
        category: 'coffees',
        title: { tr: 'Üçü Bir Arada Nescafe', en: '3-in-1 Coffee', ar: 'قهوة ٣ في ١' },
        price: 75,
        description: {
            tr: 'Kahve, krema ve şeker içeren hazır kahve.',
            en: 'Sweet instant coffee blend with creamer and sugar.',
            ar: 'مزيج قهوة سريعة الذوبان حلوة المذاق مع مبيض القهوة والسكر.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: ['Süt Ürünü'], en: ['Dairy'], ar: ['منتجات الألبان'] },
        dietary: { tr: ['Glütensiz'], en: ['Gluten-Free'], ar: ['خالٍ من الغلوتين'] },
        calories: 75,
        weight: '150ml'
    },
    {
        id: 'sutlu-kopuklu-three-in-one',
        category: 'coffees',
        title: { tr: 'Sütlü Köpüklü 3ü 1 Arada', en: 'Foamy 3-in-1 Coffee with Milk', ar: 'قهوة ٣ في ١ رغوية بالحليب' },
        price: 75,
        description: {
            tr: 'Bol köpüklü, sütlü ve tatlı hazır kahve keyfi.',
            en: 'Rich foamy instant coffee with milk and sugar.',
            ar: 'قهوة سريعة الذوبان غنية بالرغوة مع الحليب والسكر.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: ['Süt Ürünü'], en: ['Dairy'], ar: ['منتجات الألبان'] },
        calories: 85,
        weight: '150ml'
    },
    {
        id: 'sutlu-kopuklu-two-in-one',
        category: 'coffees',
        title: { tr: 'Sütlü Köpüklü 2si 1 Arada', en: 'Foamy 2-in-1 Coffee with Milk', ar: 'قهوة ٢ في ١ رغوية بالحليب' },
        price: 75,
        description: {
            tr: 'Şekersiz, bol köpüklü ve sütlü hazır kahve lezzeti.',
            en: 'Sugar-free foamy instant coffee with milk.',
            ar: 'قهوة سريعة الذوبان خالية من السكر وغنية بالرغوة مع الحليب.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: ['Süt Ürünü'], en: ['Dairy'], ar: ['منتجات الألبan'] },
        calories: 60,
        weight: '150ml'
    },


    // Atıştırmalıklar (snacks)
    {
        id: 'toast',
        category: 'snacks',
        title: { tr: 'Tost (Karışık)', en: 'Toasted Sandwich (Cheese / Mixed)', ar: 'توست محمص (جبنة / مشكل)' },
        price: 250,
        description: {
            tr: 'Çıtır ekmek arasında kaşar peyniri ve sucuk.',
            en: 'Toasted sandwich filled with melted cheddar and Turkish sausage.',
            ar: 'توست محمص محشو بالجبنة الذائبة والسجق التركي.'
        },
        image: 'assets/images/avocado_toast.png',
        popular: true,
        allergens: { tr: ['Glüten', 'Süt Ürünü'], en: ['Gluten', 'Dairy'], ar: ['الغلوتين', 'منتجات الألبان'] },
        dietary: { tr: [], en: [], ar: [] },
        calories: 340,
        weight: '180g'
    },
    {
        id: 'toast',
        category: 'snacks',
        title: { tr: 'Tost (Kaşarlı )', en: 'Toasted Sandwich (Cheese / Mixed)', ar: 'توست محمص (جبنة / مشكل)' },
        price: 200,
        description: {
            tr: 'Çıtır ekmek arasında kaşar peyniri ve sucuk.',
            en: 'Toasted sandwich filled with melted cheddar and Turkish sausage.',
            ar: 'توست محمص محشو بالجبنة الذائبة والسجق التركي.'
        },
        image: 'assets/images/avocado_toast.png',
        popular: true,
        allergens: { tr: ['Glüten', 'Süt Ürünü'], en: ['Gluten', 'Dairy'], ar: ['الغلوتين', 'منتجات الألبان'] },
        dietary: { tr: [], en: [], ar: [] },
        calories: 340,
        weight: '180g'
    },
    {
        id: 'french-fries',
        category: 'snacks',
        title: { tr: 'Patates Cipsi', en: 'Potato Chips (French Fries)', ar: 'بطاطس مقلية (شيبس)' },
        price: 150,
        description: {
            tr: 'Çıtır sıcak patates cipsi kızartması.',
            en: 'Crispy hot golden potato chips / French fries.',
            ar: 'رقائق البطاطس المقلية المقرمشة والساخنة.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: [], en: [], ar: [] },
        dietary: { tr: ['Vegan', 'Glütensiz'], en: ['Vegan', 'Gluten-Free'], ar: ['نباتي', 'خالٍ من الغلوتين'] },
        calories: 220,
        weight: '150g'
    },

    // Ana Yemekler (main-dishes)
    {
        id: 'sucuk-sandwich',
        category: 'main-dishes',
        title: { tr: 'Sucuk Ekmek', en: 'Sucuk Sandwich', ar: 'ساندويش السجق التركي' },
        price: 350,
        description: {
            tr: 'Izgara sucuk dilimleri, domates ve biber ile ekmek arası lezzet.',
            en: 'Grilled Turkish sausage slices in warm bread with tomatoes and peppers.',
            ar: 'شرائح السجق التركي المشوي في خبز دافئ مع الطماطم والفلفل.'
        },
        image: 'assets/images/hero_bg.png',
        popular: true,
        allergens: { tr: ['Glüten'], en: ['Gluten'], ar: ['الغلوتين'] },
        dietary: { tr: [], en: [], ar: [] },
        calories: 410,
        weight: '200g'
    },
    {
        id: 'kofte-ekmek',
        category: 'main-dishes',
        title: { tr: 'Köfte Ekmek', en: 'Meatball Sandwich', ar: 'ساندويش كفتة' },
        price: 350,
        description: {
            tr: 'Izgara nefis ev yapımı köfteler, domates, marul ve soğan ile ekmek arası lezzet.',
            en: 'Delicious grilled homemade meatballs in warm bread with tomatoes, lettuce, and onions.',
            ar: 'كرات لحم مشوية لذيذة محلية الصنع في خبز دافئ مع الطماطم والخس والبصل.'
        },
        image: 'assets/images/hero_bg.png',
        popular: true,
        allergens: { tr: ['Glüten'], en: ['Gluten'], ar: ['الغلوتين'] },
        calories: 450,
        weight: '220g'
    }, {
        id: 'ev-yapimi-hamburger',
        category: 'main-dishes',
        title: { tr: 'Ev Yapımı Hamburger', en: 'Homemade Hamburger', ar: 'برجر منزلي الصنع' },
        price: 400,
        description: {
            tr: 'Özel sosu, karamelize soğan, cheddar peyniri, domates ve turşu ile hazırlanan ev yapımı hamburger, patates kızartması ile.',
            en: 'Homemade burger with special sauce, caramelized onions, cheddar cheese, tomato, and pickles, served with French fries.',
            ar: 'برجر منزلي الصنع مع صلصة خاصة، بصل مكرمل، جبن شيدر، طماطم ومخلل، يقدم مع البطاطس المقلية.'
        },
        image: 'assets/images/hero_bg.png',
        popular: true,
        allergens: { tr: ['Glüten', 'Süt Ürünü'], en: ['Gluten', 'Dairy'], ar: ['الغلوتين', 'منتجات الألبان'] },
        calories: 620,
        weight: '350g'
    },
    {
        id: 'fish-sandwich',
        category: 'main-dishes',
        title: { tr: 'Balık Ekmek', en: 'Fish Sandwich', ar: 'ساندويش السمك' },
        price: 250,
        description: {
            tr: 'Izgara taze balık filetosu, yeşillik ve soğan ile ekmek arası lezzet.',
            en: 'Grilled fresh fish fillet served in bread with lettuce and onions.',
            ar: 'فيليه السمك الطازج المشوي يقدم في خبز دافئ مع الخس والبصل.'
        },
        image: 'assets/images/hero_bg.png',
        popular: true,
        allergens: { tr: ['Glüten', 'Balık'], en: ['Gluten', 'Fish'], ar: ['الغلوتين', 'السمك'] },
        dietary: { tr: [], en: [], ar: [] },
        calories: 390,
        weight: '250g'
    },
    {
        id: 'fish-wrap',
        category: 'main-dishes',
        title: { tr: 'Balık Dürüm', en: 'Fish Wrap', ar: 'لفافة السمك' },
        price: 300,
        description: {
            tr: 'Lavaş ekmeğine sarılı özel soslu ızgara balık dürüm.',
            en: 'Grilled fish fillet with special sauce wrapped in flatbread.',
            ar: 'فيليه السمك المشوي مع صلصة خاصة ملفوف في خبز الصاج.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: ['Glüten', 'Balık'], en: ['Gluten', 'Fish'], ar: ['الغلوتين', 'السمك'] },
        dietary: { tr: [], en: [], ar: [] },
        calories: 420,
        weight: '220g'
    },
    {
        id: 'stuffed-mussels',
        category: 'main-dishes',
        title: { tr: 'Midye Dolma (Adet fiyatı)', en: 'Stuffed Mussels', ar: 'بلح البحر المحشي' },
        price: 25,
        description: {
            tr: 'Baharatlı pirinç dolgulu taze midye dolma.',
            en: 'Fresh mussels stuffed with seasoned aromatic rice and lemon.',
            ar: 'بلح البحر الطازج المحشو بالأرز المتبل والليمون.'
        },
        image: 'assets/images/hero_bg.png',
        popular: false,
        allergens: { tr: ['Yumuşakçalar'], en: ['Molluscs'], ar: ['الرخويات'] },
        dietary: { tr: ['Glütensiz'], en: ['Gluten-Free'], ar: ['خالٍ من الغلوتين'] },
        calories: 150,
        weight: '200g'
    }
];

const state = {
    language: localStorage.getItem('menu_lang') || 'tr',
    theme: localStorage.getItem('menu_theme') || 'dark',
    favorites: JSON.parse(localStorage.getItem('menu_favs')) || [],
    currentCategory: '',
    currentView: 'home', // 'home' or 'category'
};

const elements = {
    body: document.body,
    stickyHeader: document.getElementById('sticky-header'),
    appContainer: document.getElementById('app-container'),
    categoriesSection: document.getElementById('categories-section'),
    categoriesGrid: document.getElementById('categories-grid'),
    categoryDetailView: document.getElementById('category-detail-view'),
    activeCategoryTitle: document.getElementById('active-category-title'),
    stickyCategoryTabs: document.getElementById('sticky-category-tabs'),
    categoryItemsList: document.getElementById('category-items-list'),
    btnBackHome: document.getElementById('btn-back-home'),

    // Header controls
    langBtns: document.querySelectorAll('.lang-btn'),
    toggleThemeBtn: document.querySelector('.toggle-theme'),

    // Modals
    searchModal: document.getElementById('search-modal'),
    surveyModal: document.getElementById('survey-modal'),
    locationModal: document.getElementById('location-modal'),
    itemDetailModal: document.getElementById('item-detail-modal'),

    // Search elements
    searchInput: document.getElementById('search-input'),
    searchResults: document.getElementById('search-results'),

    // Survey elements
    surveyForm: document.getElementById('survey-form'),
    starRating: document.getElementById('star-rating'),
    selectedRating: document.getElementById('selected-rating'),

    // Item details
    detailImage: document.getElementById('detail-item-image'),
    detailFavBtn: document.getElementById('detail-fav-btn'),
    detailTitle: document.getElementById('detail-item-title'),
    detailPrice: document.getElementById('detail-item-price'),
    detailDesc: document.getElementById('detail-item-description'),
    detailAllergensSection: document.getElementById('metadata-allergens-section'),
    detailAllergens: document.getElementById('detail-item-allergens'),
    detailCaloriesSection: document.getElementById('metadata-calories'),
    detailCalories: document.getElementById('detail-item-calories'),
    detailWeightSection: document.getElementById('metadata-weight'),
    detailWeight: document.getElementById('detail-item-weight'),

    // Toast
    toast: document.getElementById('toast-notification'),
    toastText: document.getElementById('toast-text'),
};

function t(obj) {
    if (!obj) return '';
    return obj[state.language] || obj['tr'] || '';
}

function updateUILanguage() {
    // Update text direction based on selected language
    if (state.language === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.classList.add('rtl-mode');
    } else {
        document.documentElement.removeAttribute('dir');
        document.documentElement.classList.remove('rtl-mode');
    }

    // Update simple translations of HTML tags containing data-tr / data-en / data-ar
    document.querySelectorAll('[data-tr]').forEach(el => {
        const trVal = el.getAttribute('data-tr');
        const enVal = el.getAttribute('data-en');
        const arVal = el.getAttribute('data-ar') || enVal;

        if (state.language === 'tr') {
            el.textContent = trVal;
        } else if (state.language === 'en') {
            el.textContent = enVal;
        } else if (state.language === 'ar') {
            el.textContent = arVal;
        }
    });

    // Update input placeholders
    document.querySelectorAll('[data-placeholder-tr]').forEach(input => {
        const trPl = input.getAttribute('data-placeholder-tr');
        const enPl = input.getAttribute('data-placeholder-en');
        const arPl = input.getAttribute('data-placeholder-ar') || enPl;

        if (state.language === 'tr') {
            input.placeholder = trPl;
        } else if (state.language === 'en') {
            input.placeholder = enPl;
        } else if (state.language === 'ar') {
            input.placeholder = arPl;
        }
    });

    // Language button active classes
    elements.langBtns.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        btn.classList.toggle('active', btnLang === state.language);
    });

    // Rerender lists
    if (state.currentView === 'home') {
        renderCategoriesGrid();
    } else {
        renderCategoryDetailView(state.currentCategory);
    }
}

/* ==========================================================================
   THEME HELPER
   ========================================================================== */
function applyTheme() {
    if (state.theme === 'light') {
        elements.body.classList.remove('dark-theme');
        elements.body.classList.add('light-theme');
        elements.toggleThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        elements.body.classList.remove('light-theme');
        elements.body.classList.add('dark-theme');
        elements.toggleThemeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

/* ==========================================================================
   TOAST HELPER
   ========================================================================== */
function showToast(message) {
    elements.toastText.textContent = message;
    elements.toast.classList.remove('hidden');

    // Trigger slide up animation
    setTimeout(() => {
        elements.toast.classList.add('hidden');
    }, 2500);
}

/* ==========================================================================
   FAVORITES LOGIC (LOCAL STORAGE)
   ========================================================================== */
function toggleFavorite(itemId, event) {
    if (event) event.stopPropagation(); // prevent card click triggers

    const index = state.favorites.indexOf(itemId);
    if (index > -1) {
        state.favorites.splice(index, 1);
        showToast(state.language === 'tr' ? 'Sık kullanılanlardan çıkarıldı.' : (state.language === 'ar' ? 'تمت الإزالة من المفضلة.' : 'Removed from popular.'));
    } else {
        state.favorites.push(itemId);
        showToast(state.language === 'tr' ? 'Sık kullanılanlara eklendi!' : (state.language === 'ar' ? 'تمت الإضافة إلى المفضلة!' : 'Added to popular!'));
    }

    localStorage.setItem('menu_favs', JSON.stringify(state.favorites));

    // Refresh visual state
    if (state.currentView === 'category') {
        // Refresh cards hearts without full reload
        document.querySelectorAll(`.item-card-fav-btn[data-id="${itemId}"]`).forEach(btn => {
            btn.classList.toggle('active', state.favorites.includes(itemId));
            btn.innerHTML = state.favorites.includes(itemId) ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
        });
    }

    // Sync detail modal favorite button icon if open
    if (!elements.itemDetailModal.classList.contains('collapsed')) {
        const detailFavIcon = elements.detailFavBtn.querySelector('i');
        const isActive = state.favorites.includes(itemId);
        elements.detailFavBtn.classList.toggle('active', isActive);
        if (detailFavIcon) {
            detailFavIcon.className = isActive ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
        }
    }
}

/* ==========================================================================
   RENDERING METHODS
   ========================================================================== */

// 1. Categories Grid
function renderCategoriesGrid() {
    elements.categoriesGrid.innerHTML = '';
    CATEGORIES.forEach(cat => {
        const item = document.createElement('div');
        item.className = 'menu-grid-item';
        item.style.backgroundImage = `url('${cat.image}')`;
        item.addEventListener('click', () => switchView('category', cat.id));

        item.innerHTML = `
            <div class="black-box"></div>
            <span class="text-box">${t(cat.title)}</span>
        `;
        elements.categoriesGrid.appendChild(item);
    });
}


// 3. Category Detail view
function renderCategoryDetailView(catId) {
    const activeCategory = CATEGORIES.find(c => c.id === catId);
    if (!activeCategory) return;

    elements.activeCategoryTitle.textContent = t(activeCategory.title);

    // Render horizontal sliding tabs
    renderStickyCategoryTabs(catId);

    // Render products list of this category
    elements.categoryItemsList.innerHTML = '';
    const categoryItems = MENU_ITEMS.filter(item => item.category === catId);

    if (categoryItems.length === 0) {
        const emptyMsg = state.language === 'tr'
            ? 'Bu kategoriye ait ürün bulunamadı.'
            : (state.language === 'ar' ? 'لم يتم العثور على منتجات في هذا القسم.' : 'No items found in this category.');
        elements.categoryItemsList.innerHTML = `
            <p class="text-center" style="padding:40px; color:var(--text-muted);" 
               data-tr="Bu kategoriye ait ürün bulunamadı." 
               data-en="No items found in this category."
               data-ar="لم يتم العثور على منتجات في هذا القسم.">
               ${emptyMsg}
            </p>
        `;
        return;
    }

    categoryItems.forEach(item => {
        const isFav = state.favorites.includes(item.id);
        const card = document.createElement('div');
        card.className = 'item-card';
        card.addEventListener('click', () => openDetailModal(item.id));

        card.innerHTML = `
            <img class="item-card-image" src="${item.image}" alt="${t(item.title)}" onerror="this.onerror=null; this.src='assets/images/hero_bg.png';">
            <div class="item-card-info">
                <div class="item-card-header">
                    <h4 class="item-card-title">${t(item.title)}</h4>
                    <span class="item-card-price">${item.price} TL</span>
                </div>
                <p class="item-card-desc">${t(item.description)}</p>
                <div class="item-card-footer">
                    <div class="item-card-tags"></div>
                    <button class="item-card-fav-btn ${isFav ? 'active' : ''}" data-id="${item.id}" aria-label="Add Favorite">
                        <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                </div>
            </div>
        `;

        // Bind favorite click handler separately to stop propagation
        const favBtn = card.querySelector('.item-card-fav-btn');
        favBtn.addEventListener('click', (e) => toggleFavorite(item.id, e));

        elements.categoryItemsList.appendChild(card);
    });
}

// 4. Sticky Switch Tabs on top
function renderStickyCategoryTabs(activeId) {
    elements.stickyCategoryTabs.innerHTML = '';
    CATEGORIES.forEach(cat => {
        const tab = document.createElement('button');
        tab.className = `category-tab ${cat.id === activeId ? 'active' : ''}`;
        tab.textContent = t(cat.title);
        tab.addEventListener('click', () => {
            state.currentCategory = cat.id;
            renderCategoryDetailView(cat.id);
            // Scroll category tabs to center target tab
            tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
        elements.stickyCategoryTabs.appendChild(tab);
    });

    // Find active tab and center scroll to it
    setTimeout(() => {
        const activeTab = elements.stickyCategoryTabs.querySelector('.active');
        if (activeTab) {
            activeTab.scrollIntoView({ inline: 'center', block: 'nearest' });
        }
    }, 100);
}

/* ==========================================================================
   VIEW TRANSITION (SPA NAV)
   ========================================================================== */
function switchView(viewName, catId = '') {
    state.currentView = viewName;

    if (viewName === 'home') {
        elements.categoriesSection.classList.remove('hidden');
        elements.categoryDetailView.classList.add('hidden');

        // Reset scroll position
        window.scrollTo({ top: 0, behavior: 'instant' });

        // Sync scroll header classes
        elements.stickyHeader.classList.remove('not-showing');
    } else if (viewName === 'category') {
        state.currentCategory = catId;

        elements.categoriesSection.classList.add('hidden');
        elements.categoryDetailView.classList.remove('hidden');

        // Scroll detail view into focus
        elements.categoryDetailView.scrollIntoView({ behavior: 'smooth' });

        renderCategoryDetailView(catId);
    }
}

/* ==========================================================================
   MODAL CONTROLS
   ========================================================================== */
function openModal(modalEl) {
    modalEl.classList.remove('collapsed');
    elements.body.style.overflow = 'hidden'; // prevent backdrop scrolling
}

function closeModal(modalEl) {
    modalEl.classList.add('collapsed');

    // Restore scrolling only if no other modal is open
    const openModals = document.querySelectorAll('.modal-container:not(.collapsed)');
    if (openModals.length === 0) {
        elements.body.style.overflow = '';
    }
}

// Item Details Modal Fill
function openDetailModal(itemId) {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;

    // Set text contents
    elements.detailImage.src = item.image;
    elements.detailTitle.textContent = t(item.title);
    elements.detailPrice.textContent = `${item.price} TL`;
    elements.detailDesc.textContent = t(item.description);

    // Favorites button visual sync
    const isFav = state.favorites.includes(item.id);
    elements.detailFavBtn.classList.toggle('active', isFav);
    elements.detailFavBtn.querySelector('i').className = isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart';

    // Remove old event listener from fav button and add a new one
    const newFavBtn = elements.detailFavBtn.cloneNode(true);
    elements.detailFavBtn.parentNode.replaceChild(newFavBtn, elements.detailFavBtn);
    elements.detailFavBtn = newFavBtn;
    elements.detailFavBtn.addEventListener('click', () => toggleFavorite(item.id));

    // Allergens rendering
    if (item.allergens && item.allergens.tr && item.allergens.tr.length > 0) {
        elements.detailAllergensSection.classList.remove('hidden');
        elements.detailAllergens.innerHTML = '';
        item.allergens.tr.forEach((all, i) => {
            const span = document.createElement('span');
            span.className = 'allergen-tag';
            span.textContent = state.language === 'tr' ? all : (state.language === 'ar' ? (item.allergens.ar ? item.allergens.ar[i] : item.allergens.en[i]) : item.allergens.en[i]);
            elements.detailAllergens.appendChild(span);
        });
    } else {
        elements.detailAllergensSection.classList.add('hidden');
    }


    // Calorie rendering
    if (item.calories) {
        elements.detailCaloriesSection.classList.remove('hidden');
        elements.detailCalories.textContent = `${item.calories} kcal`;
    } else {
        elements.detailCaloriesSection.classList.add('hidden');
    }

    // Weight/Volume rendering
    if (item.weight) {
        elements.detailWeightSection.classList.remove('hidden');
        elements.detailWeight.textContent = item.weight;
    } else {
        elements.detailWeightSection.classList.add('hidden');
    }

    openModal(elements.itemDetailModal);
}

// Fast Real-Time Search Handler
function handleSearch(query) {
    elements.searchResults.innerHTML = '';

    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) {
        elements.searchResults.innerHTML = '';
        return;
    }

    const matchedItems = MENU_ITEMS.filter(item => {
        const trTitle = item.title.tr.toLowerCase();
        const enTitle = item.title.en.toLowerCase();
        const arTitle = (item.title.ar || '').toLowerCase();
        const trDesc = item.description.tr.toLowerCase();
        const enDesc = item.description.en.toLowerCase();
        const arDesc = (item.description.ar || '').toLowerCase();
        return trTitle.includes(cleanQuery) ||
            enTitle.includes(cleanQuery) ||
            arTitle.includes(cleanQuery) ||
            trDesc.includes(cleanQuery) ||
            enDesc.includes(cleanQuery) ||
            arDesc.includes(cleanQuery);
    });

    if (matchedItems.length === 0) {
        const noResultsMsg = state.language === 'tr' ? 'Sonuç bulunamadı...' : (state.language === 'ar' ? 'لم يتم العثور على نتائج...' : 'No results found...');
        elements.searchResults.innerHTML = `<p class="search-no-results">${noResultsMsg}</p>`;
        return;
    }

    matchedItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.addEventListener('click', () => {
            closeModal(elements.searchModal);
            openDetailModal(item.id);
        });

        card.innerHTML = `
            <img class="item-card-image" src="${item.image}" alt="${t(item.title)}" onerror="this.onerror=null; this.src='assets/images/hero_bg.png';">
            <div class="item-card-info">
                <div class="item-card-header">
                    <h4 class="item-card-title">${t(item.title)}</h4>
                    <span class="item-card-price">${item.price} TL</span>
                </div>
                <p class="item-card-desc" style="-webkit-line-clamp: 1;">${t(item.description)}</p>
            </div>
        `;
        elements.searchResults.appendChild(card);
    });
}

/* ==========================================================================
   EVENT LISTENERS INITIALIZATION
   ========================================================================== */
function initEvents() {



    // Lang toggle buttons
    elements.langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            state.language = btn.getAttribute('data-lang');
            localStorage.setItem('menu_lang', state.language);
            updateUILanguage();
        });
    });

    // Theme toggle
    elements.toggleThemeBtn.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('menu_theme', state.theme);
        applyTheme();
    });

    // Back to home button
    elements.btnBackHome.addEventListener('click', () => {
        switchView('home');
    });

    // Copy WiFi password
    document.querySelectorAll('.copy-wifi').forEach(btn => {
        btn.addEventListener('click', () => {
            const pw = btn.getAttribute('data-password');
            navigator.clipboard.writeText(pw).then(() => {
                const toastMsg = state.language === 'tr'
                    ? 'WiFi Şifresi Kopyalandı: ' + pw
                    : (state.language === 'ar' ? 'تم نسخ كلمة مرور الواي فاي: ' + pw : 'WiFi Password Copied: ' + pw);
                showToast(toastMsg);
            }).catch(err => {
                console.error('Copy failed: ', err);
            });
        });
    });

    // Star rating animation
    const stars = elements.starRating.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            elements.selectedRating.value = rating;

            // Highlight selected stars
            stars.forEach((s, idx) => {
                s.classList.toggle('active', idx < rating);
            });
        });
    });

    // Survey Submit Form
    elements.surveyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const contactVal = document.getElementById('survey-contact').value;
        const commentVal = document.getElementById('survey-comment').value;
        const ratingVal = elements.selectedRating.value;

        console.log('Feedback submitted:', { ratingVal, contactVal, commentVal });

        const successMsg = state.language === 'tr'
            ? 'Geri bildiriminiz için teşekkür ederiz!'
            : (state.language === 'ar' ? 'شكراً لتعليقاتكم وآرائكم!' : 'Thank you for your feedback!');

        showToast(successMsg);
        closeModal(elements.surveyModal);

        // Reset form
        elements.surveyForm.reset();
        stars.forEach(s => s.classList.remove('active'));
        elements.selectedRating.value = '';
    });

    // Open/Close triggers for modals
    document.querySelectorAll('.open-search').forEach(btn => {
        btn.addEventListener('click', () => {
            openModal(elements.searchModal);
            setTimeout(() => elements.searchInput.focus(), 150);
        });
    });

    document.querySelectorAll('.open-survey').forEach(btn => {
        btn.addEventListener('click', () => openModal(elements.surveyModal));
    });

    document.querySelectorAll('.open-location').forEach(btn => {
        btn.addEventListener('click', () => openModal(elements.locationModal));
    });

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            const targetModal = document.getElementById(modalId);
            if (targetModal) {
                closeModal(targetModal);
            }
        });
    });

    // Search event typing
    elements.searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });

    // Click outside modal or close button circle
    document.querySelectorAll('.modal-container').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Keypress actions (escape close modals)
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal-container:not(.collapsed)');
            openModals.forEach(m => closeModal(m));
        }
    });

}

/* ==========================================================================
   APPLICATION INIT
   ========================================================================== */
function init() {
    applyTheme();
    updateUILanguage();
    initEvents();

    // Start page view
    switchView('home');
}

document.addEventListener('DOMContentLoaded', init);
