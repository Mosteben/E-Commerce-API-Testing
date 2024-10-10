

pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("Response has Content-Type header set to application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});


pm.test("Response time is less than 200ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(200);
});


pm.test("Each product object in the response array has the required fields", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('array').that.is.not.empty;

    responseData.forEach(function(product) {
        pm.expect(product).to.have.property('id').that.is.a('number');
        pm.expect(product).to.have.property('title').that.is.a('string');
        pm.expect(product).to.have.property('price').that.is.a('number');
        pm.expect(product).to.have.property('description').that.is.a('string');
        pm.expect(product).to.have.property('category').that.is.a('string');
        pm.expect(product).to.have.property('image').that.is.a('string');
    });
});


pm.test("Response has the required fields - id, title, price, description, category, image, rating", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('array');
    
    responseData.forEach(function(product) {
        pm.expect(product).to.have.property('id');
        pm.expect(product).to.have.property('title');
        pm.expect(product).to.have.property('price');
        pm.expect(product).to.have.property('description');
        pm.expect(product).to.have.property('category');
        pm.expect(product).to.have.property('image');
        pm.expect(product).to.have.property('rating');
    });
});


pm.test("Rating count is a non-negative integer", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('array');
    
    responseData.forEach(function(product) {
        pm.expect(product.rating.count).to.be.a('number');
        pm.expect(product.rating.count).to.be.at.least(0);
    });
});


pm.test("Each product object in the response array has the correct structure", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('array').that.is.not.empty;

    responseData.forEach(function(product) {
        pm.expect(product).to.be.an('object');
        pm.expect(product).to.have.property('id').that.is.a('number');
        pm.expect(product).to.have.property('title').that.is.a('string');
        pm.expect(product).to.have.property('price').that.is.a('number');
        pm.expect(product).to.have.property('description').that.is.a('string');
        pm.expect(product).to.have.property('category').that.is.a('string');
        pm.expect(product).to.have.property('image').that.is.a('string');
    });
});


pm.test("Response has 'StartFragment' and 'EndFragment' markers", function () {
    pm.expect(pm.response.text()).to.include("StartFragment");
    pm.expect(pm.response.text()).to.include("EndFragment");
});


pm.test("Presence of specific header in the response is validated", function () {
    pm.expect(pm.response.headers.has("Content-Type")).to.be.true;
});

