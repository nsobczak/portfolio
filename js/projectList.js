$(function () {
    $("#elastic_grid_demo").elastic_grid({
        'showAllText': 'All',
        'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
        'hoverDirection': true,
        'hoverDelay': 0,
        'hoverInverse': false,
        'expandingSpeed': 500,
        'expandingHeight': 500,
        'items':
            [
                {
                    'title': 'Squirrel',
                    'description': 'Squirrel description.',
                    'thumbnail': ['images/small/1.jpg', 'images/small/2.jpg', 'images/small/3.jpg'],
                    'large': ['images/large/squirrel.jpg', 'images/large/birds.jpg', 'images/large/twilight.jpg'],
                    'img_title': ['jquery elastic grid 1 ', 'jquery elastic grid 2', 'jquery elastic grid 3'],
                    'tags': ['Game']
                },
                {
                    'title': 'Swiss chard pumpkin',
                    'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail': ['images/small/2.jpg', 'images/small/3.jpg'],
                    'large': ['images/large/birds.jpg', 'images/large/twilight.jpg'],
                    'img_title': ['jquery elastic grid 6 ', 'jquery elastic grid 7 ', 'jquery elastic grid 8', 'jquery elastic grid 9', 'jquery elastic grid 9'],
                    'button_list':
                        [
                            {'title': 'Demo', 'url': 'http://porfolio.bonchen.net/', 'new_window': true},
                            {'title': 'Download', 'url': 'http://porfolio.bonchen.net/', 'new_window': true}
                        ],
                    'tags': ['General']
                },

                {
                    'title': 'Spinach winter purslane',
                    'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail': ['images/small/3.jpg'],
                    'large': ['images/large/squirrel.jpg', 'images/large/birds.jpg', 'images/large/twilight.jpg'],
                    'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list':
                        [
                            {'title': 'Demo', 'url': 'http://porfolio.bonchen.net/', 'new_window': true},
                            {'title': 'Download', 'url': 'http://porfolio.bonchen.net/', 'new_window': true}
                        ],
                    'tags': ['Game', 'General']
                }

            ]
    });
});