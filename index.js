let arr = ["https://thumbs.dreamstime.com/b/    environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
"https://thumbs.dreamstime.com/b/beautiful-summer-spring-meadow-blue-flowers-forget-me-nots-two-flying-butterflies-wild-nature-landscape-beautiful-182636005.jpg?w=1600",
"https://thumbs.dreamstime.com/b/beautiful-nature-morning-misty-spring-forest-sun-green-rays-44578980.jpg",
"https://thumbs.dreamstime.com/b/tiger-wild-winter-nature-amur-tiger-running-snow-action-wildlife-scene-danger-animal-cold-winter-tajga-russ-84783074.jpg",
"https://thumbs.dreamstime.com/b/concept-father-s-day-happy-family-dad-child-daughter-back-nature-park-149563964.jpg",
"https://thumbs.dreamstime.com/b/print-wallpaper-fantasy-design-modern-art-fog-forest-colored-mystic-background-magical-magic-artistic-fairytale-dream-113837169.jpg?w=1600",
"https://thumbs.dreamstime.com/b/relaxing-calm-sea-view-open-ocean-water-sunset-sky-tranquil-nature-background-infinity-horizon-concept-endless-banner-107141767.jpg",
"https://thumbs.dreamstime.com/b/panoramic-autumn-landscape-forest-stream-fall-nature-backg-sunny-day-background-79856609.jpg?w=1600",
"https://thumbs.dreamstime.com/b/concept-open-magic-book-pages-water-land-small-child-fantasy-nature-learning-copy-space-166401875.jpg",
"https://thumbs.dreamstime.com/b/scenic-nature-landscape-path-near-lake-forest-path-tunnel-trees-near-lake-scenic-nature-autumn-landscape-panorama-view-115358410.jpg?w=1600",
"https://thumbs.dreamstime.com/b/beautiful-nature-thailand-james-bond-island-reflection-reflects-water-near-phuket-61039131.jpg",
"https://thumbs.dreamstime.com/b/zen-meditation-landscape-calm-spiritual-nature-environment-stone-balance-41286757.jpg",
"https://thumbs.dreamstime.com/b/hand-holding-glass-globe-ball-tree-growing-green-nature-blur-background-eco-concept-161081206.jpg",
"https://thumbs.dreamstime.com/b/happy-autumn-woman-raising-hands-over-sunset-sky-enjoying-life-nature-beauty-female-field-looking-sun-silhouette-girl-158561957.jpg",
"https://thumbs.dreamstime.com/b/drops-floral-background-closeup-tranquil-abstract-closeup-art-photography-print-wallpaper-floral-fantasy-design-macro-photo-96994455.jpg",
"https://thumbs.dreamstime.com/b/rear-view-family-two-small-children-dog-walk-autumn-nature-young-132728082.jpg",
"https://thumbs.dreamstime.com/b/big-blue-stormy-sea-wave-isolated-white-background-climate-nature-concept-front-view-big-blue-stormy-sea-wave-isolated-white-122380356.jpg?w=1600",
"https://thumbs.dreamstime.com/b/rustic-nature-24421055.jpg",
"https://thumbs.dreamstime.com/b/mother-child-girl-winter-walk-nature-happy-family-63258053.jpg",
"https://thumbs.dreamstime.com/b/lakeside-nature-walk-way-photograph-showing-beautiful-curving-wooden-board-walkway-tropical-park-natural-style-34127577.jpg"
];

        let i = 0;
        let img = document.getElementById("slideshow-img");

        function next() {
            i++;
            if (i > arr.length - 1) {
                i = 0;
            }
            img.src = arr[i];
        }

        function prev() {
            i--;
            if (i < 0) {
                i = arr.length - 1;
            }
            img.src = arr[i];
        }