# import the Flask class from the flask module
from flask import Flask, render_template

# create the application object
app = Flask(__name__)

# use decorators to link the function to a url
@app.route('/')
def home():
    return "Ciao, World! Questa e la versione dell'esempio!"  # return a string

# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(debug=True)
