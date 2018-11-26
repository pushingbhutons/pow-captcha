// insert pow-captcha where you want the captcha to appear on your site. 
// don't forget to replace "SITE_KEY" with your coinhive site key.

<form action="?" method="post">
    <!-- other form fields -->

    <script src="https://authedmine.com/lib/captcha.min.js" async></script>
    <div class="coinhive-captcha" data-hashes="1024" data-key="SITE_KEY">
        <em>Loading Captcha...<br>
        If it doesn't load, please disable Adblock!</em>
    </div>

    <input type="submit" value="Submit"/>
</form>



<!-- Add this code to the server. This is what the JS above talks to. -->
<!--
curl -X POST \
    -d "token=<coinhive-captcha-token>" \
    -d "hashes=1024" \
    -d "secret=<secret-key>" \
    "https://api.coinhive.com/token/verify"

# {"success": true, "created": 1504205981, "hashes": 1024}
-->
