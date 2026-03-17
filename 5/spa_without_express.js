const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    res.writeHead(200, { "Content-Type": "text/html" });

    // Home Page
    if (pathname === "/") {

        res.write("<h1>Welcome to Tomato</h1>");
        res.write("<h2>Restaurant Menu</h2>");

        res.write(`
            <form action="/order" method="GET">
                Select Food Item:<br><br>
                <select name="food">
                    <option value="Pizza">Pizza</option>
                    <option value="Burger">Burger</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Sandwich">Sandwich</option>
                </select>
                <br><br>
                Enter your name:<br>
                <input type="text" name="customer"><br><br>
                <input type="submit" value="Order Now">
            </form>
        `);

        res.end();
    }

    // Order Page
    else if (pathname === "/order") {

        const food = query.food;
        const customer = query.customer;

        res.write("<h2>Order Confirmation</h2>");
        res.write("Customer Name: " + customer + "<br>");
        res.write("Food Ordered: " + food + "<br><br>");
        res.write("<h3>Your order has been placed successfully!</h3>");

        res.end();
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});