const supertest = require('../mockserver');
// const res = await request(app).get('/');

describe('Test Handlers', function () {

    it('responds to get /', async () => {
   
      const response = await supertest.get('/movie-service')

      expect(response.status).toBe(200);
      expect(response.body.results[0].title).toBe('Bullet Train')

    });

    it('post record', async () => {
      //const response = await request(app).post("/users").send({
      const response = await supertest.post('/data').send({ 
        name: 'Alex', postcode: 'SW3', movie: {}, restaurant: {}
      })

      expect(response.status).toBe(200)
    })

});

 /*
        movie: {  
            adult: false,
            backdrop_path: '/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg',
            id: 718930,
            title: 'Bullet Train',
            original_language: 'en',
            original_title: 'Bullet Train',
            overview:
              "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
            poster_path: '/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg',
            media_type: 'movie',
            genre_ids: [28, 35, 53],
            popularity: 7949.491,
            release_date: '2022-07-03',
            video: false,
            vote_average: 7.495,
            vote_count: 1252,
          }, 
        restaurant: 
            {  business_status: 'OPERATIONAL',
               formatted_address: '28a Denbigh St, Lillington and Longmoore Gardens, London SW1V 2ER',
               geometry: {
                   location: { lat: 51.4915756, lng: -0.1395575 },
                   viewport: {
                                northeast: { lat: 51.49291567989271, lng: -0.1382787701072778 },
                                southwest: { lat: 51.49021602010727, lng: -0.1409784298927222 },
                             },
               },
               icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
               icon_background_color: '#FF9E67',
               icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
               name: 'Noodle House',
               opening_hours: { open_now: false },
               photos: [
                         {
                           height: 360,
                           html_attributions: [
                               '<a href="https://maps.google.com/maps/contrib/101618324453744698815">A Google User</a>',
                           ],
                           photo_reference:
                            'AcYSjRh3VcA1sTcEa9SvPK-NGX25WP_Hglhq_VLBeARHVPp8DXC9p-WWCCKknHILnsUe5p_u6fqOJMy6eVtKM0jeobfXq6js3rJptqXgP6x7pjMrmqod-mx_3A09j_p74BI9i3b_xbKcTEun1IlAHxfGKZ2tqEmfjX-Imx0-TjchPUOjleEq',
                           width: 640,
                           imgsrc:
                              'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=AcYSjRh3VcA1sTcEa9SvPK-NGX25WP_Hglhq_VLBeARHVPp8DXC9p-WWCCKknHILnsUe5p_u6fqOJMy6eVtKM0jeobfXq6js3rJptqXgP6x7pjMrmqod-mx_3A09j_p74BI9i3b_xbKcTEun1IlAHxfGKZ2tqEmfjX-Imx0-TjchPUOjleEq&key=AIzaSyC8eBAJ7v_XgjPaI1UI7Qc_d04CndplLFs',
                         },
                       ],
               place_id: 'ChIJtyJqx3AFdkgRMFuz7SYq2zg',
               plus_code: { compound_code: 'FVR6+J5 London', global_code: '9C3XFVR6+J5' },
               price_level: 2,
               rating: 2.5,
               reference: 'ChIJtyJqx3AFdkgRMFuz7SYq2zg',
               types: [
                        'meal_delivery',
                        'meal_takeaway',
                        'restaurant',
                        'food',
                        'point_of_interest',
                        'establishment',
                      ],
               user_ratings_total: 12,
             }
*/