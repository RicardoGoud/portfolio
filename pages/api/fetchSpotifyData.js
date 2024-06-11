//export default async function handler(req, res) {
//    const SPOTIFY_API_URL = 'https://api.spotify.com/'; // Example endpoint
//    const ACCESS_TOKEN = 'ec32770ede3c479a905f5465053f7df6'; // You'll need to handle token refresh as needed

//    try {
//        const response = await fetch(SPOTIFY_API_URL, {
//            headers: {
//                'Authorization': `Bearer ${ACCESS_TOKEN}`
//            }
//        });

//        if (!response.ok) {
//            throw new Error(`Spotify API error: ${response.statusText}`);
//        }

//        const data = await response.json();

//        // Process the data and send email if needed

//        res.status(200).json({ message: 'Data fetched successfully', data });
//    } catch (error) {
//        res.status(500).json({ message: error.message });
//    }
//}

var client_id = '836f62547faa4879827234e7e4148393';
var redirect_uri = 'http://localhost:3000/';

var app = express();

app.get('/login', function (req, res) {

    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
});